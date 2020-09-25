const Joi = require('joi')

const registValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string()
          .required(),
    email: Joi.string()
          .email()
          .required(),
   password: Joi.string()
          .min(6)
          .required(),
  })
  
  return schema.validate(data)
}

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
          .email()
          .required(),
   password: Joi.string()
          .min(6)
          .required(),
  })
  
  return schema.validate(data)
}

module.exports = {
  registValidation,
  loginValidation
}