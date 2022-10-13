let counter = 0

let baslikCounter = document.querySelector("#counter")

let arttirButton = document.querySelector("#arttirButtonInHTML")
let azaltButton = document.querySelector("#azaltButtonInHTML")
let sifirlaButton = document.querySelector("#sifirlaButtonInHTML")
let artiOnArttirButton = document.querySelector("#artiOnArttirButtonInHTML")

arttirButton.style.backgroundColor = "white"
azaltButton.style.backgroundColor = "white"

arttirButton.addEventListener("click" , counterReact)
azaltButton.addEventListener("click" , counterReact )
sifirlaButton.addEventListener("click" , counterReact)
artiOnArttirButton.addEventListener("click" , counterReact)

function counterReact(){
    if(this.id == "arttirButtonInHTML"){
        counter += 1
    }else if(this.id == "artiOnArttirButtonInHTML"){
        counter +=10

    }else if(this.id == "sifirlaButtonInHTML"){
        counter = 0
        
    }else if(!counter == 0){
        counter -= 1
    }
    baslikCounter.innerHTML = counter

    if(counter == 0){
        azaltButton.style.backgroundColor = "#628E90"
    }
    else if(counter > 0){
        azaltButton.style.backgroundColor = "white"
        
    }
    

}

