function longestString(string1, string2) {
    let longest = "";
    let current = "";

    for (let i = 0; i < string1.length; i++) {
        for (j = 0; i < string2.length; j++) {
            if (string1[i] === string2[j]) {
                current += string1[i];
                if (current.length > longest.length) {
                    longest = current;
                }
            } else {
                current = "";
            }
        }
    }
    //console.log(longest);
    return longest;
}
console.log(longestString("hello", "world"));
