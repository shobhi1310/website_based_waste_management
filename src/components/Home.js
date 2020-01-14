import React from 'react'
import Slides from './Slides'
import Link from 'react-router-dom/Link'

const Home = () => {
    return (
        <div>
            <Slides/>
            <div className="body">
            <h1>A short Summary...</h1>
            <p>
            Waste management has become a huge issue in the present day world due to overpopulation and increasing generation of waste. Waste management has been something which has been heavily focused on by any government. From, ancient India, to the post British India, there has been a well laid sewer system to manage liquid waste. But, most of the solid wastes are either incinerated or dumped in landfills. Some recent examples of waste management can be seen in a few cities.
            </p>
            <p>
            In Surat, Gujarat, there has been an efficient system based on segregation of waste and also public awareness. Due to the accountability of both the government and the people, this system saw huge success. But, a similar model based on segregation of waste when implemented in Bangalore showed disastrous results. Due to lack of accountability and public awareness, the waste problem still persists today. This basically tells us that the main plan of bringing public awareness may not work in huge cities, where the convenience of users also has to be taken into account. If not, we can have a situation in huge cities which leads to an increase in harmful heavy metal content in water and soil due to improper waste management.
            </p>
            <p>
            Thus, it becomes a necessity that a proper portal for end users is designed so that they can reuse the waste in self sustained loops, within a community or a set of communities. This project is designed to help by developing a smart, self-sustainable community in the long run and supporting the government agenda of smart cities in India.
            </p>
            {/* <script src="http://rss.bloople.net/?url=https%3A%2F%2Fwww.downtoearth.org.in%2Frss%2Fenvironment&limit=5&showtitle=false&type=js"></script> */}
            </div>
        </div>
    )
}

export default Home
