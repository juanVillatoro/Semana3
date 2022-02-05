//Validaciones de los datos ingresados

function isNumeric(N) {
    return !isNaN(N) && !isNaN(parseFloat(N));
}


function isLetter(string) {
    return string.length === 1 && string.match(/[a-z]/i);
}


const cambiarColor =
        new Vue({
            el:'#changeColor',
            data:{
                color:'#ececec',
                texto:'',
            },
            methods:{
                teclaIngre: function(e){

                    var letra = e.key;

                    //Cambiamos el color del fondo, dependiendo de la tecla presionada
                    if(isLetter(letra)){
                        this.color = '#81de87';
                    }else if(isNumeric(letra)){
                        this.color = '#ff2d31';
                    }else{
                        this.color = '#ffbd92';
                    }

                    //Limpiamos el input para agregar un nuevo caracter
                    this.texto="";
                }
                
            }
        });


