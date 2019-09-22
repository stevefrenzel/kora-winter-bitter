FROM php:7.2-fpm

RUN apt-get update
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug
RUN apt-get install -y --no-install-recommends zlib1g-dev git zip unzip subversion fossil hg-fast-export graphviz

RUN docker-php-ext-install -j$(nproc) mysqli
RUN docker-php-ext-install -j$(nproc) pdo_mysql
RUN docker-php-ext-install zip

RUN curl --silent --show-error https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

RUN mkdir /.npm
RUN chown -R 501:20 "/.npm"
RUN mkdir /.config
RUN chown -R 501:20 "/.config"
RUN mkdir /.composer
RUN chown -R 501:20 "/.composer"