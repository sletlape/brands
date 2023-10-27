# Brands

Welcome to the Brands project! This is a full-stack project focused on branding, with both a backend and a frontend.

This project was built using the MERN stack.

## Project Structure

- `./backend` - This directory contains the backend code.
- `./frontend/` - This directory contains the frontend code.

Please refer to the README.md files in the respective folders for more detailed information.

## Important Note

Please follow the instructions in the Swagger documentation for posting images to the backend. This is necessary for the images to be displayed on the frontend.

Remember, the backend needs to be running for the frontend to receive and display the brand logos. Enjoy exploring!

## Bash Script for Posting Images

We've created a simple bash script that will post all .svg files within its parent directory using curl. Here's how you can use it:

1. Make sure you have curl installed on your system.
2. Run `chmod +x imgPoster.sh` to make the script executable.
3. Execute the script with `./imgPoster.sh`.

The script will use each file's base name as the `brandName`. Enjoy!