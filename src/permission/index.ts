/**
 * example
 * path -> ./modules/user
 * <a-button v-if="$auth('user.add')">Button</a-button>
 * path -> ./modules/sys/user
 * <a-button v-if="$auth('sysUser.add')">Button</a-button>
 */

import type { PermissionType } from './permCode';
import type { App, Directive, DirectiveBinding } from 'vue';
import { useUserStore } from '@/store/modules/user';

/**
 * 验证权限
 * @param {PermissionType} perm  权限码
 * @returns {boolean} true | false
 */
export const hasPermission = (permCode: PermissionType) => {
  const permissionList = useUserStore().perms;
  return permissionList.some((n) => n === permCode);
};

const vAuth: Directive = {
  mounted(el: Element, binding: DirectiveBinding<any>) {
    const bindVal = binding.value;

    if (bindVal == undefined) return;

    // 1.Element.remove() 现代浏览器中的 DOM 元素（如 <div>、<button> 等）直接支持 remove() 方法，用于从 DOM 树中移除自身
    // 2.Node.removeChild() 虽然非节点自身方法，但父节点可通过 removeChild() 移除子节点，返回被移除的节点
    // 第二个方法兼容性极佳(包括旧版浏览器)
    if (!hasPermission(bindVal)) {
      el.remove();
    }
  },
};

// 我们通常将vue的插件放到src/plugins/index.ts中，然后通过main.ts引入
export default {
  // app.use(permission) 是 Vue 3 的标准插件安装方式
  // 它会自动调用 permission 对象中的 install 方法

  // 一个插件可以是一个拥有 install() 方法的对象，也可以直接是一个安装函数本身。安装函数会接收到安装它的应用实例和传递给 app.use() 的额外选项作为参数
  // 详情见：https://cn.vuejs.org/guide/reusability/plugins.html
  install(app: App) {
    console.log('install----------4-19');
    app.config.globalProperties.$auth = hasPermission; // 注册全局属性或方法
    app.directive('auth', vAuth); // 注册指令
  },
};
