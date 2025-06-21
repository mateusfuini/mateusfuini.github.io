# Arquitetura e Funcionalidades do Sistema

## 1. Visão Geral

O sistema proposto visa auxiliar na elaboração de Termos de Referência (TR) para empresas públicas, garantindo a conformidade com a Lei nº 13.303/2016 (Lei das Estatais) e otimizando o processo através da pesquisa em termos de referência existentes via API do ComprasNet.

## 2. Funcionalidades - Visão do Usuário (Elaborador do TR)

### 2.1. Início da Elaboração do TR

*   **Seleção do Objeto:** O usuário iniciará informando o objeto do TR (ex: "Computadores", "Serviços de Limpeza").
*   **Sugestão de Modelos:** O sistema poderá sugerir modelos de TR baseados no objeto informado, se houver.

### 2.2. Preenchimento Guiado do TR

*   **Estrutura do TR:** O sistema apresentará a estrutura do TR (baseada no template fornecido) e guiará o usuário no preenchimento de cada seção (Objeto, Justificativas, Especificações Técnicas, etc.).
*   **Perguntas Contextuais:** Para cada seção, o sistema fará perguntas específicas para coletar as informações necessárias. Ex: Para "Objeto", perguntará sobre a quantidade, tipo, etc.
*   **Pesquisa de Referência:** Para itens como "Especificações Técnicas", o sistema poderá pesquisar em termos de referência similares no ComprasNet (via API) e sugerir detalhes ou exemplos para o usuário.
*   **Validação Legal:** O sistema alertará o usuário sobre requisitos específicos da Lei das Estatais relacionados à seção que está sendo preenchida (ex: justificativa para indicação de marca específica).
*   **Geração de Texto:** Com base nas respostas do usuário e nas pesquisas, o sistema gerará o texto para cada seção do TR.
*   **Revisão e Edição:** O usuário poderá revisar e editar o texto gerado, com a opção de solicitar perguntas adicionais à IA caso o conteúdo não esteja satisfatório.

### 2.3. Geração do Documento Final

*   **Exportação:** O sistema permitirá a exportação do TR final em formato PDF, seguindo o template padrão.

## 3. Funcionalidades - Visão do Administrador

### 3.1. Gestão de Modelos de TR

*   **Upload de Modelos:** O administrador poderá fazer upload de novos templates de TR ou atualizar os existentes.
*   **Configuração de Campos:** Mapear os campos do template com as perguntas que a IA fará ao usuário.

### 3.2. Gestão de IAs e Configurações

*   **Cadastro de IAs:** Gerenciar diferentes modelos de IA que podem ser utilizados para a geração de texto e pesquisa.
*   **Configuração da API do ComprasNet:** Inserir e gerenciar as chaves de API e outras configurações necessárias para a integração com o ComprasNet.
*   **Monitoramento de Uso:** Visualizar métricas de uso do sistema, como número de TRs gerados, pesquisas realizadas, etc.

## 4. Arquitetura Proposta (Alto Nível)

*   **Frontend:** Aplicação web (React ou similar) para as interfaces de usuário e administrador.
*   **Backend:** API (Python/Flask ou similar) para gerenciar a lógica de negócio, interação com a IA, e integração com a API do ComprasNet.
*   **Módulo de IA:** Componente responsável pela geração de texto, processamento de linguagem natural e pesquisa inteligente.
*   **Integração com ComprasNet API:** Módulo específico para consumir a API do ComprasNet e buscar dados relevantes.
*   **Banco de Dados:** Armazenamento de modelos de TR, configurações, dados de usuário e histórico de TRs gerados.

