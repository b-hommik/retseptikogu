var item=document.getElementsByClassName("col-sm-3");
var j=0;
var puuduvadPildid=[];

window.onload=tagElements();

//import{pildid} from "database.js";

function tagElements(){
    for(var i =0; i<pildid.length;i++){
        var link=document.createElement("a");
        var image=document.createElement("img");
        j+=1;
        if(j>=8){
            j=0;
        }
        if((i+1)%2==0){
            item[j].appendChild(link);
            link.appendChild(image);
            link.href="Pages/"+lehed[i]+".html";
            image.src="Files/"+pildid[i]+".jpg";
            image.id="paaris";
        }
        else{
            if(item[j].querySelector("#paaritu")){
                
                puuduvadPildid.push(i);

                
            }
            else{
                item[j].appendChild(link);
                link.appendChild(image);
                link.href="Pages/"+lehed[i]+".html";
                image.src="Files/"+pildid[i]+".jpg";
                image.id="paaritu";
            }
        }

        

    }
    console.log(j);
    if(puuduvadPildid.length>0){
        addMissingImages();
    }
}
function addMissingImages(){
    var item2=[];
    for(var i =0; i<item.length;i++){
        if(item[i].querySelector("#paaris")){
            console.log(item[i].childElementCount);
            if(item[i].childElementCount==1){
                item2.push(i);
            }
            
        } else if(item[i].querySelector("#paaritu")){

            
        } else {
            item2.push(i);
        }
    }
    console.log(puuduvadPildid);


    for (var i=0;i<puuduvadPildid.length;i++){
        var link=document.createElement("a");
        var image=document.createElement("img");
        item[item2[i]].appendChild(link);
        link.appendChild(image);
        link.href="Pages/"+lehed[puuduvadPildid[i]]+".html";
        image.src="Files/"+pildid[puuduvadPildid[i]]+".jpg";

        if((i+1)%2==0){
            image.id="paaritu";
        }
        else {
            image.id = "paaris";
        }
    }


}

