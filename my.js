function $(a){
    return document.getElementById(a)
}
var box=document.getElementsByClassName('box')[0];
var timer=null;
console.log(box)
var i=0;
function run(){
   // console.log(i)
    if(i==2){
        i=0;
    }else{
     i++;
    }
    box.style="transform:translateX(-"+i*33.333+"%);";
    //console.log(box.style.transform)
    
}
timer=setInterval(function(){
    run();
},3000);
box.onmouseover=function(e){
    clearInterval(timer)
}
box.onmouseout=function(e){
    timer=setInterval(function(){
         run();
    },3000);
}

//上面是轮播
var time=document.getElementById('time');
        gshi=new Date().getHours();
        gfen=new Date().getMinutes();
        gmiao=new Date().getSeconds();
        var timer1=setInterval(function(){
            var now=new Date();
           
           // console.log(shi-gshi+now.getHours(),fen-gfen+now.getMinutes(),miao-gmiao+now.getSeconds());
},100);

$('guan').onclick=function(){
    var list=$("con").getElementsByClassName('content');
    console.log($("a1").getAttribute('checked'))
    if($("a1").checked){
        for(var i=0;i<list.length;i++){
            list[i].style.display='none';
        }
        document.getElementsByClassName('xiangqing')[0].style.display="block";
        list[0].style.display="block";
    }
     if($("a2").checked){
        for(var i=0;i<list.length;i++){
            list[i].style.display='none';
        }
        document.getElementsByClassName('xiangqing')[0].style.display="none";
        list[1].style.display="block";
    }
     if($("a3").checked){
        for(var i=0;i<list.length;i++){
            list[i].style.display='none';
        }
         document.getElementsByClassName('xiangqing')[0].style.display="none";
        list[2].style.display="block";
    }
}