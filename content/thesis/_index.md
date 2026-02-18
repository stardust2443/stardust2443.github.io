---
title: "Thesis: Astrophysics (Cosmology)"
---

#### Study of Cosmic Void Size Function using Computational Methods, validating it with simulated catalogs, and applying it to real data from the BOSS survey.

> Advisor: Prof. Federico Marulli (University of Bologna, Italy)    
Co-Advisor: Dr. Simone Sartori (Aix-Marseille Uni, France)

### Technical Stack

C++ • HPC • Shell Scripting • Git • Python (NumPy, Pandas) • Scientific computing

### Transferable Thinking

- Building reproducible analytical pipelines  
- Stress-testing algorithms under data degradation  
- Quantifying uncertainty under structural bias  
- Benchmarking competing methodological frameworks 

At its core, the thesis is about structured problem-solving under incomplete information, a situation that extends far beyond cosmology.

### Overview

Independently secured an international research collaboration at the Department of Physics and Astronomy (DiFA), *University of Bologna, Italy* under **Prof. Federico Marulli**.

Implemented and validated the cosmic void–finding algorithm developed by the University of Bologna Clustering group within **CosmoBolognaLib**, an open source cosmology library developed by Prof. Federico Marulli and collaborators.

Designed and executed a reproducible analysis pipeline to identify cosmic voids in simulated galaxy mock catalogs with large-scale data handling.

### Research Context

Cosmic voids are vast underdense regions within the large-scale structure of the universe, which provide a powerful probe of late-time cosmology.  

The statistical distribution of void sizes (the Void Size Function) is sensitive to dark energy dynamics, neutrinos, and potential deviations from General Relativity.

Traditional geometric void finders, however, are vulnerable to tracer sparsity and tracer bias. They are affected by systematic distortions introduced by incomplete or biased galaxy samples. These effects can propagate directly into cosmological inference.

### Objective

Develop and benchmark a dynamical void-identification framework capable of mitigating tracer-dependent systematics, and evaluate its robustness relative to geometric watershed algorithms.

### Methodology

- Working on the **Back-in-Time Void Finder (BitVF)** within the CosmoBolognaLib.  
- Reconstructed Lagrangian displacement fields using discrete Optimal Transport  
- Applied linear bias inversion to approximate underlying matter distribution  
- Benchmarked performance against REVOLVER/ZOBOV geometric catalogs  
- Validated robustness under severe tracer down-sampling using MultiDark-Patchy mock datasets  

### Key Findings

- Reproduced known sparsity-induced fragmentation in geometric void catalogs  
- Identified tracer bias as a dominant unresolved systematic in geometric approaches  
- Established a structured framework to test whether dynamical reconstruction reduces bias-driven distortions  

### Core Contributions

• Built reproducible data-processing pipeline  
• Structured validation and benchmarking framework  
• Applied statistical modeling to observational datasets  
