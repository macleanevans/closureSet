function data(){                                               
  var stuff = "stuff";
    return function getStuff() {   // Added return statement 
        return "You got the " + stuff;      
    }
}

data()()