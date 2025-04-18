// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 下线指定在线用户 POST /system/online/kick */
export async function onlineKick(body: API.KickDto, options?: RequestOptions) {
  return request<any>('/system/online/kick', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询当前在线用户 GET /system/online/list */
export async function onlineList(options?: RequestOptions) {
  return request<API.OnlineUserInfo[]>('/system/online/list', {
    method: 'GET',
    ...(options || {}),
  });
}
