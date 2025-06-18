// this function will take the input from the form and display it on the page
function processForm(){
    // create the variables that are shortcuts to the form inputs
    let heroName = document.getElementById("txtName");
    let skills = document.getElementById("txtSkills");
    let health = document.getElementById("numHealth");
    let points = document.getElementById("numPoints");

    let output = "Hero Name: " + heroName.value + "<BR>" +
                "Skills: " + skills.value + "<BR>" +
                "Health: " + health.value + "<BR>" +
                "Points: " + points.value;

    // change the display to block so that the hero information title displays after the user has entered the hero info
    document.getElementById("h2Hero").style.display = "block";

    // direct reference to the output
    document.getElementById("divOutput").innerHTML = output;

    // clear out the form inputs in case the browser does not do it automatically
    heroName.value = "";
    skills.value = "";
    health.value = "";
    points.value = "";
}