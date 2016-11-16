app.service('$dataStorage', function () {
	// ключ - паспорт!
	userList = {
		"st1": {	name: 'Max',
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
		"rk2": {	name: 'German',
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
		"rt3": 	{	name: 'Markus',
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
		"sd4": 	{	name: 'Vova',
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