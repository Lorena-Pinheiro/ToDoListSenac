// const tarefa = document.querySelector(".tarefa");
// const btnTarefa = tarefa.querySelector(".btnTarefa");

// btnTarefa.addEventListener("click", ()=>{alterarStatus(tarefa)});

// function alterarStatus(tarefa){
//     const statusTarefas = ['default', 'feito', 'nao-feito', 'incompleto'];
//     let valorInput = tarefa.querySelector('input');
//     let statusAtual = statusTarefas.indexOf(valorInput.value);
    
//     let proximoStatus = (statusAtual + 1) % statusTarefas.length;
//     valorInput.value = statusTarefas[proximoStatus]

//     statusTarefas.forEach(statusAtual => {tarefa.classList.remove(statusAtual)})
//     tarefa.classList.add(statusTarefas[proximoStatus])
// }


class Tarefa{
    constructor(titulo){
        this.tarefa = document.querySelector(titulo);
        this.titulo = this.tarefa.querySelector('h2').innerText;
        this.addEventoTarefa(this.tarefa);
    }

    alterarStatus(tarefa){
        const statusTarefas = ['default', 'feito', 'nao-feito', 'incompleto'];
        let valorInput = tarefa.querySelector('input');
        let statusAtual = statusTarefas.indexOf(valorInput.value);
        
        let proximoStatus = (statusAtual + 1) % statusTarefas.length;
        valorInput.value = statusTarefas[proximoStatus]

        statusTarefas.forEach(statusAtual => {tarefa.classList.remove(statusAtual)})
        tarefa.classList.add(statusTarefas[proximoStatus])
    }
    addEventoTarefa(tarefa){
        tarefa.addEventListener("click", ()=>{this.alterarStatus(tarefa)});
    }
}

const tarefa = new Tarefa('.tarefa')
// class FormAddTarefa{
//     constructor(){
//         this.msg = document.getElementById("#inputTarefa")
//         this.btnAddTarefa = document.getElementById("#btnAddTarefa")
//     }

//     adicionarTarefa(msg){

//     }
// }