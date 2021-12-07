const main = `
<section>
  <img src="images/banner-image.jpeg" alt="Banner image, Sunset New York." tabindex="0">

  <article id="program" tabindex="0">
    <h2>PROGRAM</h2>
    <img src="images/image1.jpeg" alt="Program" style="max-width:100vh">
  </article>

  <article id="tech" tabindex="0">
    <h2>TECH</h2>
    <img src="images/image2.jpeg" alt="Tech" style="max-width:100vh">
  </article>

  <article id="talent" tabindex="0">
    <h2>TALENT</h2>
    <img src="images/image3.jpeg" alt="Talent" style="max-width:100vh">
  </article>

  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
  
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
  
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email"><br><br>
  
    <label>Comments:</label><br><br>
    <textarea name="comments" rows="12" cols="35">Send your comments to us.</textarea><br>
    
    <input type="submit" value="Submit">
  </form>
</section>
`;

export default main;
