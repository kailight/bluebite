import React from 'react';
import { useParams } from 'react-router';

const App = () => {
    const { id } = useParams<{ id: string }>();

    let Component
    if (id === 'page-one') {
        Component = (async () => await import('./pages/PageOne'))()
        console.info(Component);
    }
    if (id === 'page-two') {
        Component = (async () => await import('./pages/PageTwo'))()
    }
    if (id === 'page-three') {
        Component = (async () => await import('./pages/PageThree'))()
    }

    console.info(Component);

    return (
        <>
            <div>Render {id}</div>
        </>
    );
};

export default App;
