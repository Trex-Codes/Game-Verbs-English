	function Let_Look_Btns() {


		document.getElementById('GroupA').onclick = function(){
				Visiblity_ButtonPlayA()
		}

		document.getElementById('GroupB').onclick = function(){
				Visiblity_ButtonPlayB()
		}

		document.getElementById('GroupC').onclick = function(){
				Visiblity_ButtonPlayC()
		}

		// Function show button play
		function Visiblity_ButtonPlayA() {
			document.getElementById('starGameA').style.visibility = "visible";
			document.getElementById('starGameA').style.display = "inherit";

			document.getElementById('GroupB').style.visibility = "hidden";
			document.getElementById('GroupB').style.display = 'none';

			document.getElementById('GroupC').style.visibility = "hidden";
			document.getElementById('GroupC').style.display = 'none';

		}

		// Function show button play
		function Visiblity_ButtonPlayB() {
			document.getElementById('starGameB').style.visibility = "visible";
			document.getElementById('starGameB').style.display = "inherit";

			document.getElementById('GroupA').style.visibility = "hidden";
			document.getElementById('GroupA').style.display = 'none';

			document.getElementById('GroupC').style.visibility = "hidden";
			document.getElementById('GroupC').style.display = 'none';
		}

		// Function show button play
		function Visiblity_ButtonPlayC() {
			document.getElementById('starGameC').style.visibility = "visible";
			document.getElementById('starGameC').style.display = "inherit";

			document.getElementById('GroupB').style.visibility = "hidden";
			document.getElementById('GroupB').style.display = 'none';

			document.getElementById('GroupA').style.visibility = "hidden";
			document.getElementById('GroupA').style.display = 'none';
		}
	}

	Let_Look_Btns()

		const Verbs_A = ["Buy","Bring","Think","Seek","Fight","Teach","Catch", "Sleep", "Feel", "Keep", "Sweep", "Meet", "Kneel", "Creep", "Weep", "Leave", "Cling", "Sting", "Swing", "Spin", "Stick", "Strike", "Dig", "Hang", "Find",  "Bind","Grind", "Wind", "Unwind", "Unbind", "Hold", "Behold", "Uphold", "Withhold", "Bleed", "Breed", "Feed", "Speed", "Flee","Lead", "Spend", "Send", "Build", "Bend", "Lend", "Say", "Pay", "Lay", "Tell", "Foretell", "Sell", "Stand", "Understand", "Withstand", "Deal", "Lean", "Mean", "Leap", "Win", "Shine", "Bite", "Slide", "Hide", "Light", "Lose", "Shoot", "Shoe", "Sid" , "Spit", "Have", "Make" ,"Read", "Hear" ];
	
		const Verbs_B = ["Write", "Drive", "Ride", "Rise", "Arise", "Underwrite", "Strive", "Begin", "Drink", "Sing", "Sink", "Swim", "Stink", "Spring", "Shrink", "Ring", "Run", "Speak", "Steal", "Break", "Tread", "Choose", "Freeze", "Wake", "Wear", "Tear", "Swear", "Bear", "Take", "Mistake", "Undertake", "Partake", "Shake", "Get", "Forget", "Give", "Forgive", "Bid", "Forbid", "Eat", "Fall", "know", "Grow", "Blow", "Throw", "Fly", "Draw", "Withdraw", "Come", "Become", "Overcome", "Lie", "Underlie", "Slay", "Be", "See", "Foresee", "Do", "Go", "Undergo", "Overdo", "Outdo", "Forego" ];

		const Verbs_C = ["Let", "Set" ,"Upset", "Wet", "Bet", "Spread", "Sweat", "Beat", "cut", "Shut", "Cost", "Hurt", "Burst", "Put", "Cast", "Broadcast", "Forecast"]

	var cont = 0 ;
	var cicle = 0;

	buttonPlayA = document.getElementById('starGameA');
	buttonPlayB = document.getElementById('starGameB');
	buttonPlayC = document.getElementById('starGameC');

	text_Convert = document.getElementById('verb');




	/*------------- VERBS A -------------*/
	document.getElementById('starGameA').onclick = function () {

			var NumbberRandom = Math.random() * 73
			text_Convert.innerHTML = Verbs_A[parseInt(NumbberRandom)]
		}
	/*------------- VERBS B -------------*/

	document.getElementById('starGameB').onclick = function () {

			var NumbberRandom2 = Math.random() * 63
			text_Convert.innerHTML = Verbs_B[parseInt(NumbberRandom2)]
		}

		/*------------- VERBS C -------------*/

	document.getElementById('starGameC').onclick = function () {

			var NumbberRandom3 = Math.random() * 17
			text_Convert.innerHTML = Verbs_C[parseInt(NumbberRandom3)]
		}


	/* BUTTON RESET */
	document.getElementById('reset').onclick = function () {
		document.getElementById('GroupA').style.visibility = 'visible';
		document.getElementById('GroupA').style.display = 'initial';

		buttonPlayA.style.visibility = 'invisible';
		buttonPlayA.style.display = 'none';



		document.getElementById('GroupB').style.visibility = 'visible';
		document.getElementById('GroupB').style.display = 'initial';

		buttonPlayB.style.visibility = 'invisible';
		buttonPlayB.style.display = 'none';


		document.getElementById('GroupC').style.visibility = 'visible';
		document.getElementById('GroupC').style.display = 'initial';

		buttonPlayC.style.visibility = 'invisible';
		buttonPlayC.style.display = 'none';

		// Call the div who shows the verb and clear it 
		text_Convert.innerHTML = " ";

}