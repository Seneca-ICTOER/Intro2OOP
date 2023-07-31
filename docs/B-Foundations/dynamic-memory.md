---
id: dynamic-memory
title: Dynamic Memory
sidebar_position: 2
description: TBD
---

# Dynamic Memory

Part B - Foundations

- Describe the two kinds of system memory available
- Allocate and deallocate memory dynamically
- Identify common issues associated with dynamic memory

> "Avoid allocating and deallocating in different modules" (Sutter, Alexandrescu, 2005)

Various components of object-oriented programs can be reused by other applications. An important aspect of object designing is including flexibility in their memory requirements to enhance reusability. Objects are more reusable by different clients if they account for their own memory needs internally. These memory requirements may depend on problem size, which might not even be known approximately at compile-time. Programming languages address this aspect of reusability by supporting dynamic memory allocation.

This chapter introduces the C++ syntax for allocating and deallocating memory dynamically. The chapter entitled Classes and Resources augments this material with the details required to code classes that manage dynamic memory internally.

# STATIC AND DYNAMIC MEMORY

The memory accessible by a C++ program throughout its execution consists of static and dynamic components. After the user starts an application, the operating system loads its executable into RAM and transfers control to that executable's entry point (the `main()` function). The loaded executable only includes the memory allocated at compile time. During execution, the application may request more memory from the operating system. The system satisfies such requests by allocating more memory in RAM. After the application terminates and returns control to the operating system, the system recovers all of the memory that the application has used.

# Static Memory

The memory that the operating system allocates for the application at load time is called static memory. Static memory includes the memory allocated for program instructions and program data. The compiler determines the amount of static memory that each translation unit requires. The linker determines the amount of static memory that the entire application requires.
