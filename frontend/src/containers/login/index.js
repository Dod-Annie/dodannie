import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import axios from 'axios'
import './login.css'
import { request } from 'graphql-request'

class NormalLoginForm extends React.Component {
  state = {
    loading: false
  }
  query = `{
    users {
      id
    }
  }`
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.setState({ loading: true }, () => {
          request('/', this.query)
            // fetch('http://localhost:4000/', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify({
            //     query: `query {
            //       users(where: { userName: "${values.userName}",password:"${
            //       values.password
            //     }" }) {
            //         id
            //       }
            //     } `
            //   })
            // })
            // axios
            //   .post(
            //     'http://localhost:4000/',
            //     JSON.stringify({
            //       query: `query {
            //           users(where: { userName: "${values.userName}",password:"${
            //         values.password
            //       }" }) {
            //             id
            //           }
            //         } `
            //     }),
            //     { timeout: 3000 }
            //   )
            .then(response => {
              console.log(response, 'res')
              return response
            })
          // .then(responseAsJson =5> {
          //   console.log(responseAsJson, 'responseAsJson', this.props)
          //   let {
          //     data: { users }
          //   } = responseAsJson
          //   if (users.length > 0) {
          //     message.success('登录成功!')
          //     this.props.history.push('/index')
          //   } else {
          //     message.error('用户名或密码错误!')
          //   }
          //   this.setState({ loading: false, data: responseAsJson.data })
          // })
          // .catch(e => {
          //   console.error(e)
          // })
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h1 className="login">登录</h1>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入您的账号!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="手机号或邮箱"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>记住我</Checkbox>)}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={this.state.loading}
          >
            登录
          </Button>
          <a href="">没有账号 现在注册</a>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
)

export default class Login extends React.Component {
  render() {
    const { history } = this.props
    return (
      <div className="md-warp">
        <h1 className="title">Dod_Annie的小站</h1>
        <WrappedNormalLoginForm history={history} />
      </div>
    )
  }
}
