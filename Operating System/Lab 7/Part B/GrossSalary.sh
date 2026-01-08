#!/bin/bash

echo "Enter Basic Salary:"
read basic

if [ $basic -ge 30000 ]; then
    da=$(echo "scale=2; $basic * 95 / 100" | bc)
    hra=$(echo "scale=2; $basic * 30 / 100" | bc)
else
    if [ $basic -ge 20000 ]; then
        da=$(echo "scale=2; $basic * 90 / 100" | bc)
        hra=$(echo "scale=2; $basic * 25 / 100" | bc)
    else
        if [ $basic -ge 10000 ]; then
            da=$(echo "scale=2; $basic * 80 / 100" | bc)
            hra=$(echo "scale=2; $basic * 20 / 100" | bc)
        else
            da=0
            hra=0
        fi
    fi
fi

gross=$(echo "scale=2; $basic + $da + $hra" | bc)

echo "-----------------------------"
echo "Basic Salary : $basic"
echo "DA           : $da"
echo "HRA          : $hra"
echo "Gross Salary : $gross"
echo "-----------------------------"
