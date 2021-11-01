import React from "react";
import "./titlepage.scss";
import { Link } from "react-router-dom";


const TitlePage = () => {
    return (
        <main className="titlepage">
            <h1 className="title" aria-label="testABLE">testABLE</h1>
            <span className="sub-title" aria-label="Online code testing for everyone.">Online code testing for everyone.</span>
            <ul>

                <li className="link ">
                    <Link className="option" to="/visual-impairment">
                        Visual Impairment
                    </Link>
                </li>
                <li className="link ">
                    <Link className="option" to="/hearing-impairment">
                        Hearing Impairment
                    </Link>
                </li>
                <li className="link ">
                    <Link className="option" to="/physical-impairment">
                        Physical Impairment
                    </Link>
                </li>
                <li className="link ">
                    <Link className="option" to="/visual-hearing-impairment">
                        Visual + Hearing  Impairment
                    </Link>
                </li>
                <li className="link ">
                    <Link className="option" to="/hearing-physical-impairment">
                        Hearing + Physical Impairment
                    </Link>
                </li>
                <li className="link ">
                    <Link className="option" to="/visual-physical-impairment">
                        Physical + Visual Impairment
                    </Link>
                </li>
                <li className="link ">
                    <Link className="option" to="/visual-hearing-physical-impairment">
                        Visual + Hearing + Physical Impairment
                    </Link>
                </li>
            </ul>
        </main >
    );
};

export default TitlePage;
