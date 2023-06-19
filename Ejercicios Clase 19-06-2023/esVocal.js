function esVocal(char)
{   
    const vowels = "aeiou";
    let character = char.toLowerCase()
    if(vowels.includes(character))
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(esVocal("E"));