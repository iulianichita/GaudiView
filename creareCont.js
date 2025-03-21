//pt inregistrare user nou
document.getElementById("formular").addEventListener("submit", function(e) {
    e.preventDefault();

    var phoneValue = document.getElementById("tel").value;
  
    var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  
    if (!phoneRegex.test(phoneValue)) {
        document.getElementById("phoneError").innerHTML = "Introduceți un număr de telefon în formatul corect (xxx-xxx-xxxx).";
        document.getElementById("fieldset").style.left="15%";
    } else {
    document.getElementById("phoneError").textContent = "";
    document.getElementById("fieldset").style.left="24%";
    
    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const nume = document.getElementById("nume").value;
    const dataNasterii = document.getElementById("date").value;
    const telefon = document.getElementById("tel").value;
    const fotografie = document.getElementById("image").files[0];

    const currentDate = new Date();

        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1;
        let currentDay = currentDate.getDate();
        let currentHour = currentDate.getHours();
        let currentMinute = currentDate.getMinutes();
        let currentSecond = currentDate.getSeconds();

        const dataInregistrare = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(currentDay).padStart(2, '0')} ${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}:${String(currentSecond).padStart(2, '0')}`;

    fetch("users.json")
        .then((response) => response.json())
        .then((users) => {
            const userExists = users.some((user) => user.username === username);

            if (userExists) {
                alert("Ne pare rău, user-ul este deja folosit");
            } else {
                // Adăugarea utilizatorului în localStorage
                const newUser = {
                    username: username,
                    password: password,
                    nume: nume,
                    dataNasterii: dataNasterii,
                    telefon: telefon,
                    dataInregistrare: dataInregistrare,
                    fav: []
                };

                // Get existing users from localStorage
                const localStorageUsers = JSON.parse(localStorage.getItem("users")) || [];

                // Check if the user already exists in localStorage
                const localUserExists = localStorageUsers.some(user => user.username === username);

                if (localUserExists) {
                    alert("Ne pare rău, user-ul este deja folosit.");
                } else {
                    // Add the new user to localStorage users array and save it back
                    localStorageUsers.push(newUser);
                    localStorage.setItem("users", JSON.stringify(localStorageUsers));

                    //alert("Utilizatorul a fost înregistrat cu succes!");
                    localStorage.setItem("loggedIn", "true"); //pt a afisa butonul de logout si mesajul coresp

                    // Stocăm datele utilizatorului în localStorage
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    localStorage.setItem("nume", nume);
                    localStorage.setItem("dataNasterii", dataNasterii);
                    localStorage.setItem("telefon", telefon);
                    localStorage.setItem("dataInregistrare", dataInregistrare);
                    localStorage.setItem("fav", fav);
                    if (fotografie) {
                        // Stocăm fișierul imagine în localStorage ca URL
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            localStorage.setItem("fotografie", e.target.result);
                        };
                        reader.readAsDataURL(fotografie);
                    }

                    window.location.href='/bcn.html';
                }
            }
        })
        .catch((error) => {
            console.error("Eroare la preluarea utilizatorului", error);
        });
}});


function utilizatorAleator(users) {
    const indexAleator = Math.floor(Math.random() * users.length); // Generează un index aleatoriu

    return users[indexAleator];
}

const utilizatorRandom = utilizatorAleator(JSON.parse(localStorage.getItem("users")));
console.log("Utilizatori inregistrati:", utilizatorRandom);
console.log("Verifica localStorage pentru a vedea si alti utilizatori.");

document.getElementById("inregistrare").onclick=function(){
    window.location.href="/bcn.html";
}

/*document.getElementById("formular").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const nume = document.getElementById("nume").value;
    const dataNasterii = document.getElementById("date").value;
    const telefon = document.getElementById("tel").value;
    const fotografie = document.getElementById("image").files[0];

    fetch("users.json")
    .then((response) => response.json())
    .then((users) => {
        const userExists = users.some((user) => user.username === username);

        if (userExists) {
            alert("Ne pare rău, user-ul este deja folosit");
        } else {
            // Adăugarea utilizatorului în localStorage
            const newUser = {
                username: username,
                password: password,
                nume: nume,
                dataNasterii: dataNasterii,
                telefon: telefon//,
                //fotografie: fotografie ? fotografie.name : null // salvăm doar numele fișierului
            };

            // Adăugăm utilizatorul în array-ul users și îl stocăm în localStorage
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Utilizatorul a fost înregistrat cu succes!");

            // Stocăm datele utilizatorului în localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("nume", nume);
            localStorage.setItem("dataNasterii", dataNasterii);
            localStorage.setItem("telefon", telefon);
            if (fotografie) {
                // Stocăm fișierul imagine în localStorage ca URL
                const reader = new FileReader();
                reader.onload = function(e) {
                    localStorage.setItem("fotografie", e.target.result);
                };
                reader.readAsDataURL(fotografie);
            }
        }
    })
    .catch((error) => {
        console.error("Eroare la preluarea utilizatorului", error);
    });
});*/

/*
document.getElementById("inregistrare").addEventListener("click", function() {
    
    var nume = document.getElementById("nume").value;
    var dataNasterii = document.getElementById("date").value;
    var telefon = document.getElementById("tel").value;
    var username = document.getElementById("user").value;
    var parola = document.getElementById("password").value;
    
    fetch("users.json")
    .then((response) => response.json())
    .then((users) => {
        const userExists = users.some((user) => user.username === username);
        if (userExists) {
            alert("Numele de utilizator este deja folosit.");
        } else {
            // Crează un obiect pentru noul utilizator
            var newUser = {
                nume: nume,
                dataNasterii: dataNasterii,
                telefon: telefon,
                username: username,
                parola: parola
            };

            // Adaugă noul utilizator în local storage
            var existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            existingUsers.push(newUser);
            localStorage.setItem("users", JSON.stringify(existingUsers));

            alert("Contul a fost înregistrat cu succes!");
        }
    })
    .catch((error) => {
        console.error("Eroare la preluarea utilizatorilor", error);
    });
});

//validarea datelor din formular
var telefon = document.getElementById("telefon").value;
var pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
if (pattern.test(telefon)) {
    alert("Numărul de telefon este valid.");
} else {
    alert("Numărul de telefon nu este valid.");
}

window.onload = function(){
const f=document.getElementById("inregistrare");
f.addEventListener("submit", function(event){
  event.preventDefault();

  alert("mergee");
});
}*/