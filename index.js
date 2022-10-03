var form = document.inputForm
var list = document.getElementById("list")

form.addEventListener("submit", function(e){
    e.preventDefault()
  var listItem = form.item.value

  form.item.value = ""
  
  //create list and append it to list
    var newItem = document.createElement("li")
    var p = document.createElement("p")
    // newItem.classList.add("remove")

    p.textContent = listItem
    newItem.append(p)
    list.append(newItem)
  
    //create buttons

    //delete
    var removeButton = document.createElement("button")
    removeButton.textContent = "X"
    removeButton.classList.add("remove");
  
    //edit
    var editButton = document.createElement("button")
    editButton.classList.add("edit")
    var editInput = document.createElement("input")
    var inputClass = editInput.classList.add("inputCls")
    var inputButton = document.createElement("button")
    var inputBtnCls = inputButton.classList.add("inputBtn")
    var inputValue = editInput.value
    editButton.textContent = "Edit"
    inputButton.textContent = "Enter"
    
    //create div for list items
    //prepend div to created list
    var newDiv = document.createElement("div")
    newItem.prepend(newDiv)
    
  //append edit and delete button to created list
  newItem.append(editButton, removeButton)
    
        newItem.style.margin = "auto"
        newItem.style.textAlign = "center"
        newItem.style.fontFamily = "tahoma"
        removeButton.style.display = "flex"
        removeButton.style.margin = "auto"
        editButton.style.display = "flex"
        editButton.style.margin = "auto"
  
  //button functionality
    removeButton.addEventListener("click", deleteItem)
    function deleteItem(event){
        if(event.target.classList.contains("remove")){
            event.target.closest("li").remove()
        }
    }

    //edit button
    editButton.addEventListener("click", editItem)
    function editItem(event){
        if(event.target.classList.contains("edit")){
            event.target.closest("li")
            newItem.append(editInput, inputButton)
            console.log("bro")
        }
    }

    //edit input
    inputButton.addEventListener("click", () => {
        p.textContent = editInput.value
        editInput.append()
        inputButton.remove()
        editInput.remove()
    })

})
