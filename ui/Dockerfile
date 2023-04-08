FROM node:16
WORKDIR /ui
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start:local"]