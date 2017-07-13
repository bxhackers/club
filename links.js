function setupLinkHandling() {
    window.history.pushState({"html": document.documentElement.outerHTML}, "", window.location.href);

    var anchors = document.getElementsByTagName("a");

    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {
            var href = this.href;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    window.history.pushState({"html": this.responseText}, "", href);
                    document.getElementsByTagName("html")[0].innerHTML = this.responseText;
                    setupLinkHandling();
                }
            };
            xhttp.open("GET", href, true);
            xhttp.send();

            return false;
        };
    }

    window.onpopstate = function(e) {
        if (e.state) {
            document.getElementsByTagName("html")[0].innerHTML = e.state.html;
        }
    };
}

setupLinkHandling();
