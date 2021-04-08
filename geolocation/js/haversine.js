function haversine(lat1, lon1, lat2, lon2){
    var R = 6371; //earth radius in KM
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
    var lat1 = lat1.toRad()
    var lat2 = lat2.toRad();

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dLon/2) * Math.sin(dLon/2);  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; //kilometers

    return roundVal(d);
}

// Converts numeric degrees to radians
if (typeof Number.prototype.toRad == "undefined"){
    Number.prototype.toRad = function(){
        
    } 
}

function roundVal(val){
    var doc = 2;
    var result = Math.round(val)* Math.pow(10, dec))/Math.pow(10,dec);
    return result;
}