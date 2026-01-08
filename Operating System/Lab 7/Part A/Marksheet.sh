#!/bin/bash

echo "Enter marks of Subject 1:"
read sub1

echo "Enter marks of Subject 2:"
read sub2

echo "Enter marks of Subject 3:"
read sub3

total=$((sub1 + sub2 + sub3))
percentage=$(echo "scale=2; $total * 100 / 300" | bc)

if [ $percentage >= 40 ]; then
    if [ $percentage >= 60 ]; then
        class="First Class"
    else
        if [ $percentage >= 50 ]; then
            class="Second Class"
        else
            class="Pass Class"
        fi
    fi
else
    class="Fail"
fi

echo "---------------------------"
echo "        MARK SHEET"
echo "---------------------------"
echo "Subject 1 Marks : $sub1"
echo "Subject 2 Marks : $sub2"
echo "Subject 3 Marks : $sub3"
echo "---------------------------"
echo "Total Marks     : $total"
echo "Percentage      : $percentage%"
echo "Class Obtained  : $class"
echo "---------------------------"
