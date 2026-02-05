#!/bin/bash

echo "Executable files in current directory:"
for file in *
do
    if [ -f "$file" ] && [ -x "$file" ]; then
        echo "$file"
    fi
done

echo ""
echo "Directories in current directory:"
for file in *
do
    if [ -d "$file" ]; then
        echo "$file"
    fi
done

echo ""
echo "Zero-sized files in current directory:"
for file in *
do
    if [ -f "$file" ] && [ ! -s "$file" ]; then
        echo "$file"
    fi
done
