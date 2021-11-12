// jQuery call to the accordion() method.
$(document).ready(function() {
    $("#accordion").accordion({
        event: "click",
        active: 0,
        collapsible: true,
        heightStyle: "content"
    });
});