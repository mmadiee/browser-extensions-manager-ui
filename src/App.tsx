import React from 'react';

//Components
import Header from './components/Header';
import ExtensionsContainer from './components/ExtensionsContainer';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
    return (
        <ThemeProvider>
            <Header></Header>
            <ExtensionsContainer></ExtensionsContainer>
        </ThemeProvider>
    )
}

export default App;