import React from 'react';
// import GetJavaService from './GetJavaService';

class TestJava extends React.Component {

    state = {
        java = ''
    }


    componentDidMount() {
        GetJavaService.getTest().then((response) => {
            this.setState({java: response.data})
        });
    }

    render() {
        <div>
            <h1>Getting some info from the java backend:</h1>
            <p>{this.state.java}</p>
        </div>
    }
}

export default TestJava;