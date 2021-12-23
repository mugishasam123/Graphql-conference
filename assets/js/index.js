const closebt = document.querySelector('.close');
const hamb = document.querySelector('.hamb');
const menu = document.querySelector('.mobile_menu');
const speaksection = document.querySelector('.speakers');
closebt.addEventListener('click', () => {
  menu.style.display = 'none';
});
hamb.addEventListener('click', () => {
  menu.style.display = 'flex';
});
const speakersdata = [
  {
    image: './assets/images/speakers/speaker1.png',
    name: 'Jonny Green',
    location: 'Unity Technologies, UK',
    description: 'I’m a Senior Software Engineer at Unity Technologies and Open Source developer working in GraphQL land with Node.js and TypeScript.',
  },
  {
    image: './assets/images/speakers/speaker2.png',
    name: 'Jeremy Lempereur',
    location: 'Apollo, France',
    description: 'I’m a Senior Software Engineer at Unity Technologies and Open Source developer working in GraphQL land with Node.js and TypeScript.',
  },
  {
    image: './assets/images/speakers/speaker3.png',
    name: 'Marcin Gebala',
    location: 'Saleor Commerce, Poland',
    description: 'I’m a Senior Software Engineer at Unity Technologies and Open Source developer working in GraphQL land with Node.js and TypeScript.',
  },
  {
    image: './assets/images/speakers/speaker4.png',
    name: 'Josh Goldberg',
    location: 'Codecademy, USA',
    description: 'I’m a Senior Software Engineer at Unity Technologies and Open Source developer working in GraphQL land with Node.js and TypeScript.',
  },
  {
    image: './assets/images/speakers/speaker5.png',
    name: 'Josh Goldberg',
    location: 'Codecademy, USA',
    description: 'I’m a Senior Software Engineer at Unity Technologies and Open Source developer working in GraphQL land with Node.js and TypeScript.',
  },
  {
    image: './assets/images/speakers/speaker6.png',
    name: 'Josh Goldberg',
    location: 'Codecademy, USA',
    description: 'I’m a Senior Software Engineer at Unity Technologies and Open Source developer working in GraphQL land with Node.js and TypeScript.',
  },
];

const addSpeakers = () => {
  speakersdata.map((item) => {
    const speakerCard = `<div class="speaker">
          <div class="speaker_card">
               <img class="speaker_img" src="${item.image}" alt="speaker_image">
          </div>
        <div class="speaker_info">
            <h3 class="speaker_name">${item.name}</h3>
            <h3 class="speaker_location">${item.location}</h3>
            <p class="speaker-details">${item.description}</p>
         </div>
</div>`;
    return speaksection.insertAdjacentHTML('beforeend', speakerCard);
  });
};
window.onload = addSpeakers;