import { Component, createRef } from 'react';

import styles from './TextEditor.module.css';

// While this could be written as a function component using hooks it seems
// easier to write it as a class component.
export class TextEditor extends Component {
    textarea = createRef();

    constructor(props) {
        super(props);

        this.state = {
            timeout: undefined,
            value: props.value,
        };
    }

    componentDidMount() {
        const length = this.textarea.current.value.length;
        this.textarea.current.focus();
        this.textarea.current.setSelectionRange(length, length);
    }

    componentWillUnmount() {
        this.updateNow();
    }

    handleChange = (event) => {
        if (this.state.timeout) {
            clearTimeout(this.state.timeout);
        }

        this.setState({
            timeout: setTimeout(
                () => this.props.onChange(this.state.value),
                this.props.debounce || 1000
            ),
            value: event.target.value,
        });
    };

    updateNow = () => {
        if (this.state.timeout) {
            // the presence of the timeout indicates that there are pending
            // changes, commit them immediately.
            clearTimeout(this.state.timeout);
            this.setState({ timeout: undefined });
            this.props.onChange(this.state.value);
        }
    };

    render() {
        return (
            <textarea
                className={styles.host}
                onBlur={this.updateNow}
                onChange={this.handleChange}
                ref={this.textarea}
                value={this.state.value}
            />
        );
    }
}
