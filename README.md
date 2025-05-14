### 1. **Main Project (PBL Context)**

In our **E-Library Management System**, we interact with APIs daily. Postman allows us to test those APIs with precision before integrating them into the frontend.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**
As developers, we need to test our backend APIs for various CRUD operations, auth flows, and response validations using a visual tool like **Postman**.

**User Stories:**

* As a developer, I want to test API requests before writing frontend code.
* I want to automate my API testing and save common environments and tokens.
* I want to test authorized routes using bearer tokens.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

✅ Install and launch Postman
✅ Use HTTP methods to perform CRUD
✅ Organize and re-use requests using Collections & Environments
✅ Configure and send authorized requests using tokens

---

### 4. **Scenario-Based Framing**

Imagine your React frontend is ready, but you’re unsure if the backend API works. Before integration, you use Postman to test endpoints, check headers, and authenticate using JWT.

---

### 5. **Mini Visual Roadmap**

**Step 1:** Install and open Postman
**Step 2:** Send basic GET/POST/PUT/DELETE requests
**Step 3:** Create a Collection and Environment
**Step 4:** Send requests with Auth headers (JWT/OAuth 2.0)

---

### 6. **Conceptual Explanation (Walkthrough)**

🔹 **Install Postman:**

* Download from [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

🔹 **CRUD via HTTP Methods:**

| Method | Use Case             | URL                      |
| ------ | -------------------- | ------------------------ |
| GET    | Get all books        | `GET /api/books`         |
| POST   | Add a new book       | `POST /api/books`        |
| PUT    | Update existing book | `PUT /api/books/{id}`    |
| DELETE | Remove a book        | `DELETE /api/books/{id}` |

🔹 **Key Features in Postman:**

* **Collections:** Save grouped requests
* **Environments:** Manage base URLs and tokens
* **Authorization Tab:** Add JWT, Basic Auth, OAuth 2.0
* **Tests Tab:** Add JS test snippets (e.g., status checks)

---

### 7. **Hands-On Integration with Project**

* Test `GET /api/books` from the Spring Boot backend
* Send a `POST` request with JSON body to add a book
* Add `Authorization` header with JWT token
* Use `Pre-request Scripts` and `Tests` for automation

📥 **Request Body Sample (raw JSON):**

```json
{
  "title": "Spring Boot Guide",
  "author": "Josh Long",
  "isbn": "9781234567890"
}
```

---

### 8. **Output-Based Assessment**

✅ Able to hit all CRUD endpoints successfully
✅ Saved working requests inside a Collection
✅ Used Environment Variables (e.g., `{{baseUrl}}`)
✅ Sent `Authorization: Bearer <JWT>` header properly

---

### 9. **Interview Preparation**

**Q1:** What is the difference between query params and path variables?
→ Query params are key-value pairs after `?`; path variables are part of the URL.

**Q2:** How do you send an authorization token in Postman?
→ Use the "Authorization" tab and choose "Bearer Token" or manually add `Authorization` header.

**Q3:** What are Postman environments used for?
→ To switch between dev/stage/prod base URLs and tokens without changing requests.

---

### 10. **Connection to the Next Problem Statement**

Next, we’ll dive into **Creating and Sending Requests in Detail** — including query/path params, raw request bodies (JSON), handling status codes, and **auth tokens (JWT & OAuth)** to simulate real-world secure APIs.

---

