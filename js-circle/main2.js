$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas2'));
		var tool = new Tool();
		var c = Shape.Circle(200,200,80);
			c.fillColor = 'black';
		var text = new PointText(200,200);
			text.fillColor = 'white';
			text.fontSize = 20;
			text.content = 'hello';

		tool.onMouseDown = function(event) {
			var c = Shape.Circle(event.point.x, event.point.y, 20);
				c.fillColor = 'green';
			console.log('add new object');
		};
	paper.view.draw();
});