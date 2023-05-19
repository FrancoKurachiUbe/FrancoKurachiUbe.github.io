import Perfil from "@/assets/img/perfil.png"
export default () => {
    return(
        <>
            <div id="SobreMi" className="baner"></div>

            <div className="aboutMe container bg-white rounded  ">
                <div className="position-relative fotoPerfil ">
                    <div className="position-absolute top-0 start-50 translate-middle mx-auto">
                        <img src={Perfil} alt="Foto de Perfil"/>
                    </div>
                </div>
                
                <div>
                    <h1 className=" d-flex justify-content-center mb-1n">Franco Kurachi</h1>
                    <p className="programador d-flex justify-content-center ">Programador Web Full Stack</p>
                    <div className="row justify-content-center px-4 pb-4">
                        <div className="container-fluid col-8 border mb-5 "></div>
                        <div className="col-sm-12 col-md-6 text-secondary rounded-start px-2 sobreMi ">
                            <p>
                                Soy un programador junior autodidacta con habilidades en JavaScrip, Html5, css, Bootstrap, Vue, React, entre otros y con algunos años de estudios en una carrera de diseño web en la escuela DaVinci.  Mi experiencia en el desarrollo de sitios web se basa en proyectos personales.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 text-secondary rounded-end px-2 sobreMi">
                            <p>
                                Me encanta trabajar en equipo para desarrollar soluciones creativas e innovadoras. Estoy buscando una oportunidad para unirme a una empresa de tecnología en la que pueda seguir aprendiendo y desarrollando mis habilidades como programador.
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}