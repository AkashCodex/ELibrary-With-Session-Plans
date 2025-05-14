### 1. **Main Project (PBL Context)**

In the **E-Library Management System**, we use **Hibernate (as JPA provider)** to connect our Java classes (like `Book`) with a relational database. Repositories serve as our gateway for saving, updating, and querying this data.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**
Implement basic persistence using Hibernate and Spring Data JPA. Learn how to save and retrieve entities using standard JPA and custom JPQL queries.

**User Stories:**

* As a developer, I want to connect entity classes to a database using JPA.
* I want to create a repository interface to persist and fetch data.
* I want to write custom queries using JPQL when needed.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

✅ Understand Hibernate & JPA integration
✅ Create Repository interfaces using Spring Data JPA
✅ Use standard CRUD operations
✅ Write custom JPQL queries using `@Query`
✅ Perform entity-to-table mapping

---

### 4. **Scenario-Based Framing**

Imagine a user searches for books by genre or title. This requires database access beyond simple CRUD. We’ll use **JPQL** to define custom methods while letting **Spring Data JPA** handle the actual SQL execution.

---

### 5. **Mini Visual Roadmap**

**Step 1:** Create a JPA Entity (e.g., `Book`)
**Step 2:** Define `BookRepository` interface
**Step 3:** Use built-in and custom query methods
**Step 4:** Test persistence by saving/fetching data

---

### 6. **Conceptual Explanation (Code Walkthrough)**

📁 **Entity Class:**

```java
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String author;
    private String genre;
    private int year;
}
```

📁 **Repository Interface:**

```java
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    
    // Custom JPQL Query
    @Query("SELECT b FROM Book b WHERE b.genre = :genre")
    List<Book> findByGenre(@Param("genre") String genre);
}
```

---

### 7. **Hands-On Integration with Project**

📁 **Project Structure Reference:**

* `Entity` → `Book.java`
* `Repository` → `BookRepository.java`
* `Service` layer will call `bookRepository.findByGenre("Science")` etc.

🔄 Test this in your `BookController` via `BookService`.

---

### 8. **Output-Based Assessment**

✅ Entity persists into DB (verified in table)
✅ Repository methods work as expected
✅ JPQL queries return filtered results
✅ Custom queries are written with `@Query`

---

### 9. **Interview Preparation**

**Q1:** What is the difference between JPA and Hibernate?
→ JPA is a specification; Hibernate is an implementation.

**Q2:** What is JPQL?
→ Java Persistence Query Language – similar to SQL but works on entities.

**Q3:** How does Spring Data JPA simplify database access?
→ It provides repository interfaces that generate SQL automatically behind the scenes.

---

### 10. **Connection to the Next Problem Statement**

Next, we’ll explore advanced JPA features like **automatic SQL generation**, **entity caching**, and **JPQL annotations** to optimize persistence performance and design cleaner repositories.

---

