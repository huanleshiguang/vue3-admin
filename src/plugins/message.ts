import { message } from 'ant-design-vue';
import type { App } from 'vue';
export default {
  install(app: App) {
    message.config({ duration: 2 });
    app.config.globalProperties.$message = message;
    // 可选：全局配置默认时长
  },
};
