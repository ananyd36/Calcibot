	function FirstNo(options,event,context,callback)
		{
			var fnum = event.message;
			
			context.simpledb.roomleveldata.fnumber = fnum;
			
			options.next_state = "label_stzi";
			
			callback(options,event,context);
		}
		
	function SecondNo(options,event,context,callback)
		{
			var snum = event.message;
			var psnum = Number(snum);
			var fnum = context.simpledb.roomleveldata.fnumber;
			var pfnum = Number(fnum);
			var res = psnum+pfnum;
			
			options.data.result = "The Addition result is " +res+"";
			
			//console.log("_______==========="+res);
			options.next_state = "label_res";
			
			callback(options,event,context);
		}
	function Sfirst(options,event,context,callback)
	{
		var snum = event.message;
		context.simpledb.roomleveldata.snumber = snum;
		options.next_state = "label_hgsa";
		callback(options,event,context);
	}
	function Ssec(options,event,context,callback)
	{
		var snum = Number(event.message);
		var wnum = Number(context.simpledb.roomleveldata.snumber);
		var sres = wnum-snum;
		
		options.data.sresult = "The Subtraction result is "+sres+'';
		options.next_state = "label_qws";
		callback(options,event,context);
		
	}
	function Sfirs(options,event,context,callback)
	{
		var snu = event.message;
		context.simpledb.roomleveldata.snumbe = snu;
		options.next_state = "label_hgs";
		callback(options,event,context);
	}
	function Sse(options,event,context,callback)
	{
		var wnu = Number(event.message);
		var snu = Number(context.simpledb.roomleveldata.snumbe);
		var sres = wnu/snu;
		
		options.data.sresul = "The Division result is "+sres+'';
		options.next_state = "label_qw";
		callback(options,event,context);
		
	}
	function mul(options,event,context,callback)
	{
		var mnu = event.message;
		context.simpledb.roomleveldata.snumb = mnu;
		options.next_state = "label_sec";
		callback(options,event,context);
	}
	function smul(options,event,context,callback)
	{
		var munu = Number(event.message);
		var mnu = Number(context.simpledb.roomleveldata.snumb);
		var sres = munu*mnu;
		
		options.data.mresult = "The Multiply result is "+sres+'';
		options.next_state = "label_re";
		callback(options,event,context);
	}
	function fact(options,event,context,callback)
	{
		var eb=Number(event.message);
		var number=1;
		for(i=1;i<=eb;i++)
		{
			 number=number*i;
		}
		console.log(number+'');
		options.data.factorial = "The factorial of the given number is "+number+"";
		options.next_state = "label_wuw";
		callback(options,event,context);
		
	}
	function square(options,event,context,callback)
	{
		var sq = Number(event.message);
		var res = Math.sqrt(sq);
		options.data.square = "The squareRoot of the given number is "+res+"";
		options.next_state = "label_lkj";
		callback(options,event,context);
	}
	function cube(options,event,context,callback)
	{
		var cb =Number(event.message);
		var res = Math.cbrt(cb);
		options.data.cube = "The Cube Root of the given number is "+res+"";
		options.next_state = "label_qwerty";
		callback(options,event,context);
	}
	module.exports.main = 
		{
			label_vqpt : FirstNo,
			label_stzi : SecondNo,
			label_xcvd: Sfirst,
			label_hgsa:Ssec,
			label_xcv: Sfirs,
			label_hgs:Sse,
			label_fir:mul,
			label_sec:smul,
			label_aww:fact,
			label_jdd:square,
			label_mzx:cube
		};