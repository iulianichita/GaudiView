function create(tag, text, attributes = {}){
    var elNou=document.createElement(tag);
    var textNou=document.createTextNode(text);
    elNou.appendChild(textNou);

    for (let key in attributes){
            elNou.setAttribute(key, attributes[key]);
    }

    return elNou;
}

function deleteElement(links){
    if (links.length > 0) 
        var lastLink = links[links.length - 1];
        
        lastLink.remove();
}

function afisareUser()
{
    if(localStorage.getItem("loggedIn") === "true"){
        
        const userNameDisplay = document.getElementById("nume-user");
        let loggedInUser = localStorage.getItem("username");
        if (loggedInUser) {
            
            userNameDisplay.innerHTML = loggedInUser;
        }
    
        else
        {alert(5);}
    }
}


window.onload = function() {

    const elementToChangeColor = document.getElementById("log");

    elementToChangeColor.addEventListener('mouseover',function() {
        this.style.color = 'green';
        this.style.textDecoration = 'underline';
    });

    elementToChangeColor.addEventListener('mouseout', function() {
        this.style.color = 'black';
        this.style.textDecoration = 'none';
    });

    //stergere element html
    //(vreau sa sterg ultimul element din div ul cu id "tx" din bcn.html)
    var links = document.getElementById('tx').getElementsByTagName('a');

    deleteElement(links);
    
    
    let butonLogOut;

    let ok=0;
    if(localStorage.getItem("loggedIn") === "true")
    {
    console.log("Ultima logare cu succes la: ");
    console.log(localStorage.getItem("data-login"));
    console.log(localStorage.getItem("ora-login"));

    butonLogOut = document.getElementById("log").innerHTML='Log out';
    
    if (ok==0){
    const loginMessageElement = document.getElementById("login-message");
    loginMessageElement.style.display = "block";
    setTimeout(() => {
        ok=1;
        loginMessageElement.style.opacity = "0";
        loginMessageElement.style.position="fixed";
        loginMessageElement.style.top="86%";
        loginMessageElement.style.left="39%";
        loginMessageElement.style.fontSize="18px";
        loginMessageElement.style.backgroundColor="rgba(0, 0, 0, 0.9)";
        loginMessageElement.style.fontFamily="Arial";
        loginMessageElement.style.padding="20px";
        loginMessageElement.style.borderRadius="5px";
        loginMessageElement.style.color="white";
        loginMessageElement.style.transition="opacity 2s ease-out 0.75s";
        setTimeout(() => {
            loginMessageElement.style.display = "none";
        }, 9000); 
    }, 1000);
    
    if (localStorage.getItem("loggedIn") === "true") {
        const loginMessageElement = document.getElementById("login-message");
        loginMessageElement.style.display = "block";
        const userNameDisplay = document.getElementById("login-message");
        let loggedInUser = localStorage.getItem("username");
        if (loggedInUser) {
            userNameDisplay.innerHTML = 'Te-ai logat cu succes, ' + loggedInUser+'!';
        } else {
            console.log("eroare la preluarea numelui utilizatorului din localStorage");
        }
    }}
    
    
    if(butonLogOut) {
        document.getElementById("log").addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior
            localStorage.setItem("loggedIn", "false");
            this.innerHTML = '<a href="bcn.html"> Log in </a>';
        });
        }
    
    }

}