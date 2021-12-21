const closebt = document.querySelector('.close');
const hamb = document.querySelector('.hamb');
const menu = document.querySelector('.mobile_menu');
const speaksection= document.querySelector('.speakers');

closebt.addEventListener('click', ()=>{
menu.style.display='none';
});
hamb.addEventListener('click', ()=>{
    
    menu.style.display='flex';
    });

    const speakprogram ='';
    for(i=0;i<data.length;i++){

 speakprogram += `<div class="speaker">
                                      <div class="speaker_card">
                                           <img class="speaker_img" src="${data[i].image}" alt="speaker_image">
                                      </div>
                                    <div class="speaker_info">
                                        <h3 class="speaker_name">${data[i].name}</h3>
                                        <h3 class="speaker_location">${data[i].location}</h3>
                                        <p class="speaker-details">${data[i].description}</p>
                                     </div>
                </div>`;


    }
    
    speaksection.innerHTML=speakprogram;