let reponse1 = document.querySelector(".dictee1");

reponse1.addEventListener("click", () => {
  reponse1.style.border = "1px solid green";
  reponse1.style.textAlign = "center";
  reponse1.style.margin = "auto";
  reponse1.style.transition = "1s";
  reponse1.textContent =
    "Elle s’appelle Marie et elle a 20 ans. Elle est étudiante en littérature. Elle habite à Paris depuis trois mois. Sa famille habite dans le nord de la France. Le weekend, elle travaille dans un restaurant comme serveuse et fait du bénévolat.";
  reponse1.style.transition = "1s";
});

reponse1.addEventListener("mouseout", () => {
  reponse1.textContent = "Cliquer pour voir la réponse";
  reponse1.style.border = "1px solid rgba(128, 128, 128, 0.219)";
});

let reponse2 = document.querySelector(".dictee2");

reponse2.addEventListener("click", () => {
  reponse2.style.border = "1px solid green";
  reponse2.style.textAlign = "center";
  reponse2.style.margin = "auto";
  reponse2.style.transition = "1s";
  reponse2.textContent =
    "Je m’appelle Éric et j’ai 35 ans. Je suis professeur de mathématiques dans un collège. Je suis marié et j’ai deux enfants. Ma femme est avocate. J’habite dans une maison, près de la forêt. Quand j’ai du temps libre, je fais du bricolage et je rends visite à mes parents. ";
});

reponse2.addEventListener("mouseout", () => {
  reponse2.textContent = "Cliquer pour voir la réponse";
  reponse2.style.border = "1px solid rgba(128, 128, 128, 0.219)";
});

let reponse3 = document.querySelector(".dictee3");

reponse3.addEventListener("click", () => {
  reponse3.style.border = "1px solid green";
  reponse3.style.textAlign = "center";
  reponse3.style.margin = "auto";
  reponse3.style.transition = "1s";
  reponse3.textContent =
    "Tu t’appelles Jane. Tu as 50 ans et tu viens d’Australie. Tu es mariée à un français et tu as trois enfants. Tu travailles comme infirmière dans un hôpital. Tu aimes aider et soigner les gens. Le weekend, tu passes du temps avec ta famille et tu regardes des séries américaines à la télévision.";
});
reponse3.addEventListener("mouseout", () => {
  reponse3.textContent = "Cliquer pour voir la réponse";
  reponse3.style.border = "1px solid rgba(128, 128, 128, 0.219)";
});

let reponse4 = document.querySelector(".dictee4");

reponse4.addEventListener("click", () => {
  reponse4.style.border = "1px solid green";
  reponse4.style.textAlign = "center";
  reponse4.style.margin = "auto";
  reponse4.style.transition = "1s";
  reponse4.textContent =
    "Vous vous appelez Roger et vous avez 80 ans. Vous êtes à la retraite et vous êtes veuf. Vous vivez à la campagne dans une petite maison. Vous aimez passer du temps au bar du village avec vos amis. Vous aimez aussi jardiner et vous occuper de vos animaux.";
});
reponse4.addEventListener("mouseout", () => {
  reponse4.textContent = "Cliquer pour voir la réponse";
  reponse4.style.border = "1px solid rgba(128, 128, 128, 0.219)";
});
