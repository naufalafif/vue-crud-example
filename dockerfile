# use node alpine
FROM node:13.11.0-alpine as builder

# set the working directory in the container
WORKDIR /app

# COPY the package json and package json lock files
COPY package*.json ./

# perform npm install
RUN npm install

# copy all files to the work directory
COPY . .

# run the command
RUN npm run build

FROM nginx

# expose the port
EXPOSE 80

# copy nginx config
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html