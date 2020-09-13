window.secondmath = function(){
    document.getElementById('firstpage').style='display:none';
    document.getElementById('mathpage').style='display:block';
}
window.secondstring = function(){
    document.getElementById('firstpage').style='display:none';
    document.getElementById('stringpage').style='display:block';
}
window.gotofirstfromstring = function(){
    document.getElementById('stringpage').style='display:none';
    document.getElementById('firstpage').style='display:block';
}
window.gotofirstfrommath = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('firstpage').style='display:block';
}

function definition() {
    var synt = document.querySelector(".syntax-para");
    var define = document.querySelector(".defi-para");
    var defBtn = document.getElementById('define');
    var synBtn = document.getElementById('syntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function syntax() {
  var synt = document.querySelector(".syntax-para");
  var define = document.querySelector(".defi-para");
  var defBtn = document.getElementById('define');
  var synBtn = document.getElementById('syntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
/* Math.Round Scripting Start */
window.mathrounds = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathround').style='display:block';
    window.roundcount = 1;
}
window.start = function(){
    document.getElementById('btnbox').style='display:none';
    document.getElementById('inputbox').style='display:block';
    document.getElementById('logicbox').style='display:block';
    document.getElementById('step1').style="color:red";
}
window.roundnext = function(){
    switch(window.roundcount)
    {
        case 1: window.num=document.getElementById('entry').value;
                document.getElementById('entry').disabled=true;
                window.answer = Math.round(window.num);
                document.getElementById('step1').style ="color:blue";
                document.getElementById('step2').style ="color:red";
                document.getElementById('step3').style ="color:red";
                window.roundcount = 2;
                break;
        case 2: document.getElementById('step2').style = "color:blue";
                document.getElementById('step3').style = "color:blue";
                document.getElementById('step4').style = "color:red";
                document.getElementById('output').innerHTML = "Value of n is: "+window.num;
                window.roundcount = 3;
                break;
        case 3: document.getElementById('step4').style = "color:blue";
                document.getElementById('step5').style = "color:red";
                document.getElementById('step6').style = "color:red";
                document.getElementById('output').innerHTML = "Value of n is: "+window.num +"<br>Math.round("+window.num+")="+window.answer;
                window.roundcount = 0;
                break;
        case 0: document.getElementById('roundnextbtn').disabled=true;
                alert("function complete");
                window.roundcount = 1;
                break;
    }
}
window.roundreset = function(){
    document.getElementById('logicbox').style="display:none";
    document.getElementById('inputbox').style="display:none";
    document.getElementById('btnbox').style="display:block";
    document.getElementById('entry').disabled=false;
    document.getElementById('roundnextbtn').disabled=false;
    document.getElementById('output').innerHTML="";
    document.getElementById('step1').style="color:blue";
    document.getElementById('step2').style="color:blue";
    document.getElementById('step3').style="color:blue";
    document.getElementById('step4').style="color:blue";
    document.getElementById('step5').style="color:blue";
    document.getElementById('step6').style="color:blue";
    document.getElementById('entry').value="";
}
/* End of Math.Round Scripting Start */
/* Math.sqrt Scripting Start */
function sqrtdefinition() {
    var synt = document.querySelector("#sqrtsyntax-para");
    var define = document.querySelector("#sqrtdefi-para");
    var defBtn = document.getElementById('sqrtdefine');
    var synBtn = document.getElementById('sqrtsyntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function sqrtsyntax() {
    var synt = document.querySelector("#sqrtsyntax-para");
    var define = document.querySelector("#sqrtdefi-para");
    var defBtn = document.getElementById('sqrtdefine');
    var synBtn = document.getElementById('sqrtsyntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
window.mathsqrt = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathsqrt').style='display:block';
    window.sqrtcount = 1;
}
window.sqrtstart = function(){
    document.getElementById('sqrtbtnbox').style='display:none';
    document.getElementById('sqrtinputbox').style='display:block';
    document.getElementById('sqrtlogicbox').style='display:block';
    document.getElementById('sqrtstep1').style="color:red";
}
window.sqrtnext = function(){
    switch(window.sqrtcount)
    {
        case 1: window.sqrtnum=document.getElementById('sqrtentry').value;
                document.getElementById('sqrtentry').disabled=true;
                window.sqrtanswer = Math.sqrt(window.sqrtnum);
                document.getElementById('sqrtstep1').style ="color:blue";
                document.getElementById('sqrtstep2').style ="color:red";
                document.getElementById('sqrtstep3').style ="color:red";
                window.sqrtcount = 2;
                break;
        case 2: document.getElementById('sqrtstep2').style = "color:blue";
                document.getElementById('sqrtstep3').style = "color:blue";
                document.getElementById('sqrtstep4').style = "color:red";
                document.getElementById('sqrtoutput').innerHTML = "Value of n is: "+window.sqrtnum;
                window.sqrtcount = 3;
                break;
        case 3: document.getElementById('sqrtstep4').style = "color:blue";
                document.getElementById('sqrtstep5').style = "color:red";
                document.getElementById('sqrtstep6').style = "color:red";
                document.getElementById('sqrtoutput').innerHTML = "Value of n is: "+window.sqrtnum +"<br>Math.sqrt("+window.sqrtnum+")="+window.sqrtanswer;
                window.sqrtcount = 0;
                break;
        case 0: document.getElementById('sqrtnextbtn').disabled=true;
                alert("function complete");
                window.sqrtcount = 1;
                break;
    }
}
window.sqrtreset = function(){
    document.getElementById('sqrtlogicbox').style="display:none";
    document.getElementById('sqrtinputbox').style="display:none";
    document.getElementById('sqrtbtnbox').style="display:block";
    document.getElementById('sqrtentry').disabled=false;
    document.getElementById('sqrtnextbtn').disabled=false;
    document.getElementById('sqrtoutput').innerHTML="";
    document.getElementById('sqrtstep1').style="color:blue";
    document.getElementById('sqrtstep2').style="color:blue";
    document.getElementById('sqrtstep3').style="color:blue";
    document.getElementById('sqrtstep4').style="color:blue";
    document.getElementById('sqrtstep5').style="color:blue";
    document.getElementById('sqrtstep6').style="color:blue";
    document.getElementById('sqrtentry').value="";
}
/* End of Math.sqrt Scripting Start */

/* Math.abs Scripting Start */
function absdefinition() {
    var synt = document.querySelector("#abssyntax-para");
    var define = document.querySelector("#absdefi-para");
    var defBtn = document.getElementById('absdefine');
    var synBtn = document.getElementById('abssyntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function abssyntax() {
    var synt = document.querySelector("#abssyntax-para");
    var define = document.querySelector("#absdefi-para");
    var defBtn = document.getElementById('absdefine');
    var synBtn = document.getElementById('abssyntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
window.mathabs = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathabs').style='display:block';
    window.abscount = 1;
}
window.absstart = function(){
    document.getElementById('absbtnbox').style='display:none';
    document.getElementById('absinputbox').style='display:block';
    document.getElementById('abslogicbox').style='display:block';
    document.getElementById('absstep1').style="color:red";
}
window.absnext = function(){
    switch(window.abscount)
    {
        case 1: window.absnum=document.getElementById('absentry').value;
                document.getElementById('absentry').disabled=true;
                window.absanswer = Math.abs(window.absnum);
                document.getElementById('absstep1').style ="color:blue";
                document.getElementById('absstep2').style ="color:red";
                document.getElementById('absstep3').style ="color:red";
                window.abscount = 2;
                break;
        case 2: document.getElementById('absstep2').style = "color:blue";
                document.getElementById('absstep3').style = "color:blue";
                document.getElementById('absstep4').style = "color:red";
                document.getElementById('absoutput').innerHTML = "Value of n is: "+window.absnum;
                window.abscount = 3;
                break;
        case 3: document.getElementById('absstep4').style = "color:blue";
                document.getElementById('absstep5').style = "color:red";
                document.getElementById('absstep6').style = "color:red";
                document.getElementById('absoutput').innerHTML = "Value of n is: "+window.absnum +"<br>Math.abs("+window.absnum+")="+window.absanswer;
                window.abscount = 0;
                break;
        case 0: document.getElementById('absnextbtn').disabled=true;
                alert("function complete");
                window.abscount = 1;
                break;
    }
}
window.absreset = function(){
    document.getElementById('abslogicbox').style="display:none";
    document.getElementById('absinputbox').style="display:none";
    document.getElementById('absbtnbox').style="display:block";
    document.getElementById('absentry').disabled=false;
    document.getElementById('absnextbtn').disabled=false;
    document.getElementById('absoutput').innerHTML="";
    document.getElementById('absstep1').style="color:blue";
    document.getElementById('absstep2').style="color:blue";
    document.getElementById('absstep3').style="color:blue";
    document.getElementById('absstep4').style="color:blue";
    document.getElementById('absstep5').style="color:blue";
    document.getElementById('absstep6').style="color:blue";
    document.getElementById('absentry').value="";
}
/* End of Math.abs Scripting Start */

/* Math.ceil Scripting Start */
function ceildefinition() {
    var synt = document.querySelector("#ceilsyntax-para");
    var define = document.querySelector("#ceildefi-para");
    var defBtn = document.getElementById('ceildefine');
    var synBtn = document.getElementById('ceilsyntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function ceilsyntax() {
    var synt = document.querySelector("#ceilsyntax-para");
    var define = document.querySelector("#ceildefi-para");
    var defBtn = document.getElementById('ceildefine');
    var synBtn = document.getElementById('ceilsyntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
window.mathceil = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathceil').style='display:block';
    window.ceilcount = 1;
}
window.ceilstart = function(){
    document.getElementById('ceilbtnbox').style='display:none';
    document.getElementById('ceilinputbox').style='display:block';
    document.getElementById('ceillogicbox').style='display:block';
    document.getElementById('ceilstep1').style="color:red";
}
window.ceilnext = function(){
    switch(window.ceilcount)
    {
        case 1: window.ceilnum=document.getElementById('ceilentry').value;
                document.getElementById('ceilentry').disabled=true;
                window.ceilanswer = Math.ceil(window.ceilnum);
                document.getElementById('ceilstep1').style ="color:blue";
                document.getElementById('ceilstep2').style ="color:red";
                document.getElementById('ceilstep3').style ="color:red";
                window.ceilcount = 2;
                break;
        case 2: document.getElementById('ceilstep2').style = "color:blue";
                document.getElementById('ceilstep3').style = "color:blue";
                document.getElementById('ceilstep4').style = "color:red";
                document.getElementById('ceiloutput').innerHTML = "Value of n is: "+window.ceilnum;
                window.ceilcount = 3;
                break;
        case 3: document.getElementById('ceilstep4').style = "color:blue";
                document.getElementById('ceilstep5').style = "color:red";
                document.getElementById('ceilstep6').style = "color:red";
                document.getElementById('ceiloutput').innerHTML = "Value of n is: "+window.ceilnum +"<br>Math.ceil("+window.ceilnum+")="+window.ceilanswer;
                window.ceilcount = 0;
                break;
        case 0: document.getElementById('ceilnextbtn').disabled=true;
                alert("function complete");
                window.ceilcount = 1;
                break;
    }
}
window.ceilreset = function(){
    document.getElementById('ceillogicbox').style="display:none";
    document.getElementById('ceilinputbox').style="display:none";
    document.getElementById('ceilbtnbox').style="display:block";
    document.getElementById('ceilentry').disabled=false;
    document.getElementById('ceilnextbtn').disabled=false;
    document.getElementById('ceiloutput').innerHTML="";
    document.getElementById('ceilstep1').style="color:blue";
    document.getElementById('ceilstep2').style="color:blue";
    document.getElementById('ceilstep3').style="color:blue";
    document.getElementById('ceilstep4').style="color:blue";
    document.getElementById('ceilstep5').style="color:blue";
    document.getElementById('ceilstep6').style="color:blue";
    document.getElementById('ceilentry').value="";
}
/* End of Math.ceil Scripting Start */

/* Math.floor Scripting Start */
function floordefinition() {
    var synt = document.querySelector("#floorsyntax-para");
    var define = document.querySelector("#floordefi-para");
    var defBtn = document.getElementById('floordefine');
    var synBtn = document.getElementById('floorsyntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function floorsyntax() {
    var synt = document.querySelector("#floorsyntax-para");
    var define = document.querySelector("#floordefi-para");
    var defBtn = document.getElementById('floordefine');
    var synBtn = document.getElementById('floorsyntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
window.mathfloor = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathfloor').style='display:block';
    window.floorcount = 1;
}
window.floorstart = function(){
    document.getElementById('floorbtnbox').style='display:none';
    document.getElementById('floorinputbox').style='display:block';
    document.getElementById('floorlogicbox').style='display:block';
    document.getElementById('floorstep1').style="color:red";
}
window.floornext = function(){
    switch(window.floorcount)
    {
        case 1: window.floornum=document.getElementById('floorentry').value;
                document.getElementById('floorentry').disabled=true;
                window.flooranswer = Math.floor(window.floornum);
                document.getElementById('floorstep1').style ="color:blue";
                document.getElementById('floorstep2').style ="color:red";
                document.getElementById('floorstep3').style ="color:red";
                window.floorcount = 2;
                break;
        case 2: document.getElementById('floorstep2').style = "color:blue";
                document.getElementById('floorstep3').style = "color:blue";
                document.getElementById('floorstep4').style = "color:red";
                document.getElementById('flooroutput').innerHTML = "Value of n is: "+window.floornum;
                window.floorcount = 3;
                break;
        case 3: document.getElementById('floorstep4').style = "color:blue";
                document.getElementById('floorstep5').style = "color:red";
                document.getElementById('floorstep6').style = "color:red";
                document.getElementById('flooroutput').innerHTML = "Value of n is: "+window.floornum +"<br>Math.floor("+window.floornum+")="+window.flooranswer;
                window.floorcount = 0;
                break;
        case 0: document.getElementById('floornextbtn').disabled=true;
                alert("function complete");
                window.floorcount = 1;
                break;
    }
}
window.floorreset = function(){
    document.getElementById('floorlogicbox').style="display:none";
    document.getElementById('floorinputbox').style="display:none";
    document.getElementById('floorbtnbox').style="display:block";
    document.getElementById('floorentry').disabled=false;
    document.getElementById('floornextbtn').disabled=false;
    document.getElementById('flooroutput').innerHTML="";
    document.getElementById('floorstep1').style="color:blue";
    document.getElementById('floorstep2').style="color:blue";
    document.getElementById('floorstep3').style="color:blue";
    document.getElementById('floorstep4').style="color:blue";
    document.getElementById('floorstep5').style="color:blue";
    document.getElementById('floorstep6').style="color:blue";
    document.getElementById('floorentry').value="";
}
/* End of Math.floor Scripting Start */

/* Math.sin Scripting Start */
function sindefinition() {
    var synt = document.querySelector("#sinsyntax-para");
    var define = document.querySelector("#sindefi-para");
    var defBtn = document.getElementById('sindefine');
    var synBtn = document.getElementById('sinsyntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function sinsyntax() {
    var synt = document.querySelector("#sinsyntax-para");
    var define = document.querySelector("#sindefi-para");
    var defBtn = document.getElementById('sindefine');
    var synBtn = document.getElementById('sinsyntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
window.mathsin = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathsin').style='display:block';
    window.sincount = 1;
}
window.sinstart = function(){
    document.getElementById('sinbtnbox').style='display:none';
    document.getElementById('sininputbox').style='display:block';
    document.getElementById('sinlogicbox').style='display:block';
    document.getElementById('sinstep1').style="color:red";
}
window.sinnext = function(){
    switch(window.sincount)
    {
        case 1: window.sinnum=document.getElementById('sinentry').value;
                document.getElementById('sinentry').disabled=true;
                window.sinanswer = Math.sin(window.sinnum);
                document.getElementById('sinstep1').style ="color:blue";
                document.getElementById('sinstep2').style ="color:red";
                document.getElementById('sinstep3').style ="color:red";
                window.sincount = 2;
                break;
        case 2: document.getElementById('sinstep2').style = "color:blue";
                document.getElementById('sinstep3').style = "color:blue";
                document.getElementById('sinstep4').style = "color:red";
                document.getElementById('sinoutput').innerHTML = "Value of n is: "+window.sinnum;
                window.sincount = 3;
                break;
        case 3: document.getElementById('sinstep4').style = "color:blue";
                document.getElementById('sinstep5').style = "color:red";
                document.getElementById('sinstep6').style = "color:red";
                document.getElementById('sinoutput').innerHTML = "Value of n is: "+window.sinnum +"<br>Math.sin("+window.sinnum+")="+window.sinanswer;
                window.sincount = 0;
                break;
        case 0: document.getElementById('sinnextbtn').disabled=true;
                alert("function complete");
                window.sincount = 1;
                break;
    }
}
window.sinreset = function(){
    document.getElementById('sinlogicbox').style="display:none";
    document.getElementById('sininputbox').style="display:none";
    document.getElementById('sinbtnbox').style="display:block";
    document.getElementById('sinentry').disabled=false;
    document.getElementById('sinnextbtn').disabled=false;
    document.getElementById('sinoutput').innerHTML="";
    document.getElementById('sinstep1').style="color:blue";
    document.getElementById('sinstep2').style="color:blue";
    document.getElementById('sinstep3').style="color:blue";
    document.getElementById('sinstep4').style="color:blue";
    document.getElementById('sinstep5').style="color:blue";
    document.getElementById('sinstep6').style="color:blue";
    document.getElementById('sinentry').value="";
}
/* End of Math.sin Scripting Start */

/* Math.cos Scripting Start */
function cosdefinition() {
    var synt = document.querySelector("#cossyntax-para");
    var define = document.querySelector("#cosdefi-para");
    var defBtn = document.getElementById('cosdefine');
    var synBtn = document.getElementById('cossyntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function cossyntax() {
    var synt = document.querySelector("#cossyntax-para");
    var define = document.querySelector("#cosdefi-para");
    var defBtn = document.getElementById('cosdefine');
    var synBtn = document.getElementById('cossyntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
window.mathcos = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathcos').style='display:block';
    window.coscount = 1;
}
window.cosstart = function(){
    document.getElementById('cosbtnbox').style='display:none';
    document.getElementById('cosinputbox').style='display:block';
    document.getElementById('coslogicbox').style='display:block';
    document.getElementById('cosstep1').style="color:red";
}
window.cosnext = function(){
    switch(window.coscount)
    {
        case 1: window.cosnum=document.getElementById('cosentry').value;
                document.getElementById('cosentry').disabled=true;
                window.cosanswer = Math.cos(window.cosnum);
                document.getElementById('cosstep1').style ="color:blue";
                document.getElementById('cosstep2').style ="color:red";
                document.getElementById('cosstep3').style ="color:red";
                window.coscount = 2;
                break;
        case 2: document.getElementById('cosstep2').style = "color:blue";
                document.getElementById('cosstep3').style = "color:blue";
                document.getElementById('cosstep4').style = "color:red";
                document.getElementById('cosoutput').innerHTML = "Value of n is: "+window.cosnum;
                window.coscount = 3;
                break;
        case 3: document.getElementById('cosstep4').style = "color:blue";
                document.getElementById('cosstep5').style = "color:red";
                document.getElementById('cosstep6').style = "color:red";
                document.getElementById('cosoutput').innerHTML = "Value of n is: "+window.cosnum +"<br>Math.cos("+window.cosnum+")="+window.cosanswer;
                window.coscount = 0;
                break;
        case 0: document.getElementById('cosnextbtn').disabled=true;
                alert("function complete");
                window.coscount = 1;
                break;
    }
}
window.cosreset = function(){
    document.getElementById('coslogicbox').style="display:none";
    document.getElementById('cosinputbox').style="display:none";
    document.getElementById('cosbtnbox').style="display:block";
    document.getElementById('cosentry').disabled=false;
    document.getElementById('cosnextbtn').disabled=false;
    document.getElementById('cosoutput').innerHTML="";
    document.getElementById('cosstep1').style="color:blue";
    document.getElementById('cosstep2').style="color:blue";
    document.getElementById('cosstep3').style="color:blue";
    document.getElementById('cosstep4').style="color:blue";
    document.getElementById('cosstep5').style="color:blue";
    document.getElementById('cosstep6').style="color:blue";
    document.getElementById('cosentry').value="";
}
/* End of Math.cos Scripting Start */


/* Math.exp Scripting Start */
function expdefinition() {
    var synt = document.querySelector("#expsyntax-para");
    var define = document.querySelector("#expdefi-para");
    var defBtn = document.getElementById('expdefine');
    var synBtn = document.getElementById('expsyntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function expsyntax() {
    var synt = document.querySelector("#expsyntax-para");
    var define = document.querySelector("#expdefi-para");
    var defBtn = document.getElementById('expdefine');
    var synBtn = document.getElementById('expsyntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
window.mathexp = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathexp').style='display:block';
    window.expcount = 1;
}
window.expstart = function(){
    document.getElementById('expbtnbox').style='display:none';
    document.getElementById('expinputbox').style='display:block';
    document.getElementById('explogicbox').style='display:block';
    document.getElementById('expstep1').style="color:red";
}
window.expnext = function(){
    switch(window.expcount)
    {
        case 1: window.expnum=document.getElementById('expentry').value;
                document.getElementById('expentry').disabled=true;
                window.expanswer = Math.exp(window.expnum);
                document.getElementById('expstep1').style ="color:blue";
                document.getElementById('expstep2').style ="color:red";
                document.getElementById('expstep3').style ="color:red";
                window.expcount = 2;
                break;
        case 2: document.getElementById('expstep2').style = "color:blue";
                document.getElementById('expstep3').style = "color:blue";
                document.getElementById('expstep4').style = "color:red";
                document.getElementById('expoutput').innerHTML = "Value of n is: "+window.expnum;
                window.expcount = 3;
                break;
        case 3: document.getElementById('expstep4').style = "color:blue";
                document.getElementById('expstep5').style = "color:red";
                document.getElementById('expstep6').style = "color:red";
                document.getElementById('expoutput').innerHTML = "Value of n is: "+window.expnum +"<br>Math.exp("+window.expnum+")="+window.expanswer;
                window.expcount = 0;
                break;
        case 0: document.getElementById('expnextbtn').disabled=true;
                alert("function complete");
                window.expcount = 1;
                break;
    }
}
window.expreset = function(){
    document.getElementById('explogicbox').style="display:none";
    document.getElementById('expinputbox').style="display:none";
    document.getElementById('expbtnbox').style="display:block";
    document.getElementById('expentry').disabled=false;
    document.getElementById('expnextbtn').disabled=false;
    document.getElementById('expoutput').innerHTML="";
    document.getElementById('expstep1').style="color:blue";
    document.getElementById('expstep2').style="color:blue";
    document.getElementById('expstep3').style="color:blue";
    document.getElementById('expstep4').style="color:blue";
    document.getElementById('expstep5').style="color:blue";
    document.getElementById('expstep6').style="color:blue";
    document.getElementById('expentry').value="";
}
/* End of Math.exp Scripting Start */

/* Math.trunc Scripting Start */
function truncdefinition() {
    var synt = document.querySelector("#truncsyntax-para");
    var define = document.querySelector("#truncdefi-para");
    var defBtn = document.getElementById('truncdefine');
    var synBtn = document.getElementById('truncsyntax');
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }

}
function truncsyntax() {
    var synt = document.querySelector("#truncsyntax-para");
    var define = document.querySelector("#truncdefi-para");
    var defBtn = document.getElementById('truncdefine');
    var synBtn = document.getElementById('truncsyntax');
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
  }
}
window.mathtrunc = function(){
    document.getElementById('mathpage').style='display:none';
    document.getElementById('mathtrunc').style='display:block';
    window.trunccount = 1;
}
window.truncstart = function(){
    document.getElementById('truncbtnbox').style='display:none';
    document.getElementById('truncinputbox').style='display:block';
    document.getElementById('trunclogicbox').style='display:block';
    document.getElementById('truncstep1').style="color:red";
}
window.truncnext = function(){
    switch(window.trunccount)
    {
        case 1: window.truncnum=document.getElementById('truncentry').value;
                document.getElementById('truncentry').disabled=true;
                window.truncanswer = Math.trunc(window.truncnum);
                document.getElementById('truncstep1').style ="color:blue";
                document.getElementById('truncstep2').style ="color:red";
                document.getElementById('truncstep3').style ="color:red";
                window.trunccount = 2;
                break;
        case 2: document.getElementById('truncstep2').style = "color:blue";
                document.getElementById('truncstep3').style = "color:blue";
                document.getElementById('truncstep4').style = "color:red";
                document.getElementById('truncoutput').innerHTML = "Value of n is: "+window.truncnum;
                window.trunccount = 3;
                break;
        case 3: document.getElementById('truncstep4').style = "color:blue";
                document.getElementById('truncstep5').style = "color:red";
                document.getElementById('truncstep6').style = "color:red";
                document.getElementById('truncoutput').innerHTML = "Value of n is: "+window.truncnum +"<br>Math.trunc("+window.truncnum+")="+window.truncanswer;
                window.trunccount = 0;
                break;
        case 0: document.getElementById('truncnextbtn').disabled=true;
                alert("function complete");
                window.trunccount = 1;
                break;
    }
}
window.truncreset = function(){
    document.getElementById('trunclogicbox').style="display:none";
    document.getElementById('truncinputbox').style="display:none";
    document.getElementById('truncbtnbox').style="display:block";
    document.getElementById('truncentry').disabled=false;
    document.getElementById('truncnextbtn').disabled=false;
    document.getElementById('truncoutput').innerHTML="";
    document.getElementById('truncstep1').style="color:blue";
    document.getElementById('truncstep2').style="color:blue";
    document.getElementById('truncstep3').style="color:blue";
    document.getElementById('truncstep4').style="color:blue";
    document.getElementById('truncstep5').style="color:blue";
    document.getElementById('truncstep6').style="color:blue";
    document.getElementById('truncentry').value="";
}
/* End of Math.trunc Scripting Start */

window.gotosecondfrommath = function(){
    document.getElementById('mathtrunc').style='display:none';
    document.getElementById('mathexp').style='display:none';
    document.getElementById('mathabs').style='display:none';
    document.getElementById('mathsin').style='display:none';
    document.getElementById('mathcos').style='display:none';
    document.getElementById('mathceil').style='display:none';
    document.getElementById('mathfloor').style='display:none';
    document.getElementById('mathround').style='display:none';
    document.getElementById('mathsqrt').style='display:none';
    document.getElementById('mathpage').style='display:block';
    document.getElementById('trunclogicbox').style="display:none";
    document.getElementById('truncinputbox').style="display:none";
    document.getElementById('truncbtnbox').style="display:block";
    document.getElementById('truncentry').disabled=false;
    document.getElementById('truncnextbtn').disabled=false;
    document.getElementById('truncoutput').innerHTML="";
    document.getElementById('truncstep1').style="color:blue";
    document.getElementById('truncstep2').style="color:blue";
    document.getElementById('truncstep3').style="color:blue";
    document.getElementById('truncstep4').style="color:blue";
    document.getElementById('truncstep5').style="color:blue";
    document.getElementById('truncstep6').style="color:blue";
    document.getElementById('truncentry').value="";
    document.getElementById('explogicbox').style="display:none";
    document.getElementById('expinputbox').style="display:none";
    document.getElementById('expbtnbox').style="display:block";
    document.getElementById('expentry').disabled=false;
    document.getElementById('expnextbtn').disabled=false;
    document.getElementById('expoutput').innerHTML="";
    document.getElementById('expstep1').style="color:blue";
    document.getElementById('expstep2').style="color:blue";
    document.getElementById('expstep3').style="color:blue";
    document.getElementById('expstep4').style="color:blue";
    document.getElementById('expstep5').style="color:blue";
    document.getElementById('expstep6').style="color:blue";
    document.getElementById('expentry').value="";
    document.getElementById('coslogicbox').style="display:none";
    document.getElementById('cosinputbox').style="display:none";
    document.getElementById('cosbtnbox').style="display:block";
    document.getElementById('cosentry').disabled=false;
    document.getElementById('cosnextbtn').disabled=false;
    document.getElementById('cosoutput').innerHTML="";
    document.getElementById('cosstep1').style="color:blue";
    document.getElementById('cosstep2').style="color:blue";
    document.getElementById('cosstep3').style="color:blue";
    document.getElementById('cosstep4').style="color:blue";
    document.getElementById('cosstep5').style="color:blue";
    document.getElementById('cosstep6').style="color:blue";
    document.getElementById('cosentry').value="";
    document.getElementById('sinlogicbox').style="display:none";
    document.getElementById('sininputbox').style="display:none";
    document.getElementById('sinbtnbox').style="display:block";
    document.getElementById('sinentry').disabled=false;
    document.getElementById('sinnextbtn').disabled=false;
    document.getElementById('sinoutput').innerHTML="";
    document.getElementById('sinstep1').style="color:blue";
    document.getElementById('sinstep2').style="color:blue";
    document.getElementById('sinstep3').style="color:blue";
    document.getElementById('sinstep4').style="color:blue";
    document.getElementById('sinstep5').style="color:blue";
    document.getElementById('sinstep6').style="color:blue";
    document.getElementById('sinentry').value="";
    document.getElementById('floorlogicbox').style="display:none";
    document.getElementById('floorinputbox').style="display:none";
    document.getElementById('floorbtnbox').style="display:block";
    document.getElementById('floorentry').disabled=false;
    document.getElementById('floornextbtn').disabled=false;
    document.getElementById('flooroutput').innerHTML="";
    document.getElementById('floorstep1').style="color:blue";
    document.getElementById('floorstep2').style="color:blue";
    document.getElementById('floorstep3').style="color:blue";
    document.getElementById('floorstep4').style="color:blue";
    document.getElementById('floorstep5').style="color:blue";
    document.getElementById('floorstep6').style="color:blue";
    document.getElementById('floorentry').value="";
    document.getElementById('ceillogicbox').style="display:none";
    document.getElementById('ceilinputbox').style="display:none";
    document.getElementById('ceilbtnbox').style="display:block";
    document.getElementById('ceilentry').disabled=false;
    document.getElementById('ceilnextbtn').disabled=false;
    document.getElementById('ceiloutput').innerHTML="";
    document.getElementById('ceilstep1').style="color:blue";
    document.getElementById('ceilstep2').style="color:blue";
    document.getElementById('ceilstep3').style="color:blue";
    document.getElementById('ceilstep4').style="color:blue";
    document.getElementById('ceilstep5').style="color:blue";
    document.getElementById('ceilstep6').style="color:blue";
    document.getElementById('ceilentry').value="";
    document.getElementById('logicbox').style="display:none";
    document.getElementById('inputbox').style="display:none";
    document.getElementById('btnbox').style="display:block";
    document.getElementById('entry').disabled=false;
    document.getElementById('roundnextbtn').disabled=false;
    document.getElementById('output').innerHTML="";
    document.getElementById('step1').style="color:blue";
    document.getElementById('step2').style="color:blue";
    document.getElementById('step3').style="color:blue";
    document.getElementById('step4').style="color:blue";
    document.getElementById('step5').style="color:blue";
    document.getElementById('step6').style="color:blue";
    document.getElementById('entry').value="";
    document.getElementById('abslogicbox').style="display:none";
    document.getElementById('absinputbox').style="display:none";
    document.getElementById('absbtnbox').style="display:block";
    document.getElementById('absentry').disabled=false;
    document.getElementById('absnextbtn').disabled=false;
    document.getElementById('absoutput').innerHTML="";
    document.getElementById('absstep1').style="color:blue";
    document.getElementById('absstep2').style="color:blue";
    document.getElementById('absstep3').style="color:blue";
    document.getElementById('absstep4').style="color:blue";
    document.getElementById('absstep5').style="color:blue";
    document.getElementById('absstep6').style="color:blue";
    document.getElementById('absentry').value="";
    document.getElementById('sqrtlogicbox').style="display:none";
    document.getElementById('sqrtinputbox').style="display:none";
    document.getElementById('sqrtbtnbox').style="display:block";
    document.getElementById('sqrtentry').disabled=false;
    document.getElementById('sqrtnextbtn').disabled=false;
    document.getElementById('sqrtoutput').innerHTML="";
    document.getElementById('sqrtstep1').style="color:blue";
    document.getElementById('sqrtstep2').style="color:blue";
    document.getElementById('sqrtstep3').style="color:blue";
    document.getElementById('sqrtstep4').style="color:blue";
    document.getElementById('sqrtstep5').style="color:blue";
    document.getElementById('sqrtstep6').style="color:blue";
    document.getElementById('sqrtentry').value="";
}