# PayPath Application

![PayPath Banner](/src/image/bannerImage.png)

## Overview

PayPath is a comprehensive payment processing application designed for easy management of transactions, user accounts, and agent activities. This application provides a secure platform for cash-in, sending money, and tracking transaction history.

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

- **User Management:** Admin can manage user accounts, including adding, updating, and deleting user information.
- **Cash-In Management:** Allows agents to add cash-in records, which can be processed by the admin.
- **Send Money:** Users can send money securely to other users within the system, with checks to prevent sending to their own account.
- **Transaction History:** Keeps a detailed record of all transactions, including cash-ins and send money activities.
- **Security:** Passwords are securely hashed using bcrypt, and user sessions are managed with cookies for secure login.

## Live Demo

Check out the live application [here](https://magenta-tapioca-a374bb.netlify.app/).

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/paypath.git
    cd paypath
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file in the root directory:
    ```
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
