export class Livro {
    //Atributos
    id:number;
    titulo:string;
    autor:string;
    qtd_pagina:number;
    disponivel:boolean;
    //Métodos
    //contrutor
    constructor(){
        this.disponivel=true;
    }
}
