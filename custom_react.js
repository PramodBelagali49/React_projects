const mainContainer=document.querySelector('#root');

const reactComponent={
    type:'a',
    text:"Click here to google",
    children:{
        href:"www.google.com",
        target:"_blank"
    }
}

function custom_render(reactComponent,mainContainer){
    const domItem=document.createElement(reactComponent.type);
    domItem.innerText=reactComponent.text;

    for(let child in reactComponent.children){
        domItem.setAttribute(child,reactComponent.children.child);
    }

    mainContainer.appendChild(domItem);
}

custom_render(reactComponent,mainContainer);

