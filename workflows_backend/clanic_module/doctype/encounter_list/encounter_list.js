// Copyright (c) 2023, junaid and contributors
// For license information, please see license.txt

frappe.ui.form.on('Encounter List', {
	refresh: function(frm) {
		frappe.get_list('Patients list', filters={'age':33}, fields=['name1', 'age']).then(function(data) {
		  // Handle the data as needed
		  console.log(data); // Example: log the data to the console
		})
		.catch(function(err) {
		  // Handle any errors
		  console.error(err);
		});
				  
 
	}
});


