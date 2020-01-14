import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slides = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="pic1.jpg"
                    alt="First slide"
                    height = "750vh"
                    />
                    <Carousel.Caption>
                        <div className="content">
                    <h3>Unrecycled plastic waste</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="pic2.jpg"
                    alt="Third slide"
                    height = "750vh"
                    />

                    <Carousel.Caption>
                        <div className="content">
                    <h3>Manual scavenging</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="pic3.jpg"
                    alt="Third slide"
                    height = "750vh"
                    />

                    <Carousel.Caption>
                        <div className="content">
                    <h3>Uncounted waste production</h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Slides
