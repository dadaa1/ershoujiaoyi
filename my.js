var box=document.getElementsByClassName('box')[0];
console.log(box)
var i=0;
function run(){
    console.log(i)
    if(i==2){
        i=0;
    }else{
     i++;
    }
    box.style="transform:translateX(-"+i*33.333+"%);";
    console.log(box.style.transform)
    
}
setInterval(function(){
    run();
},3000);