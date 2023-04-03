/*var k=0;

function changesize(){
var yourImg = document.getElementById('my_photo');
if(yourImg && yourImg.style) {
    if(k==0){
        yourImg.style.height = '600px';
        yourImg.style.width = '588px';
        k++;
    }
    else{
        console.log(yourImg.style.height);
         yourImg.style.height = '374px';
         yourImg.style.width = '385px';
         k--;
    }
}
}*/

function changesize(){
    var yourImg = document.getElementById('my_photo');
    yourImg.style.height = '374px';
    yourImg.style.width = '385px';

    var ctx = yourImg.getContext("2d");
    ctx.strokeRect(20, 20, 150, 100);

}