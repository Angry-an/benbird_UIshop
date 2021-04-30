import react from 'react'
import Childcom from './child'
interface State {
  text:string,
}
class Receive extends react.Component {
  state: State = {
    text: '父组件传值',
  }
  clickF = () => {
    this.setState({
      text:'改变父组件传值'
    })
  }
  render() {
    return (
      <div>
        <div onClick={this.clickF}>22222222222222</div>
        <Childcom textC={this.state.text}/>
      </div>
    )
   }
  // componentDidMount() {
  //   console.log('componentDidMount 执行了')
  //  }
}

export default Receive
