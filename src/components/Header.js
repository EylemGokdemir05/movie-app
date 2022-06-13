import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../navigation/Router";
import "../style/Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">Movie App</div>
                <div className="nav-item">
                    <div className="nav-links">
                        {routes.map((route) => {
                            console.log('route: ',route)
                            // return (
                            //     route.isHeaderElement ?
                            //     <>
                            //     <li key={route.title}>
                            //         <Link to={route.path} className="link">{route.title}</Link>
                            //     </li>
                            //     </>
                            //     : null
                            // )
                            if (route.isHeaderElement) {
                                return (
                                  <li key={route.title}>
                                    <Link to={route.path} className='link'>
                                      {route.title}
                                    </Link>
                                  </li>
                                );
                              }
                        })}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;