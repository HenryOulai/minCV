function showModalOnClick(value) {
    let targetModal = document.getElementById(value)

    targetModal.style.animation = "sweep .5s ease-in-out";

    window.onclick = function (event) {
        if (event.target == targetModal) {
            targetModal.style.display = "none";
        }
    }

    switch (value) {
        case "sisjödepån":
            targetModal.style.display = "block";
            break;
        case "gotevent":
            targetModal.style.display = "block";
            break;
        case "aspero":
            targetModal.style.display = "block";
            break;
            case "online":
            targetModal.style.display = "block";
            break;
            case "teknik":
            targetModal.style.display = "block";
            break;
        default:
            break;
    }
}

//WORK-----------------------------------------------------

let modalTextBemannica = document.querySelector("#modalSisjödepån")
modalTextBemannica.innerHTML =
    "Sisjödepån plays a critical role as the central warehouse for consumables for the Västra Götaland region. Their responsibilities include overseeing product and price control, efficient warehousing, invoice handling, customer packaging, and timely distribution of approximately 25,000 items from over 350 suppliers to approximately 4,000 customers within the region."
    + "<br><br>" + "I joined the customer service team at Sisjöndepån in early 2021 as a part-time assistant. As a member of the team, I was responsible for assisting with customer service inquiries, including addressing delivery and order-related issues via phone calls from Sisjödepån's valued customers. My role was essential in ensuring customer satisfaction and maintaining positive relationships with Sisjödepån's clientele."


let modalTextIca = document.querySelector("#modalIca")
modalTextIca.innerHTML =
    "Summary: To mention some areas I got to work with: Leadership, Purchases, Planning, Business Strategy etc.."
    + "<br><br>" + "Right after I graduated from Aspero (High School) I started to work at Gotevent. During this period of time I always wanted to develop myself both as a person as well as professional. I asked to go to courses to learn more about the culture of work within Gotevent. Besides that, I wanted to learn everything attached to my workplace including software programs."
    + "<br><br>" + "As of today, I'm still helping them with whatever they need, mostly administrations."


//EDUCATION-----------------------------------------------------
let modalTextTeknik = document.querySelector("#modalTeknik")
modalTextTeknik.innerHTML =
    "The biggest difference between university, college and YH is that university and college educations are research-linked, while YH educations are more practically oriented. Studying YH provides practical professional competence that matches the current and future needs and demands for competence of working life."
    + "<br><br>" + ".NET Developer, Software Development"
    + "<br><br>" + "Courses:"
    + "<br>" + "- Programming with C#"
    + "<br>" + "- Databases with T-SQL"
    + "<br>" + "- Frontend"
    + "<br>" + "- Backend"
    + "<br>" + "- Data access in .NET"
    + "<br>" + "- Cloud-based applications"
    + "<br>" + "- LIA 1 (Currently)"
    + "<br>" + "- Produce and deliver software"
    + "<br>" + "- LIA 2"
    + "<br>" + "- Master thesis"

    + "<br><br>" + "Want to see some of my projects? (opens in new tab)"
    + "<br>" + "- <a href='https://henryoulai.github.io/pixabay-remake/'target='blank'>Pixabay Image Search App</a>"
    + "<br>" + "- <a href='https://github.com/HenryOulai/TodoMVCApp/'target='blank'>Todo App</a>"
let modalTextOnline = document.querySelector("#modalOnline")
modalTextOnline.innerHTML =
    "Courses:"
    + "<br>" + "- Complete guide to building an app with .Net Core and React"
    + "<br>" + "- Complete guide to ASP.NET Core MVC (.NET 6)"
    + "<br>" + "- Learn ASP.NET Core MVC (.NET6)"
    + "<br>" + "- Cryptography in .NET 6"
    + "<br>" + "- ASP.NET Core 6 Web API Fundamentals"
    

let modalTextGtg = document.querySelector("#modalaspero")
modalTextGtg.innerHTML =
    "The Aspero Sports Gymnasium in Gothenburg offers students the opportunity to choose sports as an individual subject. They use Mac computers and other IT platforms to enhance the learning experience. Teachers guide and challenge students to reach their full potential based on their abilities. The school focuses on individual growth and development to prepare students for success in academics and athletics."
    + "<br><br>" + "Additional Courses:"
    + "<br>" + "- UF"
    + "<br>" + "- Psykologi 1,2A"
    + "<br>" + "- Leadership and org"
    + "<br>" + "- Maths B"
    + "<br>" + "-  internal economics"

// INTERSECT------------------------------------------------------
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        const square = entry.target.querySelector('.skills');

        if (entry.isIntersecting) {
            square.classList.add('csharp');
            return;
        }
        square.classList.remove('csharp');
    });
});

observer.observe(document.querySelector('.container'));
