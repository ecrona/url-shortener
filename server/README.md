# Url shortener server

## Prerequisites

The client requires jdk version 11+, apache maven version 3.6.0+ and mysql version 5+

## Installing

Create a database table in mysql called `shortener`, and make sure your login credentials are `root/root`, other wise change them in `src/main/application.properties`

```
mvn install
```

## Running

```
./mvnw compile
./mvnw spring-boot:run
```
