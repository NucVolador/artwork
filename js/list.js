$('#good-rule .rule-item a').click(function(e){
    //name--获取当前类别名称
    //newValue--要修改的类别项的值
    //value--由搜索类别值组成的数组
    var name = $(e.target).context.parentNode.id;
    var newValue = $(e.target).context.innerText;
    var value = $(`form[name="category"] input[name=${name}]`).val().split(" ");
    if($(e.target).attr('class') === 'active'){
        $(e.target).attr('class','')
        for(var i = 0;i<value.length;i++){
            if(value[i] === newValue){
                value.splice(i,1);
            }
        }
    }else{
        $(e.target).attr('class','active')
        value.push(newValue);
    }
    $(`form[name="category"] input[name=${name}]`).val(value.join(" "));
});