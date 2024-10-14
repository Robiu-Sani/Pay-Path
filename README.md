# PayPath Application

![PayPath Banner](https://i.ibb.co/7vV803d/banner-Image.png)

## Overview

PayPath is a comprehensive payment processing application designed to simplify the management of transactions, user accounts, and agent activities. It offers a secure platform for cash-in operations, money transfers, and detailed transaction history tracking.

## Admin Account Details

- **Admin Name:** Admin
- **Email:** admin@gmail.com
- **Number:** 01111111111
- **5-Digit Pin:** 00000

## Agent Accounts Details
 
### Agent 1

- **Name:** Agent
- **Email:** agent@gmail.com
- **Number:** 00000000001
- **5-Digit Pin:** 11111

### Agent 2

- **Name:** Agent2
- **Email:** agent2@gmail.com
- **Number:** 00000000002
- **5-Digit Pin:** 22222

## Key Features

- **User Management:** 
  - Admin can manage user accounts, including adding, updating, and deleting user information.
  
- **Cash-In Management:** 
  - Allows agents to add cash-in records, which can be processed and verified by the admin.
  
- **Send Money:** 
  - Users can securely transfer money to other users within the system, with checks to prevent sending to their own account.
  
- **Transaction History:** 
  - Maintains a detailed log of all transactions, including cash-ins and money transfers, for easy tracking and accountability.
  
- **Security:** 
  - User passwords are securely hashed using bcrypt, and sessions are managed with cookies to ensure safe login procedures.

## Live Demo

Experience the live application [here](https://magenta-tapioca-a374bb.netlify.app/).

## Installation and Setup

### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/Robiu-Sani/Pay-Path.git
    cd Pay-Path
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

### Backend
[server-ripo](https://github.com/Robiu-Sani/ProgrammingHero-jubTask-Server)

1. Clone the repository:
    ```bash
    git clone https://github.com/Robiu-Sani/ProgrammingHero-jubTask-Server.git
    cd paypath
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file in the root directory:
    ```bash
    PORT=5000
    DB_USER=yourDatabaseUser
    DB_PASS=yourDatabasePassword
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## License

This project is licensed under the MIT License.
