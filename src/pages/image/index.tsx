import React, { Component } from 'react';
import BigImageChange from '../../components/BigImageChange'
import url from './../../static/image/dadada.jpg'
interface State {
  show: boolean,
  userName:string
}
class ImgChange extends Component {
  state: State = {
      userName: '路飞',
      show: true,
  }
  changUserName(){
     //要修改this.state中的值，这是唯一的方法
    this.setState({
       show: !this.state.show
     })
  }
  render() {
    return (
      <div>
        <BigImageChange src={url} show = {this.state.show} onClick={ this.changUserName.bind(this) }/>
      </div>
    )
  }
 }

 export default ImgChange
