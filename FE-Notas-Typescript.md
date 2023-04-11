```html ```
# Instalación
- Instalación global en PC https://www.npmjs.com/package/typescript
npm install -g typescript

- Versión
tsc -v

- Compilar: en donde tenemos el app.ts
tsc app.ts

- Observador - Watcher
tsc app.ts -w

- Enlazamos con html
```html
<script src="./src//app.js"></script>
```

- Creamos tsconfig.json - En el ponemos las restricciones que queremos
tsc --init
"noImplicitAny": true,

- Transpilamos todos los .ts que estén en la carpeta seleccionada
tsc
- observador
tsc -w































