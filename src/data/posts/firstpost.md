### Propositional Logic - Syntax
#### 1. What Is Proposition?
- S1: It rained today in SG.
	- yield yes or no, it is a proposition.
- S2: It snowed today in SG.
	- yield yes or no, it is a proposition.
- S3: What is your name? 
	- not a proposition.
- S4: Close the door.
	- not a proposition.
$~$
Generally speaking, a **Proposition / Statement** is a mapping from assertion content to Boolean.

#### 2. Propositions, Connectives and Formulae
- We now have a set for Propositions: $P = \{p_1,p_2,p_3,...\}$, and  for Connectives: $C = \{\neg, \lor, \land \}$, then we can construct **Formulae** $F = \{f_1,f_2,...\}$ from these.
##### 2.1. Non-formal Definition of Formula
- A **Formula** in propositional logic is either a **Proposition itself**, or is obtained by application of connectives to Formula.
$~$
- Inductive version:
	A Formula is constructed from:
		(a) $p_0 \in P$
		(b) $\neg f \in FORMULA$
		(c) $f_1 \in FORMULA \lor f_1 \in FORMULA$
		(d)$f_1 \in FORMULA \land f_1 \in FORMULA$
$~$
- This definition seems plausible at first glance, but unfortunately it uses the concept ***Formula*** itself when doing recursion, when the concept **Formula** is being defining.

#### 2.2. Formal Definition of Formula

##### 2.2.1. Concepts needed

- To circumvent this situation, we may need to define the complete set of **Formulae** as a whole, instead of define the individual **Formula**.
$~$
- Let give the complete *set of Formulae* a name: ***Form***, from now on this will be the set of "well-formed formulae".
$~$
- To avoid using *Formulae*, we may need String, which was defined in discrete math course.
	Here is a brief recap, A string over $S=\{w_1, w_2, w_3,...\}$  is defined as a sequence build by character $c \in S$. Strings can be appended.
$~$
- Consider $S =P \cup C$, let the **Set of Strings** to be $\Delta^*$ 
	To be precise, $\Delta^*=\{p_1\lor p_2,p_1,\neg,...\}$,
	also, $\Delta^*$ is countable.
$$ \begin{align*} \text{Proof:} \\
		  &\text{Consider decompose } \Delta^*=\bigcup_{n \in \mathbb{N}} \Delta^n,\text{ where } \Delta^n  \text{ is the set of strings with length n. }\\
		  & \text {Union of countably many countable sets is Countable, }\\ &\text{consider it cardinality is } |\mathbb{N} \times c| < |\mathbb{N} \times \mathbb{N}|.
		  \end{align*} $$ 
##### 2.2.2. Close Sets in $\Delta^*$

- To approaching the plausible version of Formula as a whole, we need to define a concept named Close Set. The definition of Close Set, as can be observed below, is very similar to the induction made above, but this time, no **circular definition** happen.
$~$
- A set $S \subseteq \Delta^*$ is said to be closed if
	-  $\forall p \in P,( p) \; \in S$
	-  $\forall \phi \in S$, then $\neg(\phi) \in S$
	-  $\forall \phi_1, \phi_2 \in S$, then $(\phi_1)\lor (\phi_2) \in S$
	-  $\forall \phi_1, \phi_2 \in S$, then $(\phi_1)\land (\phi_2) \in S$
$~$
- $S$ is countable, since $\Delta^*$ is countable
$~$
- The **Form**, $F$, is the smallest set among all the Closed Sets $\subseteq \Delta^*$ , where smallest is defined using "$\subseteq$" relation. the set formed by all Closed Sets will be hereon called as $O^*$
##### 2.2.3. Properties of Form
- **Claim 1: $F$ exists among $O^*$**
$$ \begin{align*} \text{Proof:} \\
		  &\text{Simply take } F = \bigcap_{O*}S \\
		  &(a) \;\forall S \in O^*, F \subseteq S \iff F\text{ is smallest} \\
		  &(b) \;\forall S \in O^*, P \subseteq S \iff P \subseteq F \\
		  &(c) \;\forall \phi \in F, \forall S \in O^*, \phi \in S\\
		  &\;\;\;\;\;\;\text{by the definition of O*, }\neg\phi \in S \iff \neg\phi \in \bigcap_{O*}S \iff \neg\phi \in F \\
		  &(d) \;\forall \phi_1, \phi_2 \in F, \forall S \in O^*, \phi_1, \phi_2 \in S \\
		  &\;\;\;\;\;\;\text{by the definition of O*, }(\phi_1)\lor (\phi_2) \in S \iff (\phi_1)\lor (\phi_2) \in \bigcap_{O*}S \iff (\phi_1)\lor (\phi_2) \in F \\
		  &(e) \;\forall \phi_1, \phi_2 \in F, \forall S \in O^*, \phi_1, \phi_2 \in S \\
		  &\;\;\;\;\;\;\text{by the definition of O*, }(\phi_1)\land (\phi_2) \in S \iff (\phi_1)\land (\phi_2) \in \bigcap_{O*}S \iff (\phi_1)\land (\phi_2) \in F \\
		  \end{align*} $$
So $F$ by this construction is the **Form**.
$~$
- **Claim 2: $F$ is unique in $O^*$**
$$ \begin{align*} \text{Proof:} \\
		  &\text{Suppose there is 2 smallest sets, namely }S_1, \; S_2, \text{ defined by } \subseteq \text{relation in } O^*. \\
		  &\text{By definition, we have:} S_1 \subseteq S_2, \text{ conversely, }S_2 \subseteq S_1.\\
		  &\text{Hence, } S_1=S_2.  
		  \end{align*} $$
- **Claim 3: '$\neg$' $\notin$ $F$**
	- *Sub-claim 1*：$\forall S_1, S_2 \in O^*, \; S_1 \cap S_2 \in O^*$, this is easy to prove.
	- *Sub-claim 2*: $\forall c \in C$, remove $c$ from $\Delta^*$ will produce a closed set $S_1$.
		$$ \begin{align*} \text{Sub-claim 2 Proof:} \\
		  &\text{(a) it's trivial that }P \subseteq S_1 \\
		  &\text{(b)} \forall \phi \in S_1,\;\phi \in \Delta^* \land (\phi \neq \neg) \implies \neg \phi \in \Delta^* \implies \neg\phi \in S_1 \\
		  &\text{the proof for } \land, \lor\text{ are skipped since very similar to (b) }
		  \end{align*} $$  
		$$ \begin{align*} \text{Proof:} \\
		  &\text{Suppose } \neg \in F,\\
		  &\text{Consider } S_1 = \Delta^*/\{\neg\},\text{ By SC1 } S_1 \in O^*\\
		  &\text{By SC2, } S_1 \cap F \in O^*, \implies \neg \notin S_1 \cap F
\implies S_1 \cap F \subset F,\\ &\text{ which is contradictory to the fact that F is smallest.}		  \end{align*} $$

Using the same method used when proving **Claim 3**, one can prove all undesirable strings are not in *$F$*.
$~$
***Now the "Form" have been proved for existence, uniqueness, and "purity". Definition of Formula finished***



