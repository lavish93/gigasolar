import { observable, action, reaction } from 'mobx';
import Constants from '../util/Constants.jsx'
export class MenuStore {
  @observable selectedMenu = undefined;
  @action setSelectedMenu(menuName) {
        this.selectedMenu = menuName;
  }
  getSelectedMenu(){
    return (this.selectedMenu ? this.selectedMenu : Constants.DEFAULT_MENU);
  }
}
export default new MenuStore();
