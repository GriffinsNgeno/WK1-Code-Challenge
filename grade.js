    function grade() {
      const grade = prompt("Enter Marks")
      if (grade >= 79 && grade <= 100) {
        console.log('Grade A');
      } else if (grade >= 60 && grade <= 78){
        console.log('Grade B');
      } else if(grade >= 49 && grade <= 59){
        console.log('Grade C');
      } else if(grade >= 40 && grade <= 48){
        console.log('Grade D');
      }else if (grade < 40){
        console.log('Grade E');
      } else{
        console.log('Invalid! ');
      }
    }
    grade()