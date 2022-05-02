const Data = (function() {
    let number = 1;

    function next() {
        return number++;
    } 

    return {
        next
    }

})();


export default Data;