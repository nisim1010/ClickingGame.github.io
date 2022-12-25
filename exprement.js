let comboreward = 0;
let combo = 0;
let cooldown =0;
window.prestigelevel = 0;


function Start() {
if (typeof(Storage) !== undefined) {
    if(localStorage.count) {
        localStorage.count = Number(localStorage.count);
    }
    else {
        localStorage.count = 0;
    }
}
else {
    document.getElementById("result").innerHTML = "Somthing isn't right";
}
if (typeof(Storage) !== undefined) {
    if(localStorage.gain) {
        localStorage.gain = Number(localStorage.gain);
    }
    else {
        localStorage.gain = 0.25;
    }
}
else {
    document.getElementById("result").innerHTML = "Somthing isn't right";
}
if (typeof(Storage) !== undefined) {
    if(localStorage.rebrith) {
        localStorage.rebrith = Number(localStorage.rebrith); 
    }
    else {
        localStorage.rebrith = 0;
    }
}
else {
    document.getElementById("result").innerHTML = "Somthing isn't right";
}
}

function Click() {
    Combo();
    localStorage.count = Number(localStorage.count) + gain;
}

function Combo() {
    if(combo <= 100) {
        combo++;
    }
    if(combo % 10 == 0) {
        Values();
        comboreward += (Number(localStorage.gain) + (0.5 * Number(localStorage.rebrith)) + (4 * prestigelevel)) / 10 ;
    }
    document.getElementById("demo").innerHTML = "ComboX" + combo;
    clearTimeout(cooldown);
    cooldown = setTimeout(() => {
        combo = 0;
        comboreward = 0;
        Values();
        document.getElementById("demo").innerHTML = "ComboX" + combo;
    }, 300);
}
function Values() {
    window.gain = Number(Number(localStorage.gain) + (0.5 * Number(localStorage.rebrith)) + comboreward + (4 * prestigelevel));
    var rebrithcost = (Number(localStorage.rebrith) + 1) * 5000000;
    var left = rebrithcost - localStorage.count;
    var gainvar = Number(gain);
    var gainstats = gainvar.toFixed(2);
    document.getElementById("result").innerHTML = "You have " + Math.round(localStorage.count) + " Dollars";
    document.getElementById("rebrithvalue").innerHTML = "You have " + localStorage.rebrith + " Prestiges";
    document.getElementById("multypler").innerHTML = "Your click worth " + gainstats + " Coins";

    if (localStorage.count >= rebrithcost) {
        document.getElementById("pointsleft").innerHTML = "You have enough money to Prestige!"
      } else {
        document.getElementById("pointsleft").innerHTML = "You need " + Math.round(left) + " more Dollars to Prestige";
      }
}
function Reset() {
    var rebrithcost = (Number(localStorage.rebrith) + 1) * 1000000;
    if(localStorage.count >= rebrithcost) {
    localStorage.count = 0;
    localStorage.gain = 0.25;
    localStorage.rebrith = Number(localStorage.rebrith) + 1;
    
    }
    else {
        document.getElementById("notification").innerHTML = "Not Enough Money";
    }
}
function Upgrade(upgrade, cost) {
    if (localStorage.count >= cost) {
      localStorage.gain = Number(localStorage.gain) + upgrade;
      localStorage.count = Number(localStorage.count) - cost;
    } else {
        document.getElementById("notification").innerHTML = "Not Enough Money";
    }
  }

  
