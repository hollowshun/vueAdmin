<template>
  <div class="content">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
      <el-form-item>
        账号密码随便填
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "登录成功",
            type: "success"
          });
          localStorage.setItem("user", JSON.stringify(this.ruleForm));
          this.$store.commit('SET_INFO',this.ruleForm)
          localStorage.setItem("token", JSON.stringify('1111'));
          this.$store.commit('SET_TOKEN','11111')
          this.$router.push("/");
        } else {
          this.$message({
            message: "请填写信息",
            type: "warning"
          });
          return false;
        }
      });
    }
  }
  //created(){}
};
</script>
<style lang='less' scoped>
.content {
  width: 500px;
  height: 300px;
  margin: 200px auto 0;
}
</style>