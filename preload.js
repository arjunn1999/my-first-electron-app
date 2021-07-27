window.addEventListener('DOMContentLoaded',()=>{
    const replaceText = (selector,Text) => {
        const element = document.getElementById(selector);
        if (element)
            element.innerText=Text;
    }
    for (const dependency of ['chrome','node','electron']){
        replaceText(`${dependency}-version`,process.versions[dependency]);

    }
});


