# Portfolio Website

This is a portfolio website built using **Django 4**, **Django REST Framework 3**, **Next.js 12**, and **Material UI 5** that uses a **PostgreSQL** database to store data.

![plot](https://github.com/BobsProgrammingAcademy/portfolio-website-django-next.js/blob/master/frontend/public/images/main.png?raw=true)


## Table of Contents 
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#run-the-application)
- [Adding data to the application](#add-data-to-the-application)
- [Customizing the application](#customize-the-application)
- [Copyright and License](#copyright-and-license)


## Prerequisites

Install the following prerequisites:

1. [Python 3.10.5](https://www.python.org/downloads/)
2. [Node.js 18.6.0](https://nodejs.org/en/)
3. [PostgreSQL 14.4](https://www.postgresql.org/download/)
4. [Visual Studio Code](https://code.visualstudio.com/download)

## Installation

### Backend

#### 1. Create a virtual environment

From the **root** directory run:

```bash
cd backend
```
```bash
python -m venv venv
```

#### 2. Activate the virtual environment

From the **backend** directory run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

#### 3. Install required backend dependencies

From the **backend** directory run:

```bash
pip install -r requirements.txt
```

#### 4. Set up a PostgreSQL database

With **PostgreSQL** up and running, in a new Terminal window run:

```bash
dropdb --if-exists portfolio
```

Start **psql**, which is a terminal-based front-end to PostgreSQL, by running the command:

```bash
psql postgres
```

Create a new PostgreSQL database:

```sql
CREATE DATABASE portfolio;
```

Create a new database admin user:

```sql
CREATE USER yourusername WITH SUPERUSER PASSWORD 'yourpassword';
```

To quit **psql**, run:

```bash
\q
```

#### 5. Set up backend environment variables

From the **backend** directory run:

```bash
touch config/.env
```

The **touch** command will create the **.env** file in the **backend/config** directory. This command works on Mac and Linux but not on Windows. If you are a Windows user, instead of using the command line, you can create the **.env** file manually by navigating in Visual Studio Code to the Explorer, clicking on the **config** directory (inside the **backend** directory), and selecting the option **New File**.


Next, declare environment variables in the **.env** file. Make sure you don't use quotation marks around the strings.

```bash
SECRET_KEY=yoursecretkey
DEBUG=TRUE
DATABASE_NAME=portfolio
DATABASE_USER=yourusername
DATABASE_PASS=yourpassword
DATABASE_HOST=localhost
FRONTEND_URL=http://localhost:3000
```

#### 6. Run migrations

From the **backend** directory run:

```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

#### 7. Create an admin user to access the Django Admin interface

From the **backend** directory run:

```bash
python manage.py createsuperuser
```

When prompted, enter a username, email, and password.

### Frontend

#### 1. Install required frontend dependencies

From the **root** directory run:

```bash
cd frontend
```
```bash
npm install
```

#### 2. Set up frontend environment variables

From the **frontend** directory run:

```bash
touch .env
```

The **touch** command will create the **.env** file in the **frontend** directory. This command works on Mac and Linux but not on Windows. If you are a Windows user, instead of using the command line, you can create the **.env** file manually by navigating in Visual Studio Code to the Explorer, clicking on the **frontend** directory, and selecting the option **New File**.

Next, declare environment variables in the **.env** file. Make sure you don't use quotation marks around the strings.

```bash
BACKEND_HOST=127.0.0.1
BACKEND_URL=http://127.0.0.1:8000
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

#### 1. Run backend

From the **backend** directory run:

```bash
python manage.py runserver
```

#### 2. Run frontend

From the **frontend** directory run:

```bash
npm run dev
```

#### 3. View the application

Go to http://localhost:3000/ to view the application.


## Add data to the application

Add data through Django Admin.

Go to http://127.0.0.1:8000/admin to access the Django Admin interface and sign in using the admin credentials.


## Customize the application

This section describes how to customize the application. 

### Changing Section Titles and Subtitles 

#### 1. About

To modify the title and subtitle of the **About** section, make changes in the ```frontend/src/components/About.js``` file.

#### 2. Projects

To modify the title and subtitle of the **Projects** section, make changes in the ```frontend/src/components/Projects.js``` file.

#### 3. Technologies

To modify the title and subtitle of the **Technologies** section, make changes in the ```frontend/src/components/Technologies.js``` file.

#### 4. Testimonials

To modify the title and subtitle of the **Testimonials** section, make changes in the ```frontend/src/components/Testimonials.js``` file.

#### 5. Contact

To modify the title and subtitle of the **Contact** section, make changes in the ```frontend/src/components/Contact.js``` file.

### Changing Colors

To modify the colors in the application, make changes in the ```frontend/src/theme/theme.js``` file.

### Changing Fonts

To modify the fonts in the application, first, add a new font to the ```frontend/src/pages/_document.js``` file, and then make changes in the ```frontend/src/theme/typography.js``` file.

### Changing Logo

To modify the logo in the application, make changes in the ```frontend/src/layout/Header.js``` and ```frontend/src/layout/Sidebar.js``` files.

### Changing Buttons in the Hero Section

To modify the two buttons in the Hero section, make changes in the ```frontend/src/components/HeroButtons.js``` file.


## Copyright and License

Copyright © 2022 Bob's Programming Academy. Code released under the MIT license.
