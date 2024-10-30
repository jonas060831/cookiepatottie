cookie clicker
i started designing in framer
add the score: 0 text
then look for a cute cookie image
i found this cookie image on https://www.freepik.com/premium-ai-image/cartoon-cookie-with-eyes-smile-it-generative-ai_86028552.htm
i name my coockie clicker cookie patootie
pick josefin slab from google font for the score text
pick rametto one for the title header cookie patootie
now i will code the functionalities
created a github 
git clone it
cd in to the project and
then change the branch to master by typing git checkout -b master

then touch index.html && mkdir css js
touch css/style.css && touch js/app.js
code .
added bolier plate in index.html with css link and javascript script in the header
change the title to Cookie Patootie
html mark up header h1 score h4 and img
added google fonts josefin slab and rametto one search the 2 fonts and add then get font clicked the bag icon on the top right and click get embed code clicked the radio button import amd copy the import  section and paste it to top of style.css 
added css reset
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

added 
h1 {
    text-align: center;
}

h4 {
    text-align: center;
}
import fonts from google fonts
took care of my daugther until 1004am
update my html for img to have an image container named cookie_container as its class
updated my css as follows
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Rammetto+One&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Rammetto+One&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    background-color: #fcfcfc;
}

h1 {
    text-align: center;
    font-family: Rammetto One,system-ui, Arial;
    margin-top: 5rem;
}

h4 {
    text-align: center;
    font-family: Josefin Slab,system-ui, Arial;
    font-size: xx-large;
}

.cookie_container {
    width: 100%;
    max-width: 700px;
    margin: 0px auto;
    cursor: pointer;
}

/* set the image width to 100% of its container so it will follow the size of container */
.cookie_container img {
    width: 100%;
}

will now work on js
started to test the js
//1. initialize the score variable
let score = 0


//2. get the element img tag

const cookieImage = document.querySelector('img')


//3. attemp to add event listener to cookie
cookieImage.addEventListener('click', handleCookieClick)


//4. use a regular function for handleCoockieClick
function handleCookieClick() {
    alert(123)
}

i need to update the score variable and append it to score h4 whenever the cookie is clicked
i need to update the score variable and append it to score h4 whenever the cookie is clicked first i need to get a handle of the score h4

my first attempt to update the score failed by typing
scoreH4.appendChild(score++)


my second attempt also failed
scoreH4.appendChild(scoreH4++)

my third one succeded
scoreH4.innerText = `Score: ${score++}`


now i added the above code to a function called incrementScore and used arrowFunctionand remove the third try that succeded 
//9. added incrementFunction and call it in handleCookieClick
const incrementScore = () => score++ 

now i want to add if the user reach a score of 100 to reset the score variable to zero again and call it inside handleCookieClick
const resetScoreAfter100 = () => {

    if (score > 100) {
        alert('wow you are such a cookie patootie clicker score will now reset')
        
        score = 0
        scoreH4.innerText = `Score: ${score}`
    }
}

i turns out that this exercise is supposed to be in the projects folder so i move it from labs folder to projects folder
so i did
cd ..
 mv labs/cookiepatottie projects

then added a readme file and paste everything above then push to github