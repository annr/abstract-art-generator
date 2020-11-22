import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useParams,
    // useRouteMatch
} from "react-router-dom";

import Number1 from "./Number1.js";

function Home() {
    return (
        <Router>
            <Number1 />
            {/* <h1>Home</h1>
            <h2>Newest Additions</h2>
            <h2>Most Popular</h2> */}
        </Router >
    );
}

export default Home;
