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
const data = [
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
    description: 'I have built a lot of web backends using Python / PHP / NodeJS and Go over the years, before I fell in love with Rustlang. After a couple years contributing to open source Rust projects, I joined Zenly to help the team write and maintain their Rust GraphQL / gRPC stack. I was very excited to join the ApolloGraphQL team a couple of months ago, and help build the Apollo Router: a GraphQL Federation runtime in Rust.',
  },
  {
    image: './assets/images/speakers/speaker3.png',
    name: 'Marcin Gebala',
    location: 'Saleor Commerce, Poland',
    description: 'I m a software engineer who specializes in building web apps using Python, GraphQL and React. Currently, I work as a lead developer at Saleor. I speak at tech conferences about Python and GraphQL. I m a runner, musician and traveler in my free time. I m based in Wrocław, Poland',
  },
  {
    image: './assets/images/speakers/speaker4.png',
    name: 'Josh Goldberg',
    location: 'Codecademy, USA',
    description: 'Hi, I m Josh! I m a frontend developer from New York with a passion for open source, static analysis, and the web. I work at Codecademy as a frontend engineer on our core Web Platform team. I m passionate about open source and bringing accessible education to the masses in a sustainable way.',
  },
  {
    image: './assets/images/speakers/speaker5.png',
    name: 'Josh Goldberg',
    location: 'Codecademy, USA',
    description: 'Hi, I m Josh! I m a frontend developer from New York with a passion for open source, static analysis, and the web. I work at Codecademy as a frontend engineer on our core Web Platform team. I m passionate about open source and bringing accessible education to the masses in a sustainable way.',
  },
  {
    image: './assets/images/speakers/speaker6.png',
    name: 'Josh Goldberg',
    location: 'Codecademy, USA',
    description: 'Hi, I m Josh! I m a frontend developer from New York with a passion for open source, static analysis, and the web. I work at Codecademy as a frontend engineer on our core Web Platform team. I m passionate about open source and bringing accessible education to the masses in a sustainable way.',
  },
];

const addSpeakers = () => {
  data.map((item) => {
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