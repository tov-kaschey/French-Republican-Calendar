<?php
	require_once 'vars.php';

	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	$charset = mysqli_set_charset($dbc, "utf8");
?>