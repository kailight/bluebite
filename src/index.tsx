import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";

import PageOne from 'src/pages/PageOne'
import PageTwo from 'src/pages/PageTwo'
import PageThree from 'src/pages/PageThree'

import './styles/layout.scss'

const Navigation = () => (
    <>
        <div>
            <Link to="/page-one">Page One</Link><br />
            <Link to="/page-two">Page Two</Link><br />
            <Link to="/page-three">Page Three</Link>
        </div>
    </>
);

ReactDOM.render(
<body>
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Navigation />
                </Route>
                <div id='layout'>
                    <Route path="/page-one">
                        <PageOne></PageOne>
                    </Route>
                    <Route path="/page-two">
                        <PageTwo></PageTwo>
                    </Route>
                    <Route path="/page-three">
                        <PageThree></PageThree>
                    </Route>
                </div>
            </Switch>
        </Router>
    </React.StrictMode>
</body>
,
document.getElementById('root')
);
