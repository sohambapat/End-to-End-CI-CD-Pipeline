
# Dockerfile

# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Define the command to run your Node.js app
CMD ["node", "app.js"]
