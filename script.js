console.log("ready :)")


function hide(el) {
    el.remove();
}

var likes = [3, 5, 8];
var spans = [
    document.querySelector("#span-1"),
    document.querySelector("#span-2"),
    document.querySelector("#span-3")
];

function like(id) {
    console.log(id)
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}



// function dogMessage() {
//     alert("You are looking at dogs!");
// }

// function catMessage() {
//     alert("You are looking at cats!");
// }
// console.log(catMessage)
// console.log(dogMessage)

// function giveDogAlert(){
//     alert("You are looking at dogs!")
// }

// function giveCatAlert(){
//     alert("You are looking at cats!")
// }

// if (let .pets == ".dog") {
//     function giveDogAlert;
// } else if (".pets" = ".cat"){
//     function giveCatAlert
// }