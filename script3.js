// Fact button
const btn1 =document.querySelector('.btn1');
const btn2 =document.querySelector('.btn2');
let para = document.querySelector("p");
let img = document.querySelector("img")

//Image button
let url1 = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

function getFacts(){
    let res = fetch(url1);
    return res;
}


function getImage(){
    let res2 = fetch(url2);
    return res2;
}

// Random Cat Fact API

btn1.addEventListener("click", ()=>{
    getFacts()
    .then((res)=>{
        console.log(res);
        return res.json()
    })
    .then((data)=>{
        console.log(data.fact);
        para.innerText = data.fact;
        para.style.fontFamily = "papyrus";
        para.style.fontSize = "1.5em"
    })
})



btn2.addEventListener("click", ()=>{
    getImage()
    .then((res2)=>{
        console.log(res2);
        return res2.json()
    })
    .then((data)=>{
        console.log(data.message);
        img.src = data.message;
        img.style.height = "150px";
        img.style.width = "150px";
        img.style.boxShadow = "0px 16px 16px black"
    })
})