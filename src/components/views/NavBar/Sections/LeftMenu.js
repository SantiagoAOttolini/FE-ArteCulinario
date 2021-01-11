import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="Start">
      <a href="/">Inicio</a>
    </Menu.Item>
    <Menu.Item key="food">
      <a href="/foodCompare">Comparador de alimento</a>
    </Menu.Item>
    <Menu.Item key="metabolic">
      <a href="/metabolicAnalyzer">Analizador metabolico</a>
    </Menu.Item>
    <Menu.Item key="controler">
      <a href="/weightControler">Controlador de peso</a>
    </Menu.Item>
    
  </Menu>
  )
}

export default LeftMenu