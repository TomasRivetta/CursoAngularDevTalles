# Curso de Angular DevTalles

## Introducción

[Instalaciones recomendadas](https://gist.github.com/Klerith/4816679624c1cb528f8e05d902fd7cff)

[Cheat-sheet anterior](/cheat-sheets/angular-cheat-sheet-viejo.pdf)

[Cheat-sheet nuevo](/cheat-sheets/angular-cheat-sheet-v2.pdf)

[Documentación oficial de angular antigua](https://v17.angular.io/cli)

[Documentación oficial de angular actual](https://angular.dev/tools/cli)

Para ver si se instalo correctamente

```
ng version
```

## Conceptos generales

### Introducción

¿Por que angular?

Angular JS hace referencia al angular 1, que ya no se usa, pero cuando paso de angular 1 a 2 cambio muchísimo y ahora se llama angular

Tiene una curva de aprendizaje que empieza con la curva y después se calma

### ¿Qué es TypeScript? y ¿Por qué Angular usa TypeScript?

JavaScript pero con características extendidas, mejorado
si sabes JavaScript, conoces el 80% de TypeScript

TypeScript

- Es un super set de JavaScript
- Ofrece tipado estricto y flexible
- Mejora enormemente la legibilidad del código
- Nos permite usar características modernas

¿Por que angular usa TS?

- Tener todos los beneficios de TS
- Porque trabajar en angular es trabajar en clases de TS
- Tenemos la ayuda y un intellisense fuerte
- Tenemos tipado estricto y errores en momento de escritura
- Nos permite la inyeccion de dependencias

## Bases de TypeScript - Recomendado

Hice un curso de typescript del mismo profesor donde se explica los mismos temas y mas
por eso lo salteo

[Código de la seccion](introduccion-typescript-main)

## Angular

Con Angular podes desarrollar para muchas plataformas(Movil,App de escritorios, paginas web)

Angular es un framework

- Marco de trabajo estandarizado
- Viene con todo lo que necesitas para trabajar
- Es modular, es decir vamos a crear modulos que van a tener objetivos especificos
- Google mantiene hoy en dia el framework de angular

Bloques Fundamentales de Angular

- Componentes: Bloque de codigo con un archuvo HTML(codigo html que se conoce) y un archivo de TypeScript que es una clase con decoradores
- Rutas: Mostrar diferentes componentes basados en el URL del navegador web
- Directivas : 3 tipos:
  - Directivas de componentes: Es muy parecido a un componente pero con html reutilizable
  - Directivas Estructurales: MOdifica el DOM o el HTML, ya sea agregando o removiendo elementops
  - Directivas de Atributos: Cambian la aparencia o el comportamiento de un elemento o compoenente o directiva
- Servicios: Gracias a los servicios no es necesario entrar a redux, son singleton, que nos permitira trabajr en la app con la informacion centralizada
- Modulos: Permiten agrupar lo mencionado anteriormente. Por ejemplo: tenemos Modulo de Productos, Modulo de Clientes, Modulo de Atuntecacion, Modulo de Proveedores y cada modulo tiene sus componentes,sus rutas,sus directivas y sus servicios

Desde Angular v17, por defecto los proyectos trabajan sin módulos (module-less)
Pero para trabajar de forma tradicional, como lo vieron en el curso:

`ng new <nombre de la aplicación> --standalone false`

### Nuestro primer proyecto en Angular

Nos crea la aplicacion con todas las dependencias
`ng new <nombre de la aplicación> --no-standalone`

nos movemos a nuestra carpeta de proyecto y para largar instantaneamente la app
`ng serve -o`

### Explicacion de cada archivo del proyecto

- .editorconfig : Editar valores por defecto para nuestro editor, para tal proyecto en especifico
- .gitignore : Es un archivo propio de git para evitar que cuando hagamos un commit, los archivos que esten en gitignore seran ignorados
- angular.json : Le decimos a angular ciertas configuraciones para la ejecucion de nuestra aplicacion, por ejemplo: cual es el archivo que se va a usar para lanzar la aplicacion, cuales son los archivos estaticos de la aplicacion
- package-lock.json : no lo tocamos manualmente, se toca cuando se realizen comando de instalacion o se remuevan deèndencias
- package.json : algo propio de las app de node, los scripts que tenemos, dependencias de produccion
- README.md : se utiliza para explicar ocmo se corre la aplicacion, como funciona, si hay alguna configuracion especial
- tsconfig : son archivos de configuracion de TypeScript
- La carpeta .angular : es un archivo que no hay que modificarlo, ayuda a angular a manejar rapidamente, si hay cambios, maneja el cache del proyecto en desarrollo
- La carpeta .vscode : es propio de visual studio code, en el archivo extensions.json podemos recomendar un set de extensiones recomendadas para que use.
- La carpeta node_modules: modulos de node
- La carpeta public : los archivos publicos, por ejemplo el favicon.ico
- La carpeta src : es donde vamos a crear el codig ode angular, hay archivos y varias carpetas
  - index.html : es un simple archivo html, la aplicacion de angular se crea dentro del componente app.root
  - style.css : estilos globales o estilos por componente
  - carpeta app : donde vamos a crear la logica de nuestra aplicacion

### App Component

app.component.html - Todo el html que escribamos en este archivo se va a mostrar y para usar alguna variable de nuestro archivo app.component.ts debemos utilizar {{ nombreVariable }}

app.component.ts - Es el corazon del componente, es lo principal

### Contador

### Contador Component

Crear un componente:

- De forma manual:
  - Creamos una carpeta con el nombre del componente.
  - Click derecho un archivo nombre.component.ts
  - creamos una clase una clase que exportamos y arriba le colocamos el decorador @Component, importado de angular core,
  - Dentro del @Component tenemos el selector que es como queremos que se llame el componente en el html, tenemos el templateUrl: es básicamente lo que usamos para mostrar
  - Y para mostrarlo al componente en otro html hay que ir al app.module y en la declarations lo importamos con el nombre que le colocamos a la clase
- De forma con la extension:
  - Escribimos 'a-component' y nos crea el esqueleto del component
- De forma con la consola:
  - En la consola Colocamos 'ng g c path/nombreComponente'
  - Esto nos generara el componente con el html, el ts, el css y el spec.ts y actualiza el app.module.ts

En caso de crear un componente que no debe ir ahi en ubicacion, una es arrastrar la carpeta podria solucionar el problema y del app.modulo debo boorrarlo y reimportarlo.

### Componente Hero y directorios

### Interpolación, estructura HTML y estilos

Angular Docs - [Interpolación de expresiones](https://v16.angular.io/guide/interpolation)

### One way data binding - enlazado en una sola vía

### Directiva \*ngIf

\*ngIf="expresión"
a-if - para acceder al snippet

### Directiva \*ngFor

\*ngFor="let item of list"

### Ng-template y el ngIf-else

### Módulos en Angular

a-module : snippet para modulo

## Expandir Bases de Angular

### Que veremos en esta seccion

- Profundizar un poco más en los módulos

- FormsModule

- ngModel

- @Inputs

- @outputs

- Servicios

- Métodos en servicios

- Depuraciones

### Modulo DBZ

para generar un modulo usamos 'ng g m nombreModulo' y nos creara una carpeta con el modulo adentro

- pages: es un componente que vamos a usarlo como router para nuestra app

Creamos el modulo, le creamos las carpetas correspondientes, en la carpeta pages, creamos el main page component ts y le deifnimos el html lo exportamos y en el app.module.ts anotamos el nombre del modulo creado anteriormente

### @Input() - Recibir del padre

Define una propiedad que puede ser enviada desde el padre hacia el componente hijo.

### ngClass - Clases basado en condiciones

[ngClass]="{'clase': condicion, 'clase2':condicion }"

### FormsModule y ngModel

en el module tengo que importar el FormsModule

llaves cuadradas [] son atributos
parentes () escuchar eventos

### Formas de depurar la app

escribir 'debugger' en la parte de codigo que quiero que se pare javascript

### Servicios

el servicio tiene que tener la logica de negocio

### Servicio Privado

### Paquetes externos - UUID

npm i uuid

nos genera identificadores unicos

## Despliegues a produccion

### Generar build de produccion

es tener la aplicacion lista para subir a produccion

build de produccion: es la aplicacion minimizada, optimizada para la web

comando para build 'ng build' nos genera la carpeta dist

### HttpServer Local y Netlify

[http-server](https://www.npmjs.com/package/http-server)

sirve para montar un servidor rapido, para pruebas, no desplegar en produccioon

una vez instalado nos movemos a la carpeta y colocamos 'http-server -o'

## Aplicacion realizada en anteriores secciones

[aplicacion desarrollada](https://illustrious-alfajores-25dcfe.netlify.app/)

## Package.json Scripts

https://www.npmjs.com/package/copyfiles

https://www.npmjs.com/package/del-cli

## Gifs App

Comando para crear proyecto de forma tradicional
ng new nombreProyecto --no-standalone

modificamos el index agregando el cdn para bootstrap y boramos lo de neustro app.component.html

carpeta shared : va los nav bar, footer, lo que van a tener en comun las paginas

Para crear un modulo:
ng g m nombreModulo

y tengo que importar los modulos en nuestro app.module.ts en los imports

cuando creamos un componente tenemos que agregar al exports de nuestro modulo en caso de que lo queramos usar afuera y en la declarations.
EN CASO DE QUE QUERAMOS CREAR UN COMPONENTE PARA UN COMPONENTE PADRE ES SOLO ESPECIFICARLO EN EL MODULO DE ESE DIRECTORIO EN EL DECLARATIONS

### @ViewChild - Referencia al HTML

### Gifs Service