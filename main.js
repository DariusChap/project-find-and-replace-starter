const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")



const rowElements = document.querySelectorAll(".row")




function getCellElements(currentRowElement) {
    
    // const rowElements = document(".row")
    
    // while (rowElements.textContent.indexOf(find) += 0) { rowElements.textContent = rowElements.textContent.replace(find, replace); }
    
    return currentRowElement.querySelectorAll(".cell")
}


let cells = []

replaceAllButton.addEventListener("click", function() {
    let find = document.querySelector('.find-input').value
    let replace = document.querySelector('.replace-input').value

    for (let rowindex = 0; rowindex < rowElements.length; rowindex++) {
        cells = getCellElements(rowElements[rowindex])

       for (let cellindex = 0; cellindex < cells.length; cellindex++) {
           if (cells[cellindex].innerText.includes(find)) {
            let name = cells[cellindex].innerHTML
            let newName = name.replace(find, replace)
            cells[cellindex].innerHTML = newName
           }
    
            
       }
    }
    

    console.log('I was here')
})







