import { Link } from 'react-router-dom'
import kyocoImg from '@/assets/img/kyoco/kyoco-Card.png'
import IMGRickandMorty from "@/assets/img//RickandMorty/RickandMorty-Card.jpg"
import IMGFrontMentori from "@/assets/img/F-M-Ecomerce/active-states-basket-empty-SM.jpg"

export default () => {
    return(
        <div id="Portfolio" className='container mt-5 pt-5'>
            <h2 className='titulo text-sky mt-5'>Portfolio</h2>
            <div className='border-sky mx-4 mb-3'></div>

            <div className="row pb-5 justify-content-center px-4">

                <Link to="/portfolio/Kyoco"  className="mt-4 p-2 col-md-4 text-black text-decoration-none" data-toggle="modal" data-target="#kyocoLink">
                    <div className='bg-white p-3 card'>
                        <img className="img-fluid border" src={kyocoImg} alt="Sitio Web E-Comerce"/>
                        <h5 className="h3 ms-2 mt-2">Kyoco</h5>
                        <div className='border mb-2'></div>
                        <p className='ms-3'>Javascript | Bootstrap | Css</p>
                        
                    </div>
                </Link>

                <Link to="/portfolio/FrontedMentori"  className="mt-4 p-2 col-md-4 text-black text-decoration-none" data-toggle="modal" data-target="#F-M-Ecomerce-link">
                    <div className='bg-white p-3 card'>
                        <img className="img-fluid border" src={IMGFrontMentori} alt="Sitio Web E-Comerce"/>
                        <h5 className="h3 ms-2 mt-2">Fronted Mentori</h5>
                        <div className='border mb-2'></div>
                        <p className="ms-3">ReactJS | TailwindCSS</p>
                    </div>
                </Link>

                <Link to="/portfolio/RickAndMorty" className="mt-4 p-2 col-md-4 text-black text-decoration-none">
                    <div className='bg-white p-3 card'>
                        <img className="img-fluid border" src={IMGRickandMorty} alt="Sitio Web E-Comerce"/>
                        <h5 className="h3 ms-2 mt-2">Rick and Morty</h5>
                        <div className='border mb-2'></div>
                        <p className="ms-3">ReactJS | TailwindCSS</p>
                    </div>
                </Link>

            </div>
        </div>
    )
}