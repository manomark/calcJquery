

$( function() {
	var v1, v2, op;

	//COLOCANDO OS VALORES DOS BOTÕES NO INPUT SCREEN
	$("input[name=btn]").click(function() {
		$("#screen").val($("#screen").val() + $(this).val());
	});

	//CLEAR NO SCREEN
	$("input[name=CE]").click(function() {
		$("#screen").val('');
		$("#op").text('');
	});


	$("input[name=add]").click(function() {
	
		if ($("#screen").val() != ''){

			v1 = parseFloat($("#screen").val());
			$("#screen").val('');
			op = "soma";
			$("#op").text($(this).val());
		
			}else {  
				alert("não pode.");
			}
	});

	$("input[name=sub]").click(function() {
	
		if ($("#screen").val() != ''){

			v1 = parseFloat($("#screen").val());
			$("#screen").val('');
			op = "sub";
			$("#op").text($(this).val());
		
			}else {  
				alert("não pode.");
			}
	});

	$("input[name=mul]").click(function() {
	
		if ($("#screen").val() != ''){

			v1 = parseFloat($("#screen").val());
			$("#screen").val('');
			op = "mul";
			$("#op").text($(this).val());
		
			}else {  
				alert("não pode.");
			}
	});

	$("input[name=div]").click(function() {
	
		if ($("#screen").val() != ''){

			v1 = parseFloat($("#screen").val());
			$("#screen").val('');
			op = "div";
			$("#op").text($(this).val());
		
			}else {  
				alert("não pode.");
			}
	});
	$("input[name=equal]").click(function() {

		
		if($("#screen").val() != '') {
			v2 = parseFloat($("#screen").val());
	
			if(op == "soma") {
				$("#screen").val(v1+v2);
			}

			else if(op == "sub") {
				$("#screen").val(v1-v2);
			}

			else if(op == "mul") {
				$("#screen").val(v1*v2);
			}

			else if(op == "div") {
				$("#screen").val(v1/v2);
			}

			else if(op == "sub") {
				$("#screen").val(v1-v2);
			}	

			$("#op").text('');							
		}else { 
			alert("não pode.");
		}


	});


});