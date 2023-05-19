import LinkedinPerfil from '@/assets/img/icons/linkedin.png'
import GithubPerfil from "@/assets/img/icons/GitHub2.png"
import IconFooter from '@/components/footer/IconFooter'

export default () => {
  return(
    <footer className="bg-dark text-light pt-4 pb-1">
        <ul className='d-flex justify-content-center'>
          <IconFooter 
            img={GithubPerfil}
            name={"Github"}
            url={"https://github.com/FrancoKurachiUbe"}
          />
          <IconFooter 
            img={LinkedinPerfil}
            name={"Linkedin"}
            url={"https://www.linkedin.com/in/francokurachiube/"}
          />
        </ul>
        <p className="text-center text-light ms-4 mt-2">franco.kurachi.ube@gmail.com</p>
    </footer>
    )
  }