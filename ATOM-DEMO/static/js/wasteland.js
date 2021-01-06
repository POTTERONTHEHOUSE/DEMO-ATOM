//datset



//system
/* if hidetable is called then togglesys will be needed
function togglesys(){
  $("#syscontent").collapse("toggle");
}*/
/*
function hidetables() {
  if(document.getElementById("graphd11").checked == true){
    //hide footprint
              $("#result-table12").hide();
              $("#result-table22").hide();
              $("#result-table11").show();
              $("#result-table21").show();
              document.getElementById("sysresult").innerHTML="GRAPHD";
            }
          else if (document.getElementById("graphd12").checked == true) {
    //hide i/o
            $("#result-table11").hide();
            $("#result-table21").hide();
            $("#result-table12").show();
            $("#result-table22").show();
            document.getElementById("sysresult").innerHTML="PREGELPLUS";
          }
      
}
*/
// for system select&form-control 
function switchtable(value) {  
  var selectedOption=value.options[value.selectedIndex];  
	//alert(selectedOption.value);
	if(selectedOption.value=="graphd"){
    $("#result-table12").hide();
    $("#result-table22").hide();
    $("#result-table11").show();
    $("#result-table21").show();
    
 	}else if(selectedOption.value=="pregelplus"){
    $("#result-table11").hide();
    $("#result-table21").hide();
    $("#result-table12").show();
    $("#result-table22").show();
    
   }   
}


//algorithm
function togglealg(){
  $("#algcontent").collapse("toggle");
}

function showalg1(){
  if(document.getElementById("algo11").checked == true){
    document.getElementById("algresult").innerHTML="MSSP";
  }
}
function showalg2(){
  if (document.getElementById("algo12").checked == true){
    document.getElementById("algresult").innerHTML="PPR";
  }
}

//cluster size
function toggleclusize(){
  var div1 = document.getElementById("clusizecontent");
  if (div1.style.display === "none") {
      div1.style.display = "block";
  } else {
      div1.style.display = "none";
  }
}

function showclusize1(){
  if(document.getElementById("machine11").checked == true){
    document.getElementById("clusizeresult").innerHTML="1";
  }
}
function showclusize2(){
  if (document.getElementById("machine12").checked == true){
    document.getElementById("clusizeresult").innerHTML="2";
  }
}
function showclusize3(){
  if(document.getElementById("machine13").checked == true){
    document.getElementById("clusizeresult").innerHTML="3";
  }
}
function showclusize4(){
  if (document.getElementById("machine14").checked == true){
    document.getElementById("clusizeresult").innerHTML="4";
  }
}
function showclusize5(){
  if(document.getElementById("machine15").checked == true){
    document.getElementById("clusizeresult").innerHTML="5";
  }
}
function showclusize6(){
  if (document.getElementById("machine16").checked == true){
    document.getElementById("clusizeresult").innerHTML="6";
  }
}
function showclusize7(){
  if(document.getElementById("machine17").checked == true){
    document.getElementById("clusizeresult").innerHTML="7";
  }
}
function showclusize8(){
  if (document.getElementById("machine18").checked == true){
    document.getElementById("clusizeresult").innerHTML="8";
  }
}
function showclusize9(){
  if (document.getElementById("machine19").checked == true){
    document.getElementById("clusizeresult").innerHTML=document.getElementById("usermachinenumber").value;
  }
}

//workload
function togglewl(){
  $("#wlcontent").collapse("toggle");
}

//when the "disable atom" is chosen, the block switches to "manual input"; 
// for workload select&form-control 
function switchatom() {  
  var div1 = document.getElementById("toatom");
  var div2 = document.getElementById("tomanual");
  var div3 = document.getElementById("enatom");
  if (div3.value == "Enable") {
      div1.style.display = "block";
      div2.style.display = "none";
  } else {
      div1.style.display = "none";
      div2.style.display = "block";
  } 
}
//then by clicking the spinning icon (with a tooltip) users can switch back to the original.
function switchmanual() {  
  var div1 = document.getElementById("toatom");
  var div2 = document.getElementById("tomanual");
  if (div2.style.display === "none") {
      div2.style.display = "block";
      div1.style.display = "none";
  } else {
      div2.style.display = "none";
      div1.style.display = "block";
  } 
}

function checkworkload(){
  var x = new Number;
  x = Number(document.getElementById("workload").value);
  if (isNaN(x) || x < 1 || x > 4096) {
    window.alert("Illegal workload! Please enter again!");
   } 
   else {
      window.alert("Success");
   }
  document.getElementById("wlresult").innerHTML=document.getElementById("workload").value;
}



// batchnumber input value alert
function checkbatchnumber() {
  var x = new Number;
  x = Number(document.getElementById("userbatchnumber").value);
  if (isNaN(x) || x < 1 || x > document.getElementById("workload").value) {window.alert("Illegal workload! Please enter again!");} else {
      window.alert("Success");
  }
}

//server interface

//ROCK IT
function rockit(){
  var x = Math.floor(Math.random() * 1000000000);
     //post parameters to the server
     $.ajax({
       
      url:'http://localhost:80/start_task',
      async:false,//for the return value
      type:'POST',
      contentType: "application/json",
      data:JSON.stringify({
        "dataset":document.getElementById("chdataset").value,
        "workload":document.getElementById("workload").value,
        "algorithm":document.getElementById("chalg").value,
        "num_of_machines":document.getElementById("clusizeresult").value,
        "system":document.getElementById("chsys").value,
        "uuid":x,
      }),
      
      success : function(data){
        console.log(data);
          console.log(data.result);
          //alert(JSON.stringify(console.log(data.result), null, 2));
          
          },

//但是怎么把console里的内容写到alert里,可以用这个函数吗
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert(XMLHttpRequest.status);
        alert(XMLHttpRequest.readyState);
        alert(textStatus); // paser error;
    },
    })


}
 

/* create table      
var count = result["result"];
        
var table_body = $("#result-table11");
// if (){}
 for (var i = 1; i <= count.length; i++){
   var tr = $('<tr><th scope="row">' + '</th><td>' + count[i-1][0] + '</td><td>' + count[i-1][1] + '</td></tr>'+ count[i-1][2] + '</td></tr>');
   setTimeout(function(){    },500)
   table_body.append(tr[0]);
 }
 
 var table_body = $("#result-table12");
// if (){}
 for (var i = 1; i <= count.length; i++){
   var tr = $('<tr><th scope="row">' + '</th><td>' + count[i-1][0] + '</td><td>' + count[i-1][1] + '</td></tr>'+ count[i-1][2] + '</td></tr>');
   setTimeout(function(){    },500)
   table_body.append(tr[0]);
 }


           (function () {
            var old = console.log;
            var logger = document.getElementById('log');
            console.log = function (message) {
                if (typeof message == 'object') {
                    logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
                } else {
                    logger.innerHTML += message + '<br />';
                }
            }
        })();

        <tr>
在表中插图片
 <td style="width:20px"> 。。。</td>

 <td style="width:20px"><img src="pic.jpg"></td>

 </tr>
 */

/*test zone*/

	TESTER = document.getElementById('tester');
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );
