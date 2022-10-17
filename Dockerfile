FROM node:16 as build

WORKDIR /app


COPY package*.json .
RUN npm install --force
COPY . .
RUN npm run build 

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html





