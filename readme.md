# E-Commerce _Wayna Vinos_

_Este poyecto es la entrega final del curso de React Js de **CoderHouse**. Es una website SPA que simula un e-commerce con sus productos y carrito de compras._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Para poder acceder de manera local puedes clonar el proyecto. Copiando el link del **CODE** vas a poder clonarlo en la consola_

```
git clone https://github.com/HilarioGutierrez/Hilario-Reactjs.git
```

### Instalación 🔧

_Con el proyecto abierto en la computadora debes instalar las siguientes dependencias para que el proyecto corra correctamente:_

_Instalar node_modules_

```
npm i 
```
_Para ver el proyecto en el puerto local ejecutar_
```
npm run dev
```

## Construido con Vite 🛠️

_Las herramientas que se utilizaron para realizar el proyecto fueron:_

* [VITE](https://vitejs.dev/) - App creada con vite
* [CHAKRA UI](https://chakra-ui.com/) - Libreria de estilos
* [REACT ICON](https://react-icons.github.io/react-icons/) - Iconos
* [SWEET ALERT 2](https://sweetalert2.github.io/) - Alerts
* [AXIOS](https://axios-http.com/docs/intro) - Previo al uso de Firebase se uso para obtener datos
* [FIREBASE](https://firebase.google.com/?hl=es) - Base de datos
* [REACT ROUTER DOM](https://reactrouter.com/en/main/) - Ruteo de la SPA

## Descripcion del proyecto

_Como fue mencionado en el incio, es un E-Commerce SPA. Mediante router dom,el usuario puede navegar en distintas. Estas, en este caso, son las distintas categorias de los productos que se venden (vinos). 
Estos vinos estan cargados en la base de datos de Firebase. Se obtienen median te los metodos particulares de la base de datos. 
Estos articulos son separados por cateorias y mostrados en dos instancias distintas. En la primera se los puede ver en cards donse se visualiza la informacion basica y al darles click de puede ver la descripcion de este producto. 
Con eventos y estados los productos pueden ser agregados al carrito. Este mismo maneja un context para poder simplificar sus datos a los distintos componentes de la app. 
Por Ultimo el cliente genera una orden de compra que la misma es guardada en la base de datos con la informacion principal de la compra._ 


## Autor ✒️

* **Hilario Gutierrez** - *Proyecto final del curso se React JS de CoderHouse* - [Hilario Gutierrez](https://github.com/HilarioGutierrez/)
