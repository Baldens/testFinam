<?php
    for ($i=0; $i < 100; $i++) { 
        echo "<br>";
        switch($i){
            case $i%3 == 0 && $i%5 == 0:
                echo "FooBar";
                break;
            case $i%3 == 0:
                echo "Foo";
                break;
            case $i%5 == 0:
                echo "Bar";
                break;
            default:
                echo $i;
        }
    }
?>