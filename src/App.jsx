import '@/index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavHeader from '@/components/header/NavHeader'
import IndexMain from '@/components/main/IndexMain'
import ProjectPortfolio from '@/components/main/portfolio/ProjectPortfolio'
import IndexFooter from '@/components/footer/IndexFooter'

import data from "./data/project.json"
const Projects = data[0]
const Icons = data[1]

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
          <NavHeader/>
            <Routes>
              <Route path="/" element={<IndexMain Icons={Icons}/> } />
              <Route path="/portfolio/Kyoco" element={<ProjectPortfolio Project={Projects[0]}/>}/>
              <Route path="/portfolio/FrontedMentori" element={<ProjectPortfolio Project={Projects[1]}/>}/>
              <Route path="/portfolio/RickAndMorty" element={<ProjectPortfolio Project={Projects[2]} />}/>
            </Routes>
          <IndexFooter/>
        </BrowserRouter>     
    </div>
  )
}
export default App

