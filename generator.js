
const weap = document.querySelector("#weapon");
const desc = document.querySelector("#description");
const rule = document.querySelector("#rule");
const healing = document.querySelector("#healing");
const severity = document.querySelector("#severity");

const critInfo = document.querySelector("#critInfo");


const btns = document.querySelectorAll(".weapon");


// var sections = document.querySelectorAll('.prev-hit-container');
var historyTitle;

const outcomes = [];

btns.forEach(btn => {

   btn.addEventListener('click', event => {
    const outcome = finalOutcome(event.target.id);
    outcome.weap = event.target.id;

    outcomes.unshift(outcome);

    showOutcomes();

    // severity.innerHTML = "SEVERITY: " + outcome.sev;
    // weap.innerHTML = event.target.id;
    // desc.innerHTML = outcome.flavour;
    // rule.innerHTML = outcome.rule;
    // healing.innerHTML = outcome.healing;
   });

});

function showOutcomes(){
    
    critInfo.innerHTML = "";

    outcomes.forEach((info, index) => {
        var div = document.createElement('div');

        if (index === 0){ // generates html and styling for current hit
            
            document.getElementById("infoModalTitle").innerHTML = `Current Hit`;
            
            div.innerHTML += `
            <div id="current-hit" class="hit-container">
            <h3 class="current-header">${info.weap + "  -  SEVERITY: " + info.sev}</h3>
                <p class="flavour-text-current">" ${info.flavour} "</p>
                <div class="rules-section">
                    <p class=""><span>Rules: </span>${info.rule}</p>
                    <p class=""><span>Healing: </span>${info.healing}</p>
                </div>
            </div>
        `;
        }else { // generates html and styling for past hits
            if(index === 1){
                div.innerHTML += `<hr>
                <h3 class="history-title">Previous Hits</h3>
                `;
            }else div.innerHTML += `<hr>`
        div.innerHTML += `
        <div class="hit-container">
            <h5 class="prev-header">${info.weap + "  -  SEVERITY: " + info.sev}</h5>
            <p class="flavour-text">" ${info.flavour} "</p>
            <div class="rules-section">
                <p class=""><span>Rules: </span>${info.rule}</p>
                <p class=""><span>Healing: </span>${info.healing}</p>
            </div>
        </div>
        `;
        } 

       
        critInfo.appendChild(div);

        // sections = document.querySelectorAll('.prev-hit-container');
        
        // mainTitle = document.getElementById("infoModalTitle").textContent;

        if(index === 1) historyTitle = document.querySelector('.history-title');
    });

    

}



function calcSeverity(severity) {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("severity: " + randomNum);
    if (randomNum < 30) {
        return severity.low;
    } else if (randomNum < 80) {
        return severity.med;
    } else {
        return severity.high;
    }
};

function getOutcome(severityArray) {
    var randomNum = Math.floor(Math.random() * severityArray.length);
    console.log("array index: " + randomNum);
    return severityArray[randomNum];
};

function finalOutcome(selectedWeapon) {

    if (selectedWeapon === "Bludgeoning") {
        return getOutcome(calcSeverity(allBody.bludgeoning.severity));

    } else if (selectedWeapon === "Slashing") {
        return getOutcome(calcSeverity(allBody.slashing.severity));

    } else if (selectedWeapon === "Piercing") {
        return getOutcome(calcSeverity(allBody.piercing.severity));

    }

};

