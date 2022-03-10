const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach(accordionHeaders =>{
    accordionHeaders.addEventListener("click",event =>{
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionHeaders) {
           currentlyActiveAccordionItemHeader.classList.toggle("active");
           currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionHeaders.classList.toggle("active");
        const accordionBody = accordionHeaders.nextElementSibling;
        if(accordionHeaders.classList.contains("active")){
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }else{
            accordionBody.style.maxHeight = 0;
        }
    })
})