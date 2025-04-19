<template>
  <ProConfigProvider :theme="btnTheme">
    <component :is="h(Button, { ...$attrs, ...props, type: buttonType }, $slots)" />
  </ProConfigProvider>
</template>
<script lang="ts" setup>
  import { computed, h, useAttrs } from 'vue';
  import { Button } from 'ant-design-vue';
  import { buttonProps, buttonColorPrimary, aButtonTypes } from './button';
  import type { ButtonType, AButtonType } from './button';

  // 在 Vue 3 的 <script setup> 语法中，useAttrs() 和 $attrs 完全等效，它们访问的是同一个透传属性对象
  // useAttrs() 返回的对象和模板中的 $attrs 是同一个引用，两者会同步更新
  const attrs = useAttrs();
  console.log('useAttrs', attrs); // 查看透传的 attributes

  // 仅在 3.3+ 中支持
  // 这个宏可以用来直接在 <script setup> 中声明组件选项，而不必使用单独的 <script> 块
  // 用来显式定义当前组件的名称为 'AButton'
  defineOptions({
    name: 'AButton',
  });

  const props = defineProps({
    ...buttonProps(),
    type: {
      type: String as PropType<ButtonType>,
    },
    // 自定义按钮颜色
    color: String,
  });

  const isCustomType = computed(() => Reflect.has(buttonColorPrimary, props.type!));

  const buttonType = computed<AButtonType>(() => {
    if (props.type && aButtonTypes.includes(props.type)) {
      return props.type as AButtonType;
    } else if (props.color || isCustomType.value) {
      return 'primary';
    }
    return 'default';
  });

  const btnTheme = computed(() => {
    const type = props.type!;
    if (props.color || isCustomType.value) {
      return {
        token: {
          colorPrimary: props.color || buttonColorPrimary[type],
        },
      };
    }
    return undefined;
  });
</script>
