const utilizator = JSON.parse(localStorage.getItem("users"));

if(localStorage.getItem("loggedIn") === "true"){
for (let u of utilizator){

    if (localStorage.getItem("username")===u.username)
        {
            document.getElementById("nume").textContent +=u.nume;
            document.getElementById("util").textContent +=u.username;
            document.getElementById("tel").textContent +=u.telefon;
            document.getElementById("nas").textContent +=u.dataNasterii;
            document.getElementById("inr").textContent +=u.dataInregistrare;

            if(u.fav.length == 0){
                document.getElementById("obfav").innerHTML ='nu exista obiective favorite salvate';   
                document.getElementById("obfav").style.width="60%";
            }
            else{
                
                document.getElementById("obfav").innerHTML =''; 
                for (const f of u.fav){
                    document.getElementById("obfav").textContent +=f;
                }
            }
        }}
}
else{
    document.getElementById("containerFav").innerHTML='Ne pare rau, e necesara conectarea pentru a accesa informatiile.';
    document.getElementById("containerFav").style.left="33%";
    document.getElementById("login-form").style.left="37%";
    document.getElementById("login-form").style.top="43%";
}

document.getElementById("but").style.width="250px";
document.getElementById("but").style.position="absolute";
document.getElementById("but").style.top="-400%";
document.getElementById("but").style.left="40px";
document.getElementById("but").style.fontSize="17px";


if(localStorage.getItem("loggedIn") === "true")
{
console.log("Ultima logare cu succes la: ");
console.log(localStorage.getItem("data-login"));
console.log(localStorage.getItem("ora-login"));

butonLogOut = document.getElementById("log").innerHTML='Log out';



if(butonLogOut) {
    butonLogOut.onclick = function(){
        localStorage.setItem("loggedIn", "false");
    };

}}