# To-Do List API
# Features
1) User Authentication
2) CRUD operations for managing To-Do items
3) Validation of incoming data
4) Error handling middleware

# Installation
1. Clone the repository
    - git clone <repo_url>
    - cd To-Do-List
   
3. Install dependencies
    - npm install
4. Set up environment variables
    - PORT=3000
    - DATABASE=mongodb+srv://<username>:<password>@cluster0.0oicrxg.mongodb.net/to-do?retryWrites=true&w=majority&appName=to-do
    - JWT_SECRET=jwt_secret_key
5. Start the server
   The server will start at
     `http://localhost:3000`.

# API Endpoints
1) Authentication
  - POST /api/auth/signup: Register a new user.
  - POST /api/auth/login: Log in with existing credentials.
  - POST /api/auth/logout: Log out the current user.
2) To-Do Items
  - POST /api/todos: Create a new To-Do item.
  - GET /api/todos: Retrieve all To-Do items.
  - GET /api/todos/:id: Retrieve a specific To-Do item by ID.
  - PUT /api/todos/:id: Update a specific To-Do item.
  - DELETE /api/todos/:id: Delete a specific To-Do item.
