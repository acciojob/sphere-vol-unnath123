function volume_sphere() {
    //Write your code here
	let rad=document.getElementById("radius").value;
	let volume1=10*rad;
	
	document.getElementById("volume").value=volume1;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
