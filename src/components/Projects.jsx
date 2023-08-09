import EndWorldThirst from '../assets/images/end-world-thirst-website.png'
import LordOfTheFlies from '../assets/images/lord-of-the-pies-website.png'
import DulyNoted from '../assets/images/duly-noted-text-editor.png'
import WeatherDashboard from '../assets/images/weather-dashboard-livesite.png'
import WorkDayScheduler from '../assets/images/work-day-scheduler-page.png'
import ProjectCard from './ProjectCards'

export default function Projects() {
    const projs = [
        {
            id: 1,
            name: "End World Thirst",
            link: "https://myrojoylee.github.io/end-world-thirst/",
            languages: "HTML/CSS/JS",
            siteImage: EndWorldThirst
        },
        {
            id: 2,
            name: "Lord of the Pies",
            link: "https://lord-of-the-pies-f3c957a9b4a8.herokuapp.com/",
            languages: "Handlebars/CSS/JS",
            siteImage: LordOfTheFlies
        },
        {
            id: 3,
            name: "Duly Noted",
            link: "https://duly-noted-text-editor-5ac1387f2bf2.herokuapp.com/",
            languages: "HTML/CSS/JS",
            siteImage: DulyNoted
        },
        {
            id: 4,
            name: "Weather Dashboard",
            link: "https://elvislau74.github.io/weather-dashboard/",
            languages: "HTML/CSS/JS",
            siteImage: WeatherDashboard
        },
        {
            id: 5,
            name: "Work Day Scheduler",
            link: "https://elvislau74.github.io/work-day-scheduler/",
            languages: "HTML/CSS/JS",
            siteImage: WorkDayScheduler
        },
    ]

    return (
        <section>
            <h1>Projects</h1>
            {
                projs.map((project) => {
                    <ProjectCard key = {project.id} project = {project} />
                }
                )
            }
            
        </section>
    )
}