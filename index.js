var form = document.inputForm
var list = document.getElementById("list")

form.addEventListener("submit", function(e){
    e.preventDefault()
  var listItem = form.item.value

  form.item.value = ""
  
  //create list and append it to list
    var newItem = document.createElement("li")
    // newItem.classList.add("remove")
    newItem.textContent = listItem
    list.append(newItem)
  
    //create buttons
  
    //delete
    var removeButton = document.createElement("button")
    removeButton.textContent = "X"
    removeButton.classList.add("remove");
  
    //edit
    var markButton = document.createElement("button")
    markButton.classList.add("mark")
    markButton.textContent = "Mark"
    
    //create div for list items
    //prepend div to created list
    var newDiv = document.createElement("div")
    newItem.prepend(newDiv)
    
  //append edit and delete button to created list
  newItem.append(markButton, removeButton)
    
        newItem.style.margin = "auto"
        newItem.style.fontFamily = "tahoma"
        removeButton.style.display = "flex"
        removeButton.style.margin = "auto"
        markButton.style.display = "flex"
        markButton.style.margin = "auto"
  
  //button functionality
    removeButton.addEventListener("click", deleteItem)
    function deleteItem(event){
        if(event.target.classList.contains("remove")){
            event.target.closest("li").remove();
        }
    }

    //mark button
    markButton.addEventListener("click", markItem)
    function markItem(event){
        if(event.target.classList.contains("mark")){
            event.target.closest("li")
            newItem.style.textDecoration = "line-through"
            newItem.style.textDecorationColor = "crimson"
            newItem.style.textDecorationThickness = "2px"
        }
    }


})

document
.getElementById("enterButton")
.addEventListener("mouseover", () => {
    enterButton.style.color = "green"
})

document
.getElementById("enterButton")
.addEventListener("mouseleave", () => {
    enterButton.style.color = "black"
})

document
.getElementById("enterButton")
.addEventListener("mousedown", () => {
    enterButton.style.color = "olive"
})

document
.getElementById("enterButton")
.addEventListener("mouseup", () => {
    enterButton.style.color = "green"
})
