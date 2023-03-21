// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:  ${i.name}</li>
                    <li>Diameter: ${i.diameter}</li>
                    <li>Star: ${i.star}</li>
                    <li>Distance from Earth: ${i.distance}</li>
                    <li>Number of Moons: ${i.moons}</li>
                </ol>
                <img src="${i.image}">
   */
}

function validateInput(testInput) { 
   if (testInput === "") {
    return "Empty";
   }
   else if (isNaN(Number(testInput))) {
    return "Not a Number";
   }
   else if (!isNaN(Number(testInput))) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

       let pilotNameInput = document.querySelector("input[name='pilotName']");
       let copilotNameInput = document.querySelector("input[name='copilotName']");
       let fuelLevelInput = document.querySelector("input[name='fuelLevel']");
       let cargoMassInput = document.querySelector("input[name='cargoMass']");
       if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
       
     }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
