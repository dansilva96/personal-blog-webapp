# Personal Blog Web App

A simple full-stack personal blog built with **Node.js**, **Express**, and **EJS**, featuring an admin panel for managing articles and a public interface for reading them.

---

## Inspiration

This project was inspired by the **Personal Blog project** from:

https://roadmap.sh/projects/personal-blog

---

## Features

### Public Area

* View all published articles
* Read individual articles
* Clean and responsive UI

### Admin Area (Protected)

* HTTP Basic Authentication
* Create new articles
* Edit existing articles
* Delete articles
* Dashboard to manage content

---

## Tech Stack

* **Backend:** Node.js, Express
* **Frontend:** EJS (server-side rendering), HTML, CSS
* **Storage:** File system (JSON files)
* **Authentication:** HTTP Basic Auth

---

## Project Structure

```
project-root/
│
├── controllers/
│   ├── articleController.js
│
├── services/
│   ├── articleService.js
│
├── routes/
│   ├── admin.js
│   ├── public.js
│
├── middlewares/
│   ├── auth.js
│
├── data-articles
│   ├── 1.json
│   ├── 2.json
│
├── views/
│   ├── admin/
│   │   ├── dashboard.ejs
│   │   ├── form.ejs
│   │
│   ├── public/
│       ├── home.ejs
│       ├── article.ejs
│
├── public/
│   └── css/
│       └── style.css
│
├── app.js
└── package.json
```

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd personal-blog-webapp
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
node app.js
```

4. Open in browser:

```
http://localhost:3000
```

---

## Admin Access

The admin panel is protected using **HTTP Basic Authentication**.

### Default credentials:

```
Username: admin
Password: admin
```

Access admin area:

```
http://localhost:3000/admin
```

---

## Article Format

Each article is stored as a JSON file:

```json
{
  "id": 1,
  "title": "My Article",
  "content": "Content here...",
  "date": "2026-04-14"
}
```

---

## Key Concepts Implemented

* MVC-like structure (Controller + Service)
* File-based persistence
* Middleware for authentication
* Server-side rendering with EJS
* CRUD operations
* Clean UI/UX improvements

---

## Author

Daniel Silva