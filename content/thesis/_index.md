---
title: "Thesis"
description: "Cosmic Void Size Function: pipeline validation and cosmological parameter estimation via Bayesian inference — Arun Mitra Kommireddy, University of Bologna."
toc: true
---

#### Study of the Cosmic Void Size Function using Computational Methods

*Computational Cosmology — Department of Physics and Astronomy (DiFA), University of Bologna, Italy*

> Advisor: Prof. Federico Marulli (University of Bologna)  
> Co-Advisor: Dr. Simone Sartori (Aix-Marseille University)

---

### Overview

Independently secured an international research collaboration at DiFA, University of Bologna, through direct faculty outreach. Working within **CosmoBolognaLib (CBL)**, an open-source cosmology library developed by Prof. Marulli and collaborators.

The work has two phases. Phase 1 builds and validates a cosmic void-finding and cleaning pipeline against published reference data. Phase 2 uses the resulting void size function as a cosmological observable — performing Bayesian inference to recover the simulation's true cosmological parameters.

**Headline result (Phase 2):** A joint multi-subsample MCMC recovers **σ₈ = 0.795 ± 0.030**, with the Aletheia simulation truth (σ₈ = 0.811) within 0.55σ of the posterior median.

---

### Research Context

Cosmic voids — the vast underdense regions of the large-scale structure — are sensitive probes of late-time cosmology. Their statistical size distribution, the **Void Size Function (VSF)**, carries information about dark energy dynamics, the sum of neutrino masses, and potential deviations from General Relativity.

The challenge is methodological. Geometric void-finders are vulnerable to tracer sparsity and tracer bias: distortions introduced by incomplete or biased galaxy catalogs that propagate directly into cosmological inference. Phase 1 characterises these systematics. Phase 2 asks whether, given a clean VSF, a published theoretical model can recover known cosmology from a controlled simulation.

---

### Simulation and Data

All analysis uses the **Aletheia simulation** — a dark-matter-only N-body simulation (box size 250 h⁻¹Mpc, true cosmology Ω_m = 0.315, σ₈ = 0.811, z = 0). Four tracer subsamples of increasing sparsity are used, defined by the fraction of particles retained:

| Subsample | Tracer fraction | Mean particle separation |
|-----------|:--------------:|:------------------------:|
| 20p | 20% | 1.16 h⁻¹Mpc |
| 10p | 10% | 1.47 h⁻¹Mpc |
| 5p  | 5%  | 1.85 h⁻¹Mpc |
| 2.5p | 2.5% | 2.33 h⁻¹Mpc |

Two displacement-field reconstructions are compared throughout: **NREC50** (Optimal Transport-reconstructed displacement field) and **BIT** (exact true-displacement field). The NREC50 results form the primary analysis; BIT serves as the robustness cross-check.

---

### Phase 1 — Pipeline Validation

#### Void Finding

Voids are identified using the **Back-in-Time Void Finder (BitVF)** developed by Sartori (2025), implemented within CosmoBolognaLib. The algorithm applies Voronoi tessellation to the tracer distribution, followed by a watershed transform to locate and grow void regions.

Raw catalogs are cleaned through a sequential pipeline: topological hierarchy cleaning (TH), followed by overlap removal (OV00), followed by border exclusion. This reduces the raw catalog to a set of non-overlapping, interior voids suitable for statistical analysis.

#### Validation Against Sartori Reference Data

The cleaned VSF is validated against published reference data (Sartori 2025) at all four tracer densities. Agreement is achieved at the level of ≲ 0.2 dex per bin for the dense subsamples, confirming that the cleaning pipeline reproduces the developer's reference to within Poisson noise. Residual amplitude differences at the 2.5% subsample remain quantifiable and are carried into Phase 2 as a known uncertainty.

#### Systematic Studies

To characterise tracer-induced systematics:
- Reproduced sparsity-induced fragmentation in geometric void catalogs as tracer density decreases
- Estimated statistical errors via jackknife resampling and octant variance analysis
- Quantified cosmic variance by comparing VSF across spatial sub-regions
- Cross-checked the BitVF result against an independent REVOLVER/ZOBOV geometric catalog

---

### Phase 2 — Cosmological Inference

#### Theoretical Model: The Vdn Framework

We adopt the **volume-conserving (Vdn) model** of Jennings et al. (2013), as extended by Contarini et al. (2019, 2023) to incorporate tracer bias. The predicted void abundance per logarithmic radius bin is:

> dn/d ln R = f(σ_m) / V(R) × |d ln σ_m⁻¹ / d ln R_L|

where f(σ_m) is the Sheth & van de Weygaert (2004) two-barrier multiplicity function, V(R) = (4π/3)R³, and the Lagrangian-to-Eulerian mapping is given by the volume-conservation prescription R_L = R × (1 + δ_v^NL)^(1/3).

The model has two non-cosmological thresholds: a nonlinear underdensity contrast δ_v^NL defining the void interior, and the linear barrier δ_c controlling the cloud-in-cloud cut-off. We fix δ_c = 1.6756 (Aletheia cosmology, z = 0) and adopt δ_v^NL = −0.7 following Contarini et al. (2023). The linear matter power spectrum is computed using the Eisenstein & Hu (1998) fitting function via CBL's `LCDM` cosmology class.

For tracers with effective bias b_eff ≠ 1, Contarini et al. (2019) introduce a rescaling δ_v^NL,DM = δ_v^NL,tr / F(b_eff), where F = B_slope × b_eff + B_offset. For dark-matter tracers, b_eff = 1 by definition; B_slope and B_offset are treated as nuisance parameters and calibrated jointly with cosmology.

#### Diagnostic Phase: Establishing the Regime of Validity

Before any parameter inference, the Vdn model was evaluated at the Aletheia true cosmology and overlaid on each subsample's VSF. The result is unambiguous: the model overpredicts the data by factors of three to ten at all radii R < 8 h⁻¹Mpc, regardless of whether the BOSS-galaxy bias defaults or a bias-disabled configuration is used.

| Subsample | χ²/ν (full range, no bias) | χ²/ν (full range, BOSS bias) |
|-----------|:--------------------------:|:----------------------------:|
| 20p | 731 | 346 |
| 10p | 459 | 292 |
| 5p  | 259 | 211 |
| 2.5p | 144 | 148 |

A universal cut of **R > 7 h⁻¹Mpc** brings the model into agreement with data at the true cosmology across all four subsamples:

| Subsample | Bins at R > 7 | χ²/ν at truth |
|-----------|:-------------:|:-------------:|
| 20p  | 6 | ≈ 1.5 |
| 10p  | 6 | ≈ 1.0 |
| 5p   | 7 | ≈ 1.3 |
| 2.5p | 7 | ≈ 1.0 |

This validity boundary — R > 7 h⁻¹Mpc on dark-matter tracers — is the key diagnostic finding of Phase 2. It is approximately 3.5× smaller in absolute terms than the R > 25–30 h⁻¹Mpc cut adopted by Contarini et al. (2023) for BOSS galaxies, but comparable when expressed in units of mean tracer separation (R/MPS ≈ 3–6 in both cases). The Vdn validity boundary appears approximately universal in MPS-relative units.

#### MCMC Setup

We perform Bayesian inference on (Ω_m, σ₈, B_slope, B_offset) in two stages.

**Stage 1 — Joint MAP.** A four-dimensional Nelder–Mead minimisation of the negative log-posterior gives the joint MAP point for each subsample. This calibrates the nuisance pair (B_slope, B_offset) to absorb residual amplitude mismatch, in direct analogy to Contarini et al.'s (2023) mock-based calibration.

**Stage 2 — Cosmology-only MCMC.** With nuisance parameters fixed at Stage 1 MAP values, an affine-invariant ensemble sampler (emcee; Foreman-Mackey et al. 2013) is run over (Ω_m, σ₈) with flat priors Ω_m ∈ (0.1, 0.5), σ₈ ∈ (0.5, 1.2). Per-subsample chains use 32 walkers × 800 steps; the joint production chain uses 64 walkers × 8000 steps. Burn-in is taken as 25% of the chain and thinning by half the integrated autocorrelation time τ.

The choice of emcee rather than CBL's native `sample_stretch_move_parallel` was empirically validated: both implement the identical Goodman–Weare (2010) stretch-move algorithm. Side-by-side sampling of an axis-aligned 2D Gaussian (truth (0,0), σ = (0.30, 0.40)) confirmed that emcee and CBL recover the same posterior to within Monte Carlo noise, with matching means, standard deviations, and 1σ/2σ contours. The SWIG constraint that prevents passing a Python likelihood directly to CBL's C++ Sampler constructor is documented and a C-ABI shim (`cbl_sampler_shim.cpp`) was implemented to verify the equivalence empirically.

#### Chain Diagnostics (Joint Production Chains)

| Diagnostic | NREC50 | BIT | Target |
|------------|:------:|:---:|:------:|
| Mean acceptance fraction | 0.46 | 0.48 | [0.2, 0.5] |
| Integrated autocorrelation τ (max) | 80 | 71 | ≪ N |
| Effective samples | 10,368 | 11,584 | ≳ 10³ |
| Split-R̂ (max across parameters) | 1.019 | 1.016 | < 1.05 |
| KS test between chain halves (min p) | 0.085 | 0.188 | > 0.01 |

---

### Results

#### Per-Subsample NREC50 Recovery

| Subsample | Bins | χ²/ν | Ω_m | (σ from truth) | σ₈ | (σ from truth) |
|-----------|:----:|:----:|:---:|:--------------:|:--:|:--------------:|
| 20p  | 6 | 1.43 | 0.196 | −1.9σ | **0.793 ± 0.04** | **−0.3σ** |
| 10p  | 6 | 0.20 | 0.155 | −3.4σ | **0.787 ± 0.04** | **−0.5σ** |
| 5p   | 7 | 1.33 | 0.129 | −6.2σ | **0.788 ± 0.04** | **−0.6σ** |
| 2.5p | 7 | 0.85 | 0.138 | −4.8σ | 0.741 ± 0.04 | −2.1σ |

σ₈ is recovered within 1σ of the Aletheia truth (0.811) for the three densest subsamples. The 2.5% subsample is marginally low by ≈ 2σ, consistent with expected Poisson fluctuation at its statistics level (≈ 600 cleaned voids in the fit range). Ω_m is prior-dominated in all cases — this is expected and is discussed below.

#### Joint Multi-Subsample Result (Headline)

A joint MCMC requiring a single set of four parameters (Ω_m, σ₈, B_slope, B_offset) to simultaneously explain all four NREC50 subsamples at R > 7 h⁻¹Mpc:

| Parameter | Posterior | Truth | Deviation |
|-----------|:---------:|:-----:|:---------:|
| **σ₈** | **0.795 ± 0.030** | **0.811** | **−0.55σ** |
| Ω_m | 0.137 (+0.027/−0.022) | 0.315 | −7.3σ |
| B_slope | 0.901 ± 0.41 | — | — |
| B_offset | 0.509 ± 0.34 | — | — |

Joint χ²/ν at MAP: 1.61 (35.4 / 22 DOF). This is the tightest constraint in the thesis: 26 bins across four tracer densities, shared nuisance parameters, 10,368 effective posterior samples. It confirms that the per-subsample σ₈ agreements are not coincidental — the data actively prefer a common σ₈ near truth, and a single (B_slope, B_offset) pair is sufficient to describe the amplitude mismatch across all four tracer densities simultaneously.

#### BIT Cross-Check and the Ω_m–σ₈ Degeneracy

The same joint MCMC run on BIT (true-displacement) catalogs gives a strikingly different result:

| Parameter | NREC50 joint | BIT joint | Truth |
|-----------|:-----------:|:---------:|:-----:|
| σ₈ | **0.795 ± 0.030 (−0.55σ)** | 0.745 ± 0.022 (−3.0σ) | 0.811 |
| Ω_m | 0.137 ± 0.025 (−7.3σ) | **0.265 ± 0.044 (−1.1σ)** | 0.315 |

The two displacement-field choices navigate the Ω_m–σ₈ degeneracy to **opposite ends of the same likelihood banana**: NREC50 recovers σ₈ and loses Ω_m; BIT recovers Ω_m and loses σ₈. The nuisance parameters B_slope and B_offset are statistically identical between the two, confirming that the model physics is the same and only the data vector differs. A hypothetical intersection of the two joint posteriors lies near the Aletheia truth.

This is a controlled empirical demonstration of the Ω_m–σ₈ degeneracy that Contarini et al. (2023) describe analytically and break via the galaxy two-point correlation function in their BOSS analysis.

#### Why Ω_m Is Not Constrained

The Vdn predicted abundance scales approximately as dn/d ln R ∝ σ₈^N × Ω_m^M, with N(R) ≈ 5–7 and M(R) ≈ 0.3–0.5 at the radii probed. The amplitude lever arm is dominated by σ₈ to such a degree that any residual mismatch can be absorbed by a small σ₈ shift without moving Ω_m perceptibly. Contarini et al. (2023) report the same behaviour on BOSS DR12 and break the degeneracy by combining the VSF likelihood with the 2PCF, which constrains b_eff × σ₈ independently. An equivalent external probe is not implemented here.

Notably, the BIT dense-tracer results do not push Ω_m to the prior wall (BIT 10%: Ω_m = 0.323, 0.1σ from truth), but at the cost of σ₈ moving to 0.741 (−1.7σ). Both results are statistically acceptable fits on a degenerate likelihood surface. The degeneracy is the constraint, not the individual posteriors.

#### Comparison with Contarini et al. (2023)

Contarini et al. (2023) report from BOSS DR12 galaxies (0.2 < z < 0.65): Ω_m = 0.29 ± 0.06, σ₈ = 0.79⁺⁰·⁰⁹₋₀.₀₈, fit range R > 30 h⁻¹Mpc, N ≈ 3280 voids. The central σ₈ value agrees with ours (0.795 ± 0.030), with our formal precision approximately twice as tight, reflecting the lower noise floor of a simulated catalog and the absence of survey systematics. The validity boundary we identify (R > 7 h⁻¹Mpc on DM tracers) is approximately 4× smaller in absolute terms than theirs, but consistent when expressed in units of mean tracer separation.

---

### End-to-End Test and What It Reveals

The MCMC results above use the Sartori reference data as input rather than our own v4-cleaned catalogs. This was a deliberate choice — to isolate the inference machinery from any residual Phase 1 cleaning differences.

Running the same joint MCMC on the v4-cleaned catalogs gives σ₈ = 0.925 ± 0.020 (+6.9σ from truth), with χ²/ν degrading from 1.61 to 5.75. The root cause is amplitude: three of four v4-cleaned subsamples produce more voids than the Sartori reference in the fit range (median amplitude ratios 0.85×, 1.22×, 1.89×, 1.19× for 20%, 10%, 5%, 2.5%). Since the Vdn amplitude scales as σ₈^5–7, a 1.9× amplitude excess maps directly to a multi-σ σ₈ bias.

The Phase 1 cleaning was tuned to align the VSF *peak position* against the Sartori reference. Peak position alignment is necessary for visual agreement but not sufficient for amplitude-driven cosmological inference at the large-radius tail. This is the natural quantification of cleaning quality in cosmology units: amplitude fidelity at R ≥ 7 h⁻¹Mpc is the critical-path metric for unbiased parameter inference, not peak position.

---

### The Calibration Problem

The presentation feedback: *"pipelines are well built, work is nice, but should have calibrated the data."*

The Vdn model was applied as-is, without either (a) a mock-based correction factor calibrating the model against the specific simulation used (Contarini et al. 2023 approach), or (b) cross-validation against alternative theoretical models — the moving-barrier extension (Verza et al. 2024) or unified multiplicity (Paranjape et al. 2024) — before committing to a single forward model for MCMC.

The structural lesson is precise: *pipeline + (model calibration AND cross-validation) = complete unit of work.* Pipeline alone is not sufficient when the systematic disagreement between model and data at known cosmology has not been characterised and corrected before inference.

---

### Open Directions

1. **External degeneracy-breaking probe.** Combining the VSF likelihood with the two-point correlation function of the void catalog (or a void–tracer cross-correlation) would break the Ω_m–σ₈ degeneracy and deliver a joint constraint. This is the single largest remaining limitation.

2. **Model extension.** The Verza et al. (2024) moving-barrier model is expected to remain accurate at smaller R than canonical Vdn, potentially extending the validity boundary from 7 h⁻¹Mpc down to ≈ 4 h⁻¹Mpc and including considerably more of the BitVF VSF in the fit.

3. **Phase 1 amplitude calibration.** Future cleaning work should optimise against large-radius amplitude agreement with the reference, not only against peak position.

---

### Technical Stack

Python (NumPy, Pandas, emcee, COLOSSUS) · C++ · CosmoBolognaLib · HPC cluster · Shell scripting · Git · LaTeX

---

### Transferable Thinking

The thesis is an exercise in structured inference under incomplete information — a situation that extends far beyond cosmology.

- Designing pipelines that produce reproducible, benchmarkable outputs
- Distinguishing statistical uncertainty from model uncertainty — the Vdn disagrement at small R is a model failure, not a data problem
- Recognising when a result is a finding and when it is a symptom of an uncorrected systematic
- The calibration lesson: validating that the forward model matches data at *known* inputs before using it to infer unknown ones
