import './index.scss';
import Button, {ButtonSize,ButtonType } from './../componemts/Button/button'
import Menu from './../componemts/Menu/menu'
import MenuItem from './../componemts/Menu/menuItem'

function Home() {

  return (
    <div className="app">
      <h1>Button</h1>
      <Button btnType={ ButtonType.Primary }>click me</Button>
      <Button btnType={ ButtonType.Danger }>click</Button>
      <Button btnType={ButtonType.Link} href="www.tabidu.com">click here</Button>
      <h1>Menu</h1>
      <Menu onSelect={(val)=>{console.log(val)} } mode="vertical">
        <MenuItem>123</MenuItem>
        <MenuItem disabled={true}>456</MenuItem>
        <MenuItem>789</MenuItem>
      </Menu>
      
    </div>
  );
}
export default Home
