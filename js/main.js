// ===============================
// OBTENER DÍA DESDE LA URL
// ===============================
const params = new URLSearchParams(window.location.search);
const dia = params.get("dia");

const titulo = document.getElementById("titulo-dia");
const contenedor = document.getElementById("contenedor-ejercicios");
const btnFinalizar = document.getElementById("btn-finalizar");

// ===============================
// MENSAJES BONITOS
// ===============================
const mensajes = {
  lunes: "te adoro, de una forma tan peculiar que aunque lo cuente libro entero, no seria suficiente para explicartelo 💗",
  martes: "hoy estas cumpliendo tu promesa de amarte a ti misma, y estoy orgulloso de ti por eso mi princesa💖",
  miercoles: "hoy toca otro dia mas de ejercios, pero yo se que tu puedes mi reina ;D 💕",
  jueves: "ohhh shit, mirenla, mirenla, es eileen, la mujer mas bella y disciplinada del universo ",
  viernes: "te amo, es hora de que esas piernas hermosas se vuelvan super fuertes, VAMOSSS"
};

// ===============================
// RUTINAS POR DÍA (TU RUTINA REAL)
// ===============================
const rutinas = {
  lunes: [
    { nombre: "Sentadilla profunda", reps: "3 series · 12 rep (entre cada serie, descansas 2 min)", video: "videos/sentadillaProfunda.mp4" },
    { nombre: "Puente de glúteo", reps: "3 series · 20 rep  (hazlas de forma tarquila, no tan rapido y concentra tu fuerza en tu nalga, descansas 2 min entre serie )", video: "videos/puenteDeGluteos.mp4" },
    { nombre: "Zancadas atrás", reps: "3 series · 10 rep por pierna (descansas 2 min entre serie)", video: "videos/zancadaAtras.mp4" },
    { nombre: "Sentadilla isométrica (pared)", reps: "3 series · 30 seg (descansas 3 min entre serie y estira las piernas mientas descansas)", video: "videos/SentadillaIsometrica.mp4" },
    { nombre: "Patadas de glúteo", reps: "3 series · 15 rep por pierna (descanas 2 min entre serie)", video: "videos/patadaGluteo.mp4" },
    { nombre: "Abducciones acostada", reps: "3 series · 25 rep", video: "videos/AbducionAcostada.mp4" }
  ],

  martes: [
    { nombre: "Plancha", reps: "3 series · 30 seg (descansas 3 min entre series)", video: "videos/Plancha.mp4" },
    { nombre: "Crunch", reps: "3 series · 15 rep (descansa 3 min entre series)", video: "videos/crunch.mp4" },
    { nombre: "Elevaciones de piernas", reps: "3 series · 15 rep (descansa 2 min entre serie)", video: "videos/elevacionDePiernas.mp4" },
    { nombre: "Bicycle crunch", reps: "3 series · 20 rep (descansa 2 min entre serie)", video: "videos/bicycleCrunch.mp4" }
  ],

  miercoles: [
    { nombre: "Sentadilla sumo", reps: "3 series · 20 rep (descansas 2 min entre serie)", video: "videos/sentadillaSumo.mp4" },
    { nombre: "Puente glúteo 1 pierna", reps: "3 series · 10 rep por pierna (descansas 2 min entre serie)", video: "videos/PuenteGluteoUnaPierna.mp4" },
    { nombre: "Step-ups (silla)", reps: "3 series · 10 rep por pierna (descansas 2 min entre serie)", video: "videos/stepUp.mp4" },
    { nombre: "Desplantes laterales", reps: "3 series · 12 rep", video: "videos/DesplantesLaterales.mp4" },
    { nombre: "Fire hydrants", reps: "3 series · 15 rep por pierna", video: "videos/fireHydrants.mp4" },
    { nombre: "Abducciones isométricas", reps: "3 series · 30 seg", video: "videos/abduccionIsometrica.mp4" }
  ],

  jueves: [
    { nombre: "Flexiones De Pecho (rodillas)", reps: "3 series · 8 rep (descansa 3 min entre serie)", video: "videos/flexionesPechoRodillas.mp4" },
    { nombre: "Fondos en silla", reps: "3 series · 10 rep (descansa 2 min entre serie)", video: "videos/FondosSilla.mp4" },
    { nombre: "Plancha toque de hombros", reps: "3 series · 20 rep (osea 20 toques de hombros intercalados, descansas 2 min entre serie)", video: "videos/PlanchaToqueHombros.mp4" },
    { nombre: "Superman", reps: "3 series · 20 rep (descansas 2 min entre serie)", video: "videos/Superman.mp4" },
    { nombre: "Plancha Dinamica", reps: "3 series · 30 seg", video: "videos/PlanchaDinamica.mp4" },
    { nombre: "VIDEO HIT", reps: `
    sigue el video y haz todo lo que ella dice, ¡tú puedes! TE AMOOOOOOOOOOOO <br><br>
    <a href="https://www.youtube.com/watch?v=R8_CIT8TTGM"
       target="_blank"
       class="link-video">
       ▶ Ver en YouTube 
    </a>
  `, video: "videos/HIT.mp4" }

  ],

  viernes: [
    { nombre: "Sentadilla + brazos arriba", reps: "3 series · 15 rep (descansa 1minuto entre casa serie)", video: "videos/sentadillaBrazosArriba.mp4" },
    { nombre: "Jump squats (suaves)", reps: "3 series · 8–10 rep (descansa 1minuto entre casa serie)", video: "videos/jumpSquat.mp4" },
    { nombre: "Mountain climbers", reps: "3 series · 30 seg (descansa 1minuto entre casa serie)", video: "videos/MountainClimbers.mp4" },
    { nombre: "Zancadas caminando", reps: "3 series · 12 rep por pierna (descansa 1minuto entre casa serie)", video: "videos/ZancadasCaminando.mp4" },
    { nombre: "Jumping jacks", reps: "3 series · 30 seg (descansa 1minuto entre casa serie)", video: "videos/JumpingJacks.mp4" },
    { nombre: "PLANCHA FINAL", reps: "1 VEZ DURANTE 1 MINUTO VAMOSSSSSSSSSSS", video: "videos/plancha.mp4" }
  ]
};

// ===============================
// PINTAR RUTINA
// ===============================
if (dia && rutinas[dia]) {
  titulo.textContent = dia.charAt(0).toUpperCase() + dia.slice(1);

  const mensaje = document.createElement("p");
  mensaje.className = "mensaje-dia";
  mensaje.textContent = mensajes[dia];
  titulo.after(mensaje);

  rutinas[dia].forEach(ej => {
    const card = document.createElement("section");
    card.className = "ejercicio";

    card.innerHTML = `
      <h2>${ej.nombre}</h2>
      <p>${ej.reps}</p>
      <video src="${ej.video}" muted autoplay loop playsinline controls></video>
      <button class="btn-hecho">✔ Hecho</button>
    `;

    contenedor.appendChild(card);
  });
}

// ===============================
// BOTONES HECHO + FINAL
// ===============================
const botonesHecho = document.querySelectorAll(".btn-hecho");

botonesHecho.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("completado");
    btn.textContent = btn.classList.contains("completado")
      ? "✔ Completado"
      : "✔ Hecho";

    verificarRutina();
  });
});

function verificarRutina() {
  const completados = document.querySelectorAll(".btn-hecho.completado");
  if (completados.length === botonesHecho.length) {
    btnFinalizar.disabled = false;
    btnFinalizar.classList.add("activo");
  }
}

// ===============================
// CONFETI FINAL 🎉
// ===============================
btnFinalizar.addEventListener("click", () => {
  btnFinalizar.textContent = "✨ Rutina completada ✨";
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confeti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.backgroundColor = `hsl(${Math.random() * 360},70%,80%)`;
    c.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
});



// ===============================
// TOGGLE DARK / LIGHT MODE 🌙☀️
// ===============================
const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

// Cargar tema guardado
const temaGuardado = localStorage.getItem("tema");
if (temaGuardado) {
  body.className = temaGuardado;
  toggleBtn.textContent = temaGuardado === "dark" ? "🌙" : "☀️";
} else {
  body.classList.add("dark");
}





//control de colores:

const temas = ["tema-rosa", "tema-lila", "tema-menta"];
let indiceTema = 0;

const btnTheme = document.getElementById("btn-theme");
const btnReset = document.getElementById("btn-reset");

btnTheme.addEventListener("click", () => {
  document.body.classList.remove(...temas);
  document.body.classList.add(temas[indiceTema]);
  indiceTema = (indiceTema + 1) % temas.length;
});

btnReset.addEventListener("click", () => {
  document.body.classList.remove(...temas);
});


