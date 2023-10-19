//右侧加一列递增的操作数
function addTableCol() {
    var Table = document.getElementById("MyTable");   //取得自定义的表对象
    var opCol = document.createElement("th"); //创建一个th对象
    opCol.innerHTML = "操作数"; //设置th的内容
    Table.rows[0].appendChild(opCol); //将th添加到Table的行中去

    var op= [];
    for (var i = 0; i < 7; i++) {    //遍历Table的所有行
        op[i]=i;
    }
    op[7]="7-9";
    for (var i = 8; i < 11; i++) {    //遍历Table的所有行
        op[i]=i+2;
    }
    op[11]="13-15";
    for (var i = 12; i < Table.rows.length; i++) {    //遍历Table的所有行
        op[i]=i+4;
    }
    for (var i = 1; i < Table.rows.length; i++) {    //遍历Table的所有行
        var newCell = Table.rows[i].insertCell(Table.rows[i].cells.length); //插入新列
        newCell.innerHTML = op[i]; //设置新列的内容
    }
    
//
}
//这部分为了添加td中的斜线
function line(header,line_width,line_color,line_number){//该方法不用动
	var table = document.getElementById(header); 
	var xpos = table.clientWidth;
	var ypos = table.clientHeight;
	var canvas = document.getElementById('line');
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,xpos,ypos); //清空画布，多个表格时使用
		ctx.fill();
		ctx.lineWidth = line_width;
		ctx.strokeStyle = line_color;
		ctx.beginPath();
		switch(line_number){
			case 1:
				ctx.moveTo(0,0);
				ctx.lineTo(xpos,ypos);
				break;
			case 2:
				ctx.moveTo(0,0);
				ctx.lineTo(xpos/2,ypos);
				ctx.moveTo(0,0);
				ctx.lineTo(xpos,ypos/2);
				break;
			case 3:
				ctx.moveTo(0,0);
				ctx.lineTo(xpos,ypos);
				ctx.moveTo(0,0);
				ctx.lineTo(xpos/2,ypos);
				ctx.moveTo(0,0);
				ctx.lineTo(xpos,ypos/2);
				break;
			default:
			return 0;	
		}
				
		ctx.stroke();
		ctx.closePath();
		document.getElementById(header).style.backgroundImage = 'url("' + ctx.canvas.toDataURL() + '")';
		//document.getElementById(header).style.background-attachment= 'fixed';
	}
}
window.onload = function (){ //调用line方法
    addTableCol();

	line('header',0.3,'black',1);
	line('header1',0.3,'black',1);
	line('header2',0.3,'black',1);
	line('header3',0.3,'black',1);
	line('header4',0.3,'black',1);
    line('header5',0.3,'black',1);
    line('header6',0.3,'black',1);
    line('header7',0.3,'black',1);
    line('header8',0.3,'black',1);
    line('header9',0.3,'black',1);
    line('header10',0.3,'black',1);
    line('header11',0.3,'black',1);
    line('header12',0.3,'black',1);
    line('header13',0.3,'black',1);
    line('header14',0.3,'black',1);
    line('header15',0.3,'black',1);
    line('header16',0.3,'black',1);
    line('header17',0.3,'black',1);
    line('header18',0.3,'black',1);
    line('header19',0.3,'black',1);
    line('header20',0.3,'black',1);
    line('header21',0.3,'black',1);
    line('header22',0.3,'black',1);
    line('header23',0.3,'black',1);
    line('header24',0.3,'black',1);
    line('header25',0.3,'black',1);
    line('header26',0.3,'black',1);
    line('header27',0.3,'black',1);
    line('header28',0.3,'black',1);
    line('header29',0.3,'black',1);
    line('header30',0.3,'black',1);
    line('header31',0.3,'black',1);
    line('header32',0.3,'black',1);
    line('header33',0.3,'black',1);
    line('header34',0.3,'black',1);
    line('header35',0.3,'black',1);
    line('header36',0.3,'black',1);
    line('header37',0.3,'black',1);
    line('header38',0.3,'black',1);
    line('header39',0.3,'black',1);
    line('header40',0.3,'black',1);
    line('header41',0.3,'black',1);
    line('header42',0.3,'black',1);
    line('header43',0.3,'black',1);
    line('header44',0.3,'black',1);
    line('header45',0.3,'black',1);
    line('header46',0.3,'black',1);
    line('header47',0.3,'black',1);
    line('header48',0.3,'black',1);
    line('header49',0.3,'black',1);
    line('header50',0.3,'black',1);
	//目标单元格，线的宽度，线的颜色，线的条数，1~3，
}
//window.onresize = function(){		//当窗口改变时，也随之改变
////可以加上检测 宽度高度是否变化在执行函数
//	line('header',0.3,'black',1);
//	line('header1',0.3,'black',1);
//	line('header2',0.3,'black',1);
//	line('header3',0.3,'black',1);
//	line('header4',0.3,'black',1);
//    line('header5',0.3,'black',1);
//    line('header6',0.3,'black',1);
//    line('header7',0.3,'black',1);
//    line('header8',0.3,'black',1);
//    line('header9',0.3,'black',1);
//    line('header10',0.3,'black',1);
//    line('header11',0.3,'black',1);
//    line('header12',0.3,'black',1);
//    line('header13',0.3,'black',1);
//    line('header14',0.3,'black',1);
//    line('header15',0.3,'black',1);
//    line('header16',0.3,'black',1);
//    line('header17',0.3,'black',1);
//    line('header18',0.3,'black',1);
//    line('header19',0.3,'black',1);
//    line('header20',0.3,'black',1);
//    line('header21',0.3,'black',1);
//    line('header22',0.3,'black',1);
//    line('header23',0.3,'black',1);
//    line('header24',0.3,'black',1);
//    line('header25',0.3,'black',1);
//    line('header26',0.3,'black',1);
//    line('header27',0.3,'black',1);
//    line('header28',0.3,'black',1);
//    line('header29',0.3,'black',1);
//    line('header30',0.3,'black',1);
//    line('header31',0.3,'black',1);
//    line('header32',0.3,'black',1);
//    line('header33',0.3,'black',1);
//    line('header34',0.3,'black',1);
//    line('header35',0.3,'black',1);
//    line('header36',0.3,'black',1);
//    line('header37',0.3,'black',1);
//    line('header38',0.3,'black',1);
//    line('header39',0.3,'black',1);
//    line('header40',0.3,'black',1);
//    line('header41',0.3,'black',1);
//    line('header42',0.3,'black',1);
//    line('header43',0.3,'black',1);
//    line('header44',0.3,'black',1);
//    line('header45',0.3,'black',1);
//    line('header46',0.3,'black',1);
//    line('header47',0.3,'black',1);
//    line('header48',0.3,'black',1);
//    line('header49',0.3,'black',1);
//    line('header50',0.3,'black',1);
//}	
