/* ES6: Classes
Important to know since this component of ES6 JS is used by React */

class Human {
    constructor() {   //Example of constructor with several properties
      this.legs = 2;
      this.arms = 2;
      this.fingers = 10;
      this.toes = 10;
    }
    //Example of method inside a class
    printAppendages() { 
        console.log("Legs:"+this.legs, "Arms:"+this.arms, "Fingers:"+this.fingers, "Toes:"+this.toes);
    }
}

class Female extends Human {
    constructor() {
      super(); //Keyword use of 'super' here to append this Female class to the parent Human
      this.gender = 'Gender: Female';
      this.breasts = 'Breasts: ' + 2;        
    }
    printFemale() {
      console.log(this.gender, this.breasts);
    }
}

const eve = new Female();
eve.printAppendages();
eve.printFemale();

/* ES7: Classes
Important to know since this component of ES7 JS is used by React */

/* Simplified Syntax as compared to section above: Will throw Error for now since ES7 is not yet widely
used */
// class Human {
//   legs = 2;
//   arms = 2;
//   fingers = 10;
//   toes = 10;
//   }
//   printAppendages = () => { //Example of method inside a class
//       console.log("Legs:"+this.legs, "Arms:"+this.arms, "Fingers:"+this.fingers, "Toes:"+this.toes);
//   }
// }

// class Female extends Human {
//   super(); //Keyword use of 'super' here to append this Female class to the parent Human
//   gender = 'Gender: Female';
//   breasts = 'Breasts: ' + 2;        
//   }
//   printFemale() {
//     console.log(this.gender, this.breasts);
//   }
// }

// const eve = new Female();
// eve.printAppendages();
// eve.printFemale();