import EndWorldThirst from '../assets/images/end-world-thirst-website.png'
import LordOfTheFlies from '../assets/images/lord-of-the-pies-website.png'
import DulyNoted from '../assets/images/duly-noted-text-editor.png'
import WeatherDashboard from '../assets/images/weather-dashboard-livesite.png'
import WorkDayScheduler from '../assets/images/work-day-scheduler-page.png'
import TicTacToe from '../assets/images/tic-tac-toe-app.png'
import ProjectCard from './ProjectCards';
import '../styles/Projects.css';

// Creates a array of projects and send them as props to another file to diplay properly
export default function Projects() {
    const projs = [
        {
            id: 1,
            name: "Tic Tac Toe",
            description: "Tic tac toe site with history page",
            link: "https://tic-tac-toe45-a42400054b7f.herokuapp.com/",
            githubLink: "https://github.com/elvislau74/tic-tac-toe",
            languages: "MongoDB/Express/React/NodeJS",
            siteImage: TicTacToe
        },
        {
            id: 2,
            name: "Lord of the Pies",
            description: "Dessert Recipe Blogsite",
            link: "https://lord-of-the-pies-f3c957a9b4a8.herokuapp.com/",
            githubLink: "https://github.com/myrojoylee/Lord-of-the-Pies",
            languages: "Handlebars/APIs/Express/NodeJS/MySQL/Sequelize",
            siteImage: LordOfTheFlies
        },
        {
            id: 3,
            name: "End World Thirst",
            description: "Brewery Locator App",
            link: "https://myrojoylee.github.io/end-world-thirst/",
            githubLink: "https://github.com/myrojoylee/end-world-thirst",
            languages: "HTML/CSS/JS/APIs",
            siteImage: EndWorldThirst
        },
        {
            id: 4,
            name: "Duly Noted",
            description: "Text Editor with PWA",
            link: "https://duly-noted-text-editor-5ac1387f2bf2.herokuapp.com/",
            githubLink: "https://github.com/elvislau74/duly-noted",
            languages: "NodeJS/Express",
            siteImage: DulyNoted
        },
        {
            id: 5,
            name: "Weather Dashboard",
            description: "Weather Forecasting App",
            link: "https://elvislau74.github.io/weather-dashboard/",
            githubLink: "https://github.com/elvislau74/weather-dashboard",
            languages: "HTML/CSS/JS/APIs",
            siteImage: WeatherDashboard
        },
        {
            id: 6,
            name: "Work Day Scheduler",
            description: "Workday Planning Site",
            link: "https://elvislau74.github.io/work-day-scheduler/",
            githubLink: "https://github.com/elvislau74/work-day-scheduler",
            languages: "HTML/CSS/JS",
            siteImage: WorkDayScheduler
        },
    ]
    
    return (
        <section>
            <h1>Projects</h1>
            <div className='card-container'>
                {
                    projs.map((project) => {
                        return (
                        <ProjectCard key = {project.id} {...project}/>
                        )
                    }
                    )
                }
            </div>
        </section>
    )
}