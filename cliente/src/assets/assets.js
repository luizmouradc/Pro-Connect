import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'

export const assets = {
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Programação",
    "Ciência de Dados",
    "Design",
    "Redes",
    "Gestão",
    "Marketing",
    "Cibersegurança",
]

export const JobLocations = [
    "São Paulo",
    "Salvador",
    "Rio de Janeiro",
    "Belo Horizonte",
    "João Pessoa",
    "Fortaleza",
    "Curitiba"
];

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Desenvolvedor Full Stack", date: 1729102298497, location: "São Paulo", applicants: 20 },
    { _id: 2, title: "Cientista de Dados", date: 1729102298497, location: "Belo Horizonte", applicants: 15 },
    { _id: 3, title: "Gerente de Marketing", date: 1729102298497, location: "Fortaleza", applicants: 2 },
    { _id: 4, title: "UI/UX Designer", date: 1729102298497, location: "Salvador", applicants: 25 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'Amazon',
        title: 'Desenvolvedor Full Stack',
        location: 'Campina Grande',
        date: '22 Ago, 2024',
        status: 'Pendente',
        logo: company_icon,
    },
    {
        company: 'Meta',
        title: 'Cientista de Dados',
        location: 'São Paulo',
        date: '22 Ago, 2024',
        status: 'Rejeitado',
        logo: company_icon,
    },
    {
        company: 'Google',
        title: 'Gerente de Marketing',
        location: 'Rio de Janeiro',
        date: '25 Set, 2024',
        status: 'Aceito',
        logo: company_icon,
    },
    {
        company: 'Qualcomm',
        title: 'Designer UI/UX',
        location: 'Campina Grande',
        date: '15 Out, 2024',
        status: 'Pendente',
        logo: company_icon,
    },
    {
        company: 'Microsoft',
        title: 'Desenvolvedor Full Stack',
        location: 'Belo Horizonte',
        date: '25 Set, 2024',
        status: 'Aceito',
        logo: company_icon,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Ricardo Santos", jobTitle: "Desenvolvedor Full Stack", location: "Campina Grande", imgSrc: profile_img },
    { _id: 2, name: "Enrique Moraes", jobTitle: "Cientista de Dados", location: "São Paulo", imgSrc: profile_img },
    { _id: 3, name: "Alícia Pereira", jobTitle: "Gerente de Marketing", location: "Rio de Janeiro", imgSrc: profile_img },
    { _id: 4, name: "Ricardo Santos", jobTitle: "Designer UI/UX", location: "Salvador", imgSrc: profile_img },
    { _id: 5, name: "Enrique Moraes", jobTitle: "Desenvolvedor Full Stack", location: "Fortaleza", imgSrc: profile_img },
    { _id: 6, name: "Alícia Pereira", jobTitle: "Cientista de Dados", location: "Curitiba", imgSrc: profile_img },
    { _id: 7, name: "Ricardo Santos", jobTitle: "Gerente de Marketing", location: "Belo Horizonte", imgSrc: profile_img },
];


export const jobsData = [
    {
        _id: '1',
        title: "Desenvolvedor Full Stack",
        location: "São Paulo",
        level: "Senior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Estamos buscando um Desenvolvedor Full Stack altamente qualificado para se juntar à nossa equipe dinâmica e inovadora. O candidato ideal terá paixão por desenvolver aplicações web escaláveis e trabalhar em toda a pilha tecnológica, incluindo o desenvolvimento front-end e back-end. Você terá a oportunidade de trabalhar com as tecnologias mais recentes e contribuir para projetos empolgantes que impactam diretamente nossos usuários.</p>

        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Desenvolver, testar e implantar aplicações web altamente responsivas.</li>
            <li>Projetar interfaces amigáveis usando HTML, CSS e JavaScript.</li>
            <li>Desenvolver e manter APIs e bancos de dados para suportar funcionalidades das aplicações.</li>
            <li>Colaborar com equipes multifuncionais para definir, projetar e lançar novas funcionalidades.</li>
            <li>Identificar e resolver gargalos e bugs para otimizar o desempenho das aplicações.</li>
        </ol>

        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em HTML, CSS e frameworks JavaScript (por exemplo, React, Angular).</li>
            <li>Experiência com linguagens de servidor (por exemplo, Node.js, Python).</li>
            <li>Familiaridade com bancos de dados relacionais e não relacionais (por exemplo, MySQL, MongoDB).</li>
            <li>Forte compreensão de segurança web e otimização de desempenho.</li>
            <li>Habilidade para trabalhar em um ambiente Agile.</li>
        </ol>`,
        salary: 17000,
        date: 1735257600000,
        category: "Programção",
    },
    {
        _id: '2',
        title: "Cientista de Dados",
        location: "Rio de Janeiro",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se à nossa equipe de análise para ajudar a impulsionar decisões de negócios utilizando dados. Como Cientista de Dados, você utilizará suas habilidades analíticas para descobrir padrões e insights que influenciarão nossa direção estratégica. Você trabalhará em estreita colaboração com as partes interessadas para entender suas necessidades e fornecer análises impactantes que apoiem nossos objetivos de crescimento. Seu papel é fundamental para transformar dados em insights acionáveis.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Analisar grandes volumes de dados para identificar tendências e padrões que informem estratégias de negócios.</li>
            <li>Desenvolver modelos preditivos para prever resultados e melhorar a tomada de decisões.</li>
            <li>Visualizar descobertas de dados por meio de relatórios e dashboards para as partes interessadas.</li>
            <li>Colaborar com equipes multifuncionais para definir metas orientadas por dados.</li>
            <li>Aprimorar continuamente os processos de coleta e análise de dados para melhorar a precisão.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em Python ou R para análise estatística e manipulação de dados.</li>
            <li>Experiência com ferramentas de visualização de dados (ex.: Tableau, Power BI).</li>
            <li>Sólido conhecimento de SQL e gerenciamento de bancos de dados.</li>
            <li>Familiaridade com técnicas e algoritmos de aprendizado de máquina.</li>
            <li>Excelentes habilidades de resolução de problemas e pensamento crítico.</li>
        </ol>`,
        salary: 12000,
        date: 1735343737651,
        category: "Ciência de Dados",
    }
    ,
    {
        _id: '3',
        title: "Designer UI/UX",
        location: "João Pessoa",
        level: "Júnior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Crie experiências digitais intuitivas como Designer UI/UX. Nesta função, você colaborará com equipes de produto para projetar interfaces de usuário envolventes e garantir uma jornada do usuário fluida. Sua criatividade e atenção aos detalhes serão cruciais para desenvolver designs que não apenas sejam visualmente atraentes, mas também melhorem a funcionalidade e a satisfação do usuário.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Conduzir pesquisas de usuários e testes de usabilidade para coletar insights sobre as necessidades dos usuários.</li>
            <li>Criar wireframes, protótipos e designs de alta fidelidade que comuniquem fluxos de usuários.</li>
            <li>Colaborar com equipes de desenvolvimento para implementar designs de forma eficaz.</li>
            <li>Manter-se atualizado com as tendências do setor e melhores práticas em design UI/UX.</li>
            <li>Coletar e analisar feedback dos usuários para iterar e melhorar os designs.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em ferramentas de design como Figma, Sketch ou Adobe XD.</li>
            <li>Sólida compreensão dos princípios de design centrado no usuário.</li>
            <li>Conhecimento básico de HTML/CSS para melhor colaboração com desenvolvedores.</li>
            <li>Excelentes habilidades de comunicação e trabalho em equipe.</li>
            <li>Habilidades criativas de resolução de problemas.</li>
        </ol>`,
        salary: 5000,
        date: 1735429875302,
        category: "Design",
    },
    {
        _id: '4',
        title: "Engenheiro DevOps",
        location: "São Paulo",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Aprimore nosso pipeline de implantação como Engenheiro DevOps. Esta função envolverá a automação de processos de implantação, o gerenciamento de infraestrutura em nuvem e a implementação das melhores práticas de segurança e desempenho. Você desempenhará um papel vital na ponte entre desenvolvimento e operações, garantindo fluxos de trabalho eficientes e lançamentos de alta qualidade.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Automatizar processos de implantação utilizando ferramentas CI/CD para otimizar fluxos de trabalho de desenvolvimento.</li>
            <li>Gerenciar infraestrutura em nuvem, garantindo desempenho e escalabilidade ideais.</li>
            <li>Implementar melhores práticas de segurança para proteger nossos sistemas.</li>
            <li>Monitorar o desempenho das aplicações e resolver problemas de forma proativa.</li>
            <li>Colaborar com desenvolvedores para melhorar a confiabilidade e eficiência dos sistemas.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Experiência com ferramentas de CI/CD (ex.: Jenkins, GitLab CI).</li>
            <li>Sólido conhecimento de plataformas de nuvem (ex.: AWS, Azure).</li>
            <li>Proficiência em linguagens de script (ex.: Bash, Python).</li>
            <li>Familiaridade com tecnologias de conteinerização (ex.: Docker, Kubernetes).</li>
            <li>Excelentes habilidades de resolução de problemas e análise.</li>
        </ol>`,
        salary: 18000,
        date: 1735516012953,
        category: "Programação",
    },{
        _id: '5',
        title: "Engenheiro de Software",
        location: "João Pessoa",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se à nossa equipe como Engenheiro de Software para desenvolver aplicações de alta qualidade que proporcionem experiências excepcionais aos usuários. Você será responsável por projetar, desenvolver e manter soluções de software que atendam às necessidades do negócio. Colaborando de perto com outros engenheiros, você contribuirá para revisões de código e garantirá que as melhores práticas sejam seguidas durante o processo de desenvolvimento.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Desenvolver e manter aplicações de software que atendam aos requisitos dos usuários.</li>
            <li>Colaborar com equipes multifuncionais para projetar soluções escaláveis e eficientes.</li>
            <li>Participar de revisões de código para garantir a qualidade e a manutenção do código.</li>
            <li>Realizar testes e depuração para melhorar a funcionalidade das aplicações.</li>
            <li>Documentar processos de desenvolvimento e designs de aplicações.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em Java ou C#, com sólida compreensão de programação orientada a objetos.</li>
            <li>Experiência com metodologias ágeis e ciclo de vida de desenvolvimento de software.</li>
            <li>Fortes habilidades de resolução de problemas e atenção aos detalhes.</li>
            <li>Familiaridade com sistemas de controle de versão (ex.: Git).</li>
            <li>Excelentes habilidades de comunicação e trabalho em equipe.</li>
        </ol>`,
        salary: 10000,
        date: 1735602150604,
        category: "Programação",
    },
    {
        _id: '6',
        title: "Engenheiro de Redes",
        location: "Salvador",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Estamos em busca de um Engenheiro de Redes para gerenciar nossa infraestrutura e garantir conectividade robusta em todos os sistemas. Sua experiência nos ajudará a projetar e implementar soluções de rede seguras e eficientes. Você será fundamental no monitoramento do desempenho da rede e na garantia de conformidade com os padrões de segurança.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Projetar e implementar soluções de rede que atendam às necessidades organizacionais.</li>
            <li>Monitorar o desempenho da rede e solucionar problemas para garantir alta disponibilidade.</li>
            <li>Garantir a conformidade com a segurança, implementando as melhores práticas.</li>
            <li>Documentar configurações de rede e manter registros atualizados.</li>
            <li>Colaborar com equipes de TI para aprimorar as capacidades da rede.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em protocolos e roteamento de rede (ex.: TCP/IP, BGP, OSPF).</li>
            <li>Experiência com firewalls, VPNs e tecnologias de segurança.</li>
            <li>Fortes habilidades de resolução de problemas e atenção aos detalhes.</li>
            <li>Excelentes habilidades de comunicação e trabalho em equipe.</li>
            <li>Certificações relevantes (ex.: CCNA, CCNP) são um diferencial.</li>
        </ol>`,
        salary: 15000,
        date: 1735688288255,
        category: "Redes",
    },
    {
        _id: '7',
        title: "Gerente de Projetos",
        location: "Recife",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Lidere projetos como Gerente de Projetos, garantindo a entrega pontual e o alinhamento com os objetivos organizacionais. Você será responsável pelo planejamento, execução e monitoramento de projetos, colaborando com diversas equipes para assegurar que todos os aspectos de cada projeto sejam entregues com sucesso. Suas fortes habilidades de liderança serão fundamentais para motivar os membros da equipe e promover um ambiente de trabalho positivo.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Definir o escopo, os objetivos e os entregáveis do projeto em colaboração com as partes interessadas.</li>
            <li>Desenvolver planos e cronogramas detalhados para orientar a execução do projeto.</li>
            <li>Monitorar o progresso do projeto e ajustar os planos conforme necessário para cumprir os prazos.</li>
            <li>Facilitar a comunicação entre as equipes e gerenciar as expectativas das partes interessadas.</li>
            <li>Realizar retrospectivas do projeto para identificar lições aprendidas e áreas de melhoria.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Experiência comprovada como Gerente de Projetos em um ambiente voltado para tecnologia.</li>
            <li>Familiaridade com softwares de gerenciamento de projetos (ex.: JIRA, Trello).</li>
            <li>Fortes habilidades de liderança e organização.</li>
            <li>Excelentes habilidades de comunicação e relacionamento interpessoal.</li>
            <li>Certificação em gerenciamento de projetos (ex.: PMP, Scrum Master) é um diferencial.</li>
        </ol>`,
        salary: 18000,
        date: 1735774425906,
        category: "Gestão",
    },
    {
        _id: '8',
        title: "Desenvolvedor de Aplicativos Móveis",
        location: "Fortaleza",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se à nossa equipe como Desenvolvedor de Aplicativos Móveis para criar aplicativos envolventes para as plataformas iOS e Android. Você será responsável por todo o ciclo de desenvolvimento de aplicativos, desde o conceito e design até a implantação e manutenção. Sua criatividade e habilidades técnicas nos ajudarão a entregar aplicativos de alta qualidade que aprimoram a experiência do usuário.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Projetar e desenvolver aplicativos móveis avançados para iOS e Android.</li>
            <li>Colaborar com equipes multifuncionais para definir, projetar e lançar novos recursos.</li>
            <li>Descobrir, avaliar e implementar continuamente novas tecnologias para maximizar a eficiência do desenvolvimento.</li>
            <li>Garantir o desempenho, a qualidade e a responsividade dos aplicativos.</li>
            <li>Realizar revisões de código e manter os padrões de qualidade do código.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em Swift para iOS ou Kotlin para desenvolvimento Android.</li>
            <li>Experiência com APIs RESTful e bibliotecas de terceiros.</li>
            <li>Sólido entendimento dos princípios e diretrizes de design de aplicativos móveis.</li>
            <li>Excelentes habilidades de resolução de problemas e atenção aos detalhes.</li>
            <li>Familiaridade com sistemas de controle de versão (ex.: Git).</li>
        </ol>`,
        salary: 12000,
        date: 1735860563557,
        category: "Programação",
    },
    {
        _id: '9',
        title: "Arquiteto de Nuvem",
        location: "Porto Alegre",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Projete soluções em nuvem como Arquiteto de Nuvem, ajudando a transformar nossa infraestrutura e serviços. Você trabalhará em estreita colaboração com diversas equipes para entender seus requisitos e traduzi-los em soluções baseadas em nuvem seguras, escaláveis e eficientes. Sua experiência orientará nossa estratégia em nuvem e garantirá que aproveitemos ao máximo as tecnologias de nuvem.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Projetar e implementar soluções em nuvem que estejam alinhadas com os objetivos de negócios.</li>
            <li>Fornecer orientações sobre as melhores práticas para arquitetura e implantação em nuvem.</li>
            <li>Colaborar com equipes de DevOps para aprimorar a infraestrutura e segurança em nuvem.</li>
            <li>Monitorar sistemas de nuvem para desempenho e eficiência de custos.</li>
            <li>Manter-se atualizado sobre tecnologias emergentes em nuvem e tendências do setor.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Sólido conhecimento de provedores de serviços em nuvem (ex.: AWS, Azure, GCP).</li>
            <li>Experiência com padrões de arquitetura em nuvem e melhores práticas.</li>
            <li>Familiaridade com tecnologias de conteinerização e orquestração (ex.: Docker, Kubernetes).</li>
            <li>Excelentes habilidades analíticas e de resolução de problemas.</li>
            <li>Certificações relevantes (ex.: AWS Certified Solutions Architect) são um diferencial.</li>
        </ol>`,
        salary: 20000,
        date: 1735946701208,
        category: "Programação",
    },
    {
        _id: '10',
        title: "Redator Técnico",
        location: "Brasília",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se a nós como Redator Técnico para criar documentação de fácil compreensão que apoie nossos produtos e serviços. Você trabalhará em estreita colaboração com engenheiros e gerentes de produto para coletar informações e produzir documentação clara, concisa e precisa. Sua função é essencial para garantir que nossos usuários possam entender e utilizar nossos recursos com facilidade.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Criar e manter manuais de usuário, documentação de API e outros materiais técnicos.</li>
            <li>Colaborar com equipes de desenvolvimento para coletar e esclarecer informações técnicas.</li>
            <li>Revisar a documentação existente para garantir precisão e relevância.</li>
            <li>Garantir que a documentação esteja atualizada e consistente com as atualizações de produtos.</li>
            <li>Utilizar o feedback dos usuários para melhorar a clareza e a usabilidade da documentação.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em redação técnica e ferramentas de documentação (ex.: MadCap Flare, Adobe FrameMaker).</li>
            <li>Sólida compreensão de tecnologia e habilidade para transmitir informações complexas de forma clara.</li>
            <li>Excelentes habilidades de pesquisa e análise.</li>
            <li>Fortes habilidades de comunicação e colaboração.</li>
            <li>Atenção aos detalhes e compromisso com a qualidade.</li>
        </ol>`,
        salary: 9000,
        date: 1736032838859,
        category: "Marketing",
    },
    {
        _id: '11',
        title: "Analista de Cibersegurança",
        location: "Curitiba",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Proteja nossos sistemas como Analista de Cibersegurança. Nesta função, você monitorará sistemas de segurança, analisará ameaças potenciais e implementará medidas de proteção para salvaguardar nossas informações e ativos. Sua expertise nos ajudará a nos manter à frente dos desafios de segurança em constante evolução e a manter um ambiente seguro para nossos usuários e stakeholders.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Monitorar e analisar eventos de segurança para identificar ameaças potenciais.</li>
            <li>Realizar avaliações de risco e análises de vulnerabilidades para melhorar a postura de segurança.</li>
            <li>Implementar medidas e controles de segurança para mitigar riscos.</li>
            <li>Colaborar com equipes de TI para responder a incidentes de segurança.</li>
            <li>Manter-se informado sobre as últimas tendências e ameaças em cibersegurança.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Sólido conhecimento de protocolos, padrões e ferramentas de segurança.</li>
            <li>Experiência com ferramentas SIEM e processos de resposta a incidentes.</li>
            <li>Compreensão de protocolos de rede e tecnologias de segurança.</li>
            <li>Excelentes habilidades de resolução de problemas e análise.</li>
            <li>Certificações relevantes (ex.: CISSP, CEH) são um diferencial.</li>
        </ol>`,
        salary: 10000,
        date: 1736118976510,
        category: "Cibersegurança",
    }
    ,
    {
        _id: '12',
        title: "Analista de Negócios",
        location: "Florianópolis",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se a nós como Analista de Negócios para otimizar nossos processos e melhorar a eficiência geral. Você trabalhará em estreita colaboração com as partes interessadas para identificar necessidades de negócios e coletar requisitos para novos projetos. Suas habilidades analíticas ajudarão a orientar a tomada de decisões e garantir que as soluções estejam alinhadas com os objetivos de negócios.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Coletar e analisar requisitos de negócios das partes interessadas.</li>
            <li>Desenvolver documentação detalhada de processos e fluxos de trabalho de negócios.</li>
            <li>Colaborar com equipes de TI e desenvolvimento para traduzir requisitos em soluções.</li>
            <li>Realizar testes e validação de novos sistemas e processos.</li>
            <li>Fornecer suporte contínuo e treinamento para os usuários.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Fortes habilidades analíticas e atenção aos detalhes.</li>
            <li>Proficiência em ferramentas de análise de negócios (ex.: Visio, JIRA).</li>
            <li>Excelentes habilidades de comunicação e relacionamento interpessoal.</li>
            <li>Experiência com análise de dados e relatórios.</li>
            <li>Familiaridade com metodologias ágeis é um diferencial.</li>
        </ol>`,
        salary: 9000,
        date: 1736205114161,
        category: "Gestão",
    }
    ,
    {
        _id: '13',
        title: "Especialista em Marketing",
        location: "Belo Horizonte",
        level: "Júnior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Apoie nossos esforços de marketing como Especialista em Marketing. Nesta função, você ajudará na execução de campanhas, criação de conteúdo e gerenciamento de mídias sociais. Sua criatividade e entusiasmo ajudarão a promover nossa marca e engajar nosso público em diversos canais.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Auxiliar no desenvolvimento e execução de campanhas de marketing.</li>
            <li>Criar conteúdo envolvente para plataformas de mídia social e newsletters.</li>
            <li>Realizar pesquisas de mercado para identificar tendências e oportunidades.</li>
            <li>Monitorar e analisar métricas de desempenho de campanhas.</li>
            <li>Colaborar com membros da equipe para brainstorm de novas ideias de marketing.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Compreensão básica dos princípios de marketing digital.</li>
            <li>Fortes habilidades de comunicação escrita e verbal.</li>
            <li>Proeficiência em plataformas de mídia social e ferramentas de marketing.</li>
            <li>Habilidade criativa e resolução de problemas.</li>
            <li>Disposição para aprender e se adaptar em um ambiente dinâmico.</li>
        </ol>`,
        salary: 5000,
        date: 1736291251812,
        category: "Marketing",
    }
    ,
    {
        _id: '14',
        title: "Cientista de Dados",
        location: "São Paulo",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se à nossa equipe inovadora como Cientista de Dados, onde você analisará conjuntos de dados complexos para impulsionar a tomada de decisões estratégicas. Você utilizará suas habilidades estatísticas e de programação para descobrir insights e desenvolver modelos preditivos, contribuindo para o sucesso geral da nossa organização.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Analisar grandes conjuntos de dados para identificar tendências, padrões e anomalias.</li>
            <li>Desenvolver e implementar modelos preditivos e algoritmos.</li>
            <li>Colaborar com equipes multifuncionais para entender as necessidades do negócio e fornecer soluções baseadas em dados.</li>
            <li>Visualizar descobertas de dados e apresentar insights para as partes interessadas.</li>
            <li>Manter-se atualizado com as tendências e melhores práticas do setor em ciência de dados.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em linguagens de programação como Python ou R.</li>
            <li>Sólido conhecimento de métodos estatísticos e técnicas de aprendizado de máquina.</li>
            <li>Experiência com ferramentas de visualização de dados (ex.: Tableau, Power BI).</li>
            <li>Excelentes habilidades de resolução de problemas e atenção aos detalhes.</li>
            <li>Capacidade de comunicar conceitos complexos para públicos não técnicos.</li>
        </ol>`,
        salary: 20000,
        date: 1736377389463,
        category: "Ciência de Dados",
    }
    ,
    {
        _id: '15',
        title: "Designer UX/UI",
        location: "Porto Alegre",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Estamos em busca de um talentoso Designer UX/UI para melhorar a experiência do usuário em nossas plataformas digitais. Você colaborará com gerentes de produto e desenvolvedores para criar interfaces intuitivas e envolventes que atendam às necessidades dos usuários e aumentem a satisfação geral.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Conduzir pesquisas de usuário e testes de usabilidade para embasar decisões de design.</li>
            <li>Criar wireframes, protótipos e maquetes de alta fidelidade para aplicações web e móveis.</li>
            <li>Trabalhar em estreita colaboração com equipes de desenvolvimento para garantir a implementação precisa dos designs.</li>
            <li>Iterar designs com base no feedback dos usuários e em análises.</li>
            <li>Manter-se atualizado sobre tendências de design e melhores práticas em UX/UI.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em ferramentas de design como Sketch, Figma ou Adobe XD.</li>
            <li>Sólida compreensão dos princípios de design centrado no usuário.</li>
            <li>Experiência com técnicas de design responsivo e adaptativo.</li>
            <li>Excelentes habilidades de comunicação e capacidade de trabalho colaborativo.</li>
            <li>Um portfólio com projetos de design relevantes é obrigatório.</li>
        </ol>`,
        salary: 9000,
        date: 1736463527114,
        category: "Design",
    }
    ,
    {
        _id: '16',
        title: "Engenheiro DevOps",
        location: "Recife",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Como Engenheiro DevOps, você desempenhará um papel crucial na melhoria dos processos de desenvolvimento e implantação de software. Você trabalhará com as equipes de desenvolvimento e operações para automatizar fluxos de trabalho, melhorar a confiabilidade do sistema e garantir a integração e entrega contínua de aplicativos.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Projetar e implementar pipelines CI/CD para automatizar a implantação de aplicativos.</li>
            <li>Monitorar o desempenho do sistema e solucionar problemas de forma proativa.</li>
            <li>Colaborar com equipes de desenvolvimento para melhorar o ciclo de vida do desenvolvimento de software.</li>
            <li>Implementar infraestrutura como código utilizando ferramentas como Terraform ou Ansible.</li>
            <li>Garantir que as melhores práticas de segurança sejam seguidas no processo de implantação.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Sólida experiência com plataformas de nuvem (AWS, Azure ou GCP).</li>
            <li>Proficiência em linguagens de script como Bash ou Python.</li>
            <li>Familiaridade com ferramentas de conteinerização como Docker e plataformas de orquestração como Kubernetes.</li>
            <li>Excelentes habilidades de resolução de problemas e troubleshooting.</li>
            <li>Certificações relevantes (ex.: AWS Certified DevOps Engineer) são um diferencial.</li>
        </ol>`,
        salary: 18000,
        date: 1736549664765,
        category: "Programação",
    }
    ,
    {
        _id: '17',
        title: "Gerente de Vendas",
        location: "São Paulo",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se à nossa equipe como Gerente de Vendas, onde você liderará nossos esforços de vendas para impulsionar o crescimento e aumentar a participação no mercado. Você desenvolverá estratégias de vendas, gerenciará relacionamentos com clientes e orientará sua equipe de vendas para alcançar metas de desempenho.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Desenvolver e implementar planos estratégicos de vendas para atingir os objetivos da empresa.</li>
            <li>Gerenciar e liderar uma equipe de representantes de vendas para cumprir e superar metas de vendas.</li>
            <li>Construir e manter relacionamentos sólidos com clientes e partes interessadas chave.</li>
            <li>Analisar dados de vendas e tendências de mercado para identificar oportunidades de crescimento.</li>
            <li>Fornecer treinamentos e oportunidades de desenvolvimento para a equipe de vendas.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Experiência comprovada em gestão de vendas e liderança de equipes.</li>
            <li>Fortes habilidades de negociação e comunicação.</li>
            <li>Capacidade de analisar dados e tomar decisões informadas.</li>
            <li>Experiência com softwares de CRM (ex.: Salesforce).</li>
            <li>Mentalidade orientada para resultados com foco no cumprimento de metas.</li>
        </ol>`,
        salary: 18000,
        date: 1736635802416,
        category: "Marketing",
    }
    ,
    {
        _id: '18',
        title: "Especialista em Recursos Humanos",
        location: "Brasília",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Como Especialista em Recursos Humanos, você dará suporte a diversas funções de RH, incluindo recrutamento, relações com colaboradores e conformidade. Você desempenhará um papel fundamental em promover uma cultura de trabalho positiva e garantir que as práticas de RH estejam alinhadas aos objetivos organizacionais.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Apoiar o processo de recrutamento, incluindo publicação de vagas e triagem de candidatos.</li>
            <li>Auxiliar em programas de integração e orientação de novos colaboradores.</li>
            <li>Gerenciar registros de funcionários e garantir conformidade com políticas de RH.</li>
            <li>Fornecer orientações para colaboradores sobre questões relacionadas a RH.</li>
            <li>Ajudar a organizar iniciativas de treinamento e desenvolvimento de colaboradores.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Sólida compreensão dos princípios e práticas de RH.</li>
            <li>Excelentes habilidades de comunicação e relacionamento interpessoal.</li>
            <li>Proficiência em softwares de RH (ex.: HRIS, ATS).</li>
            <li>Capacidade de manter confidencialidade e lidar com informações sensíveis.</li>
            <li>Atenção aos detalhes e fortes habilidades organizacionais.</li>
        </ol>`,
        salary: 10000,
        date: 1736721940067,
        category: "Gestão",
    }
    ,
    {
        _id: '19',
        title: "Gerente de Marketing de Conteúdo",
        location: "São Paulo",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Estamos procurando um Gerente de Marketing de Conteúdo para liderar nossa estratégia e execução de conteúdo. Nesta função, você desenvolverá conteúdos envolventes que atraiam nosso público e aumentem o reconhecimento da marca. Você colaborará com diversas equipes para garantir mensagens consistentes em todas as plataformas.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Desenvolver e implementar uma estratégia de marketing de conteúdo alinhada aos objetivos do negócio.</li>
            <li>Criar e supervisionar a produção de conteúdos de alta qualidade para blogs, mídias sociais e outros canais.</li>
            <li>Analisar o desempenho do conteúdo e otimizar estratégias com base em insights orientados por dados.</li>
            <li>Colaborar com designers e outras partes interessadas para garantir que o conteúdo esteja alinhado com a identidade visual da marca.</li>
            <li>Gerenciar o calendário de conteúdo e garantir a entrega pontual dos materiais.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Experiência comprovada em marketing de conteúdo e desenvolvimento de estratégias.</li>
            <li>Fortes habilidades de escrita e edição, com atenção aos detalhes.</li>
            <li>Familiaridade com as melhores práticas de SEO e sistemas de gerenciamento de conteúdo.</li>
            <li>Excelentes habilidades analíticas e capacidade de interpretar dados.</li>
            <li>Fortes habilidades de liderança e gerenciamento de projetos.</li>
        </ol>`,
        salary: 20000,
        date: 1736808077718,
        category: "Marketing",
    }
    ,
    {
        _id: '20',
        title: "Designer Gráfico",
        location: "Belo Horizonte",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se à nossa equipe criativa como Designer Gráfico, onde você será responsável por criar gráficos e layouts visualmente atraentes que reforcem a identidade da nossa marca. Você colaborará com as equipes de marketing e produto para desenvolver soluções criativas para diversos projetos.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Projetar gráficos para mídias digitais e impressas, incluindo redes sociais, sites e materiais de marketing.</li>
            <li>Colaborar com equipes multifuncionais para entender os requisitos e objetivos dos projetos.</li>
            <li>Manter-se atualizado sobre tendências de design e ferramentas para aprimorar habilidades e criatividade.</li>
            <li>Preparar e apresentar conceitos de design para feedback e aprovação das partes interessadas.</li>
            <li>Garantir que todos os designs estejam alinhados às diretrizes da marca e às especificações do projeto.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Proficiência em softwares de design como Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
            <li>Sólida compreensão de princípios de design e tipografia.</li>
            <li>Capacidade de trabalhar em múltiplos projetos simultaneamente e cumprir prazos.</li>
            <li>Excelentes habilidades de comunicação e colaboração.</li>
            <li>Um portfólio que demonstre trabalhos de design relevantes é obrigatório.</li>
        </ol>`,
        salary: 9000,
        date: 1736894215369,
        category: "Design",
    }
    ,
    {
        _id: '21',
        title: "Testador de Software",
        location: "Curitiba",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Como Testador de Software, você desempenhará um papel fundamental para garantir a qualidade e a confiabilidade de nossas aplicações de software. Você irá criar casos de teste, executar testes e colaborar com as equipes de desenvolvimento para identificar e resolver defeitos antes do lançamento do produto.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Desenvolver e executar planos de teste e casos de teste com base nos requisitos do software.</li>
            <li>Identificar, documentar e rastrear defeitos usando ferramentas de rastreamento de bugs.</li>
            <li>Colaborar com desenvolvedores para resolver problemas e melhorar a qualidade do software.</li>
            <li>Realizar testes de regressão para garantir que a funcionalidade existente permaneça intacta.</li>
            <li>Participar de reuniões de equipe para fornecer insights sobre a qualidade do produto e o status dos testes.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Experiência com técnicas de teste manual e automatizado.</li>
            <li>Familiaridade com ferramentas de teste (ex.: Selenium, JUnit).</li>
            <li>Fortes habilidades analíticas e de resolução de problemas.</li>
            <li>Excelente atenção aos detalhes e capacidade de trabalhar sob prazos apertados.</li>
            <li>Boas habilidades de comunicação para articular os resultados e desafios dos testes.</li>
        </ol>`,
        salary: 12000,
        date: 1736980353020,
        category: "Programação",
    }
    ,
    {
        _id: '22',
        title: "Engenheiro de Segurança de Rede",
        location: "Recife",
        level: "Sênior",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Estamos procurando um Engenheiro de Segurança de Rede para proteger a infraestrutura de TI da nossa organização. Você será responsável por projetar e implementar medidas de segurança para proteger os sistemas contra acessos não autorizados e garantir a conformidade com as políticas de segurança.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Desenvolver e implementar protocolos de segurança para sistemas de rede.</li>
            <li>Monitorar o tráfego da rede em busca de atividades suspeitas e responder a incidentes.</li>
            <li>Realizar avaliações de vulnerabilidades e testes de penetração.</li>
            <li>Colaborar com equipes de TI para resolver problemas de segurança e aprimorar a segurança da rede.</li>
            <li>Manter-se atualizado sobre as últimas tendências e tecnologias de segurança.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Sólido conhecimento de protocolos de rede e tecnologias de segurança.</li>
            <li>Experiência com firewalls, VPNs, IDS/IPS e sistemas de informações de segurança.</li>
            <li>Certificações relevantes (ex.: CISSP, CISM, CEH) são preferenciais.</li>
            <li>Excelentes habilidades analíticas e de resolução de problemas.</li>
            <li>Fortes habilidades de comunicação para trabalhar com equipes técnicas e não técnicas.</li>
        </ol>`,
        salary: 18000,
        date: 1737066490671,
        category: "Cibersegurança",
    }
    ,
    {
        _id: '23',
        title: "Engenheiro de Nuvem",
        location: "Florianópolis",
        level: "Pleno",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Slack",
            "email": "slack@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Junte-se à nossa equipe de tecnologia como Engenheiro de Nuvem, onde você será responsável por projetar e gerenciar nossa infraestrutura em nuvem. Você colaborará com equipes de desenvolvimento e operações para garantir a implantação e o escalonamento eficientes de aplicativos.</p>
        <h2><strong>Principais Responsabilidades</strong></h2>
        <ol>
            <li>Projetar e implementar soluções em nuvem utilizando AWS, Azure ou Google Cloud Platform.</li>
            <li>Monitorar e otimizar recursos em nuvem para desempenho e eficiência de custos.</li>
            <li>Trabalhar com equipes de DevOps para automatizar processos de implantação.</li>
            <li>Garantir a segurança em nuvem e a conformidade com padrões do setor.</li>
            <li>Fornecer suporte técnico e resolução de problemas para aplicativos baseados em nuvem.</li>
        </ol>
        <h2><strong>Habilidades Necessárias</strong></h2>
        <ol>
            <li>Experiência com plataformas e serviços em nuvem.</li>
            <li>Proficiência em linguagens de script como Python ou Bash.</li>
            <li>Sólido entendimento de conceitos de rede e segurança.</li>
            <li>Experiência com ferramentas de orquestração de contêineres, como Kubernetes.</li>
            <li>Boas habilidades de resolução de problemas e atenção aos detalhes.</li>
        </ol>`,
        salary: 12000,
        date: 1737152628322,
        category: "Programação",
    }    
];
