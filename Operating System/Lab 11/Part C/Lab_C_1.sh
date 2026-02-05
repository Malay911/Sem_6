#!/bin/bash

echo "Basic Mathematical Operations"
echo "1. Addition"
echo "2. Subtraction"
echo "3. Multiplication"
echo "4. Division"

echo "Enter your choice (1-4): "
read choice

echo "Enter first number: "
read a

echo "Enter second number: "
read b

case "$choice" in
    1)
        echo "Result = $((a + b))"
        ;;
    2)
        echo "Result = $((a - b))"
        ;;
    3)
        echo "Result = $((a * b))"
        ;;
    4)
        if [ $b -ne 0 ]; then
            echo "Result = $((a / b))"
        else
            echo "Division by zero not allowed"
        fi
        ;;
    *)
        echo "Invalid choice"
        ;;
esac