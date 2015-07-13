
$(document).ready(function() {
	//Common Calendar

	//Ui
	var comWeekTag = "[data-js-com-week]"
	var comDayTag = "[data-js-com-day]"
	var comMonthTag = "[data-js-com-month]"
	var comYearTag = "[data-js-com-year]"
	
	var commonTime = new Date();

	var commonWeekArray = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	var commonMonthArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

	$(comWeekTag).html(commonWeekArray[commonTime.getDay()]);
	$(comDayTag).html(commonTime.getDate());
	$(comMonthTag).html(commonMonthArray[commonTime.getMonth()]);
	$(comYearTag).html(commonTime.getFullYear());

	//Revolutionary Calendar

	//Ui
	var $revCalendarEl = $("[data-js-rev-calendar]");

	var calendarNames = {
		day: [
			// Вандемьер
			"винограда",
			"шафрана",
			"каштана",
			"безвременника",
			"лошади",
			"бальзамина",
			"моркови",
			"амаранта",
			"пастернака",
			"чана",
			"картошки",
			"бессмертника",
			"тыквы обыкновенной",
			"резеды",
			"осла",
			"мирабилиса",
			"тыквы",
			"гречихи",
			"подсолнечника",
			"пресса",
			"конопли",
			"персика",
			"репы",
			"амариллиса",
			"вола",
			"баклажана",
			"красного перца",
			"томата",
			"ячменя",
			"бочки",
			// Брюмер
			"яблока",
			"сельдерея",
			"груши",
			"свеклы",
			"гуся",
			"гелиотропа",
			"инжира",
			"скорцонера",
			"рябины обыкновенной",
			"плуга",
			"козлобородника",
			"рогульника (чилима)",
			"топинамбура",
			"эндивия",
			"индюка",
			"сахарного корня",
			"жерухи обыкновенной",
			"свинчатки",
			"граната",
			"бороны",
			"бакхариса",
			"испанского боярышника",
			"марены",
			"апельсина",
			"фазана",
			"фисташки",
			"чины клубненосной",
			"айвы",
			"рябины крупноплодной",
			"валика",
			//Фример
			"рапунцель",
			"турнепса",
			"цикория",
			"мушмулы",
			"свиньи",
			"валерьяницы",
			"цветной капусты",
			"мёда",
			"можжевельника",
			"кирки",
			"воска",
			"хрена",
			"кедра",
			"ели",
			"косули",
			"утесника",
			"кипариса",
			"плюща",
			"можжевельника казацкого",
			"мотыги",
			"клена сахарного",
			"вереска",
			"тросника",
			"щавеля",
			"сверчка",
			"кедрового ореха",
			"пробки",
			"трюфеля",
			"оливы",
			"лопаты",
			//Нивоз
			"торфа",
			"каменного угля",
			"битума",
			"серы",
			"собаки",
			"лавы",
			"почвы",
			"навоза",
			"селитры",
			"цепа",
			"гранита",
			"глины",
			"аспидного сланца",
			"песчаника",
			"кролика",
			"кремня",
			"мергеля",
			"известняка",
			"мрамора",
			"решета для веяния",
			"гипса",
			"соли",
			"железа",
			"меди",
			"кошки",
			"олова",
			"свинца",
			"цинка",
			"ртути",
			"сита",
			//Плювиоз
			"волчеягодника лавролистного",
			"мха",
			"иглицы",
			"подснежника",
			"быка",
			"калины лавролистной",
			"трутовика настоящего",
			"волчеягодника обыкновенного",
			"тополя",
			"топора",
			"морозника",
			"брокколи",
			"лавра",
			"фундука",
			"коровы",
			"самшита",
			"лишайника",
			"тиса",
			"медуницы",
			"садового ножа",
			"ярутки (ибериса)",
			"волчеягодника",
			"пырея",
			"гречишника",
			"зайца",
			"вайды",
			"лещины",
			"цикламена",
			"чистотела",
			"саней",
			//Вантоз
			"мить-и-мачехи",
			"кизила",
			"желтушника",
			"бирючины",
			"козла",
			"копытня",
			"крушины вечнозелёной",
			"фиалки",
			"козьей ивы",
			"заступа",
			"нарциса",
			"вяза",
			"дымянки",
			"гулявника",
			"козы",
			"шпината",
			"дороникума",
			"куриной слепоты",
			"кервеля",
			"бечёвки",
			"мандрагоры",
			"петрушки",
			"ложечницы",
			"маргаритки",
			"тунца",
			"одуванчика",
			"ветреницы дубравной",
			"адиантума (венерина волоса)",
			"ясеня",
			"сажального кола",
			//Жерминаль
			"первоцвета",
			"платана",
			"спаржи",
			"тюльпана",
			"курицы",
			"мангольда",
			"берёзы",
			"нарцисса-жонкиля",
			"ольхи",
			"инкубатора",
			"баравинока",
			"граба",
			"сморчка",
			"бука",
			"пчелы",
			"салата",
			"лиственницы",
			"болиголова",
			"редиса",
			"улья",
			"иудина дерева",
			"римского салата",
			"каштана",
			"сурепки",
			"голубя",
			"сирени",
			"ветреницы",
			"анютиных глазок",
			"черники",
			"прививочного ножа",
			//Флореаль
			"розы",
			"дуба",
			"папортника",
			"боярышника",
			"соловья",
			"водосбора",
			"ландыша",
			"гриба",
			"гиацинта",
			"граблей",
			"ревня",
			"эспарцета",
			"желтушника",
			"хамеропса",
			"шелковичного червя",
			"окопника",
			"кровохлёбки",
			"алиссума жёлтого",
			"лебеды",
			"ручного полольника",
			"кермека",
			"рябчика",
			"огуречника",
			"валерианы",
			"крапа",
			"бересклета",
			"лука скороды",
			"анхузы",
			"горчицы белой",
			"пастушьего посоха",
			//Прериаль
			"люцерны",
			"лилейника",
			"клевера",
			"дягеля",
			"утки",
			"мелиссы",
			"французского райграса",
			"лилии саранки",
			"чабреца",
			"косы",
			"земляники",
			"буквицы",
			"гороха",
			"акации",
			"перепела",
			"гвоздики",
			"бузины",
			"мака",
			"липы",
			"вил",
			"василька",
			"ромашки",
			"жимолости",
			"подмаренника",
			"линя",
			"жасмина",
			"вербены",
			"тимьяна",
			"пиона",
			"телеги",
			//Мессидор
			"ржи",
			"овса",
			"лука",
			"вероники",
			"мула",
			"розмарина",
			"огурца",
			"лука-шалота",
			"полыни горькой",
			"серпа",
			"кориандра",
			"артишока",
			"гвоздики (пряности)",
			"лаванды",
			"серны",
			"табака",
			"смородины",
			"чины",
			"вишни",
			"загона для скота",
			"мяты",
			"кумина",
			"фасоли",
			"алканны красильной",
			"цесарки",
			"шалфея",
			"чеснока",
			"горошка",
			"пшеницы",
			"шалмея",
			//Термидор
			"полбы",
			"кровяка обыкновенного",
			"дыни",
			"плевела",
			"барана",
			"хвоща",
			"полыни",
			"сафлора",
			"ежевики",
			"лейки",
			"просо (Panic)",
			"солероса",
			"абрикоса",
			"базилика",
			"овцы",
			"алтея",
			"льна",
			"миндаля",
			"горечавки",
			"шлюза",
			"колючника",
			"каперса",
			"чечевицы",
			"девясила",
			"выдры",
			"мирта",
			"рапса",
			"люпина",
			"хлопка",
			"мельницы",
			//Фрюктидор
			"сливы",
			"просо (Millet)",
			"дождевика",
			"ячменя шестирядного",
			"лосося",
			"туберозы",
			"озимого ячменя",
			"кутры",
			"лакрицы",
			"лестницы",
			"арбуза",
			"укропа",
			"барбариса",
			"грецкого ореха",
			"форели",
			"лимона",
			"ворсянки",
			"крушины",
			"бархатцев",
			"заплечной корзины",
			"шиповника",
			"лесного ореха",
			"хмеля",
			"сорго",
			"рака",
			"пемеранца",
			"золотарника",
			"кукурузы",
			"каштана (плода)",
			"корзины"
		],
		month: ["вандемьера", "брюмера", "фримера", "нивоза", "плювиоза", "вантоза", "жерминаля", "флореаля", "прериаля", "мессидора", "термидора", "фрюктидора"],
		decade: ["Примиди", "Дуоди", "Триди", "Квартиди", "Квинтиди", "Секстиди", "Септиди", "Октиди", "Нониди", "Декади"],
		sansculottide: ["День Доблести (Добродетели)", "День Таланта", "День Труда", "День Мнений", "День Наград", "День Революции"],
		sansculottideOrder: ["Первая", "Вторая", "Третья", "Четвертая", "Пятая", "Шестая"],
	};

	//First day of the calendar is the day of the autumn solstice
	var RevolutionaryCalendar = function(date, firstDay) {
		var firstMonthOfThisYear = 8;

		var firstDayOfThisYear;

		if (!firstDay) {
			firstDayOfThisYear = 22;
		}
		else {
			firstDayOfThisYear = firstDay;	
		}
		
		var thisCommonMonth = date.getMonth();
		var thisCommonDay = date.getDate();

		var year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		var daysAmount;

		if ((thisCommonMonth != firstMonthOfThisYear) || (thisCommonMonth === firstMonthOfThisYear && thisCommonDay < firstDayOfThisYear)) {
			
			daysAmount = year[firstMonthOfThisYear] - firstDayOfThisYear;
			if (thisCommonMonth > firstMonthOfThisYear) {
				for (var i = firstMonthOfThisYear + 1; i < thisCommonMonth; i++) {
					daysAmount += year[i];
				}
				daysAmount += thisCommonDay;
			}
			else if (thisCommonMonth <= firstMonthOfThisYear) {
				for (var i = firstMonthOfThisYear + 1; i <= 11; i++) {
					daysAmount += year[i];
				}
				for (var i = 0; i < thisCommonMonth; i++) {
					daysAmount += year[i];
				}
				daysAmount += thisCommonDay;
			}
		}
		else {
			daysAmount = thisCommonDay - firstDayOfThisYear;
			
		}
		
		var revYear;
		var thisCommonYear = date.getFullYear();

		if (thisCommonMonth > 8 || thisCommonMonth == 8 && thisCommonDay >= firstDayOfThisYear) {
			revYear = thisCommonYear - 1791;
		}
		else {
			revYear = thisCommonYear - 1792;
		}

		var revolutionaryDate = {};
		
		revolutionaryDate.year = revYear;
		revolutionaryDate.month = daysAmount / 30 >> 0;	
		revolutionaryDate.day = daysAmount % 30 + 1;
		revolutionaryDate.decade = daysAmount % 10;
		revolutionaryDate.dayName = daysAmount;

		return revolutionaryDate;
	}

	function renderRevCalendar(revolutionaryCalendar, $element) {
		var dayName = calendarNames.day[revolutionaryCalendar.dayName];
		var revMonth = calendarNames.month[revolutionaryCalendar.month];
		var revDecade = calendarNames.decade[revolutionaryCalendar.decade];

		var revDay = revolutionaryCalendar.day;
		var revYear = revolutionaryCalendar.year;

		if (revolutionaryCalendar.dayName < 360) {
			$element.html("День " + dayName +  ".<br>" + revDecade + ", " + revDay + " " + revMonth + " " + revYear + " года.");
		}
		else {
			var	sansculottideNumber = revolutionaryCalendar.dayName - 360;
			$element.html(calendarNames.sansculottideOrder[sansculottideNumber] + " санкюлотида: " + calendarNames.sansculottide[sansculottideNumber] + ", " + revYear + " год.");
		}
	}

	var revTime = new RevolutionaryCalendar(commonTime, 23);

	//console.log("monthIndex: " + revTime.month);
	//console.log("daysAmount: " + revTime.dayName);
	//console.log("today: " + commonTime.getDate());

	renderRevCalendar(revTime, $revCalendarEl);

	// Calculate rev date

	//Ui
	$calcDay = $("#calc--day");
	$calcMonth = $("#calc-month");
	$calcYear = $("#calc--year");
	$calcFirstDay = $("#calc--first-day");
	$calcBnt = $("#calc--btn");
	$calcResult = $("#calc--result");

	$calcBnt.click(function() {
		var date = new Date($calcYear.val(), $calcMonth.val(), $calcDay.val());

		var revDate = new RevolutionaryCalendar(date, $calcFirstDay.val());
		renderRevCalendar(revDate, $calcResult);
	});



	// Test

	var testTime = new Date(2015, 8, 18);

	var testRevTime = new RevolutionaryCalendar(testTime, 23);

	console.log("testDaysAmount: " + testRevTime.dayName);

	var $test = $("#test1");

	renderRevCalendar(testRevTime, $test);

});