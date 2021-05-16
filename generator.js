
const weap = document.querySelector("#weapon");
const desc = document.querySelector("#description");
const rule = document.querySelector("#rule");
const healing = document.querySelector("#healing");
const severity = document.querySelector("#severity");


const btns = document.querySelectorAll(".weapon");

btns.forEach(btn => {

   btn.addEventListener('click', event => {
    const outcome = finalOutcome(event.target.id);
    severity.innerHTML = "SEVERITY: " + outcome.sev;
    weap.innerHTML = event.target.id;
    desc.innerHTML = outcome.flavour;
    rule.innerHTML = outcome.rule;
    healing.innerHTML = outcome.healing;
   });

});

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

