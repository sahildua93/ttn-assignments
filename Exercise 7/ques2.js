var myObject = {
			foo: "bar",
			func: function() {
			var self = this;
			console.log("outer func: this.foo = " + this.foo);//line1
			console.log("outer func: self.foo = " + self.foo);//line2
					(function() {
							console.log("inner func: this.foo = " + this.foo);//line3
							console.log("inner func: self.foo = " + self.foo);//line4i

							}());
			}
};
myObject.func();
