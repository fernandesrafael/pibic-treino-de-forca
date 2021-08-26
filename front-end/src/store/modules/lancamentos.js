const moduloLancamentos = {
    state: {
        lancamentos: [
            {
                id: Math.random().toString(36).substr(2, 5),
                quantidadeTreinos: 3,
                nome: "Rafael Fernandes Dias",
                exercicio: [
                    "Supino inclinado fechado alternado halter",
                    "Crucifixo declinado com elástico",
                    "Pressão arco mágico",
                    "Supino inclinado fechado alternado halter",
                   
                ]
            },
            {
                id: Math.random().toString(36).substr(2, 5),
                quantidadeTreinos: 4,
                nome: "Lucas Fernandes da Silva",
                exercicio: [
                    "Supino inclinado fechado alternado halter",
                    "Crucifixo declinado com elástico",
                    "Pressão arco mágico",
                ]
            },
            {
                id: Math.random().toString(36).substr(2, 5),
                quantidadeTreinos: 4,
                nome: "Jorge Silva",
                exercicio: [
                    "Supino inclinado fechado alternado halter",
                    "Crucifixo declinado com elástico",
                    "Pressão arco mágico",
                ]
        
            }
        ],
        caixa: 0
    },
    getters: {
        todosLancamentos: state => state.lancamentos,
    
    },
    actions: {
        salvarLancamento: ({ commit }, lancamento) => {
            commit("adicionarLancamento", lancamento);
          
        },
        atualizarCaixa: ({ commit }) => commit('calcularCaixa'),
        excluirLancamento: ({commit}, id) => {
            commit('removerLancamento', id);
         
        }
    },
    mutations: {
        adicionarLancamento: 
            (state, lancamento) => state.lancamentos.unshift(lancamento),
       
        removerLancamento: 
            (state, id) => 
                state.lancamentos = 
                    state.lancamentos.filter(lancamento => lancamento.id !== id)
    }
};

export default moduloLancamentos;