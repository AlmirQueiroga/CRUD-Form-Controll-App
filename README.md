# Desafio Edesoft

Este desafio consiste na elaboração de um aplicativo CRUD.

## Início do Desenvolvimento 

Foi utilizado framework ReactJs utilizando typescript. Para manipulação CSS foi utilizado styled components e 
para elaboração de componentes foi utilizado Material-UI, essas foram as decisões iniciais para elaboração do projeto elaborado ao seguir.

![1](https://user-images.githubusercontent.com/28552417/186843453-ea29d27f-6573-41e6-85b0-07cd74a5ff47.PNG)

### Inputs de Cadastro

O desenvolvimento dos inputs rodou todo ao redor do Material UI, utilizando TextInputs, fora os componentes de visualização 
e organização(Como Card, MenuItem, FormControl, TabList, etc), principalmente na Home que organiza os componentes. Foi realizado a implementação padrão dos componentes de input de acordo com o exemplo no Fake Store Api

![image](https://user-images.githubusercontent.com/28552417/186844584-fbb9c2b5-88da-4e59-a9a3-4023b41d4826.png)

Desta forma também foram elaboradas interfaces de dados para facilitar a incorporação e envio de dados, como por exemplo a interface de cadastro que possui
mais duas sub interfaces

![image](https://user-images.githubusercontent.com/28552417/186844900-18dbada1-0454-4019-8b62-4cedb826abfa.png)

### Utilização do Formik

Ao iniciar a etapa de desenvolvimento do comportamento dos botões, desenvolvi de forma que tem processo de validação, sendo todos os campos obrigatórios e com comportamento de onBlur vermelho se não preenchido, então percebi vantagem na utilização do Formik, uma biblioteca que monitora o estado do formulário,
desta forma sendo utilizado no Submit do cadastro, processo de validação, setar valores e valores iniciais(utilizado no edit).


![image](https://user-images.githubusercontent.com/28552417/186845811-dda46e68-4a92-4329-a21c-db3c0e3e3c6d.png)
![image](https://user-images.githubusercontent.com/28552417/186845904-bae7e5af-4417-4ffe-8b01-0dd6d92b0edf.png)



### Submit para Fake Store API

Como a api agora é utilizada diversas vezes durante o projeto, foi criada uma instância separada com uma baseurl acessada toda vez que a api for necessária. 

![image](https://user-images.githubusercontent.com/28552417/186846101-7e7c32eb-37c6-49ed-b3ad-16e3e9e8c9b7.png)

No Submit do Formik é realizado a validação e o request POST para api e o redirecionamento para a tela de listagem.

![image](https://user-images.githubusercontent.com/28552417/186846374-b6b7df1a-489a-43bf-a21b-c1fe20a05be5.png)


### Roteamento e tela de listagem básica

Como antes citado brevemente anteriormente, a organização do app consiste em uma Home que importa CadastroForm e Lista como Tabs, então foi considerado inicialmente
utilizar react-router-dom mas com esta organização de aplicativo foi mais eficiente utilizar um useState no componente pai que controla o estado de exibição das tabs, então quando necessário o roteamento pelos componentes filhos é acessada a função setTabs do componente pai.

![image](https://user-images.githubusercontent.com/28552417/186846610-65e03cd5-6e75-4f48-956c-1a6b61a8b115.png)

Ao chegar na tela Lista é utilizado um useEffect para acesso a api assim que o componente é criado e salvar a lista que os itens são exibidos, optei por utilizar
cards por causa do longo objeto que ocasionaria tabelas muito grandes com muito scroll horizontal, então cada item da lista vem
juntamente com um botão de editar e deletar, salvando id para identificação.

![image](https://user-images.githubusercontent.com/28552417/186846963-00bfdd8f-ac88-475d-8629-603b16d9deb2.png)
![image](https://user-images.githubusercontent.com/28552417/186847475-7c6f2e79-c14f-4bc8-839e-ab2a6ca7fa58.png)


### Botão de deletar e Dialog

![image](https://user-images.githubusercontent.com/28552417/186847856-7af165ed-7abb-43f7-8100-6cf7a1e4c1d0.png)

Ao escolher o botão de deletar de determinado item na lista, é utillizado um state para controle de um Dialog que é
uma tela de confirmação que se confirmado irá fazer a solicitação de delete utilizando o id salvo, o que atualizaria a
lista da api e a página atualizaria a visualização.

![image](https://user-images.githubusercontent.com/28552417/183973748-2b8bdc95-26c8-4e0f-bfcd-fc44cec60bc7.png)
![image](https://user-images.githubusercontent.com/28552417/183973847-6d685c35-23c4-454c-9a2a-2b7f7a0b1f1e.png)


### Botão de edição e Redux

Ao desenvolver o botão de editar, poderia ser feito utilizando a mesma estratégia do roteamento, com um estado no componente Home para receber o id e 
realizar um fidbyId na api na tela de cadastro, mas foi preferível utilizar o Redux quese encaixa perfeitamente com a necessidade.

![image](https://user-images.githubusercontent.com/28552417/186848327-2e81eb2c-ab3a-4efb-bf60-754af01da0ba.png)

Desta forma foi desenvolvido a Store que utiliza do reducer e as actions do dispatcher para dar estado global ao estadode edição,
agora ao se carregar a tela de cadastro é observado vários acessos à initialValues que é um objeto de valores acessados pelo useSelector,
caso um cadastro seja selecionado para edição este é incorporado como este objeto, então ao verificar o estado de edição é verificado este 
objeto que é incorporado para edição e alterado a organização de botões e a chamada da api para Put, ainda utillizando a interface e id para identificação.

![image](https://user-images.githubusercontent.com/28552417/183974626-b5d95121-d0de-4c00-8676-f2af0e17a382.png)
![image](https://user-images.githubusercontent.com/28552417/183974822-581e9b72-5ddd-4ab1-976f-fd6bd0521b36.png)
![image](https://user-images.githubusercontent.com/28552417/183974751-7a4762c6-e71f-412c-85d3-50d01c381646.png)
![image](https://user-images.githubusercontent.com/28552417/183974548-ef6f522c-de4a-4063-88ea-4a021477c2d1.png)

### Planos de Desenvolvimento

Os seguintes passos estão planejados para desenvolvimento e maior complexidade do teste entregue:

Utilizar máscara de email e phone
Autocompletar city,street com zipcode
Implementação de Geocoder para capturar objeto Geolocalização a partir do ZipCode
Design de Cards de exibição mais bonitos
Testes



### Bibliotecas Atuais

"@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.8.4",
    "@mui/lab": "^5.0.0-alpha.93",
    "@mui/material": "^5.9.3",
    "@mui/x-date-pickers": "^5.0.0-beta.4",
    "@reduxjs/toolkit": "^1.8.4",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.47",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "axios": "^0.27.2",
    "date-fns": "^2.29.1",
    "formik": "^2.2.9",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-geocode": "^0.2.3",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1",
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4",
    "yup": "^0.32.11"
