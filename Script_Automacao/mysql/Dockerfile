FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=totemsystem

COPY /sql.sql /docker-entrypoint-initdb.d/sql.sql

EXPOSE 3306

CMD ["mysqld"]
