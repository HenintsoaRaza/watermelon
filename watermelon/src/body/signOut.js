import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';


function signOut() {
    return (

        <Carousel >
            <Carousel.Item >
                <img
                    className="h-75 w-100"
                    src={image1}
                    width="800"
                    height="400"
                />
                <Carousel.Caption>
                    <h3>Easy Transfer</h3>
                    <p>Watermelon allows you to share money easily with your loved ones.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item >
                <img
                    className="h-75 w-100"
                    src={image2}
                    width="800"
                    height="400"
                />
                <Carousel.Caption>
                    <h3>Many cards in one app</h3>
                    <p>You can manage many cards with Watermelon.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                <img
                    className="h-75 w-100"
                    src={image3}
                    width="800"
                    height="400"
                />
                <Carousel.Caption>
                    <h3 class="text-dark">Simplicity</h3>
                    <p class="text-dark">Everybody can get an account, it's easy.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default signOut;