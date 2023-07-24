---
id: types-overloading-and-references
title: Types, Overloading and References
sidebar_position: 1
description: TBD
---

# Types, Overloading and References

Part B - Foundations

- Review types, declarations, definitions and scoping
- Introduce overloading and function signatures
- Introduce pass by reference and compare it to pass by address

> Correctness, simplicity, and clarity comes first" (Sutter, Alexandrescu, 2005)

Object-oriented languages inherit from their non-object-oriented predecessors the concepts of variable declarations, data types, data structures, logic constructs, and modular programming. The C++ language inherits these features from the C language (see [IPC Notes](https://intro2c.sdds.ca/) for a detailed exposition).

This chapter elaborates on these inherited concepts and introduces the new concepts of references and overloading, which the C++ language adds to its C core. This chapter concludes with a section on arrays of pointers, which is important later in the design of polymorphic objects.

## TYPES

The built-in types of the C++ language are called its fundamental types. The C++ language, like C, admits struct types constructed from these fundamental types and possibly other struct types. The C++ language standard refers to struct types as compound types. (The C language refers to struct types as derived types.)

### Fundamental Types

The fundamental types of C++ include:

- Integral Types (store data exactly in equivalent binary form and can be signed or unsigned)
  - bool - not available in C
  - char
  - int - short, long, long long
- Floating Point Types (store data to a specified precision - can store very small and very large values)
  - float
  - double - long double

#### bool

The bool type stores a logical value: true or false.

The ! operator reverses that value: !true is false and !false is true.

! is self-inverting on bool types, but not self-inverting on other types.

##### bool to int

Conversions from bool type to any integral type and vice versa require care. true promotes to an int of value 1, while false promotes to an int of value 0. Applying the ! operator to an int value other than 0 produces a value of 0, while applying the ! operator to an int value of 0 produces a value of 1. Note that the following code snippet displays 1 (not 4)

```C++
int x = 4;
cout << !!x;

```

Output:

```text
1
```

Both C and C++ treat the integer value 0 as false and any other value as true.

## Compound Types

A compound type is a type composed of other types. A struct is a compound type. An object-oriented class is also a compound type. To identify a compound type we use the keywords struct or class. We cover the syntax for classes in the following chapter.

For example,

```c++
// Modular Example
// Transaction.h

struct Transaction {
    int acct;      // account number
    char type;     // credit 'c' debit 'd'
    double amount; // transaction amount
};
```

The C++ language requires the keyword identifying a compound type only in the declaration of that type. The language does not require the keyword struct or class in a function prototype or an object definition. Note the first code snippet below. Recall that the C language requires the keyword struct throughout the code as listed in the code snippet for C example below.

### C++ example

```C++
 // Modular Example - C++
 // Transaction.h

 struct Transaction {
     int acct;
     char type;
     double amount;
 };
 void enter(Transaction*);
 void display(const Transaction*);
 // ...

 int main() {
     Transaction tr;
     // ...
 }
```

### C example

```C
 // Modular Example - C
 // Transaction.h

 struct Transaction {
     int acct;
     char type;
     double amount;
 };
 void enter(struct Transaction*);
 void display(const struct Transaction*);
 // ...

 int main() {
     struct Transaction tr;
     // ...
 }
```

## `auto` Keyword

The `auto` keyword was introduced in the C++11 standard. This keyword deduces the object's type directly from its initializer's type. We must provide the initializer in any `auto` declaration.

For example,

```C++
     auto x = 4;   // x is an int that is initialized to 4
     auto y = 3.5; // y is a double that is initialized to 3.5
```

`auto` is quite useful: it simplifies our coding by using information that the compiler already has.
