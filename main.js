document.write("14. to remove duplicate items from an array"+"<br>");
function test14(arr){
    return [...new Set(arr)].sort();
}
document.write(test14([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6])+"<br><br>");