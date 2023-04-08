FROM node:16
RUN adduser --system --group nonroot
USER nonroot
WORKDIR /home/nonroot
COPY src ./src
COPY global.d.ts ./
COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci
RUN npm run build
CMD ["npm", "run", "start"]