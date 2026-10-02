// ======================================================
// THEME SWITCHING
// ======================================================

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", () => {

    // Add or remove dark mode

    document.body.classList.toggle("dark-mode");


    // Get theme icon

    const icon =
        themeButton.querySelector("i");


    // Change icon

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("bi-moon-fill");

        icon.classList.add("bi-sun-fill");

    } else {

        icon.classList.remove("bi-sun-fill");

        icon.classList.add("bi-moon-fill");

    }

});


// ======================================================
// PROJECT FILTERING
// ======================================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectItems =
    document.querySelectorAll(".project-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Get selected category

        const selectedCategory =
            button.dataset.filter;


        // Change active button

        filterButtons.forEach(btn => {

            btn.classList.remove("btn-primary");

            btn.classList.add("btn-outline-primary");

        });


        button.classList.remove("btn-outline-primary");

        button.classList.add("btn-primary");


        // Show / hide projects

        projectItems.forEach(project => {

            const projectCategory =
                project.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


// ======================================================
// CONTACT FORM VALIDATION
// ======================================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        // Stop actual form submission

        event.preventDefault();


        // Get input values

        const name =
            document.getElementById("name")
            .value
            .trim();


        const email =
            document.getElementById("email")
            .value
            .trim();


        const message =
            document.getElementById("message")
            .value
            .trim();


        // Get error message elements

        const nameError =
            document.getElementById("nameError");


        const emailError =
            document.getElementById("emailError");


        const messageError =
            document.getElementById("messageError");


        const successMessage =
            document.getElementById("successMessage");


        // Clear old messages

        nameError.textContent = "";

        emailError.textContent = "";

        messageError.textContent = "";

        successMessage.textContent = "";


        // Validation variable

        let isValid = true;


        // ================= NAME VALIDATION =================

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        }


        // ================= EMAIL VALIDATION =================

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        }

        else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }


        // ================= MESSAGE VALIDATION =================

        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            isValid = false;

        }


        // ================= SUCCESS =================

        if (isValid) {

            successMessage.textContent =
                "Message submitted successfully!";

            contactForm.reset();

        }

    }
);


// ======================================================
// MOBILE NAVBAR
// ======================================================

const navLinks =
    document.querySelectorAll(".nav-link");

const navbarCollapse =
    document.getElementById("navbarNav");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (
            navbarCollapse.classList
            .contains("show")
        ) {

            const navbar =
                bootstrap.Collapse
                .getInstance(navbarCollapse);


            if (navbar) {

                navbar.hide();

            }

        }

    });

});