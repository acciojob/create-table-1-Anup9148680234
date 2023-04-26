function insert_Row() {
    //Write your code here
  var tab = document.getElementById('sampleTable').innerHTML;
  let x = `
	  <tr><td>New Cell1 </td> 
	  <td>New Cell2 </td></tr> 
  ` + tab;
	document.getElementById('sampleTable').innerHTML = x;
}
