#!/bin/bash

echo "Enter directory name to create:"
read dirname

if [ -d "$dirname" ]; then
    echo "Directory already exists"
else
    mkdir "$dirname"
    echo "Directory created successfully"
fi