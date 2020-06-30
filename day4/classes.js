/*   https://www.hackerrank.com/challenges/js10-class/problem  */


class Polygon{

  constructor(sides){
      this.sides=sides;
  }
  perimeter(){
      var p=0;
      for(var i=0;i<this.sides.length;i++)
          p=p+this.sides[i];
    return p;
  }
}
