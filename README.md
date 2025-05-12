### 1. Main Project (PBL Context)

In our E-Library backend, Spring Beans like `BookController`, `BookServiceImpl`, and `BookRepository` are auto-managed by the Spring Container. Today, we’ll explore what these **Beans** really are, how they're **created, scoped, initialized, and destroyed**, and how Spring handles **events and lazy loading**.

---

### 2. Today's Problem Statement (PSBL)

**Problem Statement:**

Understand how Spring creates and manages Beans in a controlled environment using different **scopes**, **lifecycles**, and **event mechanisms** to enhance modularity and performance.

**User Stories:**

* As a developer, I want to understand the lifecycle of a Spring Bean to execute custom logic during initialization or destruction.

* As a developer, I want to use event-driven mechanisms to react to changes in the application context.

* As a developer, I want to optimize app performance with Lazy Initialization.

---

### 3. Learning Objectives

By the end of this session, learners will:

* Understand what a **Bean** is in Spring.

* Learn the **lifecycle phases** of a Bean (`init`, `destroy`).

* Explore **Bean Scopes**: `singleton`, `prototype`, `request`, `session`.

* Use **lazy initialization** to defer bean creation.

* Implement basic **event-driven communication** using `ApplicationEventPublisher`.

---

### 4. Scenario-Based Framing

Imagine your E-Library system grows to include more services like Notifications, Users, and Logging. Not all of these need to be started immediately. Some can be **loaded only when needed** (lazy loading), and some might **emit events** (e.g., a log entry when a book is added). You want Spring to manage this lifecycle efficiently — from creation to shutdown.

---

### 5. Mini Visual Roadmap

1. Define a Spring Bean
2. Understand Bean Scopes
3. Use `@PostConstruct` and `@PreDestroy`
4. Enable Lazy Initialization
5. Handle Events with `ApplicationListener`
6. Live Example in E-Library Service Layer

---

### 6. Conceptual Explanation (Notes + Code Walkthrough)

#### 🧾 What is a Bean?

A **Bean** is any class object that is managed by the Spring IoC container.

```java
@Service
public class BookServiceImpl implements BookService {
    // This is a Bean
}
```

---

#### 📦 Bean Scopes

* `singleton` (default): Single instance per Spring container
* `prototype`: New instance on every request
* `request`, `session`, `application`: For web apps

```java
@Scope("prototype")
@Service
public class NotificationService {
    // new object every time
}
```

---

#### 🔄 Bean Lifecycle Hooks

Use annotations for custom logic:

```
@PostConstruct
public void init() {
    System.out.println("Bean initialized!");
}

@PreDestroy
public void cleanup() {
    System.out.println("Bean destroyed!");
}
```

---

#### 🐌 Lazy Initialization

```
@Lazy
@Service
public class AnalyticsService {
    public AnalyticsService() {
        System.out.println("Lazy Bean Created");
    }
}
```

---

#### 📣 Event-Driven Beans

1. **Create an Event**

```
public class BookAddedEvent extends ApplicationEvent {
    public BookAddedEvent(Object source) {
        super(source);
    }
}
```

2. **Publish an Event**

```
@Autowired
private ApplicationEventPublisher publisher;

public void addBook(Book book) {
    publisher.publishEvent(new BookAddedEvent(book));
}
```

3. **Listen to the Event**

```
@Component
public class BookEventListener {
    @EventListener
    public void handleBookAdded(BookAddedEvent event) {
        System.out.println("Book was added: " + event.getSource());
    }
}
```

---

### 7. Hands-On Implementation (Integration in Main Project)

✅ Add `@PostConstruct` and `@PreDestroy` in `BookServiceImpl`
✅ Create a prototype-scoped dummy service (e.g., `LoggingService`)
✅ Mark a bean as `@Lazy` and confirm in logs
✅ Publish and listen to a `BookAddedEvent` after a book is added

---

### 8. Output-Based Assessment

Tasks:

* Identify scope of `BookServiceImpl` (default is singleton)
* Add custom lifecycle logging
* Create and consume one custom Spring Event
* Mark one service as `@Lazy` and test deferred loading
* Push code under `feature/bean-lifecycle-scope-event`

---

### 9. Interview Preparation

**Q1:** What is a Bean in Spring?
**A:** A class managed by the Spring IoC container.

**Q2:** Difference between `singleton` and `prototype` scope?
**A:** Singleton has one instance per container; prototype creates new instance each time.

**Q3:** How can you hook into the bean lifecycle?
**A:** Using `@PostConstruct` and `@PreDestroy`.

**Q4:** What is `@Lazy` used for?
**A:** To delay bean instantiation until it’s needed.

**Q5:** How does Spring’s event mechanism work?
**A:** Via `ApplicationEventPublisher` and `@EventListener`.

---

### 10. Connection to the Next Problem Statement

Now that you understand how Beans behave in the Spring Container, we’ll dive deeper into how Spring **injects** these Beans into one another using **`@Autowired`**, and how to handle **optional and required injections**, **qualifiers**, and **circular dependencies**.

---

### ✅ Next Topic:

**`@Autowired` in Spring**

* Field vs Constructor vs Setter Injection
* Optional vs Required Beans
* Using `@Qualifier`
* Circular Dependency resolution
* Autowiring best practices

---

Would you like me to generate the Day-9 session plan for `@Autowired` now?
