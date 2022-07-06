var edad= Number(prompt("Ingresa la Edad"));

//mayor de 18 que vivan en frontera
//embarazadas mayor de 18 que tengan 9 semanas de gestacion
//mayores de 30 o cumplan los 30 este año

if (edad >= 18 && edad <= 28 )
{
    var municipio= prompt("Vives en un municipio de la frontera del Norte del pais (S/N)?");
    if((municipio=='s' || municipio=='S'))
    {
        console.log("Soy Mayor de edad y vivo en la frontera norte del pais");
    }
    else
    {
        var embarazada = prompt("Eres mujer y estas embarazada (S/N)?");
            if(edad > 18 && (embarazada =='s' ||  embarazada =='S') )
            {
                var semanas= Number(prompt("Ingresa la cantidad de semanas de Gestacion si estas embarazada (0=Sin Embarazo)"));
                    if(semanas >= 9)
                    {
                        console.log("Puede vacunarse embarazada con edad mayor a 18 y 9 semanas de gestacion");
                    }
                    else
                    {
                        console.log("Faltan semanas de gestación");
                    }
            }
            else
            {
                console.log("Mujer No esta embarazada, no puede vacunarse");
            }
    }
}
else if (edad > 28)
{
    if (edad == 29)
    {
        var cumple= prompt("Cumples los 30 este año (S/N)?");
        if(cumple == 's' || cumple == 'S')
        {
            console.log("Puedes vacunarte si este año cumples los 30");
        }
        else
        {
            console.log("Tienes que tener mas de 30 para vacunarte");
        }
    }
    else{
        console.log("Puedes vacunarte si tienes mas de 30 años");
    }
}
else{
    console.log("No Pertenece a ningun grupo de vacunacion");
}
            