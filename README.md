# DesafioLatam_Des14
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
