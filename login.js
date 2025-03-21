localStorage.setItem("loggedIn", "false");

function checkLocalStorage(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.username === username && user.password === password);
}

document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("users.json")
    .then((response) => response.json())
    .then((users) => {
        const userExists = users.some(
            (user) => user.username === username && user.password === password
        ) || checkLocalStorage(username, password) ;
        if (userExists) {
            sessionStorage.setItem("username", username);
            alert("autentificare reusita");
            console.log("autentificare reusita");

            const currentDate = new Date();

            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;
            const currentDay = currentDate.getDate();
            const currentHour = currentDate.getHours();
            const currentMinute = currentDate.getMinutes();
            const currentSecond = currentDate.getSeconds();

            console.log("Data login:", currentYear + "-" + currentMonth + "-" + currentDay);
            console.log("Ora login:", currentHour + ":" + currentMinute + ":" + currentSecond);

            localStorage.setItem("data-login", String(currentYear)+"-"+String(currentMonth)+"-"+currentDay);
            localStorage.setItem("ora-login", currentHour.toString()+":"+currentMinute.toString()+":"+currentSecond.toString());


            setTimeout(function () {
                window.location.href = "/bcn.html";
            }, 500)

            localStorage.setItem("loggedIn", "true"); //pt a afisa butonul de logout si mesajul coresp
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("nume", "");
            localStorage.setItem("dataNasterii", "");
            localStorage.setItem("telefon", "");
            localStorage.setItem("fotografie", "");
        }
        else {
            window.location.href = "/404.html";
        }
    })
    .catch((error) =>
    {
        console.error("eroare la preluarea utilizatorului", error);
    });
});

function create(tag, text, attributes = {}){
    var elNou=document.createElement(tag);
    var textNou=document.createTextNode(text);
    elNou.appendChild(textNou);

    for (let key in attributes){
            elNou.setAttribute(key, attributes[key]);
    }

    return elNou;
}
function changeStyle(el){
    el.style.color = "beige";
    el.style.fontFamily='Times New Roman';
    el.style.fontSize='40px';
    el.style.top='33%';
    el.style.left='15%';
    el.style.position='absolute';
}
function changeStyle2(el){
    el.style.color = "#9f9f9f";
    el.style.fontFamily='Arial';
    el.style.fontSize='14px';
    el.style.top='62%';
    el.style.left='16%';
    el.style.position='absolute';
}
/*function changeStyle3(el){
    el.style.color = "white";
    el.style.fontFamily='Arial';
    el.style.fontSize='14px';
    el.style.top='62%';
    el.style.left='16%';
    el.style.position='absolute';
    el.style.borderRadius='0%';
}*/


window.onload = function() {

    changeStyle(document.getElementsByClassName('date')[0]);

    //crearea de elem
    var link=create('a', 'Nu ești înregistrat? Apasă aici', {href: 'creareCont.html'});
    changeStyle2(link);
    document.body.appendChild(link);
    link.addEventListener('mouseover', function(){
        link.style.textDecoration='underline';
    });
    link.addEventListener('mouseout', function(){
        link.style.textDecoration='none';
    })

    //modificare style formular din creareCont.html
    /*var idForm=document.getElementById("nume");
    changeStyle3(idForm);*/

    document.getElementById("back").onclick = function(){
        window.location.href='/bcn.html';
    }

}