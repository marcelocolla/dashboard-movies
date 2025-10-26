# Movies Dashboard

O Movies Dashboard Explorer é uma aplicação web de frontend, projetada para fornecer uma visão sobre filmes premiados (presumivelmente de uma base de dados fictícia). A aplicação é dividida em duas páginas principais:

### Dashboard Principal

A página inicial atua como um dashboard analítico, apresentando quatro painéis interativos que destacam padrões e recordes na história da premiação:

- **List Years with Multiple Winners**: Exibe uma tabela com os anos em que mais de um filme compartilhou o principal prêmio.

- **Top 3 Studios with Winners:** Apresenta os três estúdios de cinema que acumularam o maior número de vitórias ao longo da história.

- **Producers with Longest and Shortest Interval Between Wins**:: Um painel intrigante que lista os produtores com a maior e a menor diferença de tempo (em anos) entre suas vitórias.

- **List Movie Winners by Year**: Um feed cronológico que permite aos usuários navegar por ano e visualizar imediatamente qual filme levou o prêmio principal.

A segunda página oferece uma funcionalidade de busca aprofundada ou exibe os detalhes completos de um vencedor.

---

Este projeto foi criado com as seguintes tecnologias:

- **Build Tool:** [Vite](https://vitejs.dev/)
- **Linguagem:** TypeScript
- **Package Manager:** yarn
- **Ambiente de Execução:** Node.js
- **Package:** Tanstack Query, React Router, Material React Table, Emotion e Vitest.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte software instalado em sua máquina:

1.  **Node.js (Versão 22.x):**

- Recomendamos o uso da versão **22** (ou superior) do Node.js para compatibilidade total.
- Você pode verificar a sua versão instalada rodando:
  ```bash
  node -v
  ```
- Se precisar de um gerenciador de versões, considere usar o [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm).

2.  **Package Manager (yarn):**

- Este projeto utiliza **[yarn]**.
- Verifique a sua versão:
  ```bash
  npm -v  # ou yarn -v ou pnpm -v
  ```

## 🛠️ Instalação e Configuração

Siga os passos abaixo para instalar e configurar o projeto localmente.

### 1. Clonar o Repositório

Abra seu terminal e clone o repositório do projeto:

```bash
git clone [https://github.com/marcelocolla/dashboard-movies](https://github.com/marcelocolla/dashboard-movies)
cd dashboard-movies
```

### 2. Instalar Dependências

Dentro do diretório do projeto, utilize o gerenciador de pacotes para instalar todas as dependências necessárias:

```bash
yarn

# Se você estiver usando npm
# npm install

# Se você estiver usando pnpm
# pnpm install
```

3. Configuração de Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto, baseado no arquivo `.env.example`.

```bash
# Exemplo de .env
VITE_BASE_URL_API=https://example.tech/api
```

## Como Executar o Projeto

### Modo de Desenvolvimento (Development)

Para iniciar o servidor de desenvolvimento do Vite com hot-reloading:

```bash
yarn dev
# ou
# npm run dev
# ou
# pnpm dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173).

## 📂 Estrutura do Projeto

Abaixo está um resumo da estrutura de pastas principal deste projeto e o propósito de cada diretório:

```bash
.
  ├── public/
  ├── src/
  │ ├── __tests__/ # utilitarios usados pelos cenários de testes
  │ └── app/
  │ │ ├── components/
  │ │ ├── layout/
  │ │ ├── core/           # Configurações de theme, services e constants.
  │ │ ├── bootstrap.tsx   # Configurações de providers como theme e query client.
  │ │ └── routes.tsx      # Ponto de entrada para configurações de rotas.
  │ └── movies/           # Artefatos exclusivos do contexto de `movies`
  │   ├── components/
  │   ├── pages/
  │   ├── routes/
  │   ├── services/
  │   └── types/
  ├── .env.example
  ├── .gitignore
  ├── package.json
  └── vite.config.js
```
