

var bludgeoning = [

    "You call that a crit? Roll damage as normal.",
    "Smashed off balance! Roll damage as normal and the next attack against the creature has advantage.",
    "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
    "Sent reeling! Do not roll your damage dice, instead deal the maximum result possible with those dice and push the creature up to 15 feet in any direction.",
    "Great hit! Roll your damage dice twice and add them together.",
    "Take a seat! Roll damage dice twice and add them together and the creature is knocked prone.",
    "Rocked and rolled! Roll damage dice twice and add them together, push the creature up to 15 feet away, and the creature is knocked prone.",
    "Grievous injury! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add the result. Then roll on the Minor Injury chart. If the creature is wearing heavy armor roll on the Major Injury chart instead.",
    "Crushed! Deal the twice maximum result of your damage dice and roll on the major injury chart.",
    "Splat! Deal the maximum result of your damage dice twice, the creature is stunned until the end of your next turn, and roll on the major injury chart."
];

var piercing = [

    "You call that a crit? Roll damage as normal.",
    "Lunge and thrust! Roll damage dice twice and use the higher result.",
    "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
    "Stabbed! Roll your damage dice twice and add them together.",
    "Great hit! Roll your damage dice twice and add them together.",
    "Swiss cheese! Roll twice as many damage dice as normal. Then roll twice on the minor injury chart and use the lower result.",
    "Punctured! Roll your damage dice twice and add them together and roll on the minor injury chart.",
    "Cruel prick! Roll your damage dice twice and add them together and roll on the major injury chart.",
    "Run through! Deal twice the maximum result of your damage dice and roll on the major injury chart.",
    "Pierce! Deal the maximum result of your damage dice twice, roll on the minor injury chart, and roll on the major injury chart."
];

var slashing = [

    "You call that a crit? Roll damage as normal.",
    "Sliced and diced! Roll damage as normal and the creature loses 1d6 hit points at the start of its next turn.",
    "Good hit! Do not roll your damage dice, instead deal the maximum result possible with those dice.",
    "Open gash! Roll your damage dice as normal and the creature is bleeding. For the next minute the creature loses 1d4 damage at the start of each of its turns until it uses an action to staunch this wound.",
    "Great hit! Roll your damage dice twice and add them together.",
    "Deep slice! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d8 hit points at the start of each of its turns until it uses an action to staunch this wound.",
    "Lacerated! Roll your damage dice twice and add them together and the creature is bleeding. For the next minute the creature loses 1d12 hit points at the start of each of its turns until it uses an action to staunch this wound.",
    "Severed! Deal the maximum amount of damage from your normal damage dice then roll your damage dice and add the result. Then roll on the Minor Injury chart. If the creature is wearing light or no armor roll on the Major Injury chart instead.",
    "Dissected! Deal twice the maximum result of your damage dice and roll on the major injury chart.",
    "Slash! Deal the maximum result of your damage dice twice, roll on the major injury chart, and the creature is bleeding.",
    " For the next minute the creature loses 2d8 hit points at the start of each of its turns until it uses an action to staunch this wound."
];

console.log(criticalHit(piercing));


function criticalHit(damageType){
    var randomNumber = Math.floor(Math.random() * 20);
    console.log("You rolled a " + (randomNumber+1));
    switch (randomNumber) {
        case 0:
            return (damageType[0]);
        case 1:
        case 2:
            return (damageType[1]);
        case 3:
        case 4:
        case 5:
            return (damageType[2]);
        case 6:
        case 7:
            return (damageType[3]);
        case 8:
        case 9:
        case 10:
            return (damageType[4]);
        case 11:
        case 12:
            return (damageType[5]);
        case 13:
        case 14:
        case 15:
            return (damageType[6]);
        case 16:
        case 17:
            return (damageType[7]);
        case 18:
            return (damageType[8]);
        case 19:
            return (damageType[9]);
    }
}














