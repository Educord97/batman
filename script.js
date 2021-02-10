function callYes() {
    let bat1 = document.getElementById("batJ1");
    let bat2 = document.getElementById("batJ2");
    let bat3 = document.getElementById("batJ3");
    let bat4 = document.getElementById("batJ4");
    let bat5 = document.getElementById("batJ5");
    let bat6 = document.getElementById("batJ6");
    let lightSky = document.getElementById("light-disabled");
    let shadow = document.getElementById("shadowLogo");
    let boxCartoon = document.getElementById("cartoon");

    if (lightSky.className === "light-disabled" || shadow.className === "shadowOff" || bat1 === "" || bat2 === "" || bat3 === "" || bat4 === "" || bat5 === "" || bat6 === "") {
        lightSky.className = "light";
        shadow.className = "shadow";
        bat1.className = "bat1";
        bat2.className = "bat2";
        bat3.className = "bat3";
        bat4.className = "bat4";
        bat5.className = "bat5";
        bat6.className = "bat6";

    } else {
        lightSky.className = "light-disabled";
        shadow.className = "shadowOff";
    }

    let batmanChar = document.getElementById("batman");

    if (batmanChar.className === "characterOff") {
        batmanChar.className = "character";
    } else {
        batmanChar.className = "characterOff";
    }    
    return(
        boxCartoon.className = "text-Woman-All-j"
        
    )
}

function callNo() {
    let destroyed = document.getElementById("destroy");
    let cloud = document.getElementById("cloudJ");
    let cartoonOff = document.getElementById("cartoon");
    let powOff = document.getElementById("powJ");
    let joker = document.getElementById("jokerOff");
 

    if (destroyed.className === "cityDestroyedOff") {
        destroyed.className = "cityDestroyed";

    } else {
        destroyed.className = "cityDestroyedOff";

    }

    if (cloud.className === "" ) {
        setTimeout(() => {
            cloud.className = "cloud"
        }, 100);
        setTimeout(() => {
            powJ.className = "pow"
        }, 10);
        setTimeout(() => {
            joker.className = "joker"
        }, 200);

    }
    return(
        cartoonOff.className = "text-Woman-All-j"
    )

}
