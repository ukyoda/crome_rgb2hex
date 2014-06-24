
window.onload = function(){

    var button = document.getElementById('exec-rgb2hex');
    button.addEventListener('click', function(){
	    var r = document.getElementById('color-r').value;
	    var g = document.getElementById('color-g').value;
	    var b = document.getElementById('color-b').value;
	    var hex = util.rgb2hex(r,g,b);
	    document.getElementById("result-rgb2hex").innerHTML = hex;
	    
    });

};