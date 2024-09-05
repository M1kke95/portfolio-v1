import { fetchData, Project } from '../dataReader';


fetchData().then((projects: Project[]) => {
    const appArticle = document.getElementById('app');
    if(appArticle){
        appArticle.innerHTML  = projects.map(project => `
            
            <div class="project-card">
                <h2 class="project-title">${project.name}</h2>
                <p class="project-description">${project.description}</p>
                <p class="project-dates">Start Date: ${project.startdate} | End Date: ${project.enddate}</p>
            </div>
            
            `).join('');
    }
        
    });

let project: Project[] = [];

function CreateNewProject(name: string, description:string, startdate: string, enddate: string, image: string){
    const newProject: Project = {
        id: project.length +1,
        name,
        description,
        startdate,
        enddate,
        image
    }

    project.push(newProject);

    return newProject
}



document.getElementById('projectCreation')?.addEventListener('submit', (event) => {
    console.log("du trykket på knappen")
    event.preventDefault();

    const name = (document.getElementById('projectName') as HTMLInputElement).value;
    const description = (document.getElementById('projectDescription') as HTMLInputElement).value;
    const startdate = (document.getElementById('startDateProject') as HTMLInputElement).value;
    const enddate = (document.getElementById('endDateProject') as HTMLInputElement).value;
    const image = (document.getElementById('projectImage') as HTMLInputElement).value;

    const newProject = CreateNewProject(name, description, startdate, enddate, image);

    console.log('New Project Created:', newProject);
});

document.addEventListener("DOMContentLoaded", function () {
    function toggleVisible() {
        const testDette = document.getElementById("projectCreation");
        const overlay = document.getElementById("overlay")

        if (testDette && overlay) {
            if (testDette.style.display === 'none') {
                testDette.style.display = 'block';
                overlay.style.display = 'block'
            } else {
                testDette.style.display = 'none';
                overlay.style.display ='none'
            }
        }
    }

    window.toggleVisible = toggleVisible; //uten denne fungerer ikke toggleVisible, fant ikke ut av hvorfor det er en rød squiggly line

    const closeButton = document.getElementById('closeForm')
    const backGroundChange = document.getElementById("overlay")

    if (backGroundChange) {
        backGroundChange.addEventListener('click', function() {
            const projectCreationForm = document.getElementById('projectCreation');
            if (projectCreationForm) {
                projectCreationForm.style.display = 'none';
            }
            backGroundChange.style.display = 'none';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const projectCreationForm = document.getElementById('projectCreation');
            if (projectCreationForm) {
                projectCreationForm.style.display = 'none';
            }
            if (backGroundChange) {
                backGroundChange.style.display = 'none';
            }
        });
    }
});



