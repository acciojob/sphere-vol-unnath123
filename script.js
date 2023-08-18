function volume_sphere() {
    //Write your code here
	var form=document.getElementById("MyForm");
	

	function submitForm(){
		event.preventDefault();
		var rad=document.getElementById("radius").value;
		var volume1=(4/3) * Math.PI * Math.pow(rad, 3);
		volume1=volume1.toFixed(4);
		document.getElementById("volume").value=volume1;
	}
	form.addEventListener('submit', submitForm);
	
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
