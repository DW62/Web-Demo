
//定义食物类
class Food{
    //定义一个属性来表示食物这个元素
    element: HTMLElement;

    constructor(){
        //给食物元素赋值 !表示值不可能为空
        this.element=document.getElementById('food')!;
    }

    //设置获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    //设置获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物位置方法
    change(){
        //食物的位置最小是0，最大是290
        //蛇每次移动一格，所以食物的位置必须是一格的倍数
        //设置数据top和left值
        let top=Math.round(Math.random()*29)*10;
        let left=Math.round(Math.random()*29)*10;
        this.element.style.left=left+'px';
        this.element.style.top=top+'px';
    }
}

//测试
// const food=new Food();
// console.log(food.X, food.Y);
// food.change();

export default Food;