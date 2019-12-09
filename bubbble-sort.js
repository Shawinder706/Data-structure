function bubbleSort(num){

    numLength=num.length-1
    // Iteration of array till last before element 
    for(let iter=0;iter<numLength;iter++){
        // Iteration of array till last before element 
        for(index=0;index<numLength;index++){
            if(num[index]>num[index+1]){

                let swap = num[index]
                //swap the elements 
                num[index]=num[index+1]
                num[index+1]=swap
            }
            
        }
    }
    return num
}

console.log(bubbleSort([8,6,9,10,65,3,1]))

