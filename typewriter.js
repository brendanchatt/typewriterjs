async function typewriter(txt, element, onFinished, config) {
    
    for (let char of txt) {
        switch(char) {
            case '^':
                element.innerHTML += '</br>';
                break;
            case '>':
                element.innerHTML += '&nbsp;'
                break;
            default:
                element.innerHTML += char
        }
        
        await sleep(char == '.' ? 750 : char == ',' ? 500 : 40.0);
    } 
    onFinished?.();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
