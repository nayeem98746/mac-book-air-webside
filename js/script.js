// Memory

function selectMemory (memorygb ){
    const memoryCost1 = document.getElementById('memory-cost')
   

    
    if(memorygb == true){
       
         let  memoryCostText1 = memoryCost1.innerText = '0'
        const memoryCost8 = parseFloat(memoryCostText1)
     
    }
    else if (memorygb == false){
        let  memoryCostText1 = memoryCost1.innerText = '180'
           const memoryCost16 = parseFloat(memoryCostText1)
           
    }
    
    
     
} 

 const memory1 = document.getElementById('memory-1').addEventListener('click', function(){
    
    selectMemory(true)

  

   

})

// total price






const memory2 = document.getElementById('memory-2').addEventListener('click', function(){

   selectMemory(false)

   const memoryCost1 = document.getElementById('memory-cost')
   let  memoryCostText1 = memoryCost1.innerText = '180'
   const memoryCost = parseFloat(memoryCostText1)
   

    
})
// SSD function

const storage256 = document.getElementById('storage-256').addEventListener('click',function(){
    const storageCost = document.getElementById('storage-cost')
    let storageCostText = storageCost.innerText = '0'
    storageCost.innerText = parseInt(storageCostText)
    
    
})
const storage512 = document.getElementById('storage-512').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost')
    let storageCostText = storageCost.innerText = '100'
    storageCost.innerText = parseInt(storageCostText)

    

    
    
})
const storage1T = document.getElementById('storage-1T').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost')
    let storageCostText = storageCost.innerText = '180'
    storageCost.innerText = parseInt(storageCostText)
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
// input discount

const totalDiscount = document.getElementById('total-discount')
const applyButton = document.getElementById('apply-button')
    
    const inputPromocode = document.getElementById('input-promocode').addEventListener('keypr')
    const inputPromocodeText = inputPromocode.value 
    




