# Syook_Task

# Encrypted Time Series Project

This project demonstrates a small backend application for generating, emitting, and processing an encrypted data stream over sockets. The data stream is decrypted, validated, and saved to a MongoDB database before being displayed in a real-time frontend application.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/encrypted-timeseries-project.git


### Navigate to the project directory:
>cd encrypted-timeseries-project

### Install the backend and frontend dependencies:
>cd backend
>npm install

>cd ../frontend
>npm install


### Configuration
1.Open the config.js file in the root directory and replace 'your-encryption-key' with your actual encryption key.

2.Make sure your MongoDB server is running and accessible on localhost:27017.

### Running the Application
1.Start the backend server:
>cd backend
>npm start

The backend server will start and listen on port 3000.

2.Start the frontend server:
>cd frontend
>npm start

The frontend development server will start and open a browser window with the application.

3.Generate encrypted messages:
The backend will periodically generate encrypted messages and emit them to the frontend. The frontend will display the received messages in real-time.

### Built With
<ul>
<li>Node.js - Backend server runtime</li>
<li>Express - Web application framework</li>
<li>Socket.io - Real-time communication library</li>
<li>MongoDB - Database for storing time-series data</li>
<li>React - Frontend library for building user interfaces</li>
</ul>

### Authors
<ul><li>Anand Khandel</li></ul>


