var topic;

$(".home_button").click(function() {
    topic = $(this).attr("id");
    console.log(topic);
    $("#buttons").load("./views/" + topic + "/buttons.html", function(){
        $(".view_button").click(function() {
            $(".view_button").removeClass("disabled");
            view = $(this).attr("id");
            var view = $(this).attr("id");
            changeFrame(topic, view);
            $(this).addClass("disabled");
        });
    });
});

function changeFrame(topic, view) {
    $("#viewFrame").load("./views/" + topic + "/" + view + ".html");
}

document.addEventListener('DOMContentLoaded', function() {
	AOS.init();
}, false);