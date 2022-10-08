const { celebrate, Joi, errors, Segments } = require('celebrate');

const validation =  celebrate({
	[Segments.BODY]: Joi.object({
      email: Joi.string().required(),
	  password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/)
        .min(8)
		.required(),
      repeat_password: Joi.ref("password"),
	}),
	// [Segments.QUERY]: {
	//   token: Joi.string().token().required()
	// }
  } ,(req, res) => {
	// At this point, req.body has been validated and 
	// req.body.role is equal to req.body.role if provided in the POST or set to 'admin' by joi
    res.status(201).send(req.body);
  });
  
module.exports = validation;
