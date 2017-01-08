  $(function () {

    $('form').on('submit', function (event) {

      event.preventDefault();
      var formData = {};
      var formAsArray = $(this).serializeArray();
      formAsArray.forEach(function (input) {
        formData[input.name] = input.value;
      });
    appendToTable(formData);
    clearForm();
    });



    $('#employees').on('click','button',function(event){
      var totalExp=Number($('#totalExpenditure').find('input[type=text]').val());
      var currentEmpAnnualSal=Number($(this).closest('tr').find('#empSal').text()/12);
      $(this).closest('tr').remove();
      revisedTotalExp=parseFloat(totalExp-currentEmpAnnualSal).toFixed(1);
      var hasChildren=$('#employee').children().length;
      if(hasChildren==0){
        revisedTotalExp=0.0;
      }
      $('#totalExpenditure').find('input[type=text]').val(revisedTotalExp);
    });


  });



  function appendToTable(emp){

    var $emp=$('<tr>');
    $emp.append('<td>'+emp.employeeFirstName+'</td>');
    $emp.append('<td>'+emp.employeeLastName+'</td>');
    $emp.append('<td>'+emp.employeeIdNumber+'</td>');
    $emp.append('<td>'+emp.employeeJobTitle+'</td>');
    $emp.append('<td id="empSal">'+emp.employeeAnnualSalary+'</td>');
    $emp.append('<button id="deleteButton">Delete Row</button>');
    $emp.append('</tr>');
    $('#employee').append($emp);
    var salary=emp.employeeAnnualSalary;
    var totalExp=$('#totalExpenditure').find('input[type=text]').val();
    var newTotalExp=parseFloat(Number(salary)/12+Number(totalExp)).toFixed(1);
    $('#totalExpenditure').find('input[type=text]').val(newTotalExp);
  }


  function clearForm() {
    $('form').find('input[type=text]').val('');
  }
