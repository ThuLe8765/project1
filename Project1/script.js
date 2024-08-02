
        
var dateScreen = document.querySelector(".date-container");
var seatScreen = document.querySelector(".seat-container");
var reserveButton = document.getElementById("reserve-button");
var backButton= document.getElementById("back-button");
var modalHTML = document.querySelector(".modal");
var yesButton =document.getElementById("yes-button");
var noButton  = document.getElementById("no-button");
reserveButton.addEventListener("click",function(){
 dateScreen.classList.add("d-none");
seatScreen.classList.remove("d-none")
})
function handleBackToDataSelection(){
    dateScreen.classList.remove("d-none");
    seatScreen.classList.add("d-none");
    modalHTML.style.display = "none";
    buyButton.classList.remove("active");
    totalPriceHTML.innerHTML= "";
    vipSectionHTML.innerHTML ="";
    normalSectionHTML.innerHTML ="";
    selectedSeats=[];
    var selectedSeatHTML= document.querySelectorAll(".selected");
    for (var i=0;i<selectedSeatHTML.length;i++){
        selectedSeatHTML[i].classList.remove("selected");
    }
}
backButton.addEventListener("click", function(){
    if (selectedSeats.length>0){
    modalHTML.classList.remove("d-none");
    }else{
        handleBackToDataSelection();
    }

} )

yesButton.addEventListener("click", handleBackToDataSelection);

noButton.addEventListener("click", function(){
    modalHTML.style.display = "none";
});



var moreText=document.querySelector(".more-text");
var threeDots=document.querySelector(".three-dots");
var readMoreButton=document.querySelector("#read-more");
readMoreButton.addEventListener("click" , (event)=>{

if(threeDots.style.display==="none"){
    threeDots.style.display="inline";
    moreText.style.display= "none";
    readMoreButton.innerHTML="Read more";
}
else{
    threeDots.style.display="none";
    moreText.style.display="inline";
    readMoreButton.innerHTML="Read less";

    
   
}

})
var slots = [
{
id: "slot_1",
date: "Thu 21",
time: "10:00"
},
{
id: "slot_2",
date: "Thu 21",
time: "12:00"
},
{
id: "slot_3",
date: "Thu 21",
time: "14:30"
},
{
id: "slot_4",
date: "Thu 21",
time: "16:00"
},
{
id: "slot_5",
date: "Thu 21",
time: "18:00"
},{
id: "slot_6",
date: "Thu 21",
time: "10:00"
},
{
id: "slot_7",
date: "Thu 21",
time: "12:00"
},
{
id: "slot_8",
date: "Thu 21",
time: "14:30"
},
{
id: "slot_9",
date: "Thu 21",
time: "16:00"
},
{
id: "slot_10",
date: "Thu 21",
time: "18:00"
},
]
var dateSelection = document.querySelector (".date-selection")
for (var i=0; i<slots.length; i++){
    var slotContainer = document.createElement("div");
    var dateContainer = document.createElement ("div");
    dateContainer.classList.add("date");
    var date = document.createElement("div");
    date.innerHTML=slots[i].date;
    if(i==2){
        dateContainer.classList.add("active")
    }
    var timeContainer = document.createElement ("div");
    timeContainer.classList.add("time");
    var time = document.createElement("div");
    time.innerHTML=slots[i].time;
    dateContainer.appendChild(date);
    timeContainer.appendChild(time);
    slotContainer.appendChild(dateContainer);
    slotContainer.appendChild(timeContainer);
    dateSelection.appendChild(slotContainer);
}
var seatRowOneLeftHTML = document.querySelector('.seat-row-one>.seat-row:first-child');
var seatRowOneRightHTML = document.querySelector('.seat-row-one>.seat-row:last-child');
var seatRowTwoLeftHTML = document.querySelector(".seat-row-two>.seat-row:first-child");
var seatRowTwoRightHTML = document.querySelector(".seat-row-two>.seat-row:last-child")
var seatRowThreeHTML = document.querySelector(".seat-row-three");
var seatRowFourHTML = document.querySelector(".seat-row-four");
var seatRowFiveHTML = document.querySelector(".seat-row-five");
var seatRowSixHTML = document.querySelector(".seat-row-six")
//var seatSelectedNameHTML=document.getElementById("selected-seats-name");

var totalPriceHTML=document.getElementById("total-price");
var buyButton=document.getElementById("buy-button");
var vipSectionHTML = document.getElementById("vip-section-number");
var normalSectionHTML= document.getElementById ("normal-section-number");
var selectedSeats =[];

function generateSeatNameAndPrice(){
   // seatSelectedNameHTML.innerHTML="";
    totalPriceHTML.innerHTML="";
    vipSectionHTML.innerHTML="";
    normalSectionHTML.innerHTML="";
    var vipSeatNumberArray=[];
    var normalSeatNumberArray =[];

    for(var i=0;i<selectedSeats.length;i++){
        var currentSeat =selectedSeats[i];
        var seatNumber= +selectedSeats[i].id.slice(5);

        if (currentSeat.isVip==="true"){
            vipSeatNumberArray.push(seatNumber);
            vipSeatNumberArray.sort(function(a, b){return a-b}); 
            
        }else{
            normalSeatNumberArray.push(seatNumber);
            normalSeatNumberArray.sort(function(a, b){return a-b});
            
        }
        totalPriceHTML.innerHTML= +totalPriceHTML.innerHTML + +currentSeat.price;
    
    }
    for(var j=0;j<vipSeatNumberArray.length;j++){
        if(vipSeatNumberArray[j+1]-vipSeatNumberArray[j]==1 && vipSeatNumberArray[j+2]-vipSeatNumberArray[j+1]==1){
        vipSectionHTML.innerHTML= vipSectionHTML.innerHTML+ vipSeatNumberArray[j]+ "-"+ vipSeatNumberArray[j+2]+"," +" ";
        vipSeatNumberArray.splice(j,2);
        }else{
            vipSectionHTML.innerHTML= vipSectionHTML.innerHTML+ vipSeatNumberArray[j]+ "," +" ";

        }

    }   
    for(var i =0;i<normalSeatNumberArray.length;i++){
        normalSectionHTML.innerHTML= normalSectionHTML.innerHTML+ normalSeatNumberArray[i] +"," +" ";
    } 
}
function updateBuyButtonStatus(){
    if(selectedSeats.length!==0){
        buyButton.classList.add("active");
        
    }else{
        buyButton.classList.remove("active");
    }
    }

function handleSeatClick(event){
    var available = event.target.dataset.available;
    var id = event.target.dataset.id;
    var isVip = event.target.dataset.isVip;
    var price = event.target.dataset.price;
    if(available === "true"){
        if(event.target.classList.value.includes("selected")){
         event.target.classList.remove("selected");
         for (var i=0; i<selectedSeats.length;i++){
            var currentSeat=selectedSeats[i];
            if (id==currentSeat.id){
            var index= selectedSeats.indexOf(currentSeat);
            selectedSeats.splice(index,1);
         }
        
        }
    }
        else{
        event.target.classList.add("selected");
        var newSeat ={
            id: id,
            isVip: isVip,
            price:price,
        }
        selectedSeats.push(newSeat)
           }
    updateBuyButtonStatus();
    generateSeatNameAndPrice();
    
    }else{
        event.target.classList.add("shake");
    }
    console.log(selectedSeats)
}
function generateSeats(rowData,seatRowHTML){
for (var i= 0; i<rowData.length;i++){
    var currentSeat =rowData[i];
    var unavailable = "unavailable";
    var seat = document.createElement("div");
    seat.classList.add("seat");
    seat.dataset.available=currentSeat.available;
    seat.dataset.id=currentSeat.id;
    seat.dataset.isVip=currentSeat.isVip;
    seat.dataset.price=currentSeat.price;
    if(!currentSeat.available){
        
        seat.classList.add("unavailable");
    }
 seat.addEventListener("click", handleSeatClick);
    
    seat.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 30 23" fill="none">
                <path d="M0 4.13806C0 3.03349 0.89543 2.13806 2 2.13806H4C5.10457 2.13806 6 3.03349 6 4.13806V14.1381C6 15.2426 6.89543 16.1381 8 16.1381H22C23.1046 16.1381 24 15.2426 24 14.1381V4.13806C24 3.03349 24.8954 2.13806 26 2.13806H28C29.1046 2.13806 30 3.03349 30 4.13806V17.1381C30 19.8995 27.7614 22.1381 25 22.1381H5C2.23858 22.1381 0 19.8995 0 17.1381V4.13806Z" fill="#C4C4C4"/>
                <path d="M7 3.13806C7 1.48121 8.34315 0.138062 10 0.138062H20C21.6569 0.138062 23 1.48121 23 3.13806V14.1381C23 14.6903 22.5523 15.1381 22 15.1381H8C7.44772 15.1381 7 14.6903 7 14.1381V3.13806Z" fill="#C4C4C4"/>
           </svg>
               <path xmlns="http://www.w3.org/2000/svg" d="M0 4.13806C0 3.03349 0.89543 2.13806 2 2.13806H4C5.10457 2.13806 6 3.03349 6 4.13806V14.1381C6 15.2426 6.89543 16.1381 8 16.1381H22C23.1046 16.1381 24 15.2426 24 14.1381V4.13806C24 3.03349 24.8954 2.13806 26 2.13806H28C29.1046 2.13806 30 3.03349 30 4.13806V17.1381C30 19.8995 27.7614 22.1381 25 22.1381H5C2.23858 22.1381 0 19.8995 0 17.1381V4.13806Z" fill="#C4C4C4"/>
              <path xmlns="http://www.w3.org/2000/svg" d="M7 3.13806C7 1.48121 8.34315 0.138062 10 0.138062H20C21.6569 0.138062 23 1.48121 23 3.13806V14.1381C23 14.6903 22.5523 15.1381 22 15.1381H8C7.44772 15.1381 7 14.6903 7 14.1381V3.13806Z" fill="#C4C4C4"/>
           </svg>
    `
    seatRowHTML.appendChild(seat);
}
}
generateSeats(seat_row_one.slice(0,3),seatRowOneLeftHTML);
generateSeats(seat_row_one.slice(3,6),seatRowOneRightHTML);
generateSeats(seat_row_two.slice(0,seat_row_two.length/2),seatRowTwoLeftHTML);
generateSeats(seat_row_two.slice(seat_row_two.length/2,8),seatRowTwoRightHTML);

generateSeats(seat_row_three,seatRowThreeHTML);
generateSeats(seat_row_four,seatRowFourHTML);
generateSeats(seat_row_five,seatRowFiveHTML);
generateSeats(seat_row_six,seatRowSixHTML);



var dates = document.querySelectorAll('.date-selection>div');
function clearClass() {
    for (var i = 0; i < dates.length; i++) {
        dates[i].classList=""
    }
}
dateSelection.addEventListener('scroll', function (e) {
    clearClass()
    var itemWidth = 75;
    currentItem = Math.floor(e.target.scrollLeft / itemWidth)


    upOne = currentItem + 1
    upOneAnother = currentItem + 3

    upTwo = currentItem + 2
    dates[upOne].classList.add('up-one')
    dates[upOneAnother].classList.add('up-one')
    dates[upTwo].classList.add('up-two')

    

})
var bookTicket = document.querySelector("#book-ticket");
var movieInfo = document.querySelector("#movie-info");
var dateAndTimeInfo=document.querySelector("#date-and-time-info")
var trailer = document.getElementById("watch-trailer")
var video = document.getElementById("video");

bookTicket.addEventListener("click", function(){
     movieInfo.classList.add("d-none");
     dateAndTimeInfo.classList.remove("d-none");
     if (video.classList.contains("d-none")===false){
        video.classList.add("d-none");
     }
     
})
 trailer.addEventListener("click", function(){
    video.classList.remove("d-none");
 })
var backToMovieInfo = document.getElementById("back-button1")
backToMovieInfo.addEventListener("click", function(event){
    
    if(dateAndTimeInfo.classList.contains("d-none")){
        window.location.href = "choose_movie.html";
}else{
    dateAndTimeInfo.classList.add("d-none");
    movieInfo.classList.remove("d-none");
}
})


