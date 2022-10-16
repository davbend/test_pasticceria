# Test pasticceria

Il node_modules dev'essere recuperato tramite il comando:

```
npm install
```

Per la configurazione del database è necessario su postgresql eseguire da terminale psql i seguenti comandi:

```
CREATE DATABASE dolce;
GRANT ALL PRIVILEGES ON DATABASE "dolce" to postgres;
```

Per creare il db e dare accesso all'utente postgres mentre la tabella verrà creata dal programma in fase di esecuzione in modo permanente.

Per avviare il backend lanciare l'applicazione **PasticceriaApplication.java** ( alla quale è possibile fare chiamate REST all'indirizzo http://localhost:8080) ed eseguire il seguente comando per lanciare il lato frontend:

```
npm install
```

Che avvierà una nuova sessione all'indirizzo http://localhost:3000
