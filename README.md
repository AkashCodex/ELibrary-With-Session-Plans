### 1. **Main Project (PBL Context)**

In our **E-Library Management System**, as the data grows and evolves, we need advanced DB strategies for version control, scalability, and performance.

---

### 2. **Today's Problem Statement (PSBL)**

**Problem Statement:**
Ensure data consistency, performance, and scalability using database evolution tools and horizontal scaling strategies.

**User Stories:**

* As a backend developer, I want to version-control DB schema changes.
* I want to shard large datasets across nodes.
* I want to use partitioning to speed up queries on huge tables.

---

### 3. **Learning Objectives**

By the end of this session, learners will be able to:

✅ Use **Liquibase** for DB migrations
✅ Understand **sharding** and **when to use it**
✅ Understand **partitioning** and its advantages
✅ Apply these strategies in high-scale systems

---

### 4. **Scenario-Based Framing**

Imagine you have millions of book entries growing every day. Manual schema changes are risky. Queries are slowing down. You implement Liquibase for versioning, shard data across DBs, and partition the `Book` table for faster retrieval.

---

### 5. **Mini Visual Roadmap**

**Step 1:** Initialize Liquibase with changelogs
**Step 2:** Create and apply DB migration files
**Step 3:** Understand sharding strategy
**Step 4:** Explore vertical vs horizontal partitioning

---

### 6. **Conceptual Explanation (Code Walkthrough)**

📁 **Liquibase Setup:**

* Add `liquibase-core` in `build.gradle`
* Create `db.changelog-master.xml`

```xml
<changeSet id="1" author="admin">
    <createTable tableName="book">
        <column name="id" type="BIGINT" autoIncrement="true"/>
        <column name="title" type="VARCHAR(255)"/>
    </createTable>
</changeSet>
```

📁 **Liquibase CLI Command:**

```bash
liquibase update
```

📁 **Sharding Strategy:**

* Split `Book` data by region or genre across multiple DBs

📁 **Partitioning Strategy:**

* Use table partitioning in PostgreSQL on year of publication or category

---

### 7. **Hands-On Integration with Project**

* Create a Liquibase changelog for the `Book` entity
* Simulate a sharded DB read/write strategy via service logic
* Use PostgreSQL table partitioning to enhance read performance

---

### 8. **Output-Based Assessment**

✅ Changelog applied and reflected in DB
✅ Book table created via Liquibase
✅ Partitioned table shows faster read time on filtered query
✅ Logs demonstrate DB interaction across simulated shards

---

### 9. **Interview Preparation**

**Q1:** What is Liquibase used for?
→ Database schema versioning and migration tracking.

**Q2:** How is sharding different from partitioning?
→ Sharding spreads data across DBs; partitioning divides within a single DB.

**Q3:** When should you use sharding?
→ When dataset size exceeds what one DB node can handle efficiently.

---

### 10. **Connection to the Next Problem Statement**

Next, we’ll explore **Postman**—an essential tool for backend developers to **test, debug, and automate HTTP API requests** with ease.

---
