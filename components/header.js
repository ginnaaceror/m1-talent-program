const header = `
<header class="container-header">
  <div class="top-bar">
    <h1 class="top-bar__text" tabindex="0">Make Huge Moves.</h1>

    <div class="top-bar__menu" role="regional-menu">
      <label for="lenguages" role="lenguage-list"><b>Lenguage</b></label>
        <select class="top-bar__menu__option" id="lenguages" name="lenguages">
          <option value="0">ES</option>
          <option value="1">EN</option>
        </select>

      <label for="currencies" role="currency-list"><b>Currency</b></label>
        <select class="top-bar__menu__option" id="currencies" name="currencies">
          <option value="0">USD</option>
          <option value="1">COP</option>
        </select>
    </div>
  </div>

  <div class="main-menu" role="main-menu">
    <img class="main-menu__logo" src="assets/logo.png" alt="Huge logo" tabindex="0">

    <nav class="main-menu__links" role="navigation">
      <a href="#program">Program</a>
      <a href="#tech">Tech</a>
      <a href="#talent">Talent</a>
    </nav>

  </div>
</header>
`;

export default header;
