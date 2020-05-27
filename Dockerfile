FROM nginx:1.18.0
LABEL maintainer="xkcoding <237497819@qq.com>"

COPY build/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf