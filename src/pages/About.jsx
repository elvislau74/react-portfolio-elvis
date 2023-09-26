import ProfilePic from '../assets/images/prof-pic.jpg'
import '../styles/About.css';

// Creates a page with a few paragraphs about me along with profile picture.
export default function About() {
    return (
        <div className="main-container">
        
            <article className="profile">
                <h1>About Me</h1>
                <img className = "profile-pic" src = {ProfilePic} alt = "picture of me"/>
            </article>
            
            <section className="text-description">
                <p>
                    Hi, my name is Elvis Lau. I am a Full Stack Web Developer who recently graduated from the 
                    University of Pennsylvania's LPS Coding Bootcamp. In my free time, I enjoy playing videogames, listening to 
                    music and watching movies. 
                </p>
                <p>
                    My first experience with coding was in College, where I took a few Computer Science courses and
                    learned the basics of Javascript. I enjoy the problem solving aspect of coding and the satisfaction 
                    of seeing my code work and ideas coming to fruition. Going through the bootcamp has helped to solidify my 
                    knowledge of coding and further develop my troubleshooting skills. 
                </p>
                <p>
                    I look forward to utilizing everything that I have learned to improve and transform any projects 
                    or ideas you may have. 
                </p>
            </section>
        </div>
    )
}