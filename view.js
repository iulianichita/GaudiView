/*function afisareFav(username) {

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
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container2");
            let textContainer2 = document.getElementById("overlay-text2");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer2.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container3");
            let textContainer3 = document.getElementById("overlay-text3");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer3.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
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
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container6");
            let textContainer6 = document.getElementById("overlay-text6");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer6.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container7");
            let textContainer7 = document.getElementById("overlay-text7");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer7.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container8");
            let textContainer8 = document.getElementById("overlay-text8");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer8.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container9");
            let textContainer9 = document.getElementById("overlay-text9");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer9.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container10");
            let textContainer10 = document.getElementById("overlay-text10");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer10.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container11");
            let textContainer11 = document.getElementById("overlay-text11");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer11.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container12");
            let textContainer12 = document.getElementById("overlay-text12");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer12.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container13");
            let textContainer13 = document.getElementById("overlay-text13");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer13.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container14");
            let textContainer14 = document.getElementById("overlay-text14");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer14.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container15");
            let textContainer15 = document.getElementById("overlay-text15");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer15.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

            imageContainer1 = document.getElementById("img-container16");
            let textContainer16 = document.getElementById("overlay-text16");

            imageContainer1.onclick = function(){
                user.fav.push(textContainer16.textContent);
                console.log("Obiectivul a fost adaugat in favorite");
                console.log(user);
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

