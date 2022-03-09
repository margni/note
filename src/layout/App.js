import { lazy, Suspense } from 'react';

import { AuthContext, AuthProvider } from '../context/AuthContext';
import { InstallProvider } from '../context/InstallContext';
import { Loader } from '../component/Loader';
import { SignIn } from '../component/SignIn';

const MainModule = lazy(() => import('./MainModule'));

export const App = () => (
    <InstallProvider>
        <AuthProvider>
            <AuthContext.Consumer>
                {({ signInWithGoogle, user }) =>
                    user ? (
                        <Suspense fallback={<Loader />}>
                            <MainModule />
                        </Suspense>
                    ) : (
                        <SignIn onClick={signInWithGoogle} />
                    )
                }
            </AuthContext.Consumer>
        </AuthProvider>
    </InstallProvider>
);
