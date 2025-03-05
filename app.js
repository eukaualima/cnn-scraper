// <!-- Importação de bibliotecas --!>
import axios from "axios";
import * as cheerio from "cheerio";

/**
 * Coletando o código HTML do site oficial da CNN Brasil.
 * @link https://axios-http.com/docs/example
 */
const response = await axios.get('https://www.cnnbrasil.com.br/');
const html = response.data;

/**
 * Analisando o código usando o Cheerio.
 * @link https://cheerio.js.org/docs/api/functions/load
 */
const $ = cheerio.load(html);

const all_news = $(".block__news__title");

/**
 * Imprimindo todas as manchetes do site da CNN Brasil no console.
 * @link https://cheerio.js.org/docs/basics/manipulation#modifying-the-text-content-of-an-element
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 */
for (const news of all_news)
{
    const text = $(news).text().trim();

    console.log(text);
}