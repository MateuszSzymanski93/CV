const SKILLS = document.querySelector(".about-me-button");
const CLOSE_SKILLS = document.querySelector(".about__close")
const SKILLSCONTENT = document.querySelector(".about");

SKILLS.addEventListener("click", function()
{
    SKILLSCONTENT.classList.remove("fade-out");
    SKILLSCONTENT.classList.remove("invisible");
    SKILLSCONTENT.classList.add("fade-in");
});

CLOSE_SKILLS.addEventListener("click", function()
{
    SKILLSCONTENT.classList.remove("fade-in");
    SKILLSCONTENT.classList.add("fade-out");
    setTimeout(() => {SKILLSCONTENT.classList.add("invisible")}, 600);
});