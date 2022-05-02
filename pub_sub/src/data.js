const Data = (function() {
    let number = 0;

    function next() {
        return number++;
    } 

    return {
        next
    }

})();


export default Data;