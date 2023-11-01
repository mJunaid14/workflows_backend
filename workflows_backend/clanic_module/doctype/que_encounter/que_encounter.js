// Copyright (c) 2023, junaid and contributors
// For license information, please see license.txt

frappe.ui.form.on('Que encounter', {
	// refresh: function(frm) {
	
	// 	 frm.add_custom_button('Auto-Populate Encounter List', function() {
	// 		 // Get the selected Que Encounter
	// 		 var que_encounter = frm.doc;
			 
 
	// 		 // Query Encounter List for the selected Que Encounter
	// 		 frappe.call({
	// 			 method: 'workflows_backend.clanic_module.doctype.que_encounter.que_encounter.populate_encounter_list',
	// 			 args: {
	// 				name : que_encounter.name,
	// 				paymentType : que_encounter.payment,
	// 				type : que_encounter.non_consultative,
	// 				patientId:que_encounter.patient
	// 			 },
	// 			 callback: function(response) {
	// 				//  var data = response.message;
	// 				//  console.log("data : ",data);
 
	// 				 // Populate fields in Encounter List based on the response
	// 				//  frm.set_value('field1_in_encounter_list', data.field1_from_que_encounter);
	// 				//  frm.set_value('payment_type', data.field2_from_que_encounter);
	// 				 // Repeat for other fields
 
	// 				//  frm.refresh();
	// 				frappe.show_alert({
	// 					message: __("Saved Encounter "),
	// 					indicator: "green",
	// 				});
	// 			 }
	// 		 });
	// 	 });
	//  },
	 before_save: function(frm) {
		var que_encounter = frm.doc;
			 
		// Query Encounter List for the selected Que Encounter
		frappe.call({
			method: 'workflows_backend.clanic_module.doctype.que_encounter.que_encounter.populate_encounter_list',
			args: {
			   name : que_encounter.name,
			   paymentType : que_encounter.payment,
			   type : que_encounter.non_consultative
			},
			callback: function(response) {
			 
			   frappe.show_alert({
				   message: __("Encounter Queued"),
				   indicator: "green",
			   });
			}
		});
    }
 })
 
