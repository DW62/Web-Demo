//定义蛇类
class Sncke{
    //定义蛇头元素对象
    head:HTMLElement;
    //定义整个蛇身体 HTMLCollection是一个实时刷新的集合
    bodies:HTMLCollection;
    //定义蛇的外部容器
    element:HTMLElement;

    constructor(){
       this.head=document.querySelector('#snake>div')!;
       this.element=document.getElementById('snake')!;
       this.bodies=this.element!.getElementsByTagName('div');
       
    }

    //获取蛇头X坐标
    get x(){
        return this.head.offsetLeft;
    }
    //获取蛇头Y坐标
    get y(){
        return this.head.offsetTop;
    }

    //设置蛇头X坐标
    set x(value:number){
        //判断值是否发生变化
        if(this.x===value){
            return;
        }
        //判断x是否超过范围0-290
        if(value<0 || value>290){
            //通过抛出错误来停止程序
            throw new Error('蛇撞墙了！');
        }
        //改变蛇之前判断是否发生调头即向左移动时不能向右移动
        //this.bodies[1]判断是否存在第二节蛇身体
        //(this.bodies[1] as HTMLElement).offsetLeft===value判断蛇第二节身体横坐标是否和当前一致，一致则发生掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft===value){
            //发生掉头则继续向反方向行走
            if(value>this.x){
                //发生向右调头
                value=this.x-10;
            }else{
                //发生向左调头
                value=this.x+10;
            }
        }

        //移动蛇的身体
        this.moveBody();
        //移动蛇头
        this.head.style.left=value+'px';
        //检测是否撞到自己
        this.checkHeadBody();
    }

    //设置蛇头Y坐标
    set y(value:number){
         //判断值是否发生变化
         if(this.y===value){
            return;
        }
         //判断y是否超过范围0-290
         if(value<0 || value>290){
            //通过抛出错误来停止程序
            throw new Error('蛇撞墙了！');
        }

        //改变蛇之前判断是否发生调头即向左移动时不能向右移动
        //this.bodies[1]判断是否存在第二节蛇身体
        //(this.bodies[1] as HTMLElement).offsetLeft===value判断蛇第二节身体横坐标是否和当前一致，一致则发生掉头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop===value){
            //发生掉头则继续向反方向行走
            if(value>this.y){
                //发生向右调头
                value=this.y-10;
            }else{
                //发生向左调头
                value=this.y+10;
            }
        }
        //移动蛇的身体
        this.moveBody();
        //移动蛇头
        this.head.style.top=value+'px';
        //检测是否撞到自己
        this.checkHeadBody();
    }
    //在蛇的容器中增加一个div
    addBody(){
        //beforeend参数表示将元素添加到结束标签之前
        this.element.insertAdjacentHTML('beforeend',"<div></div>");
    }

    //添加身体移动的方法  从最后面开始向前改
    moveBody(){
        //从蛇身体的后面往前遍历
        for(let i=this.bodies.length-1; i>0 ;i--){
            //获取前面身体的位置
            let x=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let y=(this.bodies[i-1] as HTMLElement).offsetTop;
            //将前一个的位置设置给当前身体
            (this.bodies[i] as HTMLElement).style.left=x+'px';
            (this.bodies[i] as HTMLElement).style.top=y+'px';
        }
    }
    //检查头和身体是否相撞
    checkHeadBody(){
        //获取所有身体检测是否能和蛇头坐标发生相撞
        for(let i=1;i<this.bodies.length;i++){
            let bd=this.bodies[i] as HTMLElement;
            if(this.x===bd.offsetLeft && this.y===bd.offsetTop){
                //表示蛇头和身体已经相撞
                throw new Error('撞到自己了，游戏结束！');
            }
        }
    }
}
export default Sncke;