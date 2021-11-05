$(document).ready(function() 
{

        // preload the image for each link
        function preload(imgArray) 
        {
                $(imgArray).each(function() 
                {
                        new Image().src = this;
                });
        }

        preload([
                "images/activity10_images/h1.jpg",
                "images/activity10_images/h2.jpg",
                "images/activity10_images/h3.jpg",
                "images/activity10_images/h4.jpg",
                "images/activity10_images/h5.jpg",
                "images/activity10_images/h6.jpg"
        ]);

        // set up the event handlers for each link
        document.getElementById("thumbnail1").addEventListener("click", function(event) 
        {
                $("#caption").fadeOut(3000, function() 
                {
                        // get new caption for each image and aniamte new caption
                        document.getElementById("caption").innerHTML = "James Allison: 1-1";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function() 
                {
                        // get the image URL for each image and animate new image
                        document.getElementById("image").setAttribute("src", "images/activity10_images/h1.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("thumbnail2").addEventListener("click", function(event) 
        {
                $("#caption").fadeOut(3000, function() 
                {
                        document.getElementById("caption").innerHTML = "James Allison: 1-2";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function() 
                {
                        document.getElementById("image").setAttribute("src", "images/activity10_images/h2.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("thumbnail3").addEventListener("click", function(event) 
        {
                $("#caption").fadeOut(3000, function() 
                {
                        document.getElementById("caption").innerHTML = "James Allison: 1-3";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function() 
                {
                        document.getElementById("image").setAttribute("src", "images/activity10_images/h3.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("thumbnail4").addEventListener("click", function(event) 
        {
                $("#caption").fadeOut(3000, function() 
                {
                        document.getElementById("caption").innerHTML = "James Allison: 1-4";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function() 
                {
                        document.getElementById("image").setAttribute("src", "images/activity10_images/h4.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("thumbnail5").addEventListener("click", function(event) 
        {
                $("#caption").fadeOut(3000, function() 
                {
                        document.getElementById("caption").innerHTML = "James Allison: 1-5";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function() 
                {
                        document.getElementById("image").setAttribute("src", "images/activity10_images/h5.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
        });

        document.getElementById("thumbnail6").addEventListener("click", function(event) 
        {
                $("#caption").fadeOut(3000, function() 
                {
                        document.getElementById("caption").innerHTML = "James Allison: 1-6";
                        $(this).fadeIn(3000);
                });

                $("#image").fadeOut(3000, function() 
                {
                        document.getElementById("image").setAttribute("src", "images/activity10_images/h6.jpg")
                        $(this).fadeIn(3000);
                });

                event.preventDefault();
         });
        

        // move the focus to the first link
        document.getElementById("thumbnail1").focus();


}); // end ready