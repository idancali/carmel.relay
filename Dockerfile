FROM node:12.22.6-alpine

USER node
WORKDIR /home/node

COPY --chown=node:node *.json ./
COPY --chown=node:node lib/ lib/
COPY --chown=node:node public/ public/

RUN npm i

EXPOSE 9080

CMD [ "npm", "start" ]
