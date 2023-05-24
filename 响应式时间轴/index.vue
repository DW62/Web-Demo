<!-- 时间轴组件 -->
<template>
    <div class="shell" ref="shell" :style="{ 'backgroundImage': 'url(' + defaultImg + ')' }" id="shell">
        <div class="header" ref="header">
            <h2 class="title">时间轴</h2>
            <h3 class="subtitle">BILIBILI</h3>
        </div>
        <div class="timeline">
            <div class="item item--active" v-for="item in list" :data-text="item.text">
                <div class="content">
                    <img :src='item.src' alt="" class="img">
                    <h2 class="content-title">{{ item.content }}</h2>
                    <p class="content-desc">
                        {{ item.desc }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
const shell = ref()
const header = ref()
//定义数据列表
const list: item[] = reactive<item[]>([
    { text: "《你的孤独，虽败犹荣》", src: "https://www.toopic.cn/public/uploads/small/1658045070864165804507081.png", content: 2000, desc: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。" },
    { text: "《你的孤独，虽败犹荣》", src: "https://www.toopic.cn/public/uploads/image/20200404/20200404182849_78999.jpg", content: 2000, desc: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。" },
    { text: "《你的孤独，虽败犹荣》", src: "https://www.toopic.cn/public/uploads/small/1658043938262165804393852.jpg", content: 2000, desc: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。" },
    { text: "《你的孤独，虽败犹荣》", src: "https://www.toopic.cn/public/uploads/small/1642755454773164275545428.jpg", content: 2000, desc: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。" },
    { text: "《你的孤独，虽败犹荣》", src: "https://www.toopic.cn/public/uploads/image/20200413/20200413223600_84531.jpg", content: 2000, desc: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。" },
    { text: "《你的孤独，虽败犹荣》", src: "https://www.toopic.cn/public/uploads/small/163756299623163756299625.png", content: 2000, desc: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。" },
    { text: "《你的孤独，虽败犹荣》", src: "https://www.toopic.cn/public/uploads/small/1642750877373164275087782.jpg", content: 2000, desc: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。" },
    { text: "《你的孤独，虽败犹荣》", src: "https://www.toopic.cn/public/uploads/small/165804312036816580431202.jpg", content: 2000, desc: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。" }
])
//页面默认背景图片
const defaultImg = ref(list[0].src)
// 实时滚动条高度
const scrollTop = () => {
    //页面高度
    // let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight
    //视图高度
    // let screenHeight = document.documentElement.clientHeight || document.body.clientHeight
    //滚动条滚动最大高度
    // let scrollhight = pageHeight - screenHeight
    //当前滚动条滚动高度
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    //每一个元素的高度
    const itemHeight = document.querySelectorAll('.item')[0].scrollHeight

    //头部高度
    const headerHeight = header.value.scrollHeight

    //当前滚动的元素为
    const activeNumber = Math.floor((scroll - headerHeight) / itemHeight) < 0 ? 0 : Math.floor((scroll - headerHeight) / itemHeight)

    //获取所有元素列表
    const itemList = document.querySelectorAll('.item')

    //遍历元素设置激活属性
    itemList.forEach((item, index) => {
        if (activeNumber === index) {
            //给元素添加激活属性
            item.classList.add('item--active')
            //img标签的src值
            const src = item.getElementsByTagName("img")[0].src
            //改变默认背景图片
            defaultImg.value = src
        } else {
            //移除元素激活属性
            item.classList.remove('item--active')
        }
    })
}

onMounted(() => {
    // 监听滚动条位置
    window.addEventListener('scroll', scrollTop, true)
})
//定义元素类型
interface item {
    text: string,
    src: string,
    content: number,
    desc: string
}
</script>
<style scoped lang="scss">
.shell {
    width: 100%;
    position: relative;
    overflow: auto;
    padding: 80px 0;
    transition: 0.3s ease 0s;
    background-attachment: fixed;
    background-size: cover;
}

.header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
}

.title {
    color: #fff;
    font-size: 46px;
    font-weight: normal;
    margin-top: 30px;
}

.timeline {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 700px;
    position: relative;
}

.content-title {
    font-weight: normal;
    font-size: 66px;
    margin: -10px 0 0 0;
    transition: 0.4s;
    padding: 0 10px;
    box-sizing: border-box;
    color: #e7f1ff;
}

.content-desc {
    margin: 0;
    font-size: 15px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    line-height: 25px;
}

.timeline:before {
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    content: "";
    background: rgba(255, 255, 255, 0.07);
}

.item {
    padding: 40px 0;
    opacity: 0.3;
    filter: blur(2px);
    transition: 0.5s;
    box-sizing: border-box;
    width: calc(50% - 40px);
    display: flex;
    position: relative;
    transform: translateY(-80px);
    margin-top: 50px;
}

.item:before {
    content: attr(data-text);
    letter-spacing: 3px;
    width: 100%;
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    top: 70%;
    margin-top: -5px;
    padding-left: 15px;
    opacity: 0;
    right: calc(-100% - 56px);
    font: 900 20px '';
    letter-spacing: 5px;
}

.item:nth-child(even) {
    align-self: flex-end;
}

.item:nth-child(even):before {
    right: auto;
    text-align: right;
    left: calc(-100% - 56px);
    padding-left: 0;
    border-left: none;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    padding-right: 15px;
}

.item--active {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
}

.item--active:before {
    top: 30%;
    transition: 0.3s all 0.2s;
    opacity: 1;
}


.img {
    max-width: 100%;
    width: 310px;
    height: 179px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
}

.footer {
    padding: 95px 0;
    text-align: center;
}

.footer a {
    color: #999;
    display: inline-block;
}

@media only screen and (max-width: 767px) {
    .shell {
        padding: 0;
    }

    .item {
        align-self: baseline !important;
        width: 100%;
        height: 400px;
        padding: 0 30px 150px 80px;
        transform: translateY(-0px);
    }

    .item:before {
        left: 30px !important;
        padding: 0 !important;
        top: -30px;
        text-align: center !important;
        width: 360px;
        border: none !important;
    }

    .item:last-child {
        padding-bottom: 40px;
    }

    .content-title {
        font-size: 36px;
        margin: -75px 0 20px -90px;
    }
}

@media only screen and (max-width: 767px) {
    .timeline:before {
        left: 40px;
    }
}
</style>