// Boilerplate from https://dev.to/christiankastner/integrating-p5-js-with-react-i0d
// Thank you Christian Kastner!
import p5 from 'p5';
import React, { Component } from "react";
import logo_dark from './logo_dark.png';

export class SpaceTrip extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Star = class {
        constructor(x, y, size) {
            this.x = x;
            this.y = y;
            this.size = size;
        }
    }

    Sketch = (p) => {
        const N_STARS = 300;

        let wh = p.windowHeight;
        let ww = p.windowWidth;
        let stars = [];
        let img;

        let createStar = () => {
            let sx = Math.random() * ww;
            let sy = Math.random() * wh;
            let size = Math.random() * 5;
            return new this.Star(sx, sy, size);
        }

        p.preload = () => {
            img = p.loadImage(logo_dark);
        }

        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight);
            p.background(p.color(0));
            p.frameRate(30);
            for (let i=0; i<N_STARS; i++) {
                stars.push(createStar());
            }
        }

        p.draw = () => {
            // Draw the stars
            p.background(p.color(0));
            p.stroke(255);
            stars.forEach((s, ix) => {
                s.y -= 1;
                p.ellipse(s.x, s.y, s.size, s.size);
            });

            // Display the logo
            const LOGO_SIZE = 200;
            p.image(img, (ww-LOGO_SIZE)/2, (wh-LOGO_SIZE)/2, LOGO_SIZE, LOGO_SIZE);

            // Make new stars if any went offscreen
            let onScreen = stars.filter((s, ix) => s.y > 0);
            for (let i=0; i<N_STARS-onScreen.length; i++) {
                let size = Math.random() * 5;
                let sx = Math.random() * ww;
                let sy = wh+size;
                onScreen.push(new this.Star(sx, sy, size));
            }
            stars = onScreen;
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef}>

            </div>
        )
    }
}