function setupNavigation() {
    var anchors = document.getElementsByTagName("a");
    var sub_navigation_bars = document.getElementsByClassName("sub-navigation");

    for (var i = 0; i < anchors.length; i++) {
        if (anchors[i].parentElement.id == "main-navigation" && anchors[i].innerHTML != "Home") {
            anchors[i].onmouseover = function(e) {
                for (var j = 0; j < sub_navigation_bars.length; j++) {
                    if (sub_navigation_bars[j].getAttribute("parent") == this.innerHTML) {
                        sub_navigation_bars[j].className = "sub-navigation";
                    } else {
                        sub_navigation_bars[j].className = "sub-navigation hidden";
                    }
                }
            };
        }
    }

    document.getElementById("navigation").onmouseleave = function(e) {
        var selected_anchors = document.getElementsByClassName("selected");
        var sub_navigation_bars = document.getElementsByClassName("sub-navigation");

        for (var i = 0; i < selected_anchors.length; i++) {
            if (selected_anchors[i].parentElement.id == "main-navigation") {
                for (var j = 0; j < sub_navigation_bars.length; j++) {
                    if (sub_navigation_bars[j].getAttribute("parent") == selected_anchors[i].innerHTML) {
                        sub_navigation_bars[j].className = "sub-navigation";
                    } else {
                        sub_navigation_bars[j].className = "sub-navigation hidden";
                    }
                }

                break;
            }
        }
    };
}

setupNavigation();
