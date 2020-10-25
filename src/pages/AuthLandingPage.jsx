import React from 'react';
import '../styles/LandingPage.css';
import bg from '../resources/fin.png';


function AuthLandingPage() {

    return (
        <div class="centered">
            <img src={bg} 
                alt="fin"
                height={318}
                width={546} 
            />
        </div>
    );
}

export default AuthLandingPage;