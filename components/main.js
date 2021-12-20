const main = `
<main class="container-main">
  <div class="main-area">
    <img class="main-area__banner" src="assets/banner-image.jpeg" alt="Banner image, Sunset New York." role="banner" tabindex="0">

    <div class="main-area__content">
      <article id="program">
        <h2 class="main-area--title" tabindex="0">PROGRAM</h2>
        <img src="assets/image1.jpeg" alt="Sky with stars" tabindex="0">
      </article>

      <article id="tech">
        <h2 class="main-area--title" tabindex="0">TECH</h2>
        <img src="assets/image2.jpeg" alt="People with cellphones" tabindex="0">
      </article>

      <article id="talent">
        <h2 class="main-area--title" tabindex="0">TALENT</h2>
        <img src="assets/image3.jpeg" alt="Talent people" tabindex="0">
      </article>
    </div>
  </div>

  <form class="contact-form" "role="contact-form">
    <label for="name" role="textfield">Name:</label>
    <input id="name" name="name" type="text" placeholder="Enter your name"><br><br>
  
    <label for="lname" role="textfield">Last name:</label>
    <input id="lname" name="lname" type="text" placeholder="Enter your last name"><br><br>
  
    <label for="email" role="textfield">Enter your email:</label>
    <input id="email" name="email" type="email" placeholder="Enter your email"><br><br>
  
    <label role="textarea">Comments:</label><br><br>
    <textarea name="comments" rows="12" cols="35">Send your comments to us.</textarea><br>
    
    <input type="submit" role="button" value="Submit">
  </form>
</main>
`;

export default main;
