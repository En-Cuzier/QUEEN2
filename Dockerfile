FROM fusuf/whatsasena:latest

RUN git clone https://github.com/En-Cuzier/QUEEN2 /root/QUEEN2
WORKDIR /root/QUEEN2/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
