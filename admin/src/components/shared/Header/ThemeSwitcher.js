import React, { useState, useEffect } from "react";
import { BsSun } from "react-icons/bs";
import './useThemeSwitcher.scss'
import { BiMoon } from 'react-icons/bi'

function ThemeSwitcher(props) {

    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode]);

    return (
        <div
            className="mode-switcher-container"
        > 
        
            <div className={mode === "dark" ? 'nav-mode-switch nav-mode-switch-active' : 'nav-mode-switch'} 
                onClick={() => setMode(mode => (mode === "dark" ? "light" : "dark"))}
            >
                <div className='icon'><BiMoon /></div>
            </div> 
                           
        </div>
    );
}

export default ThemeSwitcher