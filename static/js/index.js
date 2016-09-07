/*jslint browser: true*/

var config = {
    resumePath: '../data/resume.json', 
    rootElement: 'app',
    dateFormat: "MMM, YYYY"
}; 


(function(config, $, _){
    //load json
    var path = config.resumePath;    

    //load the JSON file and callback with string 
    //  representation
    function loadJSON(path, callback) {
        var xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
        xhr.open('GET', path, true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText);
            }
        };
        xhr.send(null);
    }
    
    loadJSON(path, function(val){
        var obj = JSON.parse(val);
        document.getElementById(config.rootElement)
            .innerHTML = obj.basics.name.toString();
        //alert(val);
        _.each(["hi"], alert);
    });
    
})(config, window.$, window._);

