type ImportVueFileType = typeof import('*.vue');
type ImportVueFileFnType = () => Promise<ImportVueFileType>;

// auto load
const modulesFiles = import.meta.glob<ImportVueFileType>('../../views/**/*.vue');
console.log('modulesFiles', modulesFiles);

// generate components map  生成路由映射
export const asyncRoutes = Object.entries(modulesFiles).reduce((routes, [url, importFn]) => {
  if (!/\/(views\/login|components)\//.test(url)) {
    const path = url.replace('../../views/', '').replace('.vue', '');

    routes[path] = importFn;
  }

  return routes;
}, {} as Recordable<ImportVueFileFnType>);

// console.log('asyncRoutes', asyncRoutes);
