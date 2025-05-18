# Pie in Source Academy

View the source code at: <https://github.com/source-academy/pie-slang>.

> ***Program testing can be used to show the presence of bugs, but never to show their absence.***
>
> — Edsger W. Dijkstra

## Motivation

The need for formal verification arises in critical software systems where runtime bugs carry enormous costs - operating system kernels, public transit systems, and compilers. While complete formal verification of all software remains unattainable, these high-stakes domains demand rigorous verification approaches.

However, formal verification's steep learning curve deters many professionals and students alike. Mainstream proof assistants like *Lean* and *Coq*, while powerful, introduce considerable complexity through their extensive libraries and advanced features. While these features benefit experienced proof engineers, they create significant barriers for newcomers.

*Pie* represents a deliberate simplification, stripping away unnecessary complexity to focus on the fundamental concepts: dependent type systems and the Curry-Howard Correspondence that connects proofs and programs. By integrating *Pie* with *Source Academy*, we further enhance its accessibility, creating an approachable entry point for students and practitioners to explore computer-assisted proving without the overwhelming complexity of industrial-grade systems.

This educational bridge helps learners grasp the core principles before potentially transitioning to more comprehensive proof assistants, fostering broader adoption of formal methods in software development.

## Introduction

### What is Pie

[Pie](https://thelittletyper.com) is a minimalistic dependently-typed programming language designed for education, as described in "The Little Typer" by Daniel P. Friedman and David Thrane Christiansen. Unlike industrial-strength proof assistants, Pie focuses on clarity and simplicity while still demonstrating the core concepts of dependent types. The interpreter is originally implemented in Racket, and we translate it into Typescript to allow running in browsers.

### What is Source Academy

[Source Academy](https://about.sourceacademy.org) is an online experiential environment for computational thinking. Developed for courses that use the book Structure and Interpretation of Computer Programs, JavaScript Edition (SICP JS), the environment is currently supporting TypeScript and JavaScript, and educational sublanguages of Java, C, Python, and Scheme (And now Pie as well).

## Key Features

- A minimalist dependently-typed programming language
- Bidirectional type checking
- Normalization by evaluation (NbE)
- Tactical theorem proving (In progress)
- S-expression syntax inspired by Lisp/Scheme

## How Does the Prover Work

### Expressive Type System

- Universe Hierarchy
    Pie has a single universe level, with ```U``` being the type of types, which is equivalent to the ```Type``` in Lean or ```Type0``` in Coq.

- Core Types
  - Dependent Function Types (Π-types):

    ```(Π ((x Nat)) (Vec Atom x))```

    ```(-> Nat Nat)```

    This type should be read as "for all..." in propositions.

    For example, this type:

    ```()
    (Π ((n Nat)) 
      (Π ((m Nat)) 
        (-> (Vec Atom n) (Vec Atom m) 
          (Vec Atom (+ n m)))))
    ```

    should be read as: *"For all natural numbers n, for all natural numbers m, there is a function that takes a vector of atoms of length n and a vector of atoms of length m and returns a vector of atoms of length n+m."*
  - Dependent Pair Types (Σ-types):  

    ```(Σ ((n Nat)) (Vec Atom n))```

    ```(Pair Nat Nat)```

    This type should be read as "there exists..." in propostions.

    ```()
    (Π ((a Nat)) 
      (Π ((b Nat)) 
        (-> (> b 0)
          (Σ ((q Nat)) 
            (Σ ((r Nat))
              (and (= a (+ (* b q) r)) (< r b)))))))
    ```

    This type should be read as: "For all natural numbers a, for all natural numbers b where b is greater than 0, there exists a quotient q and a remainder r such that a = b × q + r and r < b."

### Proof Methods in Pie

- Equality Proofs: There are 5 proof methods built-in in Pie. Here they are.

  ```(racket)
  ; Reflexivity
  (same e)  ; Proves (= T e e)

  ; Symmetry 
  (symm eq)  ; If eq : (= T a b), then (symm eq) : (= T b a)

  ; Transitivity
  (trans eq1 eq2)  ; If eq1 : (= T a b) and eq2 : (= T b c), then (trans eq1 eq2) : (= T a c)

  ; Congruence
  (cong eq f)  ; If eq : (= T a b) and f : (-> T S), then (cong eq f) : (= S (f a) (f b))

  ; Substitution
  (replace eq mot base)  ; If eq : (= T a b), mot : (-> T U), base : (mot a), 
                        ; then (replace eq mot base) : (mot b)
  ```

- Induction Proof: Pie provides induction principles for its built-in inductive types.

  ```()
    ; Natural number induction
    (ind-Nat n motive base step)

    ; List induction
    (ind-List xs motive base step)

    ; Vector induction
    (ind-Vec n xs motive base step)

    ; Equality induction
    (ind-= eq motive base)
  ```

- Ex Falso Quodlibet (Proof by contradiction)
  
  ```()
  ; Derive anything from a contradiction
  (ind-Absurd absurd target-type)
  ```

## System Architecture

### High-Level Overview

The Pie interpreter follows a three-level architecture that separates syntax, elaborated expressions, and runtime values:

  ```
  ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
  │    Source   │─────▶│    Core     │─────▶│    Value    │
  │ (User Code) │      │(Elaborated) │      │ (Runtime)   │
  └─────────────┘      └─────────────┘      └─────────────┘
                                                  │
                                                  ▼
                                            ┌─────────────┐
                                            │    Core     │
                                            │ (Normalized)│
                                            └─────────────┘
  ```
  
The system processes Pie code through several stages:

1. Parsing: Convert text to Source AST
2. Type Checking: Transform Source to Core while checking types
3. Evaluation: Execute Core to produce Values
4. Normalization: Convert Values back to Core for comparison

### Parsing System

The parser converts input strings to abstract syntax trees (ASTs) in two stages:

- Scheme Parser: Converts the input into a Scheme-like S-expression
- Pie Parser: Converts the S-expression into a Pie-specific AST

Parser flow: ``` Input String → Scheme Lexer → Scheme Parser → Pie Parser → Source AST ```

### Main Components

#### Source

Source represents the original syntax as written by the programmer:

- Contains location information for error reporting
- Defines type checking methods (check, synth, isType)
- Describes the syntactic structure before elaboration

#### Core

Core represents the elaborated, fully type-checked expressions:

- Focused on evaluation and normalization
- Serves as the intermediary between source syntax and runtime values

#### Value

Value represents the semantic meaning of expressions during evaluation:

- Captures runtime values during type checking and execution
- Has methods for normalization (converting back to Core)
- Includes lazy evaluation support through the now() method

### Type Checker

The type checker verifies that Pie programs are well-typed, following bidirectional type checking with three primary operations:

  **Type Checking Flow:**

  ```()
   ┌────────────┐
   │ Expression │
   └─────┬──────┘
         │
      ┌──▼──┐ No   ┌───────────┐
      │Synth├──────▶ Check     │
      └──┬──┘      │ Against T │
         │ Yes     └─────┬─────┘
         │               │
   ┌─────▼───────┐  ┌────▼─────┐
   │  Type T +   │  │Elaborated│
   │Elaborated E │  │    E     │
   └─────────────┘  └──────────┘
  ```

- **isType**: Verifies that an expression is a valid type
- **synth**: Synthesizes the type of an expression without a type annotation
- **check**: Verifies that an expression has a given type

### Evaluator (Normalization)

The evaluator implements the operational semantics of Pie expressions through a call-by-need evaluation strategy:

  **Normalization process:**

  ```()
  ┌──────┐    ┌──────┐    ┌──────┐
  │ Core │───▶│Value │───▶│ Core │
  └──────┘    └──────┘    └──────┘
    valOf       now/     readBack
              readBack
  ```

- **Value Evaluation**: Each Core expression has a valOf method that evaluates it to a Value
- **Specialized Evaluators**: Functions like doApp, doIndNat, etc. handle different expression types
- **Normalization by Evaluation**: The readBack functions convert Values back to Core expressions
- **Call-by-need Evaluation**: Uses lazy evaluation through the Delay type and now() method

### Error Handling

The error handling system uses a monadic approach with ```Perhaps<T>```:

  **Error Handling Flow:**

  ```
  ┌────────────┐   success   ┌────────────┐
  │ Operation1 ├─────────────▶ Operation2 │
  └─────┬──────┘             └─────┬──────┘
        │ failure                  │ failure
        ▼                          ▼
  ┌────────────┐            ┌────────────┐
  │  Error     │            │  Error     │
  │  Message   │            │  Message   │
  └────────────┘            └────────────┘
  ```

- ```Perhaps``` **Type**: Represents computations that might succeed or fail
- ```go<T>```: Contains a successful result of type T
- ```stop```: Contains an error message and location
- ```PerhapsM``` **Type**: A mutable container for passing results from computations
- ```goOn``` **Function**: Sequences computations that may fail

### Tactics System

The tactics system enables structured proof development:

- **ProofState**: Tracks current goals and proof environment
- **Tactics**: Operate on the ProofState to transform goals
- **ProofManager**: Manages the application of tactics to proofs

Please see the repository and the book *"The Little Typer"* for more insights.
