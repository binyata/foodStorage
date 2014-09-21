
// insert
$("#sub").click( function() {

	
	
	$.post( $("#myForm").attr("action"), $("#myForm :input").serializeArray(), function(info) { $("#result").html(info); } );

	clearInput();
});



$("#myForm").submit( function() {
	return false;

});


function clearInput() {

	$("#myForm :input").each( function() {
		$(this).val('');
	});
	searchGeneric();
}

// delete ******************************************************************************************
$("#sub1").click( function() {

	
	
	$.post( $("#myForm1").attr("action"), $("#myForm1 :input").serializeArray(), function(info) { $("#result").html(info); } );

	clearInput1();
	
});



$("#myForm1").submit( function() {
	return false;
	
});


function clearInput1() {

	$("#myForm1 :input").each( function() {
		$(this).val('');
		searchGeneric();
	});

}


function searchGeneric() {

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","ryan1.php?q=",true);
  xmlhttp.send();
}






/*




function talkToDelete() {

	
	if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","delete_record.php?q=",true);
  xmlhttp.send();

}




function hey(str) {
  if (str=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","ryan1.php?q="+str,true);
  xmlhttp.send();
}





var xmlHttp = createXmlHttpRequestObject();
// Most important part of ajax
function createXmlHttpRequestObject(){

	var xmlHttp;
	
	// xmlhttp to work for internetexplorer
	
	if(window.ActiveXObject){
	
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttp = false;
		}
	
	}else{
	
	try{
			xmlHttp = new XMLHttpRequest();
		}catch(e){
			xmlHttp = false;
		}
}

	if(!xmlHttp)
		alert("Cannot create that object hoss!");
	else
		return xmlHttp;

}

// responsible for taking an object and sending it to the server
function process(){
			// Is the system ready? 0 Or Busy? 4
		if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
			//food = encodeURIComponent(document.getElementById("userInput").value);
			// make response
			xmlhttp.open("GET","ryan1.php?q=",true);
			
			xmlHttp.onreadystatechange = handleServerResponse;
			// send request - POST will require something besides null in xmlhttp.send
			xmlHttp.send(null);
		}else{
			// 
			setTimeout('process()',1000);
		}

}


// Response from the server (xml file)
function handleServerResponse(){

		if(xmlHttp.readyState==4){
		// 200 means server is going smoothly, if it goes good, then we have an xml file.
			if(xmlHttp.status==200){
				xmlResponse = xmlHttp.responseXML;
				// Root element of xml file below:
				xmlDocumentElement = xmlResponse.documentElement;
				document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
				// message = xmlDocumentElement.firstChild.data;
			//	document.getElementById("underInput").innerHTML = '<span style = "color:blue">' + '</span>';
				setTimeout('process()',1000);
			} else {
				alert('Something went wrong!');
		
		}

	}
}

*/









