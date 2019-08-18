let $form = $('#formSignUp')
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
  } else if (hash.password_confirmation === '') {
    $form.find('#password_confirmation').siblings('.error').text('请确认密码')
    return
  } else if (hash.password !== hash.password_confirmation) {
    $form.find('#password_confirmation').siblings('.error').text('请重新确认密码')
    return
  }

  $.post('/sign_up', hash)
    .then((response) => {
      alert('注册成功')
      window.location.href = '/sign_in'
    }, (request) => {
      let {
        errors
      } = request.responseJSON
      if (errors.email && errors.email === 'invalid') {
        $form.find('#email').siblings('.error').text('邮箱格式错误')
      } else if (errors.email && errors.email === 'used') {
        $form.find('#email').siblings('.error').text('该邮箱已被使用')
      }
    })
})