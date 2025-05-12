### 1. Main Project (PBL Context)

We're now transitioning to **backend development** for the E-Library Management System using **Spring Boot**. The backend will expose RESTful APIs that interact with a database and communicate with our React frontend. Today’s focus is to understand the **core concepts of Spring** like **IoC (Inversion of Control)**, **Beans**, and **Coupling**, which lay the foundation for scalable and maintainable backend services.

---

### 2. Today's Problem Statement (PSBL)

**Problem Statement:**

Set up the Spring Boot backend and explore how **Spring Core concepts** like **IoC, Beans, and Loose Coupling** simplify dependency management and modular design in real-world applications.

**User Stories:**

* As a backend developer, I want to create a BookController and connect it with services and repositories using Spring's IoC mechanism.

* As a learner, I want to understand how Spring manages objects (Beans) and how it promotes loose coupling in large applications.

---

### 3. Learning Objectives

By the end of this session, learners will be able to:

* Explain the difference between Spring and Spring Boot.

* Understand Inversion of Control (IoC) and how it enables loose coupling.

* Define and use Beans in a Spring Boot application.

* Interpret the folder structure of a Spring Boot app (as seen in your project).

* Use annotations like `@Component`, `@Service`, `@Repository`, and `@Autowired` to wire components together.

---

### 4. Scenario-Based Framing

Imagine manually connecting every class in a large application—you’d be tightly coupling code and managing object creation yourself. That’s error-prone and inefficient. Spring solves this using **IoC**, where the **framework takes control** of object creation and wiring. In our E-Library backend, this means we don't manually create the `BookServiceImpl` in `BookController`—Spring does it for us using **Beans** and **Dependency Injection**.

---

### 5. Mini Visual Roadmap

1. Intro to Spring vs Spring Boot
2. Understand IoC (Inversion of Control)
3. Learn Coupling (Loose vs Tight)
4. Define and create Beans
5. Walk through `@Autowired` and component scanning
6. Connect layers (Controller → Service → Repository)

---

### 6. Conceptual Explanation (Notes + Code Walkthrough)

#### 🌀 Spring vs Spring Boot

| Feature    | Spring               | Spring Boot                       |
| ---------- | -------------------- | --------------------------------- |
| Setup      | Manual (lots of XML) | Auto-configured, convention-based |
| Deployment | WAR (traditional)    | Embedded server (e.g., Tomcat)    |
| Complexity | Higher for setup     | Simplified startup & defaults     |

---

#### 🔄 What is Inversion of Control (IoC)?

* A design principle where the control of object creation and dependency management is handed over to a **framework**.

```java
// Instead of: BookService service = new BookServiceImpl();
// We use:
@Autowired
private BookService bookService;
```

---

#### 🔗 Loose Coupling vs Tight Coupling

* **Tight Coupling:** Components are directly dependent (hard to change/test).
* **Loose Coupling:** Components depend on abstractions (interfaces), easier to maintain.

> In our app, `BookController` depends on `BookService` (an interface) and not directly on `BookServiceImpl`.

---

#### 🌱 What is a Bean?

* Any Java object managed by the Spring Container.

##### Bean Creation Annotations:

* `@Component` – Generic bean
* `@Service` – For service layer beans
* `@Repository` – For data access beans
* `@Controller` / `@RestController` – For web layer

---

#### 🧩 Dependency Injection in Action (Your Project)

In your current structure:

```java
@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }
}
```

This works because:

* Spring detects `BookServiceImpl` as a `@Service` Bean.
* Spring injects it where `@Autowired` is used.

---

### 7. Hands-On Implementation (Integration in Main Project)

✅ **Project Structure Reference (As Per Screenshot):**

```
com.example.ELibrary
├── controller → BookController.java
├── DTO → BookDto.java
├── Entity → Book.java
├── Repository → BookRepository.java
├── Service
│   ├── BookService.java (interface)
│   └── BookServiceImpl.java (impl with @Service)
└── ELibraryApplication.java (main app class)
```

🔨 **Task: Create and Wire Beans**

* Ensure `BookServiceImpl` is annotated with `@Service`
* Inject it using `@Autowired` in `BookController`
* Add a method in `BookRepository` like `findAll()`, `findById()`
* Expose endpoints from controller to return sample data

---

### 8. Output-Based Assessment

Tasks:

* Identify where IoC is applied in your project
* Explain the role of `@Autowired` in your own code
* Distinguish between tightly and loosely coupled code blocks
* Push the changes to GitHub under `feature/spring-core-setup`

---

### 9. Interview Preparation

**Q1:** What is IoC in Spring Framework?
**A:** IoC is a design pattern where Spring controls the lifecycle and dependencies of objects.

**Q2:** What is the difference between Spring and Spring Boot?
**A:** Spring Boot simplifies Spring by providing auto-configuration and embedded server setup.

**Q3:** What are Beans in Spring?
**A:** Objects managed by the Spring IoC container.

**Q4:** What is the use of `@Autowired`?
**A:** To inject dependencies automatically into Spring components.

**Q5:** What’s the benefit of using interfaces (like `BookService`) in Spring apps?
**A:** It enables loose coupling and makes code easier to test and extend.

---

### 10. Connection to the Next Problem Statement

In the next session, we’ll dive deeper into **Dependency Injection and IoC** in practice, where you'll implement custom service logic and understand how Spring manages object graphs.

---

### ✅ Next Topic:

**Dependency Injection & IoC in Action**

* Types of DI: Constructor vs Setter
* Custom Bean configurations
* Understanding @Qualifier
* ApplicationContext vs BeanFactory (overview)
* Creating & injecting custom services

---

Would you like the Day-7 plan for **Dependency Injection and IoC in Action** as well?
