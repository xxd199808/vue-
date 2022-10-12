import Vue from 'vue'
const registerComponent = function(oMenu) {
    let oComponent = () => import('@/views/' + oMenu.router);
    if (!oComponent) {
        return;
    }
    Vue.component(oMenu.code, oComponent);
};

export default registerComponent;