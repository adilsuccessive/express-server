const validation = {
  create: {
    id: {
      required: true,
      string: true,
      in: ["body"],
      custom: function(value) {
        console.log("Value", value);
      }
    },
    name: {
      required: true,
      regex: /^[A-Za-z]{2,30}$/,
      in: ["body"],
      errorMessage: "Name is required"
    }
  },
  delete: {
    id: {
      required: true,
      errorMessage: "Id is required",
      in: ["params"]
    }
  },
  get: {
    skip: {
      required: false,
      default: 0,
      number: true,
      in: ["query"],
      errorMessage: "Skip is invalid"
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ["query"],
      errorMessage: "Limit is invalid"
    }
  },
  update: {
    id: {
      required: true,
      string: true,
      in: ["body"]
    },
    dataToUpdate: {
      in: ["body"],
      required: true,
      isObject: true,
      custom: function(dataToUpdate) {
        console.log("customFn", dataToUpdate);
      }
    }
  }
};
export default validation;
