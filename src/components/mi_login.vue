<template>
	<div class="jm_login-wrap">
		<div class="login-header">
			<div class="login-logo"></div>
		</div>
		
		<div class="login-main">
			<div class="logfor">
				<el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="账号登录" name="first">
						<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic loginfr">
						  	<el-form-item prop="email"  label="用户名" :rules="[
						      { required: true, message: '请输入用户名', trigger: 'blur' },
						      { type: 'email', message: '请输入正确的用户名', trigger: 'blur,change' }
						    ]" >
						    	<el-input v-model="dynamicValidateForm.email"></el-input>
						  	</el-form-item>
						  	<el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'密码'"  :key="domain.key"  :prop="'domains.' + index + '.value'"  :rules="{  required: true, message: '密码不能为空', trigger: 'blur'
						    }"  >
						    	 <el-input v-model="domain.value"></el-input>
						 	</el-form-item>
						  	<el-form-item>
						    	<router-link to="First">
						    		<el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
						    	</router-link>
						 
						    	<el-button type="primary" @click="resetForm('dynamicValidateForm')">取消</el-button>
						  	</el-form-item>
						</el-form>
				    </el-tab-pane>


				    <el-tab-pane label="扫码登录" name="second" class="erwei">
						<div class="erweima">
							<img src="../assets/img/erweima.png">
						</div>
				    </el-tab-pane>
				 </el-tabs>
				<!-- <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic loginfr">
				  	<el-form-item prop="email"  label="用户名" :rules="[
				      { required: true, message: '请输入用户名', trigger: 'blur' },
				      { type: 'email', message: '请输入正确的用户名', trigger: 'blur,change' }
				    ]" >
				    	<el-input v-model="dynamicValidateForm.email"></el-input>
				  	</el-form-item>
				  	<el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'密码'"  :key="domain.key"  :prop="'domains.' + index + '.value'"  :rules="{  required: true, message: '密码不能为空', trigger: 'blur'
				    }"  >
				    	 <el-input v-model="domain.value"></el-input>
				 	</el-form-item>
				  	<el-form-item>
				    	<router-link to="First">
				    		<el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
				    	</router-link>
				 
				    	<el-button @click="resetForm('dynamicValidateForm')">取消</el-button>
				  	</el-form-item>
				</el-form> -->
			</div>
		</div>

		<div class="login-footer">
			<div class="login-footer-introduce">
				<ul class="footer-list">
					<li><a href="#">简体</a></li>
					<span>|</span>
					<li><a href="#">繁体</a></li>
					<span>|</span>
					<li><a href="#">English</a></li>
					<span>|</span>
					<li><a href="#">常见问题</a></li>
				</ul>
				<p>
					小米公司版权所有-京ICP备10046444-
					<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">
					<a href="#">京公网安备11010802020134</a>
					-京ICP证110507号
				</p>
			</div>
		</div>
	</div>
</template>


<style>
	.erwei{
		margin-left: 100px;
	}
	.erweima{
		width: 200px;
		height: 200px;
		/*border: 1px solid red;*/

	}
	.el-tabs__item{
		font-size: 20px;
		
	}
	.el-tabs__header{
		padding-left: 20px;
		border-bottom: none;
		padding-left: 80px;
	}
	.el-tabs__content{
		margin-right: 80px;
		margin-top: 80px;
	}
	.el-button{
		margin-left: 30px;
	}
	.erweima img{
		width: 100%;
		height: 100%;
	}
	.login-main{
		width: 100%;
		height: 490px;
		background: url(https://account.xiaomi.com/static/res/e2f19bb/account-static/respassport/images/banner.jpg) center center;
		background-repeat: no-repeat;
		background-color:  #14212a;
		position: relative;
	}
	.logfor{
		width: 400px;
		height: 400px;
		/*background-color: gray;*/
		position: absolute;
		top: 50px;
		margin-left: 65%;
		background-color: #fff;
	}

	.a1{
		margin-top: 2%;
	}

	.jm_login-wrap{
		width: 100%;
		height: auto;
	}

	.login-header{
		width: 90%;
		height:auto;
		background-color: #fff;
		margin:0 auto;
	}

	.login-logo{
		height: 100px;
		width: 100%;
		background-repeat: no-repeat;
		background-image:url(https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png);
		margin-left: 5%;
	}

	.login-footer{
		width: 90%;
		height: 80px;
		margin:0 auto;
		font-size: 12px;
	}

	.login-footer-introduce{
		width: 100%;
		height: 50%;
		margin: 0 auto;
		margin-top: 4%;
	}

	.footer-list li{
		list-style: none;
		display: inline-block;
		margin-left: 10px;
	}

	.footer-list a:hover{
		color: black
	}

	.footer-list span{
		margin-left: 5px;
	}

	.login-footer-introduce a{
		text-decoration: none;
		color: #757575;
	}

	.login-footer-introduce p{
		margin-top: 15px;
	}
</style>

<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>