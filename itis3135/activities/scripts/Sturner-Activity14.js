$(document).ready(function() {
	$("a[title|='toobin']").click(function() {
        $("#title").html("");
        $("#month").html("");
        $("#speaker").html("");
        $("#text").html("");

        $.getJSON("toobin.json", function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#title").append(value.title);
                    $("#month").append(value.image);
                    $("#speaker").append(value.speaker);
                    $("#text").append(value.text);
                });
            });
        });
    });
}); // end ready