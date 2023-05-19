import React from "react"
import Cv from "@/assets/img/CV-FrancoKurachiUbe.pdf"
import Descargar from "../icons/Descargar"
export default () => {
return(
        <a className="btn" href={Cv} download="CV-FrancoKurachiUbe.pdf">
            <Descargar/>
        </a>
)}