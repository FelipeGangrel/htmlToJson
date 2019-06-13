import { parse } from "himalaya";
import { html } from "./html";
import axios  from "axios";


const json = parse(html);
const list = json[0].children
    .filter(e => e.tagName == "body")[0].children
    .filter(e => e.tagName == "li")
    .map(li => {
        const elements = li.children.filter(e => e.type == "element");
        const data = elements[0].children[0].content.replace("Avaliou em: ", "");
        const pessoa = elements[1].children
            .filter(e => e.type == "element")
            .filter(e => e.tagName == "p")[0].children[0].content
        const nota = elements[2].children
            .filter(e => e.type == "element" && e.hasOwnProperty("tagName") && e.tagName =="div")[0].children
            .filter(e => e.type == "element")[0].children
            .filter(e => e.type == "element")[0].children
            .filter(e => e.type == "element")[0].children
            .filter(e => e.type == "element")[0].children[0].content
        return {
            data,
            pessoa,
            nota
        };
    });
    
console.log(list);