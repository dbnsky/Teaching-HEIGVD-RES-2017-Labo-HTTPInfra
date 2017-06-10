FROM node:4.8

COPY src /opt/app

RUN apt-get update && \
	apt-get install -y vim

CMD ["node", "/opt/app/index.js"]