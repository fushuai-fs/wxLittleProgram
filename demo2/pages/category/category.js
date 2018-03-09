 

Page({
    data: {
      topCategories: [{ "objectId": 0, "title": "菜单", "isShow":false,
       "subCate": [{ "objectId": 11, "title": "子菜单" }, { "objectId": 12, "title": "aasub1" }] }
      ,{"objectId":1,"title":"aa"}
        , { "objectId": 2, "title": "bb" }
        , { "objectId": 3, "title": "cccc" }
        , { "objectId": 4, "title": "ddddd" }
        , { "objectId": 5, "title": "eeeeeee" }
        , { "objectId": 6, "title": "ff" }
        , { "objectId": 7, "title": "g" }
      ],
      contents: [],
      highlight:0, 
      banner:'',
    },
    onLoad: function(){ 
       
    },
    tapTopCategory: function (e) {
      // 拿到objectId，作为访问子类的参数
      var objectId = e.currentTarget.dataset.objectId;
      console.clear();
      console.log(objectId);
      // 查询父级分类下的所有子类
      // var parent = AV.Object.createWithoutData('Category', objectId);
      // this.getCategory(parent);
      // 设定高亮状态 
       this.setData({ highlight: objectId}); 
 
    },
    tapCategoryIsShow:function(e){
      console.clear();
      console.log(e);
      //是否显示子菜单
      this.data.topCategories[0].isShow = !this.data.topCategories[0].isShow;
      var update = this.data.topCategories;
      // this.setData({ topCategories:''});
      console.log(update);
      this.setData({ topCategories:update});
    },
   
   
 
 
 
})