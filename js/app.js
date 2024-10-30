//1. initialize the score variable
let score = 0


//2. get the element img tag

const cookieImage = document.querySelector('img')
const scoreH4 = document.querySelector('h4')

//3. attemp to add event listener to cookie
cookieImage.addEventListener('click', handleCookieClick)


//4. use a regular function for handleCoockieClick
function handleCookieClick() {
    //6. this failed
    //scoreH4.appendChild(score++)

    //7.this failed
    //scoreH4.appendChild(scoreH4++)
    //8. this succeeded
    //scoreH4.innerText = `Score: ${score++}`
    incrementScore()
    updateScoreUI()
    resetScoreAfter100()
    
}

//9. added incrementFunction and call it in handleCookieClick
const incrementScore = () => score++

//10. update the dom
const updateScoreUI = () => scoreH4.innerText = `Score: ${score}`


//11. added my first fork if the score is over 100 then reset
const resetScoreAfter100 = () => {

    if (score > 100) {
        alert('wow you are such a cookie patootie clicker score will now reset')
        score = 0
        scoreH4.innerText = `Score: ${score}`
    }
}


//5. i need to update the score variable and append it to score h4 whenever the cookie is clicked first i need to get a handle of the score h4
