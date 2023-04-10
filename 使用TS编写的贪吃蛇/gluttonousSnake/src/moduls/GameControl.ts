import Sncke from "./Snake";
import Food from "./Food";
import ScroePanel from "./ScroePanel";

//游戏控制器类。来控制其他类
class GameControl{
    sncke:Sncke;
    food:Food;
    scroePanel:ScroePanel;
    //创建一个变量来表示蛇移动的方向即用户按钮按下的方向
    direction:string='';
    //创建一个变量来记录游戏是否结束
    isLive=true;

    constructor(){
        this.food=new Food();
        this.scroePanel=new ScroePanel();
        this.sncke=new Sncke();
        //调用初始化游戏方法
        this.init();
    }

    //初始化游戏
    init(){
        //绑定键盘事件  bind用来解决this指向异常问题将this指向函数
        document.addEventListener('keydown',this.keydowHandler.bind(this));
        //调用蛇移动的方法
        this.run();
    }

    //创建键盘按下事件
    keydowHandler(event:KeyboardEvent){
        //获取用户按下的按键名 event.key
       // console.log(event.key);
       //检测用户按下的按键是否合法
       this.direction=event.key;
    }

    //蛇移动方法
    run(){
        //获取蛇现在坐标
        let x=this.sncke.x;
        let y=this.sncke.y;

        //修改x和y的值
        switch(this.direction){
            case 'ArrowUp':
            case 'Up':
                //向上移动
                y-=10;
            break;
            case 'ArrowDown':
            case 'Down':
                //向下移动
                y+=10;
            break;
            case 'ArrowLeft':
            case 'Left':
                //向左移动
                x-=10;
            break;
            case 'ArrowRight':
            case 'Right':
                //向右移动
                x+=10;
            break;
        }
        //判断是否吃到食物
        this.checkEat(x,y);
        //移动蛇
        try{
            this.sncke.x=x;
            this.sncke.y=y;
        }catch(e){
            alert((e as any).message);
            //将控制游戏是否结束的变量值修改
            this.isLive=false;
        }
        

        //开启定时调用
        this.isLive && setTimeout(this.run.bind(this),300-(this.scroePanel.level-1)*30);
    }

    //顶一个方法来判断蛇是否吃到食物,传递蛇的坐标
    checkEat(X:number,Y:number){
        if(X===this.food.X && Y===this.food.Y) {
            //吃到食物则食物的位置改变
            this.food.change();
            //分数改变
            this.scroePanel.addScore();
            //蛇增加一格
            this.sncke.addBody();
        }
    }
}
export default GameControl;