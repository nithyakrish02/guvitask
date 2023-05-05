<?php 
  if(isset($_POST['create'])) 
    {
        $user = $_POST['user'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $cpassword = $_POST['cpass'];
      
        // SQL query to insert user data into the users table
        $query= "INSERT INTO users (username, email, password, cpassword ) VALUES('$user','$email','$pass','&cpass')";
        $add_user = mysqli_query($conn,$query);
    
        // displaying proper message for the user to see whether the query executed perfectly or not 
          if (!$add_user) {
              echo "something went wrong ". mysqli_error($conn);
          }

          else { echo "<script type='text/javascript'>alert('User added successfully!')</script>";
              }         
    }
?>