const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey ="c+IfcUtkI4G2j7z3rPpm+w==m1Ot4XO7tPlEdfpF"

const options ={
    method: "GET",
    headers: {
        "X-Api-Key": apiKey, 
    },
};

const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){
    try{  
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL,options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
} catch (error) {

    jokeEl.innerText = "An error happened, please try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log (error);
}
}

btnEl.addEventListener("click", getjoke);