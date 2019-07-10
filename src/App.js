import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state={nominal : null , error : ''}

  
  getNominal = () => {
    if(/^[0-9]/.test(this.refs.nominal.value) === false){
      this.setState({error:'input hanya boleh angka'})
    }
    if(this.refs.nominal.value < 0){
      this.setState({error : 'Masukan nominal uang yang valid'})
    }else{
      this.setState({nominal : this.refs.nominal.value})
    }
    
  }

  
  renderJsx = () => {
    var pecahanUang = [100000,50000,20000,10000,5000,2000,1000,500,200,100,50]
    var nominal = this.state.nominal
    var jumlahPerPecahan = 0
    var jsx = pecahanUang.map((val,i) => {
      jumlahPerPecahan = parseInt(nominal / val)
      nominal = nominal - (jumlahPerPecahan*val)
      return(
        <div>
        <tr>
          <td>Jumlah Uang Rp.{val} adalah {jumlahPerPecahan}</td>
        </tr>
        <tr>
          {
            i===10&&nominal!==0?<tr><td>Tidak tersedia Rp.{nominal}</td></tr>:null
          }
        </tr>
        </div>
        
      )
    })

    if(this.state.nominal){
      return jsx
    } 
  }

  renderError = () => {
    if(this.state.error){
      return (<div className="container">
        <h4 className="mt-4" style={{color: 'red', fontSize: '18px'}}>{this.state.error}</h4>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div>
      <div className="top">
        <div className="top-1 ml-3">
          Konversi Pecahan Uang
        </div>
        <div className="top-2 ml-3">
          Jumlah Pecahan Uang Efektif
        </div>
        <div className="top-3 ml-3">
          Output
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper-1">
          <div className="mt-4 ml-3">
            <p>David Lohanda</p>
            <p>Purwadhika Start Up and Coding School</p>
          </div>
        </div>
        <div className="wrapper-2">
          <div className="container">
            <input type="number"  placeholder="Masukan Nominal Uang" ref="nominal" className="mt-4" onChange={()=>this.setState({error:''})}/>
            <button onClick={this.getNominal} className="btn mt-2" style={{color:'white', backgroundColor:'black'}}>Submit</button>
          </div>
        </div>
        <div className="wrapper-3">
            {this.renderError()}
            <div className="px-3  text-center ml-3 mt-4" style={{width:'30vw'}}>
              <tbody>
                {this.renderJsx()}
              </tbody>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
