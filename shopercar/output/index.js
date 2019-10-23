var obj={
    number0:1,
    number1:1,
    number2:1,
    number3:1,
    number4:1,
    number5:1,
    number6:1,
    }
    var oImg=document.getElementsByClassName('editboximg');
    var oEdit=document.getElementsByClassName('editbox');
    // var oDel=document.getElementById('selectboxContainerp5');
    var up=document.getElementsByClassName('downimg3');
    var down=document.getElementsByClassName('downimg4');
    var sum=document.getElementsByClassName('downp');
    var oShop=document.getElementsByClassName('selectboxContainer');
    var aSele=document.getElementsByClassName('selectboxContainerinput');
    var aSleall=document.getElementsByClassName('selectall');
    var oMesdel=document.getElementById('deletemessagedelete');
    var oFlomes=document.getElementById('floatmessage');
    var oFloimg=document.getElementById('deletemessageimg');
    // var oDeling=document.getElementById("deletemessageimg")
    sum[0].innerHTML=obj.number0;
    sum[1].innerHTML=obj.number1;
    sum[2].innerHTML=obj.number2;
    sum[3].innerHTML=obj.number3;
    sum[4].innerHTML=obj.number4;
    sum[5].innerHTML=obj.number5;


    for(var i=0;i<oImg.length;i++){
        oImg[i].th=i;
        oEdit[i].th=i;

        oEdit[i].onmouseover=function(){
        var num1=this.th;
        oEdit[this.th].style.border="2px dotted #EEEEEE";

        oImg[num1].onmouseover=function(){
            oImg[num1].classList.add("hoverimg");
            oEdit[num1].classList.add("edithover");
        }
        oEdit[this.th].onmouseout=function(){
            oEdit[this.th].style.border="none"
        }
        }

        

        oImg[i].onmouseout=function(){
            oImg[this.th].classList.remove("hoverimg");
            oEdit[this.th].classList.remove("edithover");
            var num=this.th;
            oEdit[num].onmouseover=function(){
                oEdit[num].style.border="2px dotted #EEEEEE"
            }
            oEdit[num].onmouseout=function(){
                oEdit[num].style.border="none"
            }
        }
       
       
    }
    for(var i=0;i<oShop.length;i++ ){
        oShop[i].th=i;
        oShop[i].onclick=function(){
            if(aSele[this.th].checked==true){
                this.style.backgroundColor="#FFF2EB"
                this.style.border="1px solid #EF301A"
            }
            if(aSele[this.th].checked==false){
                this.style.backgroundColor="white"
                this.style.border="1px solid  #F0F0F0"
            }
        }
}
for(var i=0;i<aSleall.length;i++){
    aSleall[i].th=i;
    aSleall[i].onclick=function(){
        if(aSleall[0].checked||aSleall[1].checked){
            for(var j=0;j<aSele.length;j++){
                aSele[j].checked=true;
                oShop[j].style.backgroundColor="#FFF2EB"
                oShop[j].style.border="1px solid  #EF301A"
            }
        }
        else{
            for(var j=0;j<aSele.length;j++){
                aSele[j].checked=false;
                oShop[j].style.backgroundColor="white"
                oShop[j].style.border="1px solid #F0F0F0"
            }
        }
    }
}
    
for(var i=0;i<oShop.length;i++ ){
        up[i].th=i;
        up[i].onclick=function(){
        var str='number'+this.th;
        obj[str]++;
        sum[this.th].innerHTML=obj[str];
    }
}
for(var i=0;i<oShop.length;i++ ){
        down[i].th=i;
        down[i].onclick=function(){
        var str='number'+this.th;
        obj[str]--;
        sum[this.th].innerHTML=obj[str];
    }
}
oMesdel.onclick=function(){
    oFlomes.style.display="block"
}
oFloimg.onmouseover=function(){
    oFloimg.classList.add("imghoverdel");
}

oFloimg.onmouseout=function(){
    oFloimg.classList.remove("imghoverdel");
}
oFloimg.onclick=function(){
    oFlomes.style.display="none"
}
