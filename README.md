# temple-classroom-support
Home of temple classroom support
## Getting Started

This project consists of a Django backend and a React frontend. Follow the instructions below to set up and run the project.

### Prerequisites

Ensure you have the following installed on your system:
- Python 3.8+ (for the backend)
- Node.js 16+ and npm (for the frontend)
- SQLite (default database for the backend)

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install the required dependencies:
    ```bash
    pip install django djangorestframework
    ```

3. Apply database migrations:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

4. Run the development server:
    ```bash
    python manage.py runserver
    ```

    The backend API will be available at `http://127.0.0.1:8000/api/requests/`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

    The frontend will be available at `http://127.0.0.1:5173`.
