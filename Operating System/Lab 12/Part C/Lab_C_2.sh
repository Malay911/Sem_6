#!/bin/bash

hour=$(date +"%I")
minute=$(date +"%M")
ampm=$(date +"%p")

echo "Today's date: $(date +"%d-%m-%Y")"
echo "Current time: $hour:$minute $ampm"

hour24=$(date +"%H")
if [ $hour24 -ge 0 ] && [ $hour24 -lt 12 ]; then
    echo "Good Morning!"
elif [ $hour24 -ge 12 ] && [ $hour24 -lt 16 ]; then
    echo "Good Afternoon!"
elif [ $hour24 -ge 16 ] && [ $hour24 -lt 20 ]; then
    echo "Good Evening!"
else
    echo "Good Night!"
fi
