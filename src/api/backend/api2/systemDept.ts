// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 获取部门列表 GET /system/depts */
export async function deptList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeptListParams,
  options?: RequestOptions,
) {
  return request<API.DeptEntity[]>('/system/depts', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建部门 POST /system/depts */
export async function deptCreate(body: API.DeptDto, options?: RequestOptions) {
  return request<any>('/system/depts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 查询部门信息 GET /system/depts/${param0} */
export async function deptInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeptInfoParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<API.DeptEntity>(`/system/depts/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新部门 PUT /system/depts/${param0} */
export async function deptUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeptUpdateParams,
  body: API.DeptDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/system/depts/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除部门 DELETE /system/depts/${param0} */
export async function deptDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeptDeleteParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/system/depts/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}
