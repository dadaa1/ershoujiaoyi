function $(a){
    return document.getElementById(a)
}
var list=$('phone_list').children[0];
  var i=0;
list.onclick=function(e){
    console.log(e.target.tagName=="LI",i)
    if(e.target.tagName=="LI"){
        if(i==0){
            this.setAttribute('data-index',"收起");
            this.style.height="80px"
            i=1;
        }else if(i==1){
            this.setAttribute('data-index',"展开");
             this.style.height="40px"
            i=0;
        }
        
    }
}