var anchors = document.getElementsByTagName("a");

for (var i = 0; i < anchors.length; i++) {
    var href = anchors[i].getAttribute("href");

    anchors[i].onclick = function() {
        var href = this.href;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementsByTagName("html")[0].innerHTML = this.responseText;
                window.history.pushState({"html": this.responseText}, "", href);
            }
        };
        xhttp.open("GET", "./about/team.html", true);
        xhttp.send();

        return false;
    };
}
