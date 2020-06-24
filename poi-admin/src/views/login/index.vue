<template>
  <div class="login-container">
    <div class="m-login-wrap">
      <div class="left-image"></div>
      <div class="login-form-wrap">
        <div class="u-logo">
          <img src="@/assets/images/login-icon.png" alt />
        </div>
        <div class="u-title">
          欢迎使用
          <br />遛娃点评后台管理系统
        </div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <!-- <div class="title-container">
            <h3 class="title">Login Form</h3>
          </div>-->
          <el-form-item prop="account" class="account-wrap">
            <!-- <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>-->
            <div class="label">用户名</div>
            <el-input
              ref="account"
              v-model="loginForm.account"
              placeholder="account"
              name="account"
              type="text"
              tabindex="1"
              auto-complete="on"
              class="account"
            />
          </el-form-item>

          <el-form-item prop="password" class="password-wrap">
            <!-- <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>-->
            <div class="label">密码</div>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
              class="password"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked">记住密码</el-checkbox>
          </el-form-item>

          <el-button
            class="login-btn"
            :loading="loading"
            type="primary"
            @click.native.prevent="handleLogin"
          >登陆</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'

export default {
  name: "Login",
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error('The password can not be less than 6 digits'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      checked: false,
      loginForm: {
        account: "admin",
        password: "123456"
      },
      loginRules: {
        account: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      // alert(1)
      console.log(this.loginForm);
      // console.log(this.$refs.loginForm.validate())
      this.$refs.loginForm.validate(valid => {
        console.log(valid);
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  
  .login-btn {
    width: 360px;
    height: 60px;
    background: rgba(244, 156, 45, 1);
    border-radius: 30px;
    border:none;
    margin-top: 40px;
  }
  .account-wrap {
    margin-bottom: 27px;
    .el-form-item__content {
      width: 360px;
      height: 60px;
      border-radius: 30px;
      border: 2px solid rgba(51, 64, 84, 1);
      display: flex;
      align-items: center;
      .el-input__inner {
        border: none;
        background: transparent;
      }
      .label {
        width: 92px;
        text-indent: 18px;
        // text-align: center;
      }
    }
  }
  .password-wrap {
    margin-bottom: 27px;
    .el-form-item__content {
      width: 360px;
      height: 60px;
      background: rgba(247, 241, 230, 1);
      border-radius: 30px;
      display: flex;
      align-items: center;
      .el-input__inner {
        border: none;
        background: transparent;
      }
      .label {
        width: 92px;
        text-indent: 18px;
      }
    }
  }
  .account {
  }
}
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

// $bg: #283443;
// $light_gray: #fff;
// $cursor: #fff;

// @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
//   .login-container .el-input input {
//     color: $cursor;
//   }
// }

// /* reset element-ui css */
// .login-container {
//   .el-input {
//     display: inline-block;
//     height: 47px;
//     width: 85%;

//     input {
//       background: transparent;
//       border: 0px;
//       -webkit-appearance: none;
//       border-radius: 0px;
//       padding: 12px 5px 12px 15px;
//       color: $light_gray;
//       height: 47px;
//       caret-color: $cursor;

//       &:-webkit-autofill {
//         box-shadow: 0 0 0px 1000px $bg inset !important;
//         -webkit-text-fill-color: $cursor !important;
//       }
//     }
//   }

//   .el-form-item {
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     background: rgba(0, 0, 0, 0.1);
//     border-radius: 5px;
//     color: #454545;
//   }
// }
</style>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.login-container {
  width: 100%;
  height: 100vh;
  // background: url(~@/assets/images/login-bg.jpg) top center;
  background: linear-gradient(
    144deg,
    rgba(26, 23, 19, 1) 0%,
    rgba(54, 48, 44, 1) 100%
  );
  position: relative;
  .m-login-wrap {
    width: 1263px;
    height: 811px;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    // border: solid 1px red;
    .left-image {
      width: 676px;
      height: 811px;
      background: url(~@/assets/images/login-bg-01.jpg);
      float: left;
    }
    .login-form-wrap {
      width: 587px;
      height: 811px;
      background: #fff;
      float: right;
      padding: 100px 0 0 113px;
      box-sizing: border-box;
      .u-logo {
        margin-bottom: 28px;
      }
      .u-title {
        font-size: 26px;
        color: #363636;
        line-height: 37px;
        margin-bottom: 64px;
      }
    }
  }
}
// $bg: #2d3a4b;
// $dark_gray: #889aa4;
// $light_gray: #eee;

// .login-container {
//   min-height: 100%;
//   width: 100%;
//   background-color: $bg;
//   overflow: hidden;

//   .login-form {
//     position: relative;
//     width: 520px;
//     max-width: 100%;
//     padding: 160px 35px 0;
//     margin: 0 auto;
//     overflow: hidden;
//   }

//   .tips {
//     font-size: 14px;
//     color: #fff;
//     margin-bottom: 10px;

//     span {
//       &:first-of-type {
//         margin-right: 16px;
//       }
//     }
//   }

//   .svg-container {
//     padding: 6px 5px 6px 15px;
//     color: $dark_gray;
//     vertical-align: middle;
//     width: 30px;
//     display: inline-block;
//   }

//   .title-container {
//     position: relative;

//     .title {
//       font-size: 26px;
//       color: $light_gray;
//       margin: 0px auto 40px auto;
//       text-align: center;
//       font-weight: bold;
//     }
//   }

//   .show-pwd {
//     position: absolute;
//     right: 10px;
//     top: 7px;
//     font-size: 16px;
//     color: $dark_gray;
//     cursor: pointer;
//     user-select: none;
//   }
// }
</style>
