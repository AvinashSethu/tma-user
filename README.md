# The Masters Academy

**The Masters Academy** is a comprehensive Learning Management System (LMS) developed by **Incrix Techlutions**. Designed for modern educational institutions, the platform offers robust course management, exam scheduling, resource sharing, and white-label capabilities to support schools, colleges, and training centers.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

The Masters Academy is built to provide a flexible, scalable, and user-friendly LMS that streamlines educational management and enhances the learning experience. The project is designed with a focus on performance, ease of use, and adaptability, making it ideal for institutions seeking a white-labeled solution.

---

## Features

- **User & Admin Dashboards:**  
  Custom dashboards for both administrators and learners for seamless interaction.

- **Course Management:**  
  Create, update, and manage courses with support for multimedia content.

- **Exam & Practice Tests:**  
  Integrated tools for exam scheduling, practice tests, and performance tracking.

- **Resource Library:**  
  Efficiently upload, manage, and distribute learning resources using AWS S3.

- **Optimized Data Model:**  
  Leverages AWS DynamoDB single-table design for high performance and scalability.

- **Responsive & White-Label Design:**  
  Mobile-friendly UI with customizable branding options.

- **Drag & Drop Interface:**  
  Intuitive drag and drop support for reordering lessons and content.

---

## Tech Stack

- **Frontend:**  
  Next.js (App Router), React, Material‑UI

- **Backend:**  
  Node.js, Express, AWS DynamoDB, AWS S3

- **Authentication:**  
  JWT-based authentication

- **Utilities:**  
  React DnD for drag and drop, Axios for API requests

- **Deployment:**  
  Vercel, AWS

---

## Architecture

The Masters Academy utilizes a serverless architecture with a single-table design in AWS DynamoDB and cloud storage via AWS S3. The frontend is built using Next.js for Server-Side Rendering (SSR) and static site generation, while the backend APIs are built with Node.js and Express. This modular design allows for seamless scaling and customization for white-label solutions.

---

## Installation

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- AWS credentials for DynamoDB and S3

### Clone the Repository

```bash
git clone https://github.com/yourusername/the-masters-academy.git
cd the-masters-academy
