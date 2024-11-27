# Drilling: Conexión a una Base de Datos con Node.js y PostgreSQL

Este proyecto muestra cómo conectarse a una base de datos PostgreSQL utilizando Node.js y el paquete `pg`. Está diseñado como parte del ejercicio **"DRILLING: Conectarse a una Base de Datos con Node-PostgreSQL"**, y sigue las mejores prácticas para establecer conexiones como cliente y pool, además de utilizar un URI string.

## Requisitos previos

Antes de trabajar en este proyecto, asegúrate de haber revisado:

- Configuración inicial de Node.js y npm.
- Instalación y configuración de PostgreSQL.
- Conexión a bases de datos desde Node.js.

## Base de datos

Te dejo un  ejemplo de como puedes crear la base de datos para que sea compatible con el programa:

```PSQL
CREATE DATABASE practica_db;

CREATE TABLE estudiantes (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
	edad INTEGER,
	nro_identificacion INTEGER
);

INSERT INTO estudiantes(nombre,apellido,edad,nro_identificacion) VALUES 
('Nelson','Valenzuela',28,123456789),
('Gustavo','Alonso',11,112345678),
('Hoppy','Pi',5,111234567),
('Donker','Klein',11,11113456),
('Susu','Watari',4,111112345),
('Sam','Winchster',7,111111234);
```

## Pasos para Ejecutar el Proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/soyNelsonValenzuela/nelsonValenzuela_Drilling_S1-M7.git
cd nelsonValenzuela_Drilling_S1-M7
```

### 2. Instalar dependencias

Asegúrate de tener Node.js y npm instalados. Luego, ejecuta:
```bash
npm install
```

### 3. Configurar el archivo .env

Este proyecto utiliza un archivo .env para gestionar las credenciales y parámetros de conexión a la base de datos.
	1.	Crea un archivo .env en la raíz del proyecto.
	2.	Usa el archivo .envexample como referencia para el formato.
	3.	Completa el archivo .env con los datos correspondientes:

 ```
USER=tu_usuario
HOST=tu_host
DATABASE=tu_base_de_datos
PASSWORD=tu_contraseña
PORT=puerto_de_tu_base_de_datos
```

**Nota**: Asegúrate de mantener este archivo privado y nunca subirlo a repositorios públicos.

### 4. Ejecutar los scripts

Los scripts disponibles en este proyecto permiten probar distintas formas de conexión a la base de datos. Para ejecutarlos, utiliza los comandos especificados en el archivo package.json:

- Conexión como cliente:

```bash
npm run client
```

- Conexión utilizandoselo un pool:

```bash
npm run pool
```

- Conexión utilizando un URI string:

```bash
npm run uri
```

Cada comando ejecutará su respectivo archivo y mostrará los resultados de la conexión o consulta en la consola.

### Funcionalidades

  1. **Conexión con  cliente**:
     El código establece una conexión directa con la base de datos utilizando un cliente de PostgreSQL.
  2. **Conexion con Pool**:
     Implementa un pool de conexiones para manejar múltiples solicitudes de manera eficiente.
  3. **Conexión con URI string**:
     Permite realizar la conexión usando un URI string para una configuración más sencilla.
     
**Autor**: Nelson Valenzuela Gómez
  
