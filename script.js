

let quotesSpace = document.getElementById("quotes")
let authorSpace = document.getElementById("author")



const api_url = "https://api.quotable.io/random"

async function getquotes(url){

let response = await fetch(url)

let data = await response.json()

console.log(data)

quotesSpace.innerHTML = data.content
authorSpace.innerHTML = data.author
   
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quotesSpace.innerHTML + " ---by " + authorSpace.innerHTML, "Tweet Window", "width=700", "height=300")
}




