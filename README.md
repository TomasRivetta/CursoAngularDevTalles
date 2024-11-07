# Curso de Angular DevTalles

## Introduccion

[Instalaciones recomendadas](https://gist.github.com/Klerith/4816679624c1cb528f8e05d902fd7cff)

[Cheat-sheet anterior](/cheat-sheets/angular-cheat-sheet-viejo.pdf)

[Cheat-sheet nuevo](/cheat-sheets/angular-cheat-sheet-v2.pdf)

[Documentacion oficial de angular antigua](https://v17.angular.io/cli)

[Documentacion oficial de angular actual](https://angular.dev/tools/cli)

Para ver si se instalo correctamente

```
ng version
```

## Conceptos generales

### Introduccion

¿Por que angular?

Angular JS hace referencia al angular 1, que ya no se usa, pero cuando paso de angular 1 a 2 cambio muchisimo y ahora se llama angular

Tiene una curva de aprendizaje que empieza con la curva y despues se calma

### ¿Qué es TypeScript? y ¿Por qué Angular usa TypeScript?

JavaScript pero con caracteristicas extendidas, mejorado
si sabes JavaScript, conoces el 80% de TypeScript

TypeScript

- Es un super set de JavaScript
- Ofrece tipado estricto y flexible
- Mejora enormemente la legibilidad del codigo
- Nos permite usar caracteristicas modernas

¿Por que angular usa TS?

- Tener todos los beneficios de TS
- Porque trabajar en angular es trabajar en clases de TS
- Tenemos la ayuda y un intellisense fuerte
- Tenemos tipado estricto y errores en momento de escritura
- Nos permite la inyeccion de dependencias

## Bases de TypeScript - Recomendado

Hice un curso de typescript del mismo profesor donde se explica los mismos temas y mas
por eso lo salteo

[Codigo de la seccion](introduccion-typescript-main)

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
  - Dentro del @Component tenemos el selector que es como queremos que se llame el componente en el html, tenemos el templateUrl: es basicamente lo que usamos para mostrar
  - Y para mostrarlo al componente en otro html hay que ir al app.module y en la declarations lo importamos con el nombre que le colocamos a la clase
- De forma con la extension:
  - Escribimos 'a-component' y nos crea el esqueleto del component
