# NF Stock - WIP
Apresentação Web do produto NF-Stock

## Descrião do projeto
Por se tratar de um projeto *front-end* demonstrativo eu optei por não utilizar nenhuma biblioteca de estilização como *Foundation* ou *Bootstrap*, bem como nenhuma bibliotca de componentização para javascript. A demosntração está hospedada no *firebase hosting* e o pagamento já está integrado com o *Pagar Me*.

### Tecnologias utilizadas
* **VueJS:** Opção pessoal por ser o framework que tenho maior familiaridade. [Site Oficial](https://vuejs.org/)
* **SCSS:** Pré-processador de estilos. [Site Oficial](https://sass-lang.com/)
* **ITCSS:** Padrão organizacional dos arquivos de estilo. [Site não oficial](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
* **RSCSS**: Padrão para a escrita das folhas de estilo. [Site Oficial](https://rscss.io/)
* **Firebase:** Como meio de login, database e hosting. Achei melhor usa-lo do que crar um serviço ou utilizar o localstorage. [Site Oficial](https://firebase.google.com/?gclid=CjwKCAjwp_zkBRBBEiwAndwD9bgJi2eYxx1O_FsKvpnfCNjhNvgwKXQ5FUE2WBFphv3jdznopS2axhoCAAYQAvD_BwE)
* **PagarMe:** Biblioteca de pagamentos para efetuar as transações de compra.[Site Oficial](https://pagar.me/)
* **FontAwedome:** Como biblioteca de ícones. [Site Oficial](https://fontawesome.com/)
* **Docker:** Criação de containers [Site Oficial](https://www.docker.com/)
* **Jest:** Test framework. [Site Oficial](https://jestjs.io/)
* **Storybook:** Catalogador de componentes. [Site Oficial](https://storybook.js.org/)
* **Kuler:** Para definir a paleta de cores. [Site Oficial](https://color.adobe.com/pt/create/color-wheel/)

## Demo
[https://nfstock-a388a.firebaseapp.com](https://nfstock-a388a.firebaseapp.com)

## Mockup
[Estrutura da tela](https://github.com/iFgR/ad-nfstock/blob/master/.documents/NFStock.jpg?raw=true)

## Paleta de Cores
As cores utilizadas nesse este site podem ser vistas no kuler:

[Paleta de cores](https://color.adobe.com/pt/NF-STock-color-theme-12264757/)


## Instalação
Para instalar o projeto localmente execute os comandos:
```
$ git clone https://github.com/iFgR/ad-nfstock.git
$ cd ad-nfstock
$ npm i
```

## Rodar em desenvolvimento
```
$ npm run serve
```

## Gerar o build
```
$ npm run build
```

## Fazer deploy no Firebase
Será necessário fazer login no firebase antes de efetuar o deploy. Pra isso, abra o site do firebase e efetue o login da conta da aplicação.
Após isso, rode o comando:
```
$ firebase deploy
```

## Gerar imagem do docker
Caso queira rodar a aplicação pelo docker, rode com o seguinte comando:
```
$ npm run docker-build
$ npm run docker-run
```

## Visualizar os components pelo Storybook
```
$ npm run storybook
```

## Testes Unitários
```
$ npm run test:unit
```

## PagarMe
Ao efetuar a compra de um plano, esse será registrado na ferramenta de pagamentos *PagarMe* o que o torna essa demo totalmente funcional.
Os pagamentos podem ser acomapanhados pelo dashboard do *PagarMe* em tempo real.

Para acessar o dashboard, utilize os dados abaixo:

| Campo        | Valor           |
| ------------- |:-------------:|
| site      | https://dashboard.pagar.me |
| user      | ifgr.fagner@gmail.com      |
| senha | queroseralterdata0204      |


Para fins de teste, usar os seguintes dados para  cartão de crédito:

| Campo        | Valor           |
| ------------- |:-------------:|
| Número do cartão      | 4111111111111111 |
| Validate      | 1219      |
| CVV | 231      |
| Nome | João da Silva      |

## Melhorias
* Aumentar a cobertura de testes
* Implementar GDPR
* Melhorar a validação dos campos
* Criar componentes com máscaras
* Implementar Esqueci a senha
