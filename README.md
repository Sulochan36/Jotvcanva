# ✨ JotCanva

<p align="center">
  <img src="./public/logo.png" alt="JotCanva Logo" width="120"/>
</p>

<h3 align="center">
A modern note-taking workspace built for creators, developers, students and thinkers.
</h3>

<p align="center">
Capture ideas • Organize knowledge • Jot it down
</p>

---

## 📖 Overview

JotCanva is a modern full-stack note-taking platform inspired by tools like Notion, Obsidian, Apple Notes, and Craft Docs.

The goal of this project was not simply to create another CRUD notes application, but to build a structured digital workspace where users can organize ideas into workspaces, categorize knowledge with tags, favorite important notes, archive old content, and manage everything from a beautiful modern dashboard.

The application focuses on:

-  Writing without distractions
-  Organizing notes into workspaces
-  Tag-based categorization
-  Quick access to favorite notes
-  Archiving old notes
-  Modern premium UI
-  Secure authentication

The project demonstrates production-level architecture using the latest Next.js App Router, Server Actions, MongoDB, Clerk Authentication, and reusable component-driven UI.

---

# 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Now-8B5CF6?style=for-the-badge)](https://jotcanva.sulochanmahajan.com/)


---

# 📸 Preview

![Jotcanva Landing](image.png)
![Jotcanva Dashboard](image-1.png)
---

# ✨ Features

## Authentication

- Clerk Authentication
- Secure Sign Up
- Secure Sign In
- User Sessions
- Protected Routes

---

## Notes

- Create Notes
- Read Notes
- Update Notes
- Delete Notes
- Rich Editor Layout
- Modern Writing Interface

---

## Workspaces

- Create Multiple Workspaces
- Organize Notes
- Workspace Dashboard
- Workspace Statistics

---

## Tags

- Multiple Tags
- Tag Filtering
- Dedicated Tag Pages
- Organized Knowledge

---

## Favorites

- Mark Notes as Favorite
- Dedicated Favorites Page

---

## Archive

- Archive Notes
- Restore Archived Notes
- Separate Archive View

---

## Dashboard

Interactive Dashboard containing

- Hero Section
- Statistics Cards
- Recent Notes
- Workspace Overview
- Popular Tags

---

## Landing Page

Modern SaaS inspired landing page featuring

- Premium Hero Section
- Feature Showcase
- Dashboard Preview
- Responsive Design
- Modern Animations
- CTA Section

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- React Icons

---

## Backend

- Next.js Server Actions
- MongoDB
- Mongoose

---

## Authentication

- Clerk

---

## Database

MongoDB Atlas

---

## Deployment

Vercel 

---

# 🧠 Project Architecture

```
app
│
├── (landing)
│
├── (app)
│   ├── dashboard
│   ├── notes
│   ├── workspaces
│   ├── archive
│   ├── favorites
│   └── tags
│
├── actions
│
├── components
│
├── lib
│
├── models
│
└── middleware
```

---

# 📂 Folder Structure

```
app/
components/
actions/
lib/
models/
middleware.ts
public/
```

---

# ⚡ Database Models

## Note

- title
- content
- workspace
- tags
- theme
- slug
- isFavorite
- isArchived
- userId
- timestamps

---

## Workspace

- name
- description
- color
- userId
- timestamps

---

# 🔥 Current Functionalities

✅ Authentication

✅ Dashboard

✅ CRUD Notes

✅ Workspaces

✅ Tags

✅ Favorites

✅ Archive

✅ Responsive UI

✅ Protected Routes

---

# ⚙️ Server Actions

Current Server Actions include

- createNote()
- updateNote()
- deleteNote()
- toggleFavorite()
- archiveNote()

---

# 🔐 Authentication

Authentication is powered by **Clerk**.

Features include

- Sign Up
- Sign In
- Session Handling
- Protected Routes
- User-based Data Isolation

Every user can only access their own notes and workspaces.

---

# 💾 Database

MongoDB stores

- Users (via Clerk IDs)
- Notes
- Workspaces

Each document is linked using

```
userId
```

ensuring complete isolation between users.

---

# 🎨 UI Highlights

- Modern Dark Theme
- Gradient Backgrounds
- Premium Dashboard
- SaaS Style Landing Page
- Responsive Layout
- Component Driven Design
- Clean Typography
- Smooth Hover Effects

---

# 📱 Responsive Design

Optimized for

- Desktop
- Tablet
- Mobile

---

# ⚡ Performance

Built using

- Server Components
- Server Actions
- Optimized Routing
- Next.js App Router
- Dynamic Rendering
- Efficient Database Queries

---

# 🔧 Environment Variables

Create a

```
.env.local
```

file

```env
MONGODB_URI=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

```

---

# 🚀 Running Locally

Clone the repository

```bash
git clone https://github.com/yourusername/jotcanva.git
```

Install dependencies

```bash
npm install
```

Configure environment variables

```
.env.local
```

Start development server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

# 💡 Why I Built This

Most note applications either become cluttered very quickly or focus only on basic CRUD functionality.

The objective of JotCanva was to build something that feels closer to a real digital workspace rather than just a note storage application.
Also to go through various features of NextJS Framework.

Instead of simply creating notes, users can:

- Organize projects
- Categorize information
- Build structured knowledge
- Navigate effortlessly between workspaces
- Focus on writing in a distraction-free interface

The project also served as an opportunity to explore production-level architecture with the latest Next.js ecosystem while designing a polished user experience.

---

# 📚 What I Learned

During development I explored

- Next.js App Router
- Server Components
- Server Actions
- Authentication using Clerk
- MongoDB Schema Design
- Mongoose
- Dynamic Routing
- Protected Layouts
- Component Driven Architecture
- Modern UI Design
- Responsive Design
- Dark Theme Design
- Full Stack Application Architecture

---

# 🚧 Roadmap

The project is actively being improved.

Upcoming improvements include

JotCanva is actively being developed. Planned improvements include:

- AI-powered note summarization
- Semantic search across notes
- Smart workspace organization
- Rich text editor enhancements
- Markdown support
- Drag-and-drop organization
- Version history
- Improved typography and visual design system
- Additional micro-interactions and motion
- Collaborative workspaces
- Mobile responsive refinements
- Theme customization

---

# 🤝 Contributing

Contributions, suggestions and feedback are always welcome.

Feel free to open an Issue or submit a Pull Request.

---


# 👨‍💻 Author

**Sulochan Mahajan**

If you enjoyed this project, consider giving it a ⭐ on GitHub.

It helps support the project and motivates future improvements.

---

<p align="center">
Made with ❤️ using Next.js, TypeScript, Clerk and MongoDB
</p>