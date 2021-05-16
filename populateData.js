

const allBody = {
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

        const possibleWeaponTypes = ["Slashing", "Piercing", "Bludgeoning"];

        const row = [bodyPart, weap, sev, flavour, rule, healing];
        
        if(weap != "Any"){
            chooseArray(row).push({sev, flavour, rule, healing}); 
        }else{
            possibleWeaponTypes.forEach(element => {
                row[1] = element;
                chooseArray(row).push({sev, flavour, rule, healing}); 
            });
        }
        
    }
}

function chooseArray(row){
    
    var dataPath;

   
    switch (row[1]) {
        case "Slashing":
            dataPath = allBody.slashing;
            break;
        case "Piercing":
            dataPath = allBody.piercing;
            break;
        case "Bludgeoning":
            dataPath = allBody.bludgeoning;
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