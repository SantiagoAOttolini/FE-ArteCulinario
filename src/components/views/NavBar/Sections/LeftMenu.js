import React from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key='Start'>
        <a href='/'>Inicio</a>
      </Menu.Item>
      <Menu.Item key='food'>
        <a href='/foodCompare'>Comparador de alimento</a>
      </Menu.Item>
      <Menu.Item key='controler'>
        <a href='/premium'>Premium</a>
      </Menu.Item>
      <SubMenu title={<span>Salud y bienestar</span>}>
        <MenuItemGroup title=''>
          <Menu.Item key='metabolic'>
            <a href='/bmrCalculator'>Analizador metabolico</a>
          </Menu.Item>
          <Menu.Item key='controler'>
            <a href='/weightControl'>Controlador de peso</a>
          </Menu.Item>
          <Menu.Item key='controler'>
            <a href='/Rewards'>Beneficios exclusivos</a>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  )
}

export default LeftMenu
