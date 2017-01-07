  $(function () {
    console.log('document is ready');

    $('form').on('submit', function (event) {
      console.log('form submitted');

      event.preventDefault();

      var formData = {};
      var formAsArray = $(this).serializeArray();

      formAsArray.forEach(function (input) {
        formData[input.name] = input.value;
      });


      //appendDom(formData);
      appendToTable(formData);
      clearForm();
    });

    $('#employees').on('click','button',function(event){
      console.log("*********inside delete button event**********");
      console.log('click delete button'+this);
      console.log('click delete button jquery value'+$(this));
      var totalExp=$('#totalExpenditure').find('input[type=text]').val();
      var currentEmpAnnualSal=$(this).closest('tr').find('#empSal').text();
      $('#totalExpenditure').find('input[type=text]').val(Number(totalExp)-Number(currentEmpAnnualSal));
      console.log("empSalary"+currentEmpAnnualSal);
      $(this).closest('tr').remove();


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
    console.log($emp);
    $('#employee').append($emp);
    var salary=emp.employeeAnnualSalary;
    var totalExp=$('#totalExpenditure').find('input[type=text]').val();
    var newTotalExp=Number(salary)+Number(totalExp);
    $('#totalExpenditure').find('input[type=text]').val(newTotalExp);
  }

  // function appendDom(emp) {
  //   var $emp = $('<div class="employee"></div>'); // create a div jQuery object
  //
  //   $emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add our employee data
  //   $emp.append('<p>' + emp.employeeIdNumber + '</p>');
  //
  //   $('#employees').append($emp); // append our div to the DOM
  // }

  function clearForm() {
    $('form').find('input[type=text]').val('');
  }
