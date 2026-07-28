const flower = document.getElementById("flower");
const landing = document.getElementById("landing");
const card = document.getElementById("cardSection");
const music = document.getElementById("music");

let played = false;

flower.addEventListener("click", () => {

    if (played) return;
    played = true;

    // پخش موسیقی
    music.volume = 0.8;
    music.play().catch(()=>{});

    // ساخت گلبرگ‌ها
    createPetals();

    // ساخت بادکنک‌ها
    createBalloons();

    // محو شدن صفحه اول
    landing.style.opacity = "0";

    setTimeout(() => {
        landing.style.display = "none";
        document.body.style.overflow = "auto";
        card.classList.add("show");
    }, 1600);

});

function createPetals(){

    for(let i=0;i<45;i++){

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.style.left = Math.random()*100+"vw";

        petal.style.animationDuration =
            (6+Math.random()*5)+"s";

        petal.style.animationDelay =
            Math.random()*2+"s";

        petal.style.transform =
            rotate(${Math.random()*360}deg);

        document.body.appendChild(petal);

        setTimeout(()=>{
            petal.remove();
        },12000);

    }

}

function createBalloons(){

    for(let i=0;i<12;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.style.left=
            Math.random()*100+"vw";

        balloon.style.animationDuration=
            (8+Math.random()*4)+"s";

        balloon.style.animationDelay=
            (Math.random()*2)+"s";

        balloon.style.transform=
            scale(${0.7+Math.random()*0.5});

        document.body.appendChild(balloon);

        setTimeout(()=>{
            balloon.remove();
        },14000);

    }

}
