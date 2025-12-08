import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import CardSection from '../components/CardSection'

const websites = () => {
  return (
    <>
        <PageHeader title="My Links" subTitle={"Find me on various social platforms"}/>
        
        {/* Links Section */}
        <section className="py-5  mx-auto">
            <div className="container">
                <CardSection content={
                    <>
                        {/* Link 1 */}
                        <Card 
                            iconHTML={<i className="bi bi-youtube social-icon"></i>} 
                            title={"YouTube"} 
                            disc={"Check out my videos on YouTube"} 
                            link={"https://www.youtube.com/channel/UCp5uq3IFYIZgIBJ2a0mn0uQ"} 
                            btnText={"Visit Channel"}
                        />
                        {/* Link 2 */}
                        <Card 
                            iconHTML={<i className="bi bi-github social-icon"></i>} 
                            title={"GitHub"} 
                            disc={"See my projects on GitHub"} 
                            link={"https://github.com/AvatarNit"} 
                            btnText={"Visit Profile"}
                        />
                        {/* Link 3 */}
                        <Card 
                            iconHTML={<i className="bi bi-person-lines-fill social-icon"></i>} 
                            title={"Teacher Portfolio"} 
                            disc={"Explore my education journey"} 
                            link={"/teacherportfolio"} 
                            btnText={"Visit Portfolio"}
                            target_=''
                        />
                    </>
                }/>
            </div>
        </section>
    </>
  )
}

export default websites