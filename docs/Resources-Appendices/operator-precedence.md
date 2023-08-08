---
id: operator-precedence
title: Operator Precedence
sidebar_position: 3
description: TBD
---

# Operator Precedence

The precedence order of the operators covered in these notes is important in the evaluation of compound expressions. A compound expression consists of several sub-expressions. Different orders of evaluation are possible in such expressions. That is, the results of evaluating the entire compound expression depend on the order of evaluating its sub-expressions.

To ensure unique evaluation of all compound expressions, C++ defines rules of precedence on the operators in a compound expression. This order is from top to bottom in the table shown below. The operators associate operands in each sub-expression as noted in the right column, mostly from left to right.

|                                                   Operator                                                   | Associate From |
| :----------------------------------------------------------------------------------------------------------: | :------------: | --- | ------------- |
|                                                     `::`                                                     | Left to right  |
|                                 `[ ]` `.` `->` `++` (postfix) `--` (postfix)                                 | Left to right  |
| `++` (prefix) `--` (prefix) `+` `-` `&` `!` (all unary) `new` `new[]` `delete` `delete[]` `(type)`, `type()` | Right to left  |
|                                                  `.*` `->*`                                                  | Left to right  |
|                                                 `*` `/` `%`                                                  | Left to right  |
|                                                   `+` `-`                                                    | Left to right  |
|                                                  `>>` `<<`                                                   | left to right  |
|                                              `<` `<=` `>` `>=`                                               | Left to right  |
|                                                  `==` `!=`                                                   | Left to right  |
|                                                     `&&`                                                     | Left to right  |
|                                                      `                                                       |                | `   | Left to right |
|                                         `=` `+=` `-=` `*=` `/=` `%=`                                         | Right to left  |
|                                                     `?:`                                                     | Left to right  |
|                                                     `,`                                                      | Left to right  |

The scope resolution operator `::` has the highest precedence. An expression containing this operator is always evaluated first.

We can change the order of evaluation within a compound expression by enclosing a sub-expression in parentheses. That is, we use `(sub-expression)` to evaluate `sub-expression` before applying the rules of precedence to the entire expression.

For example,

```console
  2 + 3  * 5 evaluates to 2 + 15 which evaluates to 17.
 (2 + 3) * 5 evaluates to 5 * 5  which evaluates to 25.
```
