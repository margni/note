import { render } from '@testing-library/react';

import { InstallContext } from '../context/InstallContext';

import { InstallNotifier } from './InstallNotifier';

test('Shows button when deferredPrompt becomes available.', () => {
    let deferredPrompt;

    const wrapper = ({ children }) => (
        <InstallContext.Provider value={deferredPrompt}>
            {children}
        </InstallContext.Provider>
    );

    const { container, rerender } = render(<InstallNotifier />, { wrapper });

    expect(container.firstChild).toBeFalsy();

    deferredPrompt = {};

    rerender(<InstallNotifier />);

    expect(container.firstChild).toBeTruthy();
});
