import React from 'react';

import './TextEditor.css';

export class TextEditor extends React.Component {
    textarea;

    handleChange = (event) => {
        if (this.state.timeout) {
            clearTimeout(this.state.timeout);
        }

        this.setState({
            timeout: setTimeout(() => this.props.onChange(this.state.value), this.props.debounce || 1000),
            value: event.target.value
        });
    };

    constructor(props) {
        super(props);

        this.state = {
            timeout: null,
            value: props.value
        };
    }

    componentDidMount() {
        const length = this.textarea.value.length;
        this.textarea.focus();
        this.textarea.setSelectionRange(length, length);
    }

    componentWillUnmount() {
        if (this.state.timeout) {
            // the presence of the timeout indicates that there are pending
            // changes, commit them immediately.
            clearTimeout(this.state.timeout);
            this.props.onChange(this.state.value);
        }
    }

    render() {
        return <textarea
            className="TextEditor"
            onChange={this.handleChange}
            ref={(ref) => this.textarea = ref}
            value={this.state.value}
        />;
    }
}
