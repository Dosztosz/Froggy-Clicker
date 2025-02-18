var count = 0; // Starter number of frogs
var amount = 1; // Starter amount of frogs per click
var firstClickUpgrade = { name: "Basic Upgrade", cost: 10, amount: 1 }; // The cost of the first upgrade of click
var swampGeneratorBasicCost = 100; // The cost of the first swamp generator
var swampGeneratorAmount = 0; // swampGenerator is the amount of swamp generators the player has

function fetching(){
    fetch("upgrade.json")
    .then(response => response.json())
    .then(json => {
        upgradeData = json;
        // Assuming the JSON has a property for firstClickUpgrade
        firstClickUpgrade = upgradeData.firstClickUpgrade || firstClickUpgrade;
    });
}



counter = document.getElementById("count");

function clickUpgrade(){
    clickUpgradeCost = document.getElementById("clickUpgradeCost");

    if(count >= firstClickUpgrade.cost){
        count -= firstClickUpgrade.cost;
        amount += firstClickUpgrade.amount;
        firstClickUpgrade.cost *= 2;
        counter.innerHTML = count;
        clickUpgradeCost.innerHTML = firstClickUpgrade.cost + " frogs";
    }
    else{
        clickUpgradeCost.innerHTML = "Not enough points. You need " + firstClickUpgrade.cost + " frogs to buy an upgrade.";    
    }
}

function swampGeneratorUpgrade(){
    if(count >= swampGeneratorBasicCost){
        count -= swampGeneratorBasicCost;
        swampGeneratorAmount += 0.1;
        swampGeneratorAmount = Math.round(swampGeneratorAmount * 100) / 100
        counter.innerHTML = count;
        if(swampGeneratorAmount == 0.1){
            swampGenerator();
        }
    }
}

window.onload = function(){
    counter.innerHTML = "0";
    document.getElementById('myBtn').addEventListener('click', function addcount(){

        count += amount;
        counter.innerHTML = count;
        
    });
    fetching();

    setInterval(function(){

        switch(count){
            case 10:
                document.getElementById("upgrade1").style.display = "block";
                break;
            case 100:
                document.getElementById("swampGenerator").style.display = "block";
        }

        if(count >= firstClickUpgrade.cost){
            document.getElementById("upgrade1").style.display = "block";
        }
    }, 1000);

    console.log(firstClickUpgrade);
}

function swampGenerator(){
    setInterval(function(){
        count += swampGeneratorAmount;
        count = Math.round(count *100)/100
        counter.innerHTML = count;
    }, 1000);
}

