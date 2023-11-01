frappe.pages['custom-page'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Custom page',
		single_column: true
	});
	page.set_primary_action("Save", () => {
		console.log("click save");
	});
	let doctype_field = page.add_field({
		label:'Document Type',
		fieldtype:'Link',
		fieldname:'document_type',
		options:'DocType',
		change(){
		    const doctype = doctype_field.get_value();
			console.log('===>', doctype);
			let document_field = page.add_field({
				label:'Document',
				fieldtype:'Link',
				fieldname:'document',
				options:doctype,
				change(){
					console.log("value==>",document_field.get_value);
				}
			})
		}

	})
}