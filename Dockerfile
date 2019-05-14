FROM node:8.11.4

ADD ./app /app

ENV http_proxy=http://PITC-Zscaler-EMEA-Amsterdam3PR.proxy.corporate.ge.com:80

ENV https_proxy=http://PITC-Zscaler-EMEA-Amsterdam3PR.proxy.corporate.ge.com:80

WORKDIR /app

RUN npm i

CMD npm run prod