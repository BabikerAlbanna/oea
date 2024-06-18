import { rand } from './utils.js'
import { Component, If, Equal } from './classes.js'

let grs = new Map();

function _() {

    this.LowerCase = (str) => {
    }

    this.UpperCase = (str) => {
    }

    this.Equal = (a, b) => {
        let cur = new Equal();
        cur.paramA = a;
        cur.paramB = b;
        return a == b;
    }

    this.If = (param, fn) => {
        let cur = new If();
        cur.param = param;
        grs.set(cur.runId, cur);
        if (param == true) {
            cur.Run(fn);
        }
        else if (param instanceof Component
            && param.val == true) {
            cur.Run(fn);
        }
    }
}


let $ = new _();


$.If($.Equal("a", "a"), () => {
    console.log("Inside If fn() block.");
})


console.log(grs);









/*
$.If(
    $.Equal(
        $.Replace("b", "a", "b"),
        $.LowerCase("A")
    ), () => {
        console.log($.LowerCase("Hello, World").value);
    })*/

