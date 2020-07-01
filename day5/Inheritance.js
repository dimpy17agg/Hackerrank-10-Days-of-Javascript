/*https://www.hackerrank.com/challenges/js10-inheritance/problem   */

Rectangle.prototype.area=function(){
    return this.w*this.h;
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle{

  constructor(w)
  {
     super(w);
     this.w=w;
     this.h=w;
  }
  
}
