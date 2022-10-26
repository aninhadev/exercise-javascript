let idade = 17
if (idade >= 18 ) {
    console.log('Voto Obrigatorio!')
} else{
    if (idade < 16) {
        console.log('Não vota')
    } else{
        if (idade > 67 || idade < 18){
            console.log('Opicional')
        }
    }
}
