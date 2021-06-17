

const modal = document.querySelector('.modal-body');


// let targetSection = document.querySelector('#infoModalTitle');

const modalTitle = document.querySelector('#infoModalTitle');


modal.addEventListener('scroll', function (event) {


    if(historyTitle != null && modal.scrollTop > historyTitle.offsetTop + 20){
        modalTitle.innerText = "Previous Hits";
    }else if(historyTitle != null && modal.scrollTop < document.getElementById('current-hit').offsetHeight) {
        modalTitle.innerText = "Current Hit";
    }





    // if (sections.length > 0) {
    //     //sections is defined and updated in the generator when 
    //     //button is clicked and a new hit list is generated
    //     sections.forEach(function (section) {

    //         if (modal.scrollTop > section.offsetTop + 40 && modal.scrollTop < section.offsetTop + section.offsetHeight) {
    //             targetSection = section;
    //         } else targetSection = modalTitle;
    //     })
    //     if (modal.scrollTop < document.querySelector('.current-hit-container').offsetHeight && modal.scrollTop < sections[0].offsetTop) {
    //         modalTitle.textContent = mainTitle;
    //     }
    //     else if (modal.scrollTop > targetSection.offsetTop + 40) {
    //         modalTitle.textContent = targetSection.querySelector('h6').textContent;
    //     }
    // }

});
