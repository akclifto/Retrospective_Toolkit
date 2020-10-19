import axios from 'axios';
// call the backend with the users login information
async function loginController (user, pass) {
    // call axios post and await
    try {
        const res = await axios.post('/api/users/login', 
        {
            email: user, 
            password: pass
        })
        if (res.status === 204) {
            return true;
        }
        return false;
        
    }
    catch(err) {
        console.error(err);
    }

    // if good proceed to App

    //if not, show appropriate message
}

export default loginController;