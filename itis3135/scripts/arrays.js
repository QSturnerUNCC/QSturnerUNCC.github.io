// Defines and populates the two main arrays as well as defining a global "results" variable
let people = ["Barry Allen", "Bruce Wayne", "Diana Prince", "Victor Stone", "Clark Kent", "Arthur Curry", "Hal Jordan", 
"J'onn J'onzz", "Shiera Sanders Hall"];

let salaries = [1353, 41234, 1245, 2184, 1754, 999, 5385, 2383, 2565];

let results = document.getElementById("results");

// Prompts the user for a name and a salary, then appends them to the respective arrays.
function addSalary() 
{
    let userPerson = prompt("Enter the person's name:", "Type here");
    
    // Data validation for the user-defined name
    var validating = true;
    while (validating) 
    {
        if (userPerson === null || userPerson === undefined || parseInt(userPerson) !== NaN || parseFloat(userPerson) !== NaN)
        {
            userPerson = prompt("Please enter a valid name:");
        }
        else
        {
            validating = false;
        }
    }

    let userSalary = prompt("Enter the person's salary:", "Type here");

    // Data validation for the user-defined salary
    validating = true;
    while (validating)
    {
        if (userSalary === null || userSalary === undefined || parseInt(userSalary) === NaN || parseFloat(userSalary) === NaN)
        {
            userSalary = prompt("Please enter a valid salary:");
        }
        else
        {
            validating = false;
        }
    }

    // Appends the values to their respective arrays
    people.push(userPerson);
    salaries.push(userSalary);

    // Puts the cursor on the dropdown menu after "add salary" button is pressed
    document.getElementById("employees").focus();
}

// Calculates the average salary and highest salary and displays them in newly created DOM nodes
function displayResults() 
{
    let salarySum = 0;
    let averageSalary = 0;
    let highestSalary = salaries[0];

    for (var i = 0; i < salaries.length; i++)
    {
        salarySum += salaries[i];
    }

    averageSalary = salarySum / salaries.length;

    for (let i = 1; i < salaries.length; i++)
    {
        if (salaries[i] > highestSalary)
        {
            highestSalary = salaries[i];
        }
    }

    // Creating h2 node inside of the div with the id "results"
    var resultsH2 = document.createElement("h2")
    resultsH2.innerHTML = "Results";
    results.appendChild(resultsH2);

    // Creating two p nodes inside of the div with the id "results"
    var averagePElement = document.createElement("p");
    averagePElement.innerHTML = "The average salary is: $" + averageSalary.toFixed(2);
    results.appendChild(averagePElement);

    var highestPElement = document.createElement("p");
    highestPElement.innerHTML = "The highest salary is: $" + highestSalary;
    results.appendChild(highestPElement);
}

// Displays a table of the contents of the two main arrays.
function displaySalary() 
{
    // Creating table header node to hold the two headings, "Name" and "Salary"
    let nameTableHeader = document.createElement("th");
    nameTableHeader.innerHTML = "Name";
    document.getElementById("results_table_head").appendChild(nameTableHeader);

    let salaryTableHeader = document.createElement("th");
    salaryTableHeader.innerHTML = "Salary"
    document.getElementById("results_table_head").appendChild(salaryTableHeader);

    // Iterates through both arrays and creates table rows, populating them with the data from the two arrays.
    let createdRow = undefined;
    let createdTD1 = undefined;
    let createdTD2 = undefined;
    for (let i = 0; i < salaries.length; i++) 
    {
        createdRow = document.createElement("tr");
        document.getElementById("results_table_body").appendChild(createdRow);

        createdTD1 = document.createElement("td");
        createdTD1.innerHTML = people[i];
        createdRow.appendChild(createdTD1);

        createdTD2 = document.createElement("td");
        createdTD2.innerHTML = "$" + salaries[i];
        createdRow.appendChild(createdTD2);
    }
}