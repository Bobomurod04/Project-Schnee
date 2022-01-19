setInterval(createSchnee, 50);

function createSchnee() {
    const schnee = document.createElement("i");
    schnee.classList.add("fas");
    schnee.classList.add("fa-snowflake");

    schnee.style.left = Math.random() * window.innerWidth + "px";
    schnee.style.animationDuration = Math.random() * 15 + 2 + "s";
    schnee.style.opacity = Math.random();
    schnee.style.fontSize= Math.random() * 0.7 + 10 + "px";

    document.body.append(schnee);

    setTimeout(() => {
        schnee.remove();        
    }, 5000);
}