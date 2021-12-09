const main = `
<main>
  <img role="banner" src="assets/banner-image.jpeg" alt="Banner image, Sunset New York." tabindex="0">

  <article id="program">
    <h2 tabindex="0">PROGRAM</h2>
    <img src="assets/image1.jpeg" alt="Sky with stars" style="max-width:100vh">
  </article>

  <article id="tech">
    <h2 tabindex="0">TECH</h2>
    <img src="assets/image2.jpeg" alt="People with cellphones" style="max-width:100vh">
  </article>

  <article id="talent">
    <h2 tabindex="0">TALENT</h2>
    <img src="assets/image3.jpeg" alt="Talent people" style="max-width:100vh">
  </article>

  <form role="contact-form">
    <label role="textfield" for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>
  
    <label role="textfield" for="lname">Last name:</label>
    <input type="text" id="lname" name="lname" placeholder="Enter your last name"><br><br>
  
    <label role="textfield" for="email">Enter your email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email"><br><br>
  
    <label role="textarea">Comments:</label><br><br>
    <textarea name="comments" rows="12" cols="35">Send your comments to us.</textarea><br>
    
    <input role="button" type="submit" value="Submit">
  </form>
</main>
`;

export default main;
