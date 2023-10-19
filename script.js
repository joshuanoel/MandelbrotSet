// var canvas;
// var ctx;

// window.addEventListener("load", function() {
// 	canvas = document.getElementById("canvas");
// 	ctx = canvas.getContext("2d");
// 	resizeCanvas();
// });

// var resizeCanvas = function() {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// 	renderSet();
// };
// window.addEventListener("resize", resizeCanvas);

// var HSLtoRGB = function(h, s, l) {
//     var r, g, b;
//     if (s === 0) {
//         r = g = b = l;
//     } else {
//         var hue2rgb = function(p, q, t) {
//             if (t < 0) t += 1;
//             if (t > 1) t -= 1;
//             if (t < 1/6) return p + (q - p) * 6 * t;
//             if (t < 1/2) return q;
//             if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
//             return p;
//         }
//         var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//         var p = 2 * l - q;
//         r = hue2rgb(p, q, h + 1/3);
//         g = hue2rgb(p, q, h);
//         b = hue2rgb(p, q, h - 1/3);
//     }
//     return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`;
// }

// var renderSet = function(x=-2, y=-2, width=4, height=4, maxIterations=100) {
// 	var m;
// 	if (canvas.width > canvas.height) {
// 		m = getMandelbrotSet(x*(canvas.width/canvas.height), y, (x+width)*(canvas.width/canvas.height), y+height, width/canvas.height, height/canvas.height, maxIterations);
// 	} else {
// 		m = getMandelbrotSet(x, y*(canvas.height/canvas.width), x+width, (y+height)*(canvas.height/canvas.width), width/canvas.width, height/canvas.width, maxIterations);
// 	}
// 	ctx.fillStyle = "black";
// 	ctx.fillRect(0, 0, canvas.width, canvas.height);
// 	for (var i = 0; i < m.data.length; i++) {
// 		var row = m.data[i];
// 		for (var j = 0; j < row.length; j++) {
// 			if (row[j] >= maxIterations) {
// 				ctx.fillStyle = "black";
// 			} else if (row[j] > 1) {
// 				ctx.fillStyle = HSLtoRGB(Math.sin(row[j]/100), 1, 0.5);
// 			} else {
// 				ctx.fillStyle = "white";
// 			}
// 			ctx.fillRect(j, i, 1, 1);
// 		}
// 	}
// }

// var getMandelbrotSet = function(x1, y1, x2, y2, x3, y3, maxIterations) {
// 	var result = [];
// 	for (var y = y1; y < y2; y += y3) {
// 		var row = [];
// 		for (var x = x1; x < x2; x += x3) {
// 			var F = function(w) {
// 				return {
// 					real: Math.pow(w.real, 2) - Math.pow(w.complex, 2) + x,
// 					complex: 2*w.real*w.complex + y
// 				};
// 			};
// 			var z = {real: 0, complex: 0};
// 			var iterations = 0;
// 			while (Math.sqrt(Math.pow(z.real, 2) + Math.pow(z.complex, 2)) < 2 && iterations < maxIterations) {
// 				iterations++;
// 				z = F(z);
// 			}
// 			row.push(iterations);
// 		}
// 		result.push(row);
// 	}
// 	return {
// 		start: {x: x1, y: y1},
// 		end: {x: x2, y: y2},
// 		detail: {x: x3, y: y3},
// 		data: result
// 	};
// };