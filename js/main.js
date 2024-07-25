  $("#tel").mask("(000) 000-000-000", {
    placeholder : "(000) 000-000-000"
  });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
      cpf: {
        required: true,
      },
    },
    submitHandler: function (form) {
      alert(
        "we'll enter on a contact with you!!! Thanks for the preeference"
      );
      form.reset();
    },
    invalidHandler: function (form, validator) {
      alert("Please, fill all the fields!!!");
    },
  });

