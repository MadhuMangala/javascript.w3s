function fnLet() {
// let x=10;
    let x="hari"
    //block scope
    {
        let x=5;
        let x=11;
    }
    console.log(x)
}
fnLet()