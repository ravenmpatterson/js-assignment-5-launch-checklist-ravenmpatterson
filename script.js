// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets = "https://handlers.education.launchcode.org/static/planets.json";
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

// attempt 1
//    this.fetch(listedPlanets).then(funtion(response) {
//     response.json.json().the(function(json){
//         let i = json[Math.floor(Math.random() * json.lenth)];
//         console.log(i)
//         document.getElementById("missionTarget").innerHTML =
//     })
//    })


   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
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
        console.log(pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput)
        
        formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);

       });
});