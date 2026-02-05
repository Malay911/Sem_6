#!/bin/bash

echo "Enter month number (1-12): "
read month

case "$month" in
    1|3|5|7|8|10|12)
        echo "Number of days: 31"
        ;;
    4|6|9|11)
        echo "Number of days: 30"
        ;;
    2)
        echo "Number of days: 28 or 29"
        ;;
    *)
        echo "Invalid month number"
        ;;
esac