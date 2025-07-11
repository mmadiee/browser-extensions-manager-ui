import React from 'react';

//Components
import Header from './components/Header';
import Tab from './components/Tabs';
import ExtensionsContainer from './components/ExtensionsContainer';

const App = () => {
    return (
        <>
            <Header></Header>
            <Tab></Tab>
            <ExtensionsContainer></ExtensionsContainer>
        </>
    )
}

export default App;