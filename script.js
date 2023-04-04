var k=0;

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
}



/*document.addEventListener('keydown', function(event) {
    if (event.key == 'a') {
      var hiddenElement = document.getElementById("a");
      hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    }
    if (event.key == 'b') {
        var hiddenElement = document.getElementById("b");
        hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    }
    if (event.key == 'c') {
        var hiddenElement = document.getElementById("c");
        hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    }
    if (event.key == 'd') {
        var hiddenElement = document.getElementById("d");
        hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    }
    if (event.key == 'e') {
        var hiddenElement = document.getElementById("e");
        hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    }    
    if (event.key == 'f') {
        var hiddenElement = document.getElementById("f");
        hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    }    
  });*/

  document.addEventListener('keydown', function(event) {
      var hiddenElement = document.getElementById(event.key);
      hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
});
