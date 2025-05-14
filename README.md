### **1. Main Project (PBL Context)**

**Project Title:** *eLibrary Book Management System*
We’re continuing to build a robust, secure backend for the eLibrary system. In this session, we implement **JWT-based stateless authentication** and secure all API endpoints using **role-based access control (RBAC)** and **Spring Security customization**.

This is critical for modern frontend-backend communication, where **React (frontend)** consumes **REST APIs (backend)**.

---

### **2. Today’s Problem Statement (PSBL)**

**Standard Statement:**
Implement stateless authentication using JWTs in Spring Boot. Customize Spring Security to validate tokens and protect API endpoints with roles.

**User Stories:**

* *As a user,* I want to log in and receive a secure token so that I can access protected APIs.
* *As an admin,* I want to restrict access to critical operations only to authenticated admin users.
* *As a system,* I want to validate every request's token to ensure the requester has permission.

---

### **3. Learning Objectives**

By the end of this session, learners will:

* Understand how JWTs work and why they’re used.
* Implement token generation, validation, and extraction logic in Spring Boot.
* Customize Spring Security for stateless authentication.
* Create secure and role-protected REST APIs.
* Use Postman to test protected endpoints.

---

### **4. Scenario-Based Framing**

> Imagine you're building an eLibrary used by hundreds of students and admins. Each user needs to securely log in and manage their data. Sessions won’t scale — you need a **stateless token system**. JWT allows each user to carry their **own token (passport)** and access only the resources they’re authorized to see — just like role-based entry in a library.

---

### **5. Mini Visual Roadmap**

```
[🔐 Login Endpoint]
   ↓
[🧾 JWT Issued]
   ↓
[📦 Token Stored on Client (React/localStorage)]
   ↓
[📩 Requests → Bearer Token]
   ↓
[🔍 JWT Validated on Backend]
   ↓
[🚫 Unauthorized / ✅ Role-Based Access]
```

---

### **6. Conceptual Explanation (Notes + Code Walkthrough)**

#### ✅ What is JWT?

* JWT = JSON Web Token
* Structure: `Header.Payload.Signature`
* Example Payload: `{ "sub": "user1", "role": "ADMIN" }`
* Secure, compact, stateless token for authentication

---

#### ✅ Why JWT Over Sessions?

* No server-side session storage
* Ideal for frontend-backend decoupled apps
* Scales horizontally (across servers)

---

#### ✅ Spring Security Flow with JWT:

1. `/api/auth/login` → username/password
2. If valid → server returns JWT
3. Client adds JWT to headers: `Authorization: Bearer <token>`
4. Filter intercepts each request → validates token
5. SecurityContext updated → Role-based access enforced

---

### **7. Hands-On Implementation (Integration in Main Project)**

📁 *Project: `E-Library-Backend`*
🧩 *Packages: `controller`, `security`, `service`, `filter`*

---

#### ✅ Step 1: Add JWT Dependency (Gradle)

```groovy
implementation 'io.jsonwebtoken:jjwt:0.9.1'
```

---

#### ✅ Step 2: Create JwtUtil Class

```java
@Component
public class JwtUtil {
    private final String SECRET = "secret123";

    public String generateToken(String username, String role) {
        return Jwts.builder()
            .setSubject(username)
            .claim("role", role)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
            .signWith(SignatureAlgorithm.HS256, SECRET)
            .compact();
    }

    public Claims extractClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
    }

    public String extractUsername(String token) {
        return extractClaims(token).getSubject();
    }

    public boolean isTokenValid(String token, String userDetails) {
        return extractUsername(token).equals(userDetails) &&
               extractClaims(token).getExpiration().after(new Date());
    }
}
```

---

#### ✅ Step 3: Build AuthController

```java
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest req) {
        // Assume authentication is valid
        String token = jwtUtil.generateToken(req.getUsername(), "ADMIN");
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
```

---

#### ✅ Step 4: Configure Spring Security

```java
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired private JwtFilter jwtFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/auth/**").permitAll()
            .antMatchers(HttpMethod.POST, "/api/books/**").hasRole("ADMIN")
            .anyRequest().authenticated()
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
```

---

#### ✅ Step 5: JWT Filter

```java
@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        String token = null, username = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            username = jwtUtil.extractUsername(token);
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UsernamePasswordAuthenticationToken auth =
                new UsernamePasswordAuthenticationToken(username, null,
                    List.of(new SimpleGrantedAuthority("ROLE_ADMIN")));

            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        filterChain.doFilter(request, response);
    }
}
```

---

### **8. Output-Based Assessment**

📌 Tasks:

* ✅ Send POST `/api/auth/login` with valid user → Receive token
* ✅ Use token to access `/api/books` (GET or POST)
* ❌ Test with invalid/missing token → Access denied
* ✅ Role-based restriction works

🔄 **Checkpoint:** Learners must:

* Push implementation to GitHub
* Validate token flow via Postman
* Upload screenshots or logs of working JWT headers

---

### **9. Interview Preparation**

**Q1:** What is the advantage of JWT over sessions?
**A:** Stateless, scalable, secure, no need for server-side session storage

**Q2:** How does Spring Security validate JWTs?
**A:** Using filters (`OncePerRequestFilter`) that intercept requests, parse and validate the JWT, and load user info into `SecurityContext`

**Q3:** What’s inside a JWT?
**A:** Claims (username, roles), issue/expiry time, and a signature

**Q4:** Output: What happens if an expired JWT is sent?
**A:** 401 Unauthorized

**Q5:** Output: What response is received if the token is missing?
**A:** 403 Forbidden or 401 Unauthorized (depending on endpoint config)

---

### **10. Connection to the Next Problem Statement**

**Next Topic →**

> 🧹 *Lombok, SLF4J & Swagger Integration*
> In the next session, we’ll clean up boilerplate code using **Lombok**, add structured logging using **SLF4J**, and introduce **Swagger UI** to automatically generate and test API documentation.

This will improve our backend's maintainability, debugging ability, and frontend-developer collaboration.

---

