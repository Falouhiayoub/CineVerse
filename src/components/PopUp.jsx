import React from 'react'

const PopUp = () => {
    return (
        <div className="welcome-popup-overlay" id="welcomeOverlay">
            <div className="welcome-popup">
                <h2>Welcome to CineVerse 🎬</h2>
                <p>Your gateway to the world of amazing movies!</p>
                <button id="closePopup">Enter Website</button>
            </div>
        </div>
    )
}

export default PopUp
