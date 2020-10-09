import React from 'react';

class ReactTest extends React.Component {

    state = {
        head: '',
        para: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevState.head.length !== this.state.head.length) {
            
        }
    }

    
    render() {

        const head = 'This is the react app';
        const para = 'Some text about some stuff';
        
        return (
            <div>

                <div>
                    <h1>{head}</h1>
                    <p> {para}</p>
                </div>
            
            </div>
        );
    }
}

export default ReactTest;



