const searchInp = document.createElement("input");
searchInp.placeholder = "Search anything...";
document.body.appendChild(searchInp)
const inp = document.createElement("input");
const btn = document.createElement("button");
btn.innerText = "Add Task";
const ull = document.createElement('ul');


document.body.appendChild(inp);
document.body.appendChild(btn);
document.body.appendChild(ull);

class Task {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
    }
}

class Dashboard {
    constructor() {
        this.quoteElement = document.createElement('p');
        this.quoteElement.style.fontStyle = "italic";
        document.body.appendChild(this.quoteElement)

        const saveTask = localStorage.getItem("strTask");
        this.tasks = JSON.parse(saveTask) || [];

        this.tasks.forEach((task) => {
            this.renderTask(task);
        });

        ull.addEventListener('click', (event) => {
            if (event.target.tagName === "BUTTON") {
                const liiElement = event.target.parentElement;
                const clickedId = liiElement.dataset.id;

                this.deleteTask(clickedId);

                liiElement.remove();
            }
        })
        this.fetchIntelligence();
    }

    renderTask(task) {
        const TaskLII = document.createElement('li');
        const delBtn = document.createElement('button');
        delBtn.innerText = "X";

        if (task.text == "") {
            return;
        }
        else {
            TaskLII.innerText = task.text;
            TaskLII.dataset.id = task.id;
            TaskLII.appendChild(delBtn);
            ull.appendChild(TaskLII);
        }
    }

    addTask(text) {
        const newTask = new Task(text);
        this.tasks.push(newTask);
        localStorage.setItem("strTask", JSON.stringify(this.tasks))
        this.renderTask(newTask)
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id != id)
        localStorage.setItem("strTask", JSON.stringify(this.tasks))
    }

    async fetchIntelligence() {
        try {
            this.quoteElement.innerText = "Fething Quote....."
            const response = await fetch("https://dummyjson.com/quotes/random")

            const data = await response.json();

            this.quoteElement.innerText = `${data.quote} - ${data.author}`
        } catch (error) {
            console.log(error);
            this.quoteElement.innerText = "Error fetching quote."
        }

    }

    filterTask(searchTerms) {
        ull.innerHTML = "";
        const filteredTask = this.tasks.filter(task => {
            return task.text.toLowerCase().includes(searchTerms.toLowerCase());
        })

        filteredTask.forEach((task) => {
            this.renderTask(task);
        });
    }
}


const myFirstTask = new Task("Learn OOP");
console.log(myFirstTask);


function debounce(fn, delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            fn(...args)
        }, delay)
    }
}

const app = new Dashboard();


btn.addEventListener("click", function () {
    const text = inp.value;
    if (text !== "") {
        app.addTask(text);
        inp.value = "";
    }
})


const debounceSearch=debounce(function(event){
    app.filterTask(event.target.value)
}, 300)
searchInp.addEventListener("input", debounceSearch)
