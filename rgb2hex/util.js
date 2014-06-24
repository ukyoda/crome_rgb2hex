
var util = {};

util.rgb2hex = function(r,g,b){
    r = window.parseInt(r, 10);
    g = window.parseInt(g, 10);
    b = window.parseInt(b, 10);
    return "#" +
    ("0"+r.toString(16)).slice(-2) + 
    ("0"+g.toString(16)).slice(-2) + 
    ("0"+b.toString(16)).slice(-2);
    
};

