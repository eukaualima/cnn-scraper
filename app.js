// <!-- Importação de bibliotecas --!>
import axios from "axios";
import * as cheerio from "cheerio";

/**
 * Coletando o código HTML do site oficial da CNN Brasil.
 * @link https://axios-http.com/docs/example
 */
const response = await axios.get('https://www.cnnbrasil.com.br/politica/');
const html = response.data;

/**
 * Analisando o código usando o Cheerio.
 * @link https://cheerio.js.org/docs/api/functions/load
 */
const $ = cheerio.load(html);

const all_news = $(".home__list__item"); // $( ) deve receber a classe do <li>

/**
 * Imprimindo todas as manchetes do site da CNN Brasil no console.
 * @link https://cheerio.js.org/docs/basics/manipulation#modifying-the-text-content-of-an-element
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 */
for (const news of all_news)
{
    /**
     * Saída estruturada de dados, para melhor manipulação futura.
     * @link https://cheerio.js.org/docs/basics/traversing#find
     */
    const structured_data = 
    {
        link: $(news).find(".home__list__tag").attr("href"),
        title: $(news).find(".news-item-header__title").text(),
        description: $(news).find(".home__list__tag").attr("title"),
        datetime: $(news).find(".home__title__date").text(),
        image: $(news).find("img").attr("src")
    };

    console.log(structured_data);
}