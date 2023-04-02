if(sessionStorage.getItem("deleteLoader") != null)
{
    console.log("NUL")
    const element = document.getElementById("page-loader-body");
    element.remove(); 
    const main_page = document.getElementById("homepage");
    main_page.style.display = "Inline";
}


if(sessionStorage.getItem("visited") != null)
{

    if(sessionStorage.getItem("visited" == false))
    {
        let element = document.getElementById("loaderimage");
        element.classList.add("loader-logo")
    }
   
}
else
{
    if(window.screen.width <= 450)
    {
        let image = document.getElementById("loaderimage")
        image.src = "../image-assets/logo-bold-no-padding.png";
    }
    else
    {
        let image = document.getElementById("loaderimage")
        image.src = "../image-assets/logo-no-padding.png";
    }

    sessionStorage.setItem("visited", false)
    console.log(sessionStorage.getItem("visited"))
    const element = document.getElementById("loaderimage");
    console.log(element)
    element.classList.add('loader-logo')

    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          transitionJS();
        }
    };

    sessionStorage.setItem("deleteLoader", true)


    sessionStorage.setItem("visited", true)

}

function transitionJS()
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


        main_page.style.backgroundColor = "#353333";
    }, "1000");
}
