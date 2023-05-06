import * as React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>This is your Home.</h1>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Home;