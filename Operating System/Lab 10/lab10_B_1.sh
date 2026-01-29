#!/bin/bash

echo "Enter value of n:"
read n

sum=0
for ((i=1; i<=n; i++))
do
  sum=$((sum + i*i))
done

echo "Sum of series = $sum"