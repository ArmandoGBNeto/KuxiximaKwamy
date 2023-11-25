const blogArticle =  document.querySelector(".blog-main-section");
const popup= document.querySelector(".blog-popup-box");
const popupButtonClose = popup.querySelector(".blog-popup-close-btn");
const popupButtonIcon= popup.querySelector(".blog-popup-close-icon");

blogArticle.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase()=="button"){
        const article = event.target.parentElement;

        const h1 = article.querySelector("h1").innerHTML;
        const articleGreetings = article.querySelector(".blog-article-greetings").innerHTML;
        const articleIntroContent = article.querySelector(".blog-article-intro-content").innerHTML;
        const articleReadMoreParag = article.querySelector(".blog-read-more-content-parag").innerHTML;
        
        popup.querySelector("h1").innerHTML =h1;
        popup.querySelector(".blog-popup-content-greetings").innerHTML =articleGreetings;
        popup.querySelector(".blog-popup-intro-content").innerHTML =articleIntroContent;
        popup.querySelector(".blog-popup-more-content-parag").innerHTML =articleReadMoreParag;

    
        popupBox();
    }
   
})

popupButtonClose.addEventListener("click", popupBox);
popupButtonIcon.addEventListener("click", popupBox);

function popupBox(){
    popup.classList.toggle("open");
}
