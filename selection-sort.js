

function selectionSort(arr){
    let leastNumIndex,leastNumbertemp
    // // Iteration of array till last element 
    for(let iter=0;iter<=arr.length-1;iter++){
        //  Iteration of array till last element 
        for(let index=iter+1;index<=arr.length-1;index++){

            if(arr[iter]>arr[index]){               
                leastNumIndex = index               
                console.log(leastNumIndex);
                return
            }

        }
                    
    }
    return arr

}

var fre=selectionSort([90,89,6,78,909,54,4,76])
console.log(fre)