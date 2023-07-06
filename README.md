# Front-end do projeto de cadastro de empresas

Este projeto é a interface front-end desenvolvida para o processo seletivo da vaga de Full Stack na empresa Elite Consultores. O objetivo do projeto é fornecer uma interface interativa para gerenciar o cadastro de empresas, seguindo os requisitos estabelecidos.

## Tecnologias utilizadas

- React.js
- Vite
- TypeScript
- Axios
- Xlsx

## Como utilizar

Para utilizar o front-end do projeto, siga as instruções abaixo:

#### 1. Clone o repositório:

`https://github.com/atilamariano/eliteConsultores-frontEnd/tree/main`

#### 2. Instale as dependências:

`npm install`


#### 3. Configure o ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

`VITE_API_URL=url da api`

Substitua `URL_DA_API` pela URL da API do projeto.

#### 4. Inicie o servidor de desenvolvimento:

`npm run dev`

Pronto! O front-end do projeto está sendo executado e pode ser acessado no navegador através do endereço `http://localhost:5173`.

## Funcionalidades

O front-end do projeto oferece as seguintes funcionalidades:

### Listagem de Empresas

A tela inicial do projeto apresenta uma listagem das empresas cadastradas no sistema. As empresas ativas são destacadas com a cor azul e as inativas com a cor vermelha. As informações exibidas para cada empresa são:

- CNPJ
- Razão Social
- Nome Fantasia
- Responsável
- Telefone de Contato
- E-mail de Contato
- Data de Inclusão
- Estatus

### Filtros de Listagem

É possível filtrar os dados exibidos na listagem por status (ativos, inativos ou todos) e/ou data de inclusão (intervalo de datas).

### Exportação de Dados

Através do botão "Exportar", é possível gerar uma planilha Excel com as informações do sistema. A planilha contém as seguintes colunas:

- Código
- CNPJ
- Razão Social
- Inscrição Municipal
- Data de Inclusão
- Nome do Responsável

As mesmas informações exibidas na tela são incluídas no arquivo exportado.

Aqui está uma tabela de exemplo com duas empresas para ilustrar as colunas mencionadas:

| Código | CNPJ            | Razão Social         | Inscrição Municipal | Data de Inclusão | Nome do Responsável |
|--------|-----------------|----------------------|---------------------|------------------|---------------------|
| 001    | 12345678900001  | Empresa ABC          | 123456              | 2022-01-15       | João Silva          |
| 002    | 98765432100002  | Empresa XYZ          | 654321              | 2022-02-20       | Maria Oliveira      |

Essa tabela demonstra como as informações seriam organizadas na planilha Excel gerada a partir do botão "Exportar" do sistema. Cada empresa é representada por uma linha na tabela, com os respectivos valores para cada coluna. Esses dados podem ser exportados para uma planilha Excel para facilitar a manipulação e análise das informações.


## Observações

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Full Stack na empresa Elite Consultores. Ele implementa a interface front-end para gerenciar o cadastro de empresas, seguindo os requisitos mencionados.

O front-end do projeto é apenas uma implementação de exemplo e pode ser personalizado e estendido de acordo com as necessidades específicas.

Caso precise de mais informações, fique à vontade para entrar em contato, ficarei feliz em esclarecer qualquer duvida sobre o projeto.

Autor: Átila Mariano. Contato: atilamariano@hotmail.com

Obrigado por considerar este projeto!
















