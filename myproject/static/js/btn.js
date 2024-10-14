    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 700;
    });

    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 800;
    });

    let scrollConta = document.querySelector(".gallery_2");
    let backBtn_2 = document.getElementById("backBtn_2");
    let nextBtn_2 = document.getElementById("nextBtn_2");

    nextBtn_2.addEventListener("click", ()=>{
        scrollConta.style.scrollBehavior = "smooth";
        scrollConta.scrollLeft += 800;
    });

    backBtn_2.addEventListener("click", ()=>{
        scrollConta.style.scrollBehavior = "smooth";
        scrollConta.scrollLeft -= 800;
    });


    let scrollCont = document.querySelector(".gallery_3");
    let backBtn_3 = document.getElementById("backBtn_3");
    let nextBtn_3 = document.getElementById("nextBtn_3");

    nextBtn_3.addEventListener("click", ()=>{
        scrollCont.style.scrollBehavior = "smooth";
        scrollCont.scrollLeft += 800;
    });

    backBtn_3.addEventListener("click", ()=>{
        scrollCont.style.scrollBehavior = "smooth";
        scrollCont.scrollLeft -= 800;
    });


    let scrollCon = document.querySelector(".gallery_4");
    let backBtn_4 = document.getElementById("backBtn_4");
    let nextBtn_4 = document.getElementById("nextBtn_4");

    nextBtn_4.addEventListener("click", ()=>{
        scrollCon.style.scrollBehavior = "smooth";
        scrollCon.scrollLeft += 800;
    });

    backBtn_4.addEventListener("click", ()=>{
        scrollCon.style.scrollBehavior = "smooth";
        scrollCon.scrollLeft -= 800;
    });


    let scrollCont5 = document.querySelector(".gallery_5");
    let backBtn_5 = document.getElementById("backBtn_5");
    let nextBtn_5 = document.getElementById("nextBtn_5");

    nextBtn_5.addEventListener("click", ()=>{
        scrollCont5.style.scrollBehavior = "smooth";
        scrollCont5.scrollLeft += 800;
    });

    backBtn_5.addEventListener("click", ()=>{
        scrollCont5.style.scrollBehavior = "smooth";
        scrollCont5.scrollLeft -= 800;
    });


    let scrollCont6 = document.querySelector(".gallery_6");
    let backBtn_6 = document.getElementById("backBtn_6");
    let nextBtn_6 = document.getElementById("nextBtn_6");

    nextBtn_6.addEventListener("click", ()=>{
        scrollCont6.style.scrollBehavior = "smooth";
        scrollCont6.scrollLeft += 800;
    });

    backBtn_6.addEventListener("click", ()=>{
        scrollCont6.style.scrollBehavior = "smooth";
        scrollCont6.scrollLeft -= 800;
    });


    let scrollCont7 = document.querySelector(".gallery_7");
    let backBtn_7 = document.getElementById("backBtn_7");
    let nextBtn_7 = document.getElementById("nextBtn_7");

    nextBtn_7.addEventListener("click", ()=>{
        scrollCont7.style.scrollBehavior = "smooth";
        scrollCont7.scrollLeft += 800;
    });

    backBtn_7.addEventListener("click", ()=>{
        scrollCont7.style.scrollBehavior = "smooth";
        scrollCont7.scrollLeft -= 800;
    });


    let scrollCont8 = document.querySelector(".gallery_8");
    let backBtn_8 = document.getElementById("backBtn_8");
    let nextBtn_8 = document.getElementById("nextBtn_8");

    nextBtn_8.addEventListener("click", ()=>{
        scrollCont8.style.scrollBehavior = "smooth";
        scrollCont8.scrollLeft += 800;
    });

    backBtn_8.addEventListener("click", ()=>{
        scrollCont8.style.scrollBehavior = "smooth";
        scrollCont8.scrollLeft -= 800;
    });


    let scrollCont9 = document.querySelector(".gallery_9");
    let backBtn_9 = document.getElementById("backBtn_9");
    let nextBtn_9 = document.getElementById("nextBtn_9");

    nextBtn_9.addEventListener("click", ()=>{
        scrollCont9.style.scrollBehavior = "smooth";
        scrollCont9.scrollLeft += 800;
    });

    backBtn_9.addEventListener("click", ()=>{
        scrollCont9.style.scrollBehavior = "smooth";
        scrollCont9.scrollLeft -= 800;
    });


    let scrollCont10 = document.querySelector(".gallery_10");
    let backBtn_10 = document.getElementById("backBtn_10");
    let nextBtn_10 = document.getElementById("nextBtn_10");

    nextBtn_10.addEventListener("click", ()=>{
        scrollCont10.style.scrollBehavior = "smooth";
        scrollCont10.scrollLeft += 800;
    });

    backBtn_10.addEventListener("click", ()=>{
        scrollCont10.style.scrollBehavior = "smooth";
        scrollCont10.scrollLeft -= 800;
    });


    let scrollCont11 = document.querySelector(".gallery_11");
    let backBtn_11 = document.getElementById("backBtn_11");
    let nextBtn_11 = document.getElementById("nextBtn_11");

    nextBtn_11.addEventListener("click", ()=>{
        scrollCont11.style.scrollBehavior = "smooth";
        scrollCont11.scrollLeft += 800;
    });

    backBtn_11.addEventListener("click", ()=>{
        scrollCont11.style.scrollBehavior = "smooth";
        scrollCont11.scrollLeft -= 800;
    });


    let scrollCont12 = document.querySelector(".gallery_12");
    let backBtn_12 = document.getElementById("backBtn_12");
    let nextBtn_12 = document.getElementById("nextBtn_12");

    nextBtn_12.addEventListener("click", ()=>{
        scrollCont12.style.scrollBehavior = "smooth";
        scrollCont12.scrollLeft += 800;
    });

    backBtn_12.addEventListener("click", ()=>{
        scrollCont12.style.scrollBehavior = "smooth";
        scrollCont12.scrollLeft -= 800;
    });


    let scrollCont13 = document.querySelector(".gallery_13");
    let backBtn_13 = document.getElementById("backBtn_13");
    let nextBtn_13 = document.getElementById("nextBtn_13");

    nextBtn_13.addEventListener("click", ()=>{
        scrollCont13.style.scrollBehavior = "smooth";
        scrollCont13.scrollLeft += 800;
    });

    backBtn_13.addEventListener("click", ()=>{
        scrollCont13.style.scrollBehavior = "smooth";
        scrollCont13.scrollLeft -= 800;
    });


    function toggle(){
        var trailer = document.querySelector(".trailer");
        var video = document.querySelector("video");
        trailer.classList.toggle("active");
        video.pause();
        video.currentTime = 0;
      }
