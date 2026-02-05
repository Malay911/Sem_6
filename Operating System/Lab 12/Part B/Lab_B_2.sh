#!/bin/bash

echo "Enter username:"
read user

if grep -w "$user" /etc/passwd > /dev/null
then
    echo "Valid user"
else
    echo "Invalid user"
fi
