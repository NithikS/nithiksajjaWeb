import profilePic from "../assets/profilePic.png"
import CardSection from "../components/CardSection";
import Card from "../components/Card";

const about = () => {
  return (
    <>
        <section id="biography" className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img  id="profilePic" src={profilePic} alt="Nithik Sajja" className="img-fluid rounded-circle" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="section-title darkBlueText">About Me</h2>
                        <p>Hello! My name is Nithik Sajja, and I am passionate about web development, technology, and constantly learning new skills. I enjoy creating dynamic and responsive websites that are easy to use and look great.</p>
                        <p>I love taking on new challenges and working on innovative projects that push me to grow and improve. When I&apos;m not working with technology, I dedicate my time to helping fight hunger by volunteering with organizations like Second Helpings, Gleaners Food Bank, Midwest Food Bank, and Horizon House.</p>
                    </div>            
                </div>
            </div>
        </section>

        <section id="skills" className="py-5">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title darkBlueText">Skills and Expertise</h2>
                    <p className="mt-3">Here are some of the skills I&apos;ve developed and how I&apos;ve used them in real projects.</p>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <h4 className="fw-bold darkGreenText">Exceeding Client Expectations</h4>
                        <p>I work hard to understand what clients need and deliver projects on time that exceed their expectations. 
                            <strong> Example:</strong> Created the <em><span className="darkBlueText">Nike Hoosier State Relays</span></em> website, ensuring it was finished on schedule and matched the client&apos;s vision.</p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="fw-bold darkGreenText">Quick Adaptability and Learning</h4>
                        <p>I am quick to learn and adapt to new tools and skills, making it easy to improve older projects or take on entirely new ones. 
                            <strong> Examples:</strong> Updated and redesigned the <em><span className="darkBlueText">Southeastern Media Network</span></em> and <em><span className="darkBlueText">Southeastern Sports Network</span></em> websites which had not been updated in years, giving them a fresh and modern look while still using the client&apos;s software.</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <h4 className="fw-bold darkGreenText">Critical Thinking and Problem Solving</h4>
                        <p>I enjoy solving complex problems and finding creative solutions that improve how users interact with websites. 
                            <strong> Example:</strong> Built the <em><span className="darkBlueText">Nithik Sajja Recipes</span></em> website, which includes interactive recipes, search functionality, and easy measurement conversion.</p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="fw-bold darkGreenText">Effective AI Prompting</h4>
                        <p>I use AI tools effectively by crafting clear prompts that help the AI achieve exactly what I need. 
                            <strong> Example:</strong> Used AI to streamline workflows, automate tasks, and enhance creativity in various web projects. Including <span className="darkBlueText">Nithik Sajja Recipes</span>, <em><span className="darkBlueText">Southeastern Media Network</span></em>, and <em><span className="darkBlueText">Southeastern Sports Network</span></em></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-0  mx-auto">
            <div className="container">
                <h2 className="section-title text-center darkBlueText">Certifications</h2>
                <CardSection content={
                    <>
                        <Card
                            iconHTML={
                                <div className="iframe-container">
                                <div data-iframe-width="150" data-iframe-height="270" 
                                    data-share-badge-id="0bd4a5af-2e20-4aad-b53a-a11d4f233508" 
                                    data-share-badge-host="https://www.credly.com">
                                </div>
                                <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                                </div>
                            }
                            disc={"Certified Entry-Level Python Programmer\nIssued by Python Institute"}
                            link={"/PCEP"}
                            btnText={"View Certificate"}
                            target_={''}
                            />
                    </>
                }/>
            </div>
        </section>
        <div id="side-by-side-sections">
            <section id="accomplishments" className="py-5">
                <div className="container text-center">
                    <h2 className="section-title darkBlueText">Accomplishments</h2>
                    <ul className="list-unstyled mt-4">
                        <li><i className="bi bi-star-fill me-2 darkGreenText"></i>Recipient of the Presidential Volunteer Service Award (twice)</li>
                        <li><i className="bi bi-laptop-fill me-2 darkGreenText"></i>Proficient in web development languages: HTML, CSS, JavaScript, and Python</li>
                        <li><i className="bi bi-window me-2 darkGreenText"></i>Currently designing and managing five websites</li>
                        <li>
                            <i className="bi bi-diagram-3-fill me-2 darkGreenText"></i>
                            <span className="darkGreenText"><b>School Involvement:</b></span>
                            <ul className="mt-2 clubList">
                                <li><i className="bi bi-diamond me-2 darkGreenText"></i>Member of the Student Council Executive Team</li>
                                <li><i className="bi bi-diamond me-2 darkGreenText"></i>Member of the Computer Science Honor Society Executive Team</li>
                                <li><i className="bi bi-diamond me-2 darkGreenText"></i>Member of the Principal&apos;s Advisory Council</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            
            <section id="hobbies" className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title darkBlueText">Hobbies and Interests</h2>
                            <p className="mt-4">When I&apos;m not coding, I enjoy a variety of activities that keep me inspired and energized:</p>
                            <ul className="list-unstyled mt-3">
                                <li><i className="bi bi-heart-fill me-2 darkGreenText"></i>Volunteering every Saturday</li>
                                <li><i className="bi bi-heart-fill me-2 darkGreenText"></i>Exploring new technologies</li>
                                <li><i className="bi bi-heart-fill me-2 darkGreenText"></i>Watching <em>Avatar: The Last Airbender</em></li>
                                <li><i className="bi bi-heart-fill me-2 darkGreenText"></i>Traveling and experiencing new cultures</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>    
            
        </div>
    </>
  )
}

export default about