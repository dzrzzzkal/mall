// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common' ,
//         'components': '@/components',
//         'network': '@/network',
//         'router': '@/router',
//         'views': '@/views'
//       }
//     }
//   }
// }

// const path = require('path');        //引入path模块
// function resolve(dir){
//     return path.join(__dirname,dir)  //path.join(__dirname)设置绝对路径
// }
// module.exports={
//     chainWebpack:(config)=>{
//         config.resolve.alias
//             //set第一个参数：设置的别名，第二个参数：设置的路径
//             .set('@',resolve('./src'))
//             .set('assets',resolve('@/assets'))
//             .set('components',resolve('@/components'))
//             .set('views',resolve('@/views'))
//     }
// }


// 貌似resove(路径)内不能用@代替
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('common',resolve('src/common'))
      .set('components',resolve('src/components'))
      .set('network',resolve('src/network'))
      .set('router',resolve('src/router'))
      .set('store',resolve('src/store'))
      .set('views',resolve('src/views'))
  }
}
