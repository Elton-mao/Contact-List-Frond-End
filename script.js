// variaveis e seleção de eventos


//funções




//eventos
    // Função para fazer a requisição à API
    
    async function fetchContacts() {
        try {
            const response = await fetch('http://localhost:8080/contact');
            if (!response.ok) {
                throw new Error('Erro ao obter os contatos.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao obter os contatos:', error);
            return [];
        }
    }

    async function displayContacts() {
        const contactList = document.getElementById('contact-list');
        if (!contactList) {
            console.error('Elemento contact-list não encontrado.');
            return;
        }
    
        const contacts = await fetchContacts();
    
        contacts.forEach(contact => {
            const listItem = document.createElement('li');
            const name = contact.name || 'Nome não disponível';
            const email = contact.email || 'Email não disponível';
            listItem.textContent = `${name} - ${email}`;
            contactList.appendChild(listItem);
        });
    }

    displayContacts();