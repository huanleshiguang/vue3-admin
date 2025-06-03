

type ImportVueFileType = typeof import('*.vue');
type ImportVueFileFnType = () => Promise<ImportVueFileType>;

// 加载views文件夹下面所有的.vue文件
const modulesFiles = import.meta.glob<ImportVueFileType>('../../views/**/*.vue');
console.log('modulesFiles', modulesFiles);

// generate components map  生成路由映射
// Object.entries后的结果-------> key,value形式的数组
// [
//   ['../../views/home/index.vue', () => import('../../views/home/index.vue')],
//   ['../../views/user/list.vue', () => import('../../views/user/list.vue')]
// ]
export const asyncRoutes = Object.entries(modulesFiles).reduce((routes, [url, importFn]) => {
  //  过滤掉login和components下的文件，对key进行重新矫正只保留views后面的文件路径
  if (!/\/(views\/login|components)\//.test(url)) {
    const path = url.replace('../../views/', '').replace('.vue', '');

    routes[path] = importFn as ImportVueFileFnType;
  }

  return routes;
}, {} as Recordable<ImportVueFileFnType>);
// console.log('asyncRoutes', asyncRoutes);
// 生成的routes结构-----------> 
// {
//   system/user/index: import()=>import('../../views/system/user/index.vue'),
//   system/role/index: import()=>import('../../views/system/role/index.vue'),
//   system/menu/index: import()=>import('../../views/system/menu/index.vue'),
//   system/dept/index: import()=>import('../../views/system/dept/index.vue'),
// }
