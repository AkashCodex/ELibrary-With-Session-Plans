### **1. Main Project (PBL Context)**

**Project Title:** *eLibrary Book Management System*

This session ensures the **backend handles errors gracefully** — returning **user-friendly messages**, **proper status codes**, and **structured responses** when something goes wrong (e.g., invalid book ID, user not found). Exception handling is crucial for creating APIs that are stable and developer-friendly.

---

### **2. Today’s Problem Statement (PSBL)**

**Standard Statement:**
Implement centralized exception handling using `@ExceptionHandler` in Spring Boot. Ensure custom exceptions map to meaningful error responses for users and developers.

**User Stories:**

* *As a user,* I want to see a meaningful error when I request a non-existent book.
* *As a frontend developer,* I want consistent error responses to handle them easily.
* *As a backend developer,* I want to avoid sending raw Java stack traces to the client.

---

### **3. Learning Objectives**

By the end of this session, learners will:

* Understand how Spring Boot handles exceptions.
* Create custom exceptions for business logic.
* Use `@ExceptionHandler` to return custom responses.
* Return appropriate HTTP status codes (e.g., 404, 400, 500).
* Structure error responses using DTOs.

---

### **4. Scenario-Based Framing**

> Imagine a user enters a book ID that doesn't exist.
> Without proper error handling, the user sees a generic 500 error or an HTML stack trace.
> Now imagine a React developer trying to display that to a user — it’s unmanageable.
> Instead, your API should say:
> `{ "message": "Book not found", "status": 404, "timestamp": "..." }`
> This session gives you that power.

---

### **5. Mini Visual Roadmap**

```
[❌ Book Not Found] 
   ↓
[🧾 Throw Custom Exception]
   ↓
[⚙️ Handled by @ExceptionHandler]
   ↓
[📦 Return JSON Response → { error, timestamp, status }]
```

---

### **6. Conceptual Explanation (Notes + Code Walkthrough)**

---

#### ✅ Why Centralized Exception Handling?

* Separation of concerns
* Cleaner controller code
* Consistent API response format

---

#### ✅ Key Annotations

| Annotation          | Purpose                     |
| ------------------- | --------------------------- |
| `@ExceptionHandler` | Handles specific exceptions |
| `@ControllerAdvice` | Global exception handler    |
| `@ResponseStatus`   | Set HTTP status directly    |

---

#### ✅ When to Use?

| Scenario           | Solution                          |
| ------------------ | --------------------------------- |
| Resource not found | `BookNotFoundException`           |
| Duplicate entry    | `DuplicateBookException`          |
| Validation errors  | `MethodArgumentNotValidException` |

---

### **7. Hands-On Implementation (Integration in Main Project)**

📁 *Project: `E-Library-Backend`*
🧩 *Packages: `exception`, `controller`, `service`*

---

#### ✅ Step 1: Create a Custom Exception

```java
public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException(String message) {
        super(message);
    }
}
```

---

#### ✅ Step 2: Modify `BookServiceImpl`

```java
@Override
public Book getBookById(Long id) {
    return bookRepository.findById(id)
            .orElseThrow(() -> new BookNotFoundException("Book with ID " + id + " not found"));
}
```

---

#### ✅ Step 3: Create a Global Exception Handler

```java
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BookNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleBookNotFound(BookNotFoundException ex) {
        ErrorResponse err = new ErrorResponse(
            LocalDateTime.now(),
            ex.getMessage(),
            HttpStatus.NOT_FOUND.value()
        );
        return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);
    }

    // Add more handlers here later
}
```

---

#### ✅ Step 4: Define Error DTO

```java
public class ErrorResponse {
    private LocalDateTime timestamp;
    private String message;
    private int status;

    public ErrorResponse(LocalDateTime timestamp, String message, int status) {
        this.timestamp = timestamp;
        this.message = message;
        this.status = status;
    }

    // Getters, Setters (or use Lombok)
}
```

---

#### ✅ Step 5: Trigger It via API

```http
GET /api/books/9999
```

**Response:**

```json
{
  "timestamp": "2025-05-14T10:00:00",
  "message": "Book with ID 9999 not found",
  "status": 404
}
```

---

### **8. Output-Based Assessment**

📌 Tasks:

* ✅ Trigger `BookNotFoundException` with invalid ID
* ✅ Verify 404 response with JSON body
* ✅ Add one more custom exception (e.g., `BookAlreadyExistsException`)
* ✅ Push code with a test case or Postman screenshot

---

### **9. Interview Preparation**

**Q1:** What is `@ControllerAdvice`?
**A:** It's a centralized component for handling exceptions across all controllers.

**Q2:** When do you use `@ExceptionHandler`?
**A:** To map specific exceptions to custom error responses.

**Q3:** Output: What response does this code return?

```java
throw new BookNotFoundException("Missing");
```

**A:** JSON:

```json
{
  "message": "Missing",
  "status": 404,
  "timestamp": "..."
}
```

**Q4:** Why not return raw exception messages to the frontend?
**A:** It can expose internal logic or stack traces → security risk and bad UX.

**Q5:** How to handle multiple exceptions in one class?
**A:** Define multiple `@ExceptionHandler` methods within `@ControllerAdvice`.

---

### **10. Connection to the Next Problem Statement**

**Next Topic →**

> 🎯 *Consistent error format, logging exceptions (SLF4J, Lombok), and hiding internal errors from clients*

Next, we’ll:

* Design a **unified error response structure** across all APIs
* Add **SLF4J logging** for all exception events
* Hide internal messages using generic user-friendly error messages
* Use **standard HTTP status codes** properly for all errors

This ensures the app is **secure, clean, and professional.**

---

