import React from 'react';
import MessageService from '../service/MessageService';


class ReactApp extends React.Component {

    // state = {
    //     messages: []
    // };

    constructor(props){
        super(props)
        this.state = {
            messages:[]
        }
    }

    componentDidMount() {
        MessageService.getMessages().then((response) => {
            this.setState( { messages: response.data } )
        });
    }

    render() {

        const head = 'This is from the React';
        const para = 'This text is located on the frontend of the application';
        
        return (
            <div>

                <h1>Proof of Concept: React with Java Backend</h1>

                <div>
                    <h2>{head}</h2>
                    <p> {para}</p>
                </div>

                <div>
                <h3>Calling Backend Java Service to get some Messages:</h3>
                    {
                        this.state.messages.map( msg => 
                            <p>
                                <ul key={msg.id}> 
                                    <li> id: {msg.id} <br/></li>
                                    <li> Message: {msg.message}<br/></li>
                                    <li> Some Int Value: {msg.testInt}<br/></li>
                                </ul>
                            </p>
                        )
                    }
                </div>
            
            </div>
        );
    }
}

export default ReactApp;