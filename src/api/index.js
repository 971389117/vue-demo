import request from '@/utils/request'

// 获取分类
export function category() {
  return request({
    url: '/getJoke?page=1&count=2&type=video',
    method: 'get',
  })
}
