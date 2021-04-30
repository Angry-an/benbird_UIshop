import react from 'react'

class Childcom extends react.Component<any,any> {
  constructor(props: string) {
    super(props)
    this.state = {text:'子组件文本'}
  }
  componentWillMount() {
    console.log('componentWillMount 111')
   }

  componentWillReceiveProps(nextProps: any,) { 
    console.log(nextProps,'componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps:any, nextState:any) {
    console.log(nextProps, nextState,arguments, 'shouldComponentUpdate 333')
         return true

  }
  componentWillUpdate(nextProps: any, nextState: any) {
     console.log(nextProps, nextState, 'componentWillUpdate 4444')
  }
  componentDidUpdate(nextProps: any, nextState: any) {
    console.log(nextProps, nextState, 'componentDidUpdate 555')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount 666')
  }
   render() {
    console.log('render 执行了 77')
    return (
      <div>
        <p>{this.state.text}</p>
        <p>{this.props.textC}</p>
      </div>
    )
   }
  componentDidMount() {
    console.log('componentDidMount 222')
  }
}
export default Childcom
