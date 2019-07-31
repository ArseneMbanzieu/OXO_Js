$(document).ready(function(){
	var x = "x";
	var o = "o";
	var turns = 0;
	// case vars
	var case1 = $('#case1');
	var case2 = $('#case2');
	var case3 = $('#case3');
	var case4 = $('#case4');
	var case5 = $('#case5');
	var case6 = $('#case6');
	var case7 = $('#case7');
	var case8 = $('#case8');
	var case9 = $('#case9');
	
	$('#gameboard li').on('click', function(){
		if(case1.hasClass('o') && case2.hasClass('o') && case3.hasClass('o') ||
			case4.hasClass('o') && case5.hasClass('o') && case6.hasClass('o') ||
			case7.hasClass('o') && case8.hasClass('o') && case9.hasClass('o') ||
			case1.hasClass('o') && case4.hasClass('o') && case7.hasClass('o') ||
			case2.hasClass('o') && case5.hasClass('o') && case8.hasClass('o') ||
			case3.hasClass('o') && case6.hasClass('o') && case9.hasClass('o') ||
			case1.hasClass('o') && case5.hasClass('o') && case9.hasClass('o') ||
			case3.hasClass('o') && case5.hasClass('o') && case7.hasClass('o')
		){
			alert('Gagnant: O');
			$('#gameboard li').text('+');
			$('#gameboard li').removeClass('disable');
			$('#gameboard li').removeClass('o');
			$('#gameboard li').removeClass('x');
		} else if(case1.hasClass('x') && case2.hasClass('x') && case3.hasClass('x') ||
			case4.hasClass('x') && case5.hasClass('x') && case6.hasClass('x') ||
			case7.hasClass('x') && case8.hasClass('x') && case9.hasClass('x') ||
			case1.hasClass('x') && case4.hasClass('x') && case7.hasClass('x') ||
			case2.hasClass('x') && case5.hasClass('x') && case8.hasClass('x') ||
			case3.hasClass('x') && case6.hasClass('x') && case9.hasClass('x') ||
			case1.hasClass('x') && case5.hasClass('x') && case9.hasClass('x') ||
			case3.hasClass('x') && case5.hasClass('x') && case7.hasClass('x')
		){
			alert('Gagnant: X');
			$('#gameboard li').text('+');
			$('#gameboard li').removeClass('disable');
			$('#gameboard li').removeClass('o');
			$('#gameboard li').removeClass('x');
		} else if(turns == 9){
			alert('Tie Game');
			$('#gameboard li').text('+');
			$('#gameboard li').removeClass('disable');
			$('#gameboard li').removeClass('o');
			$('#gameboard li').removeClass('x');
			turns = 0;
		} else if($(this).hasClass('disable')){
			alert('Cette case est occupée');
		} else if(turns%2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(case1.hasClass('o') && case2.hasClass('o') && case3.hasClass('o') ||
				case4.hasClass('o') && case5.hasClass('o') && case6.hasClass('o') ||
				case7.hasClass('o') && case8.hasClass('o') && case9.hasClass('o') ||
				case1.hasClass('o') && case4.hasClass('o') && case7.hasClass('o') ||
				case2.hasClass('o') && case5.hasClass('o') && case8.hasClass('o') ||
				case3.hasClass('o') && case6.hasClass('o') && case9.hasClass('o') ||
				case1.hasClass('o') && case5.hasClass('o') && case9.hasClass('o') ||
				case3.hasClass('o') && case5.hasClass('o') && case7.hasClass('o')
			){
				alert('Gagnant: O');
				turns = 0;
			}
		} else {
			turns++;
			$(this).text(x);
			$(this).addClass('disable x');
			if(case1.hasClass('x') && case2.hasClass('x') && case3.hasClass('x') ||
				case4.hasClass('x') && case5.hasClass('x') && case6.hasClass('x') ||
				case7.hasClass('x') && case8.hasClass('x') && case9.hasClass('x') ||
				case1.hasClass('x') && case4.hasClass('x') && case7.hasClass('x') ||
				case2.hasClass('x') && case5.hasClass('x') && case8.hasClass('x') ||
				case3.hasClass('x') && case6.hasClass('x') && case9.hasClass('x') ||
				case1.hasClass('x') && case5.hasClass('x') && case9.hasClass('x') ||
				case3.hasClass('x') && case5.hasClass('x') && case7.hasClass('x')
			){
			alert('Gagnant: X');
			turns = 0;
			}
		}
	});
		
		$("#restart").click(function(){
		$("#gameboard li").text("+");
		$("#gameboard li").removeClass('disable');
		$("#gameboard li").removeClass('o');
		$("#gameboard li").removeClass('x');
		turns = 0;
	});
});