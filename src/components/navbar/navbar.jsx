import { useState } from "react";
import "./navbar.css"
import Logo from "../../assets/img/Logo-Original.png"

const Navbar = () => {

    const [toggle, showMenu] = useState(false);

    return (
        <>
            <div className={toggle ? "fixed show-menu" : "fixed"}>
                <a href="/" className="link-logo">
                    <img className="nav-logo" src={Logo} alt="Legends Archives Logo" />
                </a>

                <nav className="nav">
                    <div className="nav-menu">
                        <ul className="nav-list">

                            {/* Home */}
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    Home
                                </a>
                            </li>

                            {/* Champions */}
                            <li className="nav-item">
                                <a href="/champions" className="nav-link">
                                    Champions
                                </a>
                            </li>

                            {/* Game Mode */}
                            <li className="nav-item">
                                <a href="/gamemode" className="nav-link">
                                    Game Mode
                                </a>
                            </li>

                            {/* Ranked */}
                            <li className="nav-item">
                                <a href="/ranked" className="nav-link">
                                    Ranked
                                </a>
                            </li>

                            {/* Summoner */}
                            <li className="nav-item">
                                <a href="/summoner" className="nav-link">
                                    Summoner
                                </a>
                            </li>

                            {/* Player */}
                            <li className="nav-item">
                                <a href="/player" className="nav-link">
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