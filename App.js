import React from 'react';

import Routes from './src/Routes';

import { AuthProvider } from './src/contexts/AuthContext'
import { FirestoreProvider } from './src/contexts/FirestoreContext'

const App = () => {
    return (
        <AuthProvider>
            <FirestoreProvider>
                <Routes />
            </FirestoreProvider>
        </AuthProvider>
    );
};

export default App;