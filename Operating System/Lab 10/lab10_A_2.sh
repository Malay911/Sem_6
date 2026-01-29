#!/bin/bash

echo "Enter a number:"
read n

if [ $n -le 1 ]; then
    echo "Not prime number"
    exit
fi

flag=0
for ((i=2; i<=n/2; i++))
do
    if [ $((n % i)) -eq 0 ]; then
        flag=1
        break
    fi
done

if [ $flag -eq 0 ]; then
  echo "Prime number"
else
  echo "Not prime number"
fi