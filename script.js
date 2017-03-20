$(document).ready(function() {
    $('.modal').modal();
});

function openModalDialog() {
    $('#modal1').modal('open');
}

function closeModalDialog() {
    $('#modal1').modal('close');
}

function onSubmitForm() {
    return true;
}

var object = {};
object.mortgage_amount = 1;
object.annual_property_taxes = 1;
object.annual_insurance_costs = 1;
object.interest_rate = 1;
object.number_of_years = 1;

function monthlyPayment () {
	var m_int = interest_rate/12;
    for(var i =0; i < number_of_years*12; i++) {
        [
  	    var monthly_amort= p*m_int;
  	    var mPrincipal = mpmt-monthly_amort;
  	    p=p-mPrincipal;
  }
}
