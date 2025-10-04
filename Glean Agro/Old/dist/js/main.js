const responsive = {
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
}

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /**Click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });

    //Owl-carousel
    $('.owl-carousel').owlCarousel({
        rtl:false,
        loop:true,
        margin:10,
        dots: false,
        // video: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav:true,
        responsive: responsive
    });

    // Owl-owlCarousel video
    $('#owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true
        // videoHeight:10,
        // videoWidth: 200,
        // center:true,
        // responsive:{
        //     480:{
        //         items:2
        //     },
        //     600:{
        //         items:4
        //     }
        // }
    });
    
    
    // Collapse element
    const coll = $(".collapsible");
    // let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active-collapse");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }

    //Scroll to top
    $('.move-up span').click(()=>{
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    });
    
    //AOS instance
    AOS.init();
});

const openTab = (evt, val) => {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activeMenu", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(val).style.display = "block";
    evt.currentTarget.className += " activeMenu";
}
// Toggle the Bot form display
const toggleBotDisplay = () => {
    const bot_checkbox = document.querySelector("#bot_checkbox");
    
    if (bot_checkbox.checked === true){
        // Display the Bot form
        const q1 = document.querySelector(".q1").value = Math.floor(Math.random() * 9 + 1); // Generate 1-9
        const q2 = document.querySelector(".q2").value = Math.floor(Math.random() * 9 + 1); // Generate 1-9
        const total = document.querySelector(".total");
        
        document.querySelector("#bot-eval").classList.remove("d-none");
        total.value = q1 + q2;        
    }else{
        // Hide the Bot form
        document.querySelector("#bot-eval").classList.add("d-none");
        document.querySelector("#btn_send").setAttribute("disabled", "");
    }
}

const isEqual = () => {
    const total = document.querySelector(".total").value;
    const ans = document.querySelector(".ans").value;
    const success = document.querySelector("#success");
    const fail = document.querySelector("#fail");

    if (total === ans){
        fail.classList.add("d-none"); 
        success.classList.remove("d-none");
        document.querySelector("#btn_send").removeAttribute("disabled");    
    }else{
       success.classList.add("d-none"); 
       fail.classList.remove("d-none");
       document.querySelector("#btn_send").setAttribute("disabled", "");
   }
}


const myFunction = imgs => {
    // Get the expanded image
    const expandImg = document.getElementById("expandedImg");
    // Get the image text
    const imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}