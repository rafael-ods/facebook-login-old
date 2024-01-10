class FormValidate {
  constructor() {
    this.form = document.querySelector('.form')
    this.event()
  }
  event(e) {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e)
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const input = this.validInput()
    const password = this.validPassword()
    ``

    if (input && password) {
      alert('Formulário enviado com sucesso')
      this.resetForm()
    }
  }

  validInput() {
    let valid = true

    for (let errorText of this.form.querySelectorAll('.text-red-400')) {
      errorText.remove()
    }


    const inputValid = this.form.querySelectorAll('.valid')

    inputValid.forEach((input) => {
      if (!input.value) {
        this.createError(input, 'O campo não pode estar em branco')
        valid = false
      }

      if (input.classList.contains('name')) {
        if (this.validUser(input)) valid = true;
      }

    })

    return valid

  }

  resetForm() {
    const inputFields = this.form.querySelectorAll('.valid');

    inputFields.forEach((input) => {
      input.value = ''; // Redefine o valor para uma string vazia
      if (input.classList.contains('name')) {
        input.focus()
      }
    });

    // Adicione mais lógica de redefinição se necessário
  }

  createError(input, msg) {
    const p = document.createElement('p')
    p.innerHTML = msg
    p.classList.add('text-red-400')
    p.classList.add('text-sm')
    p.classList.add('mt-2')
    p.classList.add('ml-2')

    input.insertAdjacentElement('afterend', p)
  }

  validPassword() {
    let valid = true

    const password = this.form.querySelector('input[type="password"]')

    if (password.value.length < 6 || password.value.length > 12) {
      this.createError(password, 'Senha precisa ter entre 6 e 12 caracteres')
      valid = false
    }
    return valid

  }

  validUser(input) {
    let valid = true;
    if (!input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.createError(input, 'Digite um email valido');
      valid = false;
    }

    return valid;
  }

}


const formValidate = new FormValidate()
