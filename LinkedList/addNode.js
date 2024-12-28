class LinkedList{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head;
        this.size=0;
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

    displayList(){
    let counter=0;
    let current=this.head;
    while(counter < this.size){
        console.log(current)
        current=current.next
        counter++;
    }
    }

    deleteNode(index){
        let counter=1;
        let lead=this.head;
        if(index==1){
            this.head=this.head.next;
        }else{
            while(counter<index-1){
                lead= lead.next;
                counter++
            }
            let nextNode=lead.next.next;
            lead.next=nextNode;
        }
    }

    insertNode(index,data){
        if (index < 0 || index > this.size) {
            console.log("Index out of bounds");
            return;
        }
        if (index === 0) {
            this.head = {
                value: data,
                next: this.head,
            };
            this.size += 1;
            return;
        }
        let counter = 1;
        let current = this.head;
        while (counter > index) {
            current = current.next;
            counter += 1;
        }
        const nextNode = current.next;
        current.next = {
            value: data,
            next: nextNode,
        };
        if (current === this.tail) {
            this.tail = current.next;
        }
        this.size += 1;
    }

    reverseNode(){

        let prev=null;
        let next;
        let current=this.head;
        this.tail=current;
        while(current !== null){
            next = current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;

    }

}
const list = new LinkedList(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
// list.displayList();
// list.deleteNode(1)
list.insertNode(1,120)
list.insertNode(2,130)
console.log("list is",list);
// console.log(list.tail)
list.reverseNode();
console.log("reverse list",list);














// class LinkedList{
//     constructor(value){
//         this.head={
//             value:value,
//             next:null
//         };
//         this.tail=this.head;
//         this.size=1;
//     }
//     appendNode(value){
//      let newNode={
//         value:value,
//         next:null
//      }
//      this.tail.next=newNode;
//      this.tail=this.tail.next;
//      this.size+=1
//     }
//     displayNode(){
//     let counter=1;
//     let current= this.head;
//     while(counter <= this.size){
//         console.log(`${counter} node is`,current)
//      current=current.next;
//      counter++
//     }
//     }
//     deleteNode(position){
//         let counter=1;
//         let lead = this.head;
//         while(counter < position-1){
//             lead=lead.next;
//             counter++;
//         }
//         // console.log(lead)
//         let nextNode=lead.next.next;
//         lead.next=nextNode;
//         this.size--
//     }

//     insertNode(position,value){
//         let counter=1;
//         let current= this.head;

//         while(counter < position-1){
//             counter++;
//             current=current.next;
//         }
//         let nextNode=current.next;
//         current.next={
//             value:value,
//             next:nextNode
//         };
//         this.size++;
//     }
// }

// const list = new LinkedList(100)
// list.appendNode(200);
// list.appendNode(300);
// list.appendNode(400);
// list.appendNode(500);
// list.deleteNode(3);
// list.insertNode(3,120);
// list.displayNode();

// console.log(list)





