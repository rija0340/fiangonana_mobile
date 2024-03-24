import { Link } from "react-router-dom";
function SideBar() {

    return (
        <>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Fiangonana</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    <li className="">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Raharaha</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <Link to="/raharaha">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/raharaha/recherche">Recherche</Link>
                            </li>
                            <li>
                                <Link to="/raharaha/saisie">Saisie</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="#filazana" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Fiazana</a>
                        <ul className="collapse list-unstyled" id="filazana">
                            <li>
                                <Link to="/filazana">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/filazana/saisie">Saisie</Link>
                            </li>

                        </ul>
                    </li>
                    <li className="">
                        <a href="#donnee" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Données</a>
                        <ul className="collapse list-unstyled" id="donnee">
                            <li>
                                <Link to="/donnee">Accueil</Link>
                            </li>

                        </ul>
                    </li>
                    {/* <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li> */}

                </ul>

            </nav>
        </>
    )

}

export default SideBar