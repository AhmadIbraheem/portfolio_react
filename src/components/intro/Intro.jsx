import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();
    useEffect(
        () => {
            init(textRef.current, {
                showCursor: false,
                backDelay: 1500,
                //showCursor: true,
                strings: ['Frontend Developer', 'Backend Developer', 'Software Enginner']
            })

        }, []
    )
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man-12316.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>John Doe</h1>
                    <h3> <span ref={textRef} className="ityped-cursor"></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
