import "./App.css";

function CodeTest() {
  return (
    <div className="CodeTest">
      <header className="App-header">
        <div className="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </div>
        <button type="button" className="btn btn-outline-success">
          Pfff
        </button>
        <img
          src="https://www.icegif.com/wp-content/uploads/laughing-funny.gif"
          alt=""
          className="logo"
        ></img>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>
        </div>
      </header>
    </div>
  );
}

export default CodeTest;
