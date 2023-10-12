let ReviewComment = [
"I love this website! It's user-friendly and has great content. I visit it daily for valuable information.",

"I had a fantastic shopping experience here. The website's layout is clean, and I found everything I needed easily.",

 "This site is a goldmine for tech enthusiasts. The reviews and articles are spot-on and helped me make informed purchases.", 
 
"Planning my vacation was a breeze thanks to this website. I found amazing travel tips and destinations.",

 "The fitness guides on this website are top-notch. They helped me achieve my fitness goals faster.",
 
  "I'm a foodie, and this website is my go-to for recipes and restaurant recommendations. It never disappoints.", 
  
  "This site has a wealth of information on outdoor activities and hiking trails. I've explored so many beautiful places, thanks to it.",
  
   "I found endless inspiration for my DIY projects here. The tutorials and ideas are a creative treasure trove.",

"This website's book reviews and reading recommendations have led me to discover some incredible reads.", 

"Whether it's home renovation tips or DIY hacks, this website has been my go-to source. It's transformed my living space!"
]

let body = document.querySelector("body")

let currentIndex = 0;

let Next = document.getElementById("next")

let Previous = document.getElementById("previous")

let Review = document.getElementById("review")

function reviewAs() {

    Review.innerHTML = ReviewComment[0] 
}

Previous.addEventListener("click", from)

Next.addEventListener("click", to)

function from() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    Review.innerHTML = ReviewComment[currentIndex];
}

function to() {
    currentIndex++;
    if (currentIndex >= ReviewComment.length) {
        currentIndex = ReviewComment.length - 1;
    }
    Review.innerHTML = ReviewComment[currentIndex];
}
