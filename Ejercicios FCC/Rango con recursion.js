
function rangeOfNumbers(startNum, endNum) 
{
  if(endNum < startNum)
  {
    return [];
  }
  else
  {
    let array = rangeOfNumbers(startNum, endNum-1)
    array.push(endNum);
    return array;

  }
};