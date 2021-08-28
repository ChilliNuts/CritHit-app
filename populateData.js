const backupData = [
    {
      "body part": "Arm",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "The edge of the weapon slides along the inside of your victims upper arm. It bites deep splitting muscular tissue and skin alike. You feel a slight bump as your blade slices their ulnar nerve which supplies 60% of the victims grip strength.  Suddenly your opponent's arm goes limp and they yell out in pain. ",
      "rules outcome": "Target is unable to wield / hold anything larger than a small weapon or item.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Arm",
      "damage type": "Piercing",
      "severity": "Medium",
      "flavor text and what happens": "You watch as your opponent clutches his arm, your attack must have pierced their ulnar nerve.  Suddenly your opponent's arm goes limp and they yell out in pain. You know you got the right spot as they scramble around trying to hold onto their weapon.",
      "rules outcome": "Target is unable to wield / hold anything larger than a small weapon or item.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Torso",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "The blade of the weapon cuts deep into your opponent's chest, cleaving a gaping slice to their Pec Major. You feel a crunch as your blade hits their ribs. Lucky for them it didn't go deeper. ",
      "rules outcome": "Target is pushed back 5ft. Until healed, at the end of their turn, target takes 3 HP of bleed damage. ",
      "how to get rid of?": "Use of Healing kit OR receiving healing of 1 HP of more removes the status. Spending a bonus action reduces bleeding to 0 HP for that round."
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "The blade of the weapon pierces deep into your opponent's chest, straight into their Pec Major. You feel a crunch as your blade hits their ribs. Lucky for them it didn't go deeper. ",
      "rules outcome": "Target is pushed back 5ft. Until healed, at the end of their turn, target takes 3 HP of bleed damage. ",
      "how to get rid of?": "Use of Healing kit OR receiving healing of 1 HP of more."
    },
    {
      "body part": "Arm",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "Your blade slashes the back of your opponent's arm, leaving a gaping wound. The attack has left your opponent finding it difficult to swing a weapon. A significant amount of blood drips down from their tricep. ",
      "rules outcome": "Target has disadvantage on attack rolls.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Arm",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "Your attack pierces the back of your opponent's arm, leaving a gaping wound. The attack has left your opponent finding it difficult to swing a weapon. A significant amount of blood drips down from their tricep. ",
      "rules outcome": "Target has disadvantage on attack rolls.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Arm",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "Your attack lands with brutal force on the outside of their arm. You feel a crunch under your weapon with an audible crack as the radius breaks. Twisting their arm now involves a whole new level of pain but It's not a complete fracture so some function remains.",
      "rules outcome": "Target has disadvantage on attack rolls.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Arm",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "As you swing your weapon your opponent attempts to block it. You quickly twist your weapon at the last second and your strike lands on their knuckles. They twist awkwardly as the metacarpals are crushed. It looks as though their hand is fairly useless now, barely able to hold a weapon.",
      "rules outcome": "Target is unable to wield / hold anything larger than a small weapon or item.",
      "how to get rid of?": "Target can remove this status by having a short or long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Arm",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Your blow breaks their thumb in two and you see the knuckle burst open and bend back unnaturally. Their thumb is almost useless.",
      "rules outcome": "If target misses an attack, they drop their weapon at their feet.",
      "how to get rid of?": "Target can remove this status by having a short or long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Arm",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "Your blow lands on the inside of their upper arm. The impact of your blunt weapon blow causing an acute neurovascular loss of function in their upper arm. Suddenly your opponent's arm goes limp and they yell out in pain. You know you've done some damage as they scramble around trying to hold onto their weapon.",
      "rules outcome": "Target is disarmed and drops their weapon at their feet. Target is unable to use their arm for 2 rounds.",
      "how to get rid of?": "Receive healing of 1 HP or more."
    },
    {
      "body part": "Arm",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "Your blade just misses your enemies hand, though you swear you felt a slight bump. A split second later their thumb flies across your shoulder, as if in slow motion, blood trailing behind it... As your focus comes back to your opponent you can see your enemy not only in extreme pain, but having problems grasping their weapon.",
      "rules outcome": "If target misses an attack, they drop their weapon at their feet.",
      "how to get rid of?": "Target can remove this status by having a short or long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Arm",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "Your enemy trips as they overcompensate while trying to deflect your blow. You quickly take the opportunity and with surgical accuracy slash down their forearm,  opening up their radial artery. Blood streams down their hand from the wound making the weapon slippery.",
      "rules outcome": "Target has disadvantage on attack rolls. Until healed, at the end of their turn, target takes 5 HP of bleed damage.",
      "how to get rid of?": "Target can remove this status by having a short or long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Head",
      "damage type": "Bludgeoning",
      "severity": "High",
      "flavor text and what happens": "Your blow slams into the outside of your opponent's head cracking the skull around the temporal lobe. You watch as your opponent collapses to the floor. You notice their whole body go into spasm as they fall like a sack of potatoes to the ground. They likely have a subarachnoid hemorrhage, so death is definitely on It's way quickly for them. ",
      "rules outcome": "Every 3 rounds, at the end of their turn, target suffer 1 level of exhaustion. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC15 without one."
    },
    {
      "body part": "Head",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "The edge of your weapon embeds itself into the neck of your enemy. If they were not wearing heavy armour the weapon severs one of their carotid arteries, they only have seconds left before they pass out. If they were wearing heavy armour the weapon sheers off but manages to nick the carotid artery causing it to bleed.",
      "rules outcome": "Heavy Armour: Until healed, at the end of their turn, target takes 10 HP of bleed damage. No Heavy Armour: Until healed, at the end of their turn, targets takes 15 HP of bleed damage AND every 3 rounds, at the end of their turn, target suffers 1 level of exhaustion. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC15 without one."
    },
    {
      "body part": "Head",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "Your blow almost misses your foes neck and face but the tip of your blade slashes their forehead leaving a long gash. Blood flows from the wound down into their eyes making it difficult for them see clearly.",
      "rules outcome": "Target suffers blinded condition.",
      "how to get rid of?": "Spend 1 action to wipe blood from eyes and bandage forehead."
    },
    {
      "body part": "Head",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "The tip of your weapon catches the edge of their mouth and slices it wide open like a lemon. Eating and talking is going to be very painful for a while. ",
      "rules outcome": "Does not gain benefits from short or long rests. Disadvantage on social and interaction skill checks.",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC15 without one."
    },
    {
      "body part": "Head",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "Your opponent manages to dodge most of the attack but the weight of your shot rocks their brain back and forth. They suffer a mild traumatic brain injury (TBI) and are dazed. Wobbly on their feet they could fall at any second.",
      "rules outcome": "Targets must save against a DEX or CON DC10 to avoid going prone.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Head",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Your weapon collides with the side of their head. You have hit a part of their Vestibular matrix. With a look of confusion they stumble and try to keep balance. Blood pours from the damaged ear as they struggle to stand.",
      "rules outcome": "Targets must save against a CON DC10 to avoid being stunned until the end of their next turn.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Head",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Great job! Your blow lands right on the front of their frontal lobe. You don't see any specific damage as they shake their head in disbelief but then they look around at their allies as if they are enemies. Looks like you might of hit the prefrontal cortex which is associated with memories and cognition. ",
      "rules outcome": "For the next 5 rounds the target suffers the effects of the confusion spell.",
      "how to get rid of?": "Casting lesser restoration on target removes the status."
    },
    {
      "body part": "Head",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Your opponent is unable to effectively dodge most of the attack.  If they were not wearing medium or heavy armour your blow hits them hard in the skull and they suffer a traumatic brain injury (TBI) and fall to the ground. Otherwise they suffer a mild TBI which only dazes them.",
      "rules outcome": "Medium or Heavy Amour: Target must save against a DEX or CON DC10 to avoid going prone No Medium or Heavy Amour: Target must save against a DEX or CON DC10 to avoid being stunned until the end of their next turn.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Head",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "Your weapon lands heavily on your opponent's face. Your blow flattens their nose, and as they recoil you notice blood flowing from the nasal region. There is no way the nasal bone survived that hit. They need to be breathing through their mouth for a while. ",
      "rules outcome": "Target suffers disadvantage to athletics checks, and is unable to go faster than normal travel pace.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Head",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "Your weapon slams into the side of your enemies head and they fall to the ground! Their body bounces like a bag of potatoes and blood flows from their ear. You have likely damaged their ear drum which has had an effect on hearing. ",
      "rules outcome": "Target suffers the deafened condition.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Head",
      "damage type": "Piercing",
      "severity": "Medium",
      "flavor text and what happens": "Their eye is pierced by your attack! If it was an arrow or bolt it is stuck in there. Various fluids drip from the wound and extensive pain is obvious. Forget about them seeing anything with that eye anytime soon. ",
      "rules outcome": "Targets has disadvantage on any ability check that requires sight. Attacks against the target have advantage.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 10 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Piercing",
      "severity": "High",
      "flavor text and what happens": "Your attack drives hard into the enemies femur bone. The bone has splintered straight down the shaft and your opponent is unable to weight bear on that leg and screams in pain. ",
      "rules outcome": "Target is made prone. Target automatically fails ability checks that require dexterity or strength, is unable to stand on affected leg, unable to use dexterity AC modifier bonus and is unable to move more than 5ft per round.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 10 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "Your weapon slices through the front of your opponent's knee. You hear a mighty SNAP as a piece of circular bone flies across the battlefield. Unable to effectively bend or control their knee, the common quadricep tendon has been snapped resulting in no way the body can effectively weight bear through that leg. ",
      "rules outcome": "Target is made prone. Target automatically fails ability checks that require dexterity or strength, is unable to stand on affected leg, unable to use dexterity AC modifier bonus and is unable to move more than 5ft per round.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 10 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "High",
      "flavor text and what happens": "You feel a solid crunch as your weapon hits their thigh bone. A split second later you hear a satisfying crack as the bone collapses on itself and buckles under the weight of your attack. Your opponent collapses to the ground screaming in pain. You have caused a massive open unstable fracture of their femur as you see a portion of the bone jutting out of the leg.",
      "rules outcome": "Target is made prone. Target automatically fails ability checks that require dexterity or strength, is unable to stand on affected leg, unable to use dexterity AC modifier bonus and is unable to move more than 5ft per round.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 10 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Your downward swing collides with their lower leg. You hear the sound of breaking bones as you fracture their fibula, sending them tumbling to the ground. It's gonna be painful for them to stand and move around for a while.",
      "rules outcome": "Target is made prone. Targets speed is halved and is unable to dash. ",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "High",
      "flavor text and what happens": "Your shot damages the arterial wall of the inferior vena cava. This is a serious injury and your enemy does not know it yet. You watch as blood pours from the wound, their skin slowly changes colour and movements become more sluggish. There is some serious internal bleeding happening here.",
      "rules outcome": "Every 4 rounds, at the end of their turn, target suffers 1 level of exhaustion. Until healed, at the end of their turn, target takes 5 HP of bleed damage. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC15 without one "
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "The edge of your weapon slices the inside of your opponent's thigh. You cause a mighty gash and have opened their femoral artery, which quickly becomes a continuous spray of blood. They recoil and their skin slowly changes colour and movements become more sluggish. ",
      "rules outcome": "Target is pushed back 5ft. Until healed, at the end their turn, target takes 3 HP of bleed damage. ",
      "how to get rid of?": "Standard action reduces bleed to 5 HP. Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC15 without one "
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "Your weapon clips the back of their lower leg slicing the musculotendinous junction of the calf muscle. You step back to ready for your next attack and notice your enemy is a bit sluggish on his feet. If he pushes himself too much there is a possibility the tendon will snap.",
      "rules outcome": "Targets speed is halved and has disadvantage to acrobatics and athletics checks.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "Your weapon embeds itself into the large vastus medius muscle. The weapon juts out of their thigh making movement incredibly painful. The muscle is unable to work effectively due to the damaged fibres, as they fall to the ground.",
      "rules outcome": "Targets speed is halved and has disadvantage to acrobatics and athletics checks.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "The weapon lands heavily on the thigh of your opponent. The force buckles their leg and sends them to the ground allowing you the promise of a second attack as they try to get up. ",
      "rules outcome": "Player may spend a reaction to make one bonus attack against the target.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "Your weapon slashes the large quadricep muscle group on your opponent's thigh leaving a large gash. It looks very painful as the muscles attempt to contract causing them to rip further apart.",
      "rules outcome": "Until healed, if target takes a move action they suffer 10 HP of slashing damage. ",
      "how to get rid of?": "Target can remove this status by having a short or long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "The edge of your weapon slices through blood vessels and layers of skin. You don't hit anything major, but have sliced open their leg enough to make them bleed profusely.",
      "rules outcome": "Until healed, at the end of their turn, target takes 5 HP of bleed damage. ",
      "how to get rid of?": "Use of Healing kit OR receiving healing of 1 HP of more removes the the status. Spending a bonus action reduces bleeding to 0 HP for that round."
    },
    {
      "body part": "Arm",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "You slice along the outside of their upper thigh. Blood flows from the wound and you manage to cause a large gash. ",
      "rules outcome": "Until healed, at the end of their turn, target takes 5 HP of bleed damage. ",
      "how to get rid of?": "Use of Healing kit OR receiving healing of 1 HP of more removes the the status. Spending a bonus action reduces bleeding to 0 HP for that round."
    },
    {
      "body part": "Leg",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "Your attack lodges inside the knee joint, causing it to lock up and your enemy falls to the ground. ",
      "rules outcome": "Target is made prone.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "You hit the femoral nerve at the top of the thigh, this causes an acute loss of sensation and myotomal (muscular) loss of power. It might be only for a few seconds so take advantage of your enemies weakness.",
      "rules outcome": "Until the end of the targets next turn, all attacks against the target have advantage.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Leg",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "You have pierced the sural nerve with your attack to their lower leg. They suffer instant loss of sensation and it appears difficult for them to lift their foot, stumbling as they try.  ",
      "rules outcome": "Until the end of the targets next turn, all attacks against the target have advantage.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Torso",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "Your strike lands heavily onto your opponent's under-belly. The attack sends them sliding back on their knees and they struggle to stand to their feet.",
      "rules outcome": "Target is pushed back 5ft. Target must save against a CON DC 10 or be made prone",
      "how to get rid of?": "-"
    },
    {
      "body part": "Torso",
      "damage type": "Bludgeoning",
      "severity": "High",
      "flavor text and what happens": "Your mighty blow fractures several ribs which snap and shatter. They pierce the lung tissue underneath and cause a pneumothorax. The fluid between the pleura and the lungs leaks out causing it to deflate. It can no longer properly work and they have lost some cardiovascular power. There is some internal bleeding, although slow will eventually become a problem in terms of staying alive.",
      "rules outcome": "Target is pushed back 15 ft. Target must save against a CON DC 15 or be made prone. Every 4 rounds, at the end of their turn, target suffers 1 level of exhaustion. Until healed, at the end of their turn, target takes 5 HP of bleed damage. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC15 without one "
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "High",
      "flavor text and what happens": "The blow lands onto your foes knee cap. For a second you feel nothing had happened but you then feel it shatter underneath the weight of your weapon. A satisfying crack is heard as you fracture their patella. The enemy tumbles to the ground yelling out in pain giving you the perfect opportunity to finish him!",
      "rules outcome": "Target is made prone. Target automatically fails ability checks that require dexterity or strength, is unable to stand on affected leg, unable to use dexterity AC modifier bonus and is unable to move more than 5 feet a round. Attacker may use a reaction to make one attack against the target.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 10 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Their tibia bone doesn't stand up to the weight of your attack. You feel the bone crumple under your blow and watch as their lower leg bends back unnaturally. Looks like you fractured it as well as rupturing their posterior cruciate ligament causing their knee to become unstable. ",
      "rules outcome": "Target has disadvantage to ability checks that require dexterity or strength. Targets movement speed is halved. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "You manage to hit their lower leg causing a spiral fracture of their tibia. This is a serious injury as the bone twists on itself and shatters under your blow. ",
      "rules outcome": "Target has disadvantage to ability checks that require dexterity or strength. Targets movement speed is halved. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest."
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "You swing your weapon across the back of their lower leg and slice the achilles tendon. You didn't get the whole tendon but as they recover you hear a SNAP and they tumble to the ground. No pain however was noted. Just confusion... ",
      "rules outcome": "Target is made prone. Target has disadvantage to ability checks that require dexterity or strength. Targets movement speed is halved. ",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Your enemy feels the weight of your blow as it collides with their pelvis. You hear an audible \"CRUNCH\" as the illiam of the pelvic gives way. They are unable to effectively weight bear on that side as they limp around the battlefield, clearly in a lot of pain.",
      "rules outcome": "Target has disadvantage to ability checks that require dexterity or strength. Targets movement speed is halved. Target is unable to use their dexterity AC modifier bonus.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "You slam your weapon into the back of your opponent's knee. You feel the knee give way under your attack as the tibia pops forward within the knee joint. The anterior cruciate ligament has ruptured causing a lot of instability in the knee joint.",
      "rules outcome": "Target is made prone. Target has disadvantage to ability checks that require dexterity or strength. Targets movement speed is halved. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest."
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "You side step and sweep your weapon into the back of their leg, Carving a chunk of flesh through their hamstring muscle group. Semitendinosus is completely severed but bicep femoris hangs on. They stumble back bleeding from the wound and looks like they are unable to move as fast now.",
      "rules outcome": "Targets movement speed is halved. Until healed, at the end of their turn, target takes 5 HP of bleed damage. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest. Spending a bonus action reduces bleeding to 0 HP for that round."
    },
    {
      "body part": "Leg",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "Your attack punctures through their talus of the foot. The bone splits in half but remains intact. They are pinned in place unable to move.  ",
      "rules outcome": "Player may choose to leave their weapon pinning target to the ground, if they do target is affected with the restrained condition.",
      "how to get rid of?": "Target can stop the status by succeeding a DC15 strength check to remove the weapon.  "
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "You slice across the top of their leg. You leave a nasty gash across their quadricep muscle.",
      "rules outcome": "Until healed, at the end of their turn, target takes 3 HP of bleed damage.",
      "how to get rid of?": "Use of Healing kit OR receiving healing of 1 HP of more removes the status. Spending a bonus action reduces bleeding to 0 HP for that round."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Your weapons collides with the outside of the knee. You watch as it buckles sideways and the kneecap flicks around to the inside of the knee. You have dislocated their patella and they fall to the ground. Nice work.",
      "rules outcome": "Target is made prone. Target has disadvantage to ability checks that require dexterity or strength, If they fail one of these checks target is made prone.",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "You see an opening and swing your weapon at their lower leg. You feel a satisfying crack as it fractures the fibula bone. They are still able to stand but anything quick is now impossible due to pain and some loss of support from the leg.",
      "rules outcome": "Targets movement speed is halved.",
      "how to get rid of?": "Target can stop the status by receiving healing of 1 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest."
    },
    {
      "body part": "Torso",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "Your attack slices open their stomach causing a large gash. Lucky for them, nothing is falling out but it was close. Blood quickly flows from the wound and the colour in their face quickly starts to fade. ",
      "rules outcome": "Until healed, at the end of their turn, target takes 5 HP of bleed damage, and the effects of the grease spell are applied to an area of 5ft originating on the target.",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest. Spending a bonus action reduces bleeding to 0 HP for that round."
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "Medium",
      "flavor text and what happens": "Your weapon pierces deep into your enemies stomach. They are thrust back by the force of the blow. As they regain their footing they stop, coughing and spewing out blood.",
      "rules outcome": "Target is pushed back 10ft. Target is unable to gain benefits from short of long rest. Until healed, at the end of their turn, target takes 5 HP of bleed damage.",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC15 without one."
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "Your strike damages one of their kidneys, they will be having issues with pain and discomfort for a while.",
      "rules outcome": "Until healed, at the end of their turn, target takes 3 HP of bleed damage.",
      "how to get rid of?": "Use of Healing kit OR receiving healing of 1 HP of more removes the status. "
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "Medium",
      "flavor text and what happens": "Your attack punches through muscle, skin and you clip one of the nerve roots of the lower spine. Lightning neuropathic pain flies down their leg and they collapse in pain and weakness. You watch as it looks like they have lost some function of their leg. ",
      "rules outcome": "Targets movement speed is halved, and has disadvantage to ability checks that require dexterity or strength. ",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Torso",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "Your attack collides into their abdomen, sending them reeling backwards. The blow has ruptured their spleen causing a fair amount of internal bleeding.",
      "rules outcome": "Target is pushed back 10ft. Until healed, at the end of their turn, target takes takes 5 HP of bleed damage. Target is vulnerable to poison and necrotic damage.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Torso",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "You feel a number of ribs crumble and crack under your attack. This causes a lot of pain and your enemy is finding it difficult to breath effectively.",
      "rules outcome": "Target is unable to dash. Target has disadvantage to strength checks.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more."
    },
    {
      "body part": "Torso",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Strike to the sternum. The front of the chest collapses and is dented. Breathing has become very difficult as the rib cage has nothing solid to hold onto now. They collapse to the ground under your attack. ",
      "rules outcome": "Target is made prone. Target is unable to dash. Target has disadvantage to strength checks and is unable to use items larger than small.",
      "how to get rid of?": "Target can remove this status by having a long rest OR receiving healing of 5 HP or more."
    },
    {
      "body part": "Torso",
      "damage type": "Bludgeoning",
      "severity": "High",
      "flavor text and what happens": "The impact of your weapon crushes ribs, tissue and finally the lung. They are sent sliding back several feet, and the mighty wack has left their lung completely useless. A large Pneumothorax has occurred and you watch as your enemy takes a knee breathing heavily with the look as if they are drowning, gasping for air. ",
      "rules outcome": "Target is pushed back 10ft and must save against a CON DC 10 or be made prone. Until healed, target gains the effects of the slow spell, and at the end of their turn, target takes takes 5 HP of bleed damage.",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one."
    },
    {
      "body part": "Torso",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "Your attack carves a large gash in the front of their abdomen. It's not deep enough for anything important to fall out but is bleeding heavily.",
      "rules outcome": "Until healed, at the end of their turn, target takes 3 HP of bleed damage.",
      "how to get rid of?": "Target can remove this status by having a short or long rest, OR receiving healing of 1 HP or more. Spending a bonus action reduces bleeding to 0 HP for that round."
    },
    {
      "body part": "Head",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "Your weapon grazes the side of their head clipping the ear and slicing it clean off. It was a clean cut and fresh blood quickly begins oozing from the injury. ",
      "rules outcome": "Target gains permanent disadvantage to checks that involve hearing. Until healed, at the end of their turn, target takes 5 HP of bleed damage. ",
      "how to get rid of?": "Target can remove the status and regain hearing by succeeding on a DC10 perception check to find the ear and receiving healing of 10 HP or more. Spending a bonus action reduces bleeding to 0 HP for that round."
    },
    {
      "body part": "Torso",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "Your edge drives between the ribs on the left side of your enemy. It slices into the heart like a knife into butter and damages multiple arteries. As you pull your blade out they collapse on the ground, a fountain of blood spraying from the wound.",
      "rules outcome": "Target must save against a CON DC 15 or suffer the unconcious condition. Until healed, at the end of their turn, target takes 10 HP of bleed damage, and the effects of the grease spell are applied to an area of 10ft originating on the target.",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one. Spending a bonus action reduces bleeding to 3 HP for that round."
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "You drive your weapon into your opponent's chest attempting to push through their ribcage. It doesn't quite make it and they are pushed back and winded. ",
      "rules outcome": "Target is pushed back 10ft. Target can only take an action or a bonus action for 1 round. ",
      "how to get rid of?": "-"
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "High",
      "flavor text and what happens": "The pointy end drives between the ribs on the left side of your enemy. It pierces into the heart and you watch as your oppentents falls to the ground.  As you pull your weapon out they collapse on the ground, a fountain of blood spraying from the wound.",
      "rules outcome": "Target must save against a CON DC 15 or suffer the unconcious condition. Until healed, at the end of their turn, target takes 10 HP of bleed damage, and the effects of the grease spell are applied to an area of 10ft originating on the target.",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one. Spending a bonus action reduces bleeding to 3 HP for that round."
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "High",
      "flavor text and what happens": "You puncture the bony exterior of the rib cage and with the sound of cracking bones as you push them back.  You feel it suddenly give way as your weapon bursts out the other side. Although likely your opponent will be dead in seconds, your weapon is well and truly stuck in them. ",
      "rules outcome": "Target is pushed back 10ft. Until healed, target gains the effects of the slow spell, and at the end of their turn, target takes takes 5 HP of bleed damage. Attackers weapons is stuck in the target and requires a STR DC 10 check to remove.",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one. Spending a bonus action reduces bleeding to 3 HP for that round."
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "Medium",
      "flavor text and what happens": "Your attack destroys one of the smaller bronchi in your enemies lung. A large puncture wound is left behind as you pull your weapon out. They slouch back wheezing and straining to breathe.",
      "rules outcome": "Target suffers the effects of the slow spell. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one."
    },
    {
      "body part": "Torso",
      "damage type": "Slashing",
      "severity": "Medium",
      "flavor text and what happens": "You swing your weapon across their rib cage, it wedges in between the ribs and splits the intercostal muscles. As they recoil from your attack you notice them wheezing and straining to breathe.",
      "rules outcome": "Target suffers the effects of the slow spell. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 5 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one."
    },
    {
      "body part": "Head",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "Your attack slams into the side your enemies head, jolting it violently. Your blow has damaged the temporal lobe of their brain, affecting their emotions and long term memory. ",
      "rules outcome": "For the next 3 rounds the target is unable to use abilities, spells or special feats.",
      "how to get rid of?": "Casting lesser restoration on target removes the status."
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "You feel their knee crumble under your attack. You have torn the meniscus with your attack making it difficult to around. ",
      "rules outcome": "Target has disadvantage to ability checks that require dexterity. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 1 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest."
    },
    {
      "body part": "Leg",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "Your attack clips their knee, you manage to dislocate the kneecap and they fall to the ground. Once on the ground it flicks back into place. Nevertheless, it looked painful. ",
      "rules outcome": "Target is knocked prone ",
      "how to get rid of?": "-"
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "You manage to slice one of the hamstring tendons as they thrust past you. They stumble and it  looks like they will have a little trouble keeping up with you from that injury ",
      "rules outcome": "Targets movement speed is halved.",
      "how to get rid of?": "Target can stop the status by receiving healing of 1 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short of long rest."
    },
    {
      "body part": "Torso",
      "damage type": "Bludgeoning",
      "severity": "Low",
      "flavor text and what happens": "Epic wallop into stomach. You slam your weapon into their underbelly causing their last meal to spew out of your victims mouth. You have probably caused some heavy organ brusing in there somewhere!",
      "rules outcome": "Target is pushed back 10ft, the effects of the grease spell are applied to every 5ft the target travelled.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Torso",
      "damage type": "Piercing",
      "severity": "Low",
      "flavor text and what happens": "Pierced underbelly. You thrust your weapon into their underbelly causing their last meal out of your victims mouth. You have probably caused some heavy organ bursting in there somewhere!",
      "rules outcome": "Target is pushed back 10ft, the effects of the grease spell are applied to every 5ft the target travelled.",
      "how to get rid of?": "-"
    },
    {
      "body part": "Torso",
      "damage type": "Slashing",
      "severity": "Low",
      "flavor text and what happens": "Your slice across your opponent's stomach causing a deep gash. It causes a reflux of pain causing them to vomit out their last meal.",
      "rules outcome": "Target is pushed back 10ft, the effects of the grease spell are applied to every 5ft the target travelled.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "A mighty blow leaves the opponent reeling, they step back in fear, terrified of another attack just like it. Nothing physical appears to have happened but mentally you have triggered something in them.",
      "rules outcome": "Target suffers the effects of the fear spell with the DC of 10 + your intimidation skill.",
      "how to get rid of?": "See conditions of fear spell."
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "Your fighting prowess is a terrifying sight to behold.",
      "rules outcome": "Target must Wisdom save vs DC 8 + your intimidation skill or suffer the effects of the fear spell.",
      "how to get rid of?": "See conditions of fear spell."
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "You hit the weapon of your enemy causing it to flyout of their hand into another random creature within 20 feet. Talk about hitting two birds with one stone. You have a chuckle as they now need to pull it from their buddy to continue the fight.",
      "rules outcome": "Target is disarmed and drops their weapon (or item) at their feet. Attacker makes a free attack action with the targets weapon on a friendly model within 20 feet.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "High",
      "flavor text and what happens": "You strike with such force your opponent falls back and howls in pain. As you ready for the next attack you notice fear in your enemies face, not only was your attack physical but some psychological damage has set in.",
      "rules outcome": "Target is knocked prone. Target suffers the effects of the fear spell with the DC of 10 + your intimidation skill. They have disadvantage to their saving throws.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "A burst of adrenaline rushes through your body. You attack with a lightning fast flurry of blows as a burst of adrenaline kicks in.",
      "rules outcome": "Attacker gains two more attacks actions this turn but may not use any attack actions next round.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "Your blow tips your foe off balance leaving an opening for you to maneuver them and better control the battlefield.",
      "rules outcome": "Attacker may choose to shove target 10ft in any direction. Attacker may also choose to occupy targets original space.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "You become so much in the flow of battle you duck, weave and parry without even thinking, purely on instinct.",
      "rules outcome": "Attacker gains dodge as a free action.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "As you watch your opponent, you begin to notice patterns in their attacks. Using this knowledge you know exactly when to strike.",
      "rules outcome": "Attacker gains advantage on attack rolls against target until the end of their next turn.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "High",
      "flavor text and what happens": "As you watch your opponent you begin to notice patterns in their attacks. Using this knowledge you know exactly when to strike. You immediately see an opening and almost without thinking decide to press the attack.",
      "rules outcome": "Attacker gains advantage on attack rolls against target until the end of their next turn. Attacker gains a bonus attack action against the target.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "A burst of energy rushes through you as you thrust your weapon towards your foe. They barely manage to block the attack, a thunderous clash rings out as the weapons collide.  If the opponents weapon is non magical: it instantly shatters in an explosion of shrapnel.  Otherwise: the weapons clash deafening everyone around.",
      "rules outcome": "Non magical weapon: opponents weapon is destroyed and all creatures within 10 feet take 4d4 piercing damage.  Magical weapon: All targets within 10 feet suffer the deafend condition for the next 2 rounds.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "Your blow strikes with devastating force tipping your opponent off balance, it takes them a few moments to recover, leaving them open to attacks.",
      "rules outcome": "Attacks against target have advantage until the start of their next turn.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "You deflect your attackers strike and see an opening. You thrust forward causing them to lose balance.",
      "rules outcome": "If target is one size larger or less: attacker can push target 10 ft.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "Your attack slams into their weapon as they parry. The weight of the attack forces the weapon out of their hand, slamming it to the ground.",
      "rules outcome": "Target is disarmed and drops their weapon (or item) at their feet. ",
      "how to get rid of?": "-"
    },
    {
      "body part": "Arm",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "Your attack slams into their weapon as they parry. The weight of the attack causes them to drop the weapon and fracturing the carpal bones in their wrist.",
      "rules outcome": "Target is disarmed and drops their weapon (or item) at their feet. Targets suffers disadvantages to attack rolls ",
      "how to get rid of?": "Target can stop the status by receiving healing of 3 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short or long rest."
    },
    {
      "body part": "Torso",
      "damage type": "Bludgeoning",
      "severity": "Medium",
      "flavor text and what happens": "You slam your weapon into their hip. The weight of the attack causes the pelvic bone to crack along the ilium plate. They stagger from the blow, clearly unable to stand on that leg, making an opportunity to manuver the target.",
      "rules outcome": "Target has disadvantage to ability checks that require dexterity or strength. Targets movement speed is halved. Target is unable to use their dexterity AC modifier bonus. Attacker may choose to shove the target 10ft to the left or right.",
      "how to get rid of?": "Target can stop the status by receiving healing of 3 HP or more, OR having a short or long rest."
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "Something about your attack opens up an opportunity or rather insight into your opponent's weaknesses and strikes. Once your opponent recovers from your onslaught you appear to predict their moves and you see the best places to hit... ",
      "rules outcome": "Attacker gains advantage on attacks against target. Target gains disadvantage for attacks against attacker for the rest of combat.",
      "how to get rid of?": "At the start of each of it's turns target may make an insight check vs DC15 to stop this status."
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "Your strike causes a lot of pain, after your attack you slam your knee into their gut causing them to fly back. ",
      "rules outcome": "Target is pushed 10 feet ",
      "how to get rid of?": "-"
    },
    {
      "body part": "Leg",
      "damage type": "Bludgeoning",
      "severity": "High",
      "flavor text and what happens": "Your weapon lands on their thigh, the power and weight of the attack snaps their femur. The one end of the fractured bone pierces the skin and a spurt of blood pours out like a hose. Moving around causes the fractured bone to slide out, without the support and immidate help, it will only get worse.....",
      "rules outcome": "Target is made prone. Target automatically fails ability checks that require dexterity or strength, is unable to stand on affected leg, unable to use dexterity AC modifier bonus and is unable to move more than 5ft per round. Until healed, at the end of their turn, target takes 5 HP of bleed damage. If target take a move action, increase bleed damage by 5 HP per round. ",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one OR having a short or long rest."
    },
    {
      "body part": "Leg",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "The edge of your weapon slices into their lower leg and severs, skin, muscle and bone. Your strike is so strong and percise that it feels like you are sliding a scalpel through jelly. You feel it connect with the femur bone. Unless they pass a Dex save vs 15 your attack separates their leg from the body sending it flying across the battlefield. Blood bursts from the stump and they stand looking at the dismembered limb on the ground. If they suceed then your weapon is stuck in the bone and looks like both of you are in trouble now. ",
      "rules outcome": "Target is made prone. The effects of the grease spell are applied originating from target. If target fails DC save: target suffers permement loss of leg and until healed, at the end of their turn, target takes 10 HP of bleed damage.  Leg is thrown 10ft away in a random direction. If targets suceeds DC save: Until healed, at the end of their turn, target takes 10 HP of bleed damage and attackers weapon is stuck in targets leg. A strength check of DC 15 is required to remove weapon.                                                                               ",
      "how to get rid of?": "Target receives heal of 20 HP (with leg attached) or regenerate spell to avoid losing leg. Spending a bonus action reduces bleeding to 3 HP for that round. Target can stop the bleeding status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15."
    },
    {
      "body part": "Arm",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "The edge of your weapon slices into their upper arm and severs, skin, muscle and bone. Your strike is so strong and percise that it feels like you are sliding a scalpel through jelly. You feel it connect with the humerus bone. Unless they pass a Dex save vs 15 your attack separates their arm from the body sending it flying across the battlefield. Blood bursts from the stump and they stand looking at the dismembered limb on the ground. If they suceed then your weapon is stuck in the bone and looks like both of you are in trouble now. ",
      "rules outcome": "The effects of the grease spell are applied originating from target. If target fails DC save: target suffers permement loss of arm and until healed, at the end of their turn, target takes 10 HP of bleed damage.  Arm is thrown 10ft away in a random direction. If targets suceeds DC save: Until healed, at the end of their turn, target takes 10 HP of bleed damage and attackers weapon is stuck in targets arm. A strength check of DC 15 is required to remove weapon.                                                                               ",
      "how to get rid of?": "Target receives heal of 20 HP (with arm attached) or regenerate spell to avoid losing arm. Spending a bonus action reduces bleeding to 3 HP for that round. Target can stop the bleeding status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15."
    },
    {
      "body part": "Head",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "Your blade connects heavily to your foes face. They stumble back, a wide gash open from their forehead to lower cheek, straight through one of their eyes, completely obliterating it in the process.",
      "rules outcome": "Target suffers disadvantages to skill and ability checks that require sight. Attack rolls agains the target have advantage. ",
      "how to get rid of?": "Target can stop the status by taking a long rest, after which target gains a scar and also gains -2 permanent perception and + 2 permanent intimidation bonus. "
    },
    {
      "body part": "Torso",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "Your opponent raises their weapon above their head, ready to strike with all their might. Though their overconfidence may be their downfall. You strike before they can bring their weapon down. If your opponent has 4 HD or less: your blade easily separates them in two, the top half of their body sails through the air, blood trailing behind. Otherwise: your blade opens a horrific slash across their stomach, blood sprays from the wound and you can see some guts start to seep out. Blood rains down making treacherous terrain for all those in the area.",
      "rules outcome": "If target has 4 hit dice or less they die instantly. Otherwise target takes 2 levels of exhaustion, roll an extra damage die and until healed target takes 10 bleed damage at the start of its turn. The effects of the grease spell are applied originating from target.",
      "how to get rid of?": "Target can stop the status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15 without one. Spending a bonus action reduces bleeding to 3 HP for that round."
    },
    {
      "body part": "Arm",
      "damage type": "Slashing",
      "severity": "High",
      "flavor text and what happens": "With a downward strike your weapon slices through their wrist. It was a clean cut which separates the hand from the arm flying through the air. Blood pours from the wound as they try and stem the flow crying out in pain.  ",
      "rules outcome": "The effects of the grease spell are applied originating from target. Target suffers permement loss of hand and until healed, at the end of their turn, target takes 10 HP of bleed damage.  Hand is thrown 10ft away in a random direction.                                                                 ",
      "how to get rid of?": "Target receives heal of 15 HP (with hand attached) or regenerate spell to avoid losing hand. Spending a bonus action reduces bleeding to 3 HP for that round. Target can stop the bleeding status by receiving healing of 10 HP or more, OR receiving Medicine DC10 check with a healer's kit DC 15."
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "A relentless flurry of blows wears your opponent down, you feel them losing strength with each block and deflection. Your final blow strikes their inside knee, forcing them to kneel. Exhaustion hits them and their arms slump to their sides leaving them vulnerable to attack from any direction.",
      "rules outcome": "Allies within 5ft of target may spend their reaction to make an attack of opportunity against target.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Medium",
      "flavor text and what happens": "Your heart begins to race as adrenaline courses through your veins. Your pupiles dilate and everything around you begins to slow down. You see the skirmish in total clarity and move with lightning speed.",
      "rules outcome": "Attacker immediately gains the effects of the haste spell until the end of their next turn. (Player does not suffer side effects when haste ends).",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "Your fight with such precision and ferocity and with a roar of courage you inspire others around you.",
      "rules outcome": "For the next 6 rounds, Attacker and all allies within 30ft immediately gain the effects of bless.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "You let out a thunderous roar as your weapon connects with your opponent, bolstering the resolve of allies around you.",
      "rules outcome": "For the next 6 rounds, Attacker and all allies within 30ft immediately gain the effects of the Aid spell.",
      "how to get rid of?": "-"
    },
    {
      "body part": "General",
      "damage type": "Any",
      "severity": "Low",
      "flavor text and what happens": "As your weapon connects, you feel as if in a state of flow, moving quickly and anticipating attacks against you.",
      "rules outcome": "Player gains +2 AC until the end of the fight, and is put at the start of the initiative order. (If attacker was already at the top of the initiative order, they immediately have another turn.)",
      "how to get rid of?": "-"
    }
  ];

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

// https://spreadsheets.google.com/feeds/cells/1G13ch4kIMFdovYhFsL311dnRDXHstGU2UmyTg3qtfSA/3/public/full?alt=json

// let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaeSW0QUeHBnCCQx7y9UXEi5YTHjka36PXO71qc014--9wcmqalZ4pO8FkyKtlcxFzrvT2MIjIfHK8/pubhtml?gid=272190813&single=true';

// fetch(url)
// .then(res => res.json())
// .then((out) => {
//     console.log('Checkout this JSON! ', out);
//     out.feed.entry.forEach(cell => {
//         unsortedData.push(cell.gs$cell.$t);
//     });
//     sortData(unsortedData);
// })
// .catch(err => { throw err });


sortBackup(backupData);

function sortBackup(data){    
    for (let index = 0; index < data.length; index++) {
    const element = data[index];

    const bodyPart = element["body part"];
    const weap = element["damage type"];
    const sev = element["severity"];
    const flavour = element["flavor text and what happens"];
    const rule = element["rules outcome"];
    const healing = element["how to get rid of?"];

    //chooseArray(element).push({sev, flavour, rule, healing});

    const possibleWeaponTypes = ["Slashing", "Piercing", "Bludgeoning"];

    if(weap != "Any"){
        chooseArray(element).push({sev, flavour, rule, healing}); 
    }else{
        possibleWeaponTypes.forEach(damType => {
            element["damage type"] = damType;
            chooseArray(element).push({sev, flavour, rule, healing}); 
        });
    }

}
}

console.log(allBody);


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
   
    switch (row[1] || row['damage type']) {
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

    switch (row[2] || row["severity"]) {
        
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