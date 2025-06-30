function clickevent()
        {
            document.write("This is Talanta computer school&college");
        };

function mouseoverevent()
{
    alert("This is Talanta");
};

function focusevent()
{
    document.getElementById("input1").style.background="aqua";
};
function keydownevent()
{
    document.getElementById("input3");
    alert("pressed key");
};

document.write("this page is loaded successfully");

document.getElementById("btn").addEventListener("click",fun);
function fun(){
document.getElementById("para").innerHTML="hello world" + "<br>" + " Welcome to talanta";
}

function fun1(){
    alert("Welcome to talanta computer school");
}
function fun2(){
    document.getElementById("para2").innerHTML="This is second function";
}
function fun3(){
    document.getElementById("para3").innerHTML="this is third function";
}
var mybtn=document.getElementById("btn2");
mybtn.addEventListener("click",fun1);
mybtn.addEventListener("click",fun2);
mybtn.addEventListener("click",fun3);


document.getElementById("d1").addEventListener("dbclick",function(){alert('you have double clicked on div element')},false);
document.getElementById("s1").addEventListener("dblclick",function(){alert('you have double clicked on span element')},false);
document.getElementById("d2").addEventListener("dblclick",function(){alert('you have double clicked on div element')},true);
document.getElementById("s2").addEventListener("dblclick",function(){alert('you have double clicked on span element')},true);