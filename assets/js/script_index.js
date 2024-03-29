var topic;
let json = $.getJSON("./hierarchy.json");

function homeClickButton() {
    $(".home_button").off("click");
    $(".home_button").click(function() {
        topic = $(this).attr("id");
        if(json[topic]["name"].startsWith("[")) {
            let name = json[topic]["name"].split("#");
            $("#main_title").empty().append(name[1]);
        } else{
            $("#main_title").empty().append(json[topic]["name"]);
        }
        if(Object.keys(json[topic]["elements"]).length != 0){
            $("#buttonsDiv").empty();
            $("#approfondimentiButtonsDiv").empty();
            $("#subtitle").empty().append("Scegli una vista");
            $("#main_title").prepend(`
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" id="goHome" role="button" style="width: 20px; height: 20px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            `);
            goHome();
            $.each(json[topic]["elements"], function(key, value) {
                $("#buttonsDiv").append('<a id="' + key + '" class="btn view_button" role="button">' + value + '</a>');
            });
        } else {
            $("#buttonsDiv").empty().append('<a id="goHome" class="btn" role="button">Back</a>');
            goHome();
            $("#subtitle").empty().append("Nessun elemento presente al riguardo");
        }
        viewClickButton();
    });
}

function viewClickButton() {
    $(".view_button").off("click");
    $(".view_button").click(function() {
        $(".view_button").removeClass("disabled");
        view = $(this).attr("id");
        var view = $(this).attr("id");
        changeFrame(topic, view);
        $(this).addClass("disabled");
    });
}

function goHome() {
    $("#goHome").off("click");
    $("#goHome").click(function() {
        $("#buttonsDiv").empty();
        $("#approfondimentiButtonsDiv").empty();
        $("#viewFrame").empty();
        $("#main_title").empty().append("Le energie rinnovabili nel mondo");
        $.each(json, function(key, value) {
            if(value["name"].startsWith("[")) {
                let name = value["name"].split("#");
                $("#approfondimentiButtonsDiv").append('<a id="' + key + '" class="btn home_button" role="button">' + name[0] + '<br>' + name[1] + '</a>');
            } else{
                $("#buttonsDiv").append('<a id="' + key + '" class="btn home_button" role="button">' + value["name"] + '</a>');
            }
            $("#subtitle").empty().append("Scegli l'argomento da approfondire");
        });
        homeClickButton();
    });
}

function changeFrame(topic, view) {
    $("#viewFrame").load("./views/" + topic + "/" + view + ".html");
}

document.addEventListener('DOMContentLoaded', function() {
    json.done(function(data) {
        $.each(data, function(key, value) {
            if(value["name"].startsWith("[")) {
                let name = value["name"].split("#");
                $("#approfondimentiButtonsDiv").append('<a id="' + key + '" class="btn home_button" role="button">' + name[0] + '<br>' + name[1] + '</a>');
            } else{
                $("#buttonsDiv").append('<a id="' + key + '" class="btn home_button" role="button">' + value["name"] + '</a>');
            }
        });
        homeClickButton();
        json = data;
    });
    AOS.init();
    console.log("%cMade by Larosa Paolo Maria - Pall1n", "color: #4E82D0; font-size: 20px; font-weight: bold;");
    console.log("%chttps://github.com/Pall1n", "font-size: 20px; font-weight: bold");
}, false);