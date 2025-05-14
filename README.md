### 1. **Main Project (PBL Context)**

In our **E-Library Management System**, efficient data access is critical for managing thousands of books. Spring Data JPA and Hibernate offer **automatic SQL generation**, **custom JPQL queries**, and **caching** to streamline this.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**
Improve performance and flexibility in the persistence layer using features like automatic SQL generation, JPQL queries, and caching.

**User Stories:**

* As a backend developer, I want Spring to auto-generate queries so I can save time.
* I want to use JPQL to write custom queries.
* I want to enable caching to reduce redundant DB hits.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

✅ Understand automatic SQL generation by Spring Data
✅ Write advanced JPQL queries using `@Query`
✅ Enable and configure second-level caching
✅ Optimize entity class annotations for performance

---

### 4. **Scenario-Based Framing**

Imagine thousands of users frequently request popular books. Instead of repeatedly querying the DB, you **cache** frequently accessed entities. You also want Spring to auto-generate queries where possible, reducing boilerplate code.

---

### 5. **Mini Visual Roadmap**

**Step 1:** Enable auto DDL with `spring.jpa.hibernate.ddl-auto`
**Step 2:** Use method naming conventions in Repositories
**Step 3:** Use `@Query` for custom logic
**Step 4:** Enable Hibernate 2nd Level Cache (optional)

---

### 6. **Conceptual Explanation (Code Walkthrough)**

📁 **Automatic Query Generation:**

```java
List<Book> findByAuthor(String author);
List<Book> findByTitleContaining(String keyword);
```

📁 **Custom JPQL:**

```java
@Query("SELECT b FROM Book b WHERE b.year > :year")
List<Book> findRecentBooks(@Param("year") int year);
```

📁 **Enable Caching:**

```java
@Entity
@Cacheable
public class Book { ... }

@Configuration
@EnableCaching
public class CacheConfig { }
```

📁 **application.properties:**

```properties
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

### 7. **Hands-On Integration with Project**

* Reuse `BookRepository` to implement new finder methods
* Annotate `Book` entity with `@Cacheable`
* Use method naming conventions and JPQL queries interchangeably

---

### 8. **Output-Based Assessment**

✅ Queries generated automatically for finder methods
✅ Custom JPQL runs with expected output
✅ Logs show Hibernate-generated SQL
✅ Cache hit/miss behavior confirmed with logs

---

### 9. **Interview Preparation**

**Q1:** How does Spring Data JPA generate SQL queries?
→ Based on method names in Repository interfaces.

**Q2:** What is JPQL? How is it different from SQL?
→ JPQL operates on entities, not tables.

**Q3:** What is the benefit of caching in the persistence layer?
→ Improves performance by reducing redundant DB queries.

---

### 10. **Connection to the Next Problem Statement**

Next, we explore **Multiple Database Configurations**, **Transaction Management**, and **Flyway DB Migrations**—key concepts for handling scalable enterprise systems with real-world DB challenges.

---

