document.addEventListener("DOMContentLoaded", function () {
    loadExampleItems();
    initAccordionLogic();
    initSlick();
});

function initSlick() {
    $('.slider-content-items').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        slidesToShow: 5,
        arrows: false,
        speed: 300,
    });

    $('.what-client-to-say-courusel').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='images/left-arrow.svg'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='images/right-arrow.svg'>",
    });

}

function loadExampleItems() {
    const plusButton = createImgTag('images/Plus.png', 'projects__example-item--add-btn');
    const projectsExampleDiv = document.querySelector(".projects__example");
    const items = ['Example1', 'Example2', 'Example3'];



    items.forEach((item, index) => {
        const exampleItem = document.createElement("div");
        exampleItem.classList.add("projects__example-item");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("projects__example-item--title");
        titleDiv.textContent = item;

        const img = createImgTag(`images/example${index + 1}.png`, 'projects__example-item--element');

        exampleItem.appendChild(titleDiv);
        exampleItem.appendChild(img);

        projectsExampleDiv.appendChild(exampleItem);
    });

    projectsExampleDiv.appendChild(plusButton);
}


function createImgTag(src, className) {
    const img = document.createElement('img');
    img.src = src
    if (className) {
        img.classList.add(className);
    }
    return img;
}

function initAccordionLogic() {
    initAccordionsTemplate();

    const acc = document.getElementsByClassName('about-me-info__accordion-menu--accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {

            this.classList.toggle("active"); 

            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}
function initAccordionsTemplate() {
    const accordionItems = [
    ];
  
  
    var wrapper = document.querySelector('.about-me-info__accordion-menu--wrapper');
  
    accordionItems.forEach(function (item, index) {
        const button = document.createElement('button');
        button.classList.add('about-me-info__accordion-menu--accordion');
        button.innerHTML = `
            <span class="about-me-info__accordion-menu--accordion-title">
                <span>${index + 1}</span> ${item.title}
            </span>
            <img src="images/toggle-open.svg" alt="toggle-open" class="about-me-info__accordion-menu--accordion-toggle-open">
            <img src="images/toggle-close.svg" alt="toggle-close" class="about-me-info__accordion-menu--accordion-toggle-close">
        `;
  
      const panel = document.createElement('div'); 
        panel.classList.add('about-me-info__accordion-menu--accordion-panel');
        panel.innerHTML = `<p>${item.content}</p>`;
  
        wrapper.appendChild(button);
        wrapper.appendChild(panel);
    });
}
