<?php if (isset($_SESSION['login_failed'])) : ?>
        <div class="alert">
          Incorrect username or password!
        </div>
      <?php
        unset($_SESSION['login_failed']);
      endif;
      ?>