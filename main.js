let tasks = [
    {
        toDo: "Do the Dishes"
    },
    {
        toDo: "Buy gift for party."
    }
];

// Display all products
function showTasks() {
    let html = '';
    // Loop over products
    for(let task of tasks){
        html +=`
            <div class="task">
                <h2>${task.toDo}</h2>
                <button class="remove" data-task-toDo="${task.toDo}">Remove</button>
                <hr>
            </div>
        `;    
    }
    // Add html to the document, products div
    document.querySelector('.tasks').innerHTML = html;
}

// showProducts();

//Handle all click events
function handleEvents(){
    // Add event listener to entire body & listen for click
    document.querySelector('body').addEventListener('click', function(event) {
        let taskClicked = event.target.closest('.task');
        // // If you click somewhere unrelated, we just return
        if(!taskClicked) { return; }

        // // Get the info-div from the clicked product
        // let infoProduct = productClicked.querySelector('.info');
        // // Ternary operator, if block - go none, if none - go block
        // infoProduct.style.display = infoProduct.style.display === 'block' ? 'none' : 'block'; 

        // If the closest element is the remove button
        let removeButton = event.target.closest('.remove');
        if(removeButton) {
            // Get the attribute data-product-name
            let taskName = removeButton.getAttribute('data-task-toDo');
            
            //Remove product by name from array, using filter

            tasks = tasks.filter((task) => task.toDo !== taskName);
            taskClicked.remove();
        }
});
     // Event listener for the add product form that listens for submit, and not click
        let addTaskForm = document.querySelector('#add-task-form');
        addTaskForm.addEventListener('submit', function(event) {
        //     // Don't let the site reload when submit is clicked
            event.preventDefault();

        //     // Get the value from the form
            let toDo = document.querySelector('#toDo').value;
        //     let description = document.querySelector('#description').value;
        //     let price = document.querySelector('#price').value;

        //     // Error handling, check that all fields are filled out
        if(toDo) {
        //         // new product
                let newToDo = {
                    toDo: toDo,
                }

                // Add the product to the products array
                 tasks.push(newToDo);

        //         // Reset the form and show new div
                 let tasksDiv = document.querySelector('.tasks');
                 tasksDiv.innerHTML = '';
        //         // render product again
                 showTasks();
        //         // reset form
                 addTaskForm.reset();

             } else{
               alert('Please fill in all fields!');
             }

         });
}

showTasks();
handleEvents();