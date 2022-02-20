FROM node:16

# Create app directory
RUN mkdir -p /app/time-service
WORKDIR /app/time-service

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app/time-service

EXPOSE 3000
CMD [ "npm", "start" ]
#CMD [ "node", "server.js" ]