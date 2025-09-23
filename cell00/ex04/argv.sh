#!/bin/bash

# Check if any arguments are passed
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through all arguments
for arg in "$@"; do
    echo "$arg"
done
