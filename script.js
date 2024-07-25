const quoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector(".box-buttons button"),
  resultBtn = document.querySelector(".box-reponse"),
  resultQuote = document.querySelector(".reponse"),
  auteurQuote = document.querySelector(".auteur .nom"),
  copyBtn = document.querySelector(".copy"), 
  copyText = document.querySelector(".copy_text");

quoteBtn.addEventListener("click", randomQuote);

copyBtn.addEventListener("click", ()=>{
navigator.clipboard.writeText(quoteText.innerText + "  Réponse : " +  resultQuote.innerText);
copyText.innerText = "Blague copié";
copyText.style.opacity = "0.7";
});


function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading..";
  copyText.innerText = "Copier la Blague";
copyText.style.opacity = "1";
  resultQuote.style.visibility = "collapse";
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerHTML = `${result.data.content.text_head}<br>${result.data.content.text}`;
      auteurQuote.innerHTML = `${result.data.author.pseudo}`;
    

      resultBtn.addEventListener("click", clicReponse);
      function clicReponse() {
        resultQuote.innerHTML = result.data.content.text_hidden;
        resultBtn.style.visibility = "hidden";
        resultQuote.style.visibility = "visible";
      }

      if (result.data.content.text_hidden === "") {
        console.log("ok pour le if");
        resultBtn.style.visibility = "hidden";
      } else {
        resultBtn.style.visibility = "visible";
        console.log("ok pour le else");
      }
      quoteBtn.innerText = "Autre Blague";
      quoteBtn.classList.remove("loading");
    });
}
