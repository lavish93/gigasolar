import { observable, action, reaction } from 'mobx';
import Constants from '../util/Constants.jsx'
export class MenuStore {
  @observable selectedMenu = Constants.DEFAULT_MENU;
  @action setSelectedMenu(menuName) {
        this.selectedMenu = menuName;
  }
  getSelectedMenu(){
    return this.selectedMenu;
  }
}
export default new MenuStore();
