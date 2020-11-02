import React from 'react';
import '../styles/LandingPage.css';
import Header from '../components/Header';
import bg from '../resources/fin.png';



function AuthLandingPage() {

    return (

        <div>

            <div class="centered">
                <img src={bg} 
                    alt="fin"
                    height={318}
                    width={546} 
                />
            </div>
        
        </div>
    );
}

export default AuthLandingPage;