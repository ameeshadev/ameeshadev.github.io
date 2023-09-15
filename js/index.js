function opengithub(){
    window.open("https://github.com/ameeshadev");
    
}
function menu(){
    var checkbox=document.getElementById("checkbox");
        if(checkbox.checked==true){
            document.getElementById("homepage").style.display="block";
           // document.getElementById("menuicon").className="fa fa-bars";
           document.getElementById("mainmenuicon").className="fa fa-close";

            
        }
        else{
            document.getElementById("homepage").style.display="none";
            //document.getElementById("menuicon").className="close";
            document.getElementById("mainmenuicon").className="fa fa-bars";

        }

}