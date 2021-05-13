import './index.scss';
import Button, {ButtonSize,ButtonType } from './../componemts/Button/button'
import Menu from './../componemts/Menu/menu'
import MenuItem from './../componemts/Menu/menuItem'
import SubMenu from './../componemts/Menu/subMenu'
function Home() {

  return (
    <div className="app">
      <h1>Button</h1>
      <Button btnType={ ButtonType.Primary }>click me</Button>
      <Button btnType={ ButtonType.Danger }>click</Button>
      <Button btnType={ButtonType.Link} href="www.tabidu.com">click here</Button>
      <h1>Menu</h1>
      <Menu onSelect={(val) => { console.log(val) }} defaultIndex={'0'}>
         <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled={ true }>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
       <SubMenu title="测试submenu2">
            <MenuItem>123</MenuItem>
            <MenuItem>456</MenuItem>
            <MenuItem>789</MenuItem>
        </SubMenu>
      </Menu>
      
    </div>
  );
}
export default Home
