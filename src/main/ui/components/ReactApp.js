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
                    {
                        this.state.messages.map( msg => 
                            <ul>
                                <li key={msg.id}> 
                                    <li> Message id: {msg.id}</li>
                                    <li> Message: {msg.message}</li>
                                    <li> Some Int Value: {msg.testInt}</li>
                                </li>
                            </ul>
                        )
                    }
                </div>
            
            </div>
        );
    }
}

export default ReactApp;