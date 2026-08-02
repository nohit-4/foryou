const PASSWORD = "03/04/26";

const login = document.getElementById("login");
const main = document.getElementById("main");
const heart = document.getElementById("heart");
const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const seal = document.querySelector(".seal");

function checkPassword(){

    const value = document.getElementById("password").value;

    if(value === PASSWORD){

        login.style.display = "none";
        main.style.display = "block";

        createHeart();

    }else{

        alert("Contraseña incorrecta, esta web no es para ti. Sal ahora o te pondré un virus💗");

    }

}

function createHeart(){

    let delay = 0;

    for(let y=-16;y<=16;y++){

        for(let x=-16;x<=16;x++){

            let formula = Math.pow(x*x+y*y-1,3)-x*x*Math.pow(y,3);

            if(formula<=0){

                const love=document.createElement("div");

                love.className="love";

                love.innerHTML="I love you";

                love.style.left=(50+x*1.4)+"%";
                love.style.top=(50-y*1.4)+"%";

                love.style.animationDelay=delay+"s";

                heart.appendChild(love);

                delay+=0.02;

            }

        }

    }

    setTimeout(showEnvelope,(delay+1)*1000);

}

function showEnvelope(){

    envelope.style.transform="translate(-50%,-50%) scale(1)";

    setTimeout(openEnvelope,1800);

}

function openEnvelope(){

    document.querySelector(".cover").style.transform="rotateX(180deg)";
    document.querySelector(".cover").style.transformOrigin="top";

    setTimeout(()=>{

        letter.style.transform="translateY(-120px)";

    },1200);

}
