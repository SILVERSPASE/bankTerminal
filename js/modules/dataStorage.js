app.service('$dataStorage', function () {
	// ключ - паспорт!
	userList = {
		"lt01": {	name: 'Max',
					history: {
				1: {	date: "14.11.16 14:06",
						sum: "-3004",
						currency: 'uah',	
						from: 1004,
						to: 1006
					},
				2: {	date: "10.08.16 13:36",
						sum: "-3004",
						currency: 'uah',
						from: 1004,
						to: 1006
					}
				},
					cardInfo: {
				1: {	number: 1000,
						balance: 1000,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1001,
						balance: 1000,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
				3: {	number: 1008,
						balance: 1000,
						currency: 'euro',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"rk20": {	name: 'German',
					history: {},
					cardInfo: {
				1: {	number: 1002,
						balance: 300,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1003,
						balance: 230,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"bt03": 	{	name: 'Markus',
					history: {},
					cardInfo: {
				1: {	number: 1004,
						balance: -305,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1005,
						balance: 234,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"sd44": 	{	name: 'Donny',
					history: {},
					cardInfo: {
				1: {	number: 1006,
						balance: 305,
						currency: 'uah',
						status: true,
						pinCode: '1111'
					},
				2: {	number: 1007,
						balance: 234,
						currency: 'usd',
						status: true,
						pinCode: '1111'
					},
			}
		},
		"cd45": 	{	name: 'Bobby',
					history: {},
					cardInfo: {}
		},
		"sd46": 	{	name: 'Selicia',
					history: {},
					cardInfo: {}
		},
		"dd47": 	{	name: 'Alex',
					history: {},
					cardInfo: {}
		},
		"sd48": 	{	name: 'Vova4',
					history: {},
					cardInfo: {}
		},
		"ed49": 	{	name: 'Vova5',
					history: {},
					cardInfo: {}
		},
		"sd50": 	{	name: 'Vova6',
					history: {},
					cardInfo: {}
		},
		"fd51": 	{	name: 'Vova7',
					history: {},
					cardInfo: {}
		},
		"sd52": 	{	name: 'Vova8',
					history: {},
					cardInfo: {}
		},
		"gd53": 	{	name: 'Vova9',
					history: {},
					cardInfo: {}
		},
		"xd54": 	{	name: 'Vova10',
					history: {},
					cardInfo: {}
		},
		"zd55": 	{	name: 'Vova11',
					history: {},
					cardInfo: {}
		},
		"sd56": 	{	name: 'Vova012',
					history: {},
					cardInfo: {}
		},
		"yd57": 	{	name: 'Vova13',
					history: {},
					cardInfo: {}
		},
		"jd58": 	{	name: 'Vova14',
					history: {},
					cardInfo: {}
		},
		"qd59": 	{	name: 'Vova15',
					history: {},
					cardInfo: {}
		},
		"ud60": 	{	name: 'Vova16',
					history: {},
					cardInfo: {}
		}
	};
	this.getUserList = function() {
		return userList;
	};

	cardList =  [];
	for (key in userList) {
		for (card in userList[key].cardInfo) {
			cardList.push({
				userKey: key,
				cardKey: card,
				number: userList[key].cardInfo[card].number,
				currency: userList[key].cardInfo[card].currency
			});
		}
	};
	this.getCardList = function() {
		return cardList;
	};
});