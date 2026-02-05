#!/bin/bash

echo "Date Validation"
echo "Enter date (dd-mm-yyyy):"
read date

day=$(echo $date | cut -d"-" -f1)
month=$(echo $date | cut -d"-" -f2)
year=$(echo $date | cut -d"-" -f3)

if [ ${#day} -eq 2 ] && [ ${#month} -eq 2 ] && [ ${#year} -eq 4 ] &&
   [ $day -ge 1 ] && [ $day -le 31 ] &&
   [ $month -ge 1 ] && [ $month -le 12 ]
then
    echo "Valid date format"
else
    echo "Invalid date format"
fi
