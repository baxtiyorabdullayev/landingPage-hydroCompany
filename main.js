"use strict";
let body = document.querySelector("body");

// ****************navbar
let navBar = document.querySelector(".nav-bar");
function scrolled() {
  if (window.pageYOffset > 70) {
    navBar.classList.add("nav-bar__scroll");
  } else {
    navBar.classList.remove("nav-bar__scroll");
  }
}
window.addEventListener("scroll", scrolled);

// **************Sign in button
let sighInButton = document.querySelector(".sign-in__button");
let modalBox = document.querySelector(".modal-box");
let bigBox = document.querySelector(".big-container");
let closeButton = document.querySelector(".fa-xmark");

function openModal() {
  modalBox.classList.toggle("modal-box__click");
  bigBox.classList.toggle("clicked");
}
sighInButton.addEventListener("click", openModal);

function closeModal() {
  modalBox.classList.remove("modal-box__click");
  bigBox.classList.remove("clicked");
}
closeButton.addEventListener("click", closeModal);

let accountButton = document.querySelector(".create-account");
let joinButton = document.querySelector(".sigh-in");
let accountSection = document.querySelector(".create-account__section");
let joinSection = document.querySelector(".sigh-in__section");

function accountOpen() {
  accountSection.style.display = "block";
  joinSection.style.display = "none";
  accountButton.classList.add("active-button");
  joinButton.classList.remove("active-button");
}
accountButton.addEventListener("click", accountOpen);

function joinOpen() {
  joinSection.style.display = "block";
  accountSection.style.display = "none";
  joinButton.classList.add("active-button");
  accountButton.classList.remove("active-button");
}
joinButton.addEventListener("click", joinOpen);

//*********************our blog section
let blogsBox = document.querySelector(".blogs-container");
let blogs = [
  {
    image: "./images/blog1.jpg",
    time: "December 22, 2017",
    title: "How To Find Out Beautiful Workspace.",
    subtitle: "Lorem ipsum dolor sit consectetur adipiscing morbi venenatis",
    button: "read article",
  },
  {
    image: "./images/blog2.jpg",
    time: "December 18, 2017",
    title: "Woman Sportwear.",
    subtitle: "Lorem ipsum dolor sit consectetur adipiscing morbi venenatis",
    button: "read more",
  },
  {
    image: "./images/blog3.jpg",
    time: " December 14, 2017",
    title: "New Creative Fashion.",
    subtitle: "Lorem ipsum dolor sit consectetur adipiscing morbi venenatis",
    button: "read article",
  },
  {
    image: "./images/blog4.jpg",
    time: "December 10, 2017",
    title: "Minimalist Design Trend In 2018.",
    subtitle: "Lorem ipsum dolor sit consectetur adipiscing morbi venenatis",
    button: "view detail",
  },
];

blogs.forEach((blog) => {
  let ourBlog = document.createElement("div");
  ourBlog.classList.add("our-blog");

  let blogImage = document.createElement("div");
  blogImage.classList.add("blog-image");

  let image = document.createElement("img");
  image.src = blog.image;

  let blogInfo = document.createElement("div");
  blogInfo.classList.add("blog-info");

  let blogTime = document.createElement("div");
  blogTime.classList.add("blog-time");

  let timeIcon = document.createElement("i");
  timeIcon.classList.add("fa", "fa-clock");

  let time = document.createElement("span");
  time.textContent = blog.time;

  let blogTitle = document.createElement("div");
  blogTitle.classList.add("blog-title");
  blogTitle.textContent = blog.title;

  let blogSubtitle = document.createElement("div");
  blogSubtitle.classList.add("blog-subtitle");
  blogSubtitle.textContent = blog.subtitle;

  let blogButton = document.createElement("button");
  blogButton.classList.add("read-more__button");
  blogButton.textContent = blog.button;

  ourBlog.appendChild(blogImage);
  blogImage.appendChild(image);
  ourBlog.appendChild(blogInfo);
  blogInfo.appendChild(blogTime);
  blogTime.appendChild(timeIcon);
  blogTime.appendChild(time);
  blogInfo.appendChild(blogTitle);
  blogInfo.appendChild(blogSubtitle);
  blogInfo.appendChild(blogButton);
  blogsBox.appendChild(ourBlog);
});

// **************our work section
let worksBox = document.querySelector(".works-container");
let works = [
  {
    name: "Clean & Minimal",
    description: "Product design",
    image: "./images/work1.jpg",
  },
  {
    name: "Studio Bag",
    description: "Baranding",
    image: "./images/work2.jpg",
  },
  {
    name: "Frame Design",
    description: "Photography",
    image: "./images/work3.jpg",
  },
  {
    name: "Paint Work",
    description: "Art, design",
    image: "./images/work4.jpg",
  },
];

works.forEach((item) => {
  let work = document.createElement("div");
  work.classList.add("work");

  let image = document.createElement("img");
  image.classList.add("work-image");
  image.src = item.image;

  let overlay = document.createElement("dir");
  overlay.classList.add("overlay");

  let workName = document.createElement("h3");
  workName.textContent = item.name;

  let workDescreption = document.createElement("h4");
  workDescreption.textContent = item.description;

  overlay.appendChild(workName);
  overlay.appendChild(workDescreption);
  work.appendChild(overlay);
  work.appendChild(image);
  worksBox.appendChild(work);
});

// ******************input from contact us
let customers = [];
let userName = document.querySelector(".name");
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let price = document.querySelector(".prices");
let message = document.querySelector(".textarea");
let sendButton = document.querySelector(".send-message__button");

function enterInfoToArray(e) {
  e.preventDefault();
  if (!userName.value || !email.value || !phone.value || !message.value) {
    alert("Please fill all inputs!!");
  } else {
    let customer = {
      name: userName.value,
      email: email.value,
      phone: phone.value,
      price: price.value,
      message: message.value,
    };
    userName.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
    customers.push(customer);
    console.log(customers);

    let messageOut = document.createElement("tr");
    let tableNumber = document.createElement("td");
    let tableName = document.createElement("td");
    let tableEmail = document.createElement("td");
    let tablePhone = document.createElement("td");
    let tableBugget = document.createElement("td");
    let tableMessage = document.createElement("td");
    customers.forEach((customer, index) => {
      tableNumber.textContent = index + 1;
      tableName.textContent = customer.name;
      tableEmail.textContent = customer.email;
      tablePhone.textContent = customer.phone;
      tableBugget.textContent = customer.price;
      tableMessage.textContent = customer.message;

      table.appendChild(messageOut);
      messageOut.appendChild(tableNumber);
      messageOut.appendChild(tableName);
      messageOut.appendChild(tableEmail);
      messageOut.appendChild(tablePhone);
      messageOut.appendChild(tableBugget);
      messageOut.appendChild(tableMessage);
    });
  }
}
sendButton.addEventListener("click", enterInfoToArray);

//************** */ messages button
let messageBox = document.querySelector(".messages-box");
let messageButton = document.querySelector(".fa-envelope-open");
let closeMessageModalButton = document.querySelector(".close-message__modal");
let table = document.querySelector(".table");

function openMessageModal() {
  messageBox.classList.toggle("messages-box__clicked");
  bigBox.classList.toggle("clicked");
}
messageButton.addEventListener("click", openMessageModal);

function closeMessageModal() {
  messageBox.classList.remove("messages-box__clicked");
  bigBox.classList.remove("clicked");
}
closeMessageModalButton.addEventListener("click", closeMessageModal);

// function showMessages() {
//   let messageOut = document.createElement("tr");
//   let tableNumber = document.createElement("td");
//   let tableName = document.createElement("td");
//   let tableEmail = document.createElement("td");
//   let tablePhone = document.createElement("td");
//   let tableBugget = document.createElement("td");
//   let tableMessage = document.createElement("td");
//   customers.forEach((customer, index) => {
//     tableNumber.textContent = index + 1;
//     tableName.textContent = customer.name;
//     tableEmail.textContent = customer.email;
//     tablePhone.textContent = customer.phone;
//     tableBugget.textContent = customer.price;
//     tableMessage.textContent = customer.message;

//     table.appendChild(messageOut);
//     messageOut.appendChild(tableNumber);
//     messageOut.appendChild(tableName);
//     messageOut.appendChild(tableEmail);
//     messageOut.appendChild(tablePhone);
//     messageOut.appendChild(tableBugget);
//     messageOut.appendChild(tableMessage);
//   });
// }
// messageButton.addEventListener("click", showMessages);
