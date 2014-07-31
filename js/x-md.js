var xProto = Object.create(HTMLElement.prototype); 

//1.创建元素
xProto.createdCallback = function(){
  var txt = this.textContent;
  var breaks = this.getAttribute('data-breaks');
  var smartypants =this.getAttribute('data-smartypants');

  //markdown的参数
  var options = {};

  if(breaks){
    options.breaks = breaks;
  }

  if(smartypants){
    options.smartypants =smartypants;
  }

  var html = marked(txt, options);

  //创建div，将解析后的html放入其中
  var div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
  console.log(this.parentNode.removeChild(this));
};
//2.向文档中插入元素
xProto.attachedCallback = function(){

};
//3.从文档中删除元素
xProto.detachedCallback = function(){

};
//4.添加、修改和删除出一个属性
//xProto.attributeChangedCallback(attrName, oldValue, newValue);

document.register('x-md', {prototype: xProto});