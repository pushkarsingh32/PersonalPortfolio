# Vector-Powered RAG System Project Description

## Project: Vector-Powered RAG System for AI Content Generation

### Motivation
Users were frustrated with generic AI content that didn't reflect their brand voice or domain expertise. We needed a system that could ground AI generation in user-specific knowledge—not just generic training data.

### Technical Implementation

Built a full-stack RAG (Retrieval Augmented Generation) system at Semantic Pen using:

- **PostgreSQL with pgvector extension** for vector similarity search
- **Supabase gte-small embeddings model** generating 384-dimensional vectors
- **Custom embedding service** (Node.js + @xenova/transformers) with batch processing and LRU caching
- **Supabase RPC functions** using cosine similarity (`<=>` operator) for sub-50ms retrieval
- **Document chunking pipeline** processing PDFs, DOCX, TXT files into searchable segments

### Key Technical Challenges

**1. Embedding at scale:** Batch API calls were hitting limits. Solved with parallel batch processing (5 texts/batch) using Promise.all with exponential backoff retry logic, reducing generation time by 70%.

**2. Query relevance:** Initial similarity thresholds (0.7) were too strict, returning zero results. Tuned to 0.4-0.5 with top-5 ranking, balancing precision vs recall.

**3. Real-time performance:** Vector search needed to stay under 100ms to avoid blocking content generation. Optimized with btree indexes on document_id and proper RLS policies. Implemented in-memory LRU cache (1000 embeddings) for frequently queried content.

### My Contribution

Sole backend engineer—designed the schema, implemented the embedding pipeline with local model serving using Xenova transformers, wrote the Postgres match_chunks function with cosine similarity scoring, built the API endpoints, and integrated it into the content generation flow.

### Outcome

- Processes 50K+ documents across thousands of users
- Sub-50ms average query latency for vector search
- 384-dimensional embeddings stored efficiently in pgvector
- Users report 60% reduction in editing time and 40% higher conversion rates
- Self-hosted embedding service eliminates external API costs and latency

The RAG module transformed our product from "generic AI writer" to "AI that knows your business"—users can now upload brand guidelines, product docs, and research, then generate content grounded in their actual expertise.

---

## Short Version (for forms with character limits)

**Project: Vector-Powered RAG System for AI Content Generation**

**Motivation:** Users needed AI content grounded in their specific knowledge, not generic training data.

**Technical approach:** Built a RAG system using PostgreSQL with pgvector, Supabase gte-small embeddings (384 dimensions), custom Node.js embedding service with batch processing, and cosine similarity search via RPC functions. Document pipeline processes PDFs/DOCX/TXT into searchable chunks.

**Challenges:** Scaled batch embedding with parallel processing (5 texts/batch, Promise.all), tuned similarity thresholds (0.4-0.5) for optimal relevance, optimized vector search to sub-50ms with btree indexes and LRU caching.

**My contribution:** Sole backend engineer—designed schema, implemented embedding pipeline with local model serving, wrote Postgres similarity functions, built APIs, integrated into content generation.

**Outcome:** Handles 50K+ documents, sub-50ms queries, 60% less editing time for users, 40% higher conversions. Self-hosted embeddings eliminate API costs.
