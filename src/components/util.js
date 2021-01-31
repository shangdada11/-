export function returnRankingGames() {
	let rankingGame1 = []
	let rankingGame2 = []
	let rankingGame3 = []
	let rankingGame = [
		rankingGame1 = [
			{
				id: 0,
				imgUrl: require('@/assets/ranking/rank00.jpg'), // 游戏封面
				name: '侠盗猎车5', // 游戏中文名(中文译名)
				enName: 'Grand Theft Auto V', // 游戏英文名
				development: 'Rockstar North', // 开发商	
				publisher: 'Rockstar Games', // 发行商
				date: '2015-04-14', // 发行日期
				type: '动作角色', // 游戏类型
				platform: 'PC PS4 XBOXONE PS3', // 平台
				lang: '繁中 | 英文', // 语言
				label: '沙盒，写实，都市，剧情', // 游戏标签
				score: '7.3',
				totie: '9055'
			},
			{
				id: 1,
				imgUrl: require('@/assets/ranking/rank01.jpg'), // 游戏封面
				name: '上古卷轴5：天际', // 游戏中文名(中文译名)
				enName: 'Elder Scrolls V: Skyrim', // 游戏英文名
				development: 'Bethesda Softworks', // 开发商	
				publisher: 'Bethesda Game Studios', // 发行商
				date: '2011-11-11', // 发行日期
				type: '角色扮演', // 游戏类型
				platform: 'PC PS4 XBOXONE PS3', // 平台
				lang: '简中 | 英文 | 日文 | 多国', // 语言
				label: '剧情，开放世界，经典', // 游戏标签
				score: '9.2',
				totie: '10910'
			},
			{
				id: 2,
				imgUrl: require('@/assets/ranking/rank02.jpg'), // 游戏封面
				name: '极品飞车18：宿敌', // 游戏中文名(中文译名)
				enName: 'Need For Speed: Rivals', // 游戏英文名
				development: 'Ghost', // 开发商	
				publisher: 'EA Games', // 发行商
				date: '2013-11-19', // 发行日期
				type: '赛车游戏', // 游戏类型
				platform: 'PC PS4 XBOXONE PS3', // 平台
				lang: '繁中 | 英文', // 语言
				label: '写实，都市，竞速', // 游戏标签
				score: '8.6',
				totie: '830'
			},
			{
				id: 3,
				imgUrl: require('@/assets/ranking/rank03.jpg'), // 游戏封面
				name: '尼尔：机械纪元', // 游戏中文名(中文译名)
				enName: 'NieR：Automata', // 游戏英文名
				development: 'Platinum Games Inc.', // 开发商	
				publisher: 'Square Enix', // 发行商
				date: '2017-03-17', // 发行日期
				type: '动作游戏', // 游戏类型
				platform: 'PC PS4 XBOXONE', // 平台
				lang: '繁中 | 英文 | 日文', // 语言
				label: '科幻，女主人翁，日系', // 游戏标签
				score: '8.4',
				totie: '879'
			},
			{
				id: 4,
				imgUrl: require('@/assets/ranking/rank04.jpg'), // 游戏封面
				name: '巫师3：狂猎', // 游戏中文名(中文译名)
				enName: 'The Witcher 3：Wild Hunt', // 游戏英文名
				development: 'CD Projekt Red', // 开发商	
				publisher: 'CD Projekt Red', // 发行商
				date: '2015-05-19', // 发行日期
				type: '角色扮演', // 游戏类型
				platform: 'PC Switch PS4 XBOXONE', // 平台
				lang: '繁中 | 英文', // 语言
				label: '魔幻，艺术，开放世界', // 游戏标签
				score: '8.3',
				totie: '3253'
			},
			{
				id: 5,
				imgUrl: require('@/assets/ranking/rank05.jpg'), // 游戏封面
				name: '文明6', // 游戏中文名(中文译名)
				enName: 'Civilization VI', // 游戏英文名
				development: 'Firaxis', // 开发商	
				publisher: '2K', // 发行商
				date: '2016-10-21', // 发行日期
				type: '策略游戏', // 游戏类型
				platform: 'PC Switch PS4 XBOXONE', // 平台
				lang: '简中 | 繁中 | 英文 | 日文', // 语言
				label: '回合制，经典', // 游戏标签
				score: '8.1',
				totie: '1031'
			},
			{
				id: 6,
				imgUrl: require('@/assets/ranking/rank06.jpg'), // 游戏封面
				name: '怪物猎人：世界', // 游戏中文名(中文译名)
				enName: 'Monster Hunter：World', // 游戏英文名
				development: 'Capcom', // 开发商	
				publisher: 'Capcom', // 发行商
				date: '2018-08-10', // 发行日期
				type: '动作游戏', // 游戏类型
				platform: 'PC PS4 XBOXONE', // 平台
				lang: '简中 | 繁中 | 英文 | 日文', // 语言
				label: '合作，狩猎', // 游戏标签
				score: '8.3',
				totie: '1255'
			},
			{
				id: 7,
				imgUrl: require('@/assets/ranking/rank07.jpg'), // 游戏封面
				name: '看门狗2', // 游戏中文名(中文译名)
				enName: 'Watch Dogs 2', // 游戏英文名
				development: 'Ubisoft', // 开发商	
				publisher: 'Ubisoft', // 发行商
				date: '2016-11-28', // 发行日期
				type: '动作角色', // 游戏类型
				platform: 'PC PS4 XBOXONE', // 平台
				lang: '简中 | 繁中 | 英文 | 日文', // 语言
				label: '剧情，潜入，开放世界，跑酷', // 游戏标签
				score: '7.7',
				totie: '454'
			},
			{
				id: 8,
				imgUrl: require('@/assets/ranking/rank08.jpg'), // 游戏封面
				name: '模拟人生4', // 游戏中文名(中文译名)
				enName: 'The Sims 4', // 游戏英文名
				development: 'Maxis/The Sims Studio', // 开发商	
				publisher: 'EA', // 发行商
				date: '2014-09-04', // 发行日期
				type: '模拟经营', // 游戏类型
				platform: 'PC', // 平台
				lang: '繁中', // 语言
				label: '写实，经典', // 游戏标签
				score: '8.4',
				totie: '432'
			},
			{
				id: 9,
				imgUrl: require('@/assets/ranking/rank09.jpg'), // 游戏封面
				name: '黑暗之魂3', // 游戏中文名(中文译名)
				enName: 'Dark Souls III', // 游戏英文名
				development: 'FromSoftware, Inc.', // 开发商	
				publisher: 'FromSoftware', // 发行商
				date: '2016-04-12', // 发行日期
				type: '动作角色', // 游戏类型
				platform: 'PC PS4 XBOXONE', // 平台
				lang: '简中 | 繁中 | 英文 | 日文', // 语言
				label: '魔幻，经典，类魂系列', // 游戏标签
				score: '7.5',
				totie: '366'
			},
		],
		rankingGame2 = [
				{
					id: 0,
					imgUrl: require('@/assets/ranking/rank10.jpg'), // 游戏封面
					name: '赛博朋克2077', // 游戏中文名(中文译名)
					enName: 'Cyberpunk 2077', // 游戏英文名
					development: 'CD Projekt RED', // 开发商	
					publisher: 'CD Projekt RED', // 发行商
					date: '2020-12-10', // 发行日期
					type: '动作角色', // 游戏类型
					platform: 'PC PS4 XBOXONE PS5', // 平台
					lang: '简中 | 繁中 | 英文 | 日文', // 语言
					label: '科幻，赛博朋克，剧情', // 游戏标签
					score: '8.0',
					totie: '4410'
				},
				{
					id: 1,
					imgUrl: require('@/assets/ranking/rank11.jpg'), // 游戏封面
					name: '刺客信条：英灵殿', // 游戏中文名(中文译名)
					enName: 'Assassin’s Creed Valhalla', // 游戏英文名
					development: '育碧', // 开发商	
					publisher: '育碧', // 发行商
					date: '2020-11-10', // 发行日期
					type: '冒险游戏', // 游戏类型
					platform: 'PC PS4 XBOXONE Stadia', // 平台
					lang: '简中 | 繁中 | 英文 | 日文', // 语言
					label: '战争，历史，探险，解谜，开放世界，经典，暴力', // 游戏标签
					score: '6.0',
					totie: '612'
				},
				{
					id: 2,
					imgUrl: require('@/assets/ranking/rank12.jpg'), // 游戏封面
					name: '渡神纪：芬尼斯崛起', // 游戏中文名(中文译名)
					enName: 'Immortals Fenyx Rising', // 游戏英文名
					development: '育碧', // 开发商	
					publisher: '育碧', // 发行商
					date: '2020-12-03', // 发行日期
					type: '角色扮演', // 游戏类型
					platform: 'PC Switch PS4 XBOXONE', // 平台
					lang: '简中 | 英文 | 多国', // 语言
					label: '奇幻，创意，解谜，神话，开放世界', // 游戏标签
					score: '4.1',
					totie: '157'
				},
				{
					id: 3,
					imgUrl: require('@/assets/ranking/rank13.jpg'), // 游戏封面
					name: '莱莎的炼金工房2', // 游戏中文名(中文译名)
					enName: 'Lost Legends and the Secret Fairy', // 游戏英文名
					development: 'Gust', // 开发商	
					publisher: '光荣特库摩', // 发行商
					date: '2020-12-03', // 发行日期
					type: '角色扮演', // 游戏类型
					platform: 'PC Switch PS4 PS5', // 平台
					lang: '简中 | 繁中 | 英文 | 日文', // 语言
					label: '女主人翁，回合制，日系，二次元', // 游戏标签
					score: '9.1',
					totie: '158'
				},
				{
					id: 4,
					imgUrl: require('@/assets/ranking/rank14.jpg'), // 游戏封面
					name: '哈迪斯：地狱之战', // 游戏中文名(中文译名)
					enName: 'Hades', // 游戏英文名
					development: 'Super Giant Games', // 开发商	
					publisher: 'Super Giant Games', // 发行商
					date: '2020-09-17', // 发行日期
					type: '动作游戏', // 游戏类型
					platform: 'PC Switch', // 平台
					lang: '简中 | 英文', // 语言
					label: '探险，闯关', // 游戏标签
					score: '8.6',
					totie: '80'
				},
				{
					id: 5,
					imgUrl: require('@/assets/ranking/rank15.jpg'), // 游戏封面
					name: '看门狗：军团', // 游戏中文名(中文译名)
					enName: 'Watch Dogs: Legion', // 游戏英文名
					development: 'Ubisoft', // 开发商	
					publisher: 'Ubisoft', // 发行商
					date: '2020-10-29', // 发行日期
					type: '动作游戏', // 游戏类型
					platform: 'PC PS4 XBOXONE Stadia', // 平台
					lang: '简中 | 英文 | 多国', // 语言
					label: '都市，潜入', // 游戏标签
					score: '5.1',
					totie: '389'
				},
				{
					id: 6,
					imgUrl: require('@/assets/ranking/rank16.jpg'), // 游戏封面
					name: '使命召唤17：黑色行动 冷战', // 游戏中文名(中文译名)
					enName: 'Call of Duty: Black Ops Cold War', // 游戏英文名
					development: 'Treyarch', // 开发商	
					publisher: '动视暴雪', // 发行商
					date: '2020-11-13', // 发行日期
					type: '射击游戏', // 游戏类型
					platform: 'PC PS4 XBOXONE PS5', // 平台
					lang: '简中 | 繁中', // 语言
					label: '战争，血腥，剧情，军事', // 游戏标签
					score: '9.2',
					totie: '199'
				},
				{
					id: 7,
					imgUrl: require('@/assets/ranking/rank17.jpg'), // 游戏封面
					name: '死亡搁浅', // 游戏中文名(中文译名)
					enName: 'Death Stranding', // 游戏英文名
					development: 'Kojima Production', // 开发商	
					publisher: '索尼,505 Games', // 发行商
					date: '2020-07-14', // 发行日期
					type: '动作游戏', // 游戏类型
					platform: 'PC PS4', // 平台
					lang: '繁中 | 英文', // 语言
					label: '恐怖，探险，剧情，开放世界', // 游戏标签
					score: '9.5',
					totie: '1173'
				},
				{
					id: 8,
					imgUrl: require('@/assets/ranking/rank19.jpg'), // 游戏封面
					name: '十字军之王3', // 游戏中文名(中文译名)
					enName: 'Crusader Kings III', // 游戏英文名
					development: 'Paradox Inter.', // 开发商	
					publisher: 'Paradox Interactive', // 发行商
					date: '2020-09-02', // 发行日期
					type: '策略游戏', // 游戏类型
					platform: 'PC', // 平台
					lang: '简中 | 英文 | 多国 | 其他', // 语言
					label: '战争，历史，中世纪', // 游戏标签
					score: '8.0',
					totie: '374'
				},
				{
					id: 9,
					imgUrl: require('@/assets/ranking/rank18.jpg'), // 游戏封面
					name: '对马岛之鬼', // 游戏中文名(中文译名)
					enName: 'Ghost of Tsushima', // 游戏英文名
					development: 'Sucker Punch', // 开发商	
					publisher: 'SIE', // 发行商
					date: '2020-07-17', // 发行日期
					type: '动作角色', // 游戏类型
					platform: 'PS4', // 平台
					lang: '英文 | 日文', // 语言
					label: '写实，历史，日系', // 游戏标签
					score: '9.1',
					totie: '694'
				},
			],
		rankingGame3 = [
				{
					id: 0,
					imgUrl: require('@/assets/ranking/rank20.jpg'), // 游戏封面
					name: '骑马与砍杀2：霸主', // 游戏中文名(中文译名)
					enName: 'Mount & Blade II: Bannerlord', // 游戏英文名
					development: 'TaleWorlds Entertainment', // 开发商	
					publisher: 'TaleWorlds Entertainment', // 发行商
					date: '2020-03-30', // 发行日期
					type: '角色扮演', // 游戏类型
					platform: 'PC PS4 XBOXONE', // 平台
					lang: '简中 | 英文 | 多国', // 语言
					label: '战争，写实，中世纪，经商', // 游戏标签
					score: '7.3',
					totie: '1860'
				},
				{
					id: 1,
					imgUrl: require('@/assets/ranking/rank10.jpg'), // 游戏封面
					name: '赛博朋克2077', // 游戏中文名(中文译名)
					enName: 'Cyberpunk 2077', // 游戏英文名
					development: 'CD Projekt RED', // 开发商	
					publisher: 'CD Projekt RED', // 发行商
					date: '2020-12-10', // 发行日期
					type: '动作角色', // 游戏类型
					platform: 'PC PS4 XBOXONE PS5', // 平台
					lang: '简中 | 繁中 | 英文 | 日文', // 语言
					label: '科幻，赛博朋克，剧情', // 游戏标签
					score: '8.0',
					totie: '4410'
				},
				{
					id: 2,
					imgUrl: require('@/assets/ranking/rank22.jpg'), // 游戏封面
					name: '渡神纪：芬尼斯崛起', // 游戏中文名(中文译名)
					enName: 'Immortals Fenyx Rising', // 游戏英文名
					development: '育碧', // 开发商	
					publisher: '育碧', // 发行商
					date: '2020-12-03', // 发行日期
					type: '角色扮演', // 游戏类型
					platform: 'PC Switch PS4 XBOXONE', // 平台
					lang: '简中 | 英文 | 多国', // 语言
					label: '奇幻，创意，解谜，神话，开放世界', // 游戏标签
					score: '4.1',
					totie: '157'
				},
				{
					id: 3,
					imgUrl: require('@/assets/ranking/rank23.jpg'), // 游戏封面
					name: '三国志14', // 游戏中文名(中文译名)
					enName: 'ROMANCE OF THE THREE KINGDOMS XIV', // 游戏英文名
					development: 'Koei Tecmo', // 开发商	
					publisher: 'Koei Tecmo', // 发行商
					date: '2020-01-16', // 发行日期
					type: '策略游戏', // 游戏类型
					platform: 'PC PS4', // 平台
					lang: '繁中 | 日文', // 语言
					label: '战争，历史，三国，战棋，剧情', // 游戏标签
					score: '7.8',
					totie: '529'
				},
				{
					id: 4,
					imgUrl: require('@/assets/ranking/rank24.jpg'), // 游戏封面
					name: '腐烂国度2', // 游戏中文名(中文译名)
					enName: 'State of Decay 2', // 游戏英文名
					development: 'Undead Labs', // 开发商	
					publisher: 'Microsoft Game', // 发行商
					date: '2020-03-14', // 发行日期
					type: '第三人称射击', // 游戏类型
					platform: 'PC XBOXONE', // 平台
					lang: '简中 | 英文', // 语言
					label: '生存，丧尸，枪战', // 游戏标签
					score: '7.1',
					totie: '235'
				},
				{
					id: 5,
					imgUrl: require('@/assets/ranking/rank17.jpg'), // 游戏封面
					name: '死亡搁浅', // 游戏中文名(中文译名)
					enName: 'Death Stranding', // 游戏英文名
					development: 'Kojima Production', // 开发商	
					publisher: '索尼,505 Games', // 发行商
					date: '2020-07-14', // 发行日期
					type: '动作游戏', // 游戏类型
					platform: 'PC PS4', // 平台
					lang: '繁中 | 英文', // 语言
					label: '恐怖，探险，剧情，开放世界', // 游戏标签
					score: '9.5',
					totie: '1173'
				},
				{
					id: 6,
					imgUrl: require('@/assets/ranking/rank26.jpg'), // 游戏封面
					name: '命运2：凌光之刻', // 游戏中文名(中文译名)
					enName: 'Destiny 2', // 游戏英文名
					development: 'Bungie', // 开发商	
					publisher: 'Activision', // 发行商
					date: '2020-11-11', // 发行日期
					type: '射击游戏', // 游戏类型
					platform: 'PC PS4 XBOXONE Stadia', // 平台
					lang: '简中 | 英文', // 语言
					label: '战争，科幻，枪战，太空', // 游戏标签
					score: '8.0',
					totie: '105'
				},
				{
					id: 7,
					imgUrl: require('@/assets/ranking/rank27.jpg'), // 游戏封面
					name: '魔兽争霸3：重制版', // 游戏中文名(中文译名)
					enName: 'Warcraft III: Reforged', // 游戏英文名
					development: '暴雪', // 开发商	
					publisher: '暴雪', // 发行商
					date: '2020-01-29', // 发行日期
					type: '策略游戏', // 游戏类型
					platform: 'PC', // 平台
					lang: '简中 | 繁中', // 语言
					label: '战争，对抗，建造', // 游戏标签
					score: '3.2',
					totie: '708'
				},
				{
					id: 8,
					imgUrl: require('@/assets/ranking/rank28.jpg'), // 游戏封面
					name: '逃离塔科夫', // 游戏中文名(中文译名)
					enName: 'Escape from Tarkov', // 游戏英文名
					development: 'Battlestate Games', // 开发商	
					publisher: 'Battlestate Games', // 发行商
					date: '2020-02-01', // 发行日期
					type: '第一人称射击', // 游戏类型
					platform: 'PC', // 平台
					lang: '英文', // 语言
					label: '生存，枪战，硬核', // 游戏标签
					score: '8.5',
					totie: '233'
				},
				{
					id: 9,
					imgUrl: require('@/assets/ranking/rank29.jpg'), // 游戏封面
					name: '仁王2', // 游戏中文名(中文译名)
					enName: 'Nioh 2', // 游戏英文名
					development: 'Team Ninja', // 开发商	
					publisher: 'Koei Tecmo', // 发行商
					date: '2020-03-12', // 发行日期
					type: '动作角色', // 游戏类型
					platform: 'PC PS4', // 平台
					lang: '简中 | 繁中 | 英文 | 日文', // 语言
					label: '剧情，硬核，类魂系列', // 游戏标签
					score: '8.7',
					totie: '344'
				},
			]
	]
	return rankingGame
}
