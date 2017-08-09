 <template>
  <div class="xm-video-container clearfix">
   <div class="header1">
     <h2 class="title">{{title}}</h2>
     <a href="//www.mi.com/video/" target="_blank">
       <span class="top-sub1">
        查看全部
       <i class="sub-icon-v fa fa-fw fa-chevron-circle-right"></i>
       </span>
      </a>
  </div>
  <div class="video-content-v clearfix">
    <ul class="video-wrap-v ">
     <li class="video-item">
       <el-button type="text" @click="dialogVisible1 = true"> 
        <div class="item-top">
          <img src="http://i3.mifile.cn/a4/73d67577-cbc7-4bd0-8678-4b1e95f4f4dc" alt="" />
          <span class="play">
            <i class="fa fa-play"></i>
          </span>
        </div>
        <h3 class="video-title">红米年度品牌视频</h3>
        <p class="video-desc">
        一亿人喜爱你，是一种责任。
        </p>
         </el-button>
      </li>

      <li class="video-item">
       <el-button type="text" @click="dialogVisible2 = true"> 
        <div class="item-top">
          <img src="http://i3.mifile.cn/a4/f7e434fb-8ce4-4442-bf78-0d66e409dfc3" alt="" />
          <span class="play">
            <i class="fa fa-play"></i>
          </span>
        </div>
        <h3 class="video-title"> 小米笔记本Air最全介绍视频 </h3>
        <p class="video-desc">
         带独立显卡的轻薄笔记本
        </p>
         </el-button>
      </li>



      <li class="video-item">
       <el-button type="text" @click="dialogVisible3 = true"> 
        <div class="item-top">
          <img src="http://i3.mifile.cn/a4/e2df3ad8-4147-44e1-8a54-b6bcafdc6c66" alt="" />
          <span class="play">
            <i class="fa fa-play"></i>
          </span>
        </div>
        <h3 class="video-title">小米笔记本Air可靠性测试视频 </h3>
        <p class="video-desc">
          小米笔记本Air是如何炼成的？
        </p>
       </el-button>
      </li>



      <li class="video-item">
       <el-button type="text" @click="dialogVisible4 = true"> 
        <div class="item-top">
          <img src="http://i3.mifile.cn/a4/T1v3LgBTxv1RXrhCrK.jpg" alt="" />
          <span class="play">
            <i class="fa fa-play"></i>
          </span>
        </div>
        <h3 class="video-title">小米Max 绝美外观视频 </h3>
        <p class="video-desc">
         6.44" 大屏黄金尺寸，看什么都震撼
        </p>
         </el-button>
      </li>
   </ul>
  
</div>
 

<el-dialog
  title="红米年度品牌视频"
  :visible.sync="dialogVisible1"
  size="small"
  :before-close="handleClose">
  
  <yyy1></yyy1>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
  </span>
</el-dialog>


<el-dialog
  title="小米笔记本Air最全介绍视频"
  :visible.sync="dialogVisible2"
  size="small"
  :before-close="handleClose">
  <yyy2></yyy2>
  <span slot="footer" class="dialog-footer">
  <el-button @click="dialogVisible2 = false">取 消</el-button>
  <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title="小米笔记本Air可靠性测试视频"
  :visible.sync="dialogVisible3"
  size="small"
  :before-close="handleClose">
  <yyy3></yyy3>
  <span slot="footer" class="dialog-footer">
  <el-button @click="dialogVisible3 = false">取 消</el-button>
  <el-button type="primary" @click="dialogVisible3 = false">确 定</el-button>
  </span>
</el-dialog>

<el-dialog
  title=" 小米Max 绝美外观视频"
  :visible.sync="dialogVisible4"
  size="small"
  :before-close="handleClose">
  <yyy4></yyy4>
  <span slot="footer" class="dialog-footer">
  <el-button @click="dialogVisible4 = false">取 消</el-button>
  <el-button type="primary" @click="dialogVisible4 = false">确 定</el-button>
  </span>
</el-dialog>

</div>
</template>
<script>
import yy1 from "./common/yxmvideo1"
import yy2 from "./common/yxmvideo2"
import yy3 from "./common/yxmvideo3"
import yy4 from "./common/yxmvideo4"

  export default {
    data() {
      return {
        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: false,
        dialogVisible4: false,
        title: '视频',
              videos: [{
                videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1ODg5ODA0MA==',
                imgUrl: 'http://i3.mifile.cn/a4/73d67577-cbc7-4bd0-8678-4b1e95f4f4dc',
                title: '红米年度品牌视频',
                desc: '一亿人喜爱你，是一种责任。'
              },
            
              {
                videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1OTg3NjQ4OA==',
                imgUrl: 'http://i3.mifile.cn/a4/f7e434fb-8ce4-4442-bf78-0d66e409dfc3',
                title: '小米笔记本Air最全介绍视频',
                desc: '带独立显卡的轻薄笔记本'
              },
              {
                videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1OTg4NjY0OA==',
                imgUrl: 'http://i3.mifile.cn/a4/e2df3ad8-4147-44e1-8a54-b6bcafdc6c66',
                title: '小米笔记本Air可靠性测试视频',
                desc: '小米笔记本Air是如何炼成的？'
              },
              {
                videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTU2NDM3NjEzMg==',
                imgUrl: 'http://i3.mifile.cn/a4/T1v3LgBTxv1RXrhCrK.jpg',
                title: '小米Max 绝美外观视频',
                desc: '6.44" 大屏黄金尺寸，看什么都震撼'
              }]
      };
    },
    components:{
    'yyy1':yy1,
    'yyy2':yy2,
    'yyy3':yy3,
    'yyy4':yy4,
    
  },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>









<style>
.xm-video-container {
  width: 90%;
  height: auto;
  margin: 0 auto;
}
.header1 {
  position: relative;
  width:100%;
  height:59px;
}
.header1 .title {
    display: block;
    float: left;
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .top-sub1 {
    float: right;
    display: block;
    font-size: 16px;
    line-height: 58px;
    color: #424242;
    cursor: pointer
  }
   
  .top-sub1:hover {
    color: #ff6700;
  }
  .header1 .top-sub1:hover  .sub-icon-v {
    color: #ff6700;
      
 } 


  
  .header1 .top-sub1 .sub-icon-v {
   color: #b0b0b0;
   font-size: 20px;
 }
 
  .video-wrap-v .video-item {
    position: relative;
    float: left;
    width: 24%;
    height: 285px;
    margin: 0 0 14px 14px;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s;
    list-style:none;
  }
    .video-item:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 20px #ccc;
    }
  .video-item:hover .play {
    background: #ff6700;
      }
     
  .video-wrap-v .video-item:nth-child(1) {
    margin-left: 0;
    }
  .video-wrap-v .video-item   img {
    width: 100%;
    height: 180px;
    margin-top: -10px;

    }
  .video-wrap-v .video-item   .video-title {
    color: #333;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    }
    .video-wrap-v .video-item  .video-desc {
    height: 18px;
    margin: 0;
    font-size: 12px;
    text-align: center;
    color: #b0b0b0;
    }
   

  .item-top {
    position: relative;
}
  .item-top   .play {
    position: absolute;
    display: block;
    left: 20px;
    bottom: 10px;
    width: 32px;
    height: 20px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    border: 2px solid #fff;
    border-radius: 12px;
    background: #333;
  }

</style>