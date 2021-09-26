let reponsesRevele = document.querySelector(".rep1");

reponsesRevele.addEventListener("click", () => {
  reponsesRevele.style.border = "1px solid green";
  reponsesRevele.style.transition = "1s";
  reponsesRevele.innerHTML = `Je m'appelle Rémi, j'ai 29 <span style=color:red>ans</span> et j'habite à Toulouse. 
  Je travaille <span style=color:red>comme</span> cuisinier dans un <span style=color:red>restaurant</span> français.
   Je suis marié et j'ai un enfant. Je travaille beaucoup mais le <span style=color:red>weekend</span>, j'aime passer du temps
    avec ma famille et préparer de <span style=color:red>bons</span> plats`;
  reponsesRevele.style.cursor = "pointer";
});

reponsesRevele.addEventListener("mouseout", () => {
  reponsesRevele.textContent = "Cliquer pour voir la réponse";
  reponsesRevele.style.border = "1px solid rgba(128, 128, 128, 0.219)";
});

let reponsesRevele2 = document.querySelector(".rep2");

reponsesRevele2.addEventListener("click", () => {
  reponsesRevele2.style.border = "1px solid green";
  reponsesRevele2.style.transition = "1s";
  reponsesRevele2.innerHTML = `Je m'appelle Isabelle, j'ai 55 ans. Je <span style=color:red>viens</span> d'Italie et j'habite en France <span style=color:red>depuis</span>
   15 ans. Je suis <span style=color:red>mariée</span> à un français et nous avons deux <span style=color:red>enfants</span>.
  Je travaille comme <span style=color:red>assistance</span> à la mairie. 
    J'aime <span style=color:red>cuisiner</span> et peindre dans mon <span style=color:red>jardin</span>.`;
  reponsesRevele2.style.cursor = "pointer";
});

reponsesRevele2.addEventListener("mouseout", () => {
  reponsesRevele2.textContent = "Cliquer pour voir la réponse";
  reponsesRevele2.style.border = "1px solid rgba(128, 128, 128, 0.219)";
});

let reponsesRevele3 = document.querySelector(".rep3");

reponsesRevele3.addEventListener("click", () => {
  reponsesRevele3.style.border = "1px solid green";
  reponsesRevele3.style.transition = "1s";
  reponsesRevele3.innerHTML = `Elle s'appelle Pauline et elle a <span style=color:red>32</span> ans. Elle est au
<span style=color:red>chômage</span> depuis 6 mois. Elle est fiancée à un <span style=color:red>homme</span> anglais.
Elle cherche un <span style=color:red>travail</span> dans la mode. Elle a un frère qui habite à
<span style=color:red>Londres</span>. Elle aime faire du <span style=color:red>jogging</span> et lire des <span style=color:red>magazines</span> de
mode.`;
  reponsesRevele3.style.cursor = "pointer";
});

reponsesRevele3.addEventListener("mouseout", () => {
  reponsesRevele3.textContent = "Cliquer pour voir la réponse";
  reponsesRevele3.style.border = "1px solid rgba(128, 128, 128, 0.219)";
});

let reponsesRevele4 = document.querySelector(".rep4");

reponsesRevele4.addEventListener("click", () => {
  reponsesRevele4.style.border = "1px solid green";
  reponsesRevele4.style.transition = "1s";
  reponsesRevele4.innerHTML = `Vous vous appelez Cédric. Vous avez 42 ans et vous êtes
  <span style=color:red>comptable</span>, dans une entreprise <span style=color:red>internationale</span>. Vous êtes <span style=color:red>divorcé</span> et
  vous vivez avec votre fils. Vous aimez <span style=color:red>voyager</span>, faire du
  <span style=color:red>golf</span> et étudier de <span style=color:red>nouvelle</span> langues.`;
  reponsesRevele4.style.cursor = "pointer";
});

reponsesRevele4.addEventListener("mouseout", () => {
  reponsesRevele4.textContent = "Cliquer pour voir la réponse";
  reponsesRevele4.style.border = "1px solid rgba(128, 128, 128, 0.219)";
});
