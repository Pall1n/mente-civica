$(".view_button").click(function() {
    var view = $(this).attr("id");
    changeFrame(view);
    $(this).addClass("disabled");
});

$(".menu_button").click(function() {
    var topic = $(this).attr("id");
    window.location = "./views/"+topic+"/index.html";
});

function changeFrame(view) {
    $("#viewFrame").load("./views/" + view + ".html");
}