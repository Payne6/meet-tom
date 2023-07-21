document.addEventListener("DOMContentLoaded", () => {
    let heroText = document.getElementsByClassName("hero-text")[0];
    let heroh1 = document.createElement("h1");
    heroText.append(heroh1);

    let heroCopy = "CREATING ONLINE CONTENT THAT CUTS THROUGH THE NOISE".split("");
    var index = 0;

    var timer = setInterval(function() {
        if (index < heroCopy.length) {
            heroh1.append(heroCopy[index]);
            index++;
        } else {
            clearInterval(timer);
        }
  }, 50);
});


const lefts = document.querySelectorAll(".inner-skill-left");
const rights = document.querySelectorAll(".inner-skill-right");

window.addEventListener("scroll", checkLeftsRights);

function checkLeftsRights() {
    let trigger = window.innerHeight / 5 * 4;

    lefts.forEach(left => {
        leftTop = left.getBoundingClientRect().top;
        if (leftTop < trigger) {
            left.classList.add("show");
        } else {
            left.classList.remove("show");
        }
    });

    rights.forEach(right => {
        rightTop = right.getBoundingClientRect().top;
        if (rightTop < trigger) {
            right.classList.add("show");
        } else {
            right.classList.remove("show");
        }
    });
}
