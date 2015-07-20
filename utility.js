/*
* Align using Tschichold rules for Sketch.app
* Author: Arsenii Feshchenko
* Version: 1.0
*/


function align(direction) {
	if ([selection count] != 2) {
		[doc showMessage:"Please select 2 layers"]
		
	} else {
	
		var layers = []
		for (var i = 0; i < [selection count]; i++) {
			layerName = selection[i].name()
			layers.push(layerName)
		}

		// e.g text
		layer1 = [selection objectAtIndex:1]
		frame1 = [layer1 frame]
		
		// key object
		layer2 = [selection objectAtIndex:0]
		frame2 = [layer2 frame]
		
		
		initX = [frame2 minX]
		initY = [frame2 minY]
					
		initWidth = [frame2 width]
		initHeight = [frame2 height]



		var alignObject = function(frame1) {
			newMinX = initX + initWidth / 9
			newMinY = initY + initHeight / 9
				
			[frame1 setMinX:newMinX]
			[frame1 setMinY:newMinY]
		}
		
		
		var resizeObject = function(frame1) {
					
			newWidth = 6 * initWidth / 9
			newHeight = 6 * initHeight / 9
			
			[frame1 setHeight:newHeight]
			[frame1 setWidth:newWidth]
		}
		
		
		switch (direction) {
			case "resize":
				alignObject(frame1)
				resizeObject(frame1)

				break
			
			case "align":
				alignObject(frame1, frame2)
				break
		}
	}
}


var showMessage = function(str) {
	var alert = [[NSAlert alloc] init]
		[alert setMessageText:str]
		[alert addButtonWithTitle:'OK']
		[alert runModal]
}
