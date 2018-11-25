
let count = 0;
let paused = false;
let likeTracker = {};

const counter = document.querySelector("#counter");
const likes = document.body.querySelector(".likes")
const comments = document.body.querySelector(".comments");
const form = document.getElementById("comment-form")
const input = document.getElementById("comment-input")
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const heart = document.getElementById("<3");
const pause = document.getElementById("pause");


function addButtonListers(){
  plus.addEventListener("click", incrementCount);
  minus.addEventListener("click", decrementCount);
  heart.addEventListener("click", handleLikes);
  pause.addEventListener("click", pauseAll);
}

//increments time every 1 second
function secCounter(){
  setInterval(incrementCount, 1000);
}

function incrementCount(){
  if (!paused){
    count++;
    counter.innerText = count;
  }
}

function decrementCount(){
  count--;
  counter.innerText = count;
}

function handleLikes() {
  if(!likeTracker[count]) {
    likeTracker[count] = 1
    let li = document.createElement("li");
    li.innerText = `You have liked ${count} one time`;
    likes.appendChild(li);
    li.id = count
  } else {
    likeTracker[count] += 1;
    let likedNum = document.getElementById(count);
    likedNum.innerText = `You have liked ${count} ${likeTracker[count]} times!`
  }
}

function getFormData(){
  return input.value;
}

function addSubmitListener(){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    commentAdder();
  });
}

function commentAdder(){
  let comment = document.createElement("div");
  comment.innerText = getFormData();
  comments.appendChild(comment)
}

//pause everything
function pauseAll(){
  paused = !paused
  if (paused){
    pause.innerText = "resume"
  } else {
    pause.innerText = "pause"
  }
}

//initialize functions
function init(){
  secCounter();
  addButtonListers();
  addSubmitListener();
}

document.addEventListener("DOMContentLoaded", init);
