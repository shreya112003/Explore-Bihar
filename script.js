function func1(){
    window.location.assign("patna.html");
}
function func2(){
    window.location.assign("gaya.html");
}
function func3(){
    window.location.assign("rajgir.html");
}
function func4(){
    window.location.assign("buxar.html");
}
function func5(){
    window.location.assign("rohtas.html");
}
<<<<<<< HEAD
=======

>>>>>>> 7b79dbf4d2ebecb78c4671cd52abc52ea3b7a307
let avlkey=[
    'Patna',
    'Gaya',
    'Rajgir',
    'Buxar',
    'Rohtas',
];

const tour=new Map([
    ["Gaya","gaya.html"],
    ["Patna","patna.html"],
    ["Rajgir","rajgir.html"],
    ["Buxar","buxar.html"],
    ["Rohtas","rohtas.html"]
]);

const resultbox=document.querySelector(".result-box");
const inputbox=document.getElementById("input-box");
const closeBtn=document.querySelector(".closebtn");
const searchBtn=document.querySelector(".searchbtn");

inputbox.onkeyup=function(){
    let result=[];
    let input=inputbox.value;
    if(input.length){
         closeBtn.classList.add("active");
         result=avlkey.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
         });
    } 
    else{
        closeBtn.classList.remove("active");
    }
    display(result);

    //if input is not matching with inner data
    if(!result.length){
        resultbox.innerHTML='';
    }
}


function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultbox.innerHTML="<ul>" + content.join('') + "</ul>";
} 

var filelink="";
function selectInput(list){
    inputbox.value=list.innerHTML;
    resultbox.innerHTML='';
    filelink=tour.get(list.innerHTML);
    // console.log(filelink);
    
}
function func(){
    window.location.assign(filelink);
}

closeBtn.addEventListener("click",function(){
    inputbox.value='';
    resultbox.innerHTML='';
    closeBtn.classList.remove("active");
<<<<<<< HEAD
});
=======
});

>>>>>>> 7b79dbf4d2ebecb78c4671cd52abc52ea3b7a307
