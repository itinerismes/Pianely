# Dockerfile pour Production VPS
# Inclut tous les services : Next.js + OCR + Transcription

FROM node:18-slim

# Install système dependencies
RUN apt-get update && apt-get install -y \
    openjdk-17-jre \
    python3.11 \
    python3.11-venv \
    python3-pip \
    ffmpeg \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Créer user non-root
RUN useradd -m -u 1001 pianely

WORKDIR /app

# Copier package files
COPY package*.json ./

# Install Node.js dependencies
RUN npm ci --production

# Copier le code source
COPY --chown=pianely:pianely . .

# Setup OCR Service
WORKDIR /app/services/ocr
RUN chmod +x setup-ocr.sh
RUN ./setup-ocr.sh || echo "OCR setup failed, will retry at runtime"

# Setup Transcription Service
WORKDIR /app/services/transcription
RUN chmod +x setup.sh
# Note: setup.sh nécessite Python 3.11, géré dans le script
RUN python3.11 -m venv venv && \
    . venv/bin/activate && \
    pip install --upgrade pip setuptools wheel && \
    pip install -r requirements.txt || echo "Transcription setup failed, will retry at runtime"

# Build Next.js
WORKDIR /app
RUN npm run build

# Changer ownership
RUN chown -R pianely:pianely /app

# Switch to non-root user
USER pianely

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=60s \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Start app
CMD ["npm", "start"]
