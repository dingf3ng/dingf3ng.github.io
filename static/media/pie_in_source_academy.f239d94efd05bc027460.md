# Pie in Source Academy

View the source code at: <https://github.com/source-academy/pie-slang>.

## Introduction

### What is Pie

[Pie](https://thelittletyper.com) is a small dependently-typed programming language designed for education, as described in "The Little Typer" by Daniel P. Friedman and David Thrane Christiansen. Unlike industrial-strength proof assistants, Pie focuses on clarity and simplicity while still demonstrating the core concepts of dependent types.

### What is Source Academy

[Source Academy](https://about.sourceacademy.org) is an online experiential environment for computational thinking. Developed for courses that use the book Structure and Interpretation of Computer Programs, JavaScript Edition (SICP JS), the environment is currently supporting TypeScript and JavaScript, and educational sublanguages of Java, C, Python, and Scheme (And now Pie as well).

## Key Features

- A minimalist dependently-typed programming language
- Bidirectional type checking
- Normalization by evaluation (NbE)
- Tactical theorem proving (In progress)
- S-expression syntax inspired by Lisp/Scheme

## How Does the System Work

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
