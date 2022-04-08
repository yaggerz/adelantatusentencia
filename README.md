
## Comenzando

Antes que nada debemos asegurarnos que tenemos node js instalado, para ello abriremos nuestra terminal o cmd en windows y ejecutaremos el siguiente comando

```bash
node --version
```
La salida deberia ser un numero superir a la version 14, si no tenemos resultado, debermos instalarlo, para ello podemos seguir la siente guia de instalacion [guia de instalacion node js](https://kinsta.com/es/blog/como-instalar-node-js/)

Una vez instalado, corremos el servidor de desarrollo

```bash
npm run dev
# or
yarn dev
```

Luego abrimos nuestro navegador preferido y nos dirigimos a [http://localhost:3000](http://localhost:3000) 

Cada cambio que realicemos se mostrará automaticamente gracias al hot reload.


## Haciendo ediciones

Si queremos editar contenido, de sitio, nos dirigimos a la carpeta page/index.js y una vez dentro tendremos las diferentes secciones divididas en componentes, a diferencias del header y footer, que se encontran dentro de layout/layout
