let firstNameText;
let lastNameText;
let emailAddressText;
let servicesChecks;
let servicesResults = [];
let finalServicesResults;
let instructionsText;

function getCheckedBoxes() 
{
    for (var i = 0; i < servicesChecks.length; i++)
    {
        if (servicesChecks[i].checked === true) 
        {
            servicesResults[i] = servicesChecks[i].value;
        }
    }
}

function getCheckboxData() 
{
    for (var i = 0; i < servicesResults.length; i++) 
    {
        if (i === 0) 
        {
            finalServicesResults = servicesResults[i];
        } 
        else 
        {
            finalServicesResults += servicesResults[i];
        }

        if (!(i + 1 >= servicesResults.length)) 
        {
            finalServicesResults += ", "
        }
    }
}

function showResults() 
{
    firstNameText = $("#firstName").val();
    lastNameText = $("#lastName").val();
    emailAddressText = $("#emailAddress").val();
    servicesChecks = document.getElementsByName("service");
    instructionsText = $("#instructions").val();

    getCheckedBoxes();
    getCheckboxData();

    document.getElementById("resultArea").innerHTML = "First Name: " + firstNameText + "<br>Last Name: " + lastNameText + "<br>Email Address: " + emailAddressText + "<br>Services: " + finalServicesResults + "<br>Instructions: " + instructionsText;
}