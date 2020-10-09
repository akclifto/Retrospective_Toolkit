import React from 'react';


class ReactTest extends React.Component {

    state = {
        head: '',
        para: '',

    };

    // componentDidUpdate(prevProps, prevState) {

    // }

    
    render() {

        const head = 'This is the react app!';
        const para = 'Some text about some stuff';
        
        return (
            <div>

                <h1>Proof of Concept:</h1>

                <div>
                    <h2>{head}</h2>
                    <p> {para}</p>
                </div>
            
            </div>
        );
    }
}

export default ReactTest;



