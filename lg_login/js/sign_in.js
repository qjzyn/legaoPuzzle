let $form = $('#formSignIn')
let hash = {}
$form.on('submit', (e) => {
  e.preventDefault()
  $form.find('.error').each((index, error) => {
    $(error).text('')
  })
  let list = ['email', 'password', 'password_confirmation']
  list.forEach((name) => {
    let value = $form.find(`[name="${name}"]`).val()
    hash[name] = value
  })
  if (hash.email === '') {
    $form.find('#email').siblings('.error').text('请输入邮箱')
    return
  } else if (hash.password === '') {
    $form.find('#password').siblings('.error').text('请输入密码')
    return
  } else if (hash.email.indexOf('@') === -1) {
    $form.find('#email').siblings('.error').text('邮箱格式错误')
    return
  }

  $.post('/sign_in', hash)
    .then((response) => {
      alert('登录成功')
      window.location.href = '/'
    }, (request) => {
      alert('邮箱和密码不匹配')
    })
})