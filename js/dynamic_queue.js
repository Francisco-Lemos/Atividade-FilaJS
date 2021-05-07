class DynamicQueue {
    constructor() {/*Aqui o nosso construtor irá inicializar as nossos attributos cabeça e rabo
        Cabeça porque a fila tem um início poderia ser então start e tail pq tem também fim que poderia ser tb end
        Ai vai o gosto de cada um... Importante ressaltar que ambos começam com null, pois quando instanciada e nossa 
         fila ainda estpa vazia*/
        this.head = null;
        this.tail = null;
    }
    enqueue(element) {/* Esse método irá adicionar um novo elemento na fila, cujo conteúdo irá corresponder ao valor fornecido
        como argumento*/
        const newnode = new Node(element);/* Instanciamos assim um novo nó (pois a fila é dinâmica), sendo esta composta pelos
        atributos content e next*/
        if (this.isEmpty()) {/* Caso a fila esteja vazia (isso que esse método verifica), adicionamos o novo elemento na cabeça*/
            this.head = newnode;
        } else {// Em caso contrário pegamos o elemento do rabo(tail) e fazemos com que aponte para o novo nó a ser inserido
            this.tail.next = newnode;
        }
        this.tail = newnode;//Agora é importante dizer que em qualquer caso (estando vazio ou não) o novo nó ficará no rabo(tail)
    }
    dequeue() {/* Esse método irá retirar um elemento da fila.... COmo sabemos como a fila funciona, não precisamos saber quem... 
        então nada de parâmetros por aqui*/
        if (this.isEmpty())//Caso a fila esteja vazia não há o que ser retirado, então lancemos um erro "FILA VAZIA!!!"
            throw new Error("Fila vazia!");//O erro iterrompe a execução do método -> Daqui pra baixo já era
        const removed = this.head;//Sabemos quem queremos remover, que é o primeiro a entrar... e esse camarada está na cabeça
        this.head = this.head.next;// A cabeça agora deverá conter o próximo elemento da lista (ele está apontado no attr next do excluido)
        removed.next = null;//Agora jogemos o excluído no limbo, cortando qualquer vínculo da fila com o féla..rsrsrs foi mal
        if (this.head === null) this.tail = null;/*Agora se a cabeça é nula quer dizer que não há nada na fila. Não havendo nada o rabo
        tb não deverá conter nada, apontando agora para null... Não concorda?*/
        return removed.content;//Agora basta retornar o conteúdo(contend) do nosso elemento removido (Ele será apresentado pelo nosso arquivo main.js)
    }
    front() {//Simples demais.... Retorna o conteúdo da cabeça (Aquilo que vc está pensando agora kkkkk  zoeira) 
        return this.head.content;//Retonta o content do elemento que está na cabeça(início da fila)
    }
    back() {// Tb muito simples.... Retorna o conteúdo do rabo (Aqui não cabe gracinha sob o risco de sermos indecentes)
        return this.tail.content;// Pega o atributo content do nó que está no rabo e retorna (Só isso)
    }
    isEmpty() {// Idem .... Verifica se tem algo no início (cabeça ou head) da lista, se não houver quer dizer que alista está vazia
        return this.head === null;/* Poderia também ser apenas return this.head -- Nessa situação ou retornaria null ou o nó
        o que seria equivalente a False e True, respectivamente*/
    }
    size() {/*Esse método irá iterar na nossa fila, alcançando o conteúdo seguinte  via attr next a cada iteração e tb
        fazendo a contagem (incremento de counter) a cada iteração*/
        let counter = 0;
        for (let i = this.head; i !== null; i = i.next)//QUando o next do último elemento da fila for null estaremos no final!
            counter++;
        return counter;// Ao final apenas retorna o counter após os incrementos na iteração (Tendo havido algum) ou retorna 0
    }
    clear() {//Para limpar a nossa lista basta atribuirmos null à cabeça (head) e ao rabo (tail)
        this.head = this.tail = null;
    }

    print(separator = " - ") {/* Esse método foi explicado em outras ocasiões, pois foi repetido na pilha e na lista
        por isso simplemente não vou explicá-lo novamente! Desculpe-me pelas brincadeiras sem graça e se
        vc chegou até aqui (Parabéns pela paciência) é pq estava gostando do que estava vendo, então dê nota máxima! Valeu Samuel!*/
        let output = '';
        for (let i = this.head; i !== null; i = i.next)
            output += i.content + separator;
        return output.substr(0, output.length - separator.length);
    }
}