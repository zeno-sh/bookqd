<template>
 <div id="login">
        <div class="login-mask"></div>
        <div class="form-wrap">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="formValidate.passwd" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formValidate.passwdCheck" placeholder="请再次输入密码"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入电子邮箱"></Input>
        </FormItem>
        <FormItem label="手机号" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入手机号"></Input>
        </FormItem>

        <FormItem label="性别" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
        </div>
 </div>    
</template>
<style lang="less">
@import "./style.less";
</style>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    passwd: '',
                    mail: '',
                    phone: '',
                    gender: ''

                },
                ruleValidate: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],

                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ]

                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
