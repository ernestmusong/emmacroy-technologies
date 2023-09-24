// data for all cards
const reviews = [
  {
    id: 1,
    name: 'Mbah denzel',
    profession: 'student',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/denzel.jpg',
    email: "example@gmail.com"
  },
  {
    id: 2,
    name: 'Derick dice sk',
    profession: 'student',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/derick.jpg',
    email: "example@gmail.com"
  },
  {
    id: 3,
    name: 'katche elvis',
    profession: 'client',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/elvis.jpg',
    email: "example@gmail.com"
  },
  {
    id: 4,
    name: 'louis katche',
    profession: 'client',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/louis.jpg',
    email: "example@gmail.com"
  },
  {
    id: 5,
    name: 'katche festus',
    profession: 'Student',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/festus.jpg',
    email: "example@gmail.com"
  },
  {
    id: 6,
    name: 'kum paul',
    profession: 'client',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: 'images/eleven.jpeg',
    email: "example@gmail.com"
  },
];

// SIDE-BAR
const sideBar = document.querySelector('.sidebar');
const openBtn = document.querySelector('#open');

openBtn.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});
sideBar.addEventListener('click', () => {
  sideBar.classList.toggle('sidebar');
});
 
  //slect items
  const personImg = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  const personEmail = document.querySelector('#email')
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  console.log(nextBtn)
 

  //Testimonials

  let currentItem = 0;
  function showPerson(arr) {
      const {img, name, profession, text, email } = arr[currentItem];
      personImg.src = img;
      author.textContent = name;
      job.textContent = profession;
      info.textContent = text;
      personEmail.textContent = email;
  }

 nextPerson = () => {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(reviews)
 }

 prevPerson = () => {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(reviews)
 }

// BACK TO TOP
const navbar = document.getElementById('nav');
const header = document.getElementById('header');
const topLink = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > 300) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

//MODAL

const reviewBtn = document.getElementById('review-btn');
const modal = document.querySelector('.popup-overlay');
const closeModal = document.querySelector('#close-modal');
const toggleModal = () => {
  modal.classList.toggle('hide');
}


document.addEventListener('DOMContentLoaded', () => {
  showPerson(reviews);
});
nextBtn.addEventListener("click", nextPerson);
prevBtn.addEventListener("click", prevPerson);
reviewBtn.addEventListener("click", toggleModal)
closeModal.addEventListener('click', toggleModal)
