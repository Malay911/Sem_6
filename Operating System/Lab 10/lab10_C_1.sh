#!/bin/bash

echo "Enter a number:"
read n

echo "Factors of $n are:"
for ((i=1; i<=n; i++))
do
  if [ $((n % i)) -eq 0 ]; then
    echo -n "$i "
  fi
done