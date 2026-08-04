const services = [
    {
        name: "Website Development",
        description: "Responsive websites built with semantic HTML, modern CSS, and JavaScript.",
        number: "01"
    },
    {
        name: "Responsive Web Design",
        description: "Websites that adapt to phones, tablets, laptops, and desktop computers.",
        number: "02"
    },
    {
        name: "Frontend Development",
        description: "Interactive interfaces focused on usability, accessibility, and performance.",
        number: "03"
    },
    {
        name: "Business Websites",
        description: "Professional online spaces that help small businesses present their services.",
        number: "04"
    },
    {
        name: "Website Maintenance",
        description: "Updates and improvements that help websites remain useful and current.",
        number: "05"
    },
    {
        name: "Student Projects",
        description: "Practical web development solutions for educational and personal projects.",
        number: "06"
    }
];

const projects = [
    {
        name: "Kampala Chamber Directory",
        description: "A responsive business directory that presents information about businesses and services in Kampala.",
        technology: "HTML, CSS, JavaScript",
        number: "01"
    },
    {
        name: "Uganda Country Page",
        description: "A responsive information page presenting facts, weather information, and visual content about Uganda.",
        technology: "HTML, CSS, JavaScript",
        number: "02"
    },
    {
        name: "Temple Information Project",
        description: "A responsive website that displays temple information using structured data and JavaScript.",
        technology: "HTML, CSS, JavaScript",
        number: "03"
    },
    {
        name: "Dynamic Web Forms",
        description: "A form-based project demonstrating HTML form controls and JavaScript interaction.",
        technology: "HTML, CSS, JavaScript",
        number: "04"
    },
    {
        name: "Arthur Tech Solutions",
        description: "A responsive technology website demonstrating the core skills developed in WDD 131.",
        technology: "HTML, CSS, JavaScript, localStorage",
        number: "05"
    }
];

function setupNavigation() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}

function displayServices() {
    const container = document.querySelector("#services-container");

    if (!container) {
        return;
    }

    container.innerHTML = services.map((service) => `
        <article class="service-card">
            <div class="card-icon">${service.number}</div>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </article>
    `).join("");
}

function displayProjects() {
    const container = document.querySelector("#projects-container");

    if (!container) {
        return;
    }

    container.innerHTML = projects.map((project) => `
        <article class="project-card">
            <div class="project-card-header">
                <p class="project-number">Project ${project.number}</p>
                <h3>${project.name}</h3>
            </div>
            <p>${project.description}</p>
            <p class="technology">Technology: ${project.technology}</p>
        </article>
    `).join("");
}

function displayFeaturedProjects() {
    const container = document.querySelector("#featured-projects");

    if (!container) {
        return;
    }

    const featuredProjects = projects.slice(0, 3);

    container.innerHTML = featuredProjects.map((project) => `
        <article class="project-card">
            <div class="project-card-header">
                <p class="project-number">Project ${project.number}</p>
                <h3>${project.name}</h3>
            </div>
            <p>${project.description}</p>
            <p class="technology">${project.technology}</p>
        </article>
    `).join("");
}

function handleContactForm() {
    const form = document.querySelector("#contact-form");
    const formMessage = document.querySelector("#form-message");

    if (!form || !formMessage) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const service = document.querySelector("#service").value;
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !service || !message) {
            formMessage.textContent = `Please complete all required fields before submitting the form.`;
            return;
        }

        const visitor = {
            name: name,
            email: email,
            service: service
        };

        localStorage.setItem("visitorName", name);
        localStorage.setItem("visitorInformation", JSON.stringify(visitor));

        formMessage.innerHTML = `
            <p>Thank you, ${name}! Your message has been received.</p>
            <p>We will use ${email} to respond about your ${service} request.</p>
        `;

        form.reset();
    });
}

function displayReturningVisitor() {
    const welcomeMessage = document.querySelector("#welcome-message");

    if (!welcomeMessage) {
        return;
    }

    const savedName = localStorage.getItem("visitorName");

    if (savedName) {
        welcomeMessage.innerHTML = `
            <p>Welcome back, ${savedName}!</p>
            <p>We are glad to see you again.</p>
        `;
    } else {
        welcomeMessage.innerHTML = `
            <p>Welcome to Arthur Tech Solutions.</p>
            <p>Complete the form to tell us about your project.</p>
        `;
    }
}

function displayCurrentYear() {
    const yearElement = document.querySelector("#current-year");

    if (!yearElement) {
        return;
    }

    const currentYear = new Date().getFullYear();

    yearElement.textContent = `${currentYear}`;
}

setupNavigation();
displayServices();
displayProjects();
displayFeaturedProjects();
handleContactForm();
displayReturningVisitor();
displayCurrentYear();