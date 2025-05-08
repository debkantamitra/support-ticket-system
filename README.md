# 🛠️ Mini Support Ticket System

A simple interactive project to deeply understand how JavaScript’s `call`, `apply`, and `bind` methods work in real-world scenarios.

## 📌 What It Does

This is a minimal front-end app that simulates a helpdesk with support agents. A shared `handleTicket` function is assigned to different agents using:

- `call()` – direct invocation with a custom `this`
- `apply()` – like `call()`, but with arguments as an array
- `bind()` – returns a new function with bound context for later execution

Clicking the buttons logs which agent handled which ticket using each method.

---
