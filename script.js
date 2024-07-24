const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector(".box-buttons button"),
    resultBtn = document.querySelector(".box-reponse"),
    resultQuote = document.querySelector(".reponse");

   
quoteBtn.addEventListener("click", randomQuote);


function randomQuote() {
    resultQuote.style.visibility = "hidden";
   fetch("https://api.blablagues.net/?rub=blagues").then(res => res.json()).then(result =>{
console.log(result);
quoteText.innerHTML = `${result.data.content.text_head}<br>${result.data.content.text}`;
resultBtn.addEventListener("click", clicReponse);
function clicReponse(){    
    resultQuote.innerHTML = result.data.content.text_hidden;
    resultBtn.style.visibility = "hidden";
    resultQuote.style.visibility = "visible";
   
};
if(result.data.content.text_hidden === ""){
    console.log("ok pour le if");
    resultBtn.style.visibility = "hidden"; 
} else{
    
    resultBtn.style.visibility = "visible"; 
    console.log("ok pour le else");
}
console.log(result.data.content.text_hidden);
   });
}