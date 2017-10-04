FROM node:8.1.4

RUN mkdir /workspace

COPY . /workspace

RUN npm install

EXPOSE 4390

ENV SLACK_CLIENT_ID $clientId

ENV SLACK_CLIENT_SECRET $secret

CMD node /workspace/src/index.js
