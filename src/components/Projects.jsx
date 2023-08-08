export default function Projects() {
    const projs = [
        {
            name: "End World Thirst",
            link: "https://myrojoylee.github.io/end-world-thirst/",
            languages: "HTML/CSS/JS",
            siteImage: ""
        },
        {
            name: "Lord of the Pies",
            link: "https://lord-of-the-pies-f3c957a9b4a8.herokuapp.com/",
            languages: "Handlebars/CSS/JS",
            siteImage: ""
        },
        {
            name: "Duly Noted",
            link: "https://duly-noted-text-editor-5ac1387f2bf2.herokuapp.com/",
            languages: "HTML/CSS/JS",
            siteImage: ""
        },
        {
            name: "Weather Dashboard",
            link: "https://elvislau74.github.io/weather-dashboard/",
            languages: "HTML/CSS/JS",
            siteImage: ""
        },
        {
            name: "Work Day Scheduler",
            link: "https://elvislau74.github.io/work-day-scheduler/",
            languages: "HTML/CSS/JS",
            siteImage: ""
        },
    ]

    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {
                    projs.map((project, i) => {
                        <li key = {i}></li>
                    }
                    )
                }
            </ul>
        </section>
    )
}