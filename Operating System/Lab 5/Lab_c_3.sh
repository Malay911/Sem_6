#!/bin/bash

	echo "Enter first side:"
read a
	echo "Enter second side:"
read b
	echo "Enter third side:"
read c

if [ (($a + $b)) -gt $c ]
then
	echo "Valid triangle"
elif [ (($a + $c)) -gt $b ]
then
	echo "Valid triangle"
elif [ (($b + $c)) -gt $a ]
then
	echo "Valid triangle"
else
    echo "Invalid triangle"
fi

