import React from "react";
import kiss from '../../assets/kiss-shot.png'

export default function Header() {
    return(<div>
            <header>
                <div className="container-fluid text-center">
                    <img src={kiss} alt="Random kiss-shot image" />
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a href="/Contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}