$(document).ready(function() 
{
    let slider = $("#image-list");
    let leftProperty, newLeftProperty;

    $("#right-arrow").click(function() 
    {
        leftProperty = parseInt(slider.css("left"));

        if (leftProperty - 300 <= -900)
        {
            newLeftProperty = 0;
        }
        else
        {
            newLeftProperty = leftProperty - 300;
        }

        slider.animate( {left: newLeftProperty}, 1000);
    });

    $("#right-arrow").click(function() 
    {
        leftProperty = parseInt(slider.css("left"));

        if (leftProperty < 0)
        {
            newLeftProperty = leftProperty + 300;
        }
        else
        {
            newLeftProperty = 0;
        }

        slider.animate( {left: newLeftProperty}, 1000);
    });

    // Initalize and customize eldercarousel
    new ElderCarousel(".product-carousel", {
        items: 3,
        step: 1,
        infinite: true,
        play: true,
        playInterval: 3000,
        speed: 500,
        navs: true
    });
});