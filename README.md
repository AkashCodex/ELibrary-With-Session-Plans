### 1. **Main Project (PBL Context)**

In the E-Library Management System, we’ve implemented DTOs to structure request and response objects cleanly. Today, we enhance the reliability of those inputs using **validation annotations** to ensure correct data entry before processing. We also tightly bind these DTOs to controller methods with proper error handling using `@Valid`.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**

Ensure only valid book data is accepted into the system using Spring Boot’s built-in validation and bind the validation logic directly inside controller methods.

**User Stories:**

* As a user, I should not be able to add a book with an empty title or author.
* As a developer, I want to avoid writing manual validations and instead annotate my DTOs.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

✅ Add validation annotations in DTOs
✅ Use `@Valid` in controller methods to enforce validations
✅ Handle validation exceptions using `@ExceptionHandler` or `@ControllerAdvice` (optional)
✅ Understand how DTOs are bound and validated automatically by Spring Boot

---

### 4. **Scenario-Based Framing**

You build a form in the React frontend to add books. A user tries to submit it without entering a title. Rather than letting this invalid data go to the backend and fail later, you enforce validations directly at the controller level using annotations like `@NotBlank`.

---

### 5. **Mini Visual Roadmap**

**Step 1:** Add validation annotations to `BookRequestDto`
**Step 2:** Add `@Valid` to controller method
**Step 3:** Test validation failure with Postman
**Step 4:** Optionally add global error handler (bonus)

---

### 6. **Conceptual Explanation (Code Walkthrough)**

📄 **DTO with Validations:**

```java
public class BookRequestDto {
    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Author is required")
    private String author;

    private String genre;
}
```

📄 **Controller using @Valid:**

```java
@PostMapping
public ResponseEntity<BookResponseDto> addBook(@Valid @RequestBody BookRequestDto request) {
    Book savedBook = bookService.addBook(request);
    return ResponseEntity.ok(new BookResponseDto(savedBook));
}
```

📄 **Global Error Handler (Optional):**

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(err ->
            errors.put(err.getField(), err.getDefaultMessage()));
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}
```

---

### 7. **Hands-On Integration with Project**

📁 **Project Paths:**

* `com.example.ELibrary.DTO.BookRequestDto.java`
* `com.example.ELibrary.controller.BookController.java`
* `com.example.ELibrary.exception.GlobalExceptionHandler.java` *(Optional)*

🧪 **Test Case via Postman:**

* Send POST `/api/books` with:

```json
{
  "title": "",
  "author": ""
}
```

* 🔄 Output:

```json
{
  "title": "Title is required",
  "author": "Author is required"
}
```

---

### 8. **Output-Based Assessment**

✅ DTO has at least two fields with `@NotBlank`
✅ Controller uses `@Valid` properly
✅ System throws validation error on bad input
✅ Returns appropriate response with validation messages

---

### 9. **Interview Preparation**

**Q1:** What does `@Valid` do in Spring Boot?
→ It triggers the validation annotations present on the fields of a class.

**Q2:** What’s the difference between `@NotNull` and `@NotBlank`?
→ `@NotNull` ensures the field is not null, `@NotBlank` also ensures it’s not empty or only whitespace.

**Q3:** How do you customize validation error messages?
→ Using `message` attribute inside the annotation.

**Q4:** Where should validation happen—controller or service?
→ Preferably at the controller using `@Valid`.

---

### 10. **Connection to the Next Problem Statement**

Next, we’ll explore how to organize these DTOs and controller logic further by learning about **Service-Layer Boundaries**, injecting **dependencies using `@Autowired`**, and improving code reusability.

---
