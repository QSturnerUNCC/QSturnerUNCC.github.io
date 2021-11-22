$(document).ready(function() {
	$("a[title|='toobin']").click(function() {
        $("#title").html("");
        $("#month").html("");
        $("#speaker").html("");
        $("#text").html("");
        $("#image").html("");

        $.getJSON("toobin.json", function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#title").append(value.title);
                    $("#month").append(value.month);
                    $("#speaker").append(value.speaker);
                    $("#text").append(value.text);
                    $("#image").attr("src", value.image)
                });
            });
        });
    });

    $("a[title|='sorkin']").click(function() {
        $("#title").html("");
        $("#month").html("");
        $("#speaker").html("");
        $("#text").html("");
        $("#image").html("");

        $.getJSON("sorkin.json", function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#title").append(value.title);
                    $("#month").append(value.month);
                    $("#speaker").append(value.speaker);
                    $("#text").append(value.text);
                    $("#image").attr("src", value.image)
                });
            });
        });
    });

    $("a[title|='chua']").click(function() {
        $("#title").html("");
        $("#month").html("");
        $("#speaker").html("");
        $("#text").html("");
        $("#image").html("");

        $.getJSON("chua.json", function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#title").append(value.title);
                    $("#month").append(value.month);
                    $("#speaker").append(value.speaker);
                    $("#text").append(value.text);
                    $("#image").attr("src", value.image)
                });
            });
        });
    });

    $("a[title|='sampson']").click(function() {
        $("#title").html("");
        $("#month").html("");
        $("#speaker").html("");
        $("#text").html("");
        $("#image").html("");

        $.getJSON("sampson.json", function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#title").append(value.title);
                    $("#month").append(value.month);
                    $("#speaker").append(value.speaker);
                    $("#text").append(value.text);
                    $("#image").attr("src", value.image)
                });
            });
        });
    });
}); // end ready