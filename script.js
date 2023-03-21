// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
 


   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

          // stop the form submission
          event.preventDefault();
        let pilotNameInput = document.querySelector("input[name='pilotName']").value;
        let copilotNameInput = document.querySelector("input[name='copilotName']").value;
        let fuelLevelInputs = document.querySelector("input[name='fuelLevel']").value;
        let fuelLevelInput = Number(fuelLevelInputs);
        let cargoMassInputs = document.querySelector("input[name='cargoMass']").value;
        let cargoMassInput = Number(cargoMassInputs);
        console.log(pilotNameInput, copilotNameInput, fuelLevelInputs, cargoMassInputs)
        
        formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);

       });
});