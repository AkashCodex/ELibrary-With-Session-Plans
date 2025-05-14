### **1. Main Project (PBL Context)**

**Project Title:** *eLibrary Book Management System*

This session strengthens the **robustness and professionalism** of the backend by introducing a **standardized API error format**, **structured exception logging**, and **secure error messaging**. These improvements are essential for **debugging, monitoring, and providing meaningful client-side feedback** without exposing sensitive internal details.

---

### **2. Today’s Problem Statement (PSBL)**

**Standard Statement:**
Ensure a consistent error response format across all APIs. Log all exceptions using SLF4J and Lombok, hide internal details from API clients, and use accurate HTTP status codes.

**User Stories:**

* *As a frontend developer,* I want all errors to follow the same structure so I can handle them uniformly.
* *As a backend developer,* I want all exceptions logged for debugging and auditing.
* *As a user,* I don’t want to see confusing internal errors — just a friendly message.
* *As an API consumer,* I expect proper status codes for every API failure.

---

### **3. Learning Objectives**

By the end of this session, learners will:

* Create and enforce a **uniform error format** for all exceptions.
* Integrate **SLF4J logging** with **Lombok annotations** for automatic logging.
* Mask internal exception messages and return **user-friendly responses**.
* Map exceptions to **appropriate HTTP status codes**.

---

### **4. Scenario-Based Framing**

> Imagine a mobile developer consuming your API. When something goes wrong, they receive errors like:
>
> * `"NullPointerException at line 41"` or
> * `Whitelabel Error Page`
>
> Instead, they should see:
>
> ```json
> { "timestamp": "...", "error": "Invalid request", "details": "Book with ID not found", "status": 404 }
> ```
>
> And as a backend dev, you should have full logs without exposing any of it to clients.

---

### **5. Mini Visual Roadmap**

```
[❌ Exception Thrown]
   ↓
[🛑 Caught in Global Handler]
   ↓
[📄 Structured Error Format Built]
   ↓
[🔏 Internal Error Hidden → Logs]
   ↓
[✅ JSON Response + Status Code Returned]
```

---

### **6. Conceptual Explanation (Notes + Code Walkthrough)**

---

#### ✅ Why Consistent Error Format?

* Helps frontend devs easily parse and show errors
* Ensures clean UX even when APIs fail
* Encourages RESTful standard practices

---

#### ✅ Why SLF4J + Lombok?

* SLF4J is the industry-standard logging API
* Lombok’s `@Slf4j` saves boilerplate
* Auto-logs with contextual information

---

#### ✅ Best Practices

| Goal                       | Technique                            |
| -------------------------- | ------------------------------------ |
| Consistent error responses | Unified `ErrorResponse` class        |
| Secure exception handling  | Hide internal exceptions             |
| Logging all exceptions     | `@Slf4j`, `log.error(...)`           |
| Proper status codes        | `@ResponseStatus`, `HttpStatus` enum |

---

### **7. Hands-On Implementation (Integration in Main Project)**

📁 *Project: `E-Library-Backend`*
🧩 *Packages: `exception`, `security`, `logging`*

---

#### ✅ Step 1: Enhanced ErrorResponse DTO

```java
public class ErrorResponse {
    private LocalDateTime timestamp;
    private String message;
    private String details;
    private int status;

    public ErrorResponse(LocalDateTime timestamp, String message, String details, int status) {
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
        this.status = status;
    }

    // Use @Data if using Lombok
}
```

---

#### ✅ Step 2: Use SLF4J with Lombok

```java
@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BookNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleBookNotFound(BookNotFoundException ex, WebRequest request) {
        log.warn("Book not found: {}", ex.getMessage());

        ErrorResponse err = new ErrorResponse(
            LocalDateTime.now(),
            "Book not found",
            request.getDescription(false),
            HttpStatus.NOT_FOUND.value()
        );
        return new ResponseEntity<>(err, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex, WebRequest request) {
        log.error("Internal server error", ex); // Logs full stacktrace

        ErrorResponse err = new ErrorResponse(
            LocalDateTime.now(),
            "Internal server error",
            "Something went wrong. Please contact support.",
            HttpStatus.INTERNAL_SERVER_ERROR.value()
        );
        return new ResponseEntity<>(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
```

---

#### ✅ Step 3: Add Validation Error Handling (Bonus)

```java
@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
    String firstError = ex.getBindingResult().getFieldError().getDefaultMessage();

    ErrorResponse err = new ErrorResponse(
        LocalDateTime.now(),
        "Validation failed",
        firstError,
        HttpStatus.BAD_REQUEST.value()
    );
    return new ResponseEntity<>(err, HttpStatus.BAD_REQUEST);
}
```

---

### **8. Output-Based Assessment**

📌 Tasks:

* ✅ Trigger `/api/books/9999` → Returns uniform error format
* ✅ Trigger invalid payload → Returns 400 + message
* ✅ Check logs for exception stack traces
* ✅ Add a screenshot showing consistent error structure in Postman

**Push Criteria:**

* Working `ErrorResponse` model
* Global handler class with logging
* Log outputs present in console
* Code on GitHub

---

### **9. Interview Preparation**

**Q1:** Why should we not expose exception messages to clients?
**A:** They may reveal internal implementation details or security vulnerabilities.

**Q2:** What is the purpose of `@Slf4j` in Lombok?
**A:** It auto-generates an SLF4J `Logger` instance so you don’t have to write `LoggerFactory.getLogger()` manually.

**Q3:** Output: What should the API return for `BookNotFoundException`?

```json
{
  "timestamp": "2025-05-14T11:00:00",
  "message": "Book not found",
  "details": "uri=/api/books/9999",
  "status": 404
}
```

**Q4:** Which HTTP status code is correct for a validation failure?
**A:** 400 – Bad Request

**Q5:** Where do you write the logic to intercept all API exceptions?
**A:** In a class annotated with `@ControllerAdvice` using `@ExceptionHandler` methods.

---

### **10. Connection to the Next Problem Statement**

✅ This concludes the **backend robustness track**.
**Next Topic →** *Backend Enhancements & Developer Experience:*

> 🛠 **Lombok for cleaner code**,
> 📊 **SLF4J logging for service methods**,
> 🔍 **Swagger UI for API documentation and testing**

---

