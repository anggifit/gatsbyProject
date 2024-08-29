# Proyecto Gatsby

## Descripción

Este es un proyecto desarrollado con [Gatsby](https://www.gatsbyjs.com/), un framework moderno basado en React para crear sitios web estáticos rápidos y optimizados. Este proyecto utiliza [Tailwind CSS](https://tailwindcss.com/) para el estilo y tiene configuraciones personalizadas para componentes.

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu máquina:

- Node.js (versión recomendada: >= 14.0.0)
- npm (versión recomendada: >= 6.0.0) o [Yarn](https://yarnpkg.com/)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/anggifit/gatsbyProject.git
    cd mi-proyecto
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo:

    ```bash
    npm run develop
    ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm run develop`

Inicia el servidor de desarrollo en modo de desarrollo.
Abre [http://localhost:8000](http://localhost:8000) para verlo en el navegador.
La página se recargará si realizas modificaciones en el código.

### `npm run build`

Compila la aplicación para producción en la carpeta `public`.
Esta compilación está optimizada y lista para desplegarse.

### `npm run serve`

Sirve la aplicación compilada en el entorno local.
Generalmente se utiliza para probar la versión de producción localmente.

### `npm run clean`

Elimina la carpeta `.cache` y `public`.