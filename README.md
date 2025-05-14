### 1. **Main Project (PBL Context)**

In the **E-Library Management System**, as our project grows, business logic shouldn’t live in controllers. Instead, we delegate it to a **Service Layer**. Today we formally structure that layer using Spring's `@Service` annotation and explore how controllers interact with services using `@Autowired`.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**

Structure your application so that all business logic (e.g., calculations, data transformations, validations) resides in the service layer, while the controller acts only as a handler of HTTP requests.

**User Stories:**

* As a developer, I want to write business logic outside the controller to keep things modular and testable.
* As a team, we should follow standard architecture that separates concerns.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

✅ Understand the purpose and responsibility of a Service Layer
✅ Use the `@Service` annotation to define a service class
✅ Inject services into controllers using `@Autowired`
✅ Build and test a basic service (e.g., CalculatorService)
✅ Call service methods from controller routes

---

### 4. **Scenario-Based Framing**

In the E-Library system, the logic to calculate late fees, transform DTOs, or filter books by genre shouldn't clutter controllers. By writing services (like `BookService`), we ensure reusable and testable components.

---

### 5. **Mini Visual Roadmap**

**Step 1:** Create a `CalculatorService` in the `service` package
**Step 2:** Annotate it with `@Service`
**Step 3:** Inject into a controller using `@Autowired`
**Step 4:** Call add/subtract/multiply/divide from controller endpoints

---

### 6. **Conceptual Explanation (Code Walkthrough)**

📁 **Service Class:**

```java
@Service
public class CalculatorService {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("Cannot divide by zero");
        return a / b;
    }
}
```

📁 **Controller Class:**

```java
@RestController
@RequestMapping("/api/calc")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @GetMapping("/add")
    public int add(@RequestParam int a, @RequestParam int b) {
        return calculatorService.add(a, b);
    }
}
```

---

### 7. **Hands-On Integration with Project**

📁 **Project Structure:**

* `com.example.ELibrary.service.CalculatorService.java`
* `com.example.ELibrary.controller.CalculatorController.java`

🧪 **Test Case:**

`GET /api/calc/add?a=5&b=3`
➡️ Output: `8`

---

### 8. **Output-Based Assessment**

✅ Service class annotated with `@Service`
✅ Controller uses `@Autowired` to access service
✅ Logic is correctly separated (no calculations in controller)
✅ At least one service method is exposed and testable via endpoint

---

### 9. **Interview Preparation**

**Q1:** What is the role of the service layer in a Spring Boot application?
→ To encapsulate business logic and support separation of concerns.

**Q2:** What does the `@Service` annotation do?
→ It registers the class as a Spring bean and marks it as a service component.

**Q3:** What is the difference between `@Autowired` field injection and constructor injection?
→ Constructor injection is more testable and recommended over field injection.

---

### 10. **Connection to the Next Problem Statement**

Next up, we move deeper into application structure by learning **Repository Layer**: how to interact with databases using Spring Data JPA and manage entities effectively.

---

