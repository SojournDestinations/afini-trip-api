FROM node:6.2.2
ENV appDir /usr/src/app
WORKDIR ${appDir}

ADD . .
EXPOSE 3014
CMD ["npm", "start"]
