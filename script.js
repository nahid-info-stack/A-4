//console.log('file loded!');
const btnClickStyle = ["bg-blue-500","border-blue-900","text-white"];
const btnNormalStyle = ["bg-transparent","text-[#64748B]","border-black"];
const cardContainer = document.getElementById("card-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");

//console.log(cardContainer,interviewContainer,rejectedContainer);


let select = "all";

function selectItem (type) {
    //console.log(event);
    const buttons = ["all","interview","rejected"];
    select = type;

    for (const button of buttons) {
        //console.log(e);
        const btnName = document.getElementById("btn-" + button);
        console.log(btnName);
        if(button === type){
            //select = button;
           btnName.classList.remove(...btnNormalStyle); 
           btnName.classList.add(...btnClickStyle); 
        }else{
             btnName.classList.add(...btnNormalStyle); 
           btnName.classList.remove(...btnClickStyle); 


        }
        
    }
    const allContainer =[cardContainer,interviewContainer,rejectedContainer];
    for (const container of allContainer) {
        container.classList.add("hidden");
        
    }
    emptyCard.classList.add("hidden");

    if(type == "all"){
        cardContainer.classList.remove("hidden");
        if(cardContainer.children.length < 1){
        emptyCard.classList.remove("hidden");

        }
    }else if(type == "interview"){
        interviewContainer.classList.remove("hidden");
        emptyCard.classList.add("hidden");
        if(interviewContainer.children.length < 1){
        emptyCard.classList.remove("hidden");}

    }else if(type == "rejected"){
        rejectedContainer.classList.remove("hidden");

        if(rejectedContainer.children.length < 1){
        emptyCard.classList.remove("hidden");}

    }
updateCount ();
}

// count 
const totalCount = document.getElementById("total-count");
const interviweCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const emptyCard = document.getElementById('empty');
const available = document.getElementById("available");

//totalCount.innerText = cardContainer.children.length;

selectItem (select);
//console.log(cardContainer.children);

document.getElementById("all-parent").addEventListener('click', function (event){
    const clickElement = event.target;
    //console.log(clickElement.parentNode.parentNode.parentNode.parentNode);
    const card = clickElement.closest(".card");
    const status = card.querySelector(".status");
    const parent = card.parentNode;

    if(clickElement.classList.contains(("interview-btn"))){
        
        status.innerText = "Interview";
        interviewContainer.appendChild(card);
        updateCount ();

    }
    if(clickElement.classList.contains(("rejected-btn"))){
        
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        updateCount ();
    }
    if(clickElement.classList.contains(("delete-btn"))){
       
       parent.removeChild(card);
        updateCount ();
    }

});

function updateCount (){
//     totalCount.innerText = cardContainer.children.length;
//     interviweCount.innerText = interviewContainer.children.length;
//    rejectedCount.innerText = rejectedContainer.children.length;

   const counts = {
    all:cardContainer.children.length,
    interview:interviewContainer.children.length,
    rejected:rejectedContainer.children.length

   }
   totalCount.innerText = counts["all"];
   interviweCount.innerText = counts["interview"];
    rejectedCount.innerText = counts["rejected"];

    available.innerText = counts[select];
    if(counts[select]< 1){
        emptyCard.classList.remove("hidden");
    }else{
        emptyCard.classList.add("hidden");
    }
};
updateCount ();