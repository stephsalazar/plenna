# Plenna

Web de uso interno en la que el personal médico puede ver el datalle de las pacientes, registrar una consulta nueva y llevar un control para el area de pagos.

## Levantar la aplicacion

1. Crear archivo `.env` con variables de entorno. (Los valores son los que entrega firebase al registar una app)

```
 REACT_APP_API_KEY
 REACT_APP_AUHT_DOMAIN
 REACT_APP_PROJECT_ID
 REACT_APP_STORAGE_BUCKET
 REACT_APP_MESSAGING_SENDER_ID
 REACT_APP_APP_ID
```

2. Instalar dependencias

```sh
npm i
```

3. Arrancar app

```sh
npm start
```

## Primeros Bocetos

Puedes encontrarlos [aquí](https://github.com/stephsalazar/plenna/wiki/Bocetos)! 


## Funcionalidades listas:

  Vistas:
   - Login
   - Detalle de paciente
   - Consulta
   - Resumen
   - notFound
  
  Login con firebase
  
  Almacenamiento de datos en Firebase

  Consumo de datos desde Firebase

## Funcionalidades pendientes:

  Consumo de datos de Firebase en vista del resumen
