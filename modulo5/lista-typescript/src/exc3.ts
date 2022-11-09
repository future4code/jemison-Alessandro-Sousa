enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome:string,
    anoLancamento:number,
    genero:GENERO,
    resenha?:number
}

const func3 = (nome:string, ano:number, genero:GENERO, resenha?:number):Filme => {
        if(resenha){
            return {
                nome:nome,
                anoLancamento:ano,
                genero:genero,
                resenha:resenha
            }
        }else{
            return {
                nome:nome,
                anoLancamento:ano,
                genero:genero
            }
        }   
}

console.table(func3("Interestelar", 2014, GENERO.DRAMA, 10))