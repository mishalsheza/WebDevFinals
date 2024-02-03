let post=document.querySelector(".post");
post.addEventListener("click",function(e){
    console.log("button was clicked");
    generateFeed(user);
})
textArea.addEventListener('keydown',function(e){
    generateTicket(user); // generating ticket from UI 
        textArea.value = "";
        modal.style.display = 'none'
    
})

function generateFeed(){
let feedCont = document.createElement("div");
feedCont.className = "feed-cont";
feedCont.innerHTML = `<div class="name ${user}"></div>
                        <div class="heart"><i class="fa-solid fa-heart"></i></div>
                        <div class="comment"><i class="fa-regular fa-comment"></i></div>`
console.log(feedCont)
mainCont.appendChild(feedCont);
}
