# BooksAPI - Training base Backend

Esta documentacion describe los endpoints disponibles del backend que disponibilizamos para usar como recursos en todos los trainings de FrontEnd en Flock 

# API Documentation

## Base URL

https://flock-training-backend-production.up.railway.app/

## Authentication

Most endpoints require authentication. Use the login endpoint to obtain an access token, then include it in the `Authorization` header of subsequent requests.

## Endpoints

### 1. User Registration

- **URL:** `/sign_up`
- **Method:** POST
- **Description:** Register a new user
- **Request Body:**
    
    ```json
    {
      "username": "string",
      "name": "string",
      "password": "string"
    }
    
    ```
    
- **Response:** User object

### 2. User Login

- **URL:** `/login`
- **Method:** POST
- **Description:** Authenticate a user and receive an access token
- **Request Body:**
    
    ```json
    {
      "username": "string",
      "password": "string"
    }
    
    ```
    
- **Response:**
    
    ```json
    {
      "access_token": "string",
      "token_type": "bearer",
      "user": {
        "id": "integer",
        "username": "string",
        "name": "string",
        "created_at": "datetime"
      }
    }
    
    ```
    

### 3. Get All Books

- **URL:** `/books`
- **Method:** GET
- **Description:** Retrieve a list of all books
- **Query Parameters:**
    - `skip` (optional): Number of items to skip (default: 0)
    - `limit` (optional): Maximum number of items to return (default: 100)
- **Authentication:** Required
- **Response:** Array of book objects

### 4. Get Book by ID

- **URL:** `/books/{book_id}`
- **Method:** GET
- **Description:** Retrieve details of a specific book
- **Path Parameters:**
    - `book_id`: ID of the book to retrieve
- **Authentication:** Required
- **Response:** Book object

### 5. Create New Book

- **URL:** `/books`
- **Method:** POST
- **Description:** Add a new book to the database
- **Authentication:** Required
- **Request Body:**
    
    ```json
    {
      "title": "string",
      "author": "string",
      "image_url": "string (optional)",
      "genre": "string",
      "publisher": "string",
      "pages": "integer",
      "published_date": "datetime (optional)",
      "sinopsis": "string",
      "reading_time": "string"
    }
    
    ```
    
- **Response:** Created book object

### 6. Health Check

- **URL:** `/health`
- **Method:** GET
- **Description:** Check the health status of the API
- **Response:**
    
    ```json
    {
      "status": "OK"
    }
    
    ```
    

## Models

### User

```
class UserCreate(BaseModel):
    username: str
    name: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    name: str
    created_at: datetime

```

### Book

```
class BookCreate(BaseModel):
    title: str
    author: str
    image_url: Optional[str] = None
    genre: str
    publisher: str
    pages: int
    published_date: datetime = None
    sinopsis: str
    reading_time: str

class BookResponse(BookCreate):
    id: int
    created_at: datetime

```

## Notes

- All authenticated endpoints require a valid JWT token in the `Authorization` header.
- Error responses will include appropriate HTTP status codes and error messages.
- The API uses JSON for request and response bodies.

