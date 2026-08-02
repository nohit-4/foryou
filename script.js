const enterBtn =
  document.getElementById("enterBtn");

const welcome =
  document.getElementById("welcome");

const loveScreen =
  document.getElementById("loveScreen");

const heartWords =
  document.getElementById("heartWords");

const floatingHearts =
  document.querySelector(".floating-hearts");


/* =========================
   BOTÓN ENTER
========================= */

enterBtn.addEventListener("click", () => {

  welcome.classList.add("hidden");

  loveScreen.classList.remove("hidden");

  createHeartWords();

  createFloatingHearts();

});


/* =========================
   CREAR EL CORAZÓN
========================= */

function createHeartWords() {

  const width =
    window.innerWidth;

  const height =
    window.innerHeight;


  const scale =
    Math.min(width, height) * 0.018;


  const centerX =
    width / 2;


  const centerY =
    height / 2 - 15;


  let index = 0;


  /*
   Fórmula matemática de un corazón ❤️

   Cada punto se convierte
   en un "I love you".
  */

  for (
    let t = 0;
    t < Math.PI * 2;
    t += 0.105
  ) {

    const x =
      16 * Math.pow(
        Math.sin(t),
        3
      );


    const y =
      13 * Math.cos(t)
      - 5 * Math.cos(2 * t)
      - 2 * Math.cos(3 * t)
      - Math.cos(4 * t);


    addWord(

      centerX + x * scale,

      centerY - y * scale,

      index++

    );

  }


  /*
   Segunda capa para que
   el corazón quede más lleno.
  */

  for (
    let t = 0;
    t < Math.PI * 2;
    t += 0.16
  ) {

    const x =
      12 * Math.pow(
        Math.sin(t),
        3
      );


    const y =
      9 * Math.cos(t)
      - 3.5 * Math.cos(2 * t)
      - 1.5 * Math.cos(3 * t)
      - 0.7 * Math.cos(4 * t);


    addWord(

      centerX + x * scale,

      centerY - y * scale,

      index++

    );

  }

}


/* =========================
   CREAR CADA "I LOVE YOU"
========================= */

function addWord(x, y, index) {

  const word =
    document.createElement("span");


  word.className =
    "love-word";


  word.textContent =
    "I love you";


  word.style.left =
    `${x}px`;


  word.style.top =
    `${y}px`;


  /*
   Hace que aparezcan
   uno después de otro.
  */

  word.style.animationDelay =
    `${index * 0.035}s`;


  heartWords.appendChild(word);

}


/* =========================
   CORAZONES FLOTANTES
========================= */

function createFloatingHearts() {

  for (
    let i = 0;
    i < 18;
    i++
  ) {

    const heart =
      document.createElement("span");


    heart.textContent =
      "♥";


    heart.style.left =
      `${Math.random() * 100}%`;


    heart.style.fontSize =
      `${12 + Math.random() * 20}px`;


    heart.style.animationDuration =
      `${6 + Math.random() * 8}s`;


    heart.style.animationDelay =
      `${Math.random() * 5}s`;


    floatingHearts.appendChild(
      heart
    );

  }

}
