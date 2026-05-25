---
title: "Thesis"
description: "Cosmic Void Size Function: cosmological parameter estimation using computational methods — Arun Mitra Kommireddy."
toc: true
---

#### Study of the Cosmic Void Size Function using Computational Methods

*Computational Cosmology — University of Bologna, Italy*

> Advisor: Prof. Federico Marulli (University of Bologna)  
> Co-Advisor: Dr. Simone Sartori (Aix-Marseille University)

---

### Overview

Independently secured an international research collaboration at the Department of Physics and Astronomy (DiFA), *University of Bologna, Italy* through direct faculty outreach. Working within **CosmoBolognaLib**, an open-source cosmology library developed by Prof. Federico Marulli and collaborators.

The work spans two phases: building and validating a void-finding pipeline, then using it to infer cosmological parameters via Bayesian inference.

---

### Research Context

Cosmic voids — the vast underdense regions of the large-scale structure — are sensitive probes of late-time cosmology. The statistical distribution of void sizes, the **Void Size Function (VSF)**, carries information about dark energy dynamics, neutrino masses, and potential departures from General Relativity.

The challenge is methodological: geometric void-finders are vulnerable to tracer sparsity and tracer bias, distortions introduced by incomplete or biased galaxy catalogs that propagate directly into cosmological inference.

---

### Phase 1 — Pipeline Validation

Designed and executed a reproducible analysis pipeline to identify cosmic voids in simulated galaxy mock catalogs (Aletheia suite; 250 Mpc/h box, Ωm = 0.315, σ₈ = 0.811).

**Methodology:**
- Implemented the Back-in-Time Void Finder (BitVF) within CosmoBolognaLib — Voronoi tessellation followed by watershed transform
- Cleaned catalogs through a sequential TH → OV00 → border pipeline
- Benchmarked three tracer subsamples: BIT, NREC50, REVOLVER
- Validated cleaning against independent ForArun cross-check; estimated errors via jackknife and octant variance analysis

**Phase 1 findings:**
- Reproduced sparsity-induced fragmentation in geometric void catalogs
- Demonstrated tracer bias as a dominant, unresolved systematic in geometric approaches
- Established a structured validation framework that exposes the sensitivity of the VSF to reconstruction method

---

### Phase 2 — Cosmological Parameter Estimation

With the pipeline validated, applied Bayesian inference to constrain cosmological parameters from the measured VSF.

**Forward model:** The Volume-conserving Vdn model (Jennings et al. 2013) — derives the VSF from the spherical collapse threshold (δᵥ = −2.71), a nonlinear density threshold (δₙₗ), and the linear power spectrum computed via COLOSSUS.

**MCMC setup:** Affine-invariant ensemble sampler (emcee) with 32 walkers; Gaussian likelihood with Poisson covariance; three progressive configurations — 2D all-bins, 2D R > 6 Mpc/h, 3D with δᵥ free — across eight production runs (four tracer subsamples × two reconstruction fields).

**Phase 2 findings:**
- σ₈ recovered consistently across subsamples, providing validation of the VSF as a cosmological probe
- Ωm constrained toward the prior floor — traced to the Vdn model's systematic overprediction at small void radii
- δᵥ posteriors converged to theoretically expected values, independently validating the void definition
- Pre-MCMC sanity check revealed a meaningful disagreement between the Vdn model and data at the true cosmology — an honest finding that motivates the calibration problem

---

### The Calibration Problem

The presentation feedback was pointed: *"pipelines are well built, work is nice, but should have calibrated the data."*

The root issue is that the Vdn model was applied as-is without either (a) a mock-based correction factor (Contarini et al. 2023 approach) or (b) cross-validation against alternative theoretical models — the moving-barrier model (Verza et al. 2024) or unified multiplicity (Paranjape et al. 2024) — before committing to it as a forward model for MCMC.

The lesson is structural: *pipeline* + *(calibration and model cross-validation)* is the complete unit of work. Pipeline alone is not enough.

---

### Technical Stack

Python (NumPy, Pandas, emcee, COLOSSUS) · C++ · CosmoBolognaLib · HPC cluster workflows · Shell scripting · Git

---

### Transferable Thinking

The thesis is, at its core, an exercise in structured inference under incomplete information — a situation that extends far beyond cosmology.

- Building reproducible analytical pipelines that others can stress-test
- Benchmarking competing methodological frameworks under controlled degradation
- Quantifying uncertainty honestly, including model uncertainty, not just statistical error
- Recognising when a result is a finding and when it is a symptom of an uncorrected systematic
