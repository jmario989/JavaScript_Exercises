var imenskiProstor = {};

imenskiProstor.exercise = (function(){   
    var steps = 0;
    /* function increaseSteps(){
        steps++;
    }*/
    var increaseSteps = function(){
        steps++;
    }
    return {
        getTotalSteps: function(){
            return steps;
        },
        walk: function(){
            increaseSteps();            
        }
    };
})();

/*
imenskiProstor.exercise.walk();
imenskiProstor.exercise.walk();
console.log(imenskiProstor.exercise.getTotalSteps());
*/

export {imenskiProstor};
