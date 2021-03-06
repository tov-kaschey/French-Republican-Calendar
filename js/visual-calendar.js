$(document).ready(function() {
	// Visual calendar

	$visualCalendar = $("#visual-calendar");

	$visualCalendar.append("<div id='vc--months'></div>");
	for (var i = 0; i < 12; i++) {
		$("#vc--months").append("<div data-id='" + i + "' class='vc--month-btn'>"+ revTime.data.monthCommon[i] +"</div>");
	};
	$("#vc--months").append("<div data-id='12' data-month-btn class='vc--month-btn'>Санкюлотиды</div>");

	$("#vc--months [data-id='" + revTime.month + "']").addClass("__current-month").attr("title", "Текущий месяц");

	$visualCalendar.append("<div id='vc--current-month'></div>");

	$(".vc--month-btn").click(function() {
		$(".vc--month-btn").removeClass("__active-month");
		$(this).addClass("__active-month");
		$("#vc--current-month").removeClass("__sansculottide");

		$("#vc--current-month").empty();
		var activeMonthFirstDay = $(this).data("id") * 30 - 1;
		//console.log(activeMonthFirstDay);	
		if (activeMonthFirstDay + 1 < 360) {
			$("#vc--current-month").append("<div id='vc--head-row'></div>");
			for(var i = 0; i < 10; i++) {
				$("#vc--head-row").append("<div class='vc--head-cell'><div class='vc--head-text'>"+ 
									revTime.data.decade[i] +"</div></div>");
			}

			
			var vcId = 1;
			for(var i = 0; i < 3; i++) {
				$("#vc--current-month").append("<div data-id='" + i + "' class='vc-row'></div>");
				for(var j = 0; j < 10; j++) {
					$(".vc-row[data-id='" + i + "']").append("<div data-id='" + vcId + 
								"' class='vc-cell' data-toggle='tooltip' data-placement='bottom' title='День "+ 
								revTime.data.day[activeMonthFirstDay + vcId] +"'><div>"+ vcId +
								"</div><div class='vc-cell-day-name'>День<br>"+ revTime.data.day[activeMonthFirstDay + vcId] +
								"</div></div>");
					if (j === 3 || j === 8 || j === 9) {
						$(".vc-cell[data-id='" + vcId + "']").addClass("__holyday");
					}
					vcId++;
				}
			}
		}
		else {
			$("#vc--current-month").addClass("__sansculottide");
			var sansculottideAmount = 5;
			if (revTime.additionalSansculottide) {
				sansculottideAmount = 6;
			}

			for (var i = 0; i < sansculottideAmount; i++) {
				$("#vc--current-month").append("<div data-id='" + (i + 1) + 
					"' class='vc-cell __sansculottide' data-toggle='tooltip' data-placement='bottom' title='"+ 
					revTime.data.sansculottide[i] +"'><div class='sansculottide-day'>"+ revTime.data.sansculottideOrder[i] + 
					" санкюлотида:</div><div class='vc-cell-day-name'><br>"+ revTime.data.sansculottide[i] +"</div></div>");
			};
		}

		if ($(this).data("id") == revTime.month) {
			$(".vc-cell[data-id='" + revTime.day + "']").addClass("__active-cell");
		}

	});
	$(".vc--month-btn[data-id='" + revTime.month + "']").trigger("click");
});