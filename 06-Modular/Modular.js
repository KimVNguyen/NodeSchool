var filterLS = require ('./FilterLS');

dirname = process.argv[2];
extension = process.argv[3];

filterLS(dirname,extension,function(err,data){
   if (err){throw err}
    data.forEach(function(item){
        console.log(item);
    })

});
