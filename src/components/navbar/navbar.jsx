import { useState } from "react";
import "./navbar.css"
import Logo from "../../assets/Logo.png"

const Navbar = () => {

    const [toggle, showMenu] = useState(false);

    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <a href="#home">
                    <img src={Logo} alt="Legends Archives Logo" />
                </a>

                <nav className="nav">

                    <div className="nav-menu">
                        <ul className="nav-list">

                            {/* Home */}
                            <li className="nav-item">
                                <a href="#">
                                    Home
                                </a>
                            </li>

                            {/* Champions */}
                            <li className="nav-item">
                                <a href="#">
                                    Champions
                                </a>
                            </li>

                            {/* Game Mode */}
                            <li className="nav-item">
                                <a href="#">
                                    Game Mode
                                </a>
                            </li>

                            {/* Ranked */}
                            <li className="nav-item">
                                <a href="#">
                                    Ranked
                                </a>
                            </li>

                            {/* Summoner */}
                            <li className="nav-item">
                                <a href="#">
                                    Summoner
                                </a>
                            </li>

                            {/* Player */}
                            <li className="nav-item">
                                <a href="#">
                                    Player
                                </a>
                            </li>

                        </ul>
                    </div>

                </nav>
            </aside>

            <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>

        </>
    )

}

export default Navbar