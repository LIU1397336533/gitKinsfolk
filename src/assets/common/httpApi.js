
import { post, get } from './serverApi'
// let baseUre = 'https://www.fastmock.site/mock/353b3ff6ec4bb5e23761589b516b7615/api';
// 获取验证码
// export const postCode = (phonecode, ipone) =>{
//     instance.post(`/code`,{phoneCode:phonecode,phone:ipone}).then(res => {
//         console.log(res);
//           return res
//         })  
// }

// const postCode = (data) => {
//   return post(url, data)
// }
const getCategory = (data) => {
  return post('/category', data)
}
const getNames = (data) => {
  return post('/names', data)
}
const getmechanicalList = (data) => {
  return get('/jixie', { params: data })
}
const getNavigateTree = (data) => {
  return get('/navigate-tree', { params: data })
}
export {
  getmechanicalList,
  getNavigateTree,
  getCategory,
  getNames
}


