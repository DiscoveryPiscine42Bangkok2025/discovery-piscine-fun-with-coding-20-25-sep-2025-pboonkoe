#!/bin/bash

# ถ้าไม่มี arguments
if [ $# -eq 0 ]; then
    echo "Usage: $0 <numbers>"
    echo "Example: $0 1 2 3"
    exit 1
fi

# วนลูปสร้างโฟลเดอร์
for arg in "$@"; do
    dir="ex$arg"
    if [ -d "$dir" ]; then
        echo "Directory '$dir' already exists, skipping..."
    else
        mkdir "$dir"
        echo "Created directory: $dir"
    fi
done
