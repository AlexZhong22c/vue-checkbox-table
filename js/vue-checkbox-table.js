var vm = new Vue({
  el: '#vuetable',
  data: {
    columns: {
      name: '老师',
      TSubject: '科目',
      TClass: '授课班级',
      tel: '电话'
    },
    checkedIds: [],
    isAllChecked: false,
    users: [{
      id: '1111',
      name: '刘一',
      TClass: ['七年级1班', '七年级2班'],
      TSubject: '语文',
      tel: '155-2120-4567'
    }, {
      id: '2222',
      name: '陈二',
      TClass: ['八年级1班', '八年级2班'],
      TSubject: '数学',
      tel: '155-4550-4457'
    }, {
      id: '3333',
      name: '张三',
      TClass: ['七年级1班', '九年级1班'],
      TSubject: '英语',
      tel: '155-2121-7674'
    }, {
      id: '4444',
      name: '李四',
      TClass: ['九年级1班', '九年级2班'],
      TSubject: '物理',
      tel: '155-3456-8654'
    }]
  },
  computed: {
  },
  methods: {
    globalCheck: function () {
      if (this.checkedIds.length === 0) {
        for (var i = 0; i < this.users.length; i++) {
          this.checkedIds.push(this.users[i].id)
        }
      } else if (this.checkedIds.length === this.users.length) {
        this.checkedIds = []
      } else {
        this.checkedIds = []
        for (var j = 0; j < this.users.length; j++) {
          this.checkedIds.push(this.users[j].id)
        }
      }
    },
    addUser: function () {
      alert('弹出一个模态框，让用户填写好信息，再发给后台')
    },
    delUser: function () {
      alert('将checkedIds数组发给后台')
    },
    modifyUser: function () {
      alert('弹出一个模态框，让用户修改当前条目信息，再发给后台')
    }
  },
  watch: {
    'checkedIds': {// 深度 watcher
      handler: function (val, oldVal) {
        if (this.checkedIds.length === this.users.length) {
          this.isAllChecked = true
        } else {
          this.isAllChecked = false
        }
      },
      deep: true
    }
  }
})
//   
/* title:vue-table
*  author: AlexZhong
* date: 2017-04-14
*/
//   

