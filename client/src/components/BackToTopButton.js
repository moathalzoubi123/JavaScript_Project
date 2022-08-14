import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa'
import './TopButton.css'

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"

        })
    }

    return <div >

        {backToTopButton && (
            <button className="scroll" onClick={scrollUp} >
                <FaAngleDoubleUp />
            </button>
        )}
    </div>




}


export default BackToTopButton;