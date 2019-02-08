export default (config) => (req, res, next) => {
  console.log('inside validationHandler');
  const keys = Object.keys(config);
  keys.forEach((key) => {
    const items = config[key];
    const values = items.in.map((item) => {
      return req[item][key];
    });
    if (items && items.required) {
      const validatedValues = values.filter((item) => item);

      if (validatedValues.length !== values.length) {
        next({
          message: `${key} is Required` || items.errorMessage,
          status: 400,
        });
      }
      if (items.string) {
        if (typeof validatedValues[0] !== 'string') {
          next({ message: `${key} must be a string`, status: 400 });
        }
      }
      if (items.regex) {
        const regex = items.regex;
        if (!regex.test(validatedValues[0])) {
          next({ message: `${key} is not valid expression`, status: 400 });
        }
      }
      if (items.isObject) {
        if (typeof validatedValues[0] !== 'object') {
          next({ message: `${key} must be an object`, status: 400 });
        }
      }
      //  if(item.number) {
      //      if(typeof validatedValues[0] !='number'){
      //          next({message: `${key} must be a number`, status: 400})
      //      }
      //  }
      if (items.custom) {
        items.custom(values);
      }
    } else if (isNaN(req.query.skip) && isNaN(req.query.limit)) {
      req.query.skip = 0;
      req.query.limit = 10;
    }

  });
  next();
};
