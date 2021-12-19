const header = `
<header>
  <h1 tabindex="0">Make Huge Moves.</h1>

  <div role="regional-menu">
    <label for="lenguages" role="lenguage-list">Lenguage</label>
      <select id="lenguages" name="lenguages">
        <option value="0">ES</option>
        <option value="1">EN</option>
      </select>

    <label for="currencies" role="currency-list">Currency</label>
      <select id="currencies" name="currencies">
        <option value="0">USD</option>
        <option value="1">COP</option>
      </select>
  </div>

  <div role="main-menu">
    <img src="assets/logo.png" alt="Huge logo" tabindex="0">

    <nav role="navigation">
      <a href="#program">Program</a>
      <a href="#tech">Tech</a>
      <a href="#talent">Talent</a>
    </nav>

  </div>
</header>
`;

export default header;
