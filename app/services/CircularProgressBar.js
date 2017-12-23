class CircularProgressBar {
  //
  // element = 1;
  //
  // percent = [0,100];
  //
  // frontColor = 'blue';
  //
  // backgroundColor = 'red';
  //
  // context = null;
  //
  // speed = 0;

  /**
   *
   * @param element 绘制对象
   * @param percent
   * @param frontColor
   * @param backgroundColor
   */
  constructor(element, percent, frontColor, backgroundColor) {
    this.element = element
    this.percent = percent
    this.frontColor = frontColor
    this.backgroundColor = backgroundColor
    this.speed = 0
  }

  [setContext]() {
    // this.context = this.element.getContext('2d');
    this.context = {
      context_steam: this.element.getContext('2d'),
      context_x: this.element.width() / 2,
      context_y: this.element.height() / 2,
    }
    return this
  }

  [setBackgroundCircle]() {
    this.context.context_steam.save()
    this.context.context_steam.beginPath()
    this.context.context_steam.lineWidth = 8 // 设置线宽
    const radius = this.context.context_x - context.lineWidth
    this.context.context_steam.lineCap = 'round'
    this.context.context_steam.strokeStyle = 'red'
    this.context.context_steam.arc(this.context.context_x, this.context.context_y, radius, 0, Math.PI * 2, false)
    this.context.context_steam.stroke()
    this.context.context_steam.closePath()
    this.context.context_steam.restore()
  }

  [setFrontCircle]() {
    const n = 0
    this.context.context_steam.save()
    this.context.context_steam.strokeStyle = forecolor
    this.context.context_steam.lineWidth = 8
    this.context.context_steam.lineCap = 'round'
    const radius = this.context.context_x - this.context.context_steam.lineWidth
    this.context.context_steam.beginPath()
    this.context.context_steam.arc(this.context.context_x, this.context.context_y, radius, -Math.PI / 2, -Math.PI / 2 + this.speed * (Math.PI * 2 / 100), false) // 用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
    this.context.context_steam.stroke()
    this.context.context_steam.closePath()
    this.context.context_steam.restore()
  }

  [setText]() {
    this.context.context_steam.save() // save和restore可以保证样式属性只运用于该段canvas元素
    this.context.context_steam.fillStyle = forecolor
    const font_size = 40
    this.context.context_steam.font = `${font_size}px Helvetica`
    const text_width = this.context.context_steam.measureText(`${this.speed.toFixed(0)}%`).width
    this.context.context_steam.fillText(`${n.toFixed(0)}%`, this.context.context_x - text_width / 2, this.context.context_y + font_size / 2)
    this.context.context_steam.restore()
  }

  render() {
    window.requestAnimationFrame(this.render)
    this.context.context_steam.clearRect(0, 0, this.element.width, this.element.height)
    this[setBackgroundCircle]()
    this[setText]()
    this[setFrontCircle]()
    if (this.speed >= this.percent) return
    this.speed += 1
  }
}
//
// drawMain(drawing_elem, percent, forecolor, bgcolor) {
//   /*
//       @drawing_elem:
//       @percent：绘制圆环百分比, 范围[0, 100]
//       @forecolor: 绘制圆环的前景色，颜色代码
//       @bgcolor: 绘制圆环的背景色，颜色代码
//   */
//   var context = drawing_elem.getContext("2d");
//   var center_x = drawing_elem.width / 2;
//   var center_y = drawing_elem.height / 2;
//   var rad = Math.PI*2/100;
//   var speed = 0;
//
//   // 绘制背景圆圈
//   function backgroundCircle(){
//     context.save();
//     context.beginPath();
//     context.lineWidth = 8; //设置线宽
//     var radius = center_x - context.lineWidth;
//     context.lineCap = "round";
//     context.strokeStyle = bgcolor;
//     context.arc(center_x, center_y, radius, 0, Math.PI*2, false);
//     context.stroke();
//     context.closePath();
//     context.restore();
//   }
//
//   //绘制运动圆环
//   function foregroundCircle(n){
//     context.save();
//     context.strokeStyle = forecolor;
//     context.lineWidth = 8;
//     context.lineCap = "round";
//     var radius = center_x - context.lineWidth;
//     context.beginPath();
//     context.arc(center_x, center_y, radius , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
//     context.stroke();
//     context.closePath();
//     context.restore();
//   }
//
//   //绘制文字
//   function text(n){
//     context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
//     context.fillStyle = forecolor;
//     var font_size = 40;
//     context.font = font_size + "px Helvetica";
//     var text_width = context.measureText(n.toFixed(0)+"%").width;
//     context.fillText(n.toFixed(0)+"%", center_x-text_width/2, center_y + font_size/2);
//     context.restore();
//   }
//
//   //执行动画
//   (function drawFrame(){
//     window.requestAnimationFrame(drawFrame);
//     context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);
//     backgroundCircle();
//     text(speed);
//     foregroundCircle(speed);
//     if(speed >= percent) return;
//     speed += 1;
//   }());
// },
