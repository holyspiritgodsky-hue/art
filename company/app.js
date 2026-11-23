const STORAGE_KEY = 'company-opportunity-radar-v1';
		const simulationStorageKey = 'future-equity-simulation-v1';
		const userRatingStorageKey = 'company-user-ratings-v1';
const guestbookStorageKey = 'company-guestbook-v1';
		const isRoomPage = document.body.classList.contains('room-page');
		const requestedCompanyId = new URLSearchParams(window.location.search).get('company');
		const demoCompanies = [
			{
				id: 'demo-1', name: '青禾生态农业（示例）', sector: '农业种植', region: '华东 · 示例地区',
				product: '规模化种植与产地初加工，主打订单农业和稳定供货。', need: '寻找稳定采购方及加工渠道，验证连续供货能力。',
				fundingAmount: 500,
				path: '供应链', status: '重点推进', score: 55, dims: [['经营基础', 56], ['信息可信度', 42], ['需求清晰度', 64], ['对接准备度', 58]],
				thesis: '若种植标准、年度产能和订单履约记录可核实，可优先探索食品加工或区域品牌的采购合作。',
				next: '补充近两年产量、品控标准、现有客户和交付半径。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-2', name: '岭南本草科技（示例）', sector: '中药材', region: '华南 · 示例地区',
				product: '中药材种植、产地加工与质量追溯，拟打通从基地到加工端的供应链。', need: '寻找饮片、制药或健康产品领域的采购与产业合作方。',
				fundingAmount: 800,
				path: '供应链', status: '待验证', score: 54, dims: [['经营基础', 52], ['信息可信度', 45], ['需求清晰度', 60], ['对接准备度', 58]],
				thesis: '可从单一品种和明确采购规格切入，先核实检测、追溯、加工能力及稳定供货记录，再匹配下游企业。',
				next: '确认品种、检测报告、种植/加工资质和当前实际采购需求。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-3', name: '松溪康养运营（示例）', sector: '康养服务', region: '华东 · 示例地区',
				product: '拟将当地自然资源、住宿设施和健康服务组合，探索康养联营运营。', need: '寻找成熟运营团队、渠道伙伴及联营方案。',
				fundingAmount: 1200,
				path: '产业联营', status: '待验证', score: 50, dims: [['经营基础', 45], ['信息可信度', 38], ['需求清晰度', 59], ['对接准备度', 56]],
				thesis: '项目的关键不只是场地资源，还需证明客群、运营团队、服务边界和持续获客能力。适合先做运营方可行性访谈。',
				next: '核验场地用途、经营资质、客群来源、投入预算及双方收益分配设想。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-4', name: '远山药植基地（示例）', sector: '中药材', region: '西南 · 示例地区',
				product: '以道地药材种植为主，拟扩展初加工与产地仓储能力。', need: '希望对接药材加工企业、仓储物流及产业投资方。',
				fundingAmount: 650,
				path: '投资 / 并购', status: '持续观察', score: 54, dims: [['经营基础', 50], ['信息可信度', 48], ['需求清晰度', 59], ['对接准备度', 57]],
				thesis: '当前可关注产地资源和加工延伸价值，但交易路径尚不清晰，先判断扩产资金需求和股东合作意愿。',
				next: '补齐股权结构、产能利用率、加工投资预算和大股东合作意向。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-5', name: '澄海食品制造（示例）', sector: '食品加工', region: '华南 · 示例地区',
				product: '区域特色农产品加工与品牌代工，具备多品类生产线。', need: '拓展原料供应和上市公司渠道合作，评估产线协同。',
				fundingAmount: 1000,
				path: '供应链', status: '重点推进', score: 56, dims: [['经营基础', 57], ['信息可信度', 48], ['需求清晰度', 61], ['对接准备度', 58]],
				thesis: '若产线资质、产能余量和成本结构可验证，可针对消费品上市公司做定向供应商匹配。',
				next: '整理产品目录、质量体系、产线负荷、报价区间和现有客户结构。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-6', name: '云岭生物原料（示例）', sector: '生物制造', region: '西南 · 示例地区',
				product: '以植物活性原料提取和定制化加工为主，面向健康消费品客户。', need: '寻找产业客户、联合开发伙伴及潜在股权投资方。',
				fundingAmount: 1500,
				path: '投资 / 并购', status: '持续观察', score: 53, dims: [['经营基础', 51], ['信息可信度', 43], ['需求清晰度', 60], ['对接准备度', 58]],
				thesis: '可同时评估原料供应和联合开发两条路径。需先确认核心成分的检测依据、客户复购和产能爬坡情况。',
				next: '获取样品检测、客户验证、产能数据及研发成果权属材料。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-7', name: '安禾田园综合体（示例）', sector: '农业文旅', region: '华中 · 示例地区',
				product: '农业基地叠加休闲体验和康养服务，处于运营模式探索期。', need: '寻找文旅或康养运营团队，厘清联营模式。',
				fundingAmount: 900,
				path: '产业联营', status: '暂缓', score: 43, dims: [['经营基础', 42], ['信息可信度', 34], ['需求清晰度', 50], ['对接准备度', 44]],
				thesis: '现阶段经营模型与合规边界仍不清晰，暂不建议广泛对外推介；先明确土地、建设、运营和服务资质。',
				next: '补充项目手续、已投入成本、实际客流和运营团队信息后再复核。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-8', name: '精工装备科技（示例）', sector: '先进制造', region: '华东 · 示例地区',
				product: '专用零部件和自动化工装开发，面向制造业客户提供定制生产。', need: '寻找上市公司供应链准入、联合开发或产业并购机会。',
				fundingAmount: 2000,
				path: '投资 / 并购', status: '重点推进', score: 60, dims: [['经营基础', 62], ['信息可信度', 52], ['需求清晰度', 63], ['对接准备度', 63]],
				thesis: '若核心客户集中度、技术权属、质量体系和产能数据经核验，可并行探索供应链合作与产业并购意向。',
				next: '确认核心工艺与专利权属、前五大客户、产能利用率及股东交易意愿。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-9', name: '阳岭粮油合作社（示例）', sector: '农业种植', region: '华中 · 示例地区',
				product: '粮油作物订单种植与产地仓储，探索与加工企业建立稳定供销。', need: '寻找年度采购方和订单种植合作伙伴。',
				fundingAmount: 450,
				path: '供应链', status: '待验证', score: 54, dims: [['经营基础', 54], ['信息可信度', 44], ['需求清晰度', 61], ['对接准备度', 57]],
				thesis: '可从单一品类年度采购切入，重点核对种植面积、仓储损耗、交付周期和历年订单履约。',
				next: '补充种植规模、仓储条件、质量标准和近两年销售记录。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-10', name: '参源药材加工（示例）', sector: '中药材', region: '东北 · 示例地区',
				product: '药材初加工、分级和仓储，计划提升产地加工及质量追溯能力。', need: '寻找药企采购合作和加工能力升级资源。',
				fundingAmount: 700,
				path: '供应链', status: '持续观察', score: 53, dims: [['经营基础', 52], ['信息可信度', 46], ['需求清晰度', 58], ['对接准备度', 56]],
				thesis: '项目价值取决于稳定原料来源、加工标准和下游采购关系，现阶段先核验批次质量及实际订单。',
				next: '确认品种、加工资质、检测记录、库存周转和采购方要求。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-11', name: '云溪康养联营项目（示例）', sector: '康养服务', region: '西南 · 示例地区',
				product: '依托当地住宿和自然资源，探索康养服务与短住产品的联合运营。', need: '寻找成熟运营团队和稳定客源渠道。',
				fundingAmount: 1100,
				path: '产业联营', status: '待验证', score: 50, dims: [['经营基础', 48], ['信息可信度', 40], ['需求清晰度', 56], ['对接准备度', 54]],
				thesis: '可先通过运营方访谈验证客群、服务产品和单位经济模型，场地资源本身不足以证明项目可行。',
				next: '核验经营资质、实际客流、团队履历、投资预算和收益分配方案。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-12', name: '谷雨本草食品（示例）', sector: '食品加工', region: '华东 · 示例地区',
				product: '开发药食同源类食品及代工产品，面向健康消费渠道。', need: '寻找合规渠道、联合开发客户和原料供应伙伴。',
				fundingAmount: 850,
				path: '供应链', status: '持续观察', score: 54, dims: [['经营基础', 53], ['信息可信度', 45], ['需求清晰度', 60], ['对接准备度', 58]],
				thesis: '适合分别核验产品合规、生产资质和渠道复购，再匹配食品品牌或零售渠道合作。',
				next: '整理产品资质、配方与宣称依据、代工能力和渠道销售数据。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-13', name: '沃野设施农业（示例）', sector: '农业种植', region: '华南 · 示例地区',
				product: '设施农业和分级包装，面向商超及餐饮渠道提供标准化产品。', need: '拓展稳定采购、冷链协同和产能合作。',
				fundingAmount: 1300,
				path: '供应链', status: '重点推进', score: 59, dims: [['经营基础', 59], ['信息可信度', 50], ['需求清晰度', 64], ['对接准备度', 63]],
				thesis: '如果采收计划、商品率和冷链交付稳定，可优先安排采购方做产品规格与供应能力评估。',
				next: '核实月度供货量、损耗率、冷链半径、价格机制及现有渠道。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-14', name: '森泉乡村康养运营（示例）', sector: '康养服务', region: '华东 · 示例地区',
				product: '乡村闲置资产改造与康养服务运营，处于合作模式论证阶段。', need: '寻找运营方、服务机构及项目合规顾问。',
				fundingAmount: 1000,
				path: '产业联营', status: '暂缓', score: 45, dims: [['经营基础', 43], ['信息可信度', 32], ['需求清晰度', 54], ['对接准备度', 50]],
				thesis: '当前缺少可验证的客群和运营方案，建议先做资产与合规条件核查，再决定是否引入运营方。',
				next: '梳理资产权属、用途手续、改造成本、目标客群和基础服务清单。', source: '演示样例 · 非真实项目', updated: '2026-11-15',
			},
			{
				id: 'demo-15', name: '江苏海拉复生设备有限公司', sector: '工业设备与再生资源', region: '上海',
				product: '城市生活垃圾、医疗废弃物及环境保护类设备制造，兼营再生设备与相关环保工程服务。',
				need: '融资用于研发、生产、运营和市场推广；申请额度拟为5000万元，并拟出让10%股份。',
				fundingAmount: 5000,
				path: '投资 / 并购', status: '持续观察', score: 61,
				dims: [['经营基础', 64], ['信息可信度', 58], ['需求清晰度', 68], ['对接准备度', 54]],
				potentialAssessment: {
					score: 68,
					reason: '2023至2025年主营业务收入由150.89万元增长至2506.16万元，净利润由265539.22元增长至5034124.97元；申请材料披露2026至2030年产能及收入目标。',
					risk: '需核验财务报表、股权结构、经营资质、客户集中度、设备交付记录、融资用途及目标增长是否有订单支撑。',
					evidenceDate: '2026-11-23',
				},
				thesis: '企业具备设备制造、环保工程和再生资源相关业务线，财务申请材料显示收入和净利润增长，但仍需核验经营真实性、资质与市场兑现能力。',
				next: '核验三年财务报表、营业执照及资质、股东构成、在手订单、主要客户和供应商、设备交付记录，以及5000万元资金用途和股份估值依据。',
				source: '融资申请表（影印件）', updated: '2026-11-23',
			},
		];

		const demoNames = {
			'demo-1': ['青禾生态农业', '青禾生态农业科技有限公司'],
			'demo-2': ['岭南本草科技', '岭南本草农业科技有限公司'],
			'demo-3': ['松溪康养运营', '松溪健康养老服务有限公司'],
			'demo-4': ['远山药植基地', '远山药材种植有限公司'],
			'demo-5': ['澄海食品制造', '澄海食品加工有限公司'],
			'demo-6': ['云岭生物原料', '云岭生物科技有限公司'],
			'demo-7': ['安禾田园综合体', '安禾田园文旅发展有限公司'],
			'demo-8': ['精工装备科技', '精工智能装备科技有限公司'],
			'demo-9': ['阳岭粮油合作社', '阳岭粮油种植专业合作社'],
			'demo-10': ['参源药材加工', '参源药材加工有限公司'],
			'demo-11': ['云溪康养联营项目', '云溪康养服务有限公司'],
			'demo-12': ['谷雨本草食品', '谷雨本草食品有限公司'],
			'demo-13': ['沃野设施农业', '沃野设施农业科技有限公司'],
			'demo-14': ['森泉乡村康养运营', '森泉乡村康养发展有限公司'],
			'demo-15': ['江苏海拉复生设备有限公司', '江苏海拉复生设备有限公司'],
		};

		function cleanDemoLabels(company) {
			if (!company?.id?.startsWith('demo-')) return company;
			const name = String(company.name || '').replace('（示例）', '');
			const names = demoNames[company.id];
			return {
				...company,
				name: names && name === names[0] ? names[1] : name,
				region: String(company.region || '').replace(' · 示例地区', ''),
				source: String(company.source || '').replace('演示样例 · 非真实项目', '').trim(),
			};
		}

		demoCompanies.forEach((company, index) => {
			demoCompanies[index] = cleanDemoLabels(company);
		});

		const statusClass = { '重点推进': 'status-focus', '待验证': 'status-check', '持续观察': 'status-watch', '暂缓': 'status-hold' };
		let companies = loadCompanies();
		let userRatingStorageError = false;
		let userRatings = loadUserRatings();
		let selectedId = companies.some((company) => company.id === requestedCompanyId) ? requestedCompanyId : companies[0]?.id || '';
		let selectedSector = null;
		let mobileDetailOpen = true;
		let editingId = '';
		let companyDetailsOpen = false;
		let scoreGuideOpen = false;
		let simulationStorageError = false;
		let simulation = loadSimulationState();
		let simulationTargetCompanyId = selectedId;
		let simulationAmountDraft = null;
		let editingDecisionId = '';
		const decisionDrafts = new Map();
		let roomGameRuntime = null;
		let toastTimer;

		function createSimulationState() {
			return { initialCapital: 1000000, cash: 1000000, positions: [], decisions: [] };
		}

		function loadSimulationState() {
			const initial = createSimulationState();
			try {
				const saved = JSON.parse(localStorage.getItem(simulationStorageKey) || 'null');
				if (!saved) return initial;
				if (!Array.isArray(saved.positions) || !Number.isFinite(saved.cash) || !Number.isFinite(saved.initialCapital) ||
					saved.positions.some((position) => !position || typeof position.companyId !== 'string' ||
						!Number.isFinite(position.costBasis) || position.costBasis < 0 ||
						!Number.isFinite(position.shares) || !Number.isFinite(position.price)) ||
					(saved.decisions !== undefined && (!Array.isArray(saved.decisions) || saved.decisions.some((decision) =>
						!decision || typeof decision.id !== 'string' || typeof decision.companyId !== 'string' ||
						!Number.isFinite(decision.amount) || typeof decision.createdAt !== 'string' ||
						typeof decision.reason !== 'string' || typeof decision.risk !== 'string' ||
						(decision.savedAt !== undefined && typeof decision.savedAt !== 'string'))))) {
					throw new Error('Invalid simulation data');
				}
				if (!saved.initialCapital && !saved.cash && !saved.positions.length) return initial;
				return {
					...initial,
					...saved,
					decisions: Array.isArray(saved.decisions) ? saved.decisions : [],
				};
			} catch {
				simulationStorageError = true;
				return initial;
			}
		}

		function saveSimulation(nextState) {
			if (simulationStorageError) {
				showToast('无法读取原有模拟盘，已暂停修改以保护数据。请检查浏览器存储。');
				return false;
			}
			try {
				localStorage.setItem(simulationStorageKey, JSON.stringify(nextState));
				simulation = nextState;
				return true;
			} catch {
				showToast('浏览器暂不允许保存模拟盘进度，请检查本机存储设置。');
				return false;
			}
		}

		function companyName(company) {
			if (!company) return '未选择企业';
			return company.name || '未命名企业';
		}

		function formatWan(value) {
			const amount = Number.isFinite(value) ? value / 10000 : 0;
			return `${new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 2 }).format(amount)} 万元`;
		}

		function formatYiFromWan(value) {
			const amount = Number.isFinite(value) ? value / 10000 : 0;
			return `${new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 2 }).format(amount)} 亿元`;
		}

		function loadCompanies() {
			try {
				const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
				if (!Array.isArray(stored)) return structuredClone(demoCompanies);
				const demoById = new Map(demoCompanies.map((company) => [company.id, company]));
				const saved = stored.map((company) => {
					const demo = demoById.get(company.id);
					const merged = {
					...(demoById.get(company.id) || {}),
					...company,
					};
					if (demo && !Number.isFinite(Number(merged.fundingAmount))) merged.fundingAmount = demo.fundingAmount;
					return cleanDemoLabels(merged);
				});
				const savedIds = new Set(saved.map((company) => company.id));
				return [...saved, ...demoCompanies.filter((company) => !savedIds.has(company.id)).map((company) => structuredClone(company))];
			} catch {
				return structuredClone(demoCompanies);
			}
		}

		function saveCompanies(records = companies) {
			try {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
				return true;
			} catch {
				showToast('浏览器暂不允许保存企业资料，请检查本机存储设置。');
				return false;
			}
		}

		function loadUserRatings() {
			try {
				const value = JSON.parse(localStorage.getItem(userRatingStorageKey) || '{}');
				if (!value || Array.isArray(value) || typeof value !== 'object' ||
					Object.values(value).some((score) => !Number.isInteger(score) || score < 0 || score > 100)) {
					throw new Error('Invalid user rating data');
				}
				return value;
			} catch {
				userRatingStorageError = true;
				return {};
			}
		}

		function getUserRating(company) {
			if (userRatingStorageError) return null;
			return Object.prototype.hasOwnProperty.call(userRatings, company.id) ? userRatings[company.id] : null;
		}

		function getUserSentiment(company) {
			if (userRatingStorageError) return null;
			const rating = getUserRating(company);
			return rating === null ? 20 : Math.round((20 + rating) / 2);
		}

		function saveUserRating(company, rating) {
			if (userRatingStorageError) {
				showToast('无法读取已有评分，已暂停保存以保护数据。请检查浏览器存储。');
				return false;
			}
			const next = { ...userRatings, [company.id]: rating };
			try {
				localStorage.setItem(userRatingStorageKey, JSON.stringify(next));
				userRatings = next;
				return true;
			} catch {
				showToast('浏览器暂不允许保存评分，请检查本机存储设置。');
				return false;
			}
		}

		function getScoreCalculation(company) {
			if (company.assessed === false) return null;
			if (Array.isArray(company.dims) && company.dims.length) {
				const rawScore = Math.round(company.dims.reduce((sum, item) => sum + Number(item[1] || 0), 0) / company.dims.length);
				const credibility = Number(company.dims.find(([label]) => label === '信息可信度')?.[1]);
				if (!Number.isFinite(credibility)) return null;
				const evidenceCap = Math.round(20 + 0.6 * Math.max(0, Math.min(100, credibility)));
				const baseScore = Math.min(rawScore, evidenceCap);
				const sentiment = getUserSentiment(company);
				const adjustment = sentiment === null ? 0 : (sentiment - 20) * 0.1;
				const score = Math.max(0, Math.min(100, Math.round(baseScore + adjustment)));
				return { rawScore, credibility, evidenceCap, baseScore, adjustment, score };
			}
			return null;
		}

		function getScore(company) {
			return getScoreCalculation(company)?.score ?? null;
		}

		function companyRegion(company) {
			return String(company.region || '').trim();
		}

		function filteredCompanies(includeRegion = true) {
			const query = document.getElementById('searchInput').value.trim().toLowerCase();
			const sector = selectedSector;
			return companies.filter((company) => {
				const searchable = [company.name, company.sector, company.region, company.product].join(' ').toLowerCase();
				return (!query || searchable.includes(query)) && (!sector || company.sector === sector);
			});
		}

		function renderSectorOptionsBar() {
			const options = document.getElementById('sectorOptionsBar');
			if (!options) return;
			const counts = new Map();
			companies.forEach((company) => counts.set(company.sector, (counts.get(company.sector) || 0) + 1));
			const hadFocus = options.contains(document.activeElement);
			const focusedSector = hadFocus ? document.activeElement.dataset.sector : undefined;
			options.innerHTML = `<button class="region-option" type="button" data-all-sector="true" aria-pressed="${selectedSector === null}">全部行业 ${companies.length}</button>` +
				[...counts.keys()].filter(Boolean).sort((a, b) => a.localeCompare(b, 'zh-CN')).map((sector) => `<button class="region-option" type="button" data-sector="${escapeHtml(sector)}" aria-pressed="${selectedSector === sector}">${escapeHtml(sector)} ${counts.get(sector)}</button>`).join('');
			if (focusedSector !== undefined) [...options.querySelectorAll('[data-sector]')].find((button) => button.dataset.sector === focusedSector)?.focus();
			else if (hadFocus) options.querySelector('[data-all-sector]').focus();
		}

		function updateMetrics(records) {
			document.getElementById('resultCount').textContent = `${records.length} 个项目`;
		}

		function renderDecisionDeck(records) {
			const cards = [...records]
				.sort((a, b) => Number(Boolean(b.watch)) - Number(Boolean(a.watch)) ||
					Number(b.status === '重点推进') - Number(a.status === '重点推进'))
				.slice(0, 3);
			document.getElementById('decisionCards').innerHTML = cards.map((company) =>
				`<article class="decision-card ${company.id === selectedId ? 'active' : ''}" data-decision-id="${escapeHtml(company.id)}" tabindex="0" role="button" aria-label="查看${escapeHtml(companyName(company))}">
					<h3>${escapeHtml(companyName(company))}</h3>
					<div class="decision-industry">${escapeHtml(company.sector)} · ${escapeHtml(company.region || '地区待补')}</div>
					<p class="decision-desc">${escapeHtml(company.product || company.need || '暂无业务简介。')}</p>
				</article>`,
			).join('') || '<div class="empty">没有符合条件的企业。</div>';
			document.querySelectorAll('[data-decision-id]').forEach((card) => {
				const select = () => {
					selectedId = card.dataset.decisionId;
					renderList();
					document.getElementById('detailPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
				};
				card.addEventListener('click', select);
				card.addEventListener('keydown', (event) => {
					if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(); }
				});
			});
		}

		function renderList() {
			const records = filteredCompanies();
			if (!records.some((item) => item.id === selectedId)) selectedId = records[0]?.id || '';
			renderSectorOptionsBar();
			updateMetrics(records);
			const detailPanel = document.getElementById('detailPanel');
			const workspace = document.querySelector('.workspace');
			if (detailPanel.parentElement !== workspace) workspace.appendChild(detailPanel);
			const invitationCompany = companies.find((company) => company.id === selectedId);
			const homeRoomScene = document.getElementById('homeRoomScene');
			if (homeRoomScene) {
				homeRoomScene.innerHTML = `${renderMeetingScene(invitationCompany, 'home')}<div class="home-room-character"><canvas width="220" height="180" aria-hidden="true"></canvas><span>企业代表</span></div><div class="home-room-copy"><strong>企业会客室</strong><span>与企业代表面对面聊聊业务与机会。</span></div>`;
				drawRoomPreview(invitationCompany, homeRoomScene.querySelector('.room-preview-canvas'));
				drawRoomRepresentativePreview(invitationCompany, homeRoomScene.querySelector('.home-room-character canvas'));
			}
			const tbody = document.getElementById('companyRows');
			if (!records.length) {
				tbody.innerHTML = '<tr><td class="empty" colspan="5">没有符合条件的企业。试试调整筛选，或新增一条企业记录。</td></tr>';
				renderDetail();
				return;
			}
			tbody.innerHTML = records.map((company) => `
				<tr class="project-row ${company.id === selectedId ? 'active' : ''}" data-id="${escapeHtml(company.id)}" tabindex="0">
					<td><div class="company-name">${escapeHtml(companyName(company))}</div><div class="company-sub" title="${escapeHtml(company.product || '业务描述待补')}">${escapeHtml(company.product || '业务描述待补')}</div></td>
					<td>${escapeHtml(company.sector)}</td>
					<td><canvas class="company-representative-canvas" width="56" height="56" data-representative-company="${escapeHtml(company.id)}" aria-label="企业代表形象"></canvas></td>
					<td><button class="row-star ${company.watch ? 'on' : ''}" type="button" data-star="${escapeHtml(company.id)}" aria-label="${company.watch ? '取消重点' : '标为重点'}">${company.watch ? '★' : '☆'}</button></td>
					<td><button class="btn btn-small btn-primary row-room" type="button" data-room-company="${escapeHtml(company.id)}">企业咨询</button></td>
				</tr>`).join('');
			tbody.querySelectorAll('[data-representative-company]').forEach((canvas) => {
				const company = companies.find((item) => item.id === canvas.dataset.representativeCompany);
				if (!company) return;
				const context = canvas.getContext('2d');
				if (context) drawRoomGameCharacter(context, createRoomGameHero(company, 'representative', 28, 43));
			});
			tbody.querySelectorAll('.project-row').forEach((row) => {
				const selectRow = (event) => {
					if (event.target.closest('[data-star]')) return;
					const isSameCompany = selectedId === row.dataset.id;
					selectedId = row.dataset.id;
					mobileDetailOpen = !(isSameCompany && mobileDetailOpen);
					renderList();
					renderDetail();
				};
				row.addEventListener('click', selectRow);
				row.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectRow(event); } });
			});
			if (window.matchMedia('(max-width: 680px)').matches && mobileDetailOpen) {
				const selectedRow = [...tbody.querySelectorAll('.project-row')].find((row) => row.dataset.id === selectedId);
				if (selectedRow) {
					selectedRow.insertAdjacentHTML('afterend', '<tr class="mobile-detail-row"><td colspan="5"></td></tr>');
					selectedRow.nextElementSibling.firstElementChild.appendChild(detailPanel);
				}

			}
			tbody.querySelectorAll('[data-star]').forEach((button) => button.addEventListener('click', (event) => {
				event.stopPropagation();
				const company = companies.find((item) => item.id === button.dataset.star);
				if (company) company.watch = !company.watch;
				saveCompanies();
				renderList();
			}));
			tbody.querySelectorAll('[data-room-company]').forEach((button) => button.addEventListener('click', (event) => {
				event.stopPropagation();
				openMeetingRoom(button.dataset.roomCompany);
			}));
			renderDetail();
		}

		function renderDetail() {
			const company = companies.find((item) => item.id === selectedId);
			const panel = document.getElementById('detailPanel');
			const companyDetails = panel.querySelector('#companyDetails');
			if (companyDetails) companyDetailsOpen = companyDetails.open;
			const scoreGuide = panel.querySelector('#scoreGuide');
			if (scoreGuide) scoreGuideOpen = scoreGuide.open;
			if (!company) {
				panel.innerHTML = '<div class="empty">选择一家企业，了解它的业务。</div>';
				return;
			}
			const calculation = getScoreCalculation(company);
			const score = calculation?.score ?? null;
			const dims = Array.isArray(company.dims) ? company.dims : [];
			const sentiment = getUserSentiment(company);
			const rating = getUserRating(company);
			panel.innerHTML = `
				<div class="section-head"><div><div class="detail-name">${escapeHtml(companyName(company))}</div></div>
					<div class="detail-actions"><button class="btn btn-small" id="detailEdit" type="button">编辑</button></div></div>
				<section class="score-card score-${score === null ? 'pending' : score >= 75 ? 'high' : score >= 60 ? 'good' : score >= 45 ? 'watch' : 'low'}" aria-label="资料与对接观察评分">
					<div class="score-overview">
						<div><div class="score-heading">资料与对接观察</div><div class="score-conclusion">${score === null ? '尚未评分' : userRatingStorageError ? '资料观察分（评分数据不可读取）' : '综合观察分'}</div><div class="score-explain">仅供初筛参考，不代表潜力或投资评级。</div></div>
						<div class="score-badge"><div class="score-caption">${score === null ? '待评估' : '观察分'}</div><div class="score-number">${score ?? '—'}</div><div class="score-scale">满分 100</div></div>
					</div>
					<div class="score-dimensions">
						<div class="block-title"><span>分项观察</span></div>
						${dims.map(([label, value]) => `<div class="dim-row dim-score-${Number(value) >= 75 ? 'high' : Number(value) >= 60 ? 'good' : Number(value) >= 45 ? 'watch' : 'low'}"><span>${escapeHtml(label)}</span><span class="dim-value">${Number(value)} / 100</span><div class="bar-track" role="progressbar" aria-label="${escapeHtml(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Number(value)}"><div class="bar-fill" style="width:${Math.max(0, Math.min(100, Number(value)))}%"></div></div></div>`).join('') || '<div class="detail-meta">暂无分项评分。</div>'}
						<div class="dim-row ${sentiment === null ? '' : `dim-score-${sentiment >= 75 ? 'high' : sentiment >= 60 ? 'good' : sentiment >= 45 ? 'watch' : 'low'}`}">
							<span>用户看好度</span><span class="dim-value">${sentiment === null ? '评分数据不可读取' : `${sentiment} / 100`}</span>
							${sentiment === null ? '' : `<div class="bar-track" role="progressbar" aria-label="用户看好度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${sentiment}"><div class="bar-fill" style="width:${sentiment}%"></div></div>`}
						</div>
						<form class="rating-form" id="userRatingForm">
							<label for="userRating">我的评分</label><input id="userRating" type="number" min="0" max="100" step="1" required value="${rating ?? ''}" ${userRatingStorageError ? 'disabled' : ''}>
							<button class="btn btn-small" type="submit" ${userRatingStorageError ? 'disabled' : ''}>${rating === null ? '评分' : '修改评分'}</button>
							<span class="rating-note">仅本机演示</span>
						</form>
					</div>
				</section>
				<details class="theory" id="companyDetails" ${companyDetailsOpen ? 'open' : ''}>
					<summary><span class="theory-title">查看企业资料</span><span class="theory-chevron">⌄</span></summary>
					<div class="theory-body">
						<div class="info-grid">
							<div class="info-item"><div class="info-label">行业与地区</div><div class="info-value">${escapeHtml(company.sector)}${company.region ? ` · ${escapeHtml(company.region)}` : ''}</div></div>
							${company.product ? `<div class="info-item"><div class="info-label">主要业务</div><div class="info-value">${escapeHtml(company.product)}</div></div>` : ''}
							${company.need ? `<div class="info-item"><div class="info-label">希望获得的支持</div><div class="info-value">${escapeHtml(company.need)}</div></div>` : ''}
							${company.path ? `<div class="info-item"><div class="info-label">合作方向</div><div class="info-value">${escapeHtml(company.path)}</div></div>` : ''}
							${company.status ? `<div class="info-item"><div class="info-label">推进阶段</div><div class="info-value"><span class="status ${statusClass[company.status] || 'status-watch'}">${escapeHtml(company.status)}</span></div></div>` : ''}
							${company.thesis ? `<div class="info-item"><div class="info-label">机会假设</div><div class="info-value">${escapeHtml(company.thesis)}</div></div>` : ''}
							${company.next ? `<div class="info-item"><div class="info-label">待核实事项</div><div class="info-value">${escapeHtml(company.next)}</div></div>` : ''}
						</div>
						${!company.product && !company.need && !company.path && !company.status && !company.thesis && !company.next ? '<p class="detail-meta">企业资料尚未填写。</p>' : ''}
						<details class="score-guide" id="scoreGuide" ${scoreGuideOpen ? 'open' : ''}>
							<summary><span>评分判断依据</span><span class="score-guide-chevron">⌄</span></summary>
							<h4>综合观察分怎么算</h4>
							<p>四项资料分的平均值与核验上限（20 + 0.6 × 信息可信度）分别四舍五入后取较小值，得到资料基础分。综合观察分再加上（用户看好度 − 20）× 10%，四舍五入并限制在 0–100 分。</p>
							${calculation ? `<p>当前企业：原始分 ${calculation.rawScore}，核验上限 ${calculation.evidenceCap}，资料基础分 ${calculation.baseScore}，${userRatingStorageError ? '评分数据不可读取，暂未计入看好度' : `看好度调整 ${calculation.adjustment >= 0 ? '+' : ''}${Number(calculation.adjustment.toFixed(1))}`}，显示分 ${calculation.score}。</p>` : '<p>当前企业资料评分尚不完整，暂不计算综合观察分。</p>'}
							<h4>四项分数看什么</h4>
							<p><strong>经营基础：</strong>看产品是否可交付、是否有客户验证及持续经营记录。可核对样品、订单、交付或复购记录；仅有商业计划不宜按成熟业务评分。</p>
							<p><strong>信息可信度：</strong>看材料是否完整、来源是否可靠、关键说法能否交叉核实。企业自述可作为线索，合同、检测报告或第三方记录需核验真实性和时效。</p>
							<p><strong>需求清晰度：</strong>看企业希望解决什么问题、需要哪些资源、希望与谁合作；诉求越具体、边界越明确，越便于匹配。</p>
							<p><strong>对接准备度：</strong>看决策人是否明确、必要材料是否齐备，以及能否安排下一步沟通或核验。</p>
							<h4>分数高低怎么判断</h4>
							<p>0–39 分：仍是设想或关键证据不足；40–59 分：有初步材料，但重要问题待核实；60–74 分：关键事项已有较充分验证；75 分以上：有持续、可独立核验的证据。资料不足以判断时，应留空而不是猜分。</p>
							<h4>用户看好度怎么看</h4>
							<p>初始为 20 分；本机评分后，看好度为 20 与本次评分的平均值（四舍五入）。再次评分会替换原评分，不会累计人数。仅供本机演示，并非多人平均分；看好度调整加在资料基础分之后，不能替代资料核验。</p>
							<p>上述分档和核验上限是初筛用的经验规则，未经历史数据验证，不代表投资评级。${company.id.startsWith('demo-') ? '示例分数仅用于展示，不代表实际核验结果。' : ''}</p>
						</details>
					</div>
				</details>`;
			panel.querySelector('#detailEdit').addEventListener('click', () => openModal(company.id));
			panel.querySelector('#userRatingForm').addEventListener('submit', (event) => {
				event.preventDefault();
				const input = panel.querySelector('#userRating');
				const rating = Number(input.value);
				if (!input.value || !Number.isInteger(rating) || rating < 0 || rating > 100) {
					showToast('请输入 0 到 100 的整数评分。');
					return;
				}
				if (saveUserRating(company, rating)) renderList();
			});
		}

		function escapeHtml(value) {
			return String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
		}

		function refreshSectorOptions() {
			const sectors = [...new Set(companies.map((item) => item.sector).filter(Boolean))].sort();
			document.getElementById('sectorOptions').innerHTML = sectors.map((sector) => `<option value="${escapeHtml(sector)}"></option>`).join('');
		}

		function showToast(message) {
			const toast = document.getElementById('toast');
			toast.textContent = message;
			toast.classList.add('show');
			clearTimeout(toastTimer);
			toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
		}

		function loadGuestbook() {
			try {
				const entries = JSON.parse(localStorage.getItem(guestbookStorageKey) || '[]');
				return Array.isArray(entries) ? entries : [];
			} catch {
				return [];
			}
		}

		function renderGuestbook() {
			const container = document.getElementById('guestbookEntries');
			if (!container) return;
			const entries = loadGuestbook();
			container.innerHTML = entries.length ? entries.map((entry) => {
				const date = new Date(entry.createdAt);
				const dateLabel = Number.isFinite(date.getTime()) ? date.toLocaleString('zh-CN') : '时间未知';
				return `<article class="guestbook-entry"><div class="guestbook-entry-head"><strong>${escapeHtml(entry.name || '匿名用户')}</strong><span>${escapeHtml(dateLabel)}</span></div><p>${escapeHtml(entry.message)}</p></article>`;
			}).join('') : '<div class="guestbook-empty">还没有留言，欢迎留下第一条。</div>';
		}

		function roomReply(company, topic) {
			const replies = {
				product: company?.product || '这家企业的业务资料尚未补充。',
				competitors: `${company?.sector || '所在行业'}的竞争主要来自拥有成熟客户、稳定交付和规模化渠道的企业。当前还缺少明确的竞争对手名单，需要进一步核实市场份额、产品差异和客户重合度。`,
				need: company?.need || '这家企业的合作需求尚未补充。',
				risk: company?.next || '目前缺少详细核验资料，请先补充经营数据和相关证明。',
				future: company?.thesis || '当前尚未形成机会假设，需要补充资料后再讨论未来。',
			};
			return replies[topic] || '欢迎来到会客室。想先了解我们的业务、需求，还是需要核验的事项？';
		}

		function requestedFundingWan(company) {
			const amount = Number(company?.fundingAmount);
			return Number.isFinite(amount) && amount > 0 ? amount : null;
		}

		function estimatedCompanyValuationWan(company, fundingWan) {
			const score = Number(company?.score) || 50;
			return Math.max(fundingWan * 4, score * 100);
		}

		function estimatedEquityRatio(company, fundingWan) {
			const estimatedValuationWan = estimatedCompanyValuationWan(company, fundingWan);
			return fundingWan / (fundingWan + estimatedValuationWan) * 100;
		}

		function projectedDilutedEquityRatio(company, equityRatio) {
			const score = Number(company?.score) || 50;
			const dilutionRate = Math.min(.4, Math.max(.28, .44 - score / 500));
			return {
				rate: dilutionRate,
				ratio: equityRatio * (1 - dilutionRate),
			};
		}

		function fiveYearMarketCapBenchmark(sector) {
			return ({
				农业种植: 8.5,
				中药材: 10,
				食品加工: 9,
				康养服务: 8,
				农业文旅: 7.5,
				生物制造: 18,
				先进制造: 14,
			})[sector] || 9;
		}

		function renderInvestmentFlow(company) {
			const fundingWan = requestedFundingWan(company);
			const amountLabel = fundingWan === null ? '待企业确认' : `${fundingWan} 万元`;
			const amountAction = fundingWan === null ? '融资金额待补充' : `是，投资 ${fundingWan} 万元`;
			return `<section class="room-investment-flow" id="roomInvestmentFlow" hidden>
				<div class="room-investment-head">
					<div><h2>会谈完成：是否投资？</h2></div>
					<span class="room-investment-amount">企业融资需求：${escapeHtml(amountLabel)}</span>
				</div>
				<div class="room-investment-actions">
					<button class="btn btn-primary" type="button" data-investment-choice="yes" ${fundingWan === null ? 'disabled' : ''}>${escapeHtml(amountAction)}</button>
					<button class="btn" type="button" data-investment-choice="no">暂不投资</button>
				</div>
				<div class="room-investment-result" id="roomInvestmentResult" hidden></div>
			</section>`;
		}

		function renderPlayableMeetingScene(company) {
			const background = renderMeetingScene(company, 'meeting-background', false)
				.replace(/<g transform="translate\(458 177\)">[\s\S]*?<\/g>\s*<g transform="translate\(328 270\)">[\s\S]*?<\/g>/, '')
				.replace('<ellipse cx="390" cy="452" rx="305" ry="38" fill="#0b1c22" opacity=".3"/>', '')
				.replace('<div class="room-stage">', '<div class="room-stage room-play-stage">');
			return background.replace('<span class="room-stage-hint">你与虚构企业代表 · 会面中</span>', `
				<canvas id="roomGameCanvas" width="760" height="510" aria-label="企业会客室场景"></canvas>
				<section class="room-game-dialog" id="roomGameDialog" hidden aria-live="polite">
					<div class="room-dialog-bubble room-dialog-representative" id="roomRepresentativeBubble">
						<div class="room-game-dialog-head"><strong id="roomGameDialogTitle">企业代表</strong><span>回答</span></div>
						<p id="roomGameDialogText"></p>
					</div>
					<div class="room-dialog-bubble room-dialog-player" id="roomPlayerBubble">
						<div class="room-game-dialog-head"><strong>你</strong><span>提问</span></div>
						<p id="roomPlayerMessage" hidden></p>
						<div class="room-game-questions" id="roomGameQuestions">
							<button type="button" data-room-game-topic="product">了解业务和产品</button>
							<button type="button" data-room-game-topic="competitors">了解同行业竞争对手</button>
							<button type="button" data-room-game-topic="need">询问合作需求</button>
							<button type="button" data-room-game-topic="risk">追问风险和证据</button>
							<button type="button" data-room-game-topic="future">讨论下一步机会</button>
						</div>
						<button class="room-game-close" id="roomGameClose" type="button">结束访谈</button>
					</div>
				</section>`);
		}

		function renderTenYearProjection(company, fundingWan, equityRatio) {
			const score = Math.round(Number(company?.score) || 50);
			const sector = company?.sector || '所在行业';
			const annualGrowth = Math.min(.16, Math.max(.08, .08 + score / 1000));
			const dilution = projectedDilutedEquityRatio(company, equityRatio);
			const estimatedValuationWan = fundingWan / (equityRatio / 100);
			const fiveYearMarketCapFactor = fiveYearMarketCapBenchmark(sector);
			const executionReadinessFactor = .85 + score / 200;
			const ipoMarketCapWan = estimatedValuationWan * fiveYearMarketCapFactor * executionReadinessFactor;
			const projectedMarketCapWan = ipoMarketCapWan * fiveYearMarketCapFactor * executionReadinessFactor;
			const projectedEquityValueWan = projectedMarketCapWan * dilution.ratio / 100;
			const steps = [
				`当前输入：经营评分 ${score}分、融资需求 ${fundingWan}万元、估算持股 ${equityRatio.toFixed(2)}%`,
				`前5年：按${sector}同行业上市公司5年市值基准 ${fiveYearMarketCapFactor.toFixed(2)} 倍，并结合执行成熟度 ${executionReadinessFactor.toFixed(2)}，推算上市市值约 ${formatYiFromWan(ipoMarketCapWan)}`,
				`上市前经营演化：核心业务保持年均 ${(annualGrowth * 100).toFixed(1)}% 增长，订单、交付与现金流逐步达到上市要求`,
				`后5年：再次应用同行业5年市值基准与执行成熟度，规模、利润和产业协同推动市值进入 ${formatYiFromWan(projectedMarketCapWan)} 区间`,
				`后续融资与上市增发预计稀释 ${(dilution.rate * 100).toFixed(1)}%，最终持股约 ${dilution.ratio.toFixed(2)}%`,
				`10年结果：公司可能达到的市值约 ${formatYiFromWan(projectedMarketCapWan)}；按稀释后股权计算，对应价值约 ${formatYiFromWan(projectedEquityValueWan)}`,
			];
			return `<div class="room-projection room-projection-ten">
				<div class="room-projection-title">10年后：良性经营推演</div>
				<div class="room-projection-steps">${steps.map((step, index) => `<p class="room-projection-step" data-step="${index}" hidden>${escapeHtml(step)}</p>`).join('')}</div>
				<div class="room-market-value" hidden>
					<div><span>公司可能达到的市值</span><strong>${escapeHtml(formatYiFromWan(projectedMarketCapWan))}</strong></div>
					<div class="room-market-value-highlight"><span>预计股权价值（按稀释后持股${dilution.ratio.toFixed(2)}%计算）</span><strong>${escapeHtml(formatYiFromWan(projectedEquityValueWan))}</strong></div>
				</div>
				<div class="room-projection-summary" hidden>
					<strong>${escapeHtml(companyName(company))} · 行业协同增长</strong>
					<p>若订单履约、产能扩张和信息披露持续改善，企业有机会形成稳定的产业链位置，并围绕核心产品建立更高复购与议价能力。</p>
					<span>参考同行业上市公司5年市值趋势，不代表实际行情或收益承诺。</span>
				</div>
				<div class="room-next-actions" hidden>
					<div class="room-next-actions-head">
						<strong>下一步可以继续了解</strong>
						<span>推演仅用于交流，不构成投资或估值承诺。</span>
					</div>
					<div class="room-next-actions-grid">
						<a class="room-next-action" href="index.html?submit=1">
							<strong>试试我的企业估值</strong>
							<span>提交企业项目与经营资料</span>
						</a>
						<a class="room-next-action" href="index.html">
							<strong>继续考察项目</strong>
							<span>浏览更多合作与投资项目</span>
						</a>
						<a class="room-next-action" href="index.html#guestbookPanel">
							<strong>预约专业沟通</strong>
							<span>与华鑫团队交流合作方向</span>
						</a>
					</div>
				</div>
			</div>`;
		}

		function renderHundredYearProjection(company) {
			return `<div class="room-projection room-projection-space">
				<div class="room-space-stars"></div><div class="room-space-signal"></div><div class="room-space-planet"></div><div class="room-space-orbit"></div><div class="room-space-satellite"><i></i></div>
				<div class="room-space-copy"><span>YEAR 2126 · SPECULATIVE SCENARIO</span><h3>100年后的企业：走向深空</h3>
					<p>${escapeHtml(companyName(company))}的产业基因被延伸为跨行星生态系统，农业、材料、能源与生命支持网络在轨道殖民地持续协同。</p>
					<small>科幻图景，不代表对真实企业未来的预测。</small>
				</div>
			</div>`;
		}

		function createRoomGameHero(company, role, x, y) {
			const heroStore = window.WarHeroes;
			if (!heroStore) return { x, y, dir: role === 'player' ? 0 : Math.PI, body: role === 'player' ? '#5c8d9b' : '#d4a654', head: '#e9b38e', accent: '#b9e8dd', weaponType: 'saber', business: role === 'player' };
			if (role === 'player' && heroStore.createMainPlayer) {
				return { ...heroStore.createMainPlayer(x, y, { dir: 0 }), business: true };
			}
			const heroBySector = {
				农业种植: 'zhugeliang',
				中药材: 'zhugeliang',
				食品加工: 'daqiao',
				康养服务: 'daqiao',
				农业文旅: 'xiaoqiao',
				生物制造: 'ironman',
				先进制造: 'lancelot',
			};
			const heroByCompany = {
				'demo-1': 'zhugeliang',
				'demo-2': 'daqiao',
				'demo-3': 'xiaoqiao',
				'demo-4': 'lancelot',
				'demo-5': 'blackwidow',
				'demo-6': 'ironman',
				'demo-7': 'homelander',
				'demo-8': 'hawkeye',
				'demo-9': 'sanada',
				'demo-10': 'sunshangxiang',
				'demo-11': 'elizabeth',
				'demo-12': 'liuxiu',
				'demo-13': 'supersaiyan',
				'demo-14': 'diablo',
			};
			const heroId = heroByCompany[company?.id] || heroBySector[company?.sector] || 'lancelot';
			const hero = heroStore.createCompanion ? heroStore.createCompanion(heroId, x, y) : null;
			return hero || { x, y, dir: Math.PI, body: '#d4a654', head: '#e9b38e', accent: '#f4e2ad', weaponType: 'saber' };
		}

		function drawRoomGameCharacter(context, character) {
			const detailRuntime = window.WarHeroes?.detailRuntime;
			if (character.business) {
				context.save();
				context.translate(character.x, character.y);
				context.scale(1.15, 1.15);
				context.fillStyle = 'rgba(20, 42, 44, .25)';
				context.beginPath();
				context.ellipse(0, 15, 13, 6, 0, 0, Math.PI * 2);
				context.fill();
				context.strokeStyle = '#26363f';
				context.lineWidth = 2;
				context.beginPath();
				context.moveTo(-2, 4); context.lineTo(-3, 12);
				context.moveTo(2, 4); context.lineTo(3, 12);
				context.stroke();
				context.fillStyle = character.body;
				context.fillRect(-6, -8, 12, 14);
				context.fillStyle = character.accent;
				context.fillRect(-2, -8, 4, 14);
				context.fillStyle = character.head;
				context.beginPath();
				context.arc(0, -13, 5, 0, Math.PI * 2);
				context.fill();
				context.fillStyle = '#2c2020';
				context.fillRect(-5, -17, 10, 3);
				context.fillStyle = '#8b6a43';
				context.fillRect(7, 0, 7, 6);
				context.strokeStyle = '#d7b878';
				context.lineWidth = 1.3;
				context.strokeRect(7, 0, 7, 6);
				context.beginPath();
				context.arc(10.5, 0, 2.2, Math.PI, 0);
				context.stroke();
				context.restore();
				return;
			}
			const specializedRenderer = {
				zhugeliang: 'drawZhugeliangHero',
				lancelot: 'drawLancelotHero',
				xiaoqiao: 'drawXiaoqiao',
				sunshangxiang: 'drawSunshangxiang',
				daqiao: 'drawDaqiao',
				elizabeth: 'drawElizabeth',
				blackwidow: 'drawBlackwidowHero',
				ironman: 'drawIronmanHero',
				homelander: 'drawHomelanderHero',
				hawkeye: 'drawHawkeyeHero',
				supersaiyan: 'drawSupersaiyanHero',
				liuxiu: 'drawLiuxiuHero',
				diablo: 'drawDiabloHero',
			}[character.heroId];
			context.save();
			context.strokeStyle = `rgba(130, 195, 255, ${0.18 + Math.sin(performance.now() * 0.005 + character.x) * 0.05})`;
			context.lineWidth = 1.4;
			context.beginPath();
			context.arc(character.x, character.y - 5, 24 + Math.sin(performance.now() * 0.008 + character.y) * 1.2, 0, Math.PI * 2);
			context.stroke();
			context.restore();
			if (specializedRenderer && detailRuntime?.[specializedRenderer]) {
				const hero = { ...character, x: 0, y: 0 };
				context.save();
				context.translate(character.x, character.y);
				context.scale(1.65, 1.65);
				detailRuntime[specializedRenderer]({
					hero,
					ctx: context,
					drawHealthBar: () => {},
					drawSoldier: (soldier, female, body, accent) => {
						context.fillStyle = 'rgba(20, 42, 44, .25)';
						context.beginPath();
						context.ellipse(0, 17, 18, 8, 0, 0, Math.PI * 2);
						context.fill();
						context.fillStyle = body || soldier.body || '#d4a654';
						context.beginPath();
						context.moveTo(-14, 14);
						context.lineTo(-11, -4);
						context.quadraticCurveTo(0, -13, 11, -4);
						context.lineTo(14, 14);
						context.quadraticCurveTo(0, 22, -14, 14);
						context.fill();
						context.fillStyle = accent || soldier.accent || '#f4e2ad';
						context.fillRect(-10, -1, 20, 4);
						context.fillStyle = soldier.head || '#e9b38e';
						context.beginPath();
						context.arc(0, -16, 10, 0, Math.PI * 2);
						context.fill();
					},
					getFacing: (direction) => Math.cos(direction || 0) >= 0 ? 1 : -1,
					showName: false,
				});
				context.restore();
				return;
			}
			if (detailRuntime?.drawEnemyGeneralHero) {
				detailRuntime.drawEnemyGeneralHero({
					hero: character,
					ctx: context,
					drawHealthBar: () => {},
					showName: false,
				});
				return;
			}
			context.save();
			context.translate(character.x, character.y);
			context.rotate(character.dir || 0);
			context.fillStyle = 'rgba(20, 42, 44, .25)';
			context.beginPath();
			context.ellipse(0, 17, 18, 8, 0, 0, Math.PI * 2);
			context.fill();
			context.fillStyle = character.body || '#d4a654';
			context.beginPath();
			context.moveTo(-14, 14);
			context.lineTo(-11, -4);
			context.quadraticCurveTo(0, -13, 11, -4);
			context.lineTo(14, 14);
			context.quadraticCurveTo(0, 22, -14, 14);
			context.fill();
			context.fillStyle = character.accent || '#f4e2ad';
			context.fillRect(-10, -1, 20, 4);
			context.fillStyle = '#e9b38e';
			context.beginPath();
			context.arc(0, -16, 10, 0, Math.PI * 2);
			context.fill();
			context.fillStyle = '#273d40';
			context.beginPath();
			context.arc(0, -20, 10, Math.PI, Math.PI * 2);
			context.fill();
			context.restore();
		}

		function drawRoomPreview(company, canvas) {
			const context = canvas.getContext('2d');
			if (!context) return;
			context.clearRect(0, 0, canvas.width, canvas.height);
			drawRoomGameCharacter(context, createRoomGameHero(company, 'player', 328, 270));
		}

		function drawRoomRepresentativePreview(company, canvas) {
			const context = canvas?.getContext('2d');
			if (!context) return;
			context.clearRect(0, 0, canvas.width, canvas.height);
			drawRoomGameCharacter(context, createRoomGameHero(company, 'representative', 110, 132));
		}

		function startRoomGame(company) {
			const canvas = document.getElementById('roomGameCanvas');
			const dialog = document.getElementById('roomGameDialog');
			if (!canvas || !dialog) return;
			if (roomGameRuntime?.frame) cancelAnimationFrame(roomGameRuntime.frame);
			const context = canvas.getContext('2d');
			const runtime = roomGameRuntime = {
				canvas, context, dialog, company,
				player: { ...createRoomGameHero(company, 'player', 530, 230), targetX: 530, targetY: 230 },
				representative: { ...createRoomGameHero(company, 'representative', 230, 195), targetX: 230, targetY: 195, dir: 0 },
				clueScreen: { x: 490, y: 105 },
				keys: new Set(), asked: new Set(), message: '走近企业代表，开始这次会谈。',
				approachRequested: false, interactionTarget: null, interactionKind: '',
				transparent: true,
				dialogOpen: false, lastTime: performance.now(), frame: 0,
			};
			const positionDialog = () => {
				const stage = canvas.parentElement;
				const representativeBubble = document.getElementById('roomRepresentativeBubble');
				const playerBubble = document.getElementById('roomPlayerBubble');
				const anchor = runtime.interactionKind === 'screen' ? runtime.clueScreen : runtime.representative;
				const anchorLeft = anchor.x / canvas.width * stage.clientWidth;
				const anchorTop = anchor.y / canvas.height * stage.clientHeight;
				dialog.style.left = '0px';
				dialog.style.top = '0px';
				representativeBubble.style.left = `${Math.max(10, Math.min(stage.clientWidth - representativeBubble.offsetWidth - 10, anchorLeft - representativeBubble.offsetWidth - 18))}px`;
				representativeBubble.style.top = `${Math.max(10, anchorTop - representativeBubble.offsetHeight - 28)}px`;
				playerBubble.hidden = false;
				if (!playerBubble.hidden) {
					const playerLeft = runtime.player.x / canvas.width * stage.clientWidth;
					const playerTop = runtime.player.y / canvas.height * stage.clientHeight;
					playerBubble.style.left = `${Math.max(10, Math.min(stage.clientWidth - playerBubble.offsetWidth - 10, playerLeft + 18))}px`;
					playerBubble.style.top = `${Math.max(10, playerTop - playerBubble.offsetHeight - 28)}px`;
				}
			};
			const getPoint = (event) => {
				const rect = canvas.getBoundingClientRect();
				return {
					x: ((event.clientX - rect.left) / rect.width) * canvas.width,
					y: ((event.clientY - rect.top) / rect.height) * canvas.height,
				};
			};
			const openDialog = () => {
				if (Math.hypot(runtime.player.x - runtime.representative.x, runtime.player.y - runtime.representative.y) > 92) {
					runtime.player.targetX = runtime.representative.x - 68;
					runtime.player.targetY = runtime.representative.y + 32;
					runtime.approachRequested = true;
					runtime.interactionTarget = runtime.representative;
					runtime.interactionKind = 'representative';
					return;
				}
				runtime.dialogOpen = true;
				dialog.hidden = false;
				runtime.interactionKind = 'representative';
				positionDialog();
				document.getElementById('roomGameDialogTitle').textContent = '企业代表';
				document.getElementById('roomGameQuestions').hidden = false;
				document.getElementById('roomGameClose').textContent = '结束访谈';
				document.getElementById('roomGameClose').dataset.complete = '';
				document.getElementById('roomGameClose').dataset.action = '';
				document.getElementById('roomGameDialogText').textContent = runtime.message;
			};
			const openClueScreen = () => {
				if (Math.hypot(runtime.player.x - runtime.clueScreen.x, runtime.player.y - runtime.clueScreen.y) > 82) {
					runtime.player.targetX = runtime.clueScreen.x + 42;
					runtime.player.targetY = runtime.clueScreen.y + 22;
					runtime.approachRequested = true;
					runtime.interactionTarget = runtime.clueScreen;
					runtime.interactionKind = 'screen';
					return;
				}
				runtime.dialogOpen = true;
				dialog.hidden = false;
				runtime.interactionKind = 'screen';
				positionDialog();
				document.getElementById('roomGameDialogTitle').textContent = '企业经营情况';
				document.getElementById('roomGameQuestions').hidden = true;
				const closeButton = document.getElementById('roomGameClose');
				closeButton.textContent = '关闭资料';
				closeButton.dataset.action = '';
				const companyNameText = escapeHtml(companyName(runtime.company));
				const sector = escapeHtml(runtime.company.sector || '行业待补');
				const region = escapeHtml(runtime.company.region || '地区待补');
				const product = escapeHtml(runtime.company.product || '企业尚未补充业务描述。');
				const need = escapeHtml(runtime.company.need || '企业尚未补充合作诉求。');
				const funding = requestedFundingWan(runtime.company);
				const fundingText = funding === null
					? '待企业确认'
					: `${new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 2 }).format(funding)} 万元`;
				const source = escapeHtml(runtime.company.source || '资料来源待补');
				document.getElementById('roomGameDialogText').innerHTML =
					`<div class="room-material-section room-material-basic">
						<div class="room-material-section-title"><strong>基本经营材料</strong><span>公开资料</span></div>
						<dl class="room-material-list">
							<div><dt>企业名称</dt><dd>${companyNameText}</dd></div>
							<div><dt>行业与地区</dt><dd>${sector} · ${region}</dd></div>
							<div><dt>主要业务</dt><dd>${product}</dd></div>
							<div><dt>合作诉求</dt><dd>${need}</dd></div>
							<div><dt>拟融资金额</dt><dd>${fundingText}</dd></div>
							<div><dt>资料来源</dt><dd>${source}</dd></div>
						</dl>
					</div>
					<div class="room-material-section room-material-detailed" aria-label="详细经营材料需签署保密协议">
						<div class="room-material-lock" aria-hidden="true">锁</div>
						<div class="room-material-detailed-copy">
							<div class="room-material-section-title"><strong>详细经营材料</strong><span>保密资料</span></div>
							<p>查看财务报表、股权结构、在手订单和核心客户资料前，需要企业与华鑫签署保密协议。</p>
							<button class="room-nda-request" id="roomNdaRequest" type="button">申请发起保密协议</button>
							<p class="room-nda-status" id="roomNdaStatus" hidden>保密协议申请已记录；协议需由企业与华鑫双方确认后方可查看详细资料。</p>
						</div>
					</div>`;
				const ndaButton = document.getElementById('roomNdaRequest');
				ndaButton?.addEventListener('click', () => {
					ndaButton.disabled = true;
					ndaButton.textContent = '已申请保密协议';
					const ndaStatus = document.getElementById('roomNdaStatus');
					if (ndaStatus) ndaStatus.hidden = false;
				});
			};
			const closeDialog = () => {
				runtime.dialogOpen = false;
				dialog.hidden = true;
			};
			canvas.addEventListener('pointerdown', (event) => {
				if (runtime.dialogOpen) {
					closeDialog();
				}
				const point = getPoint(event);
				if (Math.hypot(point.x - runtime.clueScreen.x, point.y - runtime.clueScreen.y) < 78) {
					openClueScreen();
					return;
				}
				if (Math.hypot(point.x - runtime.representative.x, point.y - runtime.representative.y) < 70) {
					openDialog();
					return;
				}
				runtime.player.targetX = Math.max(35, Math.min(canvas.width - 35, point.x));
				runtime.player.targetY = Math.max(55, Math.min(canvas.height - 35, point.y));
			});
			const onKeyDown = (event) => {
				const key = event.key.toLowerCase();
				if (key === 'escape' && runtime.dialogOpen) {
					closeDialog();
					return;
				}
				if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
					runtime.keys.add(key);
					event.preventDefault();
				}
				if (key === 'e') {
					const screenDistance = Math.hypot(runtime.player.x - runtime.clueScreen.x, runtime.player.y - runtime.clueScreen.y);
					const representativeDistance = Math.hypot(runtime.player.x - runtime.representative.x, runtime.player.y - runtime.representative.y);
					if (screenDistance < representativeDistance) openClueScreen();
					else openDialog();
				}
			};
			const onKeyUp = (event) => runtime.keys.delete(event.key.toLowerCase());
			window.addEventListener('keydown', onKeyDown);
			window.addEventListener('keyup', onKeyUp);
			dialog.querySelectorAll('[data-room-game-topic]').forEach((button) => button.addEventListener('click', () => {
				const topic = button.dataset.roomGameTopic;
				const playerQuestions = {
					product: '了解业务和产品',
					competitors: '了解同行业竞争对手',
					need: '询问合作需求',
					risk: '追问风险和证据',
					future: '讨论下一步机会',
				};
				const playerMessage = document.getElementById('roomPlayerMessage');
				playerMessage.textContent = playerQuestions[topic] || '我想进一步了解这家企业。';
				playerMessage.hidden = false;
				runtime.asked.add(topic);
				runtime.message = roomReply(company, topic);
				document.getElementById('roomGameDialogText').textContent = runtime.message;
				button.disabled = true;
				if (runtime.asked.size >= 3) {
					const closeButton = document.getElementById('roomGameClose');
					closeButton.textContent = '结束会谈';
					closeButton.dataset.complete = 'true';
				}
			}));
			document.getElementById('roomGameClose').addEventListener('click', (event) => {
				if (runtime.interactionKind === 'representative') {
					runtime.message = '你已经完成了初步会谈。回到企业库，记录是否继续推进。';
					closeDialog();
					const investmentFlow = document.getElementById('roomInvestmentFlow');
					if (investmentFlow) investmentFlow.hidden = false;
					showToast('访谈已结束：可以在下方决定是否投资。');
					return;
				}
				closeDialog();
			});
			function frame(now) {
				if (roomGameRuntime !== runtime) return;
				const dt = Math.min(.033, (now - runtime.lastTime) / 1000);
				runtime.lastTime = now;
				if (!runtime.dialogOpen) {
					const horizontal = (runtime.keys.has('d') || runtime.keys.has('arrowright') ? 1 : 0) - (runtime.keys.has('a') || runtime.keys.has('arrowleft') ? 1 : 0);
					const vertical = (runtime.keys.has('s') || runtime.keys.has('arrowdown') ? 1 : 0) - (runtime.keys.has('w') || runtime.keys.has('arrowup') ? 1 : 0);
					if (horizontal || vertical) {
						const length = Math.hypot(horizontal, vertical);
						runtime.player.targetX = runtime.player.x + horizontal / length * 140;
						runtime.player.targetY = runtime.player.y + vertical / length * 140;
					}
					const dx = runtime.player.targetX - runtime.player.x;
					const dy = runtime.player.targetY - runtime.player.y;
					const distance = Math.hypot(dx, dy);
					if (distance > 1) {
						const step = Math.min(distance, 155 * dt);
						runtime.player.x += dx / distance * step;
						runtime.player.y += dy / distance * step;
						runtime.player.dir = Math.atan2(dy, dx);
					}
					if (runtime.approachRequested && runtime.interactionKind === 'screen' &&
						Math.hypot(runtime.player.x - runtime.clueScreen.x, runtime.player.y - runtime.clueScreen.y) <= 82) {
						runtime.approachRequested = false;
						openClueScreen();
					} else if (runtime.approachRequested && runtime.interactionKind === 'representative' &&
						Math.hypot(runtime.player.x - runtime.representative.x, runtime.player.y - runtime.representative.y) <= 92) {
						runtime.approachRequested = false;
						openDialog();
					}
				}
				if (runtime.dialogOpen) positionDialog();
				drawRoomGame(runtime);
				runtime.frame = requestAnimationFrame(frame);
			}
			runtime.frame = requestAnimationFrame(frame);
		}

		function drawRoomGame(runtime) {
			const { context, canvas, player, representative } = runtime;
			context.clearRect(0, 0, canvas.width, canvas.height);
			if (!runtime.transparent) {
			context.fillStyle = '#dfe7dc';
			context.fillRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = '#b7c8b7';
			context.beginPath();
			context.moveTo(0, 205); context.lineTo(380, 35); context.lineTo(760, 205); context.lineTo(760, 510); context.lineTo(0, 510);
			context.fill();
			context.fillStyle = '#54746d';
			context.beginPath();
			context.moveTo(70, 265); context.lineTo(380, 90); context.lineTo(690, 265); context.lineTo(380, 455); context.closePath();
			context.fill();
			context.fillStyle = 'rgba(255,255,255,.16)';
			for (let x = 70; x < 690; x += 42) context.fillRect(x, 265, 1, 190);
			context.fillStyle = '#315753';
			context.fillRect(90, 110, 142, 78);
			context.fillStyle = '#a5d5c8';
			context.fillRect(102, 122, 118, 54);
			context.fillStyle = '#e4d1aa';
			context.beginPath();
			context.moveTo(280, 300); context.lineTo(425, 218); context.lineTo(555, 292); context.lineTo(410, 374); context.closePath();
			context.fill();
			context.fillStyle = '#a98b69';
			context.fillRect(410, 365, 145, 22);
			context.fillStyle = '#345f58';
			context.fillRect(520, 105, 150, 88);
			context.fillStyle = '#d8eee4';
			context.fillRect(534, 118, 122, 62);
			context.fillStyle = '#087c71';
			context.font = '700 13px Microsoft YaHei';
			context.fillText('企业线索', 560, 153);
			}
			context.save();
			context.translate(442, 52);
			context.rotate(Math.PI / 6);
			context.fillStyle = '#315a5c';
			context.font = '700 11px Microsoft YaHei';
			context.fillText('企业经营情况', 0, 0);
			context.restore();
			drawRoomGameCharacter(context, representative);
			drawRoomGameCharacter(context, player);
			context.textAlign = 'center';
			context.font = '700 13px Microsoft YaHei';
			context.fillStyle = '#f6f0d7';
			context.fillText('企业代表', representative.x, representative.y - 38);
			context.fillText('你', player.x, player.y - 38);
			const near = Math.hypot(player.x - representative.x, player.y - representative.y) < 92;
			const nearScreen = Math.hypot(player.x - runtime.clueScreen.x, player.y - runtime.clueScreen.y) < 82;
			if ((near || nearScreen) && !runtime.dialogOpen) {
				context.fillStyle = 'rgba(15,35,39,.88)';
				const promptX = nearScreen ? runtime.clueScreen.x : representative.x;
				const promptY = nearScreen ? runtime.clueScreen.y : representative.y;
				context.fillRect(promptX - 72, promptY - 78, 144, 28);
				context.fillStyle = '#fff';
				context.fillText(nearScreen ? '按 E 或点击屏幕看企业信息' : '按 E 或点击代表交谈', promptX, promptY - 59);
			}
			context.textAlign = 'start';
		}

		function renderMeetingScene(company, idPrefix = 'meeting', interactive = false) {
			if (interactive) return renderPlayableMeetingScene(company);
			return `<div class="room-stage">
				<div class="room-stage-label">HUAXIN · MEETING ROOM<strong>${escapeHtml(company ? companyName(company) : '企业会客室')}</strong></div>
				<svg viewBox="0 0 760 510" aria-hidden="true">
					<defs>
						<linearGradient id="${idPrefix}-roomFloor" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#55736f"/><stop offset="1" stop-color="#334d50"/></linearGradient>
						<linearGradient id="${idPrefix}-roomWall" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#e4e6d9"/><stop offset="1" stop-color="#bfcfc1"/></linearGradient>
						<pattern id="${idPrefix}-roomTiles" width="70" height="70" patternUnits="userSpaceOnUse" patternTransform="matrix(.86 .5 -.86 .5 380 155)"><path d="M70 0H0V70" fill="none" stroke="#b7c8b7" stroke-opacity=".16" stroke-width="2"/></pattern>
					</defs>
					<ellipse cx="390" cy="452" rx="305" ry="38" fill="#0b1c22" opacity=".3"/>
					<path d="M78 246L378 75 682 247 382 423Z" fill="url(#${idPrefix}-roomFloor)"/>
					<path d="M78 246L378 75 682 247 382 423Z" fill="url(#${idPrefix}-roomTiles)"/>
					<path d="M78 246V126L378 -42V75Z" fill="#e1e3d5"/>
					<path d="M378 -42L682 126V247L378 75Z" fill="url(#${idPrefix}-roomWall)"/>
					<path d="M78 239L378 68 682 240" fill="none" stroke="#829e90" stroke-width="6"/>
					<path d="M100 144L244 63V149L100 231Z" fill="#325351" stroke="#a8bfb1" stroke-width="6"/>
					<path d="M112 149L231 82V142L112 210Z" fill="#a5d5c8"/>
					<path d="M112 194L150 145 179 158 231 115V142L112 210Z" fill="#6ba99b"/>
					<path d="M170 112V176M112 179L231 112" stroke="#e6f4eb" stroke-width="4" opacity=".85"/>
					<path d="M419 12L546 83V171L419 99Z" fill="#355751" stroke="#9fb4a6" stroke-width="5"/>
					<path d="M431 31L534 89V153L431 95Z" fill="#e5f1e7"/>
					<path d="M443 65L466 77 480 70 495 88 521 88" fill="none" stroke="#419383" stroke-width="4"/>
					<path d="M445 82L488 106M445 91L513 129" stroke="#a9c7bc" stroke-width="3"/>
					<path d="M584 114L640 146V217L584 185Z" fill="#f3e8cd" stroke="#9bb0a0" stroke-width="4"/>
					<path d="M598 145L625 160M598 156L626 172M598 167L620 179" stroke="#bb9e74" stroke-width="3"/>
					<path d="M168 254L215 228 253 250 206 277Z" fill="#d9bd8c"/>
					<path d="M206 277L253 250V282L206 309Z" fill="#a78259"/>
					<path d="M168 254L206 277V309L168 286Z" fill="#bd986a"/>
					<path d="M190 254C179 236 183 220 189 216C192 230 198 238 200 245C199 226 207 213 214 211C213 229 207 242 203 249C211 238 221 234 226 236C220 249 211 253 201 257Z" fill="#67a677"/>
					<path d="M190 254L212 242 210 261 200 267 190 261Z" fill="#e8b982"/>
					<path d="M295 306L421 233 536 299 410 373Z" fill="#ead2ab" stroke="#b89c75" stroke-width="3"/>
					<path d="M410 373L536 299V324L410 397Z" fill="#a78968"/>
					<path d="M295 306L410 373V397L295 330Z" fill="#c1a17b"/>
					<path d="M357 301L401 276 436 296 392 321Z" fill="#f8f3e5"/>
					<path d="M367 300L396 283M373 304L406 285" stroke="#b6c5b7" stroke-width="2"/>
					<ellipse cx="464" cy="310" rx="13" ry="7" fill="#f8f3e5"/><path d="M451 310V316C451 325 477 325 477 316V310" fill="#d8e8d9"/>
					<path d="M290 360L317 375M487 263L510 277" stroke="#a9c3b4" stroke-width="3" stroke-linecap="round"/>
				</svg>
				${idPrefix === 'home' ? '<canvas class="room-preview-canvas" width="760" height="510" aria-hidden="true"></canvas>' : ''}
				${interactive ? `<button class="room-hotspot room-hotspot-talk" type="button" data-room-action="talk">和代表聊聊</button><button class="room-hotspot room-hotspot-clues" type="button" data-room-action="clues">查看企业线索</button><button class="room-hotspot room-hotspot-trade" type="button" data-room-action="trade">模拟投入</button>` : ''}
				<span class="room-stage-hint">你与虚构企业代表 · 会面中</span>
			</div>`;
		}

		function renderSimulation() {
			const target = companies.find((company) => company.id === simulationTargetCompanyId) || companies[0];
			if (target) simulationTargetCompanyId = target.id;
			const companyOptions = companies.map((company) =>
				`<option value="${escapeHtml(company.id)}" ${company.id === simulationTargetCompanyId ? 'selected' : ''}>${escapeHtml(companyName(company))} · ${escapeHtml(company.sector)}</option>`,
			).join('');
			const positionsMarkup = simulation.positions.length ? simulation.positions.map((position) => {
				const company = companies.find((item) => item.id === position.companyId);
				return `<article class="position-card">
					<div class="position-head"><div><div class="position-name">${escapeHtml(company ? companyName(company) : '未知企业')}</div><div class="position-meta">${escapeHtml(company?.sector || '')} · 模拟持仓</div></div><div class="position-value"><span>模拟投入</span>${formatWan(position.costBasis)}</div></div>
					<div class="position-actions"><button class="btn btn-small" type="button" data-sell="${escapeHtml(position.companyId)}">模拟卖出</button></div>
				</article>`;
			}).join('') : '<div class="position-empty">还没有模拟持仓。先选择企业并投入虚拟资金。</div>';
			const targetPosition = simulation.positions.find((position) => position.companyId === target?.id);
			const amountValue = simulationAmountDraft ?? Math.min(10, simulation.cash / 10000);
			const decisions = simulation.decisions.filter((decision) => decision.companyId === target?.id).slice().reverse();
			const decisionsMarkup = decisions.map((decision) => {
				const draft = decisionDrafts.get(decision.id) || { reason: decision.reason || '', risk: decision.risk || '' };
				const date = new Date(decision.createdAt);
				const dateLabel = Number.isFinite(date.getTime()) ? date.toLocaleDateString('zh-CN') : '日期未知';
				const savedDate = new Date(decision.savedAt || '');
				const savedDateLabel = Number.isFinite(savedDate.getTime()) ? savedDate.toLocaleString('zh-CN') : '时间未知';
				const form = editingDecisionId === decision.id ? `
					<form class="decision-form" data-decision-form="${escapeHtml(decision.id)}">
						<label>你看好什么？<textarea class="control" name="reason" maxlength="500" placeholder="例如：业务、客户或团队">${escapeHtml(draft.reason)}</textarea></label>
						<label>最大的担忧是什么？<textarea class="control" name="risk" maxlength="500" placeholder="例如：订单、资金或信息可信度">${escapeHtml(draft.risk)}</textarea></label>
						<span class="observation-note">保存后不能修改，便于日后复盘；请勿填写敏感信息。</span>
						<button class="btn btn-small btn-primary" type="submit">保存判断</button>
					</form>` : `
					${decision.reason || decision.risk ? `<p class="observation-note">判断记录于 ${escapeHtml(savedDateLabel)}</p>` : ''}
					${decision.reason ? `<p><strong>看好：</strong>${escapeHtml(decision.reason)}</p>` : ''}
					${decision.risk ? `<p><strong>担忧：</strong>${escapeHtml(decision.risk)}</p>` : ''}
					${decision.reason || decision.risk ? '' : `<button class="btn btn-small" type="button" data-edit-decision="${escapeHtml(decision.id)}">补充判断</button>`}`;
				return `<article class="decision-record"><h4>${escapeHtml(dateLabel)} · 模拟投入 ${formatWan(decision.amount)}</h4>${form}</article>`;
			}).join('') || '<p class="observation-note">买入后可以记录你的判断，日后回来复盘。</p>';
			document.getElementById('simulationContent').innerHTML = `
				<div class="meeting-room">
					${renderMeetingScene(target, 'meeting', isRoomPage)}
					<div class="room-game-aftercare"><strong>会谈完成后</strong><span>完成会谈后，在下方决定是否投资。</span></div>
				</div>
				${renderInvestmentFlow(target)}`;
			startRoomGame(target);
			const investmentFlow = document.getElementById('roomInvestmentFlow');
			const investmentResult = document.getElementById('roomInvestmentResult');
			investmentFlow.querySelector('[data-investment-choice="yes"]').addEventListener('click', () => {
				const fundingWan = requestedFundingWan(target);
				if (fundingWan === null) {
					showToast('请先补充企业提出的融资金额。');
					return;
				}
				const equityRatio = estimatedEquityRatio(target, fundingWan);
				const currentValuationWan = estimatedCompanyValuationWan(target, fundingWan);
				investmentResult.hidden = false;
				investmentResult.innerHTML = `
					<div class="room-investment-confirmed"><strong>已选择投资</strong><span>投入 ${escapeHtml(fundingWan)} 万元</span></div>
					<div class="room-equity-result"><span>当前公司估值</span><strong>${escapeHtml(formatWan(currentValuationWan * 10000))}</strong></div>
					<div class="room-equity-result"><span>初始获得公司股权</span><strong>${equityRatio.toFixed(2)}%</strong></div>
					<div class="room-time-projection">
						<h3>时间推演</h3><p>选择一个时间尺度，观察这次投资可能走向的未来。</p>
						<div class="room-time-actions"><button class="btn btn-primary room-horizon-button" type="button" data-horizon="10">10年后</button><button class="btn btn-primary room-horizon-button" type="button" data-horizon="100">100年后</button></div>
						<div id="roomProjectionOutput"></div>
					</div>`;
				window.requestAnimationFrame(() => {
					investmentResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
					investmentResult.classList.remove('room-result-attention');
					window.requestAnimationFrame(() => investmentResult.classList.add('room-result-attention'));
					showToast('投资结果已生成，请向下查看时间推演。');
				});
				investmentResult.querySelectorAll('[data-horizon]').forEach((button) => button.addEventListener('click', () => {
					const output = investmentResult.querySelector('#roomProjectionOutput');
					if (button.dataset.horizon === '100') {
						output.innerHTML = renderHundredYearProjection(target);
					} else {
						output.innerHTML = renderTenYearProjection(target, fundingWan, equityRatio);
						const steps = [...output.querySelectorAll('.room-projection-step')];
						const revealNext = (index) => {
							if (index >= steps.length) return;
							const step = steps[index];
							step.hidden = false;
							window.requestAnimationFrame(() => step.classList.add('visible'));
							window.requestAnimationFrame(() => step.scrollIntoView({ behavior: 'smooth', block: 'nearest' }));
							window.setTimeout(() => {
								if (index === steps.length - 1) {
									output.querySelector('.room-market-value').hidden = false;
									output.querySelector('.room-projection-summary').hidden = false;
									output.querySelector('.room-next-actions').hidden = false;
									window.requestAnimationFrame(() => {
										output.querySelector('.room-market-value').scrollIntoView({ behavior: 'smooth', block: 'start' });
									});
									return;
								}
								revealNext(index + 1);
							}, 900);
						};
						revealNext(0);
					}
					window.requestAnimationFrame(() => output.scrollIntoView({ behavior: 'smooth', block: 'center' }));
				}));
			});
			investmentFlow.querySelector('[data-investment-choice="no"]').addEventListener('click', () => {
				investmentResult.hidden = false;
				investmentResult.innerHTML = '<div class="room-investment-declined"><strong>暂不投资</strong><span>保留本次会谈记录，可回到企业库继续观察或补充核验资料。</span></div>';
			});
			document.querySelectorAll('[data-sell]').forEach((button) => button.addEventListener('click', () => sellSimulationPosition(button.dataset.sell)));
			document.querySelectorAll('[data-edit-decision]').forEach((button) => button.addEventListener('click', () => {
				editingDecisionId = button.dataset.editDecision;
				renderSimulation();
				document.querySelector('[data-decision-form] textarea')?.focus();
			}));
			document.querySelectorAll('[data-decision-form]').forEach((form) => {
				form.addEventListener('input', () => {
					decisionDrafts.set(form.dataset.decisionForm, { reason: form.elements.reason.value, risk: form.elements.risk.value });
				});
				form.addEventListener('submit', (event) => {
					event.preventDefault();
					const reason = form.elements.reason.value.trim();
					const risk = form.elements.risk.value.trim();
					if (!reason && !risk) {
						showToast('请至少填写一项判断。');
						return;
					}
					const id = form.dataset.decisionForm;
					const nextState = { ...simulation, decisions: simulation.decisions.map((decision) =>
						decision.id === id ? { ...decision, reason, risk, savedAt: new Date().toISOString() } : decision) };
					if (!saveSimulation(nextState)) return;
					decisionDrafts.delete(id);
					editingDecisionId = '';
					renderSimulation();
					showToast('判断已保存在当前浏览器。');
				});
			});
		}

		function buySimulationPosition() {
			const companyId = document.getElementById('simulationCompany').value;
			const amountWan = Number(document.getElementById('simulationAmount').value);
			const amount = amountWan * 10000;
			if (!Number.isFinite(amountWan) || amountWan < 0.1) {
				showToast('投入金额至少为 0.1 万元。');
				return;
			}
			if (amount > simulation.cash) {
				showToast('投入金额不能超过可用虚拟资金。');
				return;
			}
			const positions = simulation.positions.map((position) => ({ ...position }));
			const existing = positions.find((position) => position.companyId === companyId);
			const amountPerShare = existing?.price || 100;
			if (existing) {
				existing.shares += amount / amountPerShare;
				existing.costBasis += amount;
			} else {
				positions.push({ companyId, shares: amount / 100, price: 100, costBasis: amount, age: 0, status: 'active' });
			}
			const now = new Date();
			let decisionId = now.getTime().toString(36);
			while (simulation.decisions.some((decision) => decision.id === decisionId)) decisionId += '0';
			const decision = { id: decisionId, companyId, amount, createdAt: now.toISOString(), reason: '', risk: '' };
			const nextState = { ...simulation, cash: simulation.cash - amount, positions, decisions: [...simulation.decisions, decision] };
			if (!saveSimulation(nextState)) return;
			simulationTargetCompanyId = companyId;
			simulationAmountDraft = null;
			editingDecisionId = decisionId;
			renderSimulation();
			document.querySelector('[data-decision-form] textarea')?.focus();
			showToast(`已模拟投入 ${formatWan(amount)}，可以留下你的判断。`);
		}

		function sellSimulationPosition(companyId) {
			const index = simulation.positions.findIndex((position) => position.companyId === companyId);
			if (index < 0) return;
			const position = simulation.positions[index];
			const proceeds = position.costBasis;
			const nextState = { ...simulation, cash: simulation.cash + proceeds,
				positions: simulation.positions.filter((_, positionIndex) => positionIndex !== index) };
			if (!saveSimulation(nextState)) return;
			renderSimulation();
			showToast(`已模拟卖出，按投入金额返还 ${formatWan(proceeds)}。`);
		}

		function openSimulation() {
			openMeetingRoom(simulationTargetCompanyId);
		}

		function openMeetingRoom(companyId) {
			if (!companyId) return;
			window.location.href = `meeting-room.html?company=${encodeURIComponent(companyId)}`;
		}

		function setManagementMenu(open) {
			const menu = document.getElementById('managementMenu');
			menu.hidden = !open;
			document.getElementById('managementButton').setAttribute('aria-expanded', String(open));
		}

		function openModal(id = '') {
			const form = document.getElementById('companyForm');
			form.reset();
			editingId = id;
			const company = companies.find((item) => item.id === id);
			document.getElementById('modalTitle').textContent = company ? '编辑企业项目' : '提交企业项目';
			form.querySelector('[type="submit"]').textContent = company ? '保存修改' : '提交项目';
			if (company) {
				form.elements.name.value = company.name || '';
				form.elements.sector.value = company.sector || '';
				form.elements.region.value = company.region || '';
				form.elements.path.value = company.path || '供应链';
				form.elements.product.value = company.product || '';
				form.elements.need.value = company.need || '';
				form.elements.fundingAmount.value = company.fundingAmount || '';
				form.elements.status.value = company.status || '待验证';
				form.elements.source.value = company.source || '';
				const values = Object.fromEntries((company.dims || []).map(([label, value]) => [label, value]));
				form.elements.scoreBusiness.value = values['经营基础'] ?? '';
				form.elements.scoreEvidence.value = values['信息可信度'] ?? '';
				form.elements.scoreNeed.value = values['需求清晰度'] ?? '';
				form.elements.scoreReady.value = values['对接准备度'] ?? '';
				form.elements.potentialScore.value = company.potentialAssessment?.score ?? '';
				form.elements.potentialReason.value = company.potentialAssessment?.reason ?? '';
				form.elements.potentialRisk.value = company.potentialAssessment?.risk ?? '';
				form.elements.potentialDate.value = company.potentialAssessment?.evidenceDate ?? '';
			}
			document.getElementById('modalBackdrop').classList.add('open');
			document.getElementById('companyName').focus();
		}

		function closeModal() { document.getElementById('modalBackdrop').classList.remove('open'); }

		function openVideo() {
			document.getElementById('videoBackdrop').classList.add('open');
		}

		function closeVideo() {
			document.getElementById('videoBackdrop').classList.remove('open');
		}

		function exportWatchlist() {
			const records = companies.filter((item) => item.watch);
			if (!records.length) {
				showToast('还没有重点企业。先点企业行末的星标，再导出清单。');
				return;
			}
			const headers = ['企业名称', '行业', '地区', '机会观察分', '合作方向', '推进阶段', '核心业务', '合作诉求', '融资金额（万元）', '机会假设', '下一步', '信息来源', '更新日期', '资料性质', '本机潜力评分', '看好理由与依据', '主要风险', '资料日期'];
			const rows = records.map((item) => [companyName(item), item.sector, item.region, getScore(item), item.path, item.status, item.product, item.need, item.fundingAmount ?? '', item.thesis, item.next, item.source, item.updated, item.id.startsWith('demo-') ? '虚构演示' : '未标为演示', item.potentialAssessment?.score ?? '', item.potentialAssessment?.reason ?? '', item.potentialAssessment?.risk ?? '', item.potentialAssessment?.evidenceDate ?? '']);
			const csv = '\ufeff' + [headers, ...rows].map((row) => row.map((field) => `"${String(field ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
			const link = document.createElement('a');
			link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
			link.download = `企业重点清单_${new Date().toISOString().slice(0, 10)}.csv`;
			link.click();
			URL.revokeObjectURL(link.href);
			showToast(`已导出 ${records.length} 家重点企业。`);
		}

		if (!isRoomPage) {
		document.getElementById('managementButton').addEventListener('click', () => {
			setManagementMenu(document.getElementById('managementMenu').hidden);
		});
		document.getElementById('addButton').addEventListener('click', () => {
			setManagementMenu(false);
			openModal();
		});
		document.getElementById('bookingButton').addEventListener('click', () => {
			setManagementMenu(false);
			const guestbook = document.getElementById('guestbookForm');
			document.getElementById('guestbookTitle').textContent = '预约咨询';
			guestbook.scrollIntoView({ behavior: 'smooth', block: 'start' });
			document.getElementById('guestbookMessage').focus();
		});
		document.getElementById('videoButton').addEventListener('click', openVideo);
		document.getElementById('closeVideo').addEventListener('click', closeVideo);
		document.getElementById('creatorConsultButton').addEventListener('click', () => {
			closeVideo();
			document.getElementById('guestbookTitle').textContent = '预约咨询';
			document.getElementById('guestbookForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
			document.getElementById('guestbookMessage').focus();
		});
		document.getElementById('closeModal').addEventListener('click', closeModal);
		document.getElementById('cancelModal').addEventListener('click', closeModal);
		document.getElementById('videoBackdrop').addEventListener('click', (event) => {
			if (event.target === event.currentTarget) closeVideo();
		});
		document.getElementById('modalBackdrop').addEventListener('click', (event) => {
			if (event.target === event.currentTarget) closeModal();
		});
		document.addEventListener('click', (event) => {
			if (!event.target.closest('.management')) setManagementMenu(false);
		});
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				closeModal();
				closeVideo();
				setManagementMenu(false);
			}
		});
		document.getElementById('searchInput').addEventListener('input', renderList);
		renderGuestbook();
		document.getElementById('guestbookForm').addEventListener('submit', (event) => {
			event.preventDefault();
			const form = new FormData(event.currentTarget);
			const message = String(form.get('message') || '').trim();
			if (!message) return;
			const entry = {
				name: String(form.get('name') || '').trim() || '匿名用户',
				message,
				createdAt: new Date().toISOString(),
			};
			try {
				const entries = loadGuestbook();
				localStorage.setItem(guestbookStorageKey, JSON.stringify([entry, ...entries].slice(0, 30)));
				event.currentTarget.reset();
				renderGuestbook();
				showToast('留言已保存到本机。');
			} catch {
				showToast('留言保存失败，请检查浏览器存储设置。');
			}
		});
		document.getElementById('companyForm').addEventListener('submit', (event) => {
			event.preventDefault();
			const form = new FormData(event.currentTarget);
			const name = String(form.get('name') || '').trim();
			const sector = String(form.get('sector') || '').trim();
			if (!name || !sector) return;
			const today = new Date().toISOString().slice(0, 10);
			const scoreFields = ['scoreBusiness', 'scoreEvidence', 'scoreNeed', 'scoreReady'].map((key) => String(form.get(key) || '').trim());
			const enteredScores = scoreFields.filter(Boolean).length;
			if (enteredScores > 0 && enteredScores < scoreFields.length) {
				showToast('请填写全部四项分数，或全部留空保持“待评估”。');
				return;
			}
			const dims = enteredScores === scoreFields.length
				? [['经营基础', Number(scoreFields[0])], ['信息可信度', Number(scoreFields[1])], ['需求清晰度', Number(scoreFields[2])], ['对接准备度', Number(scoreFields[3])]]
				: [];
			if (dims.some(([, value]) => !Number.isFinite(value) || value < 0 || value > 100)) {
				showToast('分数需在 0 到 100 之间。');
				return;
			}
			const potentialScoreText = String(form.get('potentialScore') || '').trim();
			const potentialReason = String(form.get('potentialReason') || '').trim();
			const potentialRisk = String(form.get('potentialRisk') || '').trim();
			const potentialDate = String(form.get('potentialDate') || '').trim();
			const potentialFields = [potentialScoreText, potentialReason, potentialRisk, potentialDate];
			if (potentialFields.some(Boolean) && !potentialFields.every(Boolean)) {
				showToast('填写潜力评估时，请同时填写分数、依据、风险和资料日期；资料不足可全部留空。');
				return;
			}
			const potentialScore = Number(potentialScoreText);
			if (potentialScoreText && (!Number.isInteger(potentialScore) || potentialScore < 0 || potentialScore > 100)) {
				showToast('潜力评分需为 0 到 100 的整数。');
				return;
			}
			const fundingAmountText = String(form.get('fundingAmount') || '').trim();
			const fundingAmount = Number(fundingAmountText);
			if (fundingAmountText && (!Number.isFinite(fundingAmount) || fundingAmount < 0.1)) {
				showToast('融资金额需为不低于 0.1 万元的数字。');
				return;
			}
			const current = companies.find((item) => item.id === editingId);
			const company = {
				...(current || {}),
				id: current?.id || `local-${Date.now()}`, name, sector,
				region: String(form.get('region') || '').trim(),
				path: String(form.get('path') || '供应链'),
				product: String(form.get('product') || '').trim(),
				need: String(form.get('need') || '').trim(),
				fundingAmount: fundingAmountText ? fundingAmount : (current?.fundingAmount || null),
				status: String(form.get('status') || '待验证'),
				score: dims.length ? Math.round(dims.reduce((sum, item) => sum + item[1], 0) / dims.length) : null,
				dims, assessed: Boolean(dims.length),
				potentialAssessment: potentialScoreText ? {
					...current?.potentialAssessment, score: potentialScore, reason: potentialReason, risk: potentialRisk, evidenceDate: potentialDate,
				} : null,
				thesis: current?.thesis || '记录尚未形成机会假设，请访谈企业并核验核心信息后再更新。',
				next: current?.next || '补充经营数据、股东诉求和可验证材料。',
				source: String(form.get('source') || '手动录入').trim(), updated: today, watch: current?.watch || false,
			};
			const updatedCompanies = current
				? companies.map((item) => item.id === current.id ? company : item)
				: [company, ...companies];
			if (!saveCompanies(updatedCompanies)) return;
			companies = updatedCompanies;
			selectedId = company.id;
			refreshSectorOptions();
			document.getElementById('searchInput').value = '';
			selectedSector = null;
			closeModal();
			renderList();
			if (!current) showToast('企业已保存到本机，可稍后补充分项评分。');
		});

		refreshSectorOptions();
		if (companies.length && !companies.some((item) => item.id === selectedId)) selectedId = companies[0].id;
		renderList();
		if (new URLSearchParams(window.location.search).get('submit') === '1') openModal();
		if (window.location.hash === '#guestbookPanel') {
			document.getElementById('guestbookTitle').textContent = '预约咨询';
			window.requestAnimationFrame(() => document.getElementById('guestbookPanel').scrollIntoView({ behavior: 'smooth', block: 'start' }));
		}
		} else {
			document.getElementById('returnToCompanies').href = `index.html?company=${encodeURIComponent(simulationTargetCompanyId)}`;
			renderSimulation();
			if (requestedCompanyId && requestedCompanyId !== simulationTargetCompanyId) showToast('未找到指定企业，已显示其他企业。');
			if (simulationStorageError) showToast('无法读取原有模拟盘，已暂停修改以保护数据。请检查浏览器存储。');
		}
