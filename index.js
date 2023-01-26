const dropBtn = document.getElementById("dropBtn");
const dropdown = document.getElementById("dropdown");
const dropdownContent = document.getElementById("dropdown-content");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

dropBtn.addEventListener("click", () => {
  dropdown.classList.toggle('active')
  
  let content = dropdownContent
  if(content.style.maxHeight){
    content.style.maxHeight = null
  }else{
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

