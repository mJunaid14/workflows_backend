# Copyright (c) 2023, junaid and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Patientslist(Document):
	pass

@frappe.whitelist()
def get_patient_list():
    patients = frappe.get_all('Patients list', fields=['id','name1','age','gender','email','phone'])
    return patients

@frappe.whitelist()
def delete_patient_list(id):
    frappe.delete_doc('Patients list', id)
    get_patient_list()
    return 'Deleted ...'
    
@frappe.whitelist()
def populate_encounter_list(name):
    ac = frappe.get_list('Patients list', filters={}, fields=['name'])
    print('======> get list')
    print(ac)
    # Create a new row in Encounter List Doctype
    encounter_list = frappe.new_doc("Encounter List")
    
    # if type == 0:
    #  encounter_list.type = 'NON-CONSULTATIVE'
    # else:
    #  encounter_list.type = 'CONSULTATIVE'
      
        
    encounter_list.name1 = name
    
    # encounter_list.payment_type = paymentType
    
    # # Populate other fields as needed
    encounter_list.save()