read -p "Enter a number:" n

if [ $n -gt 0 ]; then
	echo "$n is positive number"
fi
if [ $n -eq 0 ]; then
	echo "Number is 0"
fi
if [ $n -lt 0 ]; then
	echo "$n is negative number"
fi
