var count = 0; // Starter number of frogs
var amount = 40; // Starter amount of frogs per click
var swampGeneratorAmount = 0; // swampGenerator is the amount of swamp generators the player has

function fetching(){
    fetch("upgrade.json")
    .then(response => response.json())
    .then(json => {
        upgradeData = json;
        // Assuming the JSON has a property for firstClickUpgrade
        firstClickUpgrade = upgradeData.firstClickUpgrade || firstClickUpgrade;
        swampGenerator = upgradeData.swampGenerator || swampGenerator;
    });
}



counter = document.getElementById("count");

function clickUpgrade(){
    clickUpgradeText = document.getElementById("clickUpgradeCost");

    if(count >= firstClickUpgrade.cost){
        count -= firstClickUpgrade.cost;
        amount += firstClickUpgrade.amount;
        firstClickUpgrade.cost *= 2;
        counter.innerHTML = count;
        clickUpgradeText.innerHTML = firstClickUpgrade.cost + " frogs";
    }
    else{
        clickUpgradeText.innerHTML = "Not enough points. You need " + firstClickUpgrade.cost + " frogs to buy an upgrade.";    
    }
}

function swampGeneratorUpgrade(){
    swampGeneratorText = document.getElementById("swampUpgradeCost");

    if(count >= swampGenerator.cost){
        count -= swampGenerator.cost;
        swampGeneratorAmount += swampGenerator.amount;
        swampGeneratorAmount = Math.round(swampGeneratorAmount * 100) / 100
        counter.innerHTML = count;
        swampGenerator.cost *= 2;
        swampGeneratorText.innerHTML = swampGenerator.cost + " frogs";
        if(swampGeneratorAmount == 0.1){
            swampGeneratorFunction();
        }
    }
    else{
        swampGeneratorText.innerHTML = "Not enough points. You need " + swampGenerator.cost + " frogs to buy an upgrade.";    
    }
}



// Onload Section - Everything here loads at start of website

window.onload = function(){
    counter.innerHTML = "0";
    document.getElementById('myBtn').addEventListener('click', function addcount(){

        count += amount;
        counter.innerHTML = count;
        
    });
    fetching();


    // Function that checks if you unlocked another upgrade
    setInterval(function(){

        if(count >= firstClickUpgrade.cost){
            document.getElementById("upgrade1").style.display = "block";
        }

        if(count >= swampGenerator.cost){
            document.getElementById("swampGenerator").style.display = "block";
        }
    }, 100);

    // Saving Function
    setInterval(function(){
        alert("Saving...")
    }, 10000);
}

function swampGeneratorFunction(){
    setInterval(function(){
        count += swampGeneratorAmount;
        count = Math.round(count *100)/100
        counter.innerHTML = count;
    }, 1000);
}

