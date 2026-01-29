#!/bin/bash

echo "Enter base:"
read a
echo "Enter power:"
read b

result=1
for ((i=1; i<=b; i++))
do
  result=$((result * a))
done

echo "Result = $result"