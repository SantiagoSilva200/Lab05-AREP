# Lab05-AREP - Sistema CRUD para manejo de propiedades

#### Objetivo del laboratorio

El objetivo de este laboratorio fue desarrollar un sistema CRUD para la gestión de propiedades inmobiliarias, aplicando conceptos de desarrollo web full stack y despliegue en la nube.

#### Descripción

El sistema debía permitir a los usuarios:

    Crear nuevos registros de propiedades.

    Consultar la lista completa de propiedades o los detalles de una en específico.

    Actualizar la información de una propiedad existente.

    Eliminar propiedades registradas.

Para lograrlo se implementó:

    Frontend (HTML + JavaScript): interfaz sencilla con formularios y listados para interactuar con el sistema.

    Backend (Spring Boot REST API): servicios REST que exponen las operaciones CRUD sobre las propiedades.

    Base de datos (MySQL): almacenamiento persistente de los registros usando JPA/Hibernate.

    Despliegue en AWS: el backend y la base de datos se desplegaron en instancias EC2 separadas.

#### Estructura del backend

El proyecto sigue una arquitectura típica de Spring Boot con separación entre backend y frontend:

![18](src/main/images/18.png)

    src/main/java/co.edu.arep/Backend

        Application: Clase principal que arranca la aplicación.

        Property: Entidad que representa una propiedad.

        PropertyRepository: Interfaz JPA para la persistencia en base de datos.

        PropertyService: Lógica de negocio para manejar propiedades.

        PropertyController: Expone los servicios REST para las operaciones CRUD.

    src/main/resources/static

        index.html y app.js: Frontend sencillo en HTML y JavaScript para interactuar con el sistema.

    application.properties

        Configuración de la aplicación (conexión a la base de datos, puerto, etc.).

#### Creacion Base de datos (MySQL)

La base de datos se configuró en AWS siguiendo estos pasos:

    Creación de la base de datos

        Se creó la base de datos property_db y el usuario con permisos necesarios.

![2](src/main/images/2.png)

    Configuración inicial

        Se ajustaron parámetros de conexión y opciones de seguridad según las necesidades de la aplicación.

![3](src/main/images/3.png)


    Verficación Creación Base de datos

       Se confirma que la base de datos se haya creado correctamente. 

![4](src/main/images/4.png)

    Regla de entrada

        Se agregó una regla de seguridad en el grupo de AWS, permitiendo conexiones al puerto 3306  desde la IP del backend.

![5](src/main/images/5.png)

### AWS

Como estipulaba el laboratorio, el Backend-Frontend y la base de datos debian estar separados sobre dos instancias EC2 diferentes 

![16](src/main/images/16.png)

### Pruebas CRUD

#### A. Conexión a la base de datos

    Primero, nos conectamos a la base de datos desde DBeaver usando la referencia de la base de datos creada previamente en AWS.

![6](src/main/images/6.png)

![7](src/main/images/7.png)


#### B. Crear (C)

    Se creó una nueva propiedad desde el despliegue del EC2 del backend.

![1](src/main/images/1.png)

    Vemos que queda como propiedad listada. 

![8](src/main/images/8.png)


#### C. Leer (R)

    Usamos el endpoint que definimos en el controlador de /api/properties para verificar la creación. 

![9](src/main/images/9.png)

    Verificamos en DBeaver que el registro se hubiera agregado correctamente. 

![10](src/main/images/10.png)


#### D. Actualizar (U)

    Utilizamos la propiedad creada anteriormente para actualizar un atributo de la propiedad. En este caso, hacemos el cambio del tamaño. 

![11](src/main/images/11.png)

    Usamos el endpoint que definimos en el controlador de /api/properties para verificar la actualización. 

![12](src/main/images/12.png)

    Verificamos en DBeaver que el registro se hubiera actualizado correctamente. 

![13](src/main/images/13.png)

#### E. Eliminar (D)

    Con la misma propiedad que creamos anteriormente, procederemos a eliminar el registro, y haremos las mismas verificaciones.

![14](src/main/images/14.png)

    Endpoint actualizado con la eliminacion. 

![15](src/main/images/15.png)

    Dbeaver

![16](src/main/images/17.png)

### Video de Instancias separadas en AWS y pruebas 

[Video de despliegue](./src/main/video/PruebasCRUD.mp4)

1. Presionar el enlace

2. Seleccionar "View RAW" 

3. El video se descargara y ya podra ser visible

## Tecnologías

Java 17 + 

MySQL 

Docker 

AWS

### Autor

Taller desarrollado por Santiago Silva Roa 