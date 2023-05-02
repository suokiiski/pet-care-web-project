import React, {useState} from "react";
import '../App.css';

function HeroSection(props) {

    return (
        <section className="hero">
            <div className='hero-content'>
            <h1 className="heroH">Yksilöllistä hoitoa lemmikillesi.</h1>
                <p>Tuliko äkkilähtö lomalle, eikä rakkaalle lemmikille löydy luotettavaa hoitajaa? <br/>
                    Iskikö pentukuume, mutta et voi sitoutua karvakaveriin vuosiksi?</p>
                <p>Meiltä löydät lenkittäjät koirallesi ja viikonlopun rapsuttajat kissoillesi. <br/>
                    Voit tarjota myös omaa aikaasi muiden lemmikeille.</p>
                <h2 className="heroH2">Tutustu tarjontaamme:</h2>
            <button className="heroB" onClick={props.onPetsButtonClick}>Lemmikit</button>
            <button className="heroB" onClick={props.onPeopleButtonClick}>Hoitajat</button>
            </div>
        </section>
    );
}

export default HeroSection;