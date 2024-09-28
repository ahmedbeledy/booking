# Stage 1: Build the Angular application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Stage 2: Node.js server
FROM node:18

# Set the working directory
WORKDIR /app

# Copy server file and build artifacts from the build stage
COPY --from=build /app/dist/lacasa-r/browser /app/dist/lacasa-r
COPY server.js /app

# Install express
RUN npm install express

# Expose port 3000
EXPOSE 3000

# Start the Node.js server
CMD ["node", "server.js"]
