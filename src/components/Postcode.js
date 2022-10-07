import React, { Component } from 'react';
import DaumPostcode from 'react-daum-postcode';

class Postcode extends Component {

onCompletePost=(data)=>{
  // console.log(data);
  // console.log(data.address);
  this.props.onChangeAddress1( data.zonecode, data.address ); //프롭스 함수에 아규먼트(전달인자) 값으로 전달
}

  render() {
    const postStyle = {
      position:'fixed',
      top:'50%',
      left:'50%',
      width:'400px',
      height:'500px',
      background:'#fff',
      zIndex:'2',
      border:'1px solid #ccc',
      marginLeft:'-200px',
      marginTop:'-250px'
    }
    return (
      <div>
        <DaumPostcode 
        style={postStyle}
        autoClose 
        onComplete={this.onCompletePost} 
        />
      </div>
    );
  }
}

export default Postcode;