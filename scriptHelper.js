// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
    div.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name:  ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;

}

function validateInput(testInput) { 
    let numInput = Number(testInput)
   if (testInput === "") {
    return "Empty";
   }
   else if (isNaN(numInput)) {
    return "Not a Number";
   }
   else if (isNaN(numInput) === false) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

       let pilotNameInput = document.getElementById("pilotStatus");
       let copilotNameInput = document.getElementById("copilotStatus");
       let fuelLevelInput = document.getElementById("fuelStatus");
       let cargoMassInput = document.getElementById("cargoStatus");
       if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("All fields are required!");
     }
   else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput (cargoLevel) === "Not a Number") {
    window.alert("This is not a valid input.")
   }
   else {
    pilotNameInput.innerHTML = `Pilot ${pilot} is ready for launch.`
    copilotNameInput.innerHTML = `Co-pilot ${copilot} is ready for launch.`
    list.style.visibility = "visible";
    if (fuelLevel < 10000 && cargoLevel <= 10000) {
        //stuff for later - done/works
        fuelLevelInput.innerHTML = 'Fuel level too low for launch';
        cargoMassInput.innerHTML = 'Cargo mass low enough for lauch';
        document.getElementById("launchStatus").style.color = 'red';
        document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch';
    }
    else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        //stuff for later
        fuelLevelInput.innerHTML = 'Fuel level high enough for launch';
        cargoMassInput.innerHTML = 'Cargo mass too high for launch';
        document.getElementById("launchStatus").style.color = 'red';
        document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch';
    }
    else if (fuelLevel < 10000 && cargoLevel > 10000) {
        //stuff for later
        fuelLevelInput.innerHTML = 'Fuel level too low for launch';
        cargoMassInput.innerHTML = 'Cargo mass too high for launch';
        document.getElementById("launchStatus").style.color = 'red';
        document.getElementById("launchStatus").innerHTML = 'Shuttle not ready for launch';
    }
    else {
        document.getElementById("launchStatus").style.color = 'green';
        document.getElementById("launchStatus").innerHTML = 'Shuttle is ready for launch';
    }
        //stuff for later
    
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random() * planets.length);

    return planets[i]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
