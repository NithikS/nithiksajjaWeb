import PageHeader from "../../components/PageHeader"
import profilePic from "../../assets/profilePic.png"
import { Link } from "react-router-dom"

const teacherPortfolioHomepage = () => {
  return (
    <>
        <PageHeader title="Teacher Portfolio" subTitle={"Welcome to my teaching portfolio!"}/>
        <section id="biography" className="py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <img  id="profileTeacherPic" src={profilePic} alt="Nithik Sajja" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="section-title darkBlueText">Mr. Nithik Sajja</h2>
                                <p>During the 2025–26 school year, I am taking Principles of Teaching, dual-enrolled with Indiana University’s F200: Examining Self as Teacher. This opportunity is helping me explore the field of education, strengthen my teaching skills, and better understand what it means to support students in meaningful ways.</p>
                            </div>            
                        </div>
                    </div>
        </section>
        <section className="pt-5">
            <div className="container homeDiv">
                <div className="row">
                    <div className="col-lg-4">
                        <i className="bi bi-person-circle iconClass darkBlueText"></i>
                        <h2 className="fs-3"><b>About Me</b></h2>
                        <p>My background, teaching philosophy, and the experiences that have shaped me as an educator.</p>
                        <p><Link className="btn darkBlueBg iconBlue" to="/teacherportfolio/about" role="button">View details &raquo;</Link></p>
                    </div>
                    <div className="col-lg-4">
                        <i className="bi bi-people iconClass darkGreenText"></i>
                        <h2 className="fs-3"><b>Classroom Management Plan</b></h2>
                        <p>My approach to creating a positive, supportive, and safe learning environment.</p>
                        <p><Link className="btn darkGreenBg iconGreen" to="/teacherportfolio/classroom-management" role="button">View details &raquo;</Link></p>
                    </div>
                    <div className="col-lg-4">
                        <i className="bi bi-person-video3 iconClass darkBlueText"></i>
                        <h2 className="fs-3"><b>Field Experience</b></h2>
                        <p>My hands-on teaching experiences, classroom observations, and lesson implementation.</p>
                        <p><Link className="btn darkBlueBg iconBlue" to="/teacherportfolio/field-experience" role="button">View details &raquo;</Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>  )
}

export default teacherPortfolioHomepage