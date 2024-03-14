document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    console.log("Task submitted!")
    const taskSubmitted = document.querySelector("#new-task-description").value
    console.log(taskSubmitted);
    //const list = document.createElement("ul");
    const arr = [taskSubmitted];
    for (i=0; i < arr.length; i++){
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(arr[i]));
        document.querySelector("#tasks").appendChild(item);

        const buttonElem = item.appendChild(document.createElement("button"));
        buttonElem.innerHTML = "x";
        buttonElem.onclick = function() {
        item.remove();
    }}
  

  })
    
});
