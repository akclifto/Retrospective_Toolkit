import React from 'react';
import axios from 'axios';

const MSG_API_URL = "http://localhost/8080/messages";

class MessageService extends React.Component {

    getMessages() {
        return axios.get(MSG_API_URL);
    }
}

export default new MessageService();