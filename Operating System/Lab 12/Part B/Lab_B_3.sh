#!/bin/bash

total_users=$(cut -d: -f1 /etc/passwd | wc -l)
logged_users=$(who | wc -l)

echo "Total number of users: $total_users"
echo "Number of users currently logged in: $logged_users"
