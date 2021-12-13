$(document).ready(function() 
{
    $.getJSON("andersen.json", function(data) 
    {
        $.each(data, function()
        {
            $.each(this, function(key, value) 
            {
                $("#andersen-heading").html(value.name);
                $(".andersen-image").attr("src", value.image);
                $("#andersen-bio").html(value.bio);
            });
        });
    });

    $.getJSON("shawn.json", function(data)
    {
        $.each(data, function()
        {
            $.each(this, function(key, value)
            {
                $("#shawn-heading").html(value.name);
                $(".shawn-image").attr("src", value.image);
                $("#shawn-bio").html(value.bio);
            });
        });
    });

    $(".andersen-picture-container").tooltip();

    $(".shawn-picture-container").tooltip();
});