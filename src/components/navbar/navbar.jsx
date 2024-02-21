import { useState } from "react";
import "./navbar.css"
import Logo from "../../assets/img/Logo.png"

const Navbar = () => {

    const [toggle, showMenu] = useState(false);

    return (
        <>
            <div className={toggle ? "sticky show-menu" : "sticky"}>
                <a href="/" >
                    <img className="nav_logo" src={Logo} alt="Legends Archives Logo" />
                </a>

                <nav className="nav">
                    <div className="nav-menu">
                        <ul className="nav-list">

                            {/* Home */}
                            <li className="nav-item">
                                <a href="/">
                                    Home
                                </a>
                            </li>

                            {/* Champions */}
                            <li className="nav-item">
                                <a href="/champions">
                                    Champions
                                </a>
                            </li>

                            {/* Game Mode */}
                            <li className="nav-item">
                                <a href="/gamemode">
                                    Game Mode
                                </a>
                            </li>

                            {/* Ranked */}
                            <li className="nav-item">
                                <a href="/ranked">
                                    Ranked
                                </a>
                            </li>

                            {/* Summoner */}
                            <li className="nav-item">
                                <a href="/summoner">
                                    Summoner
                                </a>
                            </li>

                            {/* Player */}
                            <li className="nav-item">
                                <a href="/player">
                                    Player
                                </a>
                            </li>

                        </ul>
                    </div>

                </nav>
            </div>

            {/* <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div> */}

        </>
    )

}

export default Navbar