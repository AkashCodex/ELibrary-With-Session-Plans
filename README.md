### 1. **Main Project (PBL Context)**

In the **E-Library Management System**, we now shift to the **Persistence Layer**, which is responsible for database operations using **Entity classes** and **Spring Data JPA**. This allows storing, retrieving, and managing data such as books, users, and borrow history.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**

Enable the application to persist and fetch data using entity classes mapped to a relational database, following ORM principles.

**User Stories:**

* As a developer, I want to create entity classes that reflect database tables.
* I want to use Spring JPA repositories to easily perform CRUD operations.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

✅ Define and annotate Entity classes using JPA
✅ Understand the role and responsibility of the Persistence Layer
✅ Map entity fields to table columns
✅ Create a repository interface to perform CRUD operations
✅ Test entity-repository interaction

---

### 4. **Scenario-Based Framing**

In an e-library, we store books with title, author, genre, etc. The **Book** entity represents this structure and allows persistent storage using Spring Data JPA without writing complex SQL.

---

### 5. **Mini Visual Roadmap**

**Step 1:** Create `Book.java` in the `entity` package
**Step 2:** Annotate with `@Entity`, `@Id`, and `@GeneratedValue`
**Step 3:** Create `BookRepository.java` extending `JpaRepository`
**Step 4:** Connect to in-memory/PostgreSQL database using `application.properties`

---

### 6. **Conceptual Explanation (Code Walkthrough)**

📁 **Entity Class Example:**

```java
@Entity
public class Book {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String genre;
}
```

📁 **Repository Interface Example:**

```java
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAuthor(String author);
}
```

---

### 7. **Hands-On Integration with Project**

📁 **Project Structure:**

* `com.example.ELibrary.entity.Book.java`
* `com.example.ELibrary.repository.BookRepository.java`

🔧 **Configuration (PostgreSQL):**

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/elibrary
spring.datasource.username=postgres
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

🧪 **Test:**

Save a book using `BookRepository.save(book)`
Fetch all books using `BookRepository.findAll()`

---

### 8. **Output-Based Assessment**

✅ Book entity properly annotated
✅ Repository interface successfully auto-wired
✅ Records saved and retrieved from DB
✅ No SQL required for basic operations

---

### 9. **Interview Preparation**

**Q1:** What is an entity in JPA?
→ A POJO mapped to a database table using annotations.

**Q2:** What does `JpaRepository` provide?
→ CRUD methods, paging, sorting, and query method abstraction.

**Q3:** How is ORM beneficial?
→ Eliminates boilerplate SQL and tightly integrates Java objects with tables.

---

### 10. **Connection to the Next Problem Statement**

Next up, we will write **business logic** in the Service layer that interacts with the repository (DAO layer) to process data before sending it to the controller.

---

