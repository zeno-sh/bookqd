export default [{
    name: '分类管理',
    icon: 'android-share-alt',
    routerName: "Category"
}, 
// {
//     name: '出版管理',
//     icon: 'share',
//     routerName: "Press"
// },
 {
    name: '用户管理',
    icon: 'android-contact',
    routerName: "User"
}, {
    name: '图书管理',
    icon: 'ios-book',
    routerName: "Book"
}, {
    name: '图书借还',
    icon: 'android-exit',
    routerName: "Borrow"
}, {
    name: '系统日志',
    icon: 'ios-cog',
    routerName: "Ranking"
}].concat([{
    name: '借阅记录',
    hide: true,
    routerName: "Record"
}])