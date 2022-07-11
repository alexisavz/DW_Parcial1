      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
      */
      let nameButton = document.getElementById("btn_mayusculas")      //Se Obtiene la referencia del boton
      nameButton.addEventListener("click", postNames)                 //Se agrega un EventListener en click
      
      function postNames(e){                                          //Se pasa el evento como parametro
        e.preventDefault()                                            //Se evita que la pagina recargue al omprimir el boton
        let names = document.getElementById("txt_may").value          //Se obtienen los nombres como string
        let newNames = names.toLowerCase();                           //Se transforman los valores a minusculas
        document.getElementById("txt_may").value = newNames           //Se escriben nuevamente los valores en el textarea
      }

      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */
      let convertButton = document.getElementById("btn_añoshumano")         //Se obtiene la referencia del boton
      convertButton.addEventListener("click", convert)                      //Se agrega el eventlistener
      function convert(e){        
        e.preventDefault()                                                  //Se evita que se recargue la pagina
        let value = parseInt(document.getElementById("edad_humano").value)  //Se obtiene el valor
        let newValue = value * 7;                                           //Se moficia el valor
        document.getElementById("edad_perro").value = newValue              //Se escrib ele valor en el campo correspondiente
      }


    /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */

    function pokemon(name, species, attack, defense){                           //Se crea el constructor del objeto
      this.name = name
      this.species = species
      this.attack= attack
      this.defense = defense
    }

    let pokemon1 = new pokemon("Bulbasaur","Grass",49,50)                       //Se crean ambos objetos
    let pokemon2 = new pokemon("Charmander", "Fire",52,43)

    let pokeButton = document.getElementById("btn_muestra")                     //Se obtiene la referencia del boton
    pokeButton.addEventListener("click", showPokemon)                           //Se agrega un eventlistener

    function showPokemon(e){
      e.preventDefault()                                                        //Se evita que la pagina se recargue al oprimir el boton

      document.getElementById("nombre_poke1").value = pokemon1.name             //Se escribe la informacion del primer pokemon
      document.getElementById("especie_poke1").value = pokemon1.species
      document.getElementById("ataque_poke1").value = pokemon1.attack
      document.getElementById("defensa_poke1").value = pokemon1.defense

      document.getElementById("nombre_poke2").value = pokemon2.name             //Se escribe la informacion del segundo pokemon
      document.getElementById("especie_poke2").value = pokemon2.species
      document.getElementById("ataque_poke2").value = pokemon2.attack
      document.getElementById("defensa_poke2").value = pokemon2.defense
    }