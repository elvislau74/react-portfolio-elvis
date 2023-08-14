import '../styles/Resume.css';
import resume from '../assets/resume/professionalresume.pdf';

// Creates a page with a list of my proficiencies 
// and a downloadable link to my resume
export default function Resume() {
    return (
        <>
            <div className="resume">
                <article className="resume-detail">
                <h1>Resume</h1>
                <div className='resume-download'> 
                    Download my <a href={resume} download>Resume</a>.
                </div>
                </article>

                <article className="proficiency-list">
                <div>
                    <h4>Front-End Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>HandlebarsJS</li>
                        <li>React</li>
                    </ul>
                </div>
                <div>
                    <h4>Back-End Proficiencies</h4>
                    <ul>
                        <li>NodeJS</li>
                        <li>APIs</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                </article>
            </div>
        </>
    )
}