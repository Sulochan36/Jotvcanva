# JotCanva

A modern note-taking and knowledge management workspace built with Next.js, Clerk Authentication, MongoDB, and Server Actions.

---

## Live Demo

**Live URL:** [[JotCanva](https://jotcanva.sulochanmahajan.com/)]

**GitHub Repository:** [[Repository](https://github.com/Sulochan36/Jotvcanva)]

---

# Project Overview

JotCanva is a personal knowledge management platform designed to help users capture ideas, organize notes into workspaces, manage tags, archive information, and build a digital second brain.

The application focuses on providing a clean writing experience while demonstrating modern Next.js App Router concepts such as Server Components, Server Actions, Authentication, Route Handlers, Dynamic Routing, and MongoDB integration.

Users can securely create and manage their own notes with authentication handled through Clerk.

---

# Tech Stack

### Frontend

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS

### Backend

* Next.js Route Handlers
* Server Actions

### Database

* MongoDB
* Mongoose

### Authentication

* Clerk

### Deployment

* Vercel

---

# Features Implemented

### Authentication

* User Sign Up
* User Sign In
* User Session Management
* Protected Dashboard Routes
* User-specific Notes

### Notes Management

* Create Notes
* Read Notes
* Update Notes
* Delete Notes

### Organization

* Workspaces
* Tags
* Favorites
* Archive Notes

### Dashboard

* Statistics Overview
* Recent Notes Section
* Workspace Overview
* Popular Tags

### API

* REST API Endpoints
* Dynamic Note Routes

### UI

* Responsive Dashboard
* Responsive Sidebar
* Dark Theme Interface
* Empty State Screens

---

# Folder Structure

```txt
app/
├── (app)
│   ├── dashboard
│   ├── archive
│   ├── favorites
│   ├── workspaces
│   ├── tags
│   └── notes
│
├── (auth)
│   ├── sign-in
│   └── sign-up
│
├── api
│   └── notes
│
actions/
components/
lib/
models/
```

---

# Environment Variables

Create a `.env.local` file in the root directory.

```env
MONGODB_URI=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

---

# Database Setup

### Step 1

Create a MongoDB Atlas Cluster.

### Step 2

Create a database user.

### Step 3

Whitelist your IP address.

### Step 4

Copy the MongoDB connection string.

### Step 5

Paste it into:

```env
MONGODB_URI=
```

### Step 6

Run the application.

Mongoose automatically creates the required collections.

---

# Installation

Clone the repository.

```bash
git clone https://github.com/Sulochan36/Jotvcanva.git
```

Move into the project.

```bash
cd jotcanva
```

Install dependencies.

```bash
npm install
```

Create environment variables.

```bash
cp .env.example .env.local
```

Start development server.

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

# Routes Included

## Public Routes

```txt
/
```

Landing Page

```txt
/notes/[slug]
```

Shared Notes (if enabled)

```txt
/sign-in
```

User Login

```txt
/sign-up
```

User Registration

---

## Protected Routes

```txt
/dashboard
```

Dashboard Overview

```txt
/dashboard/notes
```

All Notes

```txt
/dashboard/notes/create
```

Create Note

```txt
/dashboard/notes/[noteId]
```

View Note

```txt
/dashboard/notes/[noteId]/edit
```

Edit Note

```txt
/dashboard/favorites
```

Favorite Notes

```txt
/dashboard/archive
```

Archived Notes

```txt
/dashboard/workspaces
```

All Workspaces

```txt
/dashboard/workspaces/[workspace]
```

Workspace Notes

```txt
/dashboard/tags/[tag]
```

Tag Notes

---

# API Routes

## Get All Notes

```http
GET /api/notes
```

---

## Create Note

```http
POST /api/notes
```

---

## Get Single Note

```http
GET /api/notes/[noteId]
```

---

## Update Note

```http
PATCH /api/notes/[noteId]
```

---

## Delete Note

```http
DELETE /api/notes/[noteId]
```

---

# Server Actions Used

### createNote()

Creates a new note.

### updateNote()

Updates an existing note.

### deleteNote()

Deletes a note.

### toggleFavorite()

Marks or removes note from favorites.

### archiveNote()

Archives or restores a note.

---

# Rendering Strategies Used

## SSR (Server Side Rendering)

Used for:

* Dashboard
* Notes Pages
* Workspaces
* Tags
* Favorites
* Archive

Reason:

User-specific authenticated data must always be fresh.

---

## SSG (Static Site Generation)

Used for:

* Landing Page

Reason:

Content is mostly static and can be pre-rendered.

---

## ISR (Incremental Static Regeneration)

Not implemented in current version.

Future scope may include public shared note pages.

---

# Concepts Covered From Class

### Next.js App Router

* Route Groups
* Dynamic Routes
* Nested Routes

### Server Components

* Data Fetching
* Database Queries

### Server Actions

* Form Handling
* Database Mutations

### Route Handlers

* REST API Creation

### Authentication

* Clerk Integration
* Protected Routes

### Database

* MongoDB
* Mongoose Models

### UI Development

* Tailwind CSS
* Responsive Design

### State & Navigation

* Dynamic Routing
* Conditional Rendering

---

# Assumptions

* Every note belongs to a single authenticated user.
* Workspaces are stored as strings.
* Tags are stored as arrays of strings.
* Notes are isolated between users.

---

# Limitations

* Rich Text Editor is not implemented.
* File Uploads are not implemented.
* Real-time Collaboration is not implemented.
* Search functionality is not implemented.
* Public Note Sharing is limited.
* Theme customization is currently basic.

---

# Future Improvements

* Rich Text Editor
* Markdown Support
* Image Uploads
* AI Note Assistant
* Search and Filtering
* Workspace Customization
* Public Shared Notes
* Export Notes as PDF
* Real-time Collaboration

---

# Author

Built as part of the Next.js Cohort Project Submission.

Developed using Next.js, Clerk, MongoDB, and Tailwind CSS.
