FROM wordpress:5.9.3-php7.4-apache
#FROM wordpress:php7.4-fpm-alpine

RUN apt-get update \
     && apt-get install -y libzip-dev \
     && docker-php-ext-install zip

# RUN set -ex \
# 	&& apk --no-cache add postgresql-libs postgresql-dev \
# 	&& docker-php-ext-install pgsql pdo_pgsql \
# 	&& apk del postgresql-dev
#RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install pgsql pdo pdo_pgsql

# RUN apt-get update \
#     && apt-get install -y libpq-dev \
#     && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
#     && docker-php-ext-install pdo pdo_pgsql pgsql 