import type { App } from 'vue';
// import useFormModal from '@/hooks/useFormModal'
// import useModal from '@/hooks/useModal/index';
import permission from '@/permission';
import message from '@/plugins/message';
/**
 * 注册全局方法
 * @param app
 */
export function setupGlobalMethods(app: App) {
  // app.use(permission) 是 Vue 3 的标准插件安装方式
  // 它会自动调用 permission 对象中的 install 方法
  app.use(permission); // 安装permission插件
  app.use(message); // 安装message插件
  // app.use(useFormModal)
  // app.use(useModal);
  // 全局挂载Reflect反射对象,以便在vue模板中使用

  // Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handler 的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。
  // 描述:
  // 与大多数全局对象不同 Reflect 并非一个构造函数，所以不能通过 new 运算符对其进行调用，或者将 Reflect 对象作为一个函数来调用。Reflect 的所有属性和方法都是静态的（就像 Math 对象）。
  // 常用方法：
  // 1、静态方法 Reflect.deleteProperty() 允许用于删除属性。它很像 delete operator ，但它是一个函数。
  // 2、静态方法 Reflect.has() 允许我们使用函数来检查对象是否具有某个属性。它类似于 in 操作符，但它是一个函数。
  // 额外介绍 in 操作符  const car = { make: "Honda", model: "Accord", year: 1998 };  console.log("make" in car); Expected output: true
  // 3.Reflect.get() 方法与从 对象 (target[propertyKey]) 中读取属性类似，但它是通过一个函数执行来操作的。
  // 4.Reflect.set() 方法允许我们使用函数来设置属性。它类似于 target[propertyKey] = value，但它是一个函数。
  app.config.globalProperties.Reflect = Reflect;
}
