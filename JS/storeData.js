let id = '';

// function saveData() {
// 	// Get all data from user
// 	let fname = document.getElementById('fname').value,
// 		lname = document.getElementById('lname').value,
// 		age = document.getElementById('age').value,
// 		pincode = document.getElementById('pincode').value;

// 	// Store all user data in object
// 	let inputData = { fname, lname, age, pincode };

// 	// validate all input fields before form submit
// 	if (fname == '' || lname == '' || age == '' || pincode == '') {
// 		alert('please fill all the data');
// 	} else {
// 		// if user has come to add data i.e. localStorage already has data
// 		if (id == '') {
// 			// check if any data is already available in localStorage
// 			let arr = JSON.parse(localStorage.getItem('crud'));
// 			// console.log(arr);
// 			// arr == null i.e. if localStorage is null
// 			if (arr == null) {
// 				localStorage.setItem('crud', JSON.stringify(inputData));
// 			}
// 			// adding data second time that means localStorage already has data
// 			else {
// 				// localStorage.setItem('crud', JSON.stringify(arr));
// 				// Add the new input object to the data array
// 				arr.push(inputData);
// 				// Store the updated data back in local storage
// 				localStorage.setItem('crud', JSON.stringify(arr));
// 				console.log(arr);
// 			}
// 		}
// 		// else user has come to edit data
// 		else {
// 		}
// 	}
// 	document.getElementById('fname').value = '';
// 	document.getElementById('lname').value = '';
// 	document.getElementById('age').value = '';
// 	document.getElementById('pincode').value = '';
// }

// localStorage.clear();

function saveData() {
	// Get the values of the input fields
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;
	let age = document.getElementById('age').value;
	let pincode = document.getElementById('pincode').value;

	// Create an object to store the input data
	let inputData = { fname, lname, age, pincode };

	if (fname == '' || lname == '' || age == '' || pincode == '') {
		alert('please fill all the data');
	} else {
		// Get the existing data array from localStorage, or initialize it as an empty array if it does not exist
		let _userData = JSON.parse(localStorage.getItem('crud')) || [];

		// Add the new input data object to the data array
		_userData.push(inputData);

		// Store the updated data array in localStorage
		localStorage.setItem('crud', JSON.stringify(_userData));
		console.table(_userData);
	}
	// Reset the input fields to empty values
	document.getElementById('fname').value = '';
	document.getElementById('lname').value = '';
	document.getElementById('age').value = '';
	document.getElementById('pincode').value = '';

	// Prevent the form from submitting and reloading the page
	// event.preventDefault();
	const form = document.querySelector('form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
	});
}
