const List = require("./List");
class ArrayList extends List{
    constructor(capacidadInicial = 10){
        super();
        this.elementos = new Array(capacidadInicial);
        this.capacidad = capacidadInicial;
        this.tamanio = 0;
    }
    add(element){
        if(this.tamanio >= this.capacidad){
            //Hacer algo
            this._redimensionar();
        }this.elementos[this.tamanio] = element;
        this.tamanio++;
    }
    insert(index, element){
        //Validar que el indice sea valido
        if(index < 0 || index > this.tamanio){
            throw new Error("Indice esta fuera del rango");
        }
        //Hacer algo 
        if (this.tamanio >= this.capacidad){
            this._redimensionar();
        }

    }
    remove(index){
        if (index < 0 || index >= this.tamanio){
            throw new Error("Indice esta fuera del rango");
        }
        const elementoEliminar = this.elementos[index];
        for(let i = 0; i < this.tamanio; i++){
            this.elementos[i] = this.elementos[i + 1];
        }
        this.tamanio--;
        this.elementos[this.tamanio] = undefined;
    }
    // O(1)
    get(index){
       return this.elementos[index];
    }
    size(){
        return this.tamanio;
    }
    isEmpty(){
        return this.tamanio === 0;
    }
    _redimensionar(){
        this.capacidad *= 2;
        const nuevoArreglo = new Array(this.capacidad);
        for (let i = 0; i < this.tamanio; i++) {
            nuevoArreglo[i] = this.elementos[i];
        }
        this.elementos = nuevoArreglo;
    }
    [Symbol.iterator](){
        let index = 0;
        const elementos = this.elementos;
        const tamanio = this.tamanio;
        return {
            next(){
                if (index < tamanio){
                 return {value: elementos[index++], done: false};   
                }else{
                    return {value: undefined, done: true};
                }
            }
        }
    }
    toString(){
        if (this.tamanio === 0) return []
        let resultado = "["
        for (let i = 0; i < this.tamanio; i++){
            resultado += this.elementos[i];
            if (i < this.tamanio - 1){
                resultado += ", ";
            }
        }
        resultado += "]";
        return resultado;
    }
}

module.exports = ArrayList;
