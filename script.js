function calculate() {
    const TotalDays = parseInt(document.getElementById("TotalDays").value);
    const TotalPerson = parseInt(document.getElementById("TotalPerson").value);
    const AdvanceAmount = parseInt(document.getElementById("AdvanceAmount").value);

    const RoomType = document.getElementById("RoomType").value;
    var RoomRate=0;
    if(RoomType=="Delux"){
        RoomRate=2500;
    }
    else{
        RoomRate=4000;
    }
    var TotalRoomCost = TotalDays * RoomRate;

    const Amenities = Array.from(document.getElementsByName('Amenities'))
    .filter(input => input.checked)
    .map(input => input.value);
    const AmenitiesRate = getAmenitiesRate(Amenities);
    var TotalAmenitiesCost = TotalDays * AmenitiesRate;
    
    var ExtraPerson=0;
    if(TotalPerson>2){
        ExtraPerson=TotalPerson-2;
    }
    else{
        ExtraPerson=0;
    }
    var ExtraPersonCost=(ExtraPerson*1000) * TotalDays;

    var TotalCost= TotalRoomCost + TotalAmenitiesCost + ExtraPersonCost;

    var Balance=TotalCost-AdvanceAmount;

    document.getElementById('TotalRoomCost').innerHTML="Total Room Cost = "+TotalRoomCost+"/-";
    document.getElementById('TotalAmenitiesCost').innerHTML="Total Amenities Cost = "+TotalAmenitiesCost+"/-";
    document.getElementById('ExtraPersonCost').innerHTML="Extra Person Cost ="+ExtraPersonCost+"/-";
    document.getElementById('TotalCost').innerHTML="Total Cost = "+TotalCost+"/-";
    document.getElementById('Balance').innerHTML="Balance Amount = "+Balance+"/-";

}

function getAmenitiesRate(Amenities) {
    var rate=0;
    for (const amenity of Amenities) {
        switch(amenity){
            case 'AC' :
                rate+=1000;
                break;
            case 'Locker' :
                rate+=300;
                break;
            default:
                break;
        }
    }
    return rate;
}