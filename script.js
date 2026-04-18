function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let volume = document.getElementById("volume");
	let vol = (4/3)*(Math.pow((3.14*radius),3));
	volume.textContent = vol;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
