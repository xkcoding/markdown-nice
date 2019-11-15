import {observable, action} from "mobx";
import {VERSION, VERSION_NUM} from "../utils/constant";

class Dialog {
  @observable isImageOpen = false;

  @observable isLinkOpen = false;

  @observable isAboutOpen = false;

  @observable isVersionOpen = false;

  @observable isFormOpen = false;

  @action
  setImageOpen = (isImageOpen) => {
    this.isImageOpen = isImageOpen;
  };

  @action
  setLinkOpen = (isLinkOpen) => {
    this.isLinkOpen = isLinkOpen;
  };

  @action
  setAboutOpen = (isAboutOpen) => {
    this.isAboutOpen = isAboutOpen;
  };

  @action
  setVersionOpen = (isVersionOpen) => {
    this.isVersionOpen = isVersionOpen;
  };

  @action
  setFormOpen = (isFormOpen) => {
    this.isFormOpen = isFormOpen;
  };
}

const store = new Dialog();

const isVersionDiff = localStorage.getItem(VERSION) !== VERSION_NUM;
if (isVersionDiff) {
  store.isVersionOpen = true;
  // 设置，不打开版本弹窗
  store.isVersionOpen = false;
  localStorage.setItem(VERSION, VERSION_NUM);
}

export default store;
