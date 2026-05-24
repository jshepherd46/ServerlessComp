# ServerlessComp

**Serverless Computing for Research & Clinical AI**  
Shepherd Research Lab · University of Hawaiʻi Cancer Center

A practical, 12-module course for health researchers building HIPAA-compliant deep learning, clinical NLP, and federated ML infrastructure on Google Cloud Platform.

---

## Course overview

| Phase | Modules | Focus |
|-------|---------|-------|
| 1 — Foundations | M1–M4 | GCP hierarchy, containers, HIPAA environment, Cloud Run |
| 2 — Kubernetes & ML | M5–M8 | GKE Autopilot, CNN/Vertex AI, BERT/LLMs, secure pipelines |
| 3 — Analytics & Federated | M9–M12 | OMOP/ATLAS, federated learning, MLOps, capstone |

**Total:** ~80 hours of guided work across 12 modules.

## Target outcomes

Students completing this course will be able to:

- Provision HIPAA-compliant GCP environments from Terraform in minutes
- Train and serve CNN, BERT, and LLM models on GKE and Vertex AI
- Deploy OMOP CDM + ATLAS on BigQuery for clinical cohort work  
- Build federated ML pipelines across multi-site networks (PacificFed topology)
- Implement serverless ML inference endpoints that scale to zero

## Capstone tracks

The capstone (Module 12) offers four real-project tracks:

- **Makawalu** — HIPAA-perimeter GKE cluster, POCUS DICOM ingest, CNN + XAI bottleneck model, Cloud Run serving
- **HALO** — OMOP on BigQuery, ATLAS HCC cohort, Vertex AI IO outcome predictor, federated extension to QHS
- **ShepBERT** — OMOP notes, ClinicalBERT fine-tune with LoRA, RAG over ATLAS cohorts, Cloud Run API
- **HIPIMR** — DICOM archive on GCS, density CNN pipeline, Vertex AI Pipelines automation, drift monitoring

## Repository structure

```
ServerlessComp/
├── index.html              # Course home — module grid
├── css/
│   └── style.css           # Shared design system
├── js/
│   └── main.js             # Shared interactions
├── modules/
│   ├── m1-lesson1.html     # ✅ Complete
│   ├── m1-lesson2.html     # 🔄 In development
│   ├── m2.html             # 🔄 In development
│   └── ...
└── README.md
```

## Running locally

No build step required — this is a static site.

```bash
# Clone the repo
git clone https://github.com/jshepherd46/ServerlessComp.git
cd ServerlessComp

# Serve locally (Python)
python -m http.server 8080

# Or with Node
npx serve .
```

Open `http://localhost:8080` in your browser.

## Contributing / Feedback

This course is in active development. To contribute a module, open an issue or PR with:
- Module number and title
- Learning objectives (3–5 bullet points)
- Guided exercises
- Core GCP tools

## Deployment

The site is designed to deploy as a GitHub Pages site:

1. Push to `main`
2. Enable GitHub Pages in repository settings (source: `/ (root)`)
3. Site is available at `https://jshepherd46.github.io/ServerlessComp/`

---

**Contact:** John Shepherd, PhD · University of Hawaiʻi Cancer Center  
**License:** CC BY 4.0 — free to use and adapt with attribution
