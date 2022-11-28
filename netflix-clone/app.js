
  function emailInputMessage() {
        var input = document.querySelector(".em-input").value;
            var emailMessage = document.querySelector(".email-message");
        var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const list = document.querySelector(".em-input").classList;

    if (input.match(pattern)) {
        emailMessage.innerHTML= " ";
        list.remove("error");
    }   

    else if (input.length <= 5) {
        emailMessage.innerHTML="Email is required!";
        list.add("error");
    }
    
        else{
            emailMessage.innerHTML="Please enter a valid email address.";
            list.add("error");
            
        } 
      
    }
 
     //======================================================================================

    function emailFaqInputMessage() {
   
        var input = document.querySelector(".em-input-faq").value;
            var emailMessage = document.querySelector(".email-message-faq");
        var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const list = document.querySelector(".em-input-faq").classList;

    if (input.match(pattern)) {
        emailMessage.innerHTML= " ";
        list.remove("error");
    }   

    else if (input.length <= 5) {
        emailMessage.innerHTML="Email is required!";
        list.add("error");
    }
    
        else{
            emailMessage.innerHTML="Please enter a valid email address.";
            list.add("error");
            
        } 
      
    }
  
//======================================================================================
    const accordionItem = document.querySelectorAll(".accordion-item");
       
    accordionItem.forEach((el) =>
    
      el.addEventListener("click", () => {  
        if (el.classList.contains("faq-active")) {
          el.classList.remove("faq-active");
        } else {
          accordionItem.forEach((el) => el.classList.remove("faq-active"));
          el.classList.add("faq-active");
        }
      })
    );

    //======================================================================================