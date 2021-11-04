alert("Bienvenid@ a Panchos Arcu (Con objetos)!");



function panchoConstructor () { 
    this.pan = 0;
    this.panName = "";
    this.salchicha = 0;
    this.salchichaName = "";
    this.toppings = 10,
    this.toppingsList = "";
    this.salsas = 10;
    this.salsasList = "";
}

const pancho = new panchoConstructor();

var seguir = true;
var i = 0;
var total = 0;

while (seguir == true) {
    pancho.pan = parseInt(prompt("¿Que pan quiere para su pancho? (Escriba el numero porfavor) 1 Pan integral($70) 2 Pan de papa($80) 3 Pan clasico($60)"));
    switch (pancho.pan) {
        case 1:
            pancho.panName = "integral"
            total += 70;
            seguir = false;
            break;
        
        case 2:
            pancho.panName = "de papa"
            total += 80;
            seguir = false;
            break;

        case 3:
            pancho.panName = "clasico"
            total += 60;
            seguir = false;
            break;
        
        default:
            seguir = true;
            console.log("lol");
    }
}

seguir = true;

while(seguir == true){
    pancho.salchicha = parseInt(prompt("¿Que salchicha quiere para su pancho? (Escriba el numero porfavor) 1 Viena($60) 2 Alemana($80) 3 De carne vacuna(Kosher)($100)"));
    switch (pancho.salchicha) {
        case 1:
            pancho.salchichaName = "viena"
            total += 60;
            seguir = false;
            break;
        
        case 2:
            pancho.salchichaName = "alemana"
            total += 80;
            seguir = false;
            break;

        case 3:
            pancho.salchichaName = "vacuna"
            total += 100;
            seguir = false;
            break;
        
        default:
            seguir = true;
    }
}
    
while(pancho.toppings!=0){
    i++;
    pancho.toppings = parseInt(prompt("¿Que topping Nro."+i+" quiere para su pancho? (Escriba el numero porfavor) 0 Ninguno 1 Bacon($60) 2 Carne($50) 3 Papas pay($20) 4 Jalapeños($20) 5 Palta($100)"));
    if (i>1 && pancho.toppings!=0 && pancho.toppings>-1&& pancho.toppings<6) {
        pancho.toppingsList +=", ";
    }
    switch (pancho.toppings) {
        case 0:
            break;

        case 1:
            pancho.toppingsList += "bacon"
            total += 60;
            break;
        
        case 2:
            pancho.toppingsList += "carne"
            total += 50;
            break;
    
        case 3:
            pancho.toppingsList += "papas pay"
            total += 20;
            break;

        case 4:
            pancho.toppingsList += "jalapeños"
            total += 20;
            break;    
        
        case 5:
            pancho.toppingsList += "palta"
            total += 100;
            break;    
    }
    
}
i=0;
while(pancho.salsas!=0){
    i++;
    pancho.salsas = parseInt(prompt("¿Que salsa Nro."+i+" quiere para su pancho? (Escriba el numero porfavor) 0 Ninguno 1 Ketchup($0) 2 Barbacoa($10) 3 Mostaza($0) 4 Mayonesa($0) 5 Cheddar($70) 6 Salsa Golf($0) 7 Chili($100) 8 Chucrut($30)"));
    if (pancho.toppingsList!="" && pancho.salsas!=0 &&pancho.salsas>-1&&pancho.salsas<9) {
        pancho.salsasList +=", ";
    }
    switch (pancho.salsas) {
        case 0:
            break;

        case 1:
            pancho.salsasList += "ketchup"
            total += 0;
            break;
        
        case 2:
            pancho.salsasList += "barbacoa"
            total += 10;
            break;
    
        case 3:
            pancho.salsasList += "mostaza"
            total += 0;
            break;

        case 4:
            pancho.salsasList += "mayonesa"
            total += 0;
            break;    
        
        case 5:
            pancho.salsasList += "cheddar"
            total += 70;
            break;   

        case 6:
            pancho.salsasList += "salsa golf"
            total += 0;
            break; 
        
        case 7:
            pancho.salsasList += "chili"
            total += 100;
            break; 

        case 8:
            pancho.salsasList += "chucrut"
            total += 30;
            break; 
    }
}
alert("Usted pidió un pancho con pan "+pancho.panName+", salchicha "+ pancho.salchichaName+", con " +pancho.toppingsList+pancho.salsasList+" por un total de $"+total+" pesos.");
alert("Muchas gracias por su compra, vuelva pronto!");
console.log(pancho);