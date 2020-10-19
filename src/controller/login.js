import axios from 'axios';
// call the backend with the users login information
async function loginController (user, pass) {
    // call axios post and await
    try {
        await axios.post('/api/users/login', 
        {
            email: user, 
            password: pass
        })
        .then(res => {
            if (res.status === 204) {
                return true;
            }
            return false;
        })
    }
    catch(err) {

    }

    // if good proceed to App

    //if not, show appropriate message
}

export default loginController;