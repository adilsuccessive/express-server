const validation = {
    create: {
      id: {
        in: ['body'],
        required: false,
        string: true,
        custom(value) {
          console.log('Value', value);
        },
      },
      name: {
        errorMessage: 'Name is required',
        in: ['body'],
        regex: /^[A-Za-z]{2,30}$/,
        required: true,
      },
    },
    createToken: {
      emailId: {
        in: ['body'],
        required: true,
      },
      pass: {
        in: ['body'],
        required: true,
      },
    },
    delete: {
      id: {
        errorMessage: 'Id is required',
        in: ['params'],
        required: true,
      },
    },
    get: {
      limit: {
        default: 10,
        errorMessage: 'Limit is invalid',
        in: ['query'],
        number: true,
        required: false,
      },
      skip: {
        default: 0,
        errorMessage: 'Skip is invalid',
        in: ['query'],
        number: true,
        required: false,
      },
    },
    update: {
      dataToUpdate: {
        in: ['body'],
        isObject: true,
        required: true,
        custom(dataToUpdate) {
          console.log('customFn', dataToUpdate);
        },
      },
      id: {
        in: ['body'],
        required: true,
        string: true,
      },
    },
  };
export default validation;
