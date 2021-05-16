
const head = {
    bludgeoning: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    },
    slashing: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    },
    piercing: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    }
}
const chest = {
    bludgeoning: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    },
    slashing: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    },
    piercing: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    }
}
const arm = {
    bludgeoning: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    },
    slashing: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    },
    piercing: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    }
}
const leg = {
    bludgeoning: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    },
    slashing: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    },
    piercing: {
        severity: {
            low: [],
            med: [],
            high: []
        }
    }
}

let unsortedData = [];

let url = 'https://spreadsheets.google.com/feeds/cells/1G13ch4kIMFdovYhFsL311dnRDXHstGU2UmyTg3qtfSA/3/public/full?alt=json';

fetch(url)
.then(res => res.json())
.then((out) => {
    console.log('Checkout this JSON! ', out);
    out.feed.entry.forEach(cell => {
        unsortedData.push(cell.gs$cell.$t);
    });
    sortData(unsortedData);
})
.catch(err => { throw err });

console.log(unsortedData);

function sortData(data){
    const colsPerRow = 6;
    
    for (let i = colsPerRow; i < data.length; i += colsPerRow) {
        //(bodyPart, weapon, severity, flavour, rule, healing)
        const bodyPart = data[i];
        const weap = data[i+1];
        const sev = data[i+2];
        const flavour = data[i+3];
        const rule = data[i+4];
        const healing = data[i+5];

        const possibleBodyParts = ["Head", "Torso", "Arm", "Leg"];
        const possibleWeaponTypes = ["Slashing", "Piercing", "Bludgeoning"];

        const row = [bodyPart, weap, sev, flavour, rule, healing];
        

        if(bodyPart == "Head" || bodyPart == "Torso" || bodyPart == "Arm" || bodyPart == "Leg"){
            if(weap != "Any"){
                chooseArray(row).push({flavour, rule, healing}); 
            }else{
                possibleWeaponTypes.forEach(element => {
                    row[1] = element;
                    chooseArray(row).push({flavour, rule, healing}); 
                });
            }
        }else if(bodyPart == "General"){
            possibleBodyParts.forEach(element => {
                row[0] = element;
                if(weap != "Any"){
                    chooseArray(row).push({flavour, rule, healing}); 
                }else{
                    possibleWeaponTypes.forEach(element => {
                        row[1] = element;
                        chooseArray(row).push({flavour, rule, healing}); 
                    });
                }
            });
        }
        
    }
}

function chooseArray(row){
    
    var dataPath;

    switch (row[0]) {
        case "Head":
            dataPath = head;
            break;
        case "Torso":
            dataPath = chest;
            break;
        case "Arm":
            dataPath = arm;
            break;
        case "Leg":
            dataPath = leg;
            break;
        default:
            break;
    }
   
    switch (row[1]) {
        case "Slashing":
            dataPath = dataPath.slashing;
            break;
        case "Piercing":
            dataPath = dataPath.piercing;
            break;
        case "Bludgeoning":
            dataPath = dataPath.bludgeoning;
            break;
        default:
            break;
    }

    switch (row[2]) {
        
        case "Low":
            dataPath = dataPath.severity.low;
            break;
        case "Medium":
            dataPath = dataPath.severity.med;
            break;
        case "High":
            dataPath = dataPath.severity.high;
            break;
        default:
            break;
    }

    return dataPath;
        
}