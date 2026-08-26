# 📚 Library Services

The **Library Services** repository contains the backend microservices of the Library Management System.

It includes **User Service, Book Service, and Record Service**, maintained as Git submodules. The services are built with **Spring Boot** and deployed using **PM2** for process management.

### 📦 Services

* **User Service** — User management and authentication
* **Book Service** — Book management
* **Record Service** — Borrowing and record management

### 🏗️ Architecture

```text
Library-services
│
├── UserService       → User Management
├── BookService       → Book Management
├── RecordService     → Borrowing Records
│
├── ecosystem.config.js
├── pom.xml
└── .gitmodules
```

### 🔗 Platform Services

The backend services integrate with the platform infrastructure:

* **API Gateway** — Request routing
* **Eureka Server** — Service discovery
* **Config Server** — Centralized configuration

🔗 **Eureka Server:** http://35.224.39.34:8888/

### ⚙️ Deployment

The microservices are managed using **PM2**, providing process monitoring and automatic service restarts.

**Technology:** Java 25 · Spring Boot · Maven · PM2 · Git Submodules

