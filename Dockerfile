FROM nginx:latest
ADD ./dist /usr/share/nginx/html
ADD /conf /etc/nginx/conf.d
EXPOSE 80/tcp
