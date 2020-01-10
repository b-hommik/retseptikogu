var item=document.getElementsByClassName("col-sm-3");
window.onload=tagElements();
//import{pildid} from "database.js";
console.log(pildid[0]);

function tagElements(){
    for(var i =0; i<item.length;i++){
        var image=document.createElement("img");
        item[i].appendChild(image);
        image.src="/Files/"+pildid[i]+".jpg";
        if((i+1)%2==0){
            image.id="paaris";
        }
        else{
            image.id="paaritu";
        }

        console.log(item[i]);
    }
}

