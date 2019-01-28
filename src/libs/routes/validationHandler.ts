export default (config) => (req, res, next) => {
     console.log("inside validationHandler");
     const keys = Object.keys(config);
     keys.forEach( key => {
         const item = config[key];
         const values = item.in.map ( item => { 
             return req[item][key]
         })
         
         if(item && item.required){
             const validatedValues = values.filter(item => item);
            if(validatedValues.length !== values.length){
               next({message:`${key} is Required`||  item.errorMessage,
            status: 400
            })
            }
           
         } else if(isNaN(req.query.skip) && isNaN(req.query.limit)) {
             req.query.skip=0;
              req.query.limit=10;
         
          }
          console.log(req.query.skip);
          console.log(req.query.limit);
    
         if(item && item.string) {
            const validatedValues = values.filter(item => item);
            if(typeof validatedValues[0] !='string'){
                next({message: `${key} must be a string`, status:400})
            }
    
         }
         if(item && item.regex) {
             const validatedValues = values.filter(item => item);
             const regex = item.regex
             if(!regex.test(validatedValues[0])){
                 next({message:`${key} is not valid expression`, status:400})
             }

         }
        //  if(item && item.number) {
        //      const validatedValues = values.filter(item => item);
        //      if(typeof validatedValues[0] !='number'){
        //          next({message: `${key} must be a number`, status: 400})
        //      }
        //  }
        if(item && item.isObject) {
            const validatedValues = values.filter(item => item);
            if(typeof validatedValues[0] !='object'){
                next({message: `${key} must be an object`, status: 400})
            }
        }
         if(item && item.custom) {
             item.custom(values)
         }
         
         

     })
     next();
}
