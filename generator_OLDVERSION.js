var description = "";

const parts = document.querySelector("#bodyPart");
const weapon = document.querySelector("#weapon");
const generator = document.querySelector("#generate");
const desc = document.querySelector("#description");


generator.addEventListener("click", function(){
    desc.innerHTML = finalOutcome(parts.value, weapon.value);
});


/************************* DATA *************************/

// const head = {
//     bludgeoning: {
//         severity: {
//             low: ["blunt hit to head with low severity."],
//             med: ["blunt hit to head with medium severity."],
//             high: ["blunt hit to head with high severity."]
//         }
//     },
//     slashing: {
//         severity: {
//             low: ["slash hit to head with low severity."],
//             med: ["slash hit to head with medium severity."],
//             high: ["slash hit to head with high severity."]
//         }
//     },
//     piercing: {
//         severity: {
//             low: ["pierce hit to head with low severity."],
//             med: ["pierce hit to head with medium severity."],
//             high: ["pierce hit to head with high severity."]
//         }
//     }
// }

// const chest = {
//     bludgeoning: {
//         severity: {
//             low: ["blunt hit to chest with low severity."],
//             med: ["blunt hit to chest with medium severity."],
//             high: ["blunt hit to chest with high severity."]
//         }
//     },
//     slashing: {
//         severity: {
//             low: ["slash hit to chest with low severity."],
//             med: ["slash hit to chest with medium severity."],
//             high: ["slash hit to chest with high severity."]
//         }
//     },
//     piercing: {
//         severity: {
//             low: ["pierce hit to chest with low severity."],
//             med: ["pierce hit to chest with medium severity."],
//             high: ["pierce hit to chest with high severity."]
//         }
//     }
// }

// const arm = {
//     bludgeoning: {
//         severity: {
//             low: ["blunt hit to arm with low severity."],
//             med: ["blunt hit to arm with medium severity."],
//             high: ["blunt hit to arm with high severity."]
//         }
//     },
//     slashing: {
//         severity: {
//             low: ["slash hit to arm with low severity."],
//             med: ["slash hit to arm with medium severity."],
//             high: ["slash hit to arm with high severity."]
//         }
//     },
//     piercing: {
//         severity: {
//             low: ["pierce hit to arm with low severity."],
//             med: ["pierce hit to arm with medium severity."],
//             high: ["pierce hit to arm with high severity."]
//         }
//     }
// }

// const leg = {
//     bludgeoning: {
//         severity: {
//             low: ["blunt hit to leg with low severity."],
//             med: ["blunt hit to leg with medium severity."],
//             high: ["blunt hit to leg with high severity."]
//         }
//     },
//     slashing: {
//         severity: {
//             low: ["slash hit to leg with low severity."],
//             med: ["slash hit to leg with medium severity."],
//             high: ["slash hit to leg with high severity."]
//         }
//     },
//     piercing: {
//         severity: {
//             low: ["pierce hit to leg with low severity."],
//             med: ["pierce hit to leg with medium severity."],
//             high: ["pierce hit to leg with high severity."]
//         }
//     }
// }


function calcSeverity(severity){
    var randomNum = Math.floor(Math.random()*100)+1;
    console.log("severity: " + randomNum);
    if(randomNum < 30){
        return severity.low;
    }else if(randomNum < 80){
        return severity.med;
    }else{
        return severity.high;
    }
};

function getOutcome(severityArray){
    var randomNum = Math.floor(Math.random()*severityArray.length);
    console.log("array index: " + randomNum);
    return severityArray[randomNum].flavour;
};

function finalOutcome(selectedBody, selectedWeapon){
    var body;
    switch (selectedBody) {
        case "head":
            body = head;
            break;
        case "chest":
            body = chest;
            break;
        case "arm":
            body = arm;
            break;
        case "leg":
            body = leg;
            break;
        default:
            break;
    }

    if(selectedWeapon === "bludgeoning"){
        description = getOutcome(calcSeverity(body.bludgeoning.severity));
        console.log(body.bludgeoning.severity);
    } else if(selectedWeapon === "slashing"){
        description = getOutcome(calcSeverity(body.slashing.severity));
        console.log(body.slashing.severity);
    }else if(selectedWeapon === "piercing"){
        description = getOutcome(calcSeverity(body.piercing.severity));
        console.log(body.piercing.severity);
    }

    return description;
};

