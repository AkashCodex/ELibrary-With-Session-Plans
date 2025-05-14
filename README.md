### **1. Main Project (PBL Context)**

**Project Title:** *eLibrary Book Management System*
In this session, we move from **basic HTTP authentication to stateless JWT-based security**. This transition is critical for supporting **frontend-backend separation**, **sessionless access**, and **token-driven authentication**, especially when React is used as the frontend.

---

### **2. Today’s Problem Statement (PSBL)**

**Standard Problem Statement:**
Implement token-based authentication using JWT in Spring Boot. Secure REST APIs by issuing and validating tokens and restrict access using role-based claims.

**User Stories:**

* As a user, I want to log in and receive a secure token to access protected APIs.
* As an admin, I want to ensure only authenticated users with the correct role can access sensitive endpoints.
* As a system, I want to validate the token on every request to ensure secure, stateless access.

---

### **3. Learning Objectives**

By the end of the session, learners will:

* Understand the structure and purpose of JWTs (JSON Web Tokens).
* Implement JWT generation and validation logic.
* Configure stateless Spring Security using JWT.
* Protect API endpoints based on roles embedded in tokens.
* Test JWT-based login and access with Postman or frontend integration.

---

### **4. Scenario-Based Framing**

Imagine you want to deploy your eLibrary app where users can log in from multiple devices or browsers. You don’t want the backend to store any session. Instead, you want the user to carry their identity with every request. **JWT** is like a secure, signed passport carried by the client.

---

### **5. Mini Visual Roadmap**

```
[🔐 Basic Auth (Prev)] 
      ↓
[🛠️ Add JWT Dependencies]
      ↓
[🧾 JWT Utility (Generate, Validate)]
      ↓
[🔓 AuthController → /login]
      ↓
[🔐 SecurityConfig → Stateless]
      ↓
[🔍 Add JWT Filter for Requests]
      ↓
[🔐 Secure APIs using JWT Token]
```

---

### **6. Conceptual Explanation (Notes & Code Walkthrough)**

#### 🧠 What is JWT?

* A compact, URL-safe token format that contains **claims**.
* Consists of **Header + Payload + Signature**.
* Used for **stateless authentication**.

#### 🔐 Why JWT over Sessions?

* Frontend (React) needs API calls → Sessionless.
* Scalable across multiple instances/microservices.
* Secure and flexible.

#### 📄 Token Flow:

1. User logs in → POST `/api/auth/login`
2. Backend validates credentials → returns JWT
3. Frontend stores JWT (e.g., localStorage)
4. All future requests include JWT in `Authorization: Bearer <token>`

---

### **7. Hands-On Implementation**

> Work inside **`E-Library-Backend`** → Create new `security`, `auth`, and `filter` packages for modular design.

---

#### ✅ Step 1: Add JWT Dependency in `build.gradle`

```groovy
implementation 'io.jsonwebtoken:jjwt:0.9.1'
```

---

#### ✅ Step 2: Create `JwtUtil` class

`com.example.ELibrary.security.JwtUtil`

```java
public class JwtUtil {
    private final String SECRET_KEY = "secret123";

    public String generateToken(String username, String role) {
        return Jwts.builder()
            .setSubject(username)
            .claim("role", role)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
            .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
            .compact();
    }

    public Claims extractClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public String extractRole(String token) {
        return (String) extractClaims(token).get("role");
    }

    public boolean isTokenValid(String token, String username) {
        return extractUsername(token).equals(username) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }
}
```

---

#### ✅ Step 3: Create `AuthController`

`com.example.ELibrary.controller.AuthController`

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        // Assume validation is done
        String token = jwtUtil.generateToken(authRequest.getUsername(), "ADMIN");
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
```

Create `AuthRequest` and `AuthResponse` DTOs as POJOs.

---

#### ✅ Step 4: Configure `SecurityConfig` for JWT

```java
http.csrf().disable()
    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    .and()
    .authorizeHttpRequests()
    .requestMatchers("/api/auth/**").permitAll()
    .requestMatchers(HttpMethod.POST, "/api/books/**").hasRole("ADMIN")
    .anyRequest().authenticated()
    .and()
    .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
```

---

#### ✅ Step 5: Create `JwtRequestFilter`

```java
public class JwtRequestFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
        throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        String username = null, jwt = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            jwt = authHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            // Manually authenticate
            UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(username, null, List.of(new SimpleGrantedAuthority("ROLE_ADMIN")));
            SecurityContextHolder.getContext().setAuthentication(token);
        }
        chain.doFilter(request, response);
    }
}
```

---

### **8. Output-Based Assessment**

📌 **Tasks:**

* Hit `/api/auth/login` with valid username → get JWT token.
* Access `/api/books` with `Authorization: Bearer <token>` → Success.
* Access with expired or invalid token → `401 Unauthorized`.
* Access admin endpoints as USER role → `403 Forbidden`.

✅ **Checkpoint:** Learners push code to GitHub with `JwtUtil`, `AuthController`, and `SecurityConfig` implementations.

---

### **9. Interview Preparation**

**Q1:** What is the advantage of JWT over session-based authentication?
**A:** JWT is stateless, scalable, and client-stored — ideal for modern APIs.

**Q2:** How is a JWT validated on the server?
**A:** By verifying the signature and expiration, and extracting claims.

**Q3:** Output-based — What happens if JWT is missing in an API call?
**A:** The request is denied with 401 Unauthorized.

**Q4:** Can JWT be used for role-based access control?
**A:** Yes, roles can be embedded in token claims.

**Q5:** What is the purpose of `OncePerRequestFilter`?
**A:** It ensures JWT is validated once per request and user is authenticated.

---

### **10. Connection to the Next Problem Statement**

**Next Topic:**

> 🔐 *API-Level Security with Refresh Tokens*
> We'll enhance our authentication flow by implementing **refresh tokens**, allowing long-lived sessions without compromising security. We’ll also structure user-role databases for dynamic RBAC instead of hardcoding.

---

