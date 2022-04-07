const textArea = document.getElementById("textArea1");
const bigger = document.getElementById("bigger");
const bold = document.getElementById("bold");
const normal = document.getElementById("normal");
const moo = document.getElementById("moo");



bigger.onclick = biggerSize;
bold.onchange = changeFont;
normal.onchange = normalFont;
moo.onclick = upper;



function biggerSize(){
    textArea.style.fontSize = "24px";
    
};


function changeFont(){
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
};

function normalFont(){
    
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";

}

function upper(){
    textArea.style.textTransform = "uppercase";
    let hold = textArea.value;
    let parts = hold.split(".");
    textArea.value = parts.join("-Moo");
}

