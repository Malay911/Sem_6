#!/bin/bash

echo "Enter gender (M/F): "
read gender

case "$gender" in
    M|m)
        echo "Male"
        ;;
    F|f)
        echo "Female"
        ;;
    *)
        echo "Invalid input"
        ;;
esac