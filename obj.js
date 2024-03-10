let obj={
    x:"x",
    y:"y",
    z:"z",
    run:function(){
        // console.log(this);
        return "I'm run"+this.x+this.y+this.go();
    },
    go(){
        return`I'm go`;
    },
};
console.log(obj);
console.log(obj.run());
console.log(obj.go());