// memory handler
document.getElementById('16gb-btn').addEventListener('click', function(){
const memory = document.getElementById('memory');
const previousmemoryprc = parseInt(memory.innerText);
if(previousmemoryprc == 0){
    memory.innerText = previousmemoryprc + 180;
    
}  


 });
//  8gb memory
document.getElementById('8gb-btn').addEventListener('click', function(){
const memory = document.getElementById('memory');
const previousmemoryprc = parseInt(memory.innerText);
if(previousmemoryprc > 0){
    memory.innerText = previousmemoryprc - 180;
}  

 });
 
// storage handler
document.getElementById('256gb-btn').addEventListener('click', function(){
    const storage = document.getElementById('storage');
    const previousstorageprc = parseInt(storage.innerText);
    
    if(previousstorageprc == 180){
        storage.innerText = previousstorageprc - 180;
    } 
    if(previousstorageprc == 100){
        storage.innerText = previousstorageprc - 100;
    } 
   
});
// 512gb storage
document.getElementById('512gb-btn').addEventListener('click', function(){
    const storage = document.getElementById('storage');
    const previousstorageprc = parseInt(storage.innerText);
    
    if(previousstorageprc == 0){
        storage.innerText = previousstorageprc + 100;
    } 
    else if(previousstorageprc == 180){
        storage.innerText = previousstorageprc - 80;
    }
 
});
// 1tb storage
document.getElementById('1tb-btn').addEventListener('click', function(){
    const storage = document.getElementById('storage');
    const previousstorageprc = parseInt(storage.innerText);
    
    if(previousstorageprc == 0){
        storage.innerText = previousstorageprc + 180;
    } 
    else if(previousstorageprc == 100){
        storage.innerText = previousstorageprc + 80;
    }

});

// delivery charge

document.getElementById('free').addEventListener('click', function(){
    const delivery = document.getElementById('delivery');
    const previousdeliverychrg = parseInt(delivery.innerText);
    
    if(previousdeliverychrg > 0){
        delivery.innerText = previousdeliverychrg - 20;
    }
    
})
document.getElementById('charge').addEventListener('click', function(){
    const delivery = document.getElementById('delivery');
    const previousdeliverychrg = parseInt(delivery.innerText);
    
    if(previousdeliverychrg == 0){
        delivery.innerText = previousdeliverychrg + 20;
    }

})







