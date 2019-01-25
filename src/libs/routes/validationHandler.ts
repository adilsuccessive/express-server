export default (config) => (req, res, next) => {
    // console.log("inside validationHandler");
    // console.log(config)
    // console.log(req.body)
    // console.log(Object(req.body))
    if(Object.keys(req.body).includes("id"))
    console.log("valdfsg")
    console.log(Object.values(config.id))
    if(Object.keys(config.id)) {

    }next({error:""})
    if(Object.keys(config.name)) {

    }
    

    next();
}
