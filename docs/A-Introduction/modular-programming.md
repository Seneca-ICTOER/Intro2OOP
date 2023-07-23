---
id: modular-programming
title: Modular Programming
sidebar_position: 3
description: TBD
---

Part A - Introduction

# Modular Programming

- Partition source code into modular solution
- Compile modules on Linux and Windows platforms

A modular design consists of a set of **modules**, which are developed and tested separately. Modular programming implements modular designs and is supported by both procedural and object-oriented languages. The C programming language supports modular design through library modules composed of functions. The `stdio` module provides input and output support while hiding its implementation details; typically, the implementation for `scanf()` and `printf()` ships in binary form with the compiler. The `stdio.h` header file provides the interface, which is all that we need to complete our source code.

This chapter describes how to create a module in an **object-oriented language** using C++, how to compile the source code for each module separately and how to link the compiled code into a single executable binary. The chapter concludes with an example of a unit test on a module.

## MODULES

A well-designed module is a highly cohesive unit that couples loosely to other modules. The module addresses one aspect of the programming solution and hides as much detail as practically possible. A compiler translates the module's source code independently of the source code for other modules into its own unit of binary code.

Consider the schematic of the Transaction application shown below. The `main` module accesses the `Transaction` module. The `Transaction` module accesses the `iostream` module. The `Transaction` module defines the transaction functions used by the application. The `iostream` module defines the `cout` and `cin` objects used by the application.

![Transaction](/img/11-Transaction.png)

To translate the source code of any module the compiler only needs certain external information. This information includes the names used within the module but defined outside the module. To enable this in C++, we store the source code for each module in two separate files:

- a header file - defines the class and declares the function prototypes
- an implementation file - defines the functions and contains all of the logic

The file extension `.h` (or `.hpp`) identifies the header file. The file extension `.cpp` identifies the implementation file.

> Note, however, that the names of the header files for the standard C++ libraries do not include a file extension (consider for example, the `<iostream>` header file for the `cout` and `cin` objects).

### Example

The implementation file for the `main` module includes the header files for itself (`main.h`) and the _Transaction_ module (`Transaction.h`). The main.h file contains definitions specific to the main module and the `Transaction.h` file contains definitions specific to the _Transaction_ module.

The implementation file for the _Transaction_ module includes the header files for itself (`Transaction.h`) and the `iostream` module. The `Transaction.h` file contains definitions specific to the _Transaction_ module and the `iostream` file contains definitions specific to the `iostream` module.

An implementation file can include several header files but DOES NOT include any other implementation file. Note the absence of any direct connections between the implementation files.

![Transaction Module](/img/12-TransactionModule.png)

We compile each implementation (`*.cpp`) file separately and only once. We do not compile header (`*.h`) files (since they are already included in the implementation files).

![CPP files](/img/13-cppfiles.png)

A compiled version of `iostream`'s implementation file is part of the system library.

# STAGES OF COMPILATION

Comprehensive compilation consists of three independent but sequential stages (as shown in the figure below):

1. **Preprocessor**: Interprets all directives creating a single translation unit for the compiler - (inserts the contents of all `#include` header files), (substitutes all `#define`macros)
2. **Compiler**: Compiles each translation unit separately and creates a corresponding binary version
3. **Linker**: Assembles the various binary units along with the system binaries to create one complete executable binary

![Compiler](/img/14-compiler.png)

# A MODULAR EXAMPLE

Consider a trivial accounting application that accepts journal transactions from the standard input device and displays them on the standard output device. For presentation simplicity, the application does not perform any intermediate calculation.

The application design consists of two modules:

- **Main**: supervises the processing of each transaction
- **Transaction**: defines the input and output logic for a single transaction

## Transaction Module
