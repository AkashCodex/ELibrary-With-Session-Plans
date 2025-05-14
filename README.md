### ✅ **Day-1 Session Plan**

**Topic:** Spring Security Setup, User Authentication & Role-Based Access Control
**Theme:** Secure Access to eLibrary Book Management System

---

### **1. Main Project (PBL Context)**

**Project Title:** *eLibrary Book Management System*
This session contributes to strengthening the **backend's security layer** to protect sensitive APIs (like Add, Edit, Delete books), laying the foundation for authenticated user roles (Admin, User) and secure operations.

---

### **2. Today’s Problem Statement (PSBL)**

**Standard Problem Statement:**
Set up Spring Security in the backend. Implement a login mechanism and protect REST endpoints using role-based access control (RBAC).

**User Stories:**

* As a user, I want to securely log in to the eLibrary system so that my identity is verified.
* As an admin, I want to be able to add/edit/delete books, while users can only view them.
* As a system, I want to restrict book API access based on roles (USER, ADMIN).

---

### **3. Learning Objectives**

By the end of this session, learners will be able to:

* Understand the need for securing APIs in web apps.
* Configure and use Spring Security in a Spring Boot project.
* Implement in-memory authentication and user roles.
* Secure REST APIs using role-based access control (RBAC).
* Test secured endpoints via Postman or frontend app integration.

---

### **4. Scenario-Based Framing**

Imagine the eLibrary app is deployed online. Anyone can currently delete or modify books without logging in. This is a security threat. Today, we’ll add a lock to our system — users must log in, and only authorized users can perform specific actions.

---

### **5. Mini Visual Roadmap**

```
[✅ Backend Setup]
      ↓
[✅ Spring Security Dependency]
      ↓
[✅ User Model & Role Enum]
      ↓
[✅ Security Config Class]
      ↓
[✅ In-memory Authentication]
      ↓
[✅ RBAC on Controller APIs]
      ↓
[✅ Postman Testing]
```

---

### **6. Conceptual Explanation (Notes, Code Walkthrough)**

#### 📘 Key Concepts:

* **Authentication**: Verifying user identity.
* **Authorization**: Giving access to specific roles.
* **Spring Security**: A powerful framework to handle auth/authz in Spring Boot apps.

#### 🧩 Core Components:

1. `SecurityConfig.java` – Main configuration class.
2. `UserDetailsService` – For custom user data (later, optional).
3. `HttpSecurity` – Method to control which endpoint requires what role.
4. `BCryptPasswordEncoder` – To encrypt passwords.

---

### **7. Hands-On Implementation**

> Implement directly in **`E-Library-Backend`** → follow `src/main/java/com/example/ELibrary/config` structure.

---

#### ✅ Step 1: Add Dependency in `build.gradle`

```groovy
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-security'
}
```

---

#### ✅ Step 2: Create Role Enum

`com.example.ELibrary.Entity.Role`

```java
public enum Role {
    USER,
    ADMIN
}
```

---

#### ✅ Step 3: Create SecurityConfig Class

`com.example.ELibrary.config.SecurityConfig`

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests()
            .requestMatchers("/api/books/**").hasAnyRole("USER", "ADMIN")
            .requestMatchers(HttpMethod.POST, "/api/books/**").hasRole("ADMIN")
            .anyRequest().authenticated()
            .and()
            .httpBasic(); // Basic auth

        return http.build();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User.withUsername("user")
            .password(passwordEncoder().encode("user123"))
            .roles("USER")
            .build();
        UserDetails admin = User.withUsername("admin")
            .password(passwordEncoder().encode("admin123"))
            .roles("ADMIN")
            .build();
        return new InMemoryUserDetailsManager(user, admin);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

---

#### ✅ Step 4: Test It via Postman

* `GET /api/books` → Requires **user/admin**
* `POST /api/books` → Requires **admin only**
* Unauthorized access → `401 Unauthorized`

---

### **8. Output-Based Assessment**

🧪 **Tasks**:

* ✅ Access `/api/books` without login → Expect 401 error.
* ✅ Login as user → Can fetch books.
* ✅ Login as admin → Can add a book.
* ✅ Try POST as user → Should get 403 Forbidden.

📌 **Checkpoint**: Push updated backend code to GitHub. Include `SecurityConfig.java`.

---

### **9. Interview Preparation**

**Q1:** What is the difference between authentication and authorization?
**A:** Authentication verifies identity; Authorization checks permissions.

**Q2:** What will happen if a USER tries to access an ADMIN-only endpoint?
**A:** Spring Security throws `403 Forbidden`.

**Q3:** How is password encrypted in Spring Security?
**A:** Using `BCryptPasswordEncoder`.

**Q4:** What does `@EnableWebSecurity` do?
**A:** It enables Spring Security’s web security support.

**Q5:** Output-based: What response code will you get for this:

```http
POST /api/books
Authorization: Basic user:user123
```

**A:** 403 Forbidden – because only ADMIN can post.

---

### **10. Connection to the Next Problem Statement**

**Next Topic:**

> 🧩 *Dynamic Content Manipulation*:
> Using JavaScript, dynamically generate weather cards when data is fetched and display them without page reload.

**Transition Note:**
Now that we’ve secured our backend, let’s make the frontend more dynamic. In the next session, we’ll work on creating dynamic components in React to visualize weather data.

---
