### 1. Main Project (PBL Context)

In the **E-Library Backend**, we structure our code using a **Layered Architecture** to separate concerns and improve testability, readability, and scalability. This structure allows you to manage features like data access, business logic, and request handling independently and efficiently.

---

### 2. Today's Problem Statement (PSBL)

**Problem Statement:**

Design and organize the Spring Boot application using a layered architecture (Controller → Service → Repository → Entity/DTO), following software engineering best practices.

**User Stories:**

* As a developer, I want to separate my request handling logic from business logic for better maintainability.

* As a developer, I want my services and repositories to be reusable across multiple endpoints.

---

### 3. Learning Objectives

By the end of this session, learners will be able to:

* Understand the purpose of layered architecture.

* Identify and implement the four key layers in a Spring Boot application.

* Apply this architecture in the E-Library backend project.

* Recognize the flow of data across these layers (Controller → Service → Repository).

---

### 4. Scenario-Based Framing

Consider building a complex application like Amazon. Imagine handling all the logic (data fetching, validation, HTTP handling) in one place — it becomes messy fast. With **layered architecture**, you divide responsibilities clearly:

* **Controller** for HTTP communication
* **Service** for business logic
* **Repository** for database access
* **Entity/DTO** for modeling data

This makes it easier to debug, test, and extend.

---

### 5. Mini Visual Roadmap

```
User Request --> Controller --> Service --> Repository --> Database
```

Each layer has a **single responsibility**:

* Controller → Handle request/response
* Service → Contain business logic
* Repository → Interact with DB
* Entity/DTO → Represent and transport data

---

### 6. Conceptual Explanation (Notes + Code Walkthrough)

#### 🎯 Layers in Spring Boot

| Layer      | Description                     | Example Class     |
| ---------- | ------------------------------- | ----------------- |
| Controller | Handles HTTP requests/responses | `BookController`  |
| Service    | Contains core business logic    | `BookServiceImpl` |
| Repository | Talks to the database using JPA | `BookRepository`  |
| Entity/DTO | Data representation             | `Book`, `BookDto` |

---

### 7. Hands-On Implementation (Integration in Main Project)

💡 Your current folder structure already reflects this well:

```
com.example.ELibrary
├── controller     -> BookController.java
├── service        -> BookService, BookServiceImpl
├── repository     -> BookRepository
├── entity         -> Book.java
├── dto            -> BookDto.java
```

Use this flow in your methods:

```java
// Controller
@GetMapping
public List<Book> getAllBooks() {
    return bookService.getAllBooks(); // delegating to Service
}

// Service
public List<Book> getAllBooks() {
    return bookRepository.findAll();  // delegating to Repository
}
```

---

### 8. Output-Based Assessment

Tasks:

* Explain the role of each layer in a 3–5 line summary
* Create a diagram showing the layer flow in your README
* Push under branch: `feature/layered-architecture`

---

### 9. Interview Preparation

**Q1:** What is layered architecture and why is it used?
→ It separates concerns, promotes maintainability, and improves testing.

**Q2:** What happens if we skip the service layer?
→ Business logic clutters the controller, breaking the SRP (Single Responsibility Principle).

**Q3:** Which layer communicates with the database?
→ Repository layer using Spring Data JPA.

**Q4:** Where should validation logic reside?
→ In the Service layer, before persisting or returning data.

---

### 10. Connection to the Next Problem Statement

Now that you've structured your backend into layers, it's time to **interact with the outside world**. Next, we explore how to **expose REST APIs using `@Controller` and `@RestController`**, and handle HTTP requests and responses properly.

---

### ✅ Next Topic:

**Role of `@Controller` and `@RestController`**

* Handling HTTP verbs: GET, POST, PUT, DELETE
* Returning JSON responses
* PathVariables and RequestParams
* @RequestBody for payload
* ResponseEntity for response metadata

