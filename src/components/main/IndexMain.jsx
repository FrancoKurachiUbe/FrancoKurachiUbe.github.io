import SobreMiMain from './SobreMiMain'
import IndexPortfolioMain from '@/components/main/portfolio/IndexPortfolioMain.jsx'
import SkillsMain from "@/components/main/SkillsMain"
export default ({Icons}) => {
    return(
        <>
        <SobreMiMain/>
        <IndexPortfolioMain/>
        <SkillsMain Icons={Icons}/>
        </>
    )
}