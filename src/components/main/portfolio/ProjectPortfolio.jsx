import React from 'react';
import PrevIcon from "@/components/icons/PrevIcon"
import NextIcon from "@/components/icons/NextIcon"
import GitHub from "@/components/icons/GitHub"

export default ({Project}) => { 

    return(
        <>
    <div className="container-fluid px-4 pt-1">
        <div className="row bg-white rounded mt-5 mb-5">
                <div className='d-flex align-items-end  py-2 border-bottom ps-4'>
                    <img src={Project.logo} alt={Project.name} />
                    <h2 className='ms-2'>{Project.nombre}</h2>

                </div>
            <div className="col-sm-12 col-lg-6 mt-4 ps-3">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner shadow-lg">
                                <div key={Project.img} className="carousel-item active">
                                    <img className="img-fluid" src={Project.img} alt="E-comerce"/>
                                </div>
                        {
                            Project.ArrayImg.map(img =>
                                    
                                <div key={img.name} className="carousel-item">
                                    <img className="img-fluid" src={img.name} alt="E-comerce"/>
                                </div>        
                            )
                        }
                    </div>
              
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <PrevIcon/>
                    </button>
                    <button className=" carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <NextIcon/>
                    </button>
                </div>
            </div>
            <div className="col-sm-12 col-lg-6  mt-4 pe-3"> 
                    <h4 className="h5 ">Realizado con:</h4>
                    
                    <ul className="border pt-2 pb-1">
                        {
                            Project.lenguajes.map(item => 
                                <li key={item.name} className="flex ms-3 mb-2">
                                    <img className="icon-detalle me-2" src={item.icon} alt={item.name} />
                                    <span>{item.name}</span>
                                </li>
                            )
                        } 
                    </ul>
                    <div dangerouslySetInnerHTML={{ __html: Project.text }} />
            </div>
            
            <div className="d-flex col-12  justify-content-center justify-content-md-end border-top py-3 px-3 mt-4">
                <a href={Project.github} target="_blank" className="btn btn-dark">
                    <GitHub/>
                    <span className="ms-2 align-middle">GitHub</span>
                </a>
                <a href={Project.web} target="_blank"  className="btn btn-primary ms-3">
                    Visitar Web
                </a>
            </div>
        </div>
    </div>
    </>
    )
}