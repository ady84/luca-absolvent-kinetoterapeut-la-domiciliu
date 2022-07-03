function checkPass(pass) {
    if (event.key === "Enter") {
        if (pass.value === "lucasugepula") {
            window.location.href = "panel.html";
        } else {
            alert("Parola incorecta");
            window.location.href = "index.html";
        }
    }
}