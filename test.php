test<?php 
try {
require 'vendor/autoload.php';

use Parse\ParseClient;

ParseClient::initialize('ipB7OMiCIDruJKnCF7aB9OhJXiIjQX1XG7oRiFzl', 'gMyBdJyvtjx4mvT0Vwq0Io6S0GhNMRvvLqkeE5MP', 'JCyCDW2HoEKs3U5p2R3DN9vQ64OEiMsiIvBcHexn');

use Parse\ParseObject;

$testObject = ParseObject::create("TestObject");
$testObject->set("foo", "bar");
$testObject->save();
}
catch (ParseException $error) {
    echo $error->getMessage();
}

?>