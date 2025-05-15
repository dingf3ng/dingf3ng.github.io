### Propositional Logic - Applications

### 1. Introduction

#### 1.1.  example

- Given Computational Problem:
  - **Input**: Graph - $G(V,E)$
  - **Output**: $True \iff$ $G$ has a cycle
  - $L_{cycle} = \{G \mid G\text{ has a cycle}\}$. $G$ has a cycle $\iff G \in L_{cycle}$

#### 1.2. Conversion to Satisfiability Checking

- Through some **translation**, a certain computational problem can be converted into a satisfiability checking problem.
- Computational problem $\xrightarrow{reduction}$ Satisfiability checking
  - 1; $\Phi_G$, the **Formulae** generated, is only polynomially **larger** than $|G|$
  - 2; $G$ is cyclic $\iff \Phi_G$ is satisfiable
- Definition of the **Size of a Formula**: Number of sub-formulae.

### 2. $\mathcal{K}$-Coloring Problem

#### 2.1. Identify the problem

- Given a **Graph**: $G =(V, E)$, a **set of colors** $C=\{1,2,3,..., k\}$, and a **map called k-coloring scheme**: $\lambda: V \to C, s.t. \forall (u, v) \in E, \lambda(u) \neq \lambda(v)$
- $G$ is said to be **k-colorable** if there exist a k-coloring for it.
- $L_{coloring}$ = $\{(G, k) \mid \text{G is k-colorable}\}$

#### 2.2. Translation to Formulae

- Let the **proposition set** $P = \{p_{u, i} \mid u \in V,\; i \in C\}$, which means the vertex $u$ with color $i$.
- Note that for a valid color scheme, **not only** at least *(1) a $\lambda$ exists*, but also *(2) $\forall p_{u,i},\;p_{u,j} \in P,\;i=j$*, that is the color for each node is unique.
- Now lets construct the formula $\phi_{G,k}$.
  - $\phi_{G, k} = \phi_{G, k}^{=1} \land \phi_{G, k}^{valid}$, *Explanation: The formula is the conjunction of the formulae that obey the above rules.*
  - $\phi_{G, k}^{u_0, =1} = \bigvee_{i \in C} \bigwedge_{j \neq i, j \in C} (p_{u_0, i} \land \neg p_{u_0, j})$, *Explanation: for arbitrary vertex $u_0$, the color scheme is unique.*
  - $\phi_{G, k}^{valid}= \bigwedge_{\{u, v\}\in E}\bigwedge_{i\in C} \neg(p_{u,i}\land p_{v,i})$, *Explanation: for all adjacent vertex pairs, none of them can have the same color.*
  - We have now:$$\phi_{G,k}=(\bigwedge_{u_0 \in V} \phi_{G,k}^{u_0,=1}) \land \phi_{G, k}^{valid}$$
- Theorem 1: $\phi_{G,k}$ is satisfiable $\iff$ G is $\mathcal{K}$-Colorable, which can be proved easily.
- Theorem 2:  $|\phi_{G,k}|$ is polynomially larger than $|V|,|E|$ and $|C|$

### 3. $4^\infty-$ Color Theorem

#### 3.1 $4-$Color Theorem

- Statement: For **Finite** Graph $G$, $G$ is planar $\rightarrow$ $G$ is $4-colorable$.

#### 3.2 $4^\infty-$ Color Theorem

- Statement: For **Infinite** Graph $G$, $G$ is planar $\rightarrow$ $G$ is $4-colorable$.

$$
 \begin{array}{c c} \text{G is planar} & \text{G is 4-colorable} \\ \downarrow & \updownarrow\mathcal{B} \\ \forall G_0 \subset_{\text{finite}} G, \ G_0 \ \text{is planar} & \Gamma_G \ \text{is finitely satisfiable} \\ \downarrow & \updownarrow \mathcal{A} \\ \forall G_0 \subset_{\text{finite}} G, \ G_0 \ \text{is } 4- colorable &\iff \forall G_0 \subset_{fin} G, \Gamma_{G_0} \ \text{is satisfiable} \end{array}
$$

##### $\mathcal{Lemma \;A:}$ $\forall G_0 \subset_{fin}G, \Gamma_{G_0}$ is satisfiable $\iff \Gamma_G$ is finitely satisfiable

$(\rightarrow)\;\forall G_0 \subset_{fin}G, \Gamma_{G_0}$ is satisfiable $\rightarrow \Gamma_G$ is finitely satisfiable

- Now given arbitrary $\Gamma_0 \subset_{fin} \Gamma$. Denote $V\mid \Gamma_0$ as those vertices that occurs in $\Gamma_0$, and let $V_0=V\mid \Gamma_0$. The set $\Gamma_0$ might not be completed for $V_0$. (By "not completed", I mean that if we encode for the subgraph that contains $V_0$ and edges between them, the result $\Gamma'_0$ will be completed for $V_0$, otherwise it is "not completed"). Now complete $\Gamma_0$ as $\Gamma'_0$  by those rules. We can show that $\Gamma_0\subseteq \Gamma'_0$. Now produce $G_{\Gamma'_0}=(V_0,E_0)$, we have $\Gamma'_0$ satisfiable as it is a encoding of a subgraph. And hence by $\Gamma_0\subseteq \Gamma'_0$, $\Gamma_0$ is satisfiable.
$(\leftarrow)\;\Gamma_G$ is finitely satisfiable $\rightarrow \forall G_0 \subset_{fin}G, \Gamma_{G_0}$ is satisfiable
- this direction can be shown by same strategy.

##### $\mathcal{Lemma \;B:}$ $G$ is $4-colorable$ $\iff$ $\Gamma_G$ is satisfiable

$(\rightarrow)$ $\Gamma_G$ is satisfiable $\rightarrow$ $G$ is $4-colorable$

- According to the existing coloring scheme, construct a function $\lambda$ , $\lambda: v_0 \in V\to\{1,2,3,4\}$ $s.t.$ $v(p_{u,i}) = true \iff \lambda(u)=i$, otherwise false. It's not hard to notice that this $v$ is valid.
$(\leftarrow)$ If G is $4-colorable$ $\rightarrow$  $\Gamma_G$ is satisfiable
- Now we know $\exists v, s.t.\; v \models \Gamma_G$, then construct the color scheme as $\lambda: v_0 \in V \to \{1,2,3,4\}$, $\lambda(u)=i \iff v(p_{u,i})=true$. Easy to observe that $\lambda$ is valid.

### 4. Encoding Technics For  "$\leq k$"  Constraints

#### 4.1 Background

- Encoding the requirement involves validate all subsets of size $\leq k$ could introduce non-polynomial formula size. Here are possible solutions.

#### 4.2 Binary Encoding

to be continued...

#### 4.3 Sequencial Counter Encoding

to be continued...