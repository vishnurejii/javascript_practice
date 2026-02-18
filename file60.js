const cart={
    items:[],
    addItems:function(item){
        this.items.push(item)
    },
    showItems:function(){
        console.log(this.items)
    }
}

cart.addItems("laptop")
cart.addItems("desktop")
cart.showItems()