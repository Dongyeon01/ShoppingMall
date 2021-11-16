import React from 'react';
import './App.css';

function Jumbotron() {
    return(
        <div>
            <br></br>
            <div className="Jumbotron">
                <h1 className="display-4">ShoppingMall</h1>
                <br></br>
                <p className="lead">쇼핑몰</p>
                <br></br><br></br>
                <p style={{textAlign:"right"}} className="leand"></p>
            </div>
        </div>
    )
}

export default Jumbotron;