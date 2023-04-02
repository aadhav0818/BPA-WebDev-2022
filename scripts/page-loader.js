addEventListener('load', function(event)
{
    
    setTimeout(() => {
        const doc = document.getElementById("page-loader-body");
        const main_page = document.getElementById("homepage");
        
        doc.classList.add('fadeouthome');
        setTimeout(() => {
            doc.style.display = "None";
        }, "1000");
        setTimeout(() => {
            main_page.style.display = "Inline";
        }, "1000");
    }, "1000");

 

})