import { linkDetails } from "./js/linkDetails.js";

const root = document.getElementById("root");

const linkTemplate = (text, icon, url) => {
    let link = document.createElement("a");
    link.classList.add("link-container");
    link.href = url;
    link.target = "_blank";
    link.innerHTML = `<i class="${icon}"></i><h3 class="link-name">${text}</h3>`;
    return link;
}

Object.values(linkDetails).forEach(key => {
    root.append(linkTemplate(key.text, key.icon, key.url));
    // root.append(document.createElement("br"));
});

