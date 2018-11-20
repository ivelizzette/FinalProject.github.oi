let rIndex;
table=document.getElementById("table");

function displynum(n1) {
	calcform.txt1.value=calcform.txt1.value+n1;
	
}


/* DROPDOWN BUTTON CODE */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*END OF DROPDOWN BUTTON*/

/* tip calculator */

function tipCalculate(slider,bill){
    var tip = document.getElementById('tip');
    var slideval = document.getElementById('slideval');
    var bill = document.getElementById(bill).value;
    var prcnt = slider * .01;
    tip.innerHTML = "$"+(bill * prcnt).toFixed(2);
    slideval.innerHTML = slider+"%";
}
 /*end of tip calculator */  


 //for the table//
 function addRow()
 {
// get input values
var DAT = document.getElementById('DAT').value;
var DOE = document.getElementById('DOE').value;
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var amount = document.getElementById('amount').value;
var per = document.getElementById('percentage').value;
var contactInfo = document.getElementById('contactInfo').value;

                  
// get the html table
// 0 = the first table
var table = document.getElementsByTagName('table')[0];


                  
//adds row to table//
var newRow = table.insertRow(table.rows.length/2+1);

                  
  // add cells to the row
var cel1 = newRow.insertCell(0);
var cel2 = newRow.insertCell(1);
var cel3 = newRow.insertCell(2);
var cel4 = newRow.insertCell(3);
var cel5 = newRow.insertCell(4);
var cel6 = newRow.insertCell(5);
var cel7 = newRow.insertCell(6);  

                  
// add values to the cells
cel1.innerHTML = DAT;
cel2.innerHTML = DOE;                 
cel3.innerHTML = fname;                 
cel4.innerHTML = lname;
cel5.innerHTML = amount;
cel6.innerHTML = per;
cel7.innerHTML = contactInfo;

   selectedRowToInput();
// this delets the informationg from the input section//
  DAT = document.getElementById('DAT').value='';
  DOE = document.getElementById('DOE').value='';
  fname = document.getElementById('fname').value='';
  lname = document.getElementById('lname').value='';
  amount = document.getElementById('amount').value='';
  per = document.getElementById('percentage').value='';
  contactInfo = document.getElementById('contactInfo').value=''; 

}


// display selected row data into input text
function selectedRowToInput()
{

  for(var i = 1; i < table.rows.length; i++)
  {
    table.rows[i].onclick = function()
    {
    // get the seected row index
      rIndex = this.rowIndex;
      console.log(rIndex);
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("lname").value = this.cells[1].innerHTML;
      document.getElementById("contactInfo").value = this.cells[2].innerHTML;
      document.getElementById("DOE").value = this.cells[3].innerHTML;
      document.getElementById("DAT").value = this.cells[4].innerHTML;
      document.getElementById("amount").value = this.cells[5].innerHTML;
      document.getElementById("percentage").value = this.cells[6].innerHTML;
      console.log(this.cells[6].innerHTML);
    };
  }
}

selectedRowToInput();

//remove button for table//
function removeSelectedRow()
{
  table.deleteRow(rIndex)
  console.log(rIndex);
//find the table and starts removing rows starting at 1 (0 is the head table)
//document.getElementById("table").deleteRow(1);


}



