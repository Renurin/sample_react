import React from "react";
import kiss from '../../assets/kiss-shot.png'

export default function Header() {
    return(<div>
            <header>
                <div className="container-fluid text-center">
                    <img src={kiss} alt="Random kiss-shot image" className="img-fluid"/>
                </div>
            </header>
        </div>
    )
}