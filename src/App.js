function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img
            alt=''
            width={40}
            height={40}
            src="/img/logo.svg"
          />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин якісного взуття</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="basket">
            <img
              alt=''
              width={18}
              height={18}
              src="/img/basket.svg"
            />
            <span>1205 грн.</span>
          </li>
          <li>
            <img
              alt=''
              width={18}
              height={18}
              src="/img/user.svg"
            />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 className="cardTop">Наш асортимент</h1>


        <div className="sneakers">
        <div className="card">
          <img
            src="/img/sneakers/1.jpg"
            alt=""
            width={133}
            height={112}
          />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="cardBottom"></div>
          <div className="cardPrice">
            <span>Ціна:</span>
            <strong>3 499 грн.</strong>
          </div>
          <button className="button">
            <img
              src="/img/add_button.svg"
              alt=""
              width={11}
              height={11}
            />
          </button>
        </div>
        <div className="card">
          <img
            src="/img/sneakers/2.jpg"
            alt=""
            width={133}
            height={112}
          />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="cardBottom"></div>
          <div className="cardPrice">
            <span>Ціна:</span>
            <strong>3 499 грн.</strong>
          </div>
          <button className="button">
            <img
              src="/img/add_button.svg"
              alt=""
              width={11}
              height={11}
            />
          </button>
        </div>
        <div className="card">
          <img
            src="/img/sneakers/3.jpg"
            alt=""
            width={133}
            height={112}
          />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="cardBottom"></div>
          <div className="cardPrice">
            <span>Ціна:</span>
            <strong>3 499 грн.</strong>
          </div>
          <button className="button">
            <img
              src="/img/add_button.svg"
              alt=""
              width={11}
              height={11}
            />
          </button>
        </div>
        <div className="card">
          <img
            src="/img/sneakers/4.jpg"
            alt=""
            width={133}
            height={112}
          />
          <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
          <div className="cardBottom"></div>
          <div className="cardPrice">
            <span>Ціна:</span>
            <strong>3 499 грн.</strong>
          </div>
          <button className="button">
            <img
              src="/img/add_button.svg"
              alt=""
              width={11}
              height={11}
            />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
