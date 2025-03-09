document.addEventListener('DOMContentLoaded', () => {
    fetchTip();

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            fetchTip();
        }
    });

    document.addEventListener('click', fetchTip);
});

async function fetchTip() {
    const tipElement = document.getElementById('tip');
    
    try {
        // const response = await fetch('https://api.vidadecasado.com.br/v1/tip');
        // const description = await response.json().description;
        const description = tips[Math.floor(Math.random() * tips.length)];
        
        tipElement.style.opacity = '0';
        
        setTimeout(() => {
            tipElement.textContent = description;
            tipElement.style.opacity = '1';
        }, 200);
    } catch (error) {
        console.error('Erro ao buscar dica:', error);
        tipElement.textContent = 'Ops! Não foi possível carregar a dica. Tente novamente!';
    }
}

const tips = [
    "Se sua esposa diz que 'está tudo bem', corra.",
    "Nunca pergunte 'você está de TPM?' se quiser viver para contar a história.",
    "‘Faz o que você quiser’ não significa que você pode fazer o que quiser.",
    "Quando seu parceiro diz 'precisamos conversar', prepare-se para um TED Talk de duas horas.",
    "A frase 'onde você quer comer?' pode ser o início da Terceira Guerra Mundial.",
    "Controle remoto é propriedade compartilhada. Brigas por ele podem levar a divórcios emocionais.",
    "Deixe claro desde o início quem vai matar as baratas da casa.",
    "Nunca deixe seu parceiro ver como você realmente come um hambúrguer.",
    "Se sua esposa disser que vai fazer dieta, seu papel é dizer: 'Você já está perfeita!' e fugir.",
    "O segredo para um casamento duradouro é Wi-Fi forte e senhas separadas para streaming.",
    "Lavar a louça sem postar no Instagram ainda conta, viu?",
    "Nunca subestime o poder de um 'eu já limpei o banheiro!' na manutenção da paz conjugal.",
    "O cesto de roupas sujas não é um campo de basquete. A bola sempre cai para fora.",
    "Não existe mágica na máquina de lavar. A roupa não aparece dobrada no armário.",
    "‘Minha vez de cozinhar’ não significa ‘vamos pedir delivery?’.",
    "Se seu parceiro te manda um meme, ria. Mesmo se não tiver graça.",
    "Nunca reaja com 'curtir' em uma foto romântica. Pelo menos um 'amei' é obrigatório.",
    "Cuidado ao usar emojis. Um 'joinha' pode ser interpretado como divórcio iminente.",
    "Nunca, jamais, em hipótese alguma, ignore uma mensagem com '?' no final.",
    "Postar foto do parceiro dormindo pode resultar em vingança inesperada.",
    "Casamento é aprender a sobreviver juntos a um GPS teimoso.",
    "Se ela perguntar 'está frio lá fora?', sua resposta SEMPRE será 'leva um casaquinho'.",
    "Nunca deixe seu parceiro com fome em uma viagem. Isso pode destruir casamentos felizes.",
    "‘Eu sei como chegar’ é uma frase perigosa. Sempre cheque o Waze.",
    "Viajar juntos é o teste final do casamento. A montagem da barraca de camping pode ser fatal.",
    "Esquecer o aniversário de casamento é um erro de principiante.",
    "‘Você não precisa me dar nada’ significa ‘surpreenda-me ou sofra as consequências’.",
    "Se o presente não for bom, tenha pelo menos um chocolate de reserva.",
    "Nunca, jamais, dê eletrodomésticos como presente. A menos que tenha sido solicitado.",
    "‘Vamos dividir a conta?’ – só se for no banco de horas de quem paga o jantar da próxima vez.",
    "Casamento é ceder 90% do espaço da cama e ainda ser chutado à noite.",
    "O edredom é um bem valioso e deve ser protegido a todo custo.",
    "Roncar não é crime, mas pode ser motivo de separação informal.",
    "O segredo de uma boa noite de sono a dois é: um cobertor para cada um.",
    "Se o outro disser 'estou com insônia', seu dever é fingir que está ouvindo até dormir de verdade.",
    "‘Vamos só dar uma olhadinha no pet shop’ é um prenúncio de novas responsabilidades.",
    "Crianças não têm botão de mute. Aceite isso antes de reproduzir.",
    "No casamento, as discussões começam com ‘não vamos mimar essa criança’ e terminam com um tablet de última geração.",
    "Nunca critique a comida da sua sogra. Você pode acabar jantando miojo.",
    "Família é importante, mas o limite é quando começam a dar conselhos matrimoniais sem serem solicitados.",
    "Se sua esposa sonha que você a traiu, você já acorda devendo desculpas.",
    "Nunca diga que uma amiga é 'legal', 'simpática' ou 'gente boa'. Apenas diga 'quem?'.",
    "Se seu parceiro stalkear seu ex, finja que não viu e torça para sair ileso.",
    "É permitido fingir que não ouviu seu parceiro flertando com a atendente do drive-thru.",
    "Se um desconhecido der em cima do seu parceiro, sua função é rir e falar 'sorte a sua'.",
    "Se quer ganhar uma discussão, aprenda a perder com classe.",
    "Nunca comece uma briga antes do café da manhã. Isso é jogar sujo.",
    "Pedir desculpas não significa que você errou. Significa que você quer dormir em paz.",
    "Frases proibidas durante uma briga: ‘Você que começou’ e ‘Você sempre faz isso’.",
    "Nunca revire os olhos durante uma discussão. Isso pode ser um ponto sem volta.",
    "‘Foi barato’ é uma resposta oficial e padrão para todas as compras.",
    "Se seu parceiro pergunta ‘precisamos disso?’, a resposta sempre é ‘sim’.",
    "O segredo do casamento é fingir que não viu a fatura do cartão.",
    "Não é gasto, é investimento emocional.",
    "Se ela disser que encontrou um desconto imperdível, aceite sua nova realidade financeira.",
    "Sejam cúmplices, principalmente na hora de esconder compras um do outro.",
    "Quem cozinha não lava a louça. Essa é a regra de ouro.",
    "Se seu parceiro disser ‘estou com sono’, você tem cinco minutos para resolver qualquer assunto.",
    "Nunca critique um hobby do outro. Nem que seja colecionar tampinhas de garrafa.",
    "Dividir comida? Apenas se o outro pedir ANTES.",
    "O 'já estou saindo' tem um delay de no mínimo 30 minutos.",
    "Não espere que seu parceiro adivinhe o que você quer. Ele(a) não tem bola de cristal.",
    "O silêncio pode significar muitas coisas… descubra qual antes de comemorar.",
    "Nunca compare seu relacionamento com os de redes sociais. Ninguém posta foto da briga por causa do pote de sorvete.",
    "‘Vamos só dar uma passadinha’ significa que você vai perder sua tarde inteira.",
    "Se sua esposa disser ‘qualquer filme’, prepare-se para rejeitar dez sugestões antes de começar.",
    "Casamento é dividir comida mesmo quando um jura que 'não está com fome'.",
    "Se um de vocês faz home office, o outro automaticamente se torna suporte técnico.",
    "Esquecer de contar fofocas é uma falha grave no casamento.",
    "Se seu parceiro disser ‘depois eu faço’, coloque um lembrete para 2027.",
    "Casamento é ver seu parceiro escolhendo um prato diferente no restaurante e depois roubando do seu.",
    "Se a pergunta começar com ‘você lembra?’, a resposta inicial sempre deve ser ‘claro!’.",
    "Nunca curta fotos de ex-namorados(as). Nem por acidente.",
    "Um ‘visto por último’ sem resposta pode acabar em um tribunal conjugal.",
    "Nunca ignore um ‘eu te marquei em um post’.",
    "Se um de vocês ficar doente, o outro automaticamente se torna médico sem diploma.",
    "‘Vou dormir cedo hoje’ nunca acontece de verdade.",
    "Casamento é rir das mesmas piadas ruins por anos e ainda achar graça.",
    "Nunca vá dormir brigado. Mas também não estique a briga até às três da manhã.",
    "O relacionamento dura mais se um dos dois sempre disser ‘ok, você tem razão’.",
    "No fim, um bom casamento é basicamente se apaixonar pela mesma pessoa todos os dias (mesmo quando ela rouba sua coberta)."
];  