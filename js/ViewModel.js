function ViewModel() {
    var self = this;
 
    self.products = ko.observableArray([
                    {
                        "name" : "Banane",
                        "maxiName": "Maxi banane",
                        "img": "images/banana.png",
                        "checked" : "false",
                        "price": 129.99
                    }, {
                        "name" : "Banane",
                        "maxiName": "Maxi banane",
                        "img": "images/banana.png",
                        "checked" : "false",
                        "price": 129.99
                    }]);
 

    self.addProduct = function() {
                    self.products.push({
                        "name" : "Banane",
                        "maxiName": "Maxi banane",
                        "img": "images/banana.png"
                    });
    };
 
}
 