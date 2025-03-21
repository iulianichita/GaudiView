let arrayUsers=[];

/*function addFacSect(){
    let users=JSON.parse(localStorage.getItem("users"));
    for (let user of users)
    {
        user.fav=[];
    }
    localStorage.setItem('users', JSON.stringify(users));
    
}

addFacSect();*/
/*
function afisareFav(username) {

    let users=JSON.parse(localStorage.getItem("users"));
    let utilizatorActual=localStorage.getItem("username");
    for (const user of users){
        if (user.username === utilizatorActual)
        {
            let imageContainer1 = document.getElementById("img-container1");
            let textContainer1 = document.getElementById("overlay-text1");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer1.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container2");
            let textContainer2 = document.getElementById("overlay-text2");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer2.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container3");
            let textContainer3 = document.getElementById("overlay-text3");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer3.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container4");
            let textContainer4 = document.getElementById("overlay-text4");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer4.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container5");
            let textContainer5 = document.getElementById("overlay-text5");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer5.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container6");
            let textContainer6 = document.getElementById("overlay-text6");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer6.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container7");
            let textContainer7 = document.getElementById("overlay-text7");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer7.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container8");
            let textContainer8 = document.getElementById("overlay-text8");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer8.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container9");
            let textContainer9 = document.getElementById("overlay-text9");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer9.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container10");
            let textContainer10 = document.getElementById("overlay-text10");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer10.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container11");
            let textContainer11 = document.getElementById("overlay-text11");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer11.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container12");
            let textContainer12 = document.getElementById("overlay-text12");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer12.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container13");
            let textContainer13 = document.getElementById("overlay-text13");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer13.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container14");
            let textContainer14 = document.getElementById("overlay-text14");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer14.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container15");
            let textContainer15 = document.getElementById("overlay-text15");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer15.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container16");
            let textContainer16 = document.getElementById("overlay-text16");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer16.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);

                let loginMessageElement = document.getElementById("fav-message");
                loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
                loginMessageElement.style.display = "block";
                setTimeout(() => {
                    loginMessageElement.style.opacity = "0";
                    loginMessageElement.style.position="fixed";
                    loginMessageElement.style.top="88%";
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
                    }, 9900); 
                }, 600);

                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    }


}

if (localStorage.getItem("loggedIn") === "true") {
    let users=JSON.parse(localStorage.getItem("users"));
    let utilizatorActual=localStorage.getItem("username");
    for (const user of users){
        if (user.username === utilizatorActual) //cand imi gaseste utilizatorul actual in lista de users
            {afisareFav(user.username); 
                break;}
    }
    localStorage.setItem('users', JSON.stringify(users));
    
}*/
function showFavMessage() {
    let loginMessageElement = document.getElementById("fav-message");
    loginMessageElement.innerHTML = "Elementul a fost salvat in favorite.";
    loginMessageElement.style.display = "block";
    loginMessageElement.style.opacity = "1";
    loginMessageElement.style.position = "fixed";
    loginMessageElement.style.top = "88%";
    loginMessageElement.style.left = "39%";
    loginMessageElement.style.fontSize = "18px";
    loginMessageElement.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    loginMessageElement.style.fontFamily = "Arial";
    loginMessageElement.style.padding = "20px";
    loginMessageElement.style.borderRadius = "5px";
    loginMessageElement.style.color = "white";
    loginMessageElement.style.transition = "opacity 2s ease-out 0.75s";

    setTimeout(() => {
        loginMessageElement.style.opacity = "0";
        setTimeout(() => {
            loginMessageElement.style.display = "none";
        }, 2000); // Durata tranziției de opacitate
    }, 600);
}

function afisareFav(username) {
    let users = JSON.parse(localStorage.getItem("users"));
    let utilizatorActual = localStorage.getItem("username");
    for (const user of users) {
        if (user.username === utilizatorActual) {
            for (let i = 1; i <= 16; i++) {
                let imageContainer = document.getElementById(`img-container${i}`);
                let textContainer = document.getElementById(`overlay-text${i}`);

                imageContainer.onclick = function() {
                    user.fav.push(textContainer.textContent);
                    console.log("Obiectivul a fost adaugat in favorite");
                    console.log(user);

                    showFavMessage();

                    localStorage.setItem('users', JSON.stringify(users));
                }
            }
        }
    }
}

if (localStorage.getItem("loggedIn") === "true") {
    let users = JSON.parse(localStorage.getItem("users"));
    let utilizatorActual = localStorage.getItem("username");
    for (const user of users) {
        if (user.username === utilizatorActual) {
            afisareFav(user.username);
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
}
