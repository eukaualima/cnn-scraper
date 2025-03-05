# CNN Scraper
Repositório voltado para Web Scraping no site da CNN Brasil, mais especificamente na guia de política.
## 📚 Bibliotecas e documentações que eu utilizei
* [Biblioteca - Axios](https://www.npmjs.com/package/axios);
* [Documentação - Axios](https://axios-http.com/ptbr/docs/api_intro);
* [Biblioteca - Cheerio](https://www.npmjs.com/package/cheerio);
* [Documentação - Cheerio](https://cheerio.js.org/);
* [Documentação - MDN Web Docs](https://developer.mozilla.org/en-US/);
## 👌 O que faz
Em síntese, esse código permite coletar informações de todas as últimas notícias do dia que são publicadas na [área de política](https://www.cnnbrasil.com.br/politica/) do site da CNN Brasil. Os dados são retornados no terminal de forma estruturada, sendo eles:
| Atributo | Tipo     | Descrição                |
| :-------- | :------- | :------------------------- |
| `link` | `string` | Retorna o link completo da manchete. |
| `title` | `string` | Retorna o título completo da manchete. |
| `description` | `string` | Retorna a descrição completa da manchete. |
| `datetime` | `string` | Retorna a data de publicação da manchete. |
| `image` | `string` | Retorna o link da imagem em destaque da manchete. |
<hr>
O retorno será algo como:

```js
{
  link: 'https://www.cnnbrasil.com.br/politica/lula-affonso-romano-de-santanna-contribuiu-intensamente-para-a-cultura/',
  title: ' Lula: Affonso Romano de Sant’Anna contribuiu intensamente para a cultura ',
  description: 'Escritor mineiro morreu nesta terça-feira (4) aos 87 anos, e foi responsável por presidir a Fundação Biblioteca Nacional entre 1990 e 1996',
  datetime: ' 04/03/2025 às 21:01 ',
  image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/03/lula-affonso.jpg?w=350&h=195&crop=1'       
}
```

## 👀 Requisitos para funcionar
1. Possuir [Node.js](https://nodejs.org/);
2. Ter familiaridade de [JavaScript ES6+](https://www.w3schools.com/js/js_es6.asp);
3. Ter familiaridade com códigos [HTML](https://www.w3schools.com/html/default.asp) e [CSS](https://www.w3schools.com/css/default.asp);
4. Saber utilizar o [DevTools](https://developer.chrome.com/docs/devtools/overview) do navegador.
