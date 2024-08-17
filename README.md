# Сайт Kardo для мобильных устройств
Используемый стек технологий: 
HTML, CSS, React, JavaScript, Typescript, react-youtube, slick-carousel


## Сведения о команде: 
Верстка главной страницы и направлений, функцинональная часть и верстка страниц подачи заявки, загрузки видео, авторизации и регистрации:
Кристина Гураченкова https://github.com/KrisGurach 

Функционал и верстка личного кабинета участника:
Данила Климюк https://github.com/Danbka-Taranbka


### Функционал приложения:
- Регистрация, авторизация и аутентификация пользователей
- Обновление данных о пользователе в личном кабинете (для авторизованных пользователей)
- Регистрация пользователей на событие (для авторизованных пользователей)
- Загрузка видео для события 


#### Ссылка на задеплоинное приложение
http://51.250.32.130:3000

Для запуска приложения должен быть установлен docker

Приложение состоит из двух репозиториев, для его запуска необходимо:
1. Создать новую директорию
2. Склонировать репозиторий бэкенда c помощью команды
```
git clone https://github.com/nikitalevshin/kardo-mobile-app backend
```
3. Склонировать репозиторий фронтенда с помощью команды
```
git clone https://github.com/KrisGurach/Cardo frontend
```
<details>
  <summary>4. В созданной директории вставить данный текст для создания docker-compose.yml</summary> 
  
  **Предварительно внести изменения в путях к директориям, убрать комментарии обозначенные //**
  
  ```
 cat > /home/workshop/mainapp/docker-compose.yml <<EOL //директория создания docker-compose.yml
version: '3.8'

services:
  kardo-db:
    image: postgres:14-alpine
    container_name: kardo_db_container
    ports:
      - "6541:5432"
    environment:
      - POSTGRES_DB=kardo
      - POSTGRES_USER=kardoadmin
      - POSTGRES_PASSWORD=thisiskardoadmin
    volumes:
      - /home/workshop/mobileapp/database:/var/lib/postgresql/data //директория, где будет хранится база данных

  kardo-app:
    build:
      context: /home/workshop/mobileapp/backend //директория хранения бэкенда
    image: kardo_image
    container_name: kardo_container
    ports:
      - "8080:8080"
    depends_on:
      - kardo-db
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://kardo-db:5432/kardo
      - DB_NAME=kardo
      - POSTGRES_USER=kardoadmin
      - POSTGRES_PASSWORD=thisiskardoadmin
      - DB_HOST=kardo-db
      - DB_PORT=5432
    volumes:
      - /home/workshop/mobileapp/kardo-mobile-app:/app/videos //директория для хранения видео локально

  kardo-frontend:
    build:
      context: /home/workshop/mobileapp/frontend //директория хранения фронтенда
    image: kardo_frontend_image
    container_name: kardo_frontend_container
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://kardo-app:8080
    depends_on:
      - kardo-app
EOL
```
</details>
5. Запустить приложение с помощью команды:

```
docker compose up
```




