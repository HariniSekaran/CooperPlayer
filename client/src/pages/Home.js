import React from 'react';
const image = require('../images/home.jpg');

function Home() {
    return (
        <div className='home-page'>
            <img style={{marginLeft:"30%", marginTop:"100px"}} width={"500px"} src={image} alt='music' />
            <div style={{marginLeft:"33%"}}>Welcome to Cooper Player. Enjoy Your Favourite Songs!</div>
        </div>
    )
}

export default Home
