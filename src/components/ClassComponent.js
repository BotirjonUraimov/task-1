import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Jack",
      usd: 0,
      language: "en",
      year: null,
      yosh: null,
      som: 0,
    };
  }
  render() {
    const onNameChange = (e) => {
      this.setState({ name: e.target.value });
    };
    const onCurrencyChange = (e) => {
      this.setState({ usd: e.target.value });
    };

    const transfer = () => {
      const som = 12512 * this.state.usd;
      this.setState({ som: som });
    };

    const transfer2 = () => {
      console.log(typeof +this.state.year);
      const yosh = 2023 - this.state.year;
      this.setState({ yosh: yosh });
    };
    const onYearChange = (e) => {
      this.setState({ year: Number(e.target.value) });
    };

    return (
      <div style={{ flex: "1" }}>
        <h1 className="header_currency" style={{ color: "black" }}>
          Task-3
        </h1>
        <div className="currency">
          <h1 className="header_currency">Currency Exchange</h1>
          <div className="input_box">
            <span>US dollor kiriting</span>
            <input type="number" onChange={onCurrencyChange} />
            <button onClick={transfer}>Transfer</button>
            <span> Bugungi kurs: 1$ = 12512 som</span>
          </div>
          <h3 className="result_currency">
            {this.state.usd} US dollorning o'zbek so'midagi qiymati:{" "}
            {this.state.som}
          </h3>
        </div>
        <div className="currency">
          <h1 className="header_currency">Yoshni chiqarish dasturi</h1>
          <div className="input_box">
            <input type="number" onChange={onYearChange} />
            <button onClick={transfer2}>Aniqlash</button>
            <h3>Year: {this.state.year}</h3>
            <h3>Szning Yoshingiz {this.state.yosh}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
