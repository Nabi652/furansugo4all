let reponsesQuestion = document.getElementById("reponses-questions");

console.log(reponsesQuestion);

reponsesQuestion.addEventListener("click", () => {
  reponsesQuestion.innerHTML = `1) Carl <br> 2) Il nourrit les animaux, il trait les vaches et il récolte les légumes <br> 3) Il se repose et il va boire un café avec sa femme`;
  reponsesQuestion.style.cursor = "pointer";
});

reponsesQuestion.addEventListener("mouseout", () => {
  reponsesQuestion.innerHTML = "Cliquez pour les réponses";
});

let reponsesVraiFaux = document.getElementById("reponses-vraifaux");

reponsesVraiFaux.addEventListener("click", () => {
  reponsesVraiFaux.innerHTML = `1)Faux <br>2)Faux <br>3)Vrai <br>4)Faux`;
  reponsesVraiFaux.style.cursor = "pointer";
});

reponsesVraiFaux.addEventListener("mouseout", () => {
  reponsesVraiFaux.textContent = "Cliquez pour les réponses";
});
