# Estágio de construção do front-end
FROM node:16.17.1-slim AS build-node

WORKDIR /workspace/front

COPY ./front/package.json .
COPY ./front/package-lock.json .

RUN npm install

COPY ./front/ .

RUN npm run build

# Estágio de construção da aplicação Java
FROM maven:3.8.3-openjdk-17 AS build

WORKDIR /workspace/app

COPY ./back-end/pom.xml .
#COPY ./back-end/src src
COPY ./back-end/ .

RUN mvn install -DskipTests -P dev -q

# Estágio do banco de dados PostgreSQL
FROM postgres:latest

ENV POSTGRES_DB=mydb
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

# Estágio final para a aplicação Java
FROM eclipse-temurin:17-jre-alpine


WORKDIR /app 
COPY  --from=build /workspace/app/target/*.jar app.jar

# Expor a porta usada pelo aplicativo Java (8080)
EXPOSE 8080

# Volume para mapear o diretório atual do host no contêiner
VOLUME /app
CMD tail -f /dev/null


#ENTRYPOINT ["java","-Dspring.profiles.active=dev","-jar","/app/app.jar"]
