import './index.scss';
import Button, {ButtonSize,ButtonType } from './../componemts/Button/button'
import Test from './../componemts/test/index'
function Home() {

  return (
    <div className="app">
      <h1 className="title1">hello word</h1>
      <Button btnType={ ButtonType.Primary }>click me</Button>
      <Button btnType={ ButtonType.Danger }>click</Button>
      <Button btnType={ButtonType.Link} href="www.tabidu.com">click here</Button>
      <Test></Test>
    </div>
  );
}
export default Home
