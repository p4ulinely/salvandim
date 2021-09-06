import React from 'react';

import Routes from './src/Routes';
import { AuthProvider } from './src/contexts/AuthContext'

const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
};

export default App;