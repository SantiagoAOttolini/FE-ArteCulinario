/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../Security Model/Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Fallo el login");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Entrar</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Registrarse</a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item>
          <div className="containerLogin">
            <div className="loginName btn btn-info  text-white rounded h4 text-left">
              <p>{user.userData && user.userData.name}</p>
            </div>
            <div className="loginName btn btn-info  text-white rounded h4 text-left ml-2">
              <p>{user.userData && user.userData.accountType}</p>
            </div>
          </div>
        </Menu.Item>

        <SubMenu
          title={
            <span>
              <img
                className="imgAvatar"
                id="userAvatar"
                src={user.userData && user.userData.image}
              ></img>
            </span>
          }
        >
          <MenuItemGroup title="">
            <Menu.Item key="setting:2">
              <a href="/changePassword">Cambiar contraseña</a>
            </Menu.Item>

            {user.userData &&
            user.userData.email === "facundo_loberse@hotmail.com" ? (
              <Menu.Item key="addFood">
                <a className="containerLogout" href="/addFood">
                  Agregar alimento
                </a>
              </Menu.Item>
            ) : (
              ""
            )}
            {user.userData &&
            user.userData.email === "facundo_loberse@hotmail.com" ? (
              <Menu.Item key="deleteFood">
                <a className="containerLogout" href="/deleteFood">
                  Borrar alimento
                </a>
              </Menu.Item>
            ) : (
              ""
            )}
            {user.userData &&
            user.userData.email === "facundo_loberse@hotmail.com" ? (
              <Menu.Item key="addReward">
                <a className="containerLogout" href="/addReward">
                  Agregar local
                </a>
              </Menu.Item>
            ) : (
              ""
            )}
            {user.userData &&
            user.userData.email === "facundo_loberse@hotmail.com" ? (
              <Menu.Item key="deleteReward">
                <a className="containerLogout" href="/deleteReward">
                  Borrar local
                </a>
              </Menu.Item>
            ) : (
              ""
            )}
            {user.userData &&
            user.userData.email === "facundo_loberse@hotmail.com" ? (
              <Menu.Item key="Audits">
                <a className="containerLogout" href="/Audits">
                  Auditoria
                </a>
              </Menu.Item>
            ) : (
              ""
            )}

            {user.userData &&
            user.userData.email === "facundo_loberse@hotmail.com" ? (
              <Menu.Item key="Backup">
                <a className="containerLogout" href="/Backup">
                  Backup
                </a>
              </Menu.Item>
            ) : (
              ""
            )}
            <Menu.Item key="logout">
              <a className="containerLogout" onClick={logoutHandler}>
                Logout
              </a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
