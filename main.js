import { parse } from "himalaya";
import { html } from "./html";

const getData = elements => {
  return elements[0].children[0].content
    .replace("Avaliou em: ", "")
    .replace(/(\r\n|\n|\r)/gm, "");
};

const getPessoa = elements => {
  return elements[1].children
    .filter(e => e.type == "element")
    .filter(e => e.tagName == "p")[0]
    .children[0].content.replace(/(\r\n|\n|\r)/gm, "");
};

const getNota = elements => {
  return elements[2].children
    .filter(
      e =>
        e.type == "element" && e.hasOwnProperty("tagName") && e.tagName == "div"
    )[0]
    .children.filter(e => e.type == "element")[0]
    .children.filter(e => e.type == "element")[0]
    .children.filter(e => e.type == "element")[0]
    .children.filter(e => e.type == "element")[0]
    .children[0].content.replace(/(\r\n|\n|\r)/gm, "");
};

const getPros = elements => {
  const busca = elements[2].children
    .filter(
      e =>
        e.type == "element" && e.hasOwnProperty("tagName") && e.tagName == "div"
    )[0]
    .children.filter(
      e =>
        e.type == "element" && e.hasOwnProperty("tagName") && e.tagName == "div"
    )[1]
    .children.filter(e => e.type == "element");

  const index = busca.length - 2;

  return busca[index].children[1].content.replace(/(\r\n|\n|\r)/gm, "");
};

const json = parse(html);
const list = json[0].children
  .filter(e => e.tagName == "body")[0]
  .children.filter(e => e.tagName == "li")
  .map(li => {
    const elements = li.children.filter(e => e.type == "element");
    const data = getData(elements);
    const pessoa = getPessoa(elements);
    const nota = getNota(elements);
    const pros = getPros(elements);
    return {
      data,
      pessoa,
      nota,
      pros
    };
  });

console.table(list);
