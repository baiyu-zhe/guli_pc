import request from '@/utils/request';

// 所有讲师列表
export function pageTeacherCondition(page, limit, params) {
  return request({
    url: `/eduService/eduTeacher/pageTeacherCondition/${page}/${limit}`,
    method: 'get',
    params
  });
}
