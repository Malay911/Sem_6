#!/bin/bash

echo "Enter a number:"
read num

if [ $num -gt 0 ]; then
    echo "Number is Positive"
    
    if [ $((num % 2)) -eq 0 ]; then
        echo "It is an Even number"
    else
        echo "It is an Odd number"
    fi

elif [ $num -lt 0 ]; then
    echo "Number is Negative"
else
    echo "Number is Zero"
fi
