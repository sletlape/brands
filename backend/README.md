# Brand Logo Upload Project

## Description
This is a Node.js application that uses Express.js for the server and MongoDB for the database. It also uses Multer for handling file uploads. The application allows you to create, read, and search for brands.

## Installation
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up your environment variables in a `.env` file in the root directory. You should include:
    - `PORT`: The port your server will run on.
    - `MONGO_URI`: The URI of your MongoDB database.

## Usage
1. Start the server with `npm start`.
2. Use the following endpoints:
    - `GET /brands`: Fetch all brands.
    - `GET /brands/:id`: Fetch a brand by its ID.
    - `GET /brandname/:brandName`: Fetch a brand by its name.
    - `GET /published/:published`: Fetch brands by their published date.
    - `POST /brands`: Create a new brand. This endpoint expects a JSON body with the following structure:
        ```json
        {
            "brandName": "Brand Name",
            "logo": "File"
        }
        ```
      The `logo` field should be a file upload containing the brand's logo.

## License
[MIT](https://choosealicense.com/licenses/mit/)