var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson']

var box = $("#box");

$("button").click(function (e) {
    box.append('<div class="ball" style= "background-color: ' + colors[Math.floor(Math.random()*10)] + '"></div>' );
});