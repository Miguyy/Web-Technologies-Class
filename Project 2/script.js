// Buscador //

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const searchBtn = document.getElementById('searchBtn');

    // Mapa de palavras-chave e URLs
    const pages = {
        teste: '/vocacional.html',
        vocacional: '/vocacional.html',
        testevocacional: '/vocacional.html',
        universidades: '/universities.html',
        universidade: '/universities.html',
        aveiro: '/aveiroPage.html',
        universidadeaveiro: '/aveiroPage.html',
        porto: '/portoPage.html',
        universidadeporto: '/portoPage.html',
        coimbra: '/coimbraPage.html',
        universidadecoimbra: '/coimbraPage.html',
        lisboa: '/lisboaPage.html',
        novalisboa: '/novaPage.html',
        universidadenova: '/novaPage.html',
        minho: '//minhoPage.html',
        universidademinho: '//minhoPage.html',
        ranking: "/ranking.html",
    };

    // Função para redirecionar
    function searchAndRedirect() {
        const query = searchBar.value.toLowerCase().trim();

        if (pages[query]) {
            // Redireciona para a URL correspondente
            window.location.href = pages[query];
        } else {
            // Caso a palavra não seja encontrada, redireciona para uma página de erro ou resultado genérico
            alert('Página não encontrada. Verifique a sua pesquisa.');
            window.location.href = '404.html';
        }
    }

    // Clique no botão aciona a busca
    searchBtn.addEventListener('click', searchAndRedirect);

    // Pressionar Enter também aciona a busca
    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchAndRedirect();
        }
    });
});


// Teste Vocacional //

const questions = [
    {
    question: "Prefere trabalhar com números ou com pessoas?",
    options: ["Números", "Pessoas", "Ambos", "Nenhum"]
    },
    {
    question: "Gosta de resolver problemas técnicos?",
    options: ["Sim", "Não", "Às vezes", "Prefiro problemas criativos"]
    },
    {
    question: "Prefere atividades criativas ou analíticas?",
    options: ["Criativas", "Analíticas", "Ambas", "Nenhuma"]
    },
    {
    question: "Sente-se mais confortável a trabalhar sozinho ou em equipa?",
    options: ["Sozinho", "Em equipa", "Depende", "Nenhum"]
    },
    {
    question: "Gosta de planear antes de executar ou prefere agir imediatamente?",
    options: ["Planear", "Agir", "Depende", "Nenhum"]
    },
    {
    question: "Prefere ambientes internos ou externos para trabalhar?",
    options: ["Internos", "Externos", "Ambos", "Nenhum"]
    },
    {
    question: "Prefere resolver problemas lógicos ou emocionais?",
    options: ["Lógicos", "Emocionais", "Ambos", "Nenhum"]
    },
    {
    question: "Gosta de aprender novas tecnologias?",
    options: ["Sim", "Não", "Às vezes", "Depende"]
    },
    {
    question: "Tem mais interesse por saúde, tecnologia ou artes?",
    options: ["Saúde", "Tecnologia", "Artes", "Nenhum"]
    },
    {
    question: "Prefere tarefas práticas ou teóricas?",
    options: ["Práticas", "Teóricas", "Ambas", "Nenhuma"]
    }
];

const universities_humanities = [
    {
    name: "Universidade de Lisboa - Faculdade de Letras",
    url: "https://www.letras.ulisboa.pt/pt/"
    },
    {
    name: "Universidade do Porto - Faculdade de Letras",
    url: "https://sigarra.up.pt/flup/pt/web_page.inicial"
    },
    {
    name: "Universidade de Coimbra - Faculdade de Letras",
    url: "https://www.uc.pt/fluc"
    },
    {
    name: "Universidade de Aveiro - Departamento de Línguas e Culturas",
    url: "https://www.ua.pt/dlc/"
    },
    {
    name: "Universidade do Minho - Instituto de Letras e Ciências Humanas",
    url: "https://www.ilch.uminho.pt/pt"
    }
];

const universities_exact = [
    {
    name: "Universidade do Porto - Faculdade de Engenharia",
    url: "https://sigarra.up.pt/feup/pt/web_page.inicial"
    },
    {
    name: "Universidade de Lisboa - Instituto Superior Técnico",
    url: "https://tecnico.ulisboa.pt/pt/"
    },
    {
    name: "Universidade de Coimbra - Faculdade de Ciências e Tecnologia",
    url: "https://www.uc.pt/fctuc"
    },
    {
    name: "Universidade do Minho - Escola de Engenharia",
    url: "https://www.eng.uminho.pt/"
    },
    {
    name: "Universidade de Aveiro - Departamento de Engenharia",
    url: "https://www.ua.pt/degeit/"
    }
];

const universities_health = [
    {
    name: "Universidade do Porto - Faculdade de Medicina",
    url: "https://sigarra.up.pt/icbas/pt/web_page.inicial"
    },
    {
    name: "Universidade de Coimbra - Faculdade de Medicina",
    url: "https://www.uc.pt/fmuc"
    },
    {
    name: "Universidade de Lisboa - Faculdade de Medicina",
    url: "https://www.medicina.ulisboa.pt/"
    },
    {
    name: "Universidade do Minho - Escola de Medicina",
    url: "https://www.med.uminho.pt/"
    },
    {
    name: "Universidade do Algarve - Faculdade de Ciências da Saúde",
    url: "https://www.ualg.pt/pt/content/faculdade-de-ciencias-da-saude"
    }
];

const form = document.getElementById('vocationalTest');

// Renderizar perguntas no formulário
questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
    <h3>${q.question}</h3>
    <div class="options">
        ${q.options.map((option, i) => {
        const inputId = `question${index}_option${i}`;
        return `
            <input type="radio" id="${inputId}" name="question${index}" value="${option}">
            <label for="${inputId}" class="option-box">${option}</label>
        `;
        }).join('')}
    </div>
    `;
    form.appendChild(questionDiv);
});

document.getElementById('submitTest').addEventListener('click', () => {
    const answers = [];
    let allAnswered = true;
    questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption) {
        answers.push(selectedOption.value);
    } else {
        allAnswered = false;
    }
    });

    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    const universitiesDiv = document.getElementById('universities');

    if (!allAnswered) {
    errorDiv.style.display = 'block';
    resultDiv.style.display = 'none';
    universitiesDiv.style.display = 'none';
    return;
    }

    errorDiv.style.display = 'none';

    // Exemplo de lógica para determinar carreiras
    const score = answers.reduce((acc, answer) => {
    if (answer === "Números" || answer === "Analíticas" || answer === "Lógicos" || answer === "Tecnologia") acc['Exatas'] = (acc['Exatas'] || 0) + 1;
    if (answer === "Pessoas" || answer === "Criativas" || answer === "Emocionais" || answer === "Artes") acc['Humanas'] = (acc['Humanas'] || 0) + 1;
    if (answer === "Saúde") acc['Saúde'] = (acc['Saúde'] || 0) + 1;
    return acc;
    }, {});

    let career;
    let selectedUniversities = [];

    // Decisão de carreira e universidades baseadas na pontuação
    if ((score['Exatas'] || 0) > (score['Humanas'] || 0) && (score['Exatas'] || 0) > (score['Saúde'] || 0)) {
    career = "Engenharia ou Ciências Exatas";
    selectedUniversities = universities_exact;
    } else if ((score['Humanas'] || 0) > (score['Exatas'] || 0) && (score['Humanas'] || 0) > (score['Saúde'] || 0)) {
    career = "Artes ou Ciências Humanas";
    selectedUniversities = universities_humanities;
    } else if ((score['Saúde'] || 0) > (score['Exatas'] || 0) && (score['Saúde'] || 0) > (score['Humanas'] || 0)) {
    career = "Saúde e Bem-Estar";
    selectedUniversities = universities_health;
    } else {
    career = "Áreas Interdisciplinares (Exatas e Humanas)";
    selectedUniversities = [...universities_exact, ...universities_humanities];
    }

    // Exibe o resultado da carreira
    resultDiv.innerHTML = `
    <h3>Carreira sugerida:</h3>
    <h2>${career}</h2>
    `;
    resultDiv.style.display = 'block';

    // Exibe as universidades sugeridas
    universitiesDiv.innerHTML = `
    <h3>Universidades sugeridas:</h3>
    <div class="university-list">
        ${selectedUniversities.map(university => `
        <div class="university" onclick="window.open('${university.url}', '_blank')">
            ${university.name}
        </div>
        `).join('')}
    </div>
    `;
    universitiesDiv.style.display = 'block';
});
