class Options {
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width; 
		this.bg = bg;
		this.fontSize = fontSize; 
		this.textAlign = textAlign;
		
	}
	
	create () {
		let div = document.createElement('div'),
			body = document.getElementsByTagName('body')[0];

		div.textContent = 'Это новый элемент';
		div.style.cssText = `height: ${this.height}px;\
							 width: ${this.width}px;\
							 background: ${this.bg};\
							 font-size: ${this.fontSize}px;\
							 text-align: ${this.textAlign};`
		body.appendChild(div);	
	}
}

let newObj = new Options(100, 400, 'blue', 30, 'center');

document.write(newObj.create());
