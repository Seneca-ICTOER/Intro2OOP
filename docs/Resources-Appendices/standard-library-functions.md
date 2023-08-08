---
id: standard-library-functions
title: Standard Library Functions
sidebar_position: 1
description: TBD
---

# Standard Library Functions

The prototypes for the some common functions in the C++ standard library are listed below. These prototypes and the functions definitions are declared within the `std` namespace. To access one of these functions, we `#include` its parent header file and either expose the entire namespace (`using namespace std;`) or add the `std::` prefix to the function identifier.

## C Library

### `<cstdio>` - Standard and File Input Output

- `int scanf(const char* format, ...)`: Read data from standard input
- `int printf(const char* format, ...)`: Send data to standard output
- `int fscanf(FILE* stream, const char* format, ...)`: Read data from a file stream
- `int fprintf(FILE* stream, const char* format, ...)`: Send data to a file stream

### `<cstring>` - C-Style Null-Terminated Strings

- `size_t`: Non-negative integer type
- `size_t strlen(const char* str)`: The number of characters in a C-style null-terminated string
- `char* strcpy(char* destination, const char* source)`: Copy C-style null-terminated string from `source` address to `destination` address
- `char* strcat(char* destination, const char* source)`: Concatenate C-style null-terminated string from `source` address to the string at the `destination` address
- `int strcmp(const char* str1, const char* str2)`: Compare C-style null-terminated strings at two addresses

### `<cstdlib>` - General Utilities

- `int abs(int i)`: Absolute value of `i`
- `int atoi(const char* str)`: Convert C-style null-terminated string (`str`) to an integer
- `int rand()`: Generate a random number

### `<cmath>` - Numerics

- `double abs(double x)`: Absolute value of `x`
- `float abs(float x)`: Absolute value of `x`
- `double pow(double base, double exponent)`: Raises `base` to the power of `exponent`
- `double sqrt(double x)`: Square root of `x`

### `<cctype>` - Character Handling

- `int toupper(int c)`: Converts `c` to upper case
- `int tolower(int c)`: Converts `c` to lower case
- `int isupper(int c)`: Is `c` upper case?
- `int islower(int c)`: Is `c` lower case?
- `int isalpha(int c)`: Is `c` alphabetic?
- `int isdigit(int c)`: Is `c` a numeric digit?

## Input Output Library

### `<iostream>` - Standard Input Output Objects

- `streamsize`: Integer type
- `fmtflags`: Format flags type
- `char fill(char c)`: Set fill character to `c`
- `fmtflags setf(fmtflags f)`: Set format to `f`
- `fmtflags unsetf(fmtflags f)`: Unset format for `f`
- `streamsize width(streamsize w)`: Set field width to `w`
- `streamsize precision(streamsize p)`: Set floating-point precision to `p`
- `bool good() const`: Good bit is set
- `bool eof() const`: End of file bit is set
- `bool fail() const`: Fail file bit is set
- `bool bad() const`: Bad bit is set
- `bool eof() const`: End of file bit is set
- `void clear()`: Set error state to good

### `<iomanip>` - Parametric Manipulators

- `setfill(char c)`: Set fill character to `c`
- `setw(int w)`: Set field width to `w`
- `setprecision(int p)`: Set floating-point precision to `p`

### `<fstream>` - File Input Output Objects

- `void open(const char* f, ...)`: Open file named `f` and associate it with the current object
- `void close()`: Close file associated with current object
