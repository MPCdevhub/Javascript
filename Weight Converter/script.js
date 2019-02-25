document.getElementById('innrContainer').style.visibility = 'hidden';
document.getElementById("wghtInput").addEventListener('input', function(ev) {
    document.getElementById('innrContainer').style.visibility = 'visible';
    var lbs = ev.target.value;
    document.getElementById('gmOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs * 16;

});