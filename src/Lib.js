import React, {Component} from "react";
import PropTypes from "prop-types";
import {Result} from "antd";
import {Provider} from "mobx-react";

import "./index.css";

import App from "./App";

import content from "./store/content";
import userInfo from "./store/userInfo";
import navbar from "./store/navbar";
import dialog from "./store/dialog";
import imageHosting from "./store/imageHosting";

import {isPC} from "./utils/helper";
import appContext from "./utils/appContext";
import SvgIcon from "./icon";
import {solveWeChatMath, solveZhihuMath, solveHtml} from "./utils/converter";
import {LAYOUT_ID} from "./utils/constant";

class Lib extends Component {
  getWeChatHtml() {
    const layout = document.getElementById(LAYOUT_ID); // 保护现场
    const html = layout.innerHTML;
    solveWeChatMath();
    const res = solveHtml();
    layout.innerHTML = html; // 恢复现场
    return res;
  }

  getZhihuHtml() {
    const layout = document.getElementById(LAYOUT_ID); // 保护现场
    const html = layout.innerHTML;
    solveZhihuMath();
    const res = solveHtml();
    layout.innerHTML = html; // 恢复现场
    return res;
  }

  render() {
    const {defaultTitle, defaultText, onTextChange} = this.props;
    const appCtx = {
      defaultTitle,
    };

    return (
      <Provider content={content} userInfo={userInfo} navbar={navbar} dialog={dialog} imageHosting={imageHosting}>
        {isPC() ? (
          <appContext.Provider value={appCtx}>
            <App defaultText={defaultText} onTextChange={onTextChange} />
          </appContext.Provider>
        ) : (
          <Result
            icon={<SvgIcon name="smile" style={style.svgIcon} />}
            title="请使用 PC 端打开排版工具"
            // subTitle="更多 Markdown Nice 信息，请扫码关注公众号「牧码啦」"
            // extra={
            //   <img
            //     alt=""
            //     src="https://draw-wechat.oss-cn-hangzhou.aliyuncs.com/%E4%BA%8C%E7%BB%B4%E7%A0%81_20190823124950.gif"
            //   />
            // }
          />
        )}
      </Provider>
    );
  }
}

const style = {
  svgIcon: {
    width: "72px",
    height: "72px",
  },
};

Lib.defaultProps = {
  defaultTitle: "",
  defaultText: "",
  onTextChange: () => {},
};
Lib.propTypes = {
  defaultTitle: PropTypes.string,
  defaultText: PropTypes.string,
  onTextChange: PropTypes.func,
};

export default Lib;
