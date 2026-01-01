#!/bin/bash
read -p "Enter first number:" n1
read -p "Enter second number:" n2
if [ $n1 -lt $n2 ]; then
	echo "Second number is largest"
else
	echo "First number is largest"
fi
