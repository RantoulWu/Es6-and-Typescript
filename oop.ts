// OOP
// access modifier belongs to typescript
export class Shape{
   static x = 1;
   type; // default is public in ts
   private y;  // only accessible inside class 
   protected z; //  accessible inside class and inside class's child class, no access for outside class
   // do not allow overload constructor
   constructor(type){ 
       this.type = type;
       console.log(Shape.x);
       //console.log(this.x); cannot get in  local scope
       // console.log(this.x); // why cannot find it? this points to newly created object, and no x in this object, x contains in class 
   }
   // strict mode 
   static printX(){ // static printX() will be put in shape class（shape function）
       console.log(Shape.x); // 
       console.log(this.x); // why no error?   x is in shape class, and printx will be called by shape
        //console.log(this.z); // error cannot get the instance
   }
}

const shape = new Shape('Triangle');
Shape.printX();
const myPrint = Shape.printX;
myPrint(); //cannot print because this points to global, no x in global!
 //console.log(shape.y);  No! 'y' is private and only accessible within class 'Shape'
 console.log(shape.type);
 // protected only accessible within class and subclass
 //console.log(shape.z);

 export class Pentagon extends Shape implements drawable{
     public side;
     constructor(side){
         super('pentagon');
         this.side = side;
         console.log(this.z);
     }
     draw(){

     }
 }
 // from typescript, used to do internal type checking
 export interface drawable{
     //i; // public static final
     draw(); // public static method
 }

 
 
