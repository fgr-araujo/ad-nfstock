# NF Stock - WIP
Apresentação Web do produto NF-Stock

## Demo
(https://nfstock-a388a.firebaseapp.com) [https://nfstock-a388a.firebaseapp.com]


## Paleta de Cores
[https://color.adobe.com/pt/NF-STock-color-theme-12264757/] (Paleta de cores)


## Instalação
```
npm i
```

## Rodar em desenvolvimento
```
npm run serve
```

## Gerar build para Firebase
Será necessário fazer login no firebase antes de efetuar o deploy
```
npm run build
firebase deply
```

## Rodar com Docker
```
npm run docker-build
npm run docker-run
```

## Testes Unitários
```
npm run test
```

## PagarMe
O sistema de pagamento já está integrado com o PagarMe o que o torna totalmente funcional.

Para acessar o dashboard com os extratos, utilize os dados abaixo:
**site:** https://dashboard.pagar.me
**user:** ifgr.fagner@gmail.com
**senha:** queroseralterdata0204

Para fins de teste, usar a seguinte conta:
**Número do cartão:** 4111111111111111

**Validate:** 1219

**CVV:** 231

**Nome** João da Silva


## Melhorias
* Cobrir melhor os testes unitários
* Implementar GDPR
* Validar dados do cartão de crédito