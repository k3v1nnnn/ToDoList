var amount=0; //im not sure about this, whit objects will be more easy
function addItem(title){
    const itemsContainer=document.getElementById('itemsId');
    const element=document.createElement('div');
    element.classList.add('card','text-center','text-white','bg-primary','mb-4');
    element.innerHTML=`
    <div class="card-body">
        ${title}
    </div>
    <div class="card-footer">
        <button  onclick="removeItem(this.id)" id="btn`+amount+`" type="button" class="btn btn-success btn-sm"  >Done</button>
    </div>`;
    itemsContainer.appendChild(element);
    localStorage.setItem('btn'+amount,title);
    amount=amount+1;
};

function submitItem(){
    const title=document.getElementById('titleId').value;
    if(!title==""){
        addItem(title);
        document.getElementById('itemForm').reset();
    }
};

function removeItem(elementId){
    document.getElementById(elementId).parentElement.parentElement.remove();
    localStorage.removeItem(elementId);
};

document.getElementById('itemForm')
.addEventListener('submit',function(e){submitItem();
e.preventDefault();});
if(!localStorage.length==0){
    var allItems=[];
    for(x=0;x<=localStorage.length-1;x++){
        allItems.push(localStorage.getItem(localStorage.key(x)));
    };
    localStorage.clear();
    allItems.forEach(function(i){addItem(i)});
};