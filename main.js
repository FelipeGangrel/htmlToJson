import { parse } from "himalaya";
import { html } from "./html";

const getData = elements => {
  return elements[0].children[0].content.replace("Avaliou em: ", "");
};

const getPessoa = elements => {
  return elements[1].children
    .filter(e => e.type == "element")
    .filter(e => e.tagName == "p")[0].children[0].content;
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
    .children.filter(e => e.type == "element")[0].children[0].content;
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

  return busca[index].children[1].content;
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

console.log(list);
