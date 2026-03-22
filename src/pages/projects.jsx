import SMNLogo from "../assets/SMNLogo.png"
import SSNLogo from "../assets/SSNLogo.png"
import recipesLogo from "../assets/recipesLogo.png"
import HSRLogo from "../assets/HSRLogo.png"
import RRLogo from "../assets/royal_rumble_logo.png"
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import CardSection from '../components/CardSection'

const websites = () => {
  return (
    <>
        <PageHeader title="My Projects" subTitle={"Explore my projects and creations"}/>
        
        {/* Websites Section */}
        <section className="py-5  mx-auto">
            <div className="container">
                <CardSection content={
                    <>
                        {/* Website 1 */}
                        <Card 
                            iconHTML={<div className="d-flex justify-content-center"><img src={SMNLogo} alt="SMN Logo" className="website-icon" /></div>} 
                            title={"Southeastern Media Network"} 
                            disc={"School News Website for HSE High School"} 
                            link={"https://www.southeasternmedianetwork.com/"} 
                            btnText={"Visit Website"}
                        />
                        {/* Website 2 */}
                        <Card 
                            iconHTML={<div className="d-flex justify-content-center"><img src={SSNLogo} alt="SSN Logo" className="website-icon" /></div>} 
                            title={"Southeastern Sports Network"} 
                            disc={"School Sports News Website for HSE High School"} 
                            link={"https://southeasternsportsnetwork.com/"} 
                            btnText={"Visit Website"}
                        />
                        {/* Website 3 */}
                        <Card
                            iconHTML={<div className="d-flex justify-content-center"><img src={RRLogo} alt="RRLogo" className="website-icon" /></div>} 
                            title={"Royal Rumble App"}
                            disc={"Full-stack orientation management system for HSE"}
                            link={"/projects/royal-rumble"}
                            btnText={"Read Case Study"}
                            target_={''}
                        />
                    </>
                }/>
                <CardSection content={
                    <>
                        {/* Website 4 */}
                        <Card 
                            iconHTML={<div className="d-flex justify-content-center"><img src={HSRLogo} alt="HSRLogo" className="website-icon" /></div>} 
                            title={"Nike Hoosier State Relays"} 
                            disc={"Information Website for Hoosier State Relays (HSR)"} 
                            link={"https://hsr.iatccc.org/"} 
                            btnText={"Visit Website"}
                        />
                        {/* Website 5 */}
                        <Card 
                            iconHTML={<div className="d-flex justify-content-center"><img src={recipesLogo} alt="NithikSajjaRecipesLogo" className="website-icon" /></div>} 
                            title={"Nithik Sajja Recipes"} 
                            disc={'"Delicious recipes that reflect my passion for cooking"'} 
                            link={"https://recipes.nithiksajja.com/"} 
                            btnText={"Work In Progress"}
                        />
                    </>
                }/>
            </div>
        </section>
    </>
  )
}

export default websites