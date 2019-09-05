import React from 'react';

function About() {
    return (
        <React.Fragment>
            <div className={'about'}>
                <h1>
                    About
                </h1>
                <p>
                    Simple todo React App with React-router and Axios.
                </p>
                <p>
                    It takes todos from jsonplaceholder and render it.
                </p>
                <p>
                    You can also add or remove your own todo.
                </p>
            </div>
        </React.Fragment>
    );
}

export default About;
