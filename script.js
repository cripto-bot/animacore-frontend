document.addEventListener('DOMContentLoaded', () => {
    console.log("Animacore Frontend Cargado!");
    
    const mockAgents = [
        { id: 1, name: "Agente Investigador Zen", description: "Análisis profundo y reportes detallados con calma y precisión.", price: "1.5 SOL", avatar: "https://via.placeholder.com/150/FFC300/000000?Text=Zen" },
        { id: 2, name: "CreatiBot Dinámico", description: "Generador de ideas innovadoras y contenido publicitario viral.", price: "2.1 SOL", avatar: "https://via.placeholder.com/150/DAF7A6/000000?Text=Dinamico" },
        { id: 3, name: "Optimus Tasker", description: "Automatiza tus flujos de trabajo y optimiza tu tiempo eficientemente.", price: "0.9 SOL", avatar: "https://via.placeholder.com/150/C70039/FFFFFF?Text=Optimus" },
        { id: 4, name: "Polyglot IA", description: "Traducciones precisas y naturales en más de 50 idiomas.", price: "1.2 SOL", avatar: "https://via.placeholder.com/150/581845/FFFFFF?Text=Polyglot" }
    ];

    const agentListContainer = document.getElementById('agent-list-container');
    const verAgentesBtn = document.getElementById('verAgentesBtn');

    function displayAgents(agents) {
        if (!agentListContainer) {
            console.error("El contenedor de la lista de agentes no fue encontrado.");
            return;
        }
        agentListContainer.innerHTML = ''; 

        if (agents.length === 0) {
            agentListContainer.innerHTML = '<p>No hay agentes disponibles por el momento.</p>';
            return;
        }

        agents.forEach(agent => {
            const agentCard = `
                <div class="agent-card">
                    <img src="${agent.avatar}" alt="Avatar de ${agent.name}">
                    <h3>${agent.name}</h3>
                    <p>${agent.description}</p>
                    <p>Precio: ${agent.price}</p>
                    <button onclick="viewAgentDetails(${agent.id})">Ver Detalles</button>
                </div>
            `;
            agentListContainer.insertAdjacentHTML('beforeend', agentCard);
        });
    }

    displayAgents(mockAgents); 

    if(verAgentesBtn) {
        verAgentesBtn.addEventListener('click', () => {
            document.querySelector('.featured-agents').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

function viewAgentDetails(agentId) {
    alert(`Mostrar detalles del agente con ID: ${agentId}. (Funcionalidad futura)`);
}
