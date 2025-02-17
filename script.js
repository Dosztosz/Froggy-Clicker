var count = 0; // Starter number of frogs
var amount = 1; // Starter amount of frogs per click
var firstClickUpgrade = 10; // The cost of the first upgrade of click
var swampGeneratorBasicCost = 100; // The cost of the first swamp generator
var swampGeneratorAmount = 0; // swampGenerator is the amount of swamp generators the player has

counter = document.getElementById("count");

function clickUpgrade(){
    if(count >= firstClickUpgrade){
        count -= firstClickUpgrade;
        amount += 1;
        firstClickUpgrade *= 2;
        counter.innerHTML = count;
        document.getElementById("clickUpgradeCost").innerHTML = firstClickUpgrade+" frogs";
    }
    else{
        document.getElementById("clickUpgradeCost").innerHTML = "Not enough points. You need"+firstClickUpgrade+" frogs to buy an upgrade.";    
    }
}

function swampGeneratorUpgrade(){
    if(count >= swampGeneratorBasicCost){
        count -= swampGeneratorBasicCost;
        swampGeneratorAmount += 0.1;
        swampGeneratorAmount = Math.round(swampGeneratorAmount * 100) / 100
        counter.innerHTML = count;
        console.log(swampGeneratorAmount);
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

}

function swampGenerator(){
    setInterval(function(){
        count += swampGeneratorAmount;
        count = Math.round(count *100)/100
        counter.innerHTML = count;
    }, 1000);
}

