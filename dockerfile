FROM node:20-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update -y \
    && apt-get install -y \
        openssl \
        build-essential \
        libssl-dev \
        ca-certificates

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy entire project
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Initialize database and start the application
CMD npm start