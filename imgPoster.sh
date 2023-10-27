#!/bin/bash

# URL to post to
url="http://localhost:3000/brands/upload"

# Directory containing this script and the SVG files
dir="$(dirname "$0")"

# Loop over all SVG files in the directory
for file in "$dir"/*.svg; do
    # Extract the base name of the file (no directory or extension)
    base=$(basename "$file" .svg)

    # Use curl to POST the file
    curl -X POST "$url" \
        -F "brandName=$base" \
        -F "logoImg=@$file"
done
