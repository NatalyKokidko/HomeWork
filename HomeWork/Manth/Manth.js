function WhatTheSeason() { 
    var a = document.getElementById("seasonsId").value;
    if (a==12 || a==1 || a==2){
      var b = document.getElementById("resSeasonid"); 
      b.value = "Winter";
      var c= "January";
      var d= "February";
      var i = "December";
      if (a==12){
       b.value=" Winter December";}  
      if (a==1){
       b.value=" Winter January";}
      if (a==2){
       b.value=" Winter February";}
      
  }
    if(a ==3 || a ==4 || a==5){
     var b = document.getElementById("resSeasonid"); 
      b.value = "Spring";
      var c= "March";
      var d= "April";
      var i = "May";
      if (a==3){
       b.value=" Spring March";}  
      if (a==4){
       b.value=" Spring April";}
      if (a==5){
       b.value=" Spring May";} 
    }
    if(a ==6 || a ==7 || a==8){
     var b = document.getElementById("resSeasonid"); 
      b.value = "Summer";
     var c= "June";
      var d= "July";
      var i = "August";
      if (a==6){
       b.value=" Summer June";}  
      if (a==7){
       b.value=" Summer July";}
      if (a==8){
       b.value=" Summer August";}  
    }
    if(a ==9 || a ==10 || a==11){
     var b = document.getElementById("resSeasonid"); 
      b.value = "Autumn";
       var c= "September";
      var d= "October";
      var i = "November";
      if (a==9){
       b.value=" Autumn September";}  
      if (a==10){
       b.value=" Autumn October";}
      if (a==11){
       b.value=" Autumn November";}   
    }
  }