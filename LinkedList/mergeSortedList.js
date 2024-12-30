// Merge two sorted linked lists
// First linked list: 5 -> 10 -> 15
// Second linked list: 2 -> 3 -> 20
// Output:2 3 5 10 15 20
class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        },
        this.tail=this.head;
    }
    mergeSortedList(l1,l2){
    let current= l1.head;
    let listArray=[];     
    while(current !== null){
        listArray.push(current.value);
        current=current.next;
    }

    let current2= l2.head;    
    while(current2 !== null){
        listArray.push(current2.value);
        current2=current2.next;
    }

    listArray.sort();
    return listArray; 
    }

    appendNode(data){
        let newNode = {
            value:data,
            next:null
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.size+=1;
    }
}
const list = new LinkedList(10);
list.head.next={
    value:20,
    next:{
        value:30,
        next:{
            value:40,
            next:null
        }
    }
};
const list2=new LinkedList(15);
list2.head.next={
    value:25,
    next:{
        value:35,
        next:{
            value:45,
            next:null
        }
    }
};
const result =list.mergeSortedList(list,list2);
console.log(result)
result.forEach((element,index) => {
    let list3;
    list3=new LinkedList(element);
    console.log(index,list3)

        list3.appendNode(element)
    
});

