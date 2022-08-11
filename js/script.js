var obj;
var uniq;
var folder;
var http=new XMLHttpRequest();
http.onreadystatechange=function() {
    folder=document.getElementById("folder-site");
    if(http.status==200 && http.readyState==4){
    obj=JSON.parse(this.response);
    arr=new Array();
    for(var i=0;i<obj.length;i++)
    {
        arr[i]=obj[i].albumId;
    }
    uniq=[...new Set(arr)];
    for(var i=0;i<uniq.length;i++)
    {
        folder.innerHTML+=`
        <div class="fol-cont ${i+1}" value="album${1}" onclick="func(this.className)">
        <img class="fol-ico" src="img/folder.png">
        <span class="alb-name">Album${i+1}</span>
    </div>`;
    }
}
}
http.open("GET","https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",true );
http.send();

function func(a){
    var clickdiv=a;
    console.log(clickdiv);
    clickdiv=clickdiv.split(" ");
    folder.innerHTML=``;
    $(".fa-angle-left").css("color","white");
    $(".fa-angle-left").css("font-weight","bold");
    var count=0;
    for(var i=0;i<obj.length;i++)
    {
        if(obj[i].albumId==clickdiv[1])
        {
        folder.innerHTML+=`
        <div class="img-cont">
        <img class="img-ico" src="${obj[i].url}">
    </div>`;
    console.log("working");
        }

    }
$(".fa-angle-left").click(function()
{
    folder.innerHTML=``;
    for(var i=0;i<uniq.length;i++)
{
    folder.innerHTML+=`
    <div class="fol-cont ${i+1}" value="album${1}" onclick="func(this.className)">
        <img class="fol-ico" src="img/folder.png">
        <span class="alb-name">Album${i+1}</span>
        </div>`;
}
})
    
};



































/*
$(".fol-cont").click(function () {
    var clickdiv=this.className;
    clickdiv=clickdiv.split(" ");
    folder.innerHTML=``;
    $(".fa-angle-left").css("color","white");
    $(".fa-angle-left").css("font-weight","bold");
    var count=0;
    for(var i=0;i<obj.length;i++)
    {
        if(obj[i].albumId==clickdiv[1])
        {
        folder.innerHTML+=`
        <div class="img-cont">
        <img class="img-ico" src="${obj[i].url}">
    </div>`;
    console.log("working");
        }

    }
    $(".fa-angle-left").click(function()
{
    folder.innerHTML=``;
    for(var i=0;i<uniq.length;i++)
{
    folder.innerHTML+=`
    <div class="fol-cont ${i+1}" value="album${1} onclick="func()">
    <img class="fol-ico" src="img/folder.png">
    <span class="alb-name">Album${i+1}</span>
</div>`;
}
})
    
});    */