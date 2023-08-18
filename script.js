function volume_sphere() {
    //Write your code here
	var form=document.getElementById("MyForm");
	

	function submitForm(){
		event.preventDefault();
		var rad=document.getElementById("radius").value;
		document.getElementById("volume").value=(4/3) * Math.PI * Math.pow(rad, 3);
	}
	form.addEventListener('submit', submitForm);
	
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
