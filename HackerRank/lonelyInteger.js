function lonelyinteger(a) {
    // Write your code here
    for(let i = 0; i <= a.length; i++){
        //let auxArray = a.slice();
        let contLetter = 0;
        let letter = a[i]
        for(let j = 0; j <= a.length; j++){
            if(letter == a[j]){
                contLetter++;
            }
        }
        if(contLetter==1){
            return letter;
        }
    }
}