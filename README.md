# starter-react-php

postgres:
install 
```
sudo apt update 
sudo apt install postgresql
sudo service postgresql start
psql --version

```

create first db 

```
sudo -u postgres createuser -s emeric
sudo -u postgres createdb starter

```

Dans ton projet Laravel (crud/.env), modifie la section DB :

```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=crud
DB_USERNAME=emeric
DB_PASSWORD=crud
```

Laravel a besoin du driver pdo_pgsql :

```
sudo apt install php8.3-pgsql
```

Définis un mot de passe pour ton utilisateur PostgreSQL

```
sudo -u postgres psql
```
Puis dans le shell psql :

```
ALTER USER emeric WITH PASSWORD 'tonmotdepasse';
```