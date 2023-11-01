// Copyright (c) 2023, junaid and contributors
// For license information, please see license.txt

frappe.ui.form.on('Patients list', {
	refresh: function(frm) {
	 
		//    // Check if it's a new document
		//    if (!frm.doc.__islocal) {
        //     return;
        // }

        // // Generate the unique ID (you can customize this part)
        // let uniqueID = frappe.utils.get_random(4); ;
        
        // // Set the ID field in the document
        // frm.set_value('id', uniqueID);
    

		if (!frm.doc.__unsaved) {
		frm.add_custom_button('Que encounter', function() {

			var d = new frappe.ui.Dialog({
				title: 'Enter details',
				fields: [
					{
						label: 'Patient Name',
						fieldname: 'patient_name',
						fieldtype: 'Data',
						read_only: 1 ,
						default: frm.doc.name 
					},
					{
						label: 'Reason',
						fieldname: 'reason',
						fieldtype: 'Data'
					},
					{
						label: 'Payment',
						fieldname: 'payment',
						fieldtype: 'Select', // Change fieldtype to Select for a dropdown
						options: 'Cash\nCredit Insurance'
					},
					{
						label: 'Doctor Name',
						fieldname: 'doctor_name',
						fieldtype: 'Data'
					},
					{
						label: 'NCE',
						fieldname: 'nce',
						fieldtype: 'Check'
					}
				],
				size: 'small', // small, large, extra-large 
				primary_action_label: 'Submit',
				primary_action(values) {
					 populateEncounterList(values)
					d.hide();
				}
			});

			function populateEncounterList(data){
				console.log("populateEncounterList=====>",data);
				frappe.call({
					method: 'workflows_backend.clanic_module.doctype.patients_list.patients_list.populate_encounter_list',
					args: {
					   name : data.patient_name,
					  
					    
					},
					callback: function(response) {
					 
					   frappe.show_alert({
						   message: __("Encounter Queued"),
						   indicator: "green",
					   });
					}
				});
			}
			d.show();
			
		});
		}
		 

	},
	after_save: function(frm){
	 
		window.location.href = "/app/patient";

	}
});

