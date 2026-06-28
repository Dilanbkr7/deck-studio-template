## Requisitos del entorno

Esta plantilla está estandarizada para utilizar:

* Node.js 24.x
* npm 11.x
* Git

### Descargar Node.js

Descarga Node.js desde la página oficial:

* [Node.js — Descarga oficial](https://nodejs.org/es/download)
* [Archivo de versiones Node.js 24](https://nodejs.org/en/download/archive/v24)

En Windows selecciona:

1. Versión LTS.
2. Windows.
3. Arquitectura x64.
4. Installer `.msi`.

El instalador de Node.js también instala npm. No es necesario descargar npm por separado.

### Comprobar las versiones

Abre CMD y ejecuta:

```cmd
node -v
npm -v
git --version
```

El resultado debe comenzar aproximadamente así:

```text
v24.x.x
11.x.x
git version 2.x.x
```

No es obligatorio utilizar exactamente Node.js 24.16.0. Cualquier versión estable de la rama 24 es válida para esta plantilla.

### Versiones declaradas por el proyecto

El archivo `package.json` contiene:

```json
"engines": {
  "node": "^24.0.0",
  "npm": "^11.0.0"
}
```

Esto permite Node.js 24.x y npm 11.x.

El archivo `.nvmrc` contiene:

```text
24
```

Esto indica que la versión principal recomendada es Node.js 24.

### Después de clonar

Ejecuta:

```cmd
npm ci
npm run check
npm run dev
```

`npm ci` instala las dependencias registradas en `package-lock.json`. No copies la carpeta `node_modules` desde otra computadora.
