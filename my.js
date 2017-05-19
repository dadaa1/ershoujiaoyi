function $(a){
    return document.getElementById(a)
}
//轮播
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
    for(var j=0;j<$("circle").children.length;j++){
         $("circle").children[j].style.background="";
    }
    $("circle").children[i].style.background="red";
    box.style="transform:translateX(-"+i*33.333+"%);";
    //console.log(box.style.transform)
    
}
timer=setInterval(function(){
    run();
},3000);
$('wrap').onmouseover=function(e){
    clearInterval(timer)
}
$('wrap').onmouseout=function(e){
    timer=setInterval(function(){
         run();
    },3000);
}
var btn=$('prenext').children;
btn[0].onclick=function(){
    if(i==0){
      i=2;
    }else{
     i--;
    }
    for(var j=0;j<$("circle").children.length;j++){
         $("circle").children[j].style.background="";
    }
    $("circle").children[i].style.background="red";
    box.style="transform:translateX(-"+i*33.333+"%);";
}
btn[1].onclick=function(){
    if(i==2){
      i=0;
    }else{
     i++;
    }
    for(var j=0;j<$("circle").children.length;j++){
         $("circle").children[j].style.background="";
    }
    $("circle").children[i].style.background="red";
    box.style="transform:translateX(-"+i*33.333+"%);";
}

var time=document.getElementById('time');
var will_time=new Date();
will_time.setDate(18);
will_time.setHours(18);
will_time.setMinutes(0);
var timer1=setInterval(function(){
     var now_time=new Date();
     miao=will_time-now_time/1000;
     fen=miao/60;
     shi=fen/60;
     ymiao=parseInt((will_time-now_time)/1000)%60;
     yfen=parseInt(miao/60)%60;
     yshi=parseInt(fen/60)%60;
     ytian=parseInt(shi/60)%24;
    // console.log(ymiao,yfen,"shi",shi,yshi,ytian);       
           
           
},1000);

//切换
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

