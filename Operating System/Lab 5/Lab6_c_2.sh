#!/bin/bash

	echo "Enter first number:"
read a
	echo "Enter second number:"
read b

if [ $a -eq $b ]
then
    echo "Both the number are same"
else
    echo "Both are different"
fi

