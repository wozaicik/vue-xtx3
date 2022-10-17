// 提供首页相关API函数

import request from '@/utils/request'

/**
 * 获取品牌数据
 * @param {Integer} limit -品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告轮播图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}
