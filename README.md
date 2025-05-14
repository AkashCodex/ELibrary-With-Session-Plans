### 1. **Main Project (PBL Context)**

In the E-Library Management System, controllers act as API interfaces, but they shouldn't directly expose entity models to the outside world. To ensure decoupling, security, and cleaner contracts, we use **DTOs (Data Transfer Objects)**. Today’s focus is on mapping incoming HTTP requests to service methods and structuring request/response using DTOs.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**

Design clean service endpoints in the E-Library project by separating concerns using a layered architecture with proper Request and Response DTOs.

**User Stories:**

* As a developer, I want to avoid exposing internal entity classes over HTTP.
* As a user, I want to send book data and get filtered/structured responses using REST endpoints.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

✅ Understand why mapping between controllers and services is crucial
✅ Create basic RequestDTO and ResponseDTO classes
✅ Use DTOs in controller methods to process input and format output
✅ Map DTOs to entity objects inside the service layer
✅ Maintain a clean and secure API contract

---

### 4. **Scenario-Based Framing**

You don’t want your database structure to leak into your frontend. Instead of returning or accepting full `Book` entities, you design a `BookRequestDto` for incoming data, and a `BookResponseDto` for outgoing responses. These DTOs act like a security layer between your database and the API consumer (frontend or third-party).

---

### 5. **Mini Visual Roadmap**

**Step 1:** Define `BookRequestDto` and `BookResponseDto`
**Step 2:** Accept `BookRequestDto` in controller and convert it to entity
**Step 3:** Return `BookResponseDto` to client
**Step 4:** Move logic to service layer
**Step 5:** Maintain clean mapping (using constructor or builder pattern)

---

### 6. **Conceptual Explanation (Notes + Code Walkthrough)**

🧱 **Create DTOs:**

📄 `BookRequestDto.java`

```java
public class BookRequestDto {
    private String title;
    private String author;
    private String genre;
}
```

📄 `BookResponseDto.java`

```java
public class BookResponseDto {
    private Long id;
    private String title;
    private String author;

    public BookResponseDto(Book book) {
        this.id = book.getId();
        this.title = book.getTitle();
        this.author = book.getAuthor();
    }
}
```

🛠️ **Modify Controller:**

```java
@PostMapping
public BookResponseDto addBook(@RequestBody BookRequestDto request) {
    Book savedBook = bookService.addBook(request);
    return new BookResponseDto(savedBook);
}
```

🛠️ **Update Service:**

```java
public Book addBook(BookRequestDto request) {
    Book book = new Book();
    book.setTitle(request.getTitle());
    book.setAuthor(request.getAuthor());
    book.setGenre(request.getGenre());
    return bookRepository.save(book);
}
```

---

### 7. **Hands-On Implementation (Integration in Project)**

📁 **Project Paths:**

* `com.example.ELibrary.DTO.BookRequestDto.java`
* `com.example.ELibrary.DTO.BookResponseDto.java`
* `com.example.ELibrary.controller.BookController.java`
* `com.example.ELibrary.service.BookService.java`

🧪 **Test via Postman:**

* POST to `/api/books` with:

```json
{
  "title": "The Pragmatic Programmer",
  "author": "Andy Hunt",
  "genre": "Programming"
}
```

* Receive structured response:

```json
{
  "id": 1,
  "title": "The Pragmatic Programmer",
  "author": "Andy Hunt"
}
```

---

### 8. **Output-Based Assessment**

✅ DTO classes created and imported properly
✅ Entity is not exposed in the API
✅ Input accepted using `@RequestBody BookRequestDto`
✅ Output returned using `BookResponseDto`
✅ Mappings between layers are clearly separated

---

### 9. **Interview Preparation**

**Q1:** Why should you use DTOs instead of entities in your controller?
→ To prevent exposing internal structure and ensure loose coupling.

**Q2:** How do you convert DTO to Entity?
→ Manually in the service layer or using ModelMapper/MapStruct.

**Q3:** What’s the purpose of having both RequestDTO and ResponseDTO?
→ RequestDTO for accepting clean input, ResponseDTO for customizing output.

**Q4:** Can you return an entity directly?
→ Technically yes, but not recommended due to coupling and security risks.

---

### 10. **Connection to the Next Problem Statement**

In the next session, we’ll look into **Service Layer Responsibilities**, **CRUD methods**, and **handling responses with `ResponseEntity`**, allowing us to standardize API replies and status codes effectively.


