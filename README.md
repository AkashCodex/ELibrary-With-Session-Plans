### 1. Main Project (PBL Context)

We're now implementing **Dependency Injection (DI)** and understanding how **IoC (Inversion of Control)** and the **Spring Container** manage our components (Beans). Using your current E-Library structure, we’ll explore how Maven supports build management and how Spring Boot leverages IoC to wire up components like `BookServiceImpl`, `BookRepository`, etc., without manual instantiation.

---

### 2. Today's Problem Statement (PSBL)

**Problem Statement:**

Enable seamless data flow in the E-Library app by applying **IoC and DI** concepts to wire together components like repositories, services, and controllers using Spring Boot.

**User Stories:**

* As a developer, I want to configure my services and repositories to be injected automatically using DI.

* As a learner, I want to understand how Maven manages my project’s build lifecycle and dependencies.

---

### 3. Learning Objectives

By the end of this session, learners will:

* Understand the Spring IoC architecture and its role in dependency management.

* Implement **Constructor and Setter-based Dependency Injection**.

* Learn how Spring Boot uses **Maven** to build, package, and manage dependencies.

* Identify the role of IoC in managing and wiring Beans automatically.

---

### 4. Scenario-Based Framing

Let’s say you’re building a library system with multiple components. Instead of manually creating and managing objects like `BookServiceImpl`, wouldn’t it be more efficient if Spring could handle that for you? That’s exactly what IoC and DI allow—**you define what you need, and Spring provides it**.

This approach lets us build scalable systems that are easier to test and modify.

---

### 5. Mini Visual Roadmap

1. IoC Container and Architecture
2. Constructor vs Setter DI
3. `@Component`, `@Service`, `@Repository` review
4. Maven overview: `pom.xml`, dependencies, plugins
5. Spring Boot Build Lifecycle with Maven
6. Live walkthrough: Wiring your `BookController → Service → Repository`

---

### 6. Conceptual Explanation (Notes + Code Walkthrough)

#### 🧠 Inversion of Control (IoC) in Spring

* IoC moves control of object creation from developer to the **Spring Framework**.

* The **ApplicationContext** is the Spring container that creates and manages Beans.

#### 🔄 Dependency Injection (DI)

* **Constructor Injection** (recommended for mandatory dependencies):

```java
@Service
public class BookServiceImpl implements BookService {
    private final BookRepository repo;

    @Autowired
    public BookServiceImpl(BookRepository repo) {
        this.repo = repo;
    }
}
```

* **Setter Injection** (for optional dependencies):

```java
@Autowired
public void setRepo(BookRepository repo) {
    this.repo = repo;
}
```

---

#### 🧱 IoC Architecture in Spring

```
[Client Request]
      ↓
[DispatcherServlet] → [Controller (Bean)]
                                ↓
                  [Service Layer (Bean)]
                                ↓
                  [Repository Layer (Bean)]
                                ↓
                         [Database]
```

* All layers are **managed by IoC Container** (ApplicationContext), and dependencies are injected via `@Autowired`.

---

#### 🧰 Maven Build and Project Architecture

##### Key Files:

* `pom.xml`: Manages dependencies (`spring-boot-starter-web`, `data-jpa`, `h2`, etc.)
* `src/main/java`: Source code (controllers, services)
* `src/main/resources`: Config files like `application.properties`

##### Lifecycle Commands:

```bash
mvn clean
mvn install
mvn spring-boot:run
```

> `mvn install` packages the app into a `.jar` and downloads all dependencies.

---

#### 🧪 How IoC Manages Beans in Your Project

Your structure:

```
└── controller → BookController.java
      ↓
└── service → BookServiceImpl.java (@Service)
      ↓
└── repository → BookRepository.java (@Repository)
```

Spring automatically:

* Instantiates the `BookServiceImpl`
* Injects it into `BookController` with `@Autowired`
* Manages the entire object graph

You never call `new BookServiceImpl()`—Spring handles it.

---

### 7. Hands-On Implementation (Integration in Main Project)

✅ Refactor `BookServiceImpl` to use constructor injection
✅ Add a log to show Bean creation (e.g., `System.out.println("Bean Created")`)
✅ Run using `mvn spring-boot:run`
✅ Modify `pom.xml` to add `spring-boot-devtools` (auto-reload)

---

### 8. Output-Based Assessment

Tasks:

* Convert all `@Autowired` usages in services/controllers to constructor-based injection
* Show console logs proving Spring instantiated your Beans
* Explain the role of `pom.xml` in your build process
* Push to GitHub under `feature/ioc-di-maven`

---

### 9. Interview Preparation

**Q1:** What is the difference between IoC and DI?
**A:** IoC is the principle; DI is a way to implement IoC.

**Q2:** Which DI method is preferred in Spring and why?
**A:** Constructor Injection – promotes immutability and testability.

**Q3:** What role does `@Autowired` play?
**A:** It tells Spring to inject the appropriate Bean.

**Q4:** How does Maven support Spring Boot?
**A:** It manages dependencies, plugins, and builds the application via `pom.xml`.

---

### 10. Connection to the Next Problem Statement

We’ve now wired our core components using DI. Next, we explore what these "Beans" really are and how they behave within the Spring Container—including lifecycles, scopes, and lazy loading.

---

### ✅ Next Topic:

**Spring Beans in Depth**

* What is a Bean?
* Bean Lifecycle (init/destroy hooks)
* Bean Scopes (`singleton`, `prototype`, etc.)
* Lazy Initialization
* Event-Driven Beans (ApplicationEventPublisher)

---

Would you like the Day-8 session plan on **Spring Beans – Lifecycle, Scopes, and Lazy Init** as well?
