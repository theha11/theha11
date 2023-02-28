function checkEmailValid(s) {
    var k = false;
    if (s.match("@gmail.com"))
        k = true;
    return k&&!(!localStorage.key(s));
}
localStorage.setItem("@gmail.com","0342007689");
console.log(checkEmailValid("@gmail.com"));