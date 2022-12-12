function sendMail() {
    var link = "mailto:SportsHub.tip.PH@gmail.com"
             + "?cc=sportshub2022@gmail.com"
             + "&subject=" + (document.getElementById('subject').value)
             + "&body=" + (document.getElementById('message').value)
    ;

    window.location.href = link;
}