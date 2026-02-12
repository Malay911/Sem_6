#!/bin/bash

echo "Enter file name:"
read filename

if [ -f "$filename" ]; then
    lines=$(wc -l < "$filename")
    echo "Number of lines: $lines"
else
    echo "File does not exist"
fi