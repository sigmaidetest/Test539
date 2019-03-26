exports.handler = function(event, context, callback) {
    
    // for(let i = 0; i < 50; i++) {
    //     console.log(`Hello ${i}`);
    // }
    console.log("Hello");
    callback(null, {"message": "Successfully executed"});
}