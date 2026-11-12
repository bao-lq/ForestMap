const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarBtn = document.querySelector('.navbar-btn');
const locationBtn = document.querySelector(".selected-location");
const locationDropdown = document.querySelector(".location-dropdown");
const locationText = document.querySelector(".selected-location span");
const locationCheckboxes =
    document.querySelectorAll(".location-dropdown input");
const ctx = document.getElementById("jobGrowth");
const cty = document.getElementById("jobDemand");

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    navbarBtn.classList.toggle('active');
});

locationBtn.addEventListener("click", () => {
    locationDropdown.classList.toggle("active");
});

locationCheckboxes.forEach(box => {
    box.addEventListener("change", () => {

        const selected = [...locationCheckboxes]
            .filter(item => item.checked)
            .map(item => item.value);

        locationText.textContent =
            selected.length === 0
                ? "Locations" : selected.length === 1
                    ? selected[0]
                    : `${selected[0]} +${selected.length - 1}`;
    });
});

new Chart(ctx, {
    type: "line",

    data: {
        labels: [
            "03/10",
            "09/10",
            "15/10",
            "21/10",
            "27/10",
            "02/11"
        ],
        datasets: [{
            label: "Job Opportunities",
            data: [48000,46000,47000,43500,44800,42000],
            borderColor: "#00ff66",
            backgroundColor: "#00ff66",
            tension: 0.4
        }]
    }
});

new Chart(cty, {
        type: "bar",

        data: {
            labels: [
                "Sales",
                "Admin",
                "Customer Service",
                "Marketing",
                "Consulting"
            ],

            datasets: [{
                label: "Hiring demand by industry",
                data: [
                    10800,
                    7000,
                    5900,
                    5700,
                    5100
                ],

                backgroundColor: [
                    "#00ff66",
                    "#3399ff",
                    "#ff9900",
                    "#00ffff",
                    "#66cc33"
                ]
            }]
        }
    }
);