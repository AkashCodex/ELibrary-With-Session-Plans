### 1. Main Project (PBL Context)

As your E-Library backend grows, you may have multiple implementations of a service (e.g., different strategies for logging or book validation). To guide Spring in selecting the correct implementation, you can use **`@Primary`** and **`@Qualifier`** annotations. These help maintain modularity and avoid ambiguity in dependency injection.

---

### 2. Today's Problem Statement (PSBL)

**Problem Statement:**

Resolve ambiguity when multiple Beans of the same type exist by using `@Primary` and `@Qualifier` annotations for precise dependency injection.

**User Stories:**

* As a developer, I want to define a default Bean when multiple candidates are present.

* As a developer, I want to explicitly inject a specific Bean using a qualifier.

---

### 3. Learning Objectives

By the end of this session, learners will be able to:

* Understand how Spring handles multiple Bean definitions.

* Use `@Primary` to mark a default Bean.

* Use `@Qualifier` to inject a specific implementation.

* Apply these concepts to real services in the project context.

---

### 4. Scenario-Based Framing

Let’s say your E-Library has two services: `EmailNotificationService` and `SmsNotificationService`, both implementing a common `NotificationService` interface. Without guiding Spring, autowiring this interface will throw an error. Using `@Primary` and `@Qualifier`, you can control which service gets injected and when.

---

### 5. Mini Visual Roadmap

1. Create an Interface
2. Provide Two Implementations
3. Use `@Primary` to mark default
4. Use `@Qualifier` to choose specific
5. Inject and test in a Controller or Service

---

### 6. Conceptual Explanation (Notes + Code Walkthrough)

#### 🧠 Multiple Bean Problem

```java
@Autowired
private NotificationService notificationService; // Error if multiple beans found
```

---

#### ✅ Solution 1: `@Primary`

```java
@Primary
@Service
public class EmailNotificationService implements NotificationService {
    // default bean when autowiring
}
```

---

#### ✅ Solution 2: `@Qualifier`

```java
@Service
public class SmsNotificationService implements NotificationService {
    // alternative service
}
```

```java
@Autowired
@Qualifier("smsNotificationService")
private NotificationService notificationService;
```

> The string inside `@Qualifier` must match the Bean ID (`smsNotificationService` by default is the class name with first letter lowercase).

---

### 7. Hands-On Implementation (Integration in Main Project)

🔨 Create:

```java
public interface NotificationService {
    void notifyUser(String message);
}
```

🔨 Add Implementations:

```java
@Primary
@Service
public class EmailNotificationService implements NotificationService {
    public void notifyUser(String message) {
        System.out.println("Email: " + message);
    }
}

@Service
public class SmsNotificationService implements NotificationService {
    public void notifyUser(String message) {
        System.out.println("SMS: " + message);
    }
}
```

🔨 Inject in BookServiceImpl:

```java
@Autowired
@Qualifier("smsNotificationService")
private NotificationService notificationService;
```

---

### 8. Output-Based Assessment

Tasks:

* Define an interface with two implementations
* Use `@Primary` on one, `@Qualifier` on the other
* Inject into a service and log output
* Push under `feature/primary-qualifier` branch

---

### 9. Interview Preparation

**Q1:** What happens when two Beans of the same type are autowired?
**A:** Spring throws a `NoUniqueBeanDefinitionException`.

**Q2:** How to resolve it?
**A:** Use `@Primary` for a default or `@Qualifier` to specify which one.

**Q3:** Can we use `@Qualifier` with `@Primary`?
**A:** Yes. `@Qualifier` takes precedence if both are present.

**Q4:** What if no `@Primary` or `@Qualifier` is used?
**A:** Spring throws an error if multiple Beans exist.

---

### 10. Connection to the Next Problem Statement

Next, we step back to understand how all of this works **behind the scenes** — how Spring Boot is built on top of Spring, how it **auto-configures**, and how its architecture simplifies app creation compared to traditional Spring.

---

### ✅ Next Topic:

**Introduction to Spring Boot Architecture**

* Spring Boot vs Spring Core
* Role of AutoConfiguration
* Starter Dependencies
* Embedded Server (Tomcat)
* Spring Boot Application Flow
* Why Spring Boot is Developer Friendly

---

