var topic, json = $.getJSON("./hierarchy.json");

function homeClickButton() {
    $(".home_button").click(function() {
        topic = $(this).attr("id");
        json.done(function(data) {
            $.each(data[topic]["children"], function(key, value) {
                $("#buttonsDiv").empty().append('<a id="' + key + '" class="btn view_button" role="button">' + value + '</a>');
            });
            viewClickButton();
        });
    });
}

function viewClickButton() {
    $(".view_button").click(function() {
        $(".view_button").removeClass("disabled");
        view = $(this).attr("id");
        var view = $(this).attr("id");
        changeFrame(topic, view);
        $(this).addClass("disabled");
    });
}

function changeFrame(topic, view) {
    $("#viewFrame").load("./views/" + topic + "/" + view + ".html");
}

document.addEventListener('DOMContentLoaded', function() {
    json.done(function(data) {
        $.each(data, function(key, value) {
            $("#buttonsDiv").append('<a id="' + key + '" class="btn home_button" role="button">' + value["name"] + '</a>');
        });
        homeClickButton();
    });
    AOS.init();
}, false);