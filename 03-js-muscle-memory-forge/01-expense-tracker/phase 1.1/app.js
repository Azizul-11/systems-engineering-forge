const titleInput=document.createElement("input");
titleInput.placeholder="'Description (e.g. Salary, Coffee)'";
const amountInput=document.createElement("input");
amountInput.placeholder="'Amount (+income, -expense)'";
amountInput.type="number";
const addBtn=document.createElement("button");
addBtn.innerText="Add Transaction";

const ull=document.createElement("ul");

document.body.appendChild(titleInput)
document.body.appendChild(amountInput)
document.body.appendChild(addBtn)
document.body.appendChild(ull)


let transactions=[];

function renderTransaction(item){
    const LII=document.createElement('li');
    const delBtn=document.createElement('button');
    delBtn.innerText="X";

    LII.dataset.id=item.id;
    LII.innerText=`${item.title} : ${item.amount}`;
    LII.appendChild(delBtn);
    ull.appendChild(LII);
}


addBtn.addEventListener("click", function(){
    const title=titleInput.value.trim();
    const amount=Number(amountInput.value);

    if(title==="" || amount===0 || Number.isNaN(amount)) return;

    const newTransaction={id:Date.now(), title:title, amount:amount};

    transactions.push(newTransaction);

    renderTransaction(newTransaction);

    titleInput.value="";
    amountInput.value="";
})

ull.addEventListener("click", function(event){
    if(event.target.tagName==="BUTTON"){
     const liElement = event.target.parentElement;

     const clickedId=liElement.dataset.id;

     transactions=transactions.filter(item=>item.id != clickedId);

     liElement.remove();

    }
})