// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO

const displayRandomBox = function() {
    let r = Math.random()
    if(r < .5) {
        document.write('<div class="green box"></div>')
    }
    else {
        document.write('<div class="blue box"></div>')
    }
}


function displayNBoxesUsingFor(n) {
    for(let i=0; i < n; i++) {
        displayRandomBox()
    }
}

function displayNBoxesUsingWhile(n) {
    let j = 0;
    while(j < n) {
        displayRandomBox()
        j++
    }
}

function displayNBoxesUsingDoWhile(n) {
    let k = 0
    do {
        displayRandomBox()
        k++
    } while(k < n)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

displayNBoxesUsingFor(15)
displayNBoxesUsingWhile(12)
displayNBoxesUsingDoWhile(15)


const square = function(x) {
    return x * x
}

alert(square(100))