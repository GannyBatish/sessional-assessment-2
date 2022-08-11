var http=new XMLHttpRequest();
http.onreadystatechange=function() {
    var folder=document.getElementById("folder-site");
    if(http.status==200 && http.readyState==4){
    var obj=JSON.parse(this.response);
    var arr=new Array();
    for(var i=0;i<obj.length;i++)
    {
        arr[i]=obj[i].albumId;
    }
    var uniq=[...new Set(arr)];
    for(var i=0;i<uniq.length;i++)
    {
        folder.innerHTML+=`
        <div class="fol-cont class="album${i}">
        <img class="fol-ico" src="img/folder.png">
        <span class="alb-name">Album${i+1}</span>
    </div>`;
    }
}
}
http.open("GET","https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",true );
http.send();