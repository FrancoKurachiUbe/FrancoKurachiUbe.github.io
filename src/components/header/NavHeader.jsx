import { Link  } from "react-router-dom"
import NavLinkHeader from "@/components/header/NavLinkHeader";
import DescargarCvHeader from "./DescargarCvHeader";
import GitHub from "../icons/GitHub";
import Linkedin from "../icons/Linkedin";
export default () => {
    return(
      <header>
        <nav className="navbar navbar-light fixed-top navbar-expand-lg bg-light">
          <div className="container-fluid ms-4">
            <Link title="Franco Kurachi" className="logo navbar-brand text-light" to="/">
              <span className="logo">Franco Kurachi</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ps-4" id="navbarNavDropdown">
              <div className="d-lg-flex container-fluid pb-1">
                <ul className="flex-grow-1 navbar-nav">
                  <NavLinkHeader props={"SobreMi"}/>
                  <NavLinkHeader props={"Portfolio"}/>
                  <NavLinkHeader props={"Skills"}/>
                </ul>
                <a href="https://github.com/FrancoKurachiUbe" target='_blank' className="btn ">
                  <GitHub/>
                </a>
                <a href="https://www.linkedin.com/in/francokurachiube/" target='_blank' className="btn">
                  <Linkedin/>
                </a>
                <DescargarCvHeader/>
              </div>
            </div>
          </div>
        </nav>
      </header>    
    )
}