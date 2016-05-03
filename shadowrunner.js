//Example contructor

var Character = {
  Metatype: {
    Name,
    Metatype,
    Ethnicity,
    Age,
    Sex,
    Height,
    Weight,
    StreetCred,
    Notoriety,
    PublicAwareness
  },
  Attribute: {
    Body,
    Agility,
    Reaction,
    Strength,
    Willpower,
    Logic,
    Intuition,
    Charisma,
    Edge,
    Essence,
    Magic,
    Resonance,
    Noise
  },
  Skill: {
    notGarbage
  },
  Quality: {
    notGarbage
  },
  Augmentation: {
    notGarbage
  },
  Spell: {
    notGarbage
  },
  Power: {
    notGarbage
  },
  ComplexForm: {
    notGarbage
  },
  Equipped: {
    RightHand,
    LeftHand,
    Commlink,
    Deck,
    Armor
  },
  Gear: {
    notGarbage
  },
  Modifier: {
    notGarbage
  },
}

//Skill objects
var Archery = {
  Name: "Archery",
  Attribute: "Agility",
  Value: 1
}

var Automatics = {
  Name: "Automatics",
  Attribute: "Agility",
  Value: 1
}

//Lets start with the algorythms
/*
What are we assuming the client is sending us?
1. ALL the pertinent data? Could easily spoof the system.
2. Just the modifiers? Would allow for unexpeced penalties. Let's go with this for now.

TODO:
---- Fix the Complain function
---- 
*/

//---------------------------------------------------
//------------------DIE ROLLS------------------------
//---------------------------------------------------

function dInifinity (dieNum, dieSize){
  //roll storage
  roll = {}
  rollArr = [];
  //handle a lack of inputs; default 1d6
  if (dieNum === undefined){
    dieNum = 1;
  }
  if(dieSize === undefined){
    dieSize = 6;
  }
  for (var i = 0; i < dieNum; i++){
    rollArr.push(Math.floor(Math.random()*dieSize)+1);
  }
  roll.array = rollArr;
  if (dieSize == 6){
    roll.hits = processDSixRoll(roll.array);
    console.log(roll);
    return roll;
  }
  //return your rolls
  console.log(roll);
  return roll;
}
//roll d6 explicitly
function dSix (dieNum){
  var roll = dInifinity(dieNum, 6);
  return roll;
}

function processDSixRoll (rollArr){
  //tally number of hits, glitch, critical glitch
  var hits = 0;
  var glitchCount = 0;
  for (var i = 0; i < rollArr.length; i++){
    var roll = rollArr[i];
    if (roll > 4) {
      hits += 1;
    }else if (roll === 1) {
      glitchCount += 1;
    }
  }
  if ((glitchCount/rollArr.length >= .5)&&(hits === 0)){
    return "Critical Glitch";
  }else if(glitchCount/rollArr.length >= .5){
    return "Glitch";
  }else{
    return hits;
  }
}
//---------------------------------------------------
//----------------END DIE ROLLS----------------------
//---------------------------------------------------

function complain (string){
  alert(string);
}

function Test (attOne, attTwo, mod) {
  var die;

  die = attOne + attTwo + mod;
  return dSix(die);
}

function AttributeTest (Char, Att, Mod){
  //Here, Att is referring to the attribute test
  //Attribute Tests roll two attributes' die
  //Allow for modifiers
  var mod = Mod;
  switch(Att){

    //Composure is a charisma plus willpower check
    case: "Composure":
      var attOne = Char.Attribute.Charisma;
      var attTwo = Char.Attribute.Willpower;
      var outcome = Test(attOne, attTwo, Mod);
      if(outcome === "Glitch")
      break;

      //Judge Intentions is a charisma plus intuition check
    case: "Judge Intentions":
      var attOne = Char.Attribute.Charisma;
      var attTwo = Char.Attribute.Intuition;
      var die = Test(attOne, attTwo, Mod);
      break;

      //Lifting and carrying are both body plus strength checks
      //Though they're together in the book, their outputs
      //are handled differently
    case: "Lifting":
      var attOne = Char.Attribute.Body;
      var attTwo = Char.Attribute.Strength;
      var die = Test(attOne, attTwo, Mod);
      break;

    case: "Carrying":
      var attOne = Char.Attribute.Body;
      var attTwo = Char.Attribute.Strength;
      var die = Test(attOne, attTwo, Mod);
      break;

    case: "Memory":
      var attOne = Char.Attribute.Logic;
      var attTwo = Char.Attribute.Willpower;
      var die = Test(attOne, attTwo, Mod);
      break;

    default:
      complain("Invalid Attribute Test Requested");

  }
}

function SkillTest (Char, Skill, Mod){

  switch (Skill.Name){
    case "Archery":
    case "Automatics":
    case "Blades":
    case "Clubs":
    case "Escape Artist":
    case "Exotic Melee":
    case "Exotic Ranged":
    case "Gunnery":
    case "Gymnastics":
    case "Heavy Weapons":
    case "Locksmith":
    case "Longarms":
    case "Palming":
    case "Pistols":
    case "Sneaking":
    case "Throwing Weapons":
    case "Unarmed":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Agility;
      return Test(attOne, attTwo, Mod);
      break;

    case "Aeronautics Mechanic":
    case "Arcana":
    case "Armorer":
    case "Automotive Mechanic":
    case "Biotechnology":
    case "Chemistry":
    case "Computer":
    case "Cybertechnology":
    case "Cybercombat":
    case "Demolitions":
    case "Electronic Warfare":
    case "First Aid":
    case "Forgery":
    case "Hacking":
    case "Hardware":
    case "Industrial Mechanic":
    case "Medicine":
    case "Nautical Mechanic":
    case "Software":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Logic;
      return Test(attOne, attTwo, Mod);
      break;

    case "Con":
    case "Etiquette":
    case "Instruction":
    case "Intimidation":
    case "Leadership":
    case "Negotiation":
    case "Performance":
    case "Impersonation":
    case "Animal Handling":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Charisma;
      return Test(attOne, attTwo, Mod);
      break;

    case "Artisan":
    case "Assensing":
    case "Disguise":
    case "Language":
    case "Navigation":
    case "Perception":
    case "Tracking":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Intuition;
      return Test(attOne, attTwo, Mod);
      break;

    case "Alchemy":
    case "Banishing":
    case "Binding":
    case "Counterspelling":
    case "Ritual Spellcasting":
    case "Spellcasting":
    case "Summoning":
    case "Enchanting":
    case "Disencanting":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Magic;
      return Test(attOne, attTwo, Mod);
      break;

    case "Pilot Aerospace":
    case "Pilot Aircraft":
    case "Pilot Walker":
    case "Pilot Exotic":
    case "Pilot Ground Craft":
    case "Pilor Watercraft":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Reaction;
      return Test(attOne, attTwo, Mod);
      break;

    case "Compiling":
    case "Decompiling":
    case "Registering":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Resonance;
      return Test(attOne, attTwo, Mod);
      break;

    case "Astral Combat":
    case "Survival":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Willpower;
      return Test(attOne, attTwo, Mod);
      break;

    case "Body":
    case "Diving":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Body;
      return Test(attOne, attTwo, Mod);
      break;


    case "Running":
    case "Swimming":
      var attOne = Skill.Value;
      var attTwo = Char.Attribute.Strength;
      return Test(attOne, attTwo, Mod);
      break;
  }
}