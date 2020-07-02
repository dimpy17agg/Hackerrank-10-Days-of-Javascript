/*
https://www.hackerrank.com/challenges/js10-date/problem
*/

function getDayName(dateString) {
    let dayName;
    // Write your code here
    let d=new Date(dateString).getDay();   
      if(d==0)
      dayName="Sunday";
      else if(d==1)
      dayName="Monday";
      else if(d==2)
      dayName="Tuesday";
      else if(d==3)
      dayName="Wednesday";
      else if(d==4)
      dayName="Thursday";
      else if(d==5)
      dayName="Friday";
      else if(d==6)
      dayName="Saturday";

    return dayName;
}
