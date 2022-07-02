function showDiv() {fisi();document.getElementById('subkonten').style.opacity = "1"; document.getElementById('konten').style.top = "0";document.getElementById('ftawal').style.opacity = "1";document.getElementById('ftawal').style.height = "160px";document.querySelector("body").style.animation = "fanim 9s ease infinite";}
  function showKlik() {document.getElementById('tombKlik').style.visibility = "visible";document.getElementById('tombKlik').style.opacity = "1";}
  function tombol() {document.getElementById('tombWA').style.visibility = "visible";document.getElementById('tombWA').style.opacity = "1";}  

function fisi(){
if(o<isi.length){document.getElementById("text1").innerHTML += isi.charAt(o);o++;setTimeout(fisi,100);}
if(o==isi.length){fisi2();}}
function fisi2(){
if(o2<isi2.length){document.getElementById("text2").innerHTML += isi2.charAt(o2);o2++;setTimeout(fisi2,200);}
if(o2==isi2.length){fisi3();}}
function fisi3(){
if(o3<isi3.length){document.getElementById("text3").innerHTML += isi3.charAt(o3);o3++;setTimeout(fisi3,300);}
if(o3==isi3.length){fisi4();}}
function fisi4(){
if(o4<isi4.length){document.getElementById("text4").innerHTML += isi4.charAt(o4);o4++;setTimeout(fisi4,400);}
if(o4==isi4.length){showKlik();}}

async function duar(){
var e1 = document.getElementById('animasi');e1.classList.add("degdeg");
duar2();
document.body.style.backgroundColor = "#000";
document.getElementById('ftawal').style.opacity = "0";document.getElementById('ftawal').style.height = "0";
document.getElementById('fotoloveu').style.opacity = "1";document.getElementById('fotoloveu').style.height = "200px";document.getElementById('fotoloveu').style.margin = "50px 0 0 0";
document.getElementById('subkonten').style.display = "none";
}
function duar2(){
if(a<finish.length){document.getElementById("sp2").innerHTML += finish.charAt(a);a++;setTimeout(duar2,100);}
if(a==finish.length){duar3();}
}
function duar3(){
if(i<finish2.length){document.getElementById("sp3").innerHTML += finish2.charAt(i);i++;setTimeout(duar3,200);}
if(i==finish2.length){setTimeout(tombol,1000);}
}

async function expl(){setTimeout(duar,200);}