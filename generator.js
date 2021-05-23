
const weap = document.querySelector("#weapon");
const desc = document.querySelector("#description");
const rule = document.querySelector("#rule");
const healing = document.querySelector("#healing");
const severity = document.querySelector("#severity");

const critInfo = document.querySelector("#critInfo");


const btns = document.querySelectorAll(".weapon");

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
    let firstHit = true;
    
    critInfo.innerHTML = "";

    outcomes.forEach(info => {
        var div = document.createElement('div');

        if (!firstHit){
            div.innerHTML = `<hr>
            <p class="">${info.weap + "  -  SEVERITY: " + info.sev}</p>
            `;
        }else {
            firstHit = false;
            document.getElementById("infoModalTitle").innerHTML = `<p class="">${info.weap + "  -  SEVERITY: " + info.sev}</p>`
        } 

        div.innerHTML += `
            
            <p class="">${info.flavour}</p>
            <p class="">Rules: ${info.rule}</p>
            <p class="">Healing: ${info.healing}</p>
        `;
        critInfo.appendChild(div);
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

