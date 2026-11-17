/*
  EDIT THIS FILE to update portfolio content.
  Add/remove projects, skills, achievements or experience entries here.
  Keep links as full https:// URLs. Leave a project link as "" to hide its button.
*/
window.PORTFOLIO = {
  name: "Srinadh Challa",
  title: "AI Engineer",
  availability: "AI Engineer · Generative AI · RAG · Data & AI",
  email: "challasrinadh2005@gmail.com",
  phone: "+91-7075707832",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/challasrinadh2005/",
  github: "https://github.com/ChallaSrinadh1729",
  resume: "assets/Srinadh-Challa-Resume.pdf",
  summary: "I build practical AI systems that turn complex information into useful, grounded experiences. My work spans Generative AI, retrieval-augmented generation, document intelligence and data-driven applications.",
  aboutLead: "I’m an AI Engineer interested in making AI genuinely useful — from reliable knowledge retrieval to intelligent analytics and enterprise workflows.",
  aboutDetail: "At Techwave Consulting, I work across RAG, LLM applications, document processing and AI service integration. I enjoy taking ideas from problem definition to working Python-based solutions, with a focus on traceability, reliability and clear outcomes.",
  stats: [
    { value: "3", label: "Featured AI projects" },
    { value: "8.79", label: "B.Tech CGPA / 10" },
    { value: "Top 5%", label: "NPTEL Responsible & Safe AI" }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "Techwave Consulting India Pvt. Ltd.",
      location: "Hyderabad, India",
      period: "Mar 2026 — Present",
      points: [
        "Developing enterprise AI solutions across RAG, LLM applications, document processing, data analytics and AI service integration.",
        "Building Python-based workflows to validate connectivity, authentication, configuration and readiness across Azure AI services.",
        "Designing document-processing workflows that convert enterprise PDFs into structured Markdown for downstream RAG and knowledge-retrieval pipelines.",
        "Working with Python, Microsoft Azure, Microsoft Fabric, Power BI, SQL and Django across enterprise AI and data engineering workflows."
      ],
      tags: ["Python", "Microsoft Azure", "RAG", "Django", "Power BI"]
    }
  ],
  projects: [
    {
      number: "01",
      name: "Multi-Domain Multilingual RAG System",
      category: "GENERATIVE AI · INFORMATION RETRIEVAL",
      description: "A multilingual, multi-domain retrieval-augmented generation system that identifies query language and domain to retrieve relevant knowledge and generate grounded responses.",
      highlights: [
        "Domain and language identification for domain-specific retrieval.",
        "Semantic retrieval with Qwen3-Embedding-0.6B and FAISS Inner Product search.",
        "English, French and Spanish query handling with Qwen3:8B answer generation.",
        "Source traceability through document, section, page and chunk metadata; evaluated with Hit@1 and Hit@3."
      ],
      stack: ["Python", "Qwen3", "Sentence Transformers", "FAISS", "RAG"],
      repo: "",
      demo: ""
    },
    {
      number: "02",
      name: "Data Pilot AI",
      category: "AI ANALYTICS · DATA APPLICATION",
      description: "An AI-powered analytics application for exploring CSV and Excel datasets through natural-language questions, automated profiling and interactive visualizations.",
      highlights: [
        "Dataset profiling, data-quality analysis and Mean/Median/Mode-based data cleaning.",
        "LLM-generated dataset summaries, business insights, KPI and visualization recommendations.",
        "Voice-based querying and downloadable cleaned datasets.",
        "Interactive charts including bar, line, scatter, histogram, box, pie and correlation heatmaps."
      ],
      stack: ["Python", "OpenAI API", "Pandas", "NumPy", "Streamlit"],
      repo: "",
      demo: ""
    },
    {
      number: "03",
      name: "AI & RAG Service Readiness Validator",
      category: "ENTERPRISE AI · DEVELOPER TOOLING",
      description: "A Python and Django framework that checks whether AI and RAG services are ready for application deployment, with structured reporting of failures.",
      highlights: [
        "PASS/FAIL checks for connectivity, authentication, configuration and service availability.",
        "Validation coverage for Azure OpenAI, Azure AI Search, Document Intelligence, Speech, Blob Storage, databases and Azure AI Foundry.",
        "Structured failure reporting and a Django backend for enterprise client validation."
      ],
      stack: ["Python", "Django", "Azure OpenAI", "Azure AI Search", "REST APIs"],
      repo: "",
      demo: ""
    }
  ],
  skills: [
    { group: "Generative AI & RAG", items: ["LLMs", "Generative AI", "RAG", "Prompt Engineering", "Embeddings", "Semantic Search", "Vector Search", "Chunking", "LLM Evaluation", "Multilingual AI", "Multi-Domain RAG"] },
    { group: "AI & Machine Learning", items: ["NLP", "Text Classification", "Sentiment Analysis", "Machine Learning", "Feature Engineering", "Model Evaluation", "Computer Vision", "Document AI"] },
    { group: "Programming & Data", items: ["Python", "SQL", "Pandas", "NumPy", "Data Preprocessing", "Data Cleaning", "Data Validation", "Data Analysis"] },
    { group: "Cloud & AI Platforms", items: ["Microsoft Azure", "Azure OpenAI", "Azure AI Search", "Azure AI Foundry", "Azure Blob Storage", "Azure Document Intelligence", "Microsoft Fabric"] },
    { group: "Analytics & Development", items: ["Power BI", "Power Query", "Excel", "Django", "Streamlit", "REST APIs", "Git", "GitHub", "Jupyter Notebook"] }
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Rajiv Gandhi University of Knowledge Technologies",
    location: "Ongole, Andhra Pradesh",
    period: "2022 — 2026",
    score: "8.79 / 10.0"
  },
  achievements: [
    { title: "NPTEL Responsible & Safe AI", detail: "Top 5% Topper" },
    { title: "NPTEL Star", detail: "2026" }
  ],
  leadership: [
    "Entrepreneurship, Incubation, Training & Placements Coordinator — RGUKT Nuzvid, Head Office",
    "President, Spardha Samvidha — Led 40+ students and conducted aptitude-training sessions",
    "NSS Volunteer — District-level voter awareness reel contest and village clean-and-green activities"
  ]
};