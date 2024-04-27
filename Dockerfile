# 빌드 스테이지
FROM node:18 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# 실행 스테이지
FROM node:18

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./

CMD [ "npm", "start" ]

EXPOSE 3000