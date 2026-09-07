

function getCngFare(distance, isNight = false, waitingMinutes = 0){

    let fareDistance = (distance>2)? 50+((distance-2)*15) : 50;
    let totalFee = fareDistance + (waitingMinutes*2);
    let nightFee = (isNight)? totalFee+(totalFee*0.2) : totalFee;

    return nightFee;
}

console.log(getCngFare(2));
console.log(getCngFare(10));
console.log(getCngFare(5, true, 10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));



