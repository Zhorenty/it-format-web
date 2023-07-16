const faqs = document.querySelectorAll(".faq"); 
 
faqs.forEach((faq_question) => { 
    faq_question.addEventListener("click", ()=> { 
        faq_question.classList.toggle("active") 
        const content = faq_question.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }) 
})

