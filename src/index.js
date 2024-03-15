document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    console.log("Task submitted!")
    const taskSubmitted = document.querySelector("#new-task-description").value;
    console.log(taskSubmitted);

    // Sakib's solution
    // const item = document.createElement("li");
    // const itemCont = document.createElement("span");
    // item.appendChild(itemCont);
    // itemCont.textContent = taskSubmitted;
    // const priority = document.querySelector("form").priority.value;
    // if (priority === "high"){
    //   itemCont.style.color = "red";}
    // if (priority === "medium"){
    //   itemCont.style.color = "yellow";}
    // if (priority === "low"){
    //   itemCont.style.color = "green";} 
    // document.querySelector("#tasks").append(item);
    // itemCont.contentEditable = "true";

    // const buttonElem = item.appendChild(document.createElement("button"));
    // buttonElem.innerHTML = "x";
    // buttonElem.onclick = function() {
    // item.remove();}

    // const list = document.createElement("ul");
    const arr = [taskSubmitted];
    for (i=0; i < arr.length; i++){
        const item = document.createElement("li");
        const span = document.createElement('span');
        item.appendChild(span);
        //item.appendChild(document.createTextNode((arr[i])));
        span.textContent = arr[i];
        span.contentEditable = "true"
        document.querySelector("#tasks").appendChild(item);
    
        const priority = document.querySelector("select").value;
        if (priority === "high"){
          item.style.color = "red";}
        if (priority === "medium"){
          item.style.color = "blue";}
        if (priority === "low"){
          item.style.color = "green";} 

        const buttonElem = item.appendChild(document.createElement("button"));
        buttonElem.innerHTML = "x";
        buttonElem.onclick = function() {
        item.remove();
        }

      }
    })
    
    
    
    });

