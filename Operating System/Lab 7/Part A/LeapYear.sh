#!/bin/bash

echo "Enter a year:"
read year

if [ $((year % 4)) -eq 0 ]; then
    if [ $((year % 100)) -ne 0 ]; then
        echo "$year is a Leap Year"
    else
        if [ $((year % 400)) -eq 0 ]; then
            echo "$year is a Leap Year"
        else
            echo "$year is NOT a Leap Year"
        fi
    fi
else
    echo "$year is NOT a Leap Year"
fi
