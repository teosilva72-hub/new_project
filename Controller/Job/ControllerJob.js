

module.exports = class ControllerJob {
    async Verify(data){
        try{

            return true
        }catch(error){
            console.log(error);
            return false;
        }
    }
    CreateJob(data){
        try{

            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }

}