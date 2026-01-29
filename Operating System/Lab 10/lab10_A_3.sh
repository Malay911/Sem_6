#!/bin/bash

echo "Enter value of n:"
read n

count=0
num=2

while [ $count -lt $n ]
do
  prime=1
  for ((i=2; i<=num/2; i++))
  do
    if [ $((num % i)) -eq 0 ]; then
      prime=0
      break
    fi
  done

  if [ $prime -eq 1 ]; then
    echo -n "$num "
    count=$((count + 1))
  fi

  num=$((num + 1))
done
