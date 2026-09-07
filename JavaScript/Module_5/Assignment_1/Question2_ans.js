function getDayType(day){

    switch( day.toLowerCase()){
        case "friday":
        case "saturday": 
            console.log("weekend");
            break;

        case "sunday":
        case "monday": 
        case "tuesday":
        case "wednesday":
        case "thursday":
            console.log("working Day");
            break;

        default:
            console.log("Invalid Day");
            break;
    }
}


getDayType("Friday");
getDayType("friday");
getDayType("MONDAY");
getDayType("Bandarban");
