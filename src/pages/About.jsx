import ProfilePic from '../assets/images/prof-pic.jpg'
import '../styles/About.css';

export default function About() {
    return (
        <div className="main-container">
        
            <article className="profile">
                <h1>About Me</h1>
                <img className = "profile-pic" src = {ProfilePic} alt = "picture of me"/>
            </article>
            
            <section className="text-description">
                <p>
                    Hi, my name is Elvis Lau. I am currently learning to become a Front-End Developer 
                    at the UPenn LPS Bootcamp. In my free time, I like to play videogames, listen to 
                    music and watch movies. 
                </p>
                <p>
                    My first experience with coding was in College, where I took a few Computer Science courses. 
                    Although the debugging process can be really troublesome, I find myself really enjoying it.
                </p>
                <p>
                    I hope to use everything I have learned to improve and transform any projects you may have. 
                </p>
            </section>
        </div>
    )
}