class Item{
    constructor(nTitle){
        this.title=nTitle;
        this.status=true;
    }
    setStatus(){
        this.status=false;
    }
    getStatus(){
        return this.status;
    }
    getTitle(){
        return this.title;
    }
};
class ItemsContainer{
    constructor(){
        this.cant=0;
    }
    addItem(item){
        this.cant=this.cant+1;
        const itemsContainer=document.getElementById('itemsId');
        const element=document.createElement('div');
        element.classList.add('card','text-center','text-white','bg-primary','mb-4');
        element.innerHTML=`
            <div class="card-body">
                ${item.getTitle()}
            </div>`;
        element.addEventListener('click',function(){element.classList.remove('bg-primary');
        element.classList.add('bg-success');});
        itemsContainer.appendChild(element);
    }
    getCant(){
        return this.cant;
    }
};

function submitFunction(items){
    const title=document.getElementById('titleId').value;
    if(!title==""){
    items.addItem(new Item(title));
    document.getElementById('itemForm').reset();
    document.getElementById('amount').innerHTML=items.getCant();
    }
}
const container=new ItemsContainer();
document.getElementById('itemForm')
.addEventListener('submit',function(e){submitFunction(container);
e.preventDefault();});

//