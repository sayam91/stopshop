<!DOCTYPE html>
<html>
<head>
<title>What kind of shopper are you ?</title>
<meta charset="UTF-8">

<?php
	$hasTitle = isset($_GET['title']);
	$hasDesc = isset($_GET['desc']);
?>
<!-- Open graph tags -->
<meta property="fb:app_id"          content="475565745924741" /> 
<meta property="og:type"            content="article" /> 
<meta property="og:url"             content="<?php echo "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>" /> 
<meta property="og:title"           content="<?php if($hasTitle) echo $_GET['title']; else echo 'What kind of shopper are you ?'; ?>" /> 
<meta property="og:image"           content="http://christophedeveaux.com/stopshop/quiz/img/logo.jpg" /> 
<meta property="og:description"     content="<?php if($hasDesc) echo $_GET['desc']; else echo 'Discover what kind of shopper you are...'; ?>" />
<meta property="og:image:width" 	content="1148"/>
<meta property="og:image:height" 	content="1080"/>

<link href="css/main.css" rel="stylesheet">
</head>
<body>
    
	<script>
		 
	</script>

	<div class="progressBar">
		<div class="progressBar__progress"></div>
	</div>

	<div class="footer">
        <div class="footer__stripe"></div>
    </div> 

    <div id="container">
 
	    <div class="heading">
	        <h1>1. otázka z 6:</h1>
	        <h2></h2>
	    </div>

	    <div id="Qstage"></div>
	
		<div class="footer">
			<div class="footer__logo"></div>
        	<div class="footer__text">Mistr nákupů:</div>
        	<div class="footer__stripe"></div>
		</div>

	</div>

    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="js/form.js"></script>

</body>
</html>