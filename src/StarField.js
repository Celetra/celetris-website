// Boilerplate from https://dev.to/christiankastner/integrating-p5-js-with-react-i0d
// Thank you Christian Kastner!
import p5 from 'p5';
import React, { Component } from "react";
import logo_dark from './logo_dark.png';

export class StarField extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Star = class {
        constructor(x, y, size) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = '#ffffff';
        }
    }

    Sketch = (p) => {
        const STAR_SIZE = 6;
        const STAR_SPEED = 2.5;
        const NAVBAR_HEIGHT = .085; // 8.5 vh
        // Sets bounds for how far on screen the mouse should be for extra stars
        const M_TOL = 10;
        // Extended off screen width & height. Stars won't be removed until they are beyond the extended area.
        const EXT = 100; 

        let wh = p.windowHeight * (1 - NAVBAR_HEIGHT);
        let ww = p.windowWidth;
        const N_STARS = 300 * ww/1080;
        let stars = [];
        let img;

        let createStar = () => {
            let sx = Math.random() * ww;
            let sy = Math.random() * wh;
            let size = Math.max(Math.random(), 0.02) * STAR_SIZE;
            let star = new this.Star(sx, sy, size);
            return star;
        }

        p.preload = () => {
            img = p.loadImage(logo_dark);
        }

        p.setup = () => {
            p.createCanvas(ww, wh);
            p.background(p.color(0));
            p.frameRate(30);
            for (let i=0; i<N_STARS; i++) {
                stars.push(createStar());
            }
        }

        p.draw = () => {
            p.background(p.color(0));
            p.noStroke();

            let mouseDy = 2 * (wh/2 - p.mouseY) / wh;
            let mouseDx = 2 * (ww/2 - p.mouseX) / ww;

            // Occasionally create a random star at the mouse location
            // Mouse must be on screen
            if (Math.random() > 0.98 && M_TOL < p.mouseY && p.mouseY < wh - M_TOL && M_TOL < p.mouseX && p.mouseX < ww - M_TOL) {
                let rSize = Math.max(2, Math.random() * STAR_SIZE);
                let mStar = new this.Star(p.mouseX, p.mouseY, rSize);
                mStar.isMouse = true;
                let randVal = () => { return Math.floor(255*Math.random()); } 
                mStar.color = 'rgb(' + randVal() + ',' + randVal() + ',' + randVal() + ')';
                console.log(mStar.color);
                stars.push(mStar);
            }

            // Draw the stars
            stars.forEach((s, ix) => {
                s.y += STAR_SPEED * s.size / STAR_SIZE * mouseDy;
                s.x += STAR_SPEED * s.size / STAR_SIZE * mouseDx;
                if (Math.abs(p.mouseY - s.y) < s.size && Math.abs(p.mouseX - s.x) < s.size && !s.isMouse) {
                    s.color = '#fbff19'; // Yellow
                }
                p.fill(p.color(s.color));
                p.ellipse(s.x, s.y, s.size, s.size);
            });

            // Display the logo
            const LOGO_SIZE = 200;
            p.image(img, (ww-LOGO_SIZE)/2, (wh-LOGO_SIZE)/2, LOGO_SIZE, LOGO_SIZE);

            // Make new stars if any went offscreen
            let starsOnScreen = stars.filter((s, ix) => -EXT < s.y && s.y < wh + EXT && -EXT < s.x && s.x < ww + EXT);
            for (let i=0; i<N_STARS-starsOnScreen.length; i++) {
                let size = Math.max(Math.random(), 0.02) * STAR_SIZE;
                let sx, sy;
                let startFromX = Math.random() > 0.5;
                if (mouseDx > 0 && mouseDy > 0) {
                    if (startFromX) {
                        sx = -size;
                        sy = Math.random() * wh - size;
                    } else {
                        sx = Math.random() * ww - size;
                        sy = -size;
                    }
                } else if (mouseDx > 0 && mouseDy < 0) {
                    if (startFromX) {
                        sx = -size;
                        sy = Math.random() * wh + size;
                    } else {
                        sx = Math.random() * ww - size;
                        sy = wh + size;
                    }
                } else if (mouseDx < 0 && mouseDy > 0) {
                    if (startFromX) {
                        sx = ww + size;
                        sy = Math.random() * wh - size;
                    } else {
                        sx = Math.random() * ww + size;
                        sy = -size;
                    }
                } else { // mouseDx < 0 && mouseDy < 0
                    if (startFromX) {
                        sx = ww + size;
                        sy = Math.random() * wh - size;
                    } else {
                        sx = Math.random() * ww + size;
                        sy = wh + size;
                    }
                }

                /*
                let sx = Math.random() * ww;
                let sy = wh+size;
                */
                starsOnScreen.push(new this.Star(sx, sy, size));
            }
            stars = starsOnScreen;
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef} className="animation">

            </div>
        )
    }
}