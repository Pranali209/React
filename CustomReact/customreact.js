function customReact(domele,reactele){
    const ele = document.createElement(reactele.type);
    ele.innerHTML = reactele.children;
    for (const key in reactele.props) {
        if (key=== reactele.children) continue
        else {
            ele.setAttribute(key,reactele.props[key])
        }
            
       domele.appendChild(ele);     
        
    }
}

const mainElement = document.querySelector("#root");
const ReactElemnt = {
    type:'a',
    props : {
        href : 'https://in.indeed.com/',
        target: '_blank'
    },
    children : 'Click here to navigate'
}
customReact(mainElement,ReactElemnt)

