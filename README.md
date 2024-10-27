# DesafioLatam_Des14
## Hito 7 React (26-10-2024)

Se crea el userContext dentro de la carpeta context con el token en true por defecto y método logout que lo setea en falso y muestra alerta de cierre de sesión.

Se crea la carpeta routes y el archivo ProtectedRoute.jsx con las condiciones para proteger la ruta
/profile y dejar /login y /register como publicas.
**IMPORTANTE: Con esta implementación, al dejar por defecto el token en true, al cerrar la sesión e ingresar manualmente a la ruta /profile, se carga el token nuevamente con su valor por defecto.**

Se agrega el botón pagar que se deshabilita si no está iniciada la sesión (token=true) y también se deshabilita si no hay items en el carrito. Al presionar el botón se llama a una nueva función que limpia el carro de compras.

El botón logout del navbar, cambia el valor del token y también lo hace el botón logout de /profile.

La implementación de useParams para cargar la información correspondiente, ya estaba funcionando de un hito anterior.

## Hito 6 React (21-10-2024)

Se crea una carpeta context en el proyecto

Se implementan 2 Context: Carro y Pizza (CartContext y PizzaContext)

Se pueden agregar las pizzas desde el Home y se actualizan los montos del NavBar y el carro de compras muestra correctamente las cantidades y valores.

Se pueden sumar o restar más cantidades de pizzas seleccionadas en el carro de compras, actualizandose el valor en el total mostrado y en el navbar.

## Hito 5 React (13-10-2024)

Ya estaba el componente react router implementado, solo se ajusta a los requerimientos pedidos en este hito.

Se cambian los componentes Home, Register, Login, Cart y Pizza a la carpeta pages

Se crean las rutas necesarias para los componentes indicados manteniendo el id dinámico del Hito 4, agregando el Profile y NotFound para paginas no existentes

El nombre, apellido y mail del usuario se reciben en el componente Profile desde el App.jsx

El boton de Cerrar Sesión del Profile como el Logout del NavBar redirigen al Home de la misma manera.

Se agrega como extra 2 componentes estilizados para la consulta de datos de la API y el error en caso de que falle.

## Hito 4 React (09-10-2024)

Como el componente Cart.jsx no se pidió modificar para este hito, mantiene aún su logica de funcionamiento con el archivo pizza.js del hito anterior. Pero las referencias a este archivo fueron removidas de los componentes que deban llamar a la API para funcionar.

Las llamadas a la API estan configuradas para localhost:5000 y no se incluyen los archivos para levantarla.

Se quitó la descripción de las pizzas de CardPizza.jsx para no repetir tanta información y que se muestren en el nuevo archivo Pizza.jsx.

Se agregó useParams y useNavigate en los diferentes .jsx para que el boton "Ver mas" que se muestra en el Home, lleve al detalle de cada Pizza de manera dinámica.

En caso de que haya algún error al momento de llamar a la API se muestra un mensaje de error con el detalle.


## Hito 3 React (04-10-2024)
Se quitó la generación de numero aleatorio para mostrar en el carro de compras y se utiliza el que se carga desde pizza.js.

Al pinchar sobre el boton del carro se muestran las pizzas con sus botones y la actualización del total a pagar y las cantidades.

Se muestran las pizzas del archivo pizza.js y se agrega la descripción a la CardPizza.


## Hito 2 React (27-09-2024)

Para este hito, se quitó la generacion del token aleatorio para que se muestren siempre los links de Login y Register en el Navbar.

Los mensajes de error se muestran como parrafos en los formularios y si todo el form está bien, se muestra un alert con texto al presionar el botón correspondiente.


## Hito 1 React (14-09-2024)

Consideraciones especiales:
Para este hito en el archivo Home.jsx se creó una const pizzasMostrar que tiene un json con los datos de las pizzas a mostrar y se les pasa como parametro al componente CardPizza.
Puedes agregar más pizzas si quisieras y se mostrarán sin problemas siguiendo la siguiente estructura:
```
{
  name: "Napolitana",
  price: 5950,
  ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
  img: "https://mandolina.co/wp-content/uploads/2023/08/pizza-napolitana-1080x550-1.png"
},
```
El token se genera aleatoriamente entre true y false con un Math.random, por lo que tendrás que actualizar la pagina para ver sus diferentes valores.

El total también se genera aleatoriamente entre 9000 y 120000 con una combinacion de Math.random, Math.floor y Math.round para redondearlo a la centena.
