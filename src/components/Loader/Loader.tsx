import React from "react";
import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";
import "./Loader.scss";

const antIcon = <LoadingOutlined style={{fontSize: 96, color: "#ff7875"}} spin/>;

export const Loader = () => <div className="loader"><Spin indicator={antIcon}/></div>;
