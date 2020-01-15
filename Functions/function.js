var item=document.getElementsByClassName("col-sm-3");
var j=0;
window.onload=tagElements();
//import{pildid} from "database.js";

function tagElements(){
    for(var i =0; i<pildid.length;i++){
        var link=document.createElement("a");
        var image=document.createElement("img");
        item[j].appendChild(link);
        item[j].appendChild(image);
        link.href="Pages/"+lehed[i]+".html";
        image.src="Files/"+pildid[i]+".jpg";
        j+=1;
        if(j>=4){
            j=0;
        }
        if((i+1)%2==0){
            image.id="paaris";
        }
        else{
            image.id="paaritu";
        }

        console.log(item[j]);
    }
}

