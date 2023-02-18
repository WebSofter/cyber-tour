# resident_card

## Общее описание

1. Проект создан с использованием CMS **WordPress**, поэтому потребуется **Docker**, чтобы создать изолированную среду для исполнения **PHP** - кода в виде контейнера. **Docker** не обязателен, но так легче и быстрее поднять все сервисы.
2. Для хранения данных используется **СУБД PostgreSQL**, поэтому в системе используется модифицированный мост на основе не официального системного модуля **pg4wp** для перекодировки **SQL** из **MySQL** в специфичный формат **PostgeSQL**.
3. Все последние дампы базы данных находятся в папке **dumps** следует последнюю версию импортировать в контейнер **PosgreSQL**(будет расказано внизу).
4. По умолчанию проект запустится на  **localhost** на порту **83**, как это указано в файле **docker-compose.yml**.
5. Все основные данные проекта находятся в файле **.env**.
6. Данные для входа в админку: **localhost:83/wp-admin | admin/secret**

## Установка

1. Клонируем репозиторий `git clone git@github.com:WebSofter/resident_card.git`
2. Заходим в корень проекта `cd resident_card`
3. Поднимаем контейнеры `docker-compose up -d`
4. Ипортируем дамп базы данных `docker exec -i spa_mysql mysql -uu0996510_default -p'!7Gse9Ha' u0996510_default < ./docker/dump/dump-upd.sql`
4.1. Для экспорта будет полезна команда `docker exec -i spa_mysql mysqldump -uu0996510_default -p'!7Gse9Ha' u0996510_default > ./docker/dump/dump-upd.sql`
5. После поднятия проект будет доступен по адресу `localhost:83`

## Привязка к домену

Для привязки к домену можно использовать прокси-сервер NGINX, который будет перенаправлятьв се внешние запросы с порта **your-domain.ru:80** на наш внутренний **localhost:83**. Прире шаблона конфигурации находится в файле **domain.nginx.template**

```
server {
    server_name your-domain.ru www.your-domain.ru;

    location / {
        proxy_pass http://localhost:83;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Для добавления сертификатов можно воспользоваться letenscrypt или свои корпоративные, которые добавляются в привычном режиме в файле конфигурации NGINX без каких-либо последствий для запуска проекта на домене.
