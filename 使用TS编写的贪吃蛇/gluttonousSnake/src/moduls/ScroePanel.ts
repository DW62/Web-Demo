
//定义记分牌的类
class ScroePanel{
    //设置分数属性
    score=0;
    //设置等级属性
    level=1;
    //设置分数对象
    scoreEle:HTMLElement;
    //设置等级对象
    levelEle:HTMLElement;
    //设置一个变量来限制等级
    maxLevel:number;
    //设置一个变量表示多少分数升一级
    upScore:number;

    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle=document.getElementById('score')!;
        this.levelEle=document.getElementById('level')!;
        this.maxLevel=maxLevel;
        this.upScore=upScore;
    }

    //设置一个加分的方法
    addScore(){
        this.score++;
        //修改页面上分数对象的值
        this.scoreEle.innerHTML=this.score+'';

        //当分数每加upScore等级升一级
        if(this.score%this.upScore==0){
            this.levelUp();
        }
    }
    //提升等级的方法
    levelUp(){
        if(this.level<=this.maxLevel){
            this.level++;
            //修改页面上等级元素
            this.levelEle.innerHTML=this.level+'';
        }
    }
}

export default  ScroePanel;