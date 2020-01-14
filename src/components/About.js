import React from 'react'
import labels from './format'

const About = () => {
    return (
        <div className="body">
            <p>Waste management is a pressing issue in today’s world. India alone generates around 62 million tonnes of domestic waste. It is the need of the hour to manage such gargantuan amounts of waste and utilize it for a sustainable future. This pressing problem is the main and sole focus of our project. Our project intends to create an interface between various end users, so that they monetarily benefit by selling their waste, and also buying some items which may be a waste product for other users, at a cheap and nominal rate. We have built a two pronged approach which has a web application, and a mobile application for the convenience of end users. By categorizing waste and helping people to sustainably reuse their waste using our interface, we believe that we are helping the world take a baby step towards an eco-friendly future!! </p>
            <ul>Waste Categories:
            <li>BIODEGRADABLE</li>
            <li>NON BIODEGRADABLE</li>
            </ul>
            <p>We have categorised waste into following types accordingly:</p>
            {
                labels.map((l)=>
                <ul><strong>{l.category}</strong>{
                    l.types.map((c)=><li>{c}</li>)
                }</ul>)
            }
        </div>
    )
}

export default About
