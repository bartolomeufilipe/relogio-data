const hr = document.getElementById('hr')
const mn = document.getElementById('mn')
const sg = document.getElementById('sg')
const d = document.getElementById('dia')
const m = document.getElementById('mes')
const a = document.getElementById('ano')
const hora = document.getElementById('hora')
const data = document.getElementById('data')
const sem = document.getElementById('sem')

const relogio = setInterval(function tempo() {
    const temp = new Date()
    // HORA
    let hor = temp.getHours()
    let min = temp.getMinutes()
    let seg = temp.getSeconds()
    // DATA
    let dia = temp.getDate()
    let mes = temp.getMonth()
    let ano = temp.getFullYear()
    // SEMANA
    let diaSem = temp.getDay()

    // DIA DA SEMANA
    switch(diaSem) {
        case 0 :
            sem.innerText = 'Domingo-Feira'
            break
        case 1 :
            sem.innerText = 'Segunda-Feira'
            break
        case 2 :
            sem.innerText = 'Terça-Feira'
            break
        case 3 :
            sem.innerText = 'Quarta-Feira'
            break
        case 4:
            sem.innerText = 'Quinta-Feira'
            break
        case 5:
            sem.innerText = 'Sexta-Feira'
            break
        case 6:
            sem.innerText = 'Sábado-Feira'
            break
        default:
            '[ERRO]'
            break
    }

    // MÊS DO ANO
    switch(mes) {
        case 0:
            data.innerText = `${dia} de Janeiro de ${ano}`
            break
        case 1:
            data.innerText = `${dia} de Fevereiro de ${ano}`
            break
        case 2:
            data.innerText = `${dia} de Março de ${ano}`
            break
        case 3:
            data.innerText = `${dia} de Abril de ${ano}`
            break
        case 4:
            data.innerText = `${dia} de Maio de ${ano}`
            break
        case 5:
            data.innerText = `${dia} de Junho de ${ano}`
            break
        case 6:
            data.innerText = `${dia} de Julho de ${ano}`
            break
        case 7:
            data.innerText = `${dia} de Agosto de ${ano}`
            break
        case 8:
            data.innerText = `${dia} de Setembro de ${ano}`
            break
        case 9:
            data.innerText = `${dia} de Outubro de ${ano}`
            break
        case 10:
            data.innerText = `${dia} de Novembro de ${ano}`
            break
        case 11:
            data.innerText = `${dia} de Dezembro de ${ano}`
            break
        default:
            '[ERRO]'
            break
    }

    if(hor < 10){
        hor  = '0' + hor;
    }
    if(min < 10){
        min  = '0' + min;
    }
    if(seg < 10){
        seg  = '0' + seg;
    }

    hora.innerText = `${hor}:${min}:${seg}`
})