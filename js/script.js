// Memory

function selectMemory (memorygb ){
    const memoryCost1 = document.getElementById('memory-cost')
    let  memoryCostText1 = memoryCost1.innerText
    
    if(memorygb == true){
        memoryCost1.innerText =  parseInt('0')

    }
    else if (memorygb == false){
        memoryCost1.innerText =  parseInt( '180') 
    }
   
    
     
}

 const memory1 = document.getElementById('memory-1').addEventListener('click', function(){

    selectMemory(true)
  

   

})
const memory2 = document.getElementById('memory-2').addEventListener('click', function(){

   selectMemory(false)
   

    
})
// SSD function

const storage256 = document.getElementById('storage-256').addEventListener('click',function(){
    const storageCost = document.getElementById('storage-cost')
    const storageCostText = storageCost.innerText
    storageCost.innerText = parseInt('0')
    // parseFloat('0') = storageCostText;
    const totalPrice = document.getElementById('total-price')
    const totalPriceText = totalPrice.innerText
    totalPrice.innerText= parseFloat(totalPriceText) + storageCostText
    
})
const storage512 = document.getElementById('storage-512').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost')
    const storageCostText = storageCost.innerText
    storageCost.innerText = parseInt('100')

    const totalPrice = document.getElementById('total-price')


    
    
})
const storage1T = document.getElementById('storage-1T').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost')
    const storageCostText = storageCost.innerText
    storageCost.innerText = parseInt('180')
})

// delivary function
function getDelivery (delivery ){
    const deliveryCharge = document.getElementById('delivery-charge')
    const deliveryChargeText = deliveryCharge.innerText
    if (delivery == true){
        deliveryCharge.innerText = parseFloat('0')

    }
    else if (delivery == false){
        deliveryCharge.innerText = parseFloat('20')
    }
}

const freeDelivery = document.getElementById('free-delivery').addEventListener('click', function(){
    
    getDelivery(true)

})

const costDelivery = document.getElementById('cost-delivery').addEventListener('click', function(){
    
    getDelivery(false)  
})