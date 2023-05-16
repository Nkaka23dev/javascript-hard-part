let name = "Nkaka";

const divInfo = ['div', `Hi, ${name}!`];

function createNode(node) {
    const element = document.createElement(node[0]);
    element.textContent = node[1]
    return element;
}

document.body.append(createNode(divInfo))