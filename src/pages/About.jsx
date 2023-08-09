import ProfilePic from '../assets/images/prof-pic.jpg'

export default function About() {
    return (
        <div className="main-container">
            <h1>About Me</h1>
            <article className="profile">
                <img className = "profile-pic" src = {ProfilePic} alt = "picture of me"/>
            </article>
            <section className="text-description">
                <p>
                    Hi, my name is Elvis Lau. I am currently learning to become a Front-End Developer 
                    at the UPenn LPS Bootcamp. In my free time, I like to play videogames, listen to 
                    music and watch movies. 
                </p>
                <p>
                    My first experience with coding was in College, where I took a few Computer Science classes. 
                    Although the debugging process can be annoying sometimes, I find myself really enjoying coding.
                </p>
                <p>
                    I hope to use everything I have learned to improve and transform any projects you may have. 
                </p>
            </section>
        </div>
    )
}