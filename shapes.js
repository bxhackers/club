var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

var colors = ["turquoise", "green", "blue", "purple", "yellow", "orange", "red"];
var shapes = ["triangle", "semicircle", "spring", "line"];

var pixels_per_shape = 128;
var n_shapes = Math.floor((window.innerWidth * window.innerHeight) / Math.pow(pixels_per_shape, 2));

for (var i = 0; i < n_shapes; i++) {
    var svg = document.createElementNS(svgns, "svg");
    svg.style.height = "28px";
    svg.style.left = Math.random() * 100 + "%";
    svg.style.opacity = 0.5;
    svg.style.position = "absolute";
    svg.style.top = Math.random() * 100 + "%";
    svg.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    svg.style.width = "28px";

    var use = document.createElementNS(svgns, "use");
    use.classList.add(rand(colors));
    use.setAttributeNS(xlinkns, "href", "#" + rand(shapes));

    svg.appendChild(use);
    document.getElementById("shapes").appendChild(svg);
}

function rand(array) {
    return array[Math.floor(Math.random() * array.length)];
}
