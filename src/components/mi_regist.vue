<template>
  <div class="regist_all">
      <div class="mi_regist">
          <div class="form">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="top">
                <div class="img">
                  <img src="./../assets/img/icon-mi.png">     
                </div>                         
                <div class="title">
                  <h3>注册小米帐号</h3>
                </div>
                <el-form-item label="国家/地区" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="中国">
                      <el-option label="中国" value="zhongguo"></el-option>
                      <el-option label="美国" value="meiguo"></el-option>
                    </el-select>
                    <p>成功注册帐号后，国家/地区将不能被修改</p>
                </el-form-item>
                <div class="phone">
                  <el-form-item label="手机号码" prop="checkPass" >
                    <!-- v-model="value6"给一个空值让它双向绑定随时改变选中的值 -->
                    <el-select v-model="ruleForm.phone" placeholder="+86" class="inp1">
                      <el-option
                        v-for="item in cities"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        <span style="float: right">{{ item.label }}</span>
                        <span style="float: left; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                      </el-option>
                    </el-select>
                    <el-input v-model="ruleForm.checkPass" placeholder="请输入手机号" class="inp2" ></el-input>
                  </el-form-item>
                </div>
                
                <el-form-item label="图形验证码" prop="verify" class='verify'>                                      
                    <input type="text" id="code_input" value="" v-model="ruleForm.verify" />
                    <div id="v_container"></div>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')" id="my_button">注册</el-button>
                </el-form-item>
              </el-form>
          </div>
          
      </div>
  </div>
  
</template>

<script>

export default {
  data() {
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('温馨提示：请输入手机号'));
        } else if(!Number.isInteger(Number(value))){

          callback(new Error('温馨提示：请输入数字'));
        } else if (value.length>12||value.length<11) {
          callback(new Error('温馨提示：手机号长度应为11个数字'));
        } else {
          callback();
        }
      };
      return {
        input: '',
        select: '',
        cities: [{
          value: '中国',
          label: '+86'
        }, {
          value: '中国台湾',
          label: '+886'
        }, {
          value: '中国香港',
          label: '+852'
        }, {
          value: 'Brazil',
          label: '+55'
        }, {
          value: 'India',
          label: '+91'
        }, {
          value: 'Indonesia',
          label: '+62'
        }],

        value6: '',
        ruleForm: {
          name: '',
          region:'中国',
          phone: '',
          checkPass: '',
          verify:'',
          delivery: false,
          type: [],
          resource: '',
          desc: '',        
        },
        rules: {
          region: [
            { required: true, message: '请选择国家/地区', trigger: 'change' }
          ],
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请选择', trigger: 'blur' }
          ],
          verify: [
            { required: true, message: '请输入图片验证码', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        options: [{
          value: '选项1',
          label: '中国'
        }, {
          value: '选项2',
          label: '美国'
        }, {
          value: '选项3',
          label: '英国'
        }, {
          value: '选项4',
          label: '俄罗斯'
        }, {
          value: '选项5',
          label: '法国'
        }],
        value: ''
      }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      } 
  },
  mounted:function(){
    // 验证码验证
        var verifyCode = new GVerify("v_container");
        // var a =document.getElementById("code_input").value;
        document.getElementById("my_button").onclick = function(){
          var res = verifyCode.validate(document.getElementById("code_input").value);
          // var res = verifyCode.validate("123");
          if(res){
            alert("验证正确");
          }else{
            alert("验证码错误");
          }
        }
  }
}
</script>
<!-- <script type="text/javascript" src="../../assets/js/gVerify.js"></script> -->
<style scope>
  .regist_all{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    color: #666;
  }
  .mi_regist{
    width: 60%;
    margin:0 auto;
    height: 100%;
    background: #fff;
  }
  .mi_regist .form{
    width: 50%;
    margin:auto;
    height: auto;
    position: relative;
    top: 15%;
  }
  .regist_all .el-select{
    width: 100%;
  }
  .mi_regist .img img{
    margin: 0 auto;
    display: block;
  }
  .mi_regist .title h3{
    text-align: center;    
  }
  .mi_regist .img,.mi_regist .title{
    margin-bottom: 10%;
  }
  .regist_all .el-button--primary{
    width: 100%;
    background-color: #ff6700;
    border: none;
  }
  .regist_all .el-button--primary:hover {
      background: #ff936a;
  }
  .regist_all .region p{
    margin: 0
  }
  .regist_all .verify input{
    width: 45%;
  }
  .phone{
    margin-bottom: 22px;
  }
  .phone .inp1{
    width: 30%;
    float: left;
    
  }
  .phone .inp1 input{
    border-right: none;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .phone .inp2{
    width: 70%;
  }
  .phone .inp2 .el-input__inner{
    border-radius: 0
  }
  .verify #v_container{
    width: 200px;
    height: 50px;
    float: right;
  }
  .verify #v_container canvas{
    height: 40px;
    float: right;
  }
  
</style>

