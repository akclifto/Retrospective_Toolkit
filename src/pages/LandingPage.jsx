import React from 'react';
import '../css/LandingPage.css';
import bg from '../resources/fin.png';


function LandingPage() {

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

export default LandingPage;