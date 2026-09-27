//#region node_modules/@learncoreskills/competency-model/dist/src/validate.js
function e(e) {
	let t = new Map(e.map((e) => [e.id, e])), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
	function i(e, a) {
		let o = n.get(e);
		if (o === "done") return;
		if (o === "visiting") {
			let t = a.indexOf(e);
			for (let e of a.slice(t)) r.add(e);
			return;
		}
		n.set(e, "visiting");
		let s = t.get(e);
		if (s) for (let n of s.prerequisiteIds) t.has(n) && i(n, [...a, e]);
		n.set(e, "done");
	}
	for (let t of e) i(t.id, []);
	return [...r];
}
function t(e, t) {
	return e.find((e) => e.id === t);
}
function n(n, r, i = []) {
	let a = [], o = /* @__PURE__ */ new Set();
	for (let e of n) o.has(e.id) && a.push({
		kind: "duplicate-subject-id",
		id: e.id
	}), o.add(e.id);
	let s = /* @__PURE__ */ new Set();
	for (let e of r) s.has(e.id) && a.push({
		kind: "duplicate-competency-id",
		id: e.id
	}), s.add(e.id);
	for (let e of r) {
		o.has(e.subjectId) || a.push({
			kind: "unknown-subject-reference",
			competencyId: e.id,
			subjectId: e.subjectId
		}), (!Number.isInteger(e.gradeCount) || e.gradeCount < 1) && a.push({
			kind: "invalid-grade-count",
			competencyId: e.id,
			gradeCount: e.gradeCount
		}), e.targetGrade !== "P" && (!Number.isInteger(e.targetGrade) || e.targetGrade < 1 || e.targetGrade > 5) && a.push({
			kind: "invalid-target-grade",
			competencyId: e.id,
			targetGrade: e.targetGrade
		});
		for (let t of e.prerequisiteIds) s.has(t) || a.push({
			kind: "unknown-prerequisite-reference",
			competencyId: e.id,
			prerequisiteId: t
		});
		for (let n of e.scoreInputs ?? []) n.weight !== void 0 && !(n.weight > 0) && a.push({
			kind: "invalid-score-input-weight",
			competencyId: e.id,
			inputId: n.id,
			weight: n.weight
		}), n.kind === "competency" && t(r, n.id) === void 0 && a.push({
			kind: "unknown-score-input-competency",
			competencyId: e.id,
			inputId: n.id
		}), n.kind === "activity" && !i.includes(n.id) && a.push({
			kind: "unknown-score-input-activity",
			competencyId: e.id,
			inputId: n.id
		});
	}
	let c = e(r);
	return c.length > 0 && a.push({
		kind: "prerequisite-cycle",
		competencyIds: c
	}), {
		valid: a.length === 0,
		errors: a
	};
}
//#endregion
//#region packages/syllabus-content-g1/src/competencies.ts
var r = {
	id: "math.number-sense.reads-writes-to-100",
	nameKey: "competency.math.number-sense.reads-writes-to-100.name",
	descriptionKey: "competency.math.number-sense.reads-writes-to-100.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.1",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.reads-writes-to-100"
	}]
}, i = {
	id: "math.addition.number-bonds-within-10",
	nameKey: "competency.math.addition.number-bonds-within-10.name",
	descriptionKey: "competency.math.addition.number-bonds-within-10.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.6",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.addition.number-bonds-within-10"
	}]
}, a = {
	id: "math.mental-mathematics.add-subtract-within-20",
	nameKey: "competency.math.mental-mathematics.add-subtract-within-20.name",
	descriptionKey: "competency.math.mental-mathematics.add-subtract-within-20.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.11",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mental-mathematics.add-subtract-within-20"
	}]
}, o = {
	id: "math.fractions.half-and-quarter",
	nameKey: "competency.math.fractions.half-and-quarter.name",
	descriptionKey: "competency.math.fractions.half-and-quarter.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.12",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.half-and-quarter"
	}]
}, s = {
	id: "math.measurement.length-in-cm",
	nameKey: "competency.math.measurement.length-in-cm.name",
	descriptionKey: "competency.math.measurement.length-in-cm.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.13",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.length-in-cm"
	}]
}, c = {
	id: "math.measurement.vocabulary",
	nameKey: "competency.math.measurement.vocabulary.name",
	descriptionKey: "competency.math.measurement.vocabulary.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.14",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.vocabulary"
	}]
}, l = {
	id: "math.time.hour-half-hour",
	nameKey: "competency.math.time.hour-half-hour.name",
	descriptionKey: "competency.math.time.hour-half-hour.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.15",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.hour-half-hour"
	}]
}, u = {
	id: "math.time.months-and-seasons",
	nameKey: "competency.math.time.months-and-seasons.name",
	descriptionKey: "competency.math.time.months-and-seasons.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.16",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.months-and-seasons"
	}]
}, d = {
	id: "math.geometry.names-2d-3d-shapes",
	nameKey: "competency.math.geometry.names-2d-3d-shapes.name",
	descriptionKey: "competency.math.geometry.names-2d-3d-shapes.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.17",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.names-2d-3d-shapes"
	}]
}, f = {
	id: "math.geometry.shape-orientation-invariance",
	nameKey: "competency.math.geometry.shape-orientation-invariance.name",
	descriptionKey: "competency.math.geometry.shape-orientation-invariance.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.18",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.shape-orientation-invariance"
	}]
}, p = {
	id: "math.geometry.describes-route",
	nameKey: "competency.math.geometry.describes-route.name",
	descriptionKey: "competency.math.geometry.describes-route.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.19",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.describes-route"
	}]
}, m = {
	id: "math.mathematical-reasoning.sorts-objects-by-criterion",
	nameKey: "competency.math.mathematical-reasoning.sorts-objects-by-criterion.name",
	descriptionKey: "competency.math.mathematical-reasoning.sorts-objects-by-criterion.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.20",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.sorts-objects-by-criterion"
	}]
}, h = {
	id: "math.data-graphs.reads-simple-pictogram",
	nameKey: "competency.math.data-graphs.reads-simple-pictogram.name",
	descriptionKey: "competency.math.data-graphs.reads-simple-pictogram.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.21",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.reads-simple-pictogram"
	}]
}, g = {
	id: "math.mathematical-reasoning.continues-repeating-pattern",
	nameKey: "competency.math.mathematical-reasoning.continues-repeating-pattern.name",
	descriptionKey: "competency.math.mathematical-reasoning.continues-repeating-pattern.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.22",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.continues-repeating-pattern"
	}]
}, ee = {
	id: "math.problem-solving.choose-addition-or-subtraction",
	nameKey: "competency.math.problem-solving.choose-addition-or-subtraction.name",
	descriptionKey: "competency.math.problem-solving.choose-addition-or-subtraction.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G1.23",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.choose-addition-or-subtraction"
	}]
}, te = [
	r,
	i,
	a,
	o,
	s,
	c,
	l,
	u,
	d,
	f,
	p,
	m,
	h,
	g,
	ee
];
//#endregion
//#region packages/template-fill-in-the-blank/src/rng.ts
function ne(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function re(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/template-fill-in-the-blank/src/factory.ts
function ie(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function ae(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function oe(e, t, n) {
	if (!ie(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = ae(e.bank, t), i = r[re(ne(n), 0, r.length - 1)];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: {
			promptWithBlank: i.en.promptWithBlank,
			answer: i.en.answer
		},
		fr: {
			promptWithBlank: i.fr.promptWithBlank,
			answer: i.fr.answer
		}
	};
}
function se(e, t) {
	return e.trim().toLowerCase() === t.trim().toLowerCase();
}
function _(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return oe(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: se(e.en.answer, t) || se(e.fr.answer, t) };
		},
		toPresentation(e) {
			return {
				presentation: {
					kind: "equation",
					equation: e.en.promptWithBlank
				},
				correctAnswer: e.en.answer
			};
		}
	};
	function n(t, n) {
		let r = ne(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(oe(e, t, n));
		}
		return {
			grade: t,
			questions: i
		};
	}
	function r(n, r, i, a, o, s) {
		return {
			competencyId: e.competencyId,
			grade: n.grade,
			correct: r,
			timeMs: i,
			timestamp: a,
			questionId: n.id,
			correctAnswer: t.toPresentation(n).correctAnswer,
			submittedAnswer: o,
			...s && { endReason: s }
		};
	}
	return {
		plugin: t,
		createSession: n,
		createMasterySignal: r
	};
}
//#endregion
//#region packages/template-multiple-choice/src/rng.ts
function ce(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function le(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
function ue(e, t) {
	let n = t.slice();
	for (let t = n.length - 1; t > 0; t--) {
		let r = le(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n;
}
//#endregion
//#region packages/template-multiple-choice/src/factory.ts
function de(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function fe(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function pe(e) {
	return Array.from({ length: e }, (e, t) => String.fromCharCode(97 + t));
}
function me(e, t) {
	return e.map((e, n) => ({
		id: t[n],
		label: e
	}));
}
function he(e, t, n) {
	if (!de(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = fe(e.bank, t), i = ce(n), a = r[le(i, 0, r.length - 1)], o = pe(a.en.options.length), s = ue(i, o), c = s.map((e) => a.en.options[o.indexOf(e)]), l = s.map((e) => a.fr.options[o.indexOf(e)]), u = o[a.en.correctIndex];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: {
			prompt: a.en.prompt,
			options: me(c, s)
		},
		fr: {
			prompt: a.fr.prompt,
			options: me(l, s)
		},
		correctOptionId: u
	};
}
function v(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return he(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: t === e.correctOptionId };
		},
		toPresentation(e) {
			return {
				presentation: {
					kind: "choice",
					prompt: e.en.prompt,
					options: e.en.options
				},
				correctAnswer: e.correctOptionId
			};
		}
	};
	function n(t, n) {
		let r = ce(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(he(e, t, n));
		}
		return {
			grade: t,
			questions: i
		};
	}
	function r(n, r, i, a, o, s) {
		return {
			competencyId: e.competencyId,
			grade: n.grade,
			correct: r,
			timeMs: i,
			timestamp: a,
			questionId: n.id,
			correctAnswer: t.toPresentation(n).correctAnswer,
			submittedAnswer: o,
			...s && { endReason: s }
		};
	}
	return {
		plugin: t,
		createSession: n,
		createMasterySignal: r
	};
}
//#endregion
//#region packages/template-numeric-answer/src/rng.ts
function ge(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function _e(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/template-numeric-answer/src/factory.ts
function ve(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function ye(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function be(e, t, n) {
	if (!ve(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = ye(e.bank, t), i = r[_e(ge(n), 0, r.length - 1)];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { prompt: i.en.prompt },
		fr: { prompt: i.fr.prompt },
		correctValue: i.correctValue
	};
}
function y(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return be(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: t === e.correctValue };
		},
		toPresentation(e) {
			return {
				presentation: {
					kind: "equation",
					equation: e.en.prompt
				},
				correctAnswer: e.correctValue
			};
		}
	};
	function n(t, n) {
		let r = ge(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(be(e, t, n));
		}
		return {
			grade: t,
			questions: i
		};
	}
	function r(n, r, i, a, o, s) {
		return {
			competencyId: e.competencyId,
			grade: n.grade,
			correct: r,
			timeMs: i,
			timestamp: a,
			questionId: n.id,
			correctAnswer: t.toPresentation(n).correctAnswer,
			submittedAnswer: o,
			...s && { endReason: s }
		};
	}
	return {
		plugin: t,
		createSession: n,
		createMasterySignal: r
	};
}
//#endregion
//#region packages/syllabus-content-g1/src/rng.ts
function xe(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Se(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/syllabus-content-g1/src/content.ts
var Ce = y({
	pluginId: "syllabus-g1-reads-writes-to-100",
	competencyId: r.id,
	bank: [{
		grade: 1,
		en: { prompt: "Write the number: seventy-three" },
		fr: { prompt: "Écris le nombre : soixante-treize" },
		correctValue: 73
	}, {
		grade: 2,
		en: { prompt: "Write the number: ninety-six" },
		fr: { prompt: "Écris le nombre : quatre-vingt-seize" },
		correctValue: 96
	}]
}), we = y({
	pluginId: "syllabus-g1-number-bonds-within-10",
	competencyId: i.id,
	bank: [{
		grade: 1,
		en: { prompt: "6 + ? = 10" },
		fr: { prompt: "6 + ? = 10" },
		correctValue: 4
	}, {
		grade: 2,
		en: { prompt: "What two numbers make 9? 9 = 2 + ?" },
		fr: { prompt: "Quels sont les deux nombres qui font 9 ? 9 = 2 + ?" },
		correctValue: 7
	}]
}), Te = y({
	pluginId: "syllabus-g1-add-subtract-within-20",
	competencyId: a.id,
	bank: [{
		grade: 1,
		en: { prompt: "12 + 5 = ?" },
		fr: { prompt: "12 + 5 = ?" },
		correctValue: 17
	}, {
		grade: 2,
		en: { prompt: "18 - 9 = ?" },
		fr: { prompt: "18 - 9 = ?" },
		correctValue: 9
	}]
}), Ee = [
	{
		grade: 1,
		en: { prompt: "Half of 8 apples is how many apples?" },
		fr: { prompt: "La moitié de 8 pommes, ça fait combien de pommes ?" },
		correctValue: 4
	},
	{
		grade: 1,
		en: { prompt: "Half of 6 stickers is how many stickers?" },
		fr: { prompt: "La moitié de 6 autocollants, ça fait combien d'autocollants ?" },
		correctValue: 3
	},
	{
		grade: 1,
		en: { prompt: "A quarter of 8 sweets is how many sweets?" },
		fr: { prompt: "Un quart de 8 bonbons, ça fait combien de bonbons ?" },
		correctValue: 2
	},
	{
		grade: 1,
		en: { prompt: "Half of 10 grapes is how many grapes?" },
		fr: { prompt: "La moitié de 10 raisins, ça fait combien de raisins ?" },
		correctValue: 5
	},
	{
		grade: 2,
		en: { prompt: "A quarter of 12 sweets is how many sweets?" },
		fr: { prompt: "Un quart de 12 bonbons, ça fait combien de bonbons ?" },
		correctValue: 3
	},
	{
		grade: 2,
		en: { prompt: "Half of 16 marbles is how many marbles?" },
		fr: { prompt: "La moitié de 16 billes, ça fait combien de billes ?" },
		correctValue: 8
	},
	{
		grade: 2,
		en: { prompt: "A quarter of 16 crayons is how many crayons?" },
		fr: { prompt: "Un quart de 16 crayons, ça fait combien de crayons ?" },
		correctValue: 4
	},
	{
		grade: 2,
		en: { prompt: "Half of 20 buttons is how many buttons?" },
		fr: { prompt: "La moitié de 20 boutons, ça fait combien de boutons ?" },
		correctValue: 10
	}
], De = [
	{
		grade: 1,
		en: {
			prompt: "A square is split into two pieces: one big triangle and one small triangle. Is this split into exact halves?",
			options: ["Yes, that is an exact half", "No, the pieces are different sizes"],
			correctIndex: 1
		},
		fr: {
			prompt: "Un carré est coupé en deux morceaux : un grand triangle et un petit triangle. Est-ce coupé en moitiés exactes ?",
			options: ["Oui, c'est une moitié exacte", "Non, les morceaux sont de tailles différentes"],
			correctIndex: 1
		}
	},
	{
		grade: 1,
		en: {
			prompt: "A circle is cut through its centre into two equal pieces. Which describes this split?",
			options: ["An exact half", "An uneven split, not a half"],
			correctIndex: 0
		},
		fr: {
			prompt: "Un cercle est coupé en son centre en deux morceaux égaux. Comment décrit-on cette coupe ?",
			options: ["Une moitié exacte", "Une coupe inégale, pas une moitié"],
			correctIndex: 0
		}
	},
	{
		grade: 1,
		en: {
			prompt: "A rectangle is split into two pieces: one is much wider than the other. Is this an exact half?",
			options: ["Yes, an exact half", "No, the pieces are uneven"],
			correctIndex: 1
		},
		fr: {
			prompt: "Un rectangle est coupé en deux morceaux : l'un est bien plus large que l'autre. Est-ce une moitié exacte ?",
			options: ["Oui, une moitié exacte", "Non, les morceaux sont inégaux"],
			correctIndex: 1
		}
	},
	{
		grade: 1,
		en: {
			prompt: "A pizza is cut into 2 same-size slices. Which describes this split?",
			options: ["An exact half", "An uneven split, not a half"],
			correctIndex: 0
		},
		fr: {
			prompt: "Une pizza est coupée en 2 parts de même taille. Comment décrit-on cette coupe ?",
			options: ["Une moitié exacte", "Une coupe inégale, pas une moitié"],
			correctIndex: 0
		}
	},
	{
		grade: 2,
		en: {
			prompt: "A chocolate bar is split into 4 pieces, but one piece is twice as big as the others. Is this split into exact quarters?",
			options: ["Yes, that is exact quarters", "No, the pieces are different sizes"],
			correctIndex: 1
		},
		fr: {
			prompt: "Une tablette de chocolat est coupée en 4 morceaux, mais un morceau est deux fois plus grand que les autres. Est-ce coupé en quarts exacts ?",
			options: ["Oui, ce sont des quarts exacts", "Non, les morceaux sont de tailles différentes"],
			correctIndex: 1
		}
	},
	{
		grade: 2,
		en: {
			prompt: "A square is folded in half, then in half again, making 4 same-size pieces. Which describes this split?",
			options: ["Exact quarters", "An uneven split, not quarters"],
			correctIndex: 0
		},
		fr: {
			prompt: "Un carré est plié en deux, puis encore en deux, ce qui fait 4 morceaux de même taille. Comment décrit-on cette coupe ?",
			options: ["Des quarts exacts", "Une coupe inégale, pas des quarts"],
			correctIndex: 0
		}
	},
	{
		grade: 2,
		en: {
			prompt: "A cake is cut into 4 pieces of very different sizes. Is this split into exact quarters?",
			options: ["Yes, exact quarters", "No, the pieces are uneven"],
			correctIndex: 1
		},
		fr: {
			prompt: "Un gâteau est coupé en 4 morceaux de tailles très différentes. Est-ce coupé en quarts exacts ?",
			options: ["Oui, des quarts exacts", "Non, les morceaux sont inégaux"],
			correctIndex: 1
		}
	},
	{
		grade: 2,
		en: {
			prompt: "A ribbon is cut into 4 equal-length pieces. Which describes this split?",
			options: ["Exact quarters", "An uneven split, not quarters"],
			correctIndex: 0
		},
		fr: {
			prompt: "Un ruban est coupé en 4 morceaux de longueur égale. Comment décrit-on cette coupe ?",
			options: ["Des quarts exacts", "Une coupe inégale, pas des quarts"],
			correctIndex: 0
		}
	}
];
function Oe(e, t) {
	return e.filter((e) => e.grade === t);
}
function ke(e) {
	return e === 1 || e === 2;
}
function Ae(e) {
	return Array.from({ length: e }, (e, t) => String.fromCharCode(97 + t));
}
function je(e, t, n) {
	let r = Oe(Ee, e), i = r[Se(n, 0, r.length - 1)];
	return {
		id: `syllabus-g1-half-and-quarter-${e}-${t}`,
		grade: e,
		kind: "find-quantity",
		en: { prompt: i.en.prompt },
		fr: { prompt: i.fr.prompt },
		correctValue: i.correctValue
	};
}
function Me(e, t, n) {
	let r = Oe(De, e), i = r[Se(n, 0, r.length - 1)], a = Ae(i.en.options.length), o = Ae(i.fr.options.length);
	return {
		id: `syllabus-g1-half-and-quarter-${e}-${t}`,
		grade: e,
		kind: "recognise-split",
		en: {
			prompt: i.en.prompt,
			options: i.en.options.map((e, t) => ({
				id: a[t],
				label: e
			}))
		},
		fr: {
			prompt: i.fr.prompt,
			options: i.fr.options.map((e, t) => ({
				id: o[t],
				label: e
			}))
		},
		correctOptionId: a[i.en.correctIndex]
	};
}
function Ne(e, t) {
	if (!ke(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..2)`);
	let n = xe(t);
	return Se(n, 0, 1) === 0 ? je(e, t, n) : Me(e, t, n);
}
function Pe(e) {
	return e.kind === "recognise-split" ? {
		presentation: {
			kind: "choice",
			prompt: e.en.prompt,
			options: e.en.options
		},
		correctAnswer: e.correctOptionId
	} : {
		presentation: {
			kind: "equation",
			equation: e.en.prompt
		},
		correctAnswer: e.correctValue
	};
}
var Fe = {
	id: "syllabus-g1-half-and-quarter",
	competencyIds: [o.id],
	generateQuestion(e, t) {
		return Ne(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "recognise-split" ? { correct: t === e.correctOptionId } : { correct: t === e.correctValue };
	},
	toPresentation: Pe
};
function Ie(e, t) {
	let n = xe(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ne(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
function Le(e, t, n, r, i, a) {
	return {
		competencyId: o.id,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Pe(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
var Re = {
	plugin: Fe,
	createSession: Ie,
	createMasterySignal: Le
}, ze = y({
	pluginId: "syllabus-g1-length-in-cm",
	competencyId: s.id,
	bank: [
		{
			grade: 1,
			en: { prompt: "A crayon starts at the 2 cm mark and ends at the 9 cm mark on a ruler. How long is the crayon, in cm?" },
			fr: { prompt: "Un crayon commence à la marque 2 cm et se termine à la marque 9 cm sur une règle. Quelle est la longueur du crayon, en cm ?" },
			correctValue: 7
		},
		{
			grade: 1,
			en: { prompt: "A paperclip starts at the 3 cm mark and ends at the 5 cm mark on a ruler. How long is the paperclip, in cm?" },
			fr: { prompt: "Un trombone commence à la marque 3 cm et se termine à la marque 5 cm sur une règle. Quelle est la longueur du trombone, en cm ?" },
			correctValue: 2
		},
		{
			grade: 1,
			en: { prompt: "A ruler has a mark at every centimetre from 0 to 10. A ribbon starts at 0 and its tip lines up with the sixth mark after 0. How long is the ribbon, in cm?" },
			fr: { prompt: "Une règle a une marque à chaque centimètre de 0 à 10. Un ruban commence à 0 et sa pointe s'aligne avec la sixième marque après 0. Quelle est la longueur du ruban, en cm ?" },
			correctValue: 6
		},
		{
			grade: 2,
			en: { prompt: "A ribbon starts at the 4 cm mark and ends at the 17 cm mark on a ruler. How long is the ribbon, in cm?" },
			fr: { prompt: "Un ruban commence à la marque 4 cm et se termine à la marque 17 cm sur une règle. Quelle est la longueur du ruban, en cm ?" },
			correctValue: 13
		},
		{
			grade: 2,
			en: { prompt: "A leaf starts at the 6 cm mark and ends at the 14 cm mark on a ruler. How long is the leaf, in cm?" },
			fr: { prompt: "Une feuille commence à la marque 6 cm et se termine à la marque 14 cm sur une règle. Quelle est la longueur de la feuille, en cm ?" },
			correctValue: 8
		},
		{
			grade: 2,
			en: { prompt: "A ruler has a mark at every centimetre from 0 to 20. A shoelace starts at 0 and its tip lines up with the fifteenth mark after 0. How long is the shoelace, in cm?" },
			fr: { prompt: "Une règle a une marque à chaque centimètre de 0 à 20. Un lacet commence à 0 et sa pointe s'aligne avec la quinzième marque après 0. Quelle est la longueur du lacet, en cm ?" },
			correctValue: 15
		}
	]
}), Be = v({
	pluginId: "syllabus-g1-measurement-vocabulary",
	competencyId: c.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Which word describes how long something is?",
			options: [
				"Length",
				"Mass",
				"Capacity"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quel mot décrit à quel point quelque chose est long ?",
			options: [
				"Longueur",
				"Masse",
				"Capacité"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Which word describes how heavy something is?",
			options: [
				"Length",
				"Mass",
				"Time"
			],
			correctIndex: 1
		},
		fr: {
			prompt: "Quel mot décrit à quel point quelque chose est lourd ?",
			options: [
				"Longueur",
				"Masse",
				"Temps"
			],
			correctIndex: 1
		}
	}]
}), Ve = v({
	pluginId: "syllabus-g1-time-hour-half-hour",
	competencyId: l.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "The clock's hour hand is on 3 and the minute hand is on 12. What time is it?",
			options: [
				"3 o'clock",
				"Half past 3",
				"3:15"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "La petite aiguille est sur 3 et la grande aiguille est sur 12. Quelle heure est-il ?",
			options: [
				"3 heures",
				"3 heures et demie",
				"3h15"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "The clock's hour hand is between 7 and 8, and the minute hand is on 6. What time is it?",
			options: [
				"7 o'clock",
				"Half past 7",
				"8 o'clock"
			],
			correctIndex: 1
		},
		fr: {
			prompt: "La petite aiguille est entre 7 et 8, et la grande aiguille est sur 6. Quelle heure est-il ?",
			options: [
				"7 heures",
				"7 heures et demie",
				"8 heures"
			],
			correctIndex: 1
		}
	}]
}), He = _({
	pluginId: "syllabus-g1-months-and-seasons",
	competencyId: u.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "The month after January is ___.",
			answer: "February"
		},
		fr: {
			promptWithBlank: "Le mois après janvier est ___.",
			answer: "février"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "The season after winter is ___.",
			answer: "spring"
		},
		fr: {
			promptWithBlank: "La saison après l'hiver est ___.",
			answer: "printemps"
		}
	}]
}), Ue = v({
	pluginId: "syllabus-g1-names-2d-3d-shapes",
	competencyId: d.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Which shape has 3 straight sides?",
			options: [
				"Triangle",
				"Circle",
				"Square"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quelle forme a 3 côtés droits ?",
			options: [
				"Triangle",
				"Cercle",
				"Carré"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Which 3D shape looks like a ball?",
			options: [
				"Cube",
				"Sphere",
				"Cylinder"
			],
			correctIndex: 1
		},
		fr: {
			prompt: "Quelle forme en 3D ressemble à une balle ?",
			options: [
				"Cube",
				"Sphère",
				"Cylindre"
			],
			correctIndex: 1
		}
	}]
}), We = v({
	pluginId: "syllabus-g1-shape-orientation-invariance",
	competencyId: f.id,
	bank: [
		{
			grade: 1,
			en: {
				prompt: "Which of these is a triangle?",
				options: [
					"A shape with 3 straight sides, pointing downward",
					"A shape with 4 equal straight sides",
					"A shape with no straight sides, perfectly round"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Laquelle de ces formes est un triangle ?",
				options: [
					"Une forme à 3 côtés droits, pointe vers le bas",
					"Une forme à 4 côtés droits égaux",
					"Une forme sans côté droit, parfaitement ronde"
				],
				correctIndex: 0
			}
		},
		{
			grade: 1,
			en: {
				prompt: "Which of these is a square?",
				options: [
					"A shape with 4 equal straight sides, tilted so it looks like a diamond",
					"A shape with 4 straight sides, but two are longer than the other two",
					"A shape with 3 straight sides, very small"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Laquelle de ces formes est un carré ?",
				options: [
					"Une forme à 4 côtés droits égaux, inclinée pour ressembler à un losange",
					"Une forme à 4 côtés droits, mais deux sont plus longs que les deux autres",
					"Une forme à 3 côtés droits, toute petite"
				],
				correctIndex: 0
			}
		},
		{
			grade: 1,
			en: {
				prompt: "Which of these is a circle?",
				options: [
					"A shape with no straight sides, much bigger than the others, resting on a table",
					"A shape with 3 straight sides, pointing to the side",
					"A shape with 4 equal straight sides, standing on one corner"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Laquelle de ces formes est un cercle ?",
				options: [
					"Une forme sans côté droit, beaucoup plus grande que les autres, posée sur une table",
					"Une forme à 3 côtés droits, pointant sur le côté",
					"Une forme à 4 côtés droits égaux, posée sur un coin"
				],
				correctIndex: 0
			}
		},
		{
			grade: 2,
			en: {
				prompt: "Which of these is a triangle?",
				options: [
					"A shape with 4 straight sides, but two are longer than the other two",
					"A shape with 3 straight sides, resting on one corner, very small",
					"A shape with no straight sides, perfectly round"
				],
				correctIndex: 1
			},
			fr: {
				prompt: "Laquelle de ces formes est un triangle ?",
				options: [
					"Une forme à 4 côtés droits, mais deux sont plus longs que les deux autres",
					"Une forme à 3 côtés droits, posée sur un coin, toute petite",
					"Une forme sans côté droit, parfaitement ronde"
				],
				correctIndex: 1
			}
		},
		{
			grade: 2,
			en: {
				prompt: "Which of these is a square?",
				options: [
					"A shape with no straight sides, much smaller than the others",
					"A shape with 4 straight sides, but two are longer than the other two, lying flat",
					"A shape with 4 equal straight sides, standing on one corner like a diamond"
				],
				correctIndex: 2
			},
			fr: {
				prompt: "Laquelle de ces formes est un carré ?",
				options: [
					"Une forme sans côté droit, beaucoup plus petite que les autres",
					"Une forme à 4 côtés droits, mais deux sont plus longs que les deux autres, à plat",
					"Une forme à 4 côtés droits égaux, posée sur un coin comme un losange"
				],
				correctIndex: 2
			}
		},
		{
			grade: 2,
			en: {
				prompt: "Which of these is a circle?",
				options: [
					"A shape with 3 straight sides, pointing upward, much bigger than the others",
					"A shape with 4 equal straight sides, tilted like a diamond",
					"A shape with no straight sides, very small, off to one side"
				],
				correctIndex: 2
			},
			fr: {
				prompt: "Laquelle de ces formes est un cercle ?",
				options: [
					"Une forme à 3 côtés droits, pointant vers le haut, beaucoup plus grande que les autres",
					"Une forme à 4 côtés droits égaux, inclinée comme un losange",
					"Une forme sans côté droit, toute petite, sur le côté"
				],
				correctIndex: 2
			}
		}
	]
}), Ge = v({
	pluginId: "syllabus-g1-describes-route",
	competencyId: p.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "You are facing the door. To reach the window on your left, which way do you turn?",
			options: [
				"Turn left",
				"Turn right",
				"Go forward"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Tu fais face à la porte. Pour atteindre la fenêtre à ta gauche, de quel côté tournes-tu ?",
			options: [
				"Tourne à gauche",
				"Tourne à droite",
				"Avance"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "To go from the kitchen straight to the hallway with no turns, what do you do?",
			options: [
				"Turn left",
				"Turn right",
				"Go forward"
			],
			correctIndex: 2
		},
		fr: {
			prompt: "Pour aller de la cuisine directement au couloir sans tourner, que fais-tu ?",
			options: [
				"Tourne à gauche",
				"Tourne à droite",
				"Avance"
			],
			correctIndex: 2
		}
	}]
}), Ke = v({
	pluginId: "syllabus-g1-sorts-objects-by-criterion",
	competencyId: m.id,
	bank: [
		{
			grade: 1,
			en: {
				prompt: "A red circle and a red square are in one group. A blue circle is in another group. What rule explains this?",
				options: [
					"Sorted by colour",
					"Sorted by shape",
					"Sorted by size"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Un cercle rouge et un carré rouge sont dans un groupe. Un cercle bleu est dans un autre groupe. Quelle règle explique ce tri ?",
				options: [
					"Trié par couleur",
					"Trié par forme",
					"Trié par taille"
				],
				correctIndex: 0
			}
		},
		{
			grade: 1,
			en: {
				prompt: "A big yellow star and a small yellow star are in one group. A big yellow moon is in another group. What rule explains this?",
				options: [
					"Sorted by shape",
					"Sorted by size",
					"Sorted by colour"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Une grande étoile jaune et une petite étoile jaune sont dans un groupe. Une grande lune jaune est dans un autre groupe. Quelle règle explique ce tri ?",
				options: [
					"Trié par forme",
					"Trié par taille",
					"Trié par couleur"
				],
				correctIndex: 0
			}
		},
		{
			grade: 1,
			en: {
				prompt: "A tall green tree and a short green tree are in one group. A tall green flower is in another group. What rule explains this?",
				options: [
					"Sorted by type of plant",
					"Sorted by height",
					"Sorted by colour"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Un grand arbre vert et un petit arbre vert sont dans un groupe. Une grande fleur verte est dans un autre groupe. Quelle règle explique ce tri ?",
				options: [
					"Trié par type de plante",
					"Trié par hauteur",
					"Trié par couleur"
				],
				correctIndex: 0
			}
		},
		{
			grade: 2,
			en: {
				prompt: "A big dog and a big cat are in one group. A small dog is in another group. What rule explains this?",
				options: [
					"Sorted by size",
					"Sorted by animal type",
					"Sorted by age"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Un grand chien et un grand chat sont dans un groupe. Un petit chien est dans un autre groupe. Quelle règle explique ce tri ?",
				options: [
					"Trié par taille",
					"Trié par type d'animal",
					"Trié par âge"
				],
				correctIndex: 0
			}
		},
		{
			grade: 2,
			en: {
				prompt: "A red triangle and a blue triangle are in one group. A red pentagon is in another group. What rule explains this?",
				options: [
					"Sorted by shape",
					"Sorted by colour",
					"Sorted by size"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Un triangle rouge et un triangle bleu sont dans un groupe. Un pentagone rouge est dans un autre groupe. Quelle règle explique ce tri ?",
				options: [
					"Trié par forme",
					"Trié par couleur",
					"Trié par taille"
				],
				correctIndex: 0
			}
		},
		{
			grade: 2,
			en: {
				prompt: "A large blue square and a small blue square are in one group. A large blue triangle is in another group. What rule explains this?",
				options: [
					"Sorted by shape",
					"Sorted by size",
					"Sorted by colour"
				],
				correctIndex: 0
			},
			fr: {
				prompt: "Un grand carré bleu et un petit carré bleu sont dans un groupe. Un grand triangle bleu est dans un autre groupe. Quelle règle explique ce tri ?",
				options: [
					"Trié par forme",
					"Trié par taille",
					"Trié par couleur"
				],
				correctIndex: 0
			}
		}
	]
}), qe = y({
	pluginId: "syllabus-g1-reads-simple-pictogram",
	competencyId: h.id,
	bank: [
		{
			grade: 1,
			en: { prompt: "A pictogram shows 3 apple pictures for Monday, each picture = 2 apples. How many apples were picked on Monday?" },
			fr: { prompt: "Un pictogramme montre 3 images de pommes pour lundi, chaque image = 2 pommes. Combien de pommes ont été cueillies lundi ?" },
			correctValue: 6
		},
		{
			grade: 1,
			en: { prompt: "A pictogram shows 4 star pictures for Wednesday, each picture = 3 stars. How many stars in total for Wednesday?" },
			fr: { prompt: "Un pictogramme montre 4 images d'étoiles pour mercredi, chaque image = 3 étoiles. Combien d'étoiles au total pour mercredi ?" },
			correctValue: 12
		},
		{
			grade: 1,
			en: { prompt: "A pictogram shows 5 book pictures for Friday, each picture = 2 books. How many books were read on Friday?" },
			fr: { prompt: "Un pictogramme montre 5 images de livres pour vendredi, chaque image = 2 livres. Combien de livres ont été lus vendredi ?" },
			correctValue: 10
		},
		{
			grade: 2,
			en: { prompt: "A pictogram shows 3 star pictures for Tuesday, each picture = 2 stars. How many stars in total for Tuesday?" },
			fr: { prompt: "Un pictogramme montre 3 images d'étoiles pour mardi, chaque image = 2 étoiles. Combien d'étoiles au total pour mardi ?" },
			correctValue: 6
		}
	]
}), Je = _({
	pluginId: "syllabus-g1-continues-repeating-pattern",
	competencyId: g.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "Red, blue, red, blue, ___",
			answer: "red"
		},
		fr: {
			promptWithBlank: "Rouge, bleu, rouge, bleu, ___",
			answer: "rouge"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "1, 2, 3, 1, 2, 3, 1, ___",
			answer: "2"
		},
		fr: {
			promptWithBlank: "1, 2, 3, 1, 2, 3, 1, ___",
			answer: "2"
		}
	}]
}), Ye = v({
	pluginId: "syllabus-g1-choose-addition-or-subtraction",
	competencyId: ee.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Maya had 5 stickers and got 3 more. Which operation finds her new total?",
			options: [
				"Addition",
				"Subtraction",
				"Neither"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Maya avait 5 autocollants et en a reçu 3 de plus. Quelle opération donne son nouveau total ?",
			options: [
				"Addition",
				"Soustraction",
				"Aucune"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Sam had 9 marbles and gave 4 away. Which operation finds how many he has left?",
			options: [
				"Addition",
				"Subtraction",
				"Neither"
			],
			correctIndex: 1
		},
		fr: {
			prompt: "Sam avait 9 billes et en a donné 4. Quelle opération donne combien il lui en reste ?",
			options: [
				"Addition",
				"Soustraction",
				"Aucune"
			],
			correctIndex: 1
		}
	}]
}), Xe = [
	Ce.plugin,
	we.plugin,
	Te.plugin,
	Re.plugin,
	ze.plugin,
	Be.plugin,
	Ve.plugin,
	He.plugin,
	Ue.plugin,
	We.plugin,
	Ge.plugin,
	Ke.plugin,
	qe.plugin,
	Je.plugin,
	Ye.plugin
];
function b(e) {
	return e;
}
var Ze = [
	b({
		key: "syllabus-g1-reads-writes-to-100",
		label: "Reading & Writing Numbers to 100",
		icon: "🔢",
		pluginId: Ce.plugin.id,
		competency: r,
		competencies: [r],
		createSession: Ce.createSession,
		createMasterySignal: Ce.createMasterySignal
	}),
	b({
		key: "syllabus-g1-number-bonds-within-10",
		label: "Number Bonds to 10",
		icon: "🔗",
		pluginId: we.plugin.id,
		competency: i,
		competencies: [i],
		createSession: we.createSession,
		createMasterySignal: we.createMasterySignal
	}),
	b({
		key: "syllabus-g1-add-subtract-within-20",
		label: "Add & Subtract within 20",
		icon: "🧮",
		pluginId: Te.plugin.id,
		competency: a,
		competencies: [a],
		createSession: Te.createSession,
		createMasterySignal: Te.createMasterySignal
	}),
	b({
		key: "syllabus-g1-half-and-quarter",
		label: "Halves & Quarters",
		icon: "🍕",
		pluginId: Re.plugin.id,
		competency: o,
		competencies: [o],
		createSession: Re.createSession,
		createMasterySignal: Re.createMasterySignal
	}),
	b({
		key: "syllabus-g1-length-in-cm",
		label: "Measuring Length in cm",
		icon: "📏",
		pluginId: ze.plugin.id,
		competency: s,
		competencies: [s],
		createSession: ze.createSession,
		createMasterySignal: ze.createMasterySignal
	}),
	b({
		key: "syllabus-g1-measurement-vocabulary",
		label: "Measurement Vocabulary",
		icon: "⚖️",
		pluginId: Be.plugin.id,
		competency: c,
		competencies: [c],
		createSession: Be.createSession,
		createMasterySignal: Be.createMasterySignal
	}),
	b({
		key: "syllabus-g1-time-hour-half-hour",
		label: "Telling Time: Hour & Half-Hour",
		icon: "🕐",
		pluginId: Ve.plugin.id,
		competency: l,
		competencies: [l],
		createSession: Ve.createSession,
		createMasterySignal: Ve.createMasterySignal
	}),
	b({
		key: "syllabus-g1-months-and-seasons",
		label: "Months & Seasons",
		icon: "📅",
		pluginId: He.plugin.id,
		competency: u,
		competencies: [u],
		createSession: He.createSession,
		createMasterySignal: He.createMasterySignal
	}),
	b({
		key: "syllabus-g1-names-2d-3d-shapes",
		label: "Naming 2D & 3D Shapes",
		icon: "🔺",
		pluginId: Ue.plugin.id,
		competency: d,
		competencies: [d],
		createSession: Ue.createSession,
		createMasterySignal: Ue.createMasterySignal
	}),
	b({
		key: "syllabus-g1-shape-orientation-invariance",
		label: "Shapes in Any Orientation",
		icon: "🔄",
		pluginId: We.plugin.id,
		competency: f,
		competencies: [f],
		createSession: We.createSession,
		createMasterySignal: We.createMasterySignal
	}),
	b({
		key: "syllabus-g1-describes-route",
		label: "Describing a Route",
		icon: "🧭",
		pluginId: Ge.plugin.id,
		competency: p,
		competencies: [p],
		createSession: Ge.createSession,
		createMasterySignal: Ge.createMasterySignal
	}),
	b({
		key: "syllabus-g1-sorts-objects-by-criterion",
		label: "Sorting by a Rule",
		icon: "🗂️",
		pluginId: Ke.plugin.id,
		competency: m,
		competencies: [m],
		createSession: Ke.createSession,
		createMasterySignal: Ke.createMasterySignal
	}),
	b({
		key: "syllabus-g1-reads-simple-pictogram",
		label: "Reading a Pictogram",
		icon: "📊",
		pluginId: qe.plugin.id,
		competency: h,
		competencies: [h],
		createSession: qe.createSession,
		createMasterySignal: qe.createMasterySignal
	}),
	b({
		key: "syllabus-g1-continues-repeating-pattern",
		label: "Continuing a Pattern",
		icon: "🔁",
		pluginId: Je.plugin.id,
		competency: g,
		competencies: [g],
		createSession: Je.createSession,
		createMasterySignal: Je.createMasterySignal
	}),
	b({
		key: "syllabus-g1-choose-addition-or-subtraction",
		label: "Addition or Subtraction?",
		icon: "❓",
		pluginId: Ye.plugin.id,
		competency: ee,
		competencies: [ee],
		createSession: Ye.createSession,
		createMasterySignal: Ye.createMasterySignal
	})
], Qe = {
	id: "math.number-sense.counts-reads-writes-to-1000",
	nameKey: "competency.math.number-sense.counts-reads-writes-to-1000.name",
	descriptionKey: "competency.math.number-sense.counts-reads-writes-to-1000.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.0",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.counts-reads-writes-to-1000"
	}]
}, $e = {
	id: "math.number-sense.orders-numbers-to-1000",
	nameKey: "competency.math.number-sense.orders-numbers-to-1000.name",
	descriptionKey: "competency.math.number-sense.orders-numbers-to-1000.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.1",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.orders-numbers-to-1000"
	}]
}, et = {
	id: "math.place-value.partitions-three-digit-numbers",
	nameKey: "competency.math.place-value.partitions-three-digit-numbers.name",
	descriptionKey: "competency.math.place-value.partitions-three-digit-numbers.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.2",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.place-value.partitions-three-digit-numbers"
	}]
}, tt = {
	id: "math.place-value.digit-value-in-three-digit-number",
	nameKey: "competency.math.place-value.digit-value-in-three-digit-number.name",
	descriptionKey: "competency.math.place-value.digit-value-in-three-digit-number.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.3",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.place-value.digit-value-in-three-digit-number"
	}]
}, nt = {
	id: "math.addition.number-bonds-within-20",
	nameKey: "competency.math.addition.number-bonds-within-20.name",
	descriptionKey: "competency.math.addition.number-bonds-within-20.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.4",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.addition.number-bonds-within-20"
	}]
}, rt = {
	id: "math.addition.add-subtract-two-digit-with-regrouping",
	nameKey: "competency.math.addition.add-subtract-two-digit-with-regrouping.name",
	descriptionKey: "competency.math.addition.add-subtract-two-digit-with-regrouping.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.5",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.addition.add-subtract-two-digit-with-regrouping"
	}]
}, it = {
	id: "math.mathematical-reasoning.addition-commutative-subtraction-not",
	nameKey: "competency.math.mathematical-reasoning.addition-commutative-subtraction-not.name",
	descriptionKey: "competency.math.mathematical-reasoning.addition-commutative-subtraction-not.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.6",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.addition-commutative-subtraction-not"
	}]
}, at = {
	id: "math.multiplication.times-tables-2-5-10",
	nameKey: "competency.math.multiplication.times-tables-2-5-10.name",
	descriptionKey: "competency.math.multiplication.times-tables-2-5-10.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.7",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.multiplication.times-tables-2-5-10"
	}]
}, ot = {
	id: "math.division.sharing-grouping-remainders",
	nameKey: "competency.math.division.sharing-grouping-remainders.name",
	descriptionKey: "competency.math.division.sharing-grouping-remainders.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.8",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.division.sharing-grouping-remainders"
	}]
}, st = {
	id: "math.mental-mathematics.add-subtract-one-digit-to-two-digit",
	nameKey: "competency.math.mental-mathematics.add-subtract-one-digit-to-two-digit.name",
	descriptionKey: "competency.math.mental-mathematics.add-subtract-one-digit-to-two-digit.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.9",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mental-mathematics.add-subtract-one-digit-to-two-digit"
	}]
}, ct = {
	id: "math.mental-mathematics.doubles-halves-to-50",
	nameKey: "competency.math.mental-mathematics.doubles-halves-to-50.name",
	descriptionKey: "competency.math.mental-mathematics.doubles-halves-to-50.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.10",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mental-mathematics.doubles-halves-to-50"
	}]
}, lt = {
	id: "math.fractions.thirds-quarters-fifths",
	nameKey: "competency.math.fractions.thirds-quarters-fifths.name",
	descriptionKey: "competency.math.fractions.thirds-quarters-fifths.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.11",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.thirds-quarters-fifths"
	}]
}, ut = {
	id: "math.measurement.mass-and-capacity",
	nameKey: "competency.math.measurement.mass-and-capacity.name",
	descriptionKey: "competency.math.measurement.mass-and-capacity.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.12",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.mass-and-capacity"
	}]
}, dt = {
	id: "math.measurement.metric-units-relationships",
	nameKey: "competency.math.measurement.metric-units-relationships.name",
	descriptionKey: "competency.math.measurement.metric-units-relationships.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.13",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.metric-units-relationships"
	}]
}, ft = {
	id: "math.time.five-minutes-quarter-hour",
	nameKey: "competency.math.time.five-minutes-quarter-hour.name",
	descriptionKey: "competency.math.time.five-minutes-quarter-hour.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.14",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.five-minutes-quarter-hour"
	}]
}, pt = {
	id: "math.time.days-weeks-months-counts",
	nameKey: "competency.math.time.days-weeks-months-counts.name",
	descriptionKey: "competency.math.time.days-weeks-months-counts.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.15",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.days-weeks-months-counts"
	}]
}, mt = {
	id: "math.geometry.counts-shape-properties",
	nameKey: "competency.math.geometry.counts-shape-properties.name",
	descriptionKey: "competency.math.geometry.counts-shape-properties.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.16",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.counts-shape-properties"
	}]
}, ht = {
	id: "math.geometry.recognises-line-of-symmetry",
	nameKey: "competency.math.geometry.recognises-line-of-symmetry.name",
	descriptionKey: "competency.math.geometry.recognises-line-of-symmetry.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.17",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.recognises-line-of-symmetry"
	}]
}, gt = {
	id: "math.geometry.describes-grid-position",
	nameKey: "competency.math.geometry.describes-grid-position.name",
	descriptionKey: "competency.math.geometry.describes-grid-position.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.18",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.describes-grid-position"
	}]
}, _t = {
	id: "math.data-graphs.tally-chart-bar-chart",
	nameKey: "competency.math.data-graphs.tally-chart-bar-chart.name",
	descriptionKey: "competency.math.data-graphs.tally-chart-bar-chart.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.19",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.tally-chart-bar-chart"
	}]
}, vt = {
	id: "math.mathematical-reasoning.finds-missing-number-in-equation",
	nameKey: "competency.math.mathematical-reasoning.finds-missing-number-in-equation.name",
	descriptionKey: "competency.math.mathematical-reasoning.finds-missing-number-in-equation.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.20",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.finds-missing-number-in-equation"
	}]
}, yt = {
	id: "math.problem-solving.solves-one-step-word-problem",
	nameKey: "competency.math.problem-solving.solves-one-step-word-problem.name",
	descriptionKey: "competency.math.problem-solving.solves-one-step-word-problem.description",
	subjectId: "mathematics",
	targetGrade: 2,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G2.21",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.solves-one-step-word-problem"
	}]
}, bt = [
	Qe,
	$e,
	et,
	tt,
	nt,
	rt,
	it,
	at,
	ot,
	st,
	ct,
	lt,
	ut,
	dt,
	ft,
	pt,
	mt,
	ht,
	gt,
	_t,
	vt,
	yt
];
//#endregion
//#region packages/template-ordering/src/rng.ts
function xt(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function St(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
function Ct(e, t) {
	let n = t.slice();
	for (let t = n.length - 1; t > 0; t--) {
		let r = St(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n;
}
//#endregion
//#region packages/template-ordering/src/factory.ts
function wt(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Tt(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function Et(e) {
	return e.items.slice().sort((e, t) => e.correctPosition - t.correctPosition).map((e) => e.id);
}
function Dt(e, t) {
	return e.map((e) => ({
		id: e.id,
		label: e.label[t]
	}));
}
function Ot(e, t, n) {
	let r = Ct(e, t), i = 0;
	for (; r.map((e) => e.id).join(",") === n.join(",") && i < 1e3;) r = Ct(e, t), i++;
	return r;
}
function kt(e, t, n) {
	if (!wt(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Tt(e.bank, t), i = xt(n), a = r[St(i, 0, r.length - 1)], o = Et(a), s = Math.floor(i() * 4294967295), c = xt(s);
	xt(s);
	let l = Ot(c, Dt(a.items, "en"), o), u = new Map(Dt(a.items, "fr").map((e) => [e.id, e])), d = l.map((e) => u.get(e.id));
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		direction: a.direction,
		en: { items: l },
		fr: { items: d },
		correctOrder: o
	};
}
function At(e, t) {
	return t.length === e.correctOrder.length && t.every((t, n) => t === e.correctOrder[n]);
}
function jt(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return kt(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: At(e, t) };
		}
	};
	function n(t, n) {
		let r = xt(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(kt(e, t, n));
		}
		return {
			grade: t,
			questions: i
		};
	}
	function r(t, n, r, i, a, o) {
		return {
			competencyId: e.competencyId,
			grade: t.grade,
			correct: n,
			timeMs: r,
			timestamp: i,
			questionId: t.id,
			correctAnswer: t.correctOrder.join(","),
			submittedAnswer: a,
			...o && { endReason: o }
		};
	}
	return {
		plugin: t,
		createSession: n,
		createMasterySignal: r
	};
}
//#endregion
//#region packages/template-true-false/src/rng.ts
function Mt(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Nt(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/template-true-false/src/factory.ts
function Pt(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ft(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function It(e, t, n) {
	if (!Pt(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Ft(e.bank, t), i = r[Nt(Mt(n), 0, r.length - 1)];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { statement: i.en.statement },
		fr: { statement: i.fr.statement },
		isTrue: i.en.isTrue
	};
}
function x(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return It(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: t === "true" === e.isTrue };
		},
		toPresentation(e) {
			return {
				presentation: {
					kind: "choice",
					prompt: e.en.statement,
					options: [{
						id: "true",
						label: "True"
					}, {
						id: "false",
						label: "False"
					}]
				},
				correctAnswer: e.isTrue ? "true" : "false"
			};
		}
	};
	function n(t, n) {
		let r = Mt(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(It(e, t, n));
		}
		return {
			grade: t,
			questions: i
		};
	}
	function r(n, r, i, a, o, s) {
		return {
			competencyId: e.competencyId,
			grade: n.grade,
			correct: r,
			timeMs: i,
			timestamp: a,
			questionId: n.id,
			correctAnswer: t.toPresentation(n).correctAnswer,
			submittedAnswer: o,
			...s && { endReason: s }
		};
	}
	return {
		plugin: t,
		createSession: n,
		createMasterySignal: r
	};
}
//#endregion
//#region packages/syllabus-content-g2/src/content.ts
var Lt = y({
	pluginId: "syllabus-g2-counts-reads-writes-to-1000",
	competencyId: Qe.id,
	bank: [{
		grade: 1,
		en: { prompt: "Write the number: four hundred and twenty-six" },
		fr: { prompt: "Écris le nombre : quatre cent vingt-six" },
		correctValue: 426
	}, {
		grade: 2,
		en: { prompt: "Write the number: nine hundred and eight" },
		fr: { prompt: "Écris le nombre : neuf cent huit" },
		correctValue: 908
	}]
}), Rt = jt({
	pluginId: "syllabus-g2-orders-numbers-to-1000",
	competencyId: $e.id,
	bank: [{
		grade: 1,
		direction: "ascending",
		items: [
			{
				id: "a",
				label: {
					en: "199",
					fr: "199"
				},
				correctPosition: 1
			},
			{
				id: "b",
				label: {
					en: "245",
					fr: "245"
				},
				correctPosition: 2
			},
			{
				id: "c",
				label: {
					en: "254",
					fr: "254"
				},
				correctPosition: 3
			}
		]
	}, {
		grade: 2,
		direction: "descending",
		items: [
			{
				id: "a",
				label: {
					en: "863",
					fr: "863"
				},
				correctPosition: 1
			},
			{
				id: "b",
				label: {
					en: "683",
					fr: "683"
				},
				correctPosition: 2
			},
			{
				id: "c",
				label: {
					en: "638",
					fr: "638"
				},
				correctPosition: 3
			},
			{
				id: "d",
				label: {
					en: "601",
					fr: "601"
				},
				correctPosition: 4
			}
		]
	}]
}), zt = y({
	pluginId: "syllabus-g2-partitions-three-digit-numbers",
	competencyId: et.id,
	bank: [{
		grade: 1,
		en: { prompt: "3 hundreds + 4 tens + 2 units = ?" },
		fr: { prompt: "3 centaines + 4 dizaines + 2 unités = ?" },
		correctValue: 342
	}, {
		grade: 2,
		en: { prompt: "6 hundreds + 0 tens + 7 units = ?" },
		fr: { prompt: "6 centaines + 0 dizaine + 7 unités = ?" },
		correctValue: 607
	}]
}), Bt = y({
	pluginId: "syllabus-g2-digit-value-in-three-digit-number",
	competencyId: tt.id,
	bank: [{
		grade: 1,
		en: { prompt: "In the number 452, what is the value of the digit 5?" },
		fr: { prompt: "Dans le nombre 452, quelle est la valeur du chiffre 5 ?" },
		correctValue: 50
	}, {
		grade: 2,
		en: { prompt: "In the number 809, what is the value of the digit 8?" },
		fr: { prompt: "Dans le nombre 809, quelle est la valeur du chiffre 8 ?" },
		correctValue: 800
	}]
}), Vt = y({
	pluginId: "syllabus-g2-number-bonds-within-20",
	competencyId: nt.id,
	bank: [{
		grade: 1,
		en: { prompt: "14 + ? = 20" },
		fr: { prompt: "14 + ? = 20" },
		correctValue: 6
	}, {
		grade: 2,
		en: { prompt: "What two numbers make 17? 17 = 9 + ?" },
		fr: { prompt: "Quels sont les deux nombres qui font 17 ? 17 = 9 + ?" },
		correctValue: 8
	}]
}), Ht = y({
	pluginId: "syllabus-g2-add-subtract-two-digit-with-regrouping",
	competencyId: rt.id,
	bank: [{
		grade: 1,
		en: { prompt: "37 + 26 = ?" },
		fr: { prompt: "37 + 26 = ?" },
		correctValue: 63
	}, {
		grade: 2,
		en: { prompt: "82 - 47 = ?" },
		fr: { prompt: "82 - 47 = ?" },
		correctValue: 35
	}]
}), Ut = x({
	pluginId: "syllabus-g2-addition-commutative-subtraction-not",
	competencyId: it.id,
	bank: [{
		grade: 1,
		en: {
			statement: "8 + 5 gives the same answer as 5 + 8.",
			isTrue: !0
		},
		fr: {
			statement: "8 + 5 donne le même résultat que 5 + 8.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "9 - 3 gives the same answer as 3 - 9.",
			isTrue: !1
		},
		fr: {
			statement: "9 - 3 donne le même résultat que 3 - 9.",
			isTrue: !1
		}
	}]
}), Wt = y({
	pluginId: "syllabus-g2-times-tables-2-5-10",
	competencyId: at.id,
	bank: [{
		grade: 1,
		en: { prompt: "5 x 4 = ?" },
		fr: { prompt: "5 x 4 = ?" },
		correctValue: 20
	}, {
		grade: 2,
		en: { prompt: "How many 2s make 18? 18 ÷ 2 = ?" },
		fr: { prompt: "Combien de fois 2 dans 18 ? 18 ÷ 2 = ?" },
		correctValue: 9
	}]
}), Gt = y({
	pluginId: "syllabus-g2-division-sharing-grouping-remainders",
	competencyId: ot.id,
	bank: [{
		grade: 1,
		en: { prompt: "Share 12 sweets equally between 3 children. How many does each get?" },
		fr: { prompt: "Partage 12 bonbons également entre 3 enfants. Combien chacun en reçoit-il ?" },
		correctValue: 4
	}, {
		grade: 2,
		en: { prompt: "13 buns are put into boxes of 4. How many buns are left over?" },
		fr: { prompt: "13 brioches sont mises dans des boîtes de 4. Combien de brioches restent-elles ?" },
		correctValue: 1
	}]
}), Kt = y({
	pluginId: "syllabus-g2-add-subtract-one-digit-to-two-digit",
	competencyId: st.id,
	bank: [{
		grade: 1,
		en: { prompt: "34 + 8 = ?" },
		fr: { prompt: "34 + 8 = ?" },
		correctValue: 42
	}, {
		grade: 2,
		en: { prompt: "71 - 6 = ?" },
		fr: { prompt: "71 - 6 = ?" },
		correctValue: 65
	}]
}), qt = y({
	pluginId: "syllabus-g2-doubles-halves-to-50",
	competencyId: ct.id,
	bank: [{
		grade: 1,
		en: { prompt: "Double 14. What is the answer?" },
		fr: { prompt: "Double 14. Quel est le résultat ?" },
		correctValue: 28
	}, {
		grade: 2,
		en: { prompt: "Half of 46. What is the answer?" },
		fr: { prompt: "La moitié de 46. Quel est le résultat ?" },
		correctValue: 23
	}]
}), Jt = v({
	pluginId: "syllabus-g2-thirds-quarters-fifths",
	competencyId: lt.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A cake is cut into 3 equal pieces. What is one piece called?",
			options: [
				"A third",
				"A quarter",
				"A fifth"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un gâteau est coupé en 3 parts égales. Comment s'appelle une part ?",
			options: [
				"Un tiers",
				"Un quart",
				"Un cinquième"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Which fraction is the same amount as 2/4?",
			options: [
				"1/2",
				"1/3",
				"1/5"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quelle fraction représente la même quantité que 2/4 ?",
			options: [
				"1/2",
				"1/3",
				"1/5"
			],
			correctIndex: 0
		}
	}]
}), Yt = y({
	pluginId: "syllabus-g2-mass-and-capacity",
	competencyId: ut.id,
	bank: [{
		grade: 1,
		en: { prompt: "A scale's pointer stops exactly on the 300 g mark. What is the mass, in g?" },
		fr: { prompt: "L'aiguille de la balance s'arrête exactement sur 300 g. Quelle est la masse, en g ?" },
		correctValue: 300
	}, {
		grade: 2,
		en: { prompt: "A jug's water level is exactly on the 450 ml mark. What is the capacity, in ml?" },
		fr: { prompt: "Le niveau d'eau du récipient est exactement sur 450 ml. Quelle est la contenance, en ml ?" },
		correctValue: 450
	}]
}), Xt = v({
	pluginId: "syllabus-g2-metric-units-relationships",
	competencyId: dt.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "How many centimetres are in 1 metre?",
			options: [
				"10",
				"100",
				"1000"
			],
			correctIndex: 1
		},
		fr: {
			prompt: "Combien de centimètres y a-t-il dans 1 mètre ?",
			options: [
				"10",
				"100",
				"1000"
			],
			correctIndex: 1
		}
	}, {
		grade: 2,
		en: {
			prompt: "How many grams are in 1 kilogram?",
			options: [
				"10",
				"100",
				"1000"
			],
			correctIndex: 2
		},
		fr: {
			prompt: "Combien de grammes y a-t-il dans 1 kilogramme ?",
			options: [
				"10",
				"100",
				"1000"
			],
			correctIndex: 2
		}
	}]
}), Zt = v({
	pluginId: "syllabus-g2-time-five-minutes-quarter-hour",
	competencyId: ft.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "The minute hand is on the 3. How many minutes past the hour is it?",
			options: [
				"5 minutes",
				"15 minutes",
				"30 minutes"
			],
			correctIndex: 1
		},
		fr: {
			prompt: "La grande aiguille est sur le 3. Combien de minutes après l'heure est-il ?",
			options: [
				"5 minutes",
				"15 minutes",
				"30 minutes"
			],
			correctIndex: 1
		}
	}, {
		grade: 2,
		en: {
			prompt: "The minute hand is on the 7. How many minutes past the hour is it?",
			options: [
				"7 minutes",
				"14 minutes",
				"35 minutes"
			],
			correctIndex: 2
		},
		fr: {
			prompt: "La grande aiguille est sur le 7. Combien de minutes après l'heure est-il ?",
			options: [
				"7 minutes",
				"14 minutes",
				"35 minutes"
			],
			correctIndex: 2
		}
	}]
}), Qt = y({
	pluginId: "syllabus-g2-days-weeks-months-counts",
	competencyId: pt.id,
	bank: [{
		grade: 1,
		en: { prompt: "How many days are in one week?" },
		fr: { prompt: "Combien de jours y a-t-il dans une semaine ?" },
		correctValue: 7
	}, {
		grade: 2,
		en: { prompt: "How many weeks are in one year?" },
		fr: { prompt: "Combien de semaines y a-t-il dans une année ?" },
		correctValue: 52
	}]
}), $t = y({
	pluginId: "syllabus-g2-counts-shape-properties",
	competencyId: mt.id,
	bank: [{
		grade: 1,
		en: { prompt: "How many sides does a hexagon have?" },
		fr: { prompt: "Combien de côtés a un hexagone ?" },
		correctValue: 6
	}, {
		grade: 2,
		en: { prompt: "How many faces does a cube have?" },
		fr: { prompt: "Combien de faces a un cube ?" },
		correctValue: 6
	}]
}), en = x({
	pluginId: "syllabus-g2-recognises-line-of-symmetry",
	competencyId: ht.id,
	bank: [{
		grade: 1,
		en: {
			statement: "A square has at least one line of symmetry.",
			isTrue: !0
		},
		fr: {
			statement: "Un carré a au moins un axe de symétrie.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "Folding a symmetrical figure along its line of symmetry always makes the two halves match exactly.",
			isTrue: !0
		},
		fr: {
			statement: "Plier une figure symétrique le long de son axe de symétrie fait toujours correspondre les deux moitiés exactement.",
			isTrue: !0
		}
	}]
}), tn = _({
	pluginId: "syllabus-g2-describes-grid-position",
	competencyId: gt.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "On a lettered-and-numbered grid, the square in column B, row 4 is written ___.",
			answer: "B4"
		},
		fr: {
			promptWithBlank: "Sur une grille avec lettres et nombres, la case colonne B, ligne 4 s'écrit ___.",
			answer: "B4"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "On a lettered-and-numbered grid, the square in column D, row 2 is written ___.",
			answer: "D2"
		},
		fr: {
			promptWithBlank: "Sur une grille avec lettres et nombres, la case colonne D, ligne 2 s'écrit ___.",
			answer: "D2"
		}
	}]
}), nn = y({
	pluginId: "syllabus-g2-tally-chart-bar-chart",
	competencyId: _t.id,
	bank: [{
		grade: 1,
		en: { prompt: "A tally chart shows |||| | for pets counted. How many pets is that?" },
		fr: { prompt: "Un tableau de pointage montre |||| | pour des animaux comptés. Combien d'animaux est-ce ?" },
		correctValue: 6
	}, {
		grade: 2,
		en: { prompt: "A bar chart bar for 'Apples' reaches the 9 mark on the scale. How many apples does the bar show?" },
		fr: { prompt: "La barre 'Pommes' d'un diagramme en barres atteint la marque 9 sur l'échelle. Combien de pommes la barre montre-t-elle ?" },
		correctValue: 9
	}]
}), rn = y({
	pluginId: "syllabus-g2-finds-missing-number-in-equation",
	competencyId: vt.id,
	bank: [{
		grade: 1,
		en: { prompt: "7 + ? = 12" },
		fr: { prompt: "7 + ? = 12" },
		correctValue: 5
	}, {
		grade: 2,
		en: { prompt: "? - 6 = 15" },
		fr: { prompt: "? - 6 = 15" },
		correctValue: 21
	}]
}), an = v({
	pluginId: "syllabus-g2-solves-one-step-word-problem",
	competencyId: yt.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "There are 8 birds on a fence. 3 fly away. Which number sentence finds how many are left?",
			options: [
				"8 - 3",
				"8 + 3",
				"8 x 3"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Il y a 8 oiseaux sur une clôture. 3 s'envolent. Quelle opération donne combien il en reste ?",
			options: [
				"8 - 3",
				"8 + 3",
				"8 x 3"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "6 tables each seat 4 people. Which number sentence finds the total number of seats?",
			options: [
				"6 x 4",
				"6 + 4",
				"6 - 4"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "6 tables accueillent chacune 4 personnes. Quelle opération donne le nombre total de places ?",
			options: [
				"6 x 4",
				"6 + 4",
				"6 - 4"
			],
			correctIndex: 0
		}
	}]
}), on = [
	Lt.plugin,
	Rt.plugin,
	zt.plugin,
	Bt.plugin,
	Vt.plugin,
	Ht.plugin,
	Ut.plugin,
	Wt.plugin,
	Gt.plugin,
	Kt.plugin,
	qt.plugin,
	Jt.plugin,
	Yt.plugin,
	Xt.plugin,
	Zt.plugin,
	Qt.plugin,
	$t.plugin,
	en.plugin,
	tn.plugin,
	nn.plugin,
	rn.plugin,
	an.plugin
];
function S(e) {
	return e;
}
var sn = [
	S({
		key: "syllabus-g2-counts-reads-writes-to-1000",
		label: "Counting to 1,000",
		icon: "🔢",
		pluginId: Lt.plugin.id,
		competency: Qe,
		competencies: [Qe],
		createSession: Lt.createSession,
		createMasterySignal: Lt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-orders-numbers-to-1000",
		label: "Ordering Numbers to 1,000",
		icon: "📈",
		pluginId: Rt.plugin.id,
		competency: $e,
		competencies: [$e],
		createSession: Rt.createSession,
		createMasterySignal: Rt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-partitions-three-digit-numbers",
		label: "Partitioning 3-Digit Numbers",
		icon: "🧩",
		pluginId: zt.plugin.id,
		competency: et,
		competencies: [et],
		createSession: zt.createSession,
		createMasterySignal: zt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-digit-value-in-three-digit-number",
		label: "Digit Value in a 3-Digit Number",
		icon: "🔠",
		pluginId: Bt.plugin.id,
		competency: tt,
		competencies: [tt],
		createSession: Bt.createSession,
		createMasterySignal: Bt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-number-bonds-within-20",
		label: "Number Bonds to 20",
		icon: "🔗",
		pluginId: Vt.plugin.id,
		competency: nt,
		competencies: [nt],
		createSession: Vt.createSession,
		createMasterySignal: Vt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-add-subtract-two-digit-with-regrouping",
		label: "Add & Subtract with Regrouping",
		icon: "🧮",
		pluginId: Ht.plugin.id,
		competency: rt,
		competencies: [rt],
		createSession: Ht.createSession,
		createMasterySignal: Ht.createMasterySignal
	}),
	S({
		key: "syllabus-g2-addition-commutative-subtraction-not",
		label: "Addition & Subtraction: Order Matters?",
		icon: "🔄",
		pluginId: Ut.plugin.id,
		competency: it,
		competencies: [it],
		createSession: Ut.createSession,
		createMasterySignal: Ut.createMasterySignal
	}),
	S({
		key: "syllabus-g2-times-tables-2-5-10",
		label: "2, 5 & 10 Times Tables",
		icon: "✖️",
		pluginId: Wt.plugin.id,
		competency: at,
		competencies: [at],
		createSession: Wt.createSession,
		createMasterySignal: Wt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-division-sharing-grouping-remainders",
		label: "Division: Sharing & Remainders",
		icon: "➗",
		pluginId: Gt.plugin.id,
		competency: ot,
		competencies: [ot],
		createSession: Gt.createSession,
		createMasterySignal: Gt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-add-subtract-one-digit-to-two-digit",
		label: "Mental Add & Subtract to 2-Digit",
		icon: "🧠",
		pluginId: Kt.plugin.id,
		competency: st,
		competencies: [st],
		createSession: Kt.createSession,
		createMasterySignal: Kt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-doubles-halves-to-50",
		label: "Doubles & Halves to 50",
		icon: "🪞",
		pluginId: qt.plugin.id,
		competency: ct,
		competencies: [ct],
		createSession: qt.createSession,
		createMasterySignal: qt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-thirds-quarters-fifths",
		label: "Thirds, Quarters & Fifths",
		icon: "🍰",
		pluginId: Jt.plugin.id,
		competency: lt,
		competencies: [lt],
		createSession: Jt.createSession,
		createMasterySignal: Jt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-mass-and-capacity",
		label: "Measuring Mass & Capacity",
		icon: "⚖️",
		pluginId: Yt.plugin.id,
		competency: ut,
		competencies: [ut],
		createSession: Yt.createSession,
		createMasterySignal: Yt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-metric-units-relationships",
		label: "Metric Units & Relationships",
		icon: "📏",
		pluginId: Xt.plugin.id,
		competency: dt,
		competencies: [dt],
		createSession: Xt.createSession,
		createMasterySignal: Xt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-time-five-minutes-quarter-hour",
		label: "Telling Time: 5 Minutes & Quarter Hour",
		icon: "🕐",
		pluginId: Zt.plugin.id,
		competency: ft,
		competencies: [ft],
		createSession: Zt.createSession,
		createMasterySignal: Zt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-days-weeks-months-counts",
		label: "Days, Weeks & Months",
		icon: "📅",
		pluginId: Qt.plugin.id,
		competency: pt,
		competencies: [pt],
		createSession: Qt.createSession,
		createMasterySignal: Qt.createMasterySignal
	}),
	S({
		key: "syllabus-g2-counts-shape-properties",
		label: "Counting Shape Properties",
		icon: "🔺",
		pluginId: $t.plugin.id,
		competency: mt,
		competencies: [mt],
		createSession: $t.createSession,
		createMasterySignal: $t.createMasterySignal
	}),
	S({
		key: "syllabus-g2-recognises-line-of-symmetry",
		label: "Lines of Symmetry",
		icon: "🦋",
		pluginId: en.plugin.id,
		competency: ht,
		competencies: [ht],
		createSession: en.createSession,
		createMasterySignal: en.createMasterySignal
	}),
	S({
		key: "syllabus-g2-describes-grid-position",
		label: "Grid Positions",
		icon: "🗺️",
		pluginId: tn.plugin.id,
		competency: gt,
		competencies: [gt],
		createSession: tn.createSession,
		createMasterySignal: tn.createMasterySignal
	}),
	S({
		key: "syllabus-g2-tally-chart-bar-chart",
		label: "Tally Charts & Bar Charts",
		icon: "📊",
		pluginId: nn.plugin.id,
		competency: _t,
		competencies: [_t],
		createSession: nn.createSession,
		createMasterySignal: nn.createMasterySignal
	}),
	S({
		key: "syllabus-g2-finds-missing-number-in-equation",
		label: "Finding the Missing Number",
		icon: "❓",
		pluginId: rn.plugin.id,
		competency: vt,
		competencies: [vt],
		createSession: rn.createSession,
		createMasterySignal: rn.createMasterySignal
	}),
	S({
		key: "syllabus-g2-solves-one-step-word-problem",
		label: "One-Step Word Problems",
		icon: "📝",
		pluginId: an.plugin.id,
		competency: yt,
		competencies: [yt],
		createSession: an.createSession,
		createMasterySignal: an.createMasterySignal
	})
], cn = {
	id: "math.number-sense.reads-writes-orders-to-10000",
	nameKey: "competency.math.number-sense.reads-writes-orders-to-10000.name",
	descriptionKey: "competency.math.number-sense.reads-writes-orders-to-10000.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.0",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.reads-writes-orders-to-10000"
	}]
}, ln = {
	id: "math.addition.add-subtract-three-digit-columns",
	nameKey: "competency.math.addition.add-subtract-three-digit-columns.name",
	descriptionKey: "competency.math.addition.add-subtract-three-digit-columns.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.2",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.addition.add-subtract-three-digit-columns"
	}]
}, un = {
	id: "math.mathematical-reasoning.checks-subtraction-with-inverse-addition",
	nameKey: "competency.math.mathematical-reasoning.checks-subtraction-with-inverse-addition.name",
	descriptionKey: "competency.math.mathematical-reasoning.checks-subtraction-with-inverse-addition.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.3",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.checks-subtraction-with-inverse-addition"
	}]
}, dn = {
	id: "math.multiplication.times-tables-3-4-8",
	nameKey: "competency.math.multiplication.times-tables-3-4-8.name",
	descriptionKey: "competency.math.multiplication.times-tables-3-4-8.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.4",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.multiplication.times-tables-3-4-8"
	}]
}, fn = {
	id: "math.multiplication.multiplies-two-digit-by-one-digit-written",
	nameKey: "competency.math.multiplication.multiplies-two-digit-by-one-digit-written.name",
	descriptionKey: "competency.math.multiplication.multiplies-two-digit-by-one-digit-written.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.5",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.multiplication.multiplies-two-digit-by-one-digit-written"
	}]
}, pn = {
	id: "math.mathematical-reasoning.multiplication-commutative-division-not",
	nameKey: "competency.math.mathematical-reasoning.multiplication-commutative-division-not.name",
	descriptionKey: "competency.math.mathematical-reasoning.multiplication-commutative-division-not.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.6",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.multiplication-commutative-division-not"
	}]
}, mn = {
	id: "math.mental-mathematics.add-subtract-two-two-digit-mentally",
	nameKey: "competency.math.mental-mathematics.add-subtract-two-two-digit-mentally.name",
	descriptionKey: "competency.math.mental-mathematics.add-subtract-two-two-digit-mentally.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.7",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mental-mathematics.add-subtract-two-two-digit-mentally"
	}]
}, hn = {
	id: "math.mental-mathematics.bridges-through-10-and-100",
	nameKey: "competency.math.mental-mathematics.bridges-through-10-and-100.name",
	descriptionKey: "competency.math.mental-mathematics.bridges-through-10-and-100.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.8",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mental-mathematics.bridges-through-10-and-100"
	}]
}, gn = {
	id: "math.fractions.fraction-as-number-on-number-line",
	nameKey: "competency.math.fractions.fraction-as-number-on-number-line.name",
	descriptionKey: "competency.math.fractions.fraction-as-number-on-number-line.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.9",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.fraction-as-number-on-number-line"
	}]
}, _n = {
	id: "math.fractions.finds-equivalent-fractions-simplifies",
	nameKey: "competency.math.fractions.finds-equivalent-fractions-simplifies.name",
	descriptionKey: "competency.math.fractions.finds-equivalent-fractions-simplifies.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.10",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.finds-equivalent-fractions-simplifies"
	}]
}, vn = {
	id: "math.fractions.add-subtract-fractions-same-denominator",
	nameKey: "competency.math.fractions.add-subtract-fractions-same-denominator.name",
	descriptionKey: "competency.math.fractions.add-subtract-fractions-same-denominator.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.11",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.add-subtract-fractions-same-denominator"
	}]
}, yn = {
	id: "math.number-sense.reads-decimal-in-price-and-measurement",
	nameKey: "competency.math.number-sense.reads-decimal-in-price-and-measurement.name",
	descriptionKey: "competency.math.number-sense.reads-decimal-in-price-and-measurement.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.12",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.reads-decimal-in-price-and-measurement"
	}]
}, bn = {
	id: "math.measurement.converts-between-adjacent-metric-units",
	nameKey: "competency.math.measurement.converts-between-adjacent-metric-units.name",
	descriptionKey: "competency.math.measurement.converts-between-adjacent-metric-units.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.13",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.converts-between-adjacent-metric-units"
	}]
}, xn = {
	id: "math.measurement.measures-perimeter-rectangle-compound",
	nameKey: "competency.math.measurement.measures-perimeter-rectangle-compound.name",
	descriptionKey: "competency.math.measurement.measures-perimeter-rectangle-compound.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.14",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.measures-perimeter-rectangle-compound"
	}]
}, Sn = {
	id: "math.time.tells-time-to-minute-converts-12-24",
	nameKey: "competency.math.time.tells-time-to-minute-converts-12-24.name",
	descriptionKey: "competency.math.time.tells-time-to-minute-converts-12-24.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.15",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.tells-time-to-minute-converts-12-24"
	}]
}, Cn = {
	id: "math.time.calculates-duration-within-hour",
	nameKey: "competency.math.time.calculates-duration-within-hour.name",
	descriptionKey: "competency.math.time.calculates-duration-within-hour.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.16",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.calculates-duration-within-hour"
	}]
}, wn = {
	id: "math.geometry.classifies-triangles",
	nameKey: "competency.math.geometry.classifies-triangles.name",
	descriptionKey: "competency.math.geometry.classifies-triangles.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.17",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.classifies-triangles"
	}]
}, Tn = {
	id: "math.geometry.classifies-quadrilaterals",
	nameKey: "competency.math.geometry.classifies-quadrilaterals.name",
	descriptionKey: "competency.math.geometry.classifies-quadrilaterals.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.18",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.classifies-quadrilaterals"
	}]
}, En = {
	id: "math.geometry.identifies-right-angles",
	nameKey: "competency.math.geometry.identifies-right-angles.name",
	descriptionKey: "competency.math.geometry.identifies-right-angles.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.19",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.identifies-right-angles"
	}]
}, Dn = {
	id: "math.geometry.uses-compass-directions-quarter-half-turns",
	nameKey: "competency.math.geometry.uses-compass-directions-quarter-half-turns.name",
	descriptionKey: "competency.math.geometry.uses-compass-directions-quarter-half-turns.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.20",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.uses-compass-directions-quarter-half-turns"
	}]
}, On = {
	id: "math.data-graphs.reads-bar-chart-pictogram-scale",
	nameKey: "competency.math.data-graphs.reads-bar-chart-pictogram-scale.name",
	descriptionKey: "competency.math.data-graphs.reads-bar-chart-pictogram-scale.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.21",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.reads-bar-chart-pictogram-scale"
	}]
}, kn = {
	id: "math.data-graphs.answers-comparison-questions-from-table",
	nameKey: "competency.math.data-graphs.answers-comparison-questions-from-table.name",
	descriptionKey: "competency.math.data-graphs.answers-comparison-questions-from-table.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.22",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.answers-comparison-questions-from-table"
	}]
}, An = {
	id: "math.mathematical-reasoning.continues-number-sequence-states-rule",
	nameKey: "competency.math.mathematical-reasoning.continues-number-sequence-states-rule.name",
	descriptionKey: "competency.math.mathematical-reasoning.continues-number-sequence-states-rule.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.23",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.continues-number-sequence-states-rule"
	}]
}, jn = {
	id: "math.problem-solving.solves-two-step-word-problem",
	nameKey: "competency.math.problem-solving.solves-two-step-word-problem.name",
	descriptionKey: "competency.math.problem-solving.solves-two-step-word-problem.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.24",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.solves-two-step-word-problem"
	}]
}, Mn = {
	id: "math.problem-solving.draws-bar-model-to-represent-problem",
	nameKey: "competency.math.problem-solving.draws-bar-model-to-represent-problem.name",
	descriptionKey: "competency.math.problem-solving.draws-bar-model-to-represent-problem.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G3.25",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.draws-bar-model-to-represent-problem"
	}]
}, Nn = [
	cn,
	ln,
	un,
	dn,
	fn,
	pn,
	mn,
	hn,
	gn,
	_n,
	vn,
	yn,
	bn,
	xn,
	Sn,
	Cn,
	wn,
	Tn,
	En,
	Dn,
	On,
	kn,
	An,
	jn,
	Mn
];
//#endregion
//#region packages/template-matching/src/rng.ts
function Pn(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Fn(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
function In(e, t) {
	let n = t.slice();
	for (let t = n.length - 1; t > 0; t--) {
		let r = Fn(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n;
}
//#endregion
//#region packages/template-matching/src/factory.ts
function Ln(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Rn(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function zn(e, t) {
	let n = t === "left" ? "l" : "r";
	return e.map((e, r) => ({
		id: `${n}${r}`,
		label: e[t]
	}));
}
function Bn(e, t) {
	let n = zn(e, "left"), r = zn(e, "right"), i = In(t, r);
	return n.map((e, t) => ({
		left: e,
		rightOptions: i,
		correctRightId: r[t].id
	}));
}
function Vn(e, t, n) {
	if (!Ln(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Rn(e.bank, t), i = Pn(n), a = r[Fn(i, 0, r.length - 1)], o = Math.floor(i() * 4294967295), s = Pn(o), c = Pn(o);
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { pairs: Bn(a.en.pairs, s) },
		fr: { pairs: Bn(a.fr.pairs, c) }
	};
}
function Hn(e, t) {
	return e.en.pairs.every((e) => t[e.left.id] === e.correctRightId);
}
function Un(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return Vn(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: Hn(e, t) };
		},
		toPresentation(e) {
			let t = e.en.pairs[0];
			return {
				presentation: {
					kind: "choice",
					prompt: t.left.label,
					options: t.rightOptions
				},
				correctAnswer: t.correctRightId
			};
		}
	};
	function n(t, n) {
		let r = Pn(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(Vn(e, t, n));
		}
		return {
			grade: t,
			questions: i
		};
	}
	function r(n, r, i, a, o, s) {
		return {
			competencyId: e.competencyId,
			grade: n.grade,
			correct: r,
			timeMs: i,
			timestamp: a,
			questionId: n.id,
			correctAnswer: t.toPresentation(n).correctAnswer,
			submittedAnswer: o,
			...s && { endReason: s }
		};
	}
	return {
		plugin: t,
		createSession: n,
		createMasterySignal: r
	};
}
//#endregion
//#region packages/syllabus-content-g3/src/content.ts
var Wn = y({
	pluginId: "syllabus-g3-reads-writes-orders-to-10000",
	competencyId: cn.id,
	bank: [{
		grade: 1,
		en: { prompt: "Write the number: three thousand, two hundred and fifteen" },
		fr: { prompt: "Écris le nombre : trois mille deux cent quinze" },
		correctValue: 3215
	}, {
		grade: 2,
		en: { prompt: "Write the number: nine thousand and six" },
		fr: { prompt: "Écris le nombre : neuf mille six" },
		correctValue: 9006
	}]
}), Gn = y({
	pluginId: "syllabus-g3-add-subtract-three-digit-columns",
	competencyId: ln.id,
	bank: [{
		grade: 1,
		en: { prompt: "245 + 387 = ?" },
		fr: { prompt: "245 + 387 = ?" },
		correctValue: 632
	}, {
		grade: 2,
		en: { prompt: "603 - 258 = ?" },
		fr: { prompt: "603 - 258 = ?" },
		correctValue: 345
	}]
}), Kn = x({
	pluginId: "syllabus-g3-checks-subtraction-with-inverse-addition",
	competencyId: un.id,
	bank: [{
		grade: 1,
		en: {
			statement: "To check that 82 - 35 = 47, you can add 47 + 35 and see if it makes 82.",
			isTrue: !0
		},
		fr: {
			statement: "Pour vérifier que 82 - 35 = 47, on peut calculer 47 + 35 et voir si ça fait 82.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "To check that 91 - 46 = 45, adding 45 + 46 should make 91.",
			isTrue: !0
		},
		fr: {
			statement: "Pour vérifier que 91 - 46 = 45, additionner 45 + 46 devrait faire 91.",
			isTrue: !0
		}
	}]
}), qn = y({
	pluginId: "syllabus-g3-times-tables-3-4-8",
	competencyId: dn.id,
	bank: [{
		grade: 1,
		en: { prompt: "3 x 7 = ?" },
		fr: { prompt: "3 x 7 = ?" },
		correctValue: 21
	}, {
		grade: 2,
		en: { prompt: "8 x 6 = ?" },
		fr: { prompt: "8 x 6 = ?" },
		correctValue: 48
	}]
}), Jn = y({
	pluginId: "syllabus-g3-multiplies-two-digit-by-one-digit-written",
	competencyId: fn.id,
	bank: [{
		grade: 1,
		en: { prompt: "23 x 4 = ?" },
		fr: { prompt: "23 x 4 = ?" },
		correctValue: 92
	}, {
		grade: 2,
		en: { prompt: "37 x 6 = ?" },
		fr: { prompt: "37 x 6 = ?" },
		correctValue: 222
	}]
}), Yn = x({
	pluginId: "syllabus-g3-multiplication-commutative-division-not",
	competencyId: pn.id,
	bank: [{
		grade: 1,
		en: {
			statement: "6 x 4 gives the same answer as 4 x 6.",
			isTrue: !0
		},
		fr: {
			statement: "6 x 4 donne le même résultat que 4 x 6.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "12 ÷ 3 gives the same answer as 3 ÷ 12.",
			isTrue: !1
		},
		fr: {
			statement: "12 ÷ 3 donne le même résultat que 3 ÷ 12.",
			isTrue: !1
		}
	}]
}), Xn = y({
	pluginId: "syllabus-g3-add-subtract-two-two-digit-mentally",
	competencyId: mn.id,
	bank: [{
		grade: 1,
		en: { prompt: "34 + 28 = ?" },
		fr: { prompt: "34 + 28 = ?" },
		correctValue: 62
	}, {
		grade: 2,
		en: { prompt: "71 - 39 = ?" },
		fr: { prompt: "71 - 39 = ?" },
		correctValue: 32
	}]
}), Zn = y({
	pluginId: "syllabus-g3-bridges-through-10-and-100",
	competencyId: hn.id,
	bank: [{
		grade: 1,
		en: { prompt: "8 + 5 = ? (bridge through 10: 8 + 2 + 3)" },
		fr: { prompt: "8 + 5 = ? (passer par 10 : 8 + 2 + 3)" },
		correctValue: 13
	}, {
		grade: 2,
		en: { prompt: "96 + 7 = ? (bridge through 100: 96 + 4 + 3)" },
		fr: { prompt: "96 + 7 = ? (passer par 100 : 96 + 4 + 3)" },
		correctValue: 103
	}]
}), Qn = v({
	pluginId: "syllabus-g3-fraction-as-number-on-number-line",
	competencyId: gn.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A number line runs from 0 to 1. Which mark shows 1/2?",
			options: [
				"The mark exactly halfway between 0 and 1",
				"The mark at 0",
				"The mark at 1"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Une droite numérique va de 0 à 1. Quelle marque montre 1/2 ?",
			options: [
				"La marque exactement à mi-chemin entre 0 et 1",
				"La marque à 0",
				"La marque à 1"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "On a number line from 0 to 2, where does 3/2 sit?",
			options: [
				"Halfway between 1 and 2",
				"At 0",
				"Halfway between 0 and 1"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Sur une droite numérique de 0 à 2, où se trouve 3/2 ?",
			options: [
				"À mi-chemin entre 1 et 2",
				"À 0",
				"À mi-chemin entre 0 et 1"
			],
			correctIndex: 0
		}
	}]
}), $n = _({
	pluginId: "syllabus-g3-finds-equivalent-fractions-simplifies",
	competencyId: _n.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "2/4 simplified to its lowest terms is ___.",
			answer: "1/2"
		},
		fr: {
			promptWithBlank: "2/4 simplifié à sa forme la plus simple est ___.",
			answer: "1/2"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "6/8 simplified to its lowest terms is ___.",
			answer: "3/4"
		},
		fr: {
			promptWithBlank: "6/8 simplifié à sa forme la plus simple est ___.",
			answer: "3/4"
		}
	}]
}), er = _({
	pluginId: "syllabus-g3-add-subtract-fractions-same-denominator",
	competencyId: vn.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "1/5 + 2/5 = ___.",
			answer: "3/5"
		},
		fr: {
			promptWithBlank: "1/5 + 2/5 = ___.",
			answer: "3/5"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "7/8 - 3/8 = ___.",
			answer: "4/8"
		},
		fr: {
			promptWithBlank: "7/8 - 3/8 = ___.",
			answer: "4/8"
		}
	}]
}), tr = y({
	pluginId: "syllabus-g3-reads-decimal-in-price-and-measurement",
	competencyId: yn.id,
	bank: [{
		grade: 1,
		en: { prompt: "A price tag reads $3.50. How many cents is that in total?" },
		fr: { prompt: "Une étiquette indique 3,50 $. Combien de centimes cela fait-il au total ?" },
		correctValue: 350
	}, {
		grade: 2,
		en: { prompt: "A ribbon measures 2.75 m. How many centimetres is that?" },
		fr: { prompt: "Un ruban mesure 2,75 m. Combien de centimètres cela fait-il ?" },
		correctValue: 275
	}]
}), nr = y({
	pluginId: "syllabus-g3-converts-between-adjacent-metric-units",
	competencyId: bn.id,
	bank: [{
		grade: 1,
		en: { prompt: "Convert 250 cm to metres. How many metres is that?" },
		fr: { prompt: "Convertis 250 cm en mètres. Combien de mètres cela fait-il ?" },
		correctValue: 2.5
	}, {
		grade: 2,
		en: { prompt: "Convert 1.4 kg to grams. How many grams is that?" },
		fr: { prompt: "Convertis 1,4 kg en grammes. Combien de grammes cela fait-il ?" },
		correctValue: 1400
	}]
}), rr = y({
	pluginId: "syllabus-g3-measures-perimeter-rectangle-compound",
	competencyId: xn.id,
	bank: [{
		grade: 1,
		en: { prompt: "A rectangle is 8 cm long and 3 cm wide. What is its perimeter, in cm?" },
		fr: { prompt: "Un rectangle mesure 8 cm de long et 3 cm de large. Quel est son périmètre, en cm ?" },
		correctValue: 22
	}, {
		grade: 2,
		en: { prompt: "An L-shape is made from a 6 cm x 4 cm rectangle with a 2 cm x 2 cm corner cut out. Its perimeter is 24 cm. What is the perimeter, in cm?" },
		fr: { prompt: "Une forme en L est formée d'un rectangle 6 cm x 4 cm avec un coin de 2 cm x 2 cm retiré. Son périmètre est 24 cm. Quel est le périmètre, en cm ?" },
		correctValue: 24
	}]
}), ir = v({
	pluginId: "syllabus-g3-tells-time-to-minute-converts-12-24",
	competencyId: Sn.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "An analogue clock shows 4:37. What is this written digitally?",
			options: [
				"4:37",
				"3:47",
				"7:34"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Une horloge analogique affiche 4h37. Comment cela s'écrit-il en chiffres ?",
			options: [
				"4:37",
				"3:47",
				"7:34"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "15:20 on a 24-hour clock is which time on a 12-hour clock?",
			options: [
				"3:20 pm",
				"3:20 am",
				"5:20 pm"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "15h20 sur une horloge de 24 heures correspond à quelle heure sur 12 heures ?",
			options: [
				"15h20 (3h20 de l'après-midi)",
				"3h20 du matin",
				"17h20"
			],
			correctIndex: 0
		}
	}]
}), ar = y({
	pluginId: "syllabus-g3-calculates-duration-within-hour",
	competencyId: Cn.id,
	bank: [{
		grade: 1,
		en: { prompt: "A film starts at 2:10 and ends at 2:45. How many minutes long is it?" },
		fr: { prompt: "Un film commence à 14h10 et se termine à 14h45. Combien de minutes dure-t-il ?" },
		correctValue: 35
	}, {
		grade: 2,
		en: { prompt: "A lesson runs from 9:05 to 9:50. How many minutes long is it?" },
		fr: { prompt: "Un cours dure de 9h05 à 9h50. Combien de minutes dure-t-il ?" },
		correctValue: 45
	}]
}), or = Un({
	pluginId: "syllabus-g3-classifies-triangles",
	competencyId: wn.id,
	bank: [{
		grade: 1,
		en: { pairs: [
			{
				left: "Equilateral",
				right: "All three sides are the same length."
			},
			{
				left: "Isosceles",
				right: "It has exactly two sides the same length."
			},
			{
				left: "Scalene",
				right: "All three sides are different lengths."
			},
			{
				left: "Right-angled",
				right: "It has one 90° (right) angle."
			}
		] },
		fr: { pairs: [
			{
				left: "Équilatéral",
				right: "Les trois côtés ont la même longueur."
			},
			{
				left: "Isocèle",
				right: "Il a exactement deux côtés de même longueur."
			},
			{
				left: "Scalène",
				right: "Les trois côtés ont des longueurs différentes."
			},
			{
				left: "Rectangle",
				right: "Il a un angle de 90° (angle droit)."
			}
		] }
	}, {
		grade: 2,
		en: { pairs: [
			{
				left: "Equilateral",
				right: "All three sides are equal, and all three angles measure 60°."
			},
			{
				left: "Isosceles",
				right: "Two sides are equal, and the two angles opposite those sides are also equal."
			},
			{
				left: "Scalene",
				right: "No two sides are equal, and no two angles are equal either."
			},
			{
				left: "Right-angled",
				right: "One angle measures exactly 90°, and the other two angles add up to 90°."
			}
		] },
		fr: { pairs: [
			{
				left: "Équilatéral",
				right: "Les trois côtés sont égaux, et les trois angles mesurent 60°."
			},
			{
				left: "Isocèle",
				right: "Deux côtés sont égaux, et les deux angles opposés à ces côtés sont égaux aussi."
			},
			{
				left: "Scalène",
				right: "Aucun côté n'est égal à un autre, et aucun angle non plus."
			},
			{
				left: "Rectangle",
				right: "Un angle mesure exactement 90°, et les deux autres angles totalisent 90°."
			}
		] }
	}]
}), sr = x({
	pluginId: "syllabus-g3-classifies-quadrilaterals",
	competencyId: Tn.id,
	bank: [{
		grade: 1,
		en: {
			statement: "A square is also a rectangle, because it has four right angles.",
			isTrue: !0
		},
		fr: {
			statement: "Un carré est aussi un rectangle, car il a quatre angles droits.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "A rhombus always has four right angles.",
			isTrue: !1
		},
		fr: {
			statement: "Un losange a toujours quatre angles droits.",
			isTrue: !1
		}
	}]
}), cr = v({
	pluginId: "syllabus-g3-identifies-right-angles",
	competencyId: En.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Which of these is a right angle?",
			options: [
				"An angle of exactly 90°",
				"An angle of 45°",
				"An angle of 150°"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Lequel de ces angles est un angle droit ?",
			options: [
				"Un angle de exactement 90°",
				"Un angle de 45°",
				"Un angle de 150°"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "An angle measures 120°. Is it greater or smaller than a right angle?",
			options: [
				"Greater than a right angle",
				"Smaller than a right angle",
				"Exactly a right angle"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un angle mesure 120°. Est-il plus grand ou plus petit qu'un angle droit ?",
			options: [
				"Plus grand qu'un angle droit",
				"Plus petit qu'un angle droit",
				"Exactement un angle droit"
			],
			correctIndex: 0
		}
	}]
}), lr = v({
	pluginId: "syllabus-g3-uses-compass-directions-quarter-half-turns",
	competencyId: Dn.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Facing North, you make a quarter turn clockwise. Which direction do you now face?",
			options: [
				"East",
				"West",
				"South"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Face au Nord, tu fais un quart de tour dans le sens des aiguilles d'une montre. Quelle direction regardes-tu maintenant ?",
			options: [
				"Est",
				"Ouest",
				"Sud"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Facing East, you make a half turn. Which direction do you now face?",
			options: [
				"West",
				"North",
				"South"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Face à l'Est, tu fais un demi-tour. Quelle direction regardes-tu maintenant ?",
			options: [
				"Ouest",
				"Nord",
				"Sud"
			],
			correctIndex: 0
		}
	}]
}), ur = y({
	pluginId: "syllabus-g3-reads-bar-chart-pictogram-scale",
	competencyId: On.id,
	bank: [{
		grade: 1,
		en: { prompt: "A bar for 'Oranges' reaches the 12 mark on a bar chart scale. How many oranges does the bar show?" },
		fr: { prompt: "La barre 'Oranges' d'un diagramme en barres atteint la marque 12. Combien d'oranges la barre montre-t-elle ?" },
		correctValue: 12
	}, {
		grade: 2,
		en: { prompt: "A pictogram uses one symbol for 5 pets. A row shows 3 whole symbols. How many pets is that?" },
		fr: { prompt: "Un pictogramme utilise un symbole pour 5 animaux. Une ligne montre 3 symboles entiers. Combien d'animaux cela fait-il ?" },
		correctValue: 15
	}]
}), dr = v({
	pluginId: "syllabus-g3-answers-comparison-questions-from-table",
	competencyId: kn.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A table shows: Apples 8, Pears 5, Bananas 11. Which fruit has the most?",
			options: [
				"Bananas",
				"Apples",
				"Pears"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un tableau montre : Pommes 8, Poires 5, Bananes 11. Quel fruit est le plus nombreux ?",
			options: [
				"Bananes",
				"Pommes",
				"Poires"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A table shows: Monday 14, Tuesday 9, Wednesday 20. How many more on Wednesday than Tuesday?",
			options: [
				"11",
				"6",
				"14"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un tableau montre : Lundi 14, Mardi 9, Mercredi 20. Combien de plus mercredi que mardi ?",
			options: [
				"11",
				"6",
				"14"
			],
			correctIndex: 0
		}
	}]
}), fr = _({
	pluginId: "syllabus-g3-continues-number-sequence-states-rule",
	competencyId: An.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "3, 6, 9, 12, ___",
			answer: "15"
		},
		fr: {
			promptWithBlank: "3, 6, 9, 12, ___",
			answer: "15"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "50, 43, 36, 29, ___",
			answer: "22"
		},
		fr: {
			promptWithBlank: "50, 43, 36, 29, ___",
			answer: "22"
		}
	}]
}), pr = y({
	pluginId: "syllabus-g3-solves-two-step-word-problem",
	competencyId: jn.id,
	bank: [{
		grade: 1,
		en: { prompt: "A shop has 40 apples. It sells 15, then receives a delivery of 8 more. How many apples now?" },
		fr: { prompt: "Un magasin a 40 pommes. Il en vend 15, puis reçoit une livraison de 8 de plus. Combien de pommes maintenant ?" },
		correctValue: 33
	}, {
		grade: 2,
		en: { prompt: "Tickets cost $4 each. Sam buys 5 tickets and pays with a $50 note. How much change does Sam get?" },
		fr: { prompt: "Les billets coûtent 4 $ chacun. Sam en achète 5 et paie avec un billet de 50 $. Combien de monnaie Sam reçoit-il ?" },
		correctValue: 30
	}]
}), mr = v({
	pluginId: "syllabus-g3-draws-bar-model-to-represent-problem",
	competencyId: Mn.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A bar model shows a whole bar of 24 split into two parts, one part is 9. Which number sentence finds the other part?",
			options: [
				"24 - 9",
				"24 + 9",
				"24 x 9"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un modèle en barre montre un tout de 24 divisé en deux parties, une partie vaut 9. Quelle opération donne l'autre partie ?",
			options: [
				"24 - 9",
				"24 + 9",
				"24 x 9"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A bar model shows 3 equal bars totalling 27. Which number sentence finds the value of one bar?",
			options: [
				"27 ÷ 3",
				"27 x 3",
				"27 - 3"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un modèle en barre montre 3 barres égales totalisant 27. Quelle opération donne la valeur d'une barre ?",
			options: [
				"27 ÷ 3",
				"27 x 3",
				"27 - 3"
			],
			correctIndex: 0
		}
	}]
}), hr = [
	Wn.plugin,
	Gn.plugin,
	Kn.plugin,
	qn.plugin,
	Jn.plugin,
	Yn.plugin,
	Xn.plugin,
	Zn.plugin,
	Qn.plugin,
	$n.plugin,
	er.plugin,
	tr.plugin,
	nr.plugin,
	rr.plugin,
	ir.plugin,
	ar.plugin,
	or.plugin,
	sr.plugin,
	cr.plugin,
	lr.plugin,
	ur.plugin,
	dr.plugin,
	fr.plugin,
	pr.plugin,
	mr.plugin
];
function C(e) {
	return e;
}
var gr = [
	C({
		key: "syllabus-g3-reads-writes-orders-to-10000",
		label: "Numbers to 10,000",
		icon: "🔢",
		pluginId: Wn.plugin.id,
		competency: cn,
		competencies: [cn],
		createSession: Wn.createSession,
		createMasterySignal: Wn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-add-subtract-three-digit-columns",
		label: "Column Addition & Subtraction",
		icon: "🧮",
		pluginId: Gn.plugin.id,
		competency: ln,
		competencies: [ln],
		createSession: Gn.createSession,
		createMasterySignal: Gn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-checks-subtraction-with-inverse-addition",
		label: "Checking Subtraction with Addition",
		icon: "✅",
		pluginId: Kn.plugin.id,
		competency: un,
		competencies: [un],
		createSession: Kn.createSession,
		createMasterySignal: Kn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-times-tables-3-4-8",
		label: "3, 4 & 8 Times Tables",
		icon: "✖️",
		pluginId: qn.plugin.id,
		competency: dn,
		competencies: [dn],
		createSession: qn.createSession,
		createMasterySignal: qn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-multiplies-two-digit-by-one-digit-written",
		label: "Written Multiplication",
		icon: "📝",
		pluginId: Jn.plugin.id,
		competency: fn,
		competencies: [fn],
		createSession: Jn.createSession,
		createMasterySignal: Jn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-multiplication-commutative-division-not",
		label: "Multiplication & Division: Order Matters?",
		icon: "🔄",
		pluginId: Yn.plugin.id,
		competency: pn,
		competencies: [pn],
		createSession: Yn.createSession,
		createMasterySignal: Yn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-add-subtract-two-two-digit-mentally",
		label: "Mental Add & Subtract: Two 2-Digit Numbers",
		icon: "🧠",
		pluginId: Xn.plugin.id,
		competency: mn,
		competencies: [mn],
		createSession: Xn.createSession,
		createMasterySignal: Xn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-bridges-through-10-and-100",
		label: "Bridging Through 10 & 100",
		icon: "🌉",
		pluginId: Zn.plugin.id,
		competency: hn,
		competencies: [hn],
		createSession: Zn.createSession,
		createMasterySignal: Zn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-fraction-as-number-on-number-line",
		label: "Fractions on a Number Line",
		icon: "📏",
		pluginId: Qn.plugin.id,
		competency: gn,
		competencies: [gn],
		createSession: Qn.createSession,
		createMasterySignal: Qn.createMasterySignal
	}),
	C({
		key: "syllabus-g3-finds-equivalent-fractions-simplifies",
		label: "Equivalent Fractions & Simplifying",
		icon: "🍰",
		pluginId: $n.plugin.id,
		competency: _n,
		competencies: [_n],
		createSession: $n.createSession,
		createMasterySignal: $n.createMasterySignal
	}),
	C({
		key: "syllabus-g3-add-subtract-fractions-same-denominator",
		label: "Add & Subtract Fractions",
		icon: "➗",
		pluginId: er.plugin.id,
		competency: vn,
		competencies: [vn],
		createSession: er.createSession,
		createMasterySignal: er.createMasterySignal
	}),
	C({
		key: "syllabus-g3-reads-decimal-in-price-and-measurement",
		label: "Reading Decimals in Prices & Measurements",
		icon: "💲",
		pluginId: tr.plugin.id,
		competency: yn,
		competencies: [yn],
		createSession: tr.createSession,
		createMasterySignal: tr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-converts-between-adjacent-metric-units",
		label: "Converting Metric Units",
		icon: "📐",
		pluginId: nr.plugin.id,
		competency: bn,
		competencies: [bn],
		createSession: nr.createSession,
		createMasterySignal: nr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-measures-perimeter-rectangle-compound",
		label: "Measuring Perimeter",
		icon: "🔲",
		pluginId: rr.plugin.id,
		competency: xn,
		competencies: [xn],
		createSession: rr.createSession,
		createMasterySignal: rr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-tells-time-to-minute-converts-12-24",
		label: "Telling Time to the Minute",
		icon: "🕐",
		pluginId: ir.plugin.id,
		competency: Sn,
		competencies: [Sn],
		createSession: ir.createSession,
		createMasterySignal: ir.createMasterySignal
	}),
	C({
		key: "syllabus-g3-calculates-duration-within-hour",
		label: "Calculating Duration",
		icon: "⏱️",
		pluginId: ar.plugin.id,
		competency: Cn,
		competencies: [Cn],
		createSession: ar.createSession,
		createMasterySignal: ar.createMasterySignal
	}),
	C({
		key: "syllabus-g3-classifies-triangles",
		label: "Classifying Triangles",
		icon: "🔺",
		pluginId: or.plugin.id,
		competency: wn,
		competencies: [wn],
		createSession: or.createSession,
		createMasterySignal: or.createMasterySignal
	}),
	C({
		key: "syllabus-g3-classifies-quadrilaterals",
		label: "Classifying Quadrilaterals",
		icon: "🔷",
		pluginId: sr.plugin.id,
		competency: Tn,
		competencies: [Tn],
		createSession: sr.createSession,
		createMasterySignal: sr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-identifies-right-angles",
		label: "Identifying Right Angles",
		icon: "📐",
		pluginId: cr.plugin.id,
		competency: En,
		competencies: [En],
		createSession: cr.createSession,
		createMasterySignal: cr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-uses-compass-directions-quarter-half-turns",
		label: "Compass Directions & Turns",
		icon: "🧭",
		pluginId: lr.plugin.id,
		competency: Dn,
		competencies: [Dn],
		createSession: lr.createSession,
		createMasterySignal: lr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-reads-bar-chart-pictogram-scale",
		label: "Bar Charts & Pictograms",
		icon: "📊",
		pluginId: ur.plugin.id,
		competency: On,
		competencies: [On],
		createSession: ur.createSession,
		createMasterySignal: ur.createMasterySignal
	}),
	C({
		key: "syllabus-g3-answers-comparison-questions-from-table",
		label: "Comparing Data in Tables",
		icon: "📋",
		pluginId: dr.plugin.id,
		competency: kn,
		competencies: [kn],
		createSession: dr.createSession,
		createMasterySignal: dr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-continues-number-sequence-states-rule",
		label: "Number Sequences & Rules",
		icon: "🔁",
		pluginId: fr.plugin.id,
		competency: An,
		competencies: [An],
		createSession: fr.createSession,
		createMasterySignal: fr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-solves-two-step-word-problem",
		label: "Two-Step Word Problems",
		icon: "📝",
		pluginId: pr.plugin.id,
		competency: jn,
		competencies: [jn],
		createSession: pr.createSession,
		createMasterySignal: pr.createMasterySignal
	}),
	C({
		key: "syllabus-g3-draws-bar-model-to-represent-problem",
		label: "Bar Models for Word Problems",
		icon: "📊",
		pluginId: mr.plugin.id,
		competency: Mn,
		competencies: [Mn],
		createSession: mr.createSession,
		createMasterySignal: mr.createMasterySignal
	})
], _r = {
	id: "math.number-sense.reads-writes-orders-to-million",
	nameKey: "competency.math.number-sense.reads-writes-orders-to-million.name",
	descriptionKey: "competency.math.number-sense.reads-writes-orders-to-million.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.0",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.reads-writes-orders-to-million"
	}]
}, vr = {
	id: "math.place-value.extends-place-value-to-millions",
	nameKey: "competency.math.place-value.extends-place-value-to-millions.name",
	descriptionKey: "competency.math.place-value.extends-place-value-to-millions.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.2",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.place-value.extends-place-value-to-millions"
	}]
}, yr = {
	id: "math.subtraction.add-subtract-four-digit-across-zeros",
	nameKey: "competency.math.subtraction.add-subtract-four-digit-across-zeros.name",
	descriptionKey: "competency.math.subtraction.add-subtract-four-digit-across-zeros.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.4",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.subtraction.add-subtract-four-digit-across-zeros"
	}]
}, br = {
	id: "math.multiplication.knows-tables-to-12x12",
	nameKey: "competency.math.multiplication.knows-tables-to-12x12.name",
	descriptionKey: "competency.math.multiplication.knows-tables-to-12x12.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.5",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.multiplication.knows-tables-to-12x12"
	}]
}, xr = {
	id: "math.multiplication.multiplies-three-digit-by-one-digit",
	nameKey: "competency.math.multiplication.multiplies-three-digit-by-one-digit.name",
	descriptionKey: "competency.math.multiplication.multiplies-three-digit-by-one-digit.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.6",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.multiplication.multiplies-three-digit-by-one-digit"
	}]
}, Sr = {
	id: "math.division.divides-three-digit-by-one-digit-with-remainder",
	nameKey: "competency.math.division.divides-three-digit-by-one-digit-with-remainder.name",
	descriptionKey: "competency.math.division.divides-three-digit-by-one-digit-with-remainder.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.7",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.division.divides-three-digit-by-one-digit-with-remainder"
	}]
}, Cr = {
	id: "math.mental-mathematics.rounding-compensation-mentally",
	nameKey: "competency.math.mental-mathematics.rounding-compensation-mentally.name",
	descriptionKey: "competency.math.mental-mathematics.rounding-compensation-mentally.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.8",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mental-mathematics.rounding-compensation-mentally"
	}]
}, w = {
	id: "math.mental-mathematics.instant-table-fact-recall",
	nameKey: "competency.math.mental-mathematics.instant-table-fact-recall.name",
	descriptionKey: "competency.math.mental-mathematics.instant-table-fact-recall.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.9",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mental-mathematics.instant-table-fact-recall"
	}]
}, wr = {
	id: "math.fractions.compares-orders-fractions-different-denominators",
	nameKey: "competency.math.fractions.compares-orders-fractions-different-denominators.name",
	descriptionKey: "competency.math.fractions.compares-orders-fractions-different-denominators.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.10",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.compares-orders-fractions-different-denominators"
	}]
}, Tr = {
	id: "math.fractions.converts-improper-fractions-mixed-numbers",
	nameKey: "competency.math.fractions.converts-improper-fractions-mixed-numbers.name",
	descriptionKey: "competency.math.fractions.converts-improper-fractions-mixed-numbers.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.11",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.converts-improper-fractions-mixed-numbers"
	}]
}, Er = {
	id: "math.fractions.finds-fraction-of-quantity",
	nameKey: "competency.math.fractions.finds-fraction-of-quantity.name",
	descriptionKey: "competency.math.fractions.finds-fraction-of-quantity.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.12",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.finds-fraction-of-quantity"
	}]
}, Dr = {
	id: "math.decimals.tenths-hundredths-as-decimals-number-line",
	nameKey: "competency.math.decimals.tenths-hundredths-as-decimals-number-line.name",
	descriptionKey: "competency.math.decimals.tenths-hundredths-as-decimals-number-line.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.13",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.decimals.tenths-hundredths-as-decimals-number-line"
	}]
}, Or = {
	id: "math.decimals.add-subtract-decimals-two-places",
	nameKey: "competency.math.decimals.add-subtract-decimals-two-places.name",
	descriptionKey: "competency.math.decimals.add-subtract-decimals-two-places.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.14",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.decimals.add-subtract-decimals-two-places"
	}]
}, kr = {
	id: "math.percentages.understands-percentage-as-out-of-100",
	nameKey: "competency.math.percentages.understands-percentage-as-out-of-100.name",
	descriptionKey: "competency.math.percentages.understands-percentage-as-out-of-100.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.15",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.percentages.understands-percentage-as-out-of-100"
	}]
}, Ar = {
	id: "math.measurement.calculates-area-rectangle-compound",
	nameKey: "competency.math.measurement.calculates-area-rectangle-compound.name",
	descriptionKey: "competency.math.measurement.calculates-area-rectangle-compound.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.16",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.calculates-area-rectangle-compound"
	}]
}, jr = {
	id: "math.measurement.estimates-length-mass-volume",
	nameKey: "competency.math.measurement.estimates-length-mass-volume.name",
	descriptionKey: "competency.math.measurement.estimates-length-mass-volume.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.17",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.estimates-length-mass-volume"
	}]
}, Mr = {
	id: "math.measurement.reads-scale-with-unlabelled-divisions",
	nameKey: "competency.math.measurement.reads-scale-with-unlabelled-divisions.name",
	descriptionKey: "competency.math.measurement.reads-scale-with-unlabelled-divisions.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.18",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.reads-scale-with-unlabelled-divisions"
	}]
}, Nr = {
	id: "math.time.calculates-durations-crossing-hours-midnight",
	nameKey: "competency.math.time.calculates-durations-crossing-hours-midnight.name",
	descriptionKey: "competency.math.time.calculates-durations-crossing-hours-midnight.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.19",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.calculates-durations-crossing-hours-midnight"
	}]
}, Pr = {
	id: "math.time.uses-calendar-date-weeks-ahead",
	nameKey: "competency.math.time.uses-calendar-date-weeks-ahead.name",
	descriptionKey: "competency.math.time.uses-calendar-date-weeks-ahead.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.20",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.uses-calendar-date-weeks-ahead"
	}]
}, Fr = {
	id: "math.geometry.measures-draws-angle-with-protractor",
	nameKey: "competency.math.geometry.measures-draws-angle-with-protractor.name",
	descriptionKey: "competency.math.geometry.measures-draws-angle-with-protractor.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.21",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.measures-draws-angle-with-protractor"
	}]
}, Ir = {
	id: "math.geometry.angles-on-line-and-around-point",
	nameKey: "competency.math.geometry.angles-on-line-and-around-point.name",
	descriptionKey: "competency.math.geometry.angles-on-line-and-around-point.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.22",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.angles-on-line-and-around-point"
	}]
}, Lr = {
	id: "math.geometry.triangle-angles-sum-180",
	nameKey: "competency.math.geometry.triangle-angles-sum-180.name",
	descriptionKey: "competency.math.geometry.triangle-angles-sum-180.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.23",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.triangle-angles-sum-180"
	}]
}, Rr = {
	id: "math.geometry.plots-reads-coordinates-first-quadrant",
	nameKey: "competency.math.geometry.plots-reads-coordinates-first-quadrant.name",
	descriptionKey: "competency.math.geometry.plots-reads-coordinates-first-quadrant.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.24",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.plots-reads-coordinates-first-quadrant"
	}]
}, zr = {
	id: "math.geometry.translates-reflects-shape-on-grid",
	nameKey: "competency.math.geometry.translates-reflects-shape-on-grid.name",
	descriptionKey: "competency.math.geometry.translates-reflects-shape-on-grid.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.25",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.translates-reflects-shape-on-grid"
	}]
}, Br = {
	id: "math.data-graphs.draws-reads-line-graph-trend",
	nameKey: "competency.math.data-graphs.draws-reads-line-graph-trend.name",
	descriptionKey: "competency.math.data-graphs.draws-reads-line-graph-trend.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.26",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.draws-reads-line-graph-trend"
	}]
}, Vr = {
	id: "math.data-graphs.finds-mode-range-data-set",
	nameKey: "competency.math.data-graphs.finds-mode-range-data-set.name",
	descriptionKey: "competency.math.data-graphs.finds-mode-range-data-set.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.27",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.finds-mode-range-data-set"
	}]
}, Hr = {
	id: "math.mathematical-reasoning.uses-symbol-box-for-unknown",
	nameKey: "competency.math.mathematical-reasoning.uses-symbol-box-for-unknown.name",
	descriptionKey: "competency.math.mathematical-reasoning.uses-symbol-box-for-unknown.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.28",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.uses-symbol-box-for-unknown"
	}]
}, Ur = {
	id: "math.mathematical-reasoning.describes-relationship-between-columns",
	nameKey: "competency.math.mathematical-reasoning.describes-relationship-between-columns.name",
	descriptionKey: "competency.math.mathematical-reasoning.describes-relationship-between-columns.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.29",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.describes-relationship-between-columns"
	}]
}, Wr = {
	id: "math.problem-solving.solves-multi-step-mixed-operations-units",
	nameKey: "competency.math.problem-solving.solves-multi-step-mixed-operations-units.name",
	descriptionKey: "competency.math.problem-solving.solves-multi-step-mixed-operations-units.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.30",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.solves-multi-step-mixed-operations-units"
	}]
}, Gr = {
	id: "math.problem-solving.works-systematically-all-solutions",
	nameKey: "competency.math.problem-solving.works-systematically-all-solutions.name",
	descriptionKey: "competency.math.problem-solving.works-systematically-all-solutions.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.31",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.works-systematically-all-solutions"
	}]
}, Kr = {
	id: "math.problem-solving.explains-method-aloud",
	nameKey: "competency.math.problem-solving.explains-method-aloud.name",
	descriptionKey: "competency.math.problem-solving.explains-method-aloud.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G4.32",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.explains-method-aloud"
	}]
}, qr = [
	_r,
	vr,
	yr,
	br,
	xr,
	Sr,
	Cr,
	w,
	wr,
	Tr,
	Er,
	Dr,
	Or,
	kr,
	Ar,
	jr,
	Mr,
	Nr,
	Pr,
	Fr,
	Ir,
	Lr,
	Rr,
	zr,
	Br,
	Vr,
	Hr,
	Ur,
	Wr,
	Gr,
	Kr
], Jr = y({
	pluginId: "syllabus-g4-reads-writes-orders-to-million",
	competencyId: _r.id,
	bank: [{
		grade: 1,
		en: { prompt: "Write the number: four hundred twelve thousand, six hundred" },
		fr: { prompt: "Écris le nombre : quatre cent douze mille six cents" },
		correctValue: 412600
	}, {
		grade: 2,
		en: { prompt: "Write the number: two million, thirty thousand and five" },
		fr: { prompt: "Écris le nombre : deux millions trente mille cinq" },
		correctValue: 2030005
	}]
}), Yr = y({
	pluginId: "syllabus-g4-extends-place-value-to-millions",
	competencyId: vr.id,
	bank: [{
		grade: 1,
		en: { prompt: "In the number 3,482,109, what is the value of the digit 8?" },
		fr: { prompt: "Dans le nombre 3 482 109, quelle est la valeur du chiffre 8 ?" },
		correctValue: 8e4
	}, {
		grade: 2,
		en: { prompt: "In the number 6,057,341, what is the value of the digit 6?" },
		fr: { prompt: "Dans le nombre 6 057 341, quelle est la valeur du chiffre 6 ?" },
		correctValue: 6e6
	}]
}), Xr = y({
	pluginId: "syllabus-g4-add-subtract-four-digit-across-zeros",
	competencyId: yr.id,
	bank: [{
		grade: 1,
		en: { prompt: "4,002 - 1,586 = ?" },
		fr: { prompt: "4 002 - 1 586 = ?" },
		correctValue: 2416
	}, {
		grade: 2,
		en: { prompt: "5,000 - 2,347 = ?" },
		fr: { prompt: "5 000 - 2 347 = ?" },
		correctValue: 2653
	}]
}), Zr = y({
	pluginId: "syllabus-g4-knows-tables-to-12x12",
	competencyId: br.id,
	bank: [{
		grade: 1,
		en: { prompt: "9 x 11 = ?" },
		fr: { prompt: "9 x 11 = ?" },
		correctValue: 99
	}, {
		grade: 2,
		en: { prompt: "144 ÷ 12 = ?" },
		fr: { prompt: "144 ÷ 12 = ?" },
		correctValue: 12
	}]
}), Qr = y({
	pluginId: "syllabus-g4-multiplies-three-digit-by-one-digit",
	competencyId: xr.id,
	bank: [{
		grade: 1,
		en: { prompt: "213 x 4 = ?" },
		fr: { prompt: "213 x 4 = ?" },
		correctValue: 852
	}, {
		grade: 2,
		en: { prompt: "348 x 6 = ?" },
		fr: { prompt: "348 x 6 = ?" },
		correctValue: 2088
	}]
}), $r = _({
	pluginId: "syllabus-g4-divides-three-digit-by-one-digit-with-remainder",
	competencyId: Sr.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "317 shared equally among 5 people: each gets 63, with ___ left over.",
			answer: "2"
		},
		fr: {
			promptWithBlank: "317 partagé également entre 5 personnes : chacun reçoit 63, avec ___ en trop.",
			answer: "2"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "A minibus seats 8. To carry 250 people, you need ___ full minibuses plus one more partly full.",
			answer: "31"
		},
		fr: {
			promptWithBlank: "Un minibus a 8 places. Pour transporter 250 personnes, il faut ___ minibus pleins, plus un autre partiellement plein.",
			answer: "31"
		}
	}]
}), ei = y({
	pluginId: "syllabus-g4-rounding-compensation-mentally",
	competencyId: Cr.id,
	bank: [{
		grade: 1,
		en: { prompt: "356 + 99 = ? (think: +100 then -1)" },
		fr: { prompt: "356 + 99 = ? (pense : +100 puis -1)" },
		correctValue: 455
	}, {
		grade: 2,
		en: { prompt: "482 - 199 = ? (think: -200 then +1)" },
		fr: { prompt: "482 - 199 = ? (pense : -200 puis +1)" },
		correctValue: 283
	}]
}), ti = y({
	pluginId: "syllabus-g4-instant-table-fact-recall",
	competencyId: w.id,
	bank: [{
		grade: 1,
		en: { prompt: "7 x 8 = ?" },
		fr: { prompt: "7 x 8 = ?" },
		correctValue: 56
	}, {
		grade: 2,
		en: { prompt: "108 ÷ 9 = ?" },
		fr: { prompt: "108 ÷ 9 = ?" },
		correctValue: 12
	}]
}), ni = x({
	pluginId: "syllabus-g4-instant-table-fact-judgment",
	competencyId: w.id,
	bank: [{
		grade: 1,
		en: {
			statement: "6 x 9 = 54",
			isTrue: !0
		},
		fr: {
			statement: "6 x 9 = 54",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "96 ÷ 8 = 11",
			isTrue: !1
		},
		fr: {
			statement: "96 ÷ 8 = 11",
			isTrue: !1
		}
	}]
}), ri = v({
	pluginId: "syllabus-g4-compares-orders-fractions-different-denominators",
	competencyId: wr.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Which fraction is larger: 2/3 or 3/5?",
			options: [
				"2/3",
				"3/5",
				"They are equal"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quelle fraction est la plus grande : 2/3 ou 3/5 ?",
			options: [
				"2/3",
				"3/5",
				"Elles sont égales"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Put in order from smallest to largest: 1/2, 1/4, 3/4 — which is smallest?",
			options: [
				"1/4",
				"1/2",
				"3/4"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Range du plus petit au plus grand : 1/2, 1/4, 3/4 — lequel est le plus petit ?",
			options: [
				"1/4",
				"1/2",
				"3/4"
			],
			correctIndex: 0
		}
	}]
}), ii = _({
	pluginId: "syllabus-g4-converts-improper-fractions-mixed-numbers",
	competencyId: Tr.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "7/2 as a mixed number is ___.",
			answer: "3 1/2"
		},
		fr: {
			promptWithBlank: "7/2 en nombre fractionnaire est ___.",
			answer: "3 1/2"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "2 3/4 as an improper fraction is ___.",
			answer: "11/4"
		},
		fr: {
			promptWithBlank: "2 3/4 en fraction impropre est ___.",
			answer: "11/4"
		}
	}]
}), ai = y({
	pluginId: "syllabus-g4-finds-fraction-of-quantity",
	competencyId: Er.id,
	bank: [{
		grade: 1,
		en: { prompt: "What is 3/5 of 40?" },
		fr: { prompt: "Combien font 3/5 de 40 ?" },
		correctValue: 24
	}, {
		grade: 2,
		en: { prompt: "What is 5/6 of 72?" },
		fr: { prompt: "Combien font 5/6 de 72 ?" },
		correctValue: 60
	}]
}), oi = v({
	pluginId: "syllabus-g4-tenths-hundredths-as-decimals-number-line",
	competencyId: Dr.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Which decimal is the same as 7/10?",
			options: [
				"0.7",
				"0.07",
				"7.0"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quel décimal correspond à 7/10 ?",
			options: [
				"0,7",
				"0,07",
				"7,0"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "On a number line from 0 to 1, where does 0.35 sit?",
			options: [
				"Between 0.3 and 0.4, closer to 0.4",
				"Between 0.5 and 0.6",
				"Between 0 and 0.1"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Sur une droite numérique de 0 à 1, où se trouve 0,35 ?",
			options: [
				"Entre 0,3 et 0,4, plus proche de 0,4",
				"Entre 0,5 et 0,6",
				"Entre 0 et 0,1"
			],
			correctIndex: 0
		}
	}]
}), si = y({
	pluginId: "syllabus-g4-add-subtract-decimals-two-places",
	competencyId: Or.id,
	bank: [{
		grade: 1,
		en: { prompt: "12.45 + 3.60 = ?" },
		fr: { prompt: "12,45 + 3,60 = ?" },
		correctValue: 16.05
	}, {
		grade: 2,
		en: { prompt: "20.30 - 8.75 = ?" },
		fr: { prompt: "20,30 - 8,75 = ?" },
		correctValue: 11.55
	}]
}), ci = v({
	pluginId: "syllabus-g4-understands-percentage-as-out-of-100",
	competencyId: kr.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "What does 45% mean?",
			options: [
				"45 out of every 100",
				"45 out of every 10",
				"45 out of every 1000"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Que signifie 45 % ?",
			options: [
				"45 sur 100",
				"45 sur 10",
				"45 sur 1000"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A grid of 100 squares has 60 shaded. What percentage is shaded?",
			options: [
				"60%",
				"6%",
				"16%"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Une grille de 100 cases a 60 cases colorées. Quel pourcentage est colorié ?",
			options: [
				"60 %",
				"6 %",
				"16 %"
			],
			correctIndex: 0
		}
	}]
}), li = y({
	pluginId: "syllabus-g4-calculates-area-rectangle-compound",
	competencyId: Ar.id,
	bank: [{
		grade: 1,
		en: { prompt: "A rectangle is 9 cm long and 4 cm wide. What is its area, in cm²?" },
		fr: { prompt: "Un rectangle mesure 9 cm de long et 4 cm de large. Quelle est son aire, en cm² ?" },
		correctValue: 36
	}, {
		grade: 2,
		en: { prompt: "An L-shape is made of a 6 cm x 5 cm rectangle with a 2 cm x 3 cm rectangle removed from one corner. What is its area, in cm²?" },
		fr: { prompt: "Une forme en L est formée d'un rectangle 6 cm x 5 cm auquel on retire un rectangle 2 cm x 3 cm dans un coin. Quelle est son aire, en cm² ?" },
		correctValue: 24
	}]
}), ui = v({
	pluginId: "syllabus-g4-estimates-length-mass-volume",
	competencyId: jr.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Which is the best estimate for the length of a classroom door?",
			options: [
				"2 metres",
				"20 centimetres",
				"20 metres"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quelle est la meilleure estimation pour la longueur d'une porte de classe ?",
			options: [
				"2 mètres",
				"20 centimètres",
				"20 mètres"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Which is the best estimate for the mass of a bag of apples?",
			options: [
				"1 kilogram",
				"1 gram",
				"100 kilograms"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quelle est la meilleure estimation pour la masse d'un sac de pommes ?",
			options: [
				"1 kilogramme",
				"1 gramme",
				"100 kilogrammes"
			],
			correctIndex: 0
		}
	}]
}), di = y({
	pluginId: "syllabus-g4-reads-scale-with-unlabelled-divisions",
	competencyId: Mr.id,
	bank: [{
		grade: 1,
		en: { prompt: "A scale has marks at 0, 10 and 20 with two unlabelled marks evenly spaced between them. What number does the first unlabelled mark show?" },
		fr: { prompt: "Une échelle a des marques à 0, 10 et 20 avec deux marques non étiquetées également espacées entre elles. Quel nombre montre la première marque non étiquetée ?" },
		correctValue: 10
	}, {
		grade: 2,
		en: { prompt: "A measuring jug has marks at 0 ml, 100 ml and 200 ml with four unlabelled marks evenly spaced between 100 and 200. What does the second unlabelled mark after 100 show?" },
		fr: { prompt: "Un verre doseur a des marques à 0 ml, 100 ml et 200 ml avec quatre marques non étiquetées également espacées entre 100 et 200. Que montre la deuxième marque non étiquetée après 100 ?" },
		correctValue: 140
	}]
}), fi = y({
	pluginId: "syllabus-g4-calculates-durations-crossing-hours-midnight",
	competencyId: Nr.id,
	bank: [{
		grade: 1,
		en: { prompt: "A train leaves at 23:40 and arrives at 00:15. How many minutes is the journey?" },
		fr: { prompt: "Un train part à 23h40 et arrive à 00h15. Combien de minutes dure le trajet ?" },
		correctValue: 35
	}, {
		grade: 2,
		en: { prompt: "A bus leaves at 21:50 and the timetable says the journey takes 55 minutes. What time does it arrive?" },
		fr: { prompt: "Un bus part à 21h50 et l'horaire indique que le trajet dure 55 minutes. À quelle heure arrive-t-il ? (Réponds en minutes après minuit, par exemple 22h45 = 1365)" },
		correctValue: 1365
	}]
}), pi = _({
	pluginId: "syllabus-g4-uses-calendar-date-weeks-ahead",
	competencyId: Pr.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "Today is March 3rd. Three weeks from today is March ___.",
			answer: "24"
		},
		fr: {
			promptWithBlank: "Aujourd'hui, c'est le 3 mars. Dans trois semaines, ce sera le ___ mars.",
			answer: "24"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "Today is April 18th. Five weeks from today is May ___.",
			answer: "23"
		},
		fr: {
			promptWithBlank: "Aujourd'hui, c'est le 18 avril. Dans cinq semaines, ce sera le ___ mai.",
			answer: "23"
		}
	}]
}), mi = y({
	pluginId: "syllabus-g4-measures-draws-angle-with-protractor",
	competencyId: Fr.id,
	bank: [{
		grade: 1,
		en: { prompt: "A protractor reading shows an angle starting at 0° and ending at 47°. What is the angle, in degrees?" },
		fr: { prompt: "Un rapporteur montre un angle commençant à 0° et se terminant à 47°. Quel est l'angle, en degrés ?" },
		correctValue: 47
	}, {
		grade: 2,
		en: { prompt: "You need to draw an angle of 132° with a protractor. What number do you mark on the scale?" },
		fr: { prompt: "Tu dois tracer un angle de 132° avec un rapporteur. Quel nombre marques-tu sur l'échelle ?" },
		correctValue: 132
	}]
}), hi = x({
	pluginId: "syllabus-g4-angles-on-line-and-around-point",
	competencyId: Ir.id,
	bank: [{
		grade: 1,
		en: {
			statement: "Angles on a straight line always add up to 180°.",
			isTrue: !0
		},
		fr: {
			statement: "Les angles sur une droite totalisent toujours 180°.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "If three angles around a point measure 100°, 150° and 100°, they add up to 360°.",
			isTrue: !1
		},
		fr: {
			statement: "Si trois angles autour d'un point mesurent 100°, 150° et 100°, ils totalisent 360°.",
			isTrue: !1
		}
	}]
}), gi = y({
	pluginId: "syllabus-g4-triangle-angles-sum-180",
	competencyId: Lr.id,
	bank: [{
		grade: 1,
		en: { prompt: "A triangle has angles of 60° and 70°. What is the third angle, in degrees?" },
		fr: { prompt: "Un triangle a des angles de 60° et 70°. Quel est le troisième angle, en degrés ?" },
		correctValue: 50
	}, {
		grade: 2,
		en: { prompt: "A triangle has angles of 35° and 95°. What is the third angle, in degrees?" },
		fr: { prompt: "Un triangle a des angles de 35° et 95°. Quel est le troisième angle, en degrés ?" },
		correctValue: 50
	}]
}), _i = v({
	pluginId: "syllabus-g4-plots-reads-coordinates-first-quadrant",
	competencyId: Rr.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A point is 3 across and 5 up from the origin. What are its coordinates?",
			options: [
				"(3, 5)",
				"(5, 3)",
				"(3, 3)"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un point est à 3 à droite et 5 en haut de l'origine. Quelles sont ses coordonnées ?",
			options: [
				"(3, 5)",
				"(5, 3)",
				"(3, 3)"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "The point (6, 2) is plotted. How far up from the x-axis is it?",
			options: [
				"2 units",
				"6 units",
				"8 units"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Le point (6, 2) est tracé. À quelle distance de l'axe des x se trouve-t-il ?",
			options: [
				"2 unités",
				"6 unités",
				"8 unités"
			],
			correctIndex: 0
		}
	}]
}), vi = v({
	pluginId: "syllabus-g4-translates-reflects-shape-on-grid",
	competencyId: zr.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A shape at (2, 2) is translated 3 right and 1 up. What are its new coordinates?",
			options: [
				"(5, 3)",
				"(1, 5)",
				"(2, 5)"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Une forme en (2, 2) est translatée de 3 à droite et 1 en haut. Quelles sont ses nouvelles coordonnées ?",
			options: [
				"(5, 3)",
				"(1, 5)",
				"(2, 5)"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A shape is reflected in a vertical mirror line. What stays the same?",
			options: [
				"Its distance from the mirror line",
				"Its left-right orientation",
				"Its position"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Une forme est réfléchie par rapport à une ligne miroir verticale. Qu'est-ce qui reste identique ?",
			options: [
				"Sa distance par rapport à la ligne miroir",
				"Son orientation gauche-droite",
				"Sa position"
			],
			correctIndex: 0
		}
	}]
}), yi = v({
	pluginId: "syllabus-g4-draws-reads-line-graph-trend",
	competencyId: Br.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A line graph of temperature rises steadily from 9am to 3pm. What trend does this show?",
			options: [
				"Temperature is increasing",
				"Temperature is decreasing",
				"Temperature is constant"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un graphique linéaire de température monte régulièrement de 9h à 15h. Quelle tendance cela montre-t-il ?",
			options: [
				"La température augmente",
				"La température diminue",
				"La température est constante"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A line graph shows plant height rising fast then levelling off. What does the flat part mean?",
			options: [
				"Growth has slowed almost to a stop",
				"The plant shrank",
				"Growth sped up"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un graphique linéaire montre la hauteur d'une plante augmentant vite puis se stabilisant. Que signifie la partie plate ?",
			options: [
				"La croissance a presque cessé",
				"La plante a rétréci",
				"La croissance a accéléré"
			],
			correctIndex: 0
		}
	}]
}), bi = y({
	pluginId: "syllabus-g4-finds-mode-range-data-set",
	competencyId: Vr.id,
	bank: [{
		grade: 1,
		en: { prompt: "Data set: 4, 7, 4, 9, 4, 2. What is the mode?" },
		fr: { prompt: "Ensemble de données : 4, 7, 4, 9, 4, 2. Quel est le mode ?" },
		correctValue: 4
	}, {
		grade: 2,
		en: { prompt: "Data set: 12, 5, 19, 8, 15. What is the range?" },
		fr: { prompt: "Ensemble de données : 12, 5, 19, 8, 15. Quelle est l'étendue ?" },
		correctValue: 14
	}]
}), xi = y({
	pluginId: "syllabus-g4-uses-symbol-box-for-unknown",
	competencyId: Hr.id,
	bank: [{
		grade: 1,
		en: { prompt: "☐ + 17 = 42. What number goes in the box?" },
		fr: { prompt: "☐ + 17 = 42. Quel nombre va dans la case ?" },
		correctValue: 25
	}, {
		grade: 2,
		en: { prompt: "6 x ☐ = 54. What number goes in the box?" },
		fr: { prompt: "6 x ☐ = 54. Quel nombre va dans la case ?" },
		correctValue: 9
	}]
}), Si = v({
	pluginId: "syllabus-g4-describes-relationship-between-columns",
	competencyId: Ur.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A table shows: Input 1, 2, 3, 4 -> Output 3, 6, 9, 12. What is the rule?",
			options: [
				"Multiply by 3",
				"Add 3",
				"Multiply by 2"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un tableau montre : Entrée 1, 2, 3, 4 -> Sortie 3, 6, 9, 12. Quelle est la règle ?",
			options: [
				"Multiplier par 3",
				"Ajouter 3",
				"Multiplier par 2"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A table shows: Input 2, 4, 6, 8 -> Output 5, 7, 9, 11. What is the rule?",
			options: [
				"Add 3",
				"Multiply by 2",
				"Add 5"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un tableau montre : Entrée 2, 4, 6, 8 -> Sortie 5, 7, 9, 11. Quelle est la règle ?",
			options: [
				"Ajouter 3",
				"Multiplier par 2",
				"Ajouter 5"
			],
			correctIndex: 0
		}
	}]
}), Ci = y({
	pluginId: "syllabus-g4-solves-multi-step-mixed-operations-units",
	competencyId: Wr.id,
	bank: [{
		grade: 1,
		en: { prompt: "A rope is 5 metres long. It is cut into pieces of 40 cm each. How many whole pieces can be cut?" },
		fr: { prompt: "Une corde mesure 5 mètres de long. Elle est coupée en morceaux de 40 cm chacun. Combien de morceaux entiers peut-on couper ?" },
		correctValue: 12
	}, {
		grade: 2,
		en: { prompt: "A recipe needs 250 g of flour per batch. How many whole batches can be made from a 2 kg bag?" },
		fr: { prompt: "Une recette nécessite 250 g de farine par lot. Combien de lots entiers peut-on faire avec un sac de 2 kg ?" },
		correctValue: 8
	}]
}), wi = x({
	pluginId: "syllabus-g4-works-systematically-all-solutions",
	competencyId: Gr.id,
	bank: [{
		grade: 1,
		en: {
			statement: "Listing pairs of numbers that add to 10 in order (0+10, 1+9, 2+8, ...) helps you find every possible pair without missing one.",
			isTrue: !0
		},
		fr: {
			statement: "Lister les paires de nombres qui font 10 dans l'ordre (0+10, 1+9, 2+8, ...) aide à trouver toutes les paires possibles sans en manquer une.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "If a problem asks for all the ways to make 15p with 5p and 10p coins, finding just one way is enough — there is never more than one solution.",
			isTrue: !1
		},
		fr: {
			statement: "Si un problème demande toutes les façons de faire 15p avec des pièces de 5p et 10p, trouver une seule façon suffit — il n'y a jamais plus d'une solution.",
			isTrue: !1
		}
	}]
}), Ti = x({
	pluginId: "syllabus-g4-explains-method-aloud",
	competencyId: Kr.id,
	bank: [{
		grade: 1,
		en: {
			statement: "A good explanation of your method says the steps in order, so someone else could follow along.",
			isTrue: !0
		},
		fr: {
			statement: "Une bonne explication de sa méthode donne les étapes dans l'ordre, afin qu'une autre personne puisse suivre.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "Saying just the final answer, with no steps, is enough to explain your method to someone else.",
			isTrue: !1
		},
		fr: {
			statement: "Dire seulement la réponse finale, sans étapes, suffit pour expliquer sa méthode à quelqu'un d'autre.",
			isTrue: !1
		}
	}]
}), Ei = [
	Jr.plugin,
	Yr.plugin,
	Xr.plugin,
	Zr.plugin,
	Qr.plugin,
	$r.plugin,
	ei.plugin,
	ti.plugin,
	ni.plugin,
	ri.plugin,
	ii.plugin,
	ai.plugin,
	oi.plugin,
	si.plugin,
	ci.plugin,
	li.plugin,
	ui.plugin,
	di.plugin,
	fi.plugin,
	pi.plugin,
	mi.plugin,
	hi.plugin,
	gi.plugin,
	_i.plugin,
	vi.plugin,
	yi.plugin,
	bi.plugin,
	xi.plugin,
	Si.plugin,
	Ci.plugin,
	wi.plugin,
	Ti.plugin
];
function T(e) {
	return e;
}
var Di = [
	T({
		key: "syllabus-g4-reads-writes-orders-to-million",
		label: "Numbers to a Million",
		icon: "🔢",
		pluginId: Jr.plugin.id,
		competency: _r,
		competencies: [_r],
		createSession: Jr.createSession,
		createMasterySignal: Jr.createMasterySignal
	}),
	T({
		key: "syllabus-g4-extends-place-value-to-millions",
		label: "Place Value to Millions",
		icon: "🧮",
		pluginId: Yr.plugin.id,
		competency: vr,
		competencies: [vr],
		createSession: Yr.createSession,
		createMasterySignal: Yr.createMasterySignal
	}),
	T({
		key: "syllabus-g4-add-subtract-four-digit-across-zeros",
		label: "Adding & Subtracting Across Zeros",
		icon: "➖",
		pluginId: Xr.plugin.id,
		competency: yr,
		competencies: [yr],
		createSession: Xr.createSession,
		createMasterySignal: Xr.createMasterySignal
	}),
	T({
		key: "syllabus-g4-knows-tables-to-12x12",
		label: "Times Tables to 12x12",
		icon: "✖️",
		pluginId: Zr.plugin.id,
		competency: br,
		competencies: [br],
		createSession: Zr.createSession,
		createMasterySignal: Zr.createMasterySignal
	}),
	T({
		key: "syllabus-g4-multiplies-three-digit-by-one-digit",
		label: "3-Digit by 1-Digit Multiplication",
		icon: "📝",
		pluginId: Qr.plugin.id,
		competency: xr,
		competencies: [xr],
		createSession: Qr.createSession,
		createMasterySignal: Qr.createMasterySignal
	}),
	T({
		key: "syllabus-g4-divides-three-digit-by-one-digit-with-remainder",
		label: "Division with Remainders",
		icon: "➗",
		pluginId: $r.plugin.id,
		competency: Sr,
		competencies: [Sr],
		createSession: $r.createSession,
		createMasterySignal: $r.createMasterySignal
	}),
	T({
		key: "syllabus-g4-rounding-compensation-mentally",
		label: "Mental Rounding & Compensation",
		icon: "🧠",
		pluginId: ei.plugin.id,
		competency: Cr,
		competencies: [Cr],
		createSession: ei.createSession,
		createMasterySignal: ei.createMasterySignal
	}),
	T({
		key: "syllabus-g4-instant-table-fact-recall",
		label: "Instant Table Facts",
		icon: "⚡",
		pluginId: ti.plugin.id,
		competency: w,
		competencies: [w],
		createSession: ti.createSession,
		createMasterySignal: ti.createMasterySignal
	}),
	T({
		key: "syllabus-g4-instant-table-fact-judgment",
		label: "True or False: Table Facts",
		icon: "❓",
		pluginId: ni.plugin.id,
		competency: w,
		competencies: [w],
		createSession: ni.createSession,
		createMasterySignal: ni.createMasterySignal
	}),
	T({
		key: "syllabus-g4-compares-orders-fractions-different-denominators",
		label: "Comparing Fractions",
		icon: "🍰",
		pluginId: ri.plugin.id,
		competency: wr,
		competencies: [wr],
		createSession: ri.createSession,
		createMasterySignal: ri.createMasterySignal
	}),
	T({
		key: "syllabus-g4-converts-improper-fractions-mixed-numbers",
		label: "Improper Fractions & Mixed Numbers",
		icon: "🔀",
		pluginId: ii.plugin.id,
		competency: Tr,
		competencies: [Tr],
		createSession: ii.createSession,
		createMasterySignal: ii.createMasterySignal
	}),
	T({
		key: "syllabus-g4-finds-fraction-of-quantity",
		label: "Fraction of a Quantity",
		icon: "🍕",
		pluginId: ai.plugin.id,
		competency: Er,
		competencies: [Er],
		createSession: ai.createSession,
		createMasterySignal: ai.createMasterySignal
	}),
	T({
		key: "syllabus-g4-tenths-hundredths-as-decimals-number-line",
		label: "Tenths & Hundredths as Decimals",
		icon: "🔟",
		pluginId: oi.plugin.id,
		competency: Dr,
		competencies: [Dr],
		createSession: oi.createSession,
		createMasterySignal: oi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-add-subtract-decimals-two-places",
		label: "Adding & Subtracting Decimals",
		icon: "💲",
		pluginId: si.plugin.id,
		competency: Or,
		competencies: [Or],
		createSession: si.createSession,
		createMasterySignal: si.createMasterySignal
	}),
	T({
		key: "syllabus-g4-understands-percentage-as-out-of-100",
		label: "Percentage as Out of 100",
		icon: "💯",
		pluginId: ci.plugin.id,
		competency: kr,
		competencies: [kr],
		createSession: ci.createSession,
		createMasterySignal: ci.createMasterySignal
	}),
	T({
		key: "syllabus-g4-calculates-area-rectangle-compound",
		label: "Area of Rectangles & Compound Shapes",
		icon: "🔲",
		pluginId: li.plugin.id,
		competency: Ar,
		competencies: [Ar],
		createSession: li.createSession,
		createMasterySignal: li.createMasterySignal
	}),
	T({
		key: "syllabus-g4-estimates-length-mass-volume",
		label: "Estimating Length, Mass & Volume",
		icon: "📏",
		pluginId: ui.plugin.id,
		competency: jr,
		competencies: [jr],
		createSession: ui.createSession,
		createMasterySignal: ui.createMasterySignal
	}),
	T({
		key: "syllabus-g4-reads-scale-with-unlabelled-divisions",
		label: "Reading Unlabelled Scales",
		icon: "📐",
		pluginId: di.plugin.id,
		competency: Mr,
		competencies: [Mr],
		createSession: di.createSession,
		createMasterySignal: di.createMasterySignal
	}),
	T({
		key: "syllabus-g4-calculates-durations-crossing-hours-midnight",
		label: "Durations Crossing Hours & Midnight",
		icon: "⏱️",
		pluginId: fi.plugin.id,
		competency: Nr,
		competencies: [Nr],
		createSession: fi.createSession,
		createMasterySignal: fi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-uses-calendar-date-weeks-ahead",
		label: "Calendar: Weeks Ahead",
		icon: "📅",
		pluginId: pi.plugin.id,
		competency: Pr,
		competencies: [Pr],
		createSession: pi.createSession,
		createMasterySignal: pi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-measures-draws-angle-with-protractor",
		label: "Measuring Angles with a Protractor",
		icon: "📐",
		pluginId: mi.plugin.id,
		competency: Fr,
		competencies: [Fr],
		createSession: mi.createSession,
		createMasterySignal: mi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-angles-on-line-and-around-point",
		label: "Angles on a Line & Around a Point",
		icon: "📏",
		pluginId: hi.plugin.id,
		competency: Ir,
		competencies: [Ir],
		createSession: hi.createSession,
		createMasterySignal: hi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-triangle-angles-sum-180",
		label: "Triangle Angle Sum",
		icon: "🔺",
		pluginId: gi.plugin.id,
		competency: Lr,
		competencies: [Lr],
		createSession: gi.createSession,
		createMasterySignal: gi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-plots-reads-coordinates-first-quadrant",
		label: "Coordinates in the First Quadrant",
		icon: "🧭",
		pluginId: _i.plugin.id,
		competency: Rr,
		competencies: [Rr],
		createSession: _i.createSession,
		createMasterySignal: _i.createMasterySignal
	}),
	T({
		key: "syllabus-g4-translates-reflects-shape-on-grid",
		label: "Translating & Reflecting Shapes",
		icon: "🔄",
		pluginId: vi.plugin.id,
		competency: zr,
		competencies: [zr],
		createSession: vi.createSession,
		createMasterySignal: vi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-draws-reads-line-graph-trend",
		label: "Line Graphs & Trends",
		icon: "📈",
		pluginId: yi.plugin.id,
		competency: Br,
		competencies: [Br],
		createSession: yi.createSession,
		createMasterySignal: yi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-finds-mode-range-data-set",
		label: "Mode & Range",
		icon: "📊",
		pluginId: bi.plugin.id,
		competency: Vr,
		competencies: [Vr],
		createSession: bi.createSession,
		createMasterySignal: bi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-uses-symbol-box-for-unknown",
		label: "Solving for an Unknown Box",
		icon: "❓",
		pluginId: xi.plugin.id,
		competency: Hr,
		competencies: [Hr],
		createSession: xi.createSession,
		createMasterySignal: xi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-describes-relationship-between-columns",
		label: "Table Rules",
		icon: "📋",
		pluginId: Si.plugin.id,
		competency: Ur,
		competencies: [Ur],
		createSession: Si.createSession,
		createMasterySignal: Si.createMasterySignal
	}),
	T({
		key: "syllabus-g4-solves-multi-step-mixed-operations-units",
		label: "Multi-Step Problems with Units",
		icon: "🧩",
		pluginId: Ci.plugin.id,
		competency: Wr,
		competencies: [Wr],
		createSession: Ci.createSession,
		createMasterySignal: Ci.createMasterySignal
	}),
	T({
		key: "syllabus-g4-works-systematically-all-solutions",
		label: "Finding All Solutions Systematically",
		icon: "🔍",
		pluginId: wi.plugin.id,
		competency: Gr,
		competencies: [Gr],
		createSession: wi.createSession,
		createMasterySignal: wi.createMasterySignal
	}),
	T({
		key: "syllabus-g4-explains-method-aloud",
		label: "Explaining Your Method",
		icon: "🗣️",
		pluginId: Ti.plugin.id,
		competency: Kr,
		competencies: [Kr],
		createSession: Ti.createSession,
		createMasterySignal: Ti.createMasterySignal
	})
], Oi = {
	id: "math.number-sense.finds-factors-common-multiples",
	nameKey: "competency.math.number-sense.finds-factors-common-multiples.name",
	descriptionKey: "competency.math.number-sense.finds-factors-common-multiples.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.1",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.finds-factors-common-multiples"
	}]
}, ki = {
	id: "math.place-value.extends-place-value-right-of-decimal",
	nameKey: "competency.math.place-value.extends-place-value-right-of-decimal.name",
	descriptionKey: "competency.math.place-value.extends-place-value-right-of-decimal.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.4",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.place-value.extends-place-value-right-of-decimal"
	}]
}, Ai = {
	id: "math.decimals.rounds-decimals-to-given-places",
	nameKey: "competency.math.decimals.rounds-decimals-to-given-places.name",
	descriptionKey: "competency.math.decimals.rounds-decimals-to-given-places.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.5",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.decimals.rounds-decimals-to-given-places"
	}]
}, ji = {
	id: "math.addition.adds-subtracts-whole-decimals-columns",
	nameKey: "competency.math.addition.adds-subtracts-whole-decimals-columns.name",
	descriptionKey: "competency.math.addition.adds-subtracts-whole-decimals-columns.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.7",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.addition.adds-subtracts-whole-decimals-columns"
	}]
}, Mi = {
	id: "math.multiplication.multiplies-four-digit-by-two-digit",
	nameKey: "competency.math.multiplication.multiplies-four-digit-by-two-digit.name",
	descriptionKey: "competency.math.multiplication.multiplies-four-digit-by-two-digit.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.8",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.multiplication.multiplies-four-digit-by-two-digit"
	}]
}, Ni = {
	id: "math.division.divides-by-two-digit-expresses-remainder",
	nameKey: "competency.math.division.divides-by-two-digit-expresses-remainder.name",
	descriptionKey: "competency.math.division.divides-by-two-digit-expresses-remainder.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.9",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.division.divides-by-two-digit-expresses-remainder"
	}]
}, Pi = {
	id: "math.number-sense.knows-divisibility-tests",
	nameKey: "competency.math.number-sense.knows-divisibility-tests.name",
	descriptionKey: "competency.math.number-sense.knows-divisibility-tests.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.10",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.knows-divisibility-tests"
	}]
}, Fi = {
	id: "math.mathematical-reasoning.applies-order-of-operations",
	nameKey: "competency.math.mathematical-reasoning.applies-order-of-operations.name",
	descriptionKey: "competency.math.mathematical-reasoning.applies-order-of-operations.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.11",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.applies-order-of-operations"
	}]
}, Ii = {
	id: "math.mental-mathematics.multiplies-two-digit-by-one-digit-mentally",
	nameKey: "competency.math.mental-mathematics.multiplies-two-digit-by-one-digit-mentally.name",
	descriptionKey: "competency.math.mental-mathematics.multiplies-two-digit-by-one-digit-mentally.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.12",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mental-mathematics.multiplies-two-digit-by-one-digit-mentally"
	}]
}, Li = {
	id: "math.percentages.finds-common-percentages-mentally",
	nameKey: "competency.math.percentages.finds-common-percentages-mentally.name",
	descriptionKey: "competency.math.percentages.finds-common-percentages-mentally.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.13",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.percentages.finds-common-percentages-mentally"
	}]
}, Ri = {
	id: "math.mathematical-reasoning.estimates-before-calculating",
	nameKey: "competency.math.mathematical-reasoning.estimates-before-calculating.name",
	descriptionKey: "competency.math.mathematical-reasoning.estimates-before-calculating.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.14",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.estimates-before-calculating"
	}]
}, zi = {
	id: "math.fractions.adds-subtracts-fractions-different-denominators",
	nameKey: "competency.math.fractions.adds-subtracts-fractions-different-denominators.name",
	descriptionKey: "competency.math.fractions.adds-subtracts-fractions-different-denominators.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.15",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.adds-subtracts-fractions-different-denominators"
	}]
}, Bi = {
	id: "math.fractions.multiplies-fraction-by-whole-or-fraction",
	nameKey: "competency.math.fractions.multiplies-fraction-by-whole-or-fraction.name",
	descriptionKey: "competency.math.fractions.multiplies-fraction-by-whole-or-fraction.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.16",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.fractions.multiplies-fraction-by-whole-or-fraction"
	}]
}, Vi = {
	id: "math.percentages.converts-fluently-fractions-decimals-percentages",
	nameKey: "competency.math.percentages.converts-fluently-fractions-decimals-percentages.name",
	descriptionKey: "competency.math.percentages.converts-fluently-fractions-decimals-percentages.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.17",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.percentages.converts-fluently-fractions-decimals-percentages"
	}]
}, Hi = {
	id: "math.decimals.multiplies-divides-decimals-by-whole-numbers",
	nameKey: "competency.math.decimals.multiplies-divides-decimals-by-whole-numbers.name",
	descriptionKey: "competency.math.decimals.multiplies-divides-decimals-by-whole-numbers.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.18",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.decimals.multiplies-divides-decimals-by-whole-numbers"
	}]
}, Ui = {
	id: "math.percentages.finds-any-percentage-of-quantity",
	nameKey: "competency.math.percentages.finds-any-percentage-of-quantity.name",
	descriptionKey: "competency.math.percentages.finds-any-percentage-of-quantity.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.19",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.percentages.finds-any-percentage-of-quantity"
	}]
}, Wi = {
	id: "math.percentages.calculates-percentage-increase-decrease",
	nameKey: "competency.math.percentages.calculates-percentage-increase-decrease.name",
	descriptionKey: "competency.math.percentages.calculates-percentage-increase-decrease.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.20",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.percentages.calculates-percentage-increase-decrease"
	}]
}, Gi = {
	id: "math.number-sense.understands-ratio-shares-quantity",
	nameKey: "competency.math.number-sense.understands-ratio-shares-quantity.name",
	descriptionKey: "competency.math.number-sense.understands-ratio-shares-quantity.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.21",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.understands-ratio-shares-quantity"
	}]
}, Ki = {
	id: "math.mathematical-reasoning.solves-simple-scaling-problems",
	nameKey: "competency.math.mathematical-reasoning.solves-simple-scaling-problems.name",
	descriptionKey: "competency.math.mathematical-reasoning.solves-simple-scaling-problems.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.22",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.solves-simple-scaling-problems"
	}]
}, qi = {
	id: "math.measurement.calculates-volume-cuboid",
	nameKey: "competency.math.measurement.calculates-volume-cuboid.name",
	descriptionKey: "competency.math.measurement.calculates-volume-cuboid.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.23",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.calculates-volume-cuboid"
	}]
}, Ji = {
	id: "math.measurement.converts-metric-units-two-steps",
	nameKey: "competency.math.measurement.converts-metric-units-two-steps.name",
	descriptionKey: "competency.math.measurement.converts-metric-units-two-steps.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.24",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.converts-metric-units-two-steps"
	}]
}, Yi = {
	id: "math.measurement.knows-imperial-metric-rough-equivalence",
	nameKey: "competency.math.measurement.knows-imperial-metric-rough-equivalence.name",
	descriptionKey: "competency.math.measurement.knows-imperial-metric-rough-equivalence.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.25",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.knows-imperial-metric-rough-equivalence"
	}]
}, Xi = {
	id: "math.measurement.has-reliable-body-ruler",
	nameKey: "competency.math.measurement.has-reliable-body-ruler.name",
	descriptionKey: "competency.math.measurement.has-reliable-body-ruler.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.26",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.has-reliable-body-ruler"
	}]
}, Zi = {
	id: "math.time.converts-seconds-minutes-hours-days-years",
	nameKey: "competency.math.time.converts-seconds-minutes-hours-days-years.name",
	descriptionKey: "competency.math.time.converts-seconds-minutes-hours-days-years.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.27",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.converts-seconds-minutes-hours-days-years"
	}]
}, Qi = {
	id: "math.time.handles-time-zone-differences",
	nameKey: "competency.math.time.handles-time-zone-differences.name",
	descriptionKey: "competency.math.time.handles-time-zone-differences.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.28",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.handles-time-zone-differences"
	}]
}, $i = {
	id: "math.geometry.draws-shape-accurately-from-specification",
	nameKey: "competency.math.geometry.draws-shape-accurately-from-specification.name",
	descriptionKey: "competency.math.geometry.draws-shape-accurately-from-specification.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.29",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.draws-shape-accurately-from-specification"
	}]
}, ea = {
	id: "math.geometry.names-parts-of-circle",
	nameKey: "competency.math.geometry.names-parts-of-circle.name",
	descriptionKey: "competency.math.geometry.names-parts-of-circle.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.30",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.names-parts-of-circle"
	}]
}, ta = {
	id: "math.geometry.identifies-net-of-cube-solids",
	nameKey: "competency.math.geometry.identifies-net-of-cube-solids.name",
	descriptionKey: "competency.math.geometry.identifies-net-of-cube-solids.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.31",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.identifies-net-of-cube-solids"
	}]
}, na = {
	id: "math.geometry.plots-coordinates-all-four-quadrants",
	nameKey: "competency.math.geometry.plots-coordinates-all-four-quadrants.name",
	descriptionKey: "competency.math.geometry.plots-coordinates-all-four-quadrants.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.32",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.plots-coordinates-all-four-quadrants"
	}]
}, ra = {
	id: "math.geometry.rotates-shape-about-point",
	nameKey: "competency.math.geometry.rotates-shape-about-point.name",
	descriptionKey: "competency.math.geometry.rotates-shape-about-point.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.33",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.rotates-shape-about-point"
	}]
}, ia = {
	id: "math.measurement.uses-scale-on-plan-or-map",
	nameKey: "competency.math.measurement.uses-scale-on-plan-or-map.name",
	descriptionKey: "competency.math.measurement.uses-scale-on-plan-or-map.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.34",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.uses-scale-on-plan-or-map"
	}]
}, aa = {
	id: "math.data-graphs.calculates-mean",
	nameKey: "competency.math.data-graphs.calculates-mean.name",
	descriptionKey: "competency.math.data-graphs.calculates-mean.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.35",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.calculates-mean"
	}]
}, oa = {
	id: "math.data-graphs.reads-pie-chart-fractions-percentages",
	nameKey: "competency.math.data-graphs.reads-pie-chart-fractions-percentages.name",
	descriptionKey: "competency.math.data-graphs.reads-pie-chart-fractions-percentages.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.36",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.reads-pie-chart-fractions-percentages"
	}]
}, sa = {
	id: "math.data-graphs.uses-language-of-chance",
	nameKey: "competency.math.data-graphs.uses-language-of-chance.name",
	descriptionKey: "competency.math.data-graphs.uses-language-of-chance.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.37",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.uses-language-of-chance"
	}]
}, ca = {
	id: "math.data-graphs.spots-misleading-graph",
	nameKey: "competency.math.data-graphs.spots-misleading-graph.name",
	descriptionKey: "competency.math.data-graphs.spots-misleading-graph.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.38",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.data-graphs.spots-misleading-graph"
	}]
}, la = {
	id: "math.mathematical-reasoning.uses-letter-for-unknown-substitutes",
	nameKey: "competency.math.mathematical-reasoning.uses-letter-for-unknown-substitutes.name",
	descriptionKey: "competency.math.mathematical-reasoning.uses-letter-for-unknown-substitutes.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.39",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.uses-letter-for-unknown-substitutes"
	}]
}, ua = {
	id: "math.mathematical-reasoning.solves-one-step-equation-checks",
	nameKey: "competency.math.mathematical-reasoning.solves-one-step-equation-checks.name",
	descriptionKey: "competency.math.mathematical-reasoning.solves-one-step-equation-checks.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.40",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.solves-one-step-equation-checks"
	}]
}, da = {
	id: "math.mathematical-reasoning.expresses-general-rule-for-sequence",
	nameKey: "competency.math.mathematical-reasoning.expresses-general-rule-for-sequence.name",
	descriptionKey: "competency.math.mathematical-reasoning.expresses-general-rule-for-sequence.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.41",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.expresses-general-rule-for-sequence"
	}]
}, fa = {
	id: "math.mathematical-reasoning.judges-whether-answer-reasonable",
	nameKey: "competency.math.mathematical-reasoning.judges-whether-answer-reasonable.name",
	descriptionKey: "competency.math.mathematical-reasoning.judges-whether-answer-reasonable.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.42",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.judges-whether-answer-reasonable"
	}]
}, pa = {
	id: "math.mathematical-reasoning.finds-own-mistake-in-wrong-answer",
	nameKey: "competency.math.mathematical-reasoning.finds-own-mistake-in-wrong-answer.name",
	descriptionKey: "competency.math.mathematical-reasoning.finds-own-mistake-in-wrong-answer.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.43",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.finds-own-mistake-in-wrong-answer"
	}]
}, ma = {
	id: "math.problem-solving.solves-problem-missing-surplus-info",
	nameKey: "competency.math.problem-solving.solves-problem-missing-surplus-info.name",
	descriptionKey: "competency.math.problem-solving.solves-problem-missing-surplus-info.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.44",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.solves-problem-missing-surplus-info"
	}]
}, ha = {
	id: "math.problem-solving.tackles-unfamiliar-problem",
	nameKey: "competency.math.problem-solving.tackles-unfamiliar-problem.name",
	descriptionKey: "competency.math.problem-solving.tackles-unfamiliar-problem.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.45",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.problem-solving.tackles-unfamiliar-problem"
	}]
}, ga = {
	id: "math.mathematical-reasoning.uses-calculator-correctly-checks-estimate",
	nameKey: "competency.math.mathematical-reasoning.uses-calculator-correctly-checks-estimate.name",
	descriptionKey: "competency.math.mathematical-reasoning.uses-calculator-correctly-checks-estimate.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 2,
	frameworkSkillId: "mathematics.G5.46",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.mathematical-reasoning.uses-calculator-correctly-checks-estimate"
	}]
}, _a = [
	Oi,
	ki,
	Ai,
	ji,
	Mi,
	Ni,
	Pi,
	Fi,
	Ii,
	Li,
	Ri,
	zi,
	Bi,
	Vi,
	Hi,
	Ui,
	Wi,
	Gi,
	Ki,
	qi,
	Ji,
	Yi,
	Xi,
	Zi,
	Qi,
	$i,
	ea,
	ta,
	na,
	ra,
	ia,
	aa,
	oa,
	sa,
	ca,
	la,
	ua,
	da,
	fa,
	pa,
	ma,
	ha,
	ga
], va = _({
	pluginId: "syllabus-g5-finds-factors-common-multiples",
	competencyId: Oi.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "List all the factors of 18: 1, 2, 3, 6, 9, ___.",
			answer: "18"
		},
		fr: {
			promptWithBlank: "Liste tous les diviseurs de 18 : 1, 2, 3, 6, 9, ___.",
			answer: "18"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "The smallest common multiple of 4 and 6 (other than 0) is ___.",
			answer: "12"
		},
		fr: {
			promptWithBlank: "Le plus petit multiple commun de 4 et 6 (autre que 0) est ___.",
			answer: "12"
		}
	}]
}), ya = v({
	pluginId: "syllabus-g5-extends-place-value-right-of-decimal",
	competencyId: ki.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "In the number 4.627, what digit is in the hundredths place?",
			options: [
				"2",
				"6",
				"7"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Dans le nombre 4,627, quel chiffre est à la position des centièmes ?",
			options: [
				"2",
				"6",
				"7"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "In the number 0.359, what digit is in the thousandths place?",
			options: [
				"9",
				"3",
				"5"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Dans le nombre 0,359, quel chiffre est à la position des millièmes ?",
			options: [
				"9",
				"3",
				"5"
			],
			correctIndex: 0
		}
	}]
}), ba = y({
	pluginId: "syllabus-g5-rounds-decimals-to-given-places",
	competencyId: Ai.id,
	bank: [{
		grade: 1,
		en: { prompt: "Round 3.482 to 2 decimal places." },
		fr: { prompt: "Arrondis 3,482 à 2 décimales." },
		correctValue: 3.48
	}, {
		grade: 2,
		en: { prompt: "Round 7.096 to 1 decimal place." },
		fr: { prompt: "Arrondis 7,096 à 1 décimale." },
		correctValue: 7.1
	}]
}), xa = y({
	pluginId: "syllabus-g5-adds-subtracts-whole-decimals-columns",
	competencyId: ji.id,
	bank: [{
		grade: 1,
		en: { prompt: "348.6 + 27.35 = ?" },
		fr: { prompt: "348,6 + 27,35 = ?" },
		correctValue: 375.95
	}, {
		grade: 2,
		en: { prompt: "902.4 - 356.78 = ?" },
		fr: { prompt: "902,4 - 356,78 = ?" },
		correctValue: 545.62
	}]
}), Sa = y({
	pluginId: "syllabus-g5-multiplies-four-digit-by-two-digit",
	competencyId: Mi.id,
	bank: [{
		grade: 1,
		en: { prompt: "2,314 x 12 = ?" },
		fr: { prompt: "2 314 x 12 = ?" },
		correctValue: 27768
	}, {
		grade: 2,
		en: { prompt: "3,608 x 24 = ?" },
		fr: { prompt: "3 608 x 24 = ?" },
		correctValue: 86592
	}]
}), Ca = _({
	pluginId: "syllabus-g5-divides-by-two-digit-expresses-remainder",
	competencyId: Ni.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "487 ÷ 15 = 32 remainder ___.",
			answer: "7"
		},
		fr: {
			promptWithBlank: "487 ÷ 15 = 32 reste ___.",
			answer: "7"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "156 shared equally among 12: each gets ___ exactly (no remainder).",
			answer: "13"
		},
		fr: {
			promptWithBlank: "156 partagé également entre 12 : chacun reçoit ___ exactement (sans reste).",
			answer: "13"
		}
	}]
}), wa = x({
	pluginId: "syllabus-g5-knows-divisibility-tests",
	competencyId: Pi.id,
	bank: [{
		grade: 1,
		en: {
			statement: "531 is divisible by 3, because 5 + 3 + 1 = 9, and 9 is divisible by 3.",
			isTrue: !0
		},
		fr: {
			statement: "531 est divisible par 3, car 5 + 3 + 1 = 9, et 9 est divisible par 3.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "The number 4,530 is divisible by both 9 and 10.",
			isTrue: !1
		},
		fr: {
			statement: "Le nombre 4 530 est divisible à la fois par 9 et par 10.",
			isTrue: !1
		}
	}]
}), Ta = y({
	pluginId: "syllabus-g5-applies-order-of-operations",
	competencyId: Fi.id,
	bank: [{
		grade: 1,
		en: { prompt: "(4 + 3) x 5 = ?" },
		fr: { prompt: "(4 + 3) x 5 = ?" },
		correctValue: 35
	}, {
		grade: 2,
		en: { prompt: "20 - (2 x 6) + 3 = ?" },
		fr: { prompt: "20 - (2 x 6) + 3 = ?" },
		correctValue: 11
	}]
}), Ea = y({
	pluginId: "syllabus-g5-multiplies-two-digit-by-one-digit-mentally",
	competencyId: Ii.id,
	bank: [{
		grade: 1,
		en: { prompt: "34 x 6 = ? (do it mentally)" },
		fr: { prompt: "34 x 6 = ? (calcule-le mentalement)" },
		correctValue: 204
	}, {
		grade: 2,
		en: { prompt: "58 x 7 = ? (do it mentally)" },
		fr: { prompt: "58 x 7 = ? (calcule-le mentalement)" },
		correctValue: 406
	}]
}), Da = y({
	pluginId: "syllabus-g5-finds-common-percentages-mentally",
	competencyId: Li.id,
	bank: [{
		grade: 1,
		en: { prompt: "What is 25% of 84? (do it mentally)" },
		fr: { prompt: "Combien font 25 % de 84 ? (calcule-le mentalement)" },
		correctValue: 21
	}, {
		grade: 2,
		en: { prompt: "What is 75% of 120? (do it mentally)" },
		fr: { prompt: "Combien font 75 % de 120 ? (calcule-le mentalement)" },
		correctValue: 90
	}]
}), Oa = x({
	pluginId: "syllabus-g5-estimates-before-calculating",
	competencyId: Ri.id,
	bank: [{
		grade: 1,
		en: {
			statement: "Before calculating 198 x 5 exactly, rounding to 200 x 5 = 1000 gives a sensible estimate.",
			isTrue: !0
		},
		fr: {
			statement: "Avant de calculer exactement 198 x 5, arrondir à 200 x 5 = 1000 donne une estimation raisonnable.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "If your estimate is 40 and your calculator shows 4000 for the same problem, your calculated answer is probably right and the estimate is wrong.",
			isTrue: !1
		},
		fr: {
			statement: "Si ton estimation est 40 et que la calculatrice affiche 4000 pour le même problème, ta réponse calculée est probablement correcte et l'estimation est fausse.",
			isTrue: !1
		}
	}]
}), ka = _({
	pluginId: "syllabus-g5-adds-subtracts-fractions-different-denominators",
	competencyId: zi.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "1/2 + 1/3 = ___.",
			answer: "5/6"
		},
		fr: {
			promptWithBlank: "1/2 + 1/3 = ___.",
			answer: "5/6"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "3/4 - 1/6 = ___.",
			answer: "7/12"
		},
		fr: {
			promptWithBlank: "3/4 - 1/6 = ___.",
			answer: "7/12"
		}
	}]
}), Aa = y({
	pluginId: "syllabus-g5-multiplies-fraction-by-whole-or-fraction",
	competencyId: Bi.id,
	bank: [{
		grade: 1,
		en: { prompt: "2/5 x 15 = ?" },
		fr: { prompt: "2/5 x 15 = ?" },
		correctValue: 6
	}, {
		grade: 2,
		en: { prompt: "1/2 x 1/4 = ? (answer as a decimal)" },
		fr: { prompt: "1/2 x 1/4 = ? (réponds en décimal)" },
		correctValue: .125
	}]
}), ja = v({
	pluginId: "syllabus-g5-converts-fluently-fractions-decimals-percentages",
	competencyId: Vi.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Which percentage is the same as 1/4?",
			options: [
				"25%",
				"40%",
				"14%"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quel pourcentage correspond à 1/4 ?",
			options: [
				"25 %",
				"40 %",
				"14 %"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Which decimal is the same as 3/5?",
			options: [
				"0.6",
				"0.35",
				"0.53"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Quel décimal correspond à 3/5 ?",
			options: [
				"0,6",
				"0,35",
				"0,53"
			],
			correctIndex: 0
		}
	}]
}), Ma = y({
	pluginId: "syllabus-g5-multiplies-divides-decimals-by-whole-numbers",
	competencyId: Hi.id,
	bank: [{
		grade: 1,
		en: { prompt: "3.6 x 4 = ?" },
		fr: { prompt: "3,6 x 4 = ?" },
		correctValue: 14.4
	}, {
		grade: 2,
		en: { prompt: "9.6 ÷ 4 = ?" },
		fr: { prompt: "9,6 ÷ 4 = ?" },
		correctValue: 2.4
	}]
}), Na = y({
	pluginId: "syllabus-g5-finds-any-percentage-of-quantity",
	competencyId: Ui.id,
	bank: [{
		grade: 1,
		en: { prompt: "What is 15% of 60?" },
		fr: { prompt: "Combien font 15 % de 60 ?" },
		correctValue: 9
	}, {
		grade: 2,
		en: { prompt: "What is 32% of 250?" },
		fr: { prompt: "Combien font 32 % de 250 ?" },
		correctValue: 80
	}]
}), Pa = y({
	pluginId: "syllabus-g5-calculates-percentage-increase-decrease",
	competencyId: Wi.id,
	bank: [{
		grade: 1,
		en: { prompt: "A $40 jacket is reduced by 20%. What is the new price, in dollars?" },
		fr: { prompt: "Une veste à 40 $ est réduite de 20 %. Quel est le nouveau prix, en dollars ?" },
		correctValue: 32
	}, {
		grade: 2,
		en: { prompt: "A $150 bike price increases by 10%. What is the new price, in dollars?" },
		fr: { prompt: "Le prix d'un vélo à 150 $ augmente de 10 %. Quel est le nouveau prix, en dollars ?" },
		correctValue: 165
	}]
}), Fa = _({
	pluginId: "syllabus-g5-understands-ratio-shares-quantity",
	competencyId: Gi.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "Share 20 in the ratio 3:1. The larger share is ___.",
			answer: "15"
		},
		fr: {
			promptWithBlank: "Partage 20 selon le rapport 3:1. La plus grande part est ___.",
			answer: "15"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "Share 35 in the ratio 2:5. The smaller share is ___.",
			answer: "10"
		},
		fr: {
			promptWithBlank: "Partage 35 selon le rapport 2:5. La plus petite part est ___.",
			answer: "10"
		}
	}]
}), Ia = y({
	pluginId: "syllabus-g5-solves-simple-scaling-problems",
	competencyId: Ki.id,
	bank: [{
		grade: 1,
		en: { prompt: "If 3 items cost $12, how much do 7 items cost, in dollars?" },
		fr: { prompt: "Si 3 articles coûtent 12 $, combien coûtent 7 articles, en dollars ?" },
		correctValue: 28
	}, {
		grade: 2,
		en: { prompt: "If 5 pens cost $9, how much do 15 pens cost, in dollars?" },
		fr: { prompt: "Si 5 stylos coûtent 9 $, combien coûtent 15 stylos, en dollars ?" },
		correctValue: 27
	}]
}), La = y({
	pluginId: "syllabus-g5-calculates-volume-cuboid",
	competencyId: qi.id,
	bank: [{
		grade: 1,
		en: { prompt: "A cuboid is 4 cm x 3 cm x 5 cm. What is its volume, in cm³?" },
		fr: { prompt: "Un parallélépipède mesure 4 cm x 3 cm x 5 cm. Quel est son volume, en cm³ ?" },
		correctValue: 60
	}, {
		grade: 2,
		en: { prompt: "A box holds 2,000 cm³ of water. How many litres is that?" },
		fr: { prompt: "Une boîte contient 2 000 cm³ d'eau. Combien de litres cela fait-il ?" },
		correctValue: 2
	}]
}), Ra = y({
	pluginId: "syllabus-g5-converts-metric-units-two-steps",
	competencyId: Ji.id,
	bank: [{
		grade: 1,
		en: { prompt: "Convert 3,450 mm to metres. How many metres is that?" },
		fr: { prompt: "Convertis 3 450 mm en mètres. Combien de mètres cela fait-il ?" },
		correctValue: 3.45
	}, {
		grade: 2,
		en: { prompt: "Convert 2.6 litres to centilitres. How many centilitres is that?" },
		fr: { prompt: "Convertis 2,6 litres en centilitres. Combien de centilitres cela fait-il ?" },
		correctValue: 260
	}]
}), za = v({
	pluginId: "syllabus-g5-knows-imperial-metric-rough-equivalence",
	competencyId: Yi.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Roughly, one mile is closest to which metric distance?",
			options: [
				"1.6 kilometres",
				"160 metres",
				"16 kilometres"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Environ, un mile correspond le mieux à quelle distance métrique ?",
			options: [
				"1,6 kilomètre",
				"160 mètres",
				"16 kilomètres"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Roughly, one pound (lb) is closest to which mass in metric units?",
			options: [
				"450 grams",
				"45 grams",
				"4.5 kilograms"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Environ, une livre (lb) correspond le mieux à quelle masse en unités métriques ?",
			options: [
				"450 grammes",
				"45 grammes",
				"4,5 kilogrammes"
			],
			correctIndex: 0
		}
	}]
}), Ba = x({
	pluginId: "syllabus-g5-has-reliable-body-ruler",
	competencyId: Xi.id,
	bank: [{
		grade: 1,
		en: {
			statement: "Knowing your own hand span lets you estimate the length of a table without a ruler.",
			isTrue: !0
		},
		fr: {
			statement: "Connaître l'envergure de sa propre main permet d'estimer la longueur d'une table sans règle.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "A single average pace length is a reliable way to estimate a long distance, like the length of a playground.",
			isTrue: !0
		},
		fr: {
			statement: "La longueur moyenne d'un pas est un moyen fiable d'estimer une longue distance, comme la longueur d'une cour de récréation.",
			isTrue: !0
		}
	}]
}), Va = y({
	pluginId: "syllabus-g5-converts-seconds-minutes-hours-days-years",
	competencyId: Zi.id,
	bank: [{
		grade: 1,
		en: { prompt: "How many seconds are in 4 minutes?" },
		fr: { prompt: "Combien de secondes y a-t-il dans 4 minutes ?" },
		correctValue: 240
	}, {
		grade: 2,
		en: { prompt: "How many days are in 3 years (not counting leap years)?" },
		fr: { prompt: "Combien de jours y a-t-il dans 3 ans (sans compter les années bissextiles) ?" },
		correctValue: 1095
	}]
}), Ha = y({
	pluginId: "syllabus-g5-handles-time-zone-differences",
	competencyId: Qi.id,
	bank: [{
		grade: 1,
		en: { prompt: "It is 14:00 where you are. A friend's city is 5 hours behind. What time is it there? (answer in 24-hour format as a number, e.g. 09:00 = 900)" },
		fr: { prompt: "Il est 14h00 chez toi. La ville d'un ami est 5 heures en retard. Quelle heure est-il là-bas ? (réponds au format 24h comme un nombre, par exemple 09h00 = 900)" },
		correctValue: 900
	}, {
		grade: 2,
		en: { prompt: "It is 09:00 where you are. A friend's city is 8 hours ahead. What time is it there? (answer in 24-hour format as a number, e.g. 17:00 = 1700)" },
		fr: { prompt: "Il est 09h00 chez toi. La ville d'un ami est 8 heures en avance. Quelle heure est-il là-bas ? (réponds au format 24h comme un nombre, par exemple 17h00 = 1700)" },
		correctValue: 1700
	}]
}), Ua = x({
	pluginId: "syllabus-g5-draws-shape-accurately-from-specification",
	competencyId: $i.id,
	bank: [{
		grade: 1,
		en: {
			statement: "To draw a triangle with a 5 cm side and a 40° angle accurately, you need both a ruler and a protractor.",
			isTrue: !0
		},
		fr: {
			statement: "Pour tracer avec précision un triangle avec un côté de 5 cm et un angle de 40°, tu as besoin d'une règle et d'un rapporteur.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "Compasses are used to draw a straight line of an exact length.",
			isTrue: !1
		},
		fr: {
			statement: "Le compas sert à tracer une ligne droite d'une longueur exacte.",
			isTrue: !1
		}
	}]
}), Wa = v({
	pluginId: "syllabus-g5-names-parts-of-circle",
	competencyId: ea.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "The distance from the centre of a circle to its edge is called the:",
			options: [
				"Radius",
				"Diameter",
				"Circumference"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "La distance entre le centre d'un cercle et son bord s'appelle :",
			options: [
				"Le rayon",
				"Le diamètre",
				"La circonférence"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "If the radius of a circle is 6 cm, what is its diameter?",
			options: [
				"12 cm",
				"3 cm",
				"6 cm"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Si le rayon d'un cercle est 6 cm, quel est son diamètre ?",
			options: [
				"12 cm",
				"3 cm",
				"6 cm"
			],
			correctIndex: 0
		}
	}]
}), Ga = v({
	pluginId: "syllabus-g5-identifies-net-of-cube-solids",
	competencyId: ta.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "How many square faces does the net of a cube have?",
			options: [
				"6",
				"4",
				"8"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Combien de faces carrées a le patron d'un cube ?",
			options: [
				"6",
				"4",
				"8"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "The net of a triangular prism includes which shapes?",
			options: [
				"2 triangles and 3 rectangles",
				"6 squares",
				"1 triangle and 1 rectangle"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Le patron d'un prisme triangulaire comprend quelles formes ?",
			options: [
				"2 triangles et 3 rectangles",
				"6 carrés",
				"1 triangle et 1 rectangle"
			],
			correctIndex: 0
		}
	}]
}), Ka = v({
	pluginId: "syllabus-g5-plots-coordinates-all-four-quadrants",
	competencyId: na.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "The point (-3, 4) is in which quadrant?",
			options: [
				"Top-left",
				"Top-right",
				"Bottom-left"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Le point (-3, 4) se trouve dans quel quadrant ?",
			options: [
				"En haut à gauche",
				"En haut à droite",
				"En bas à gauche"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "The point (2, -5) is in which quadrant?",
			options: [
				"Bottom-right",
				"Top-right",
				"Bottom-left"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Le point (2, -5) se trouve dans quel quadrant ?",
			options: [
				"En bas à droite",
				"En haut à droite",
				"En bas à gauche"
			],
			correctIndex: 0
		}
	}]
}), qa = v({
	pluginId: "syllabus-g5-rotates-shape-about-point",
	competencyId: ra.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A shape is rotated 90° clockwise about a point. What stays the same?",
			options: [
				"Its distance from the point",
				"Its orientation",
				"Its position"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Une forme est tournée de 90° dans le sens horaire autour d'un point. Qu'est-ce qui reste identique ?",
			options: [
				"Sa distance par rapport au point",
				"Son orientation",
				"Sa position"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A shape rotated 180° about a point ends up:",
			options: [
				"Upside down and reversed, same distance from the point",
				"In the same place",
				"Reflected, not rotated"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Une forme tournée de 180° autour d'un point se retrouve :",
			options: [
				"À l'envers et inversée, à la même distance du point",
				"Au même endroit",
				"Réfléchie, pas tournée"
			],
			correctIndex: 0
		}
	}]
}), Ja = y({
	pluginId: "syllabus-g5-uses-scale-on-plan-or-map",
	competencyId: ia.id,
	bank: [{
		grade: 1,
		en: { prompt: "A map has a scale of 1 cm : 100 m. Two towns are 4 cm apart on the map. How many metres apart are they in real life?" },
		fr: { prompt: "Une carte a une échelle de 1 cm : 100 m. Deux villes sont à 4 cm sur la carte. Combien de mètres les séparent en réalité ?" },
		correctValue: 400
	}, {
		grade: 2,
		en: { prompt: "A map has a scale of 1 cm : 100 m. A road is 2,500 m long in real life. How many cm is that on the map?" },
		fr: { prompt: "Une carte a une échelle de 1 cm : 100 m. Une route mesure 2 500 m en réalité. Combien de cm cela fait-il sur la carte ?" },
		correctValue: 25
	}]
}), Ya = y({
	pluginId: "syllabus-g5-calculates-mean",
	competencyId: aa.id,
	bank: [{
		grade: 1,
		en: { prompt: "Find the mean of: 4, 8, 6, 2." },
		fr: { prompt: "Trouve la moyenne de : 4, 8, 6, 2." },
		correctValue: 5
	}, {
		grade: 2,
		en: { prompt: "Find the mean of: 10, 15, 20, 25, 30." },
		fr: { prompt: "Trouve la moyenne de : 10, 15, 20, 25, 30." },
		correctValue: 20
	}]
}), Xa = v({
	pluginId: "syllabus-g5-reads-pie-chart-fractions-percentages",
	competencyId: oa.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A pie chart is split into 4 equal sectors. What fraction does each sector represent?",
			options: [
				"1/4",
				"1/2",
				"1/3"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un diagramme circulaire est divisé en 4 secteurs égaux. Quelle fraction représente chaque secteur ?",
			options: [
				"1/4",
				"1/2",
				"1/3"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A pie chart sector takes up half the circle. What percentage is that?",
			options: [
				"50%",
				"25%",
				"75%"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un secteur de diagramme circulaire occupe la moitié du cercle. Quel pourcentage cela représente-t-il ?",
			options: [
				"50 %",
				"25 %",
				"75 %"
			],
			correctIndex: 0
		}
	}]
}), Za = v({
	pluginId: "syllabus-g5-uses-language-of-chance",
	competencyId: sa.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Flipping a fair coin and getting heads is best described as:",
			options: [
				"Even chance",
				"Impossible",
				"Certain"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Lancer une pièce équilibrée et obtenir face se décrit le mieux comme :",
			options: [
				"Une chance sur deux",
				"Impossible",
				"Certain"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "Rolling a standard die and getting a number less than 7 is:",
			options: [
				"Certain",
				"Impossible",
				"Unlikely"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Lancer un dé standard et obtenir un nombre inférieur à 7 est :",
			options: [
				"Certain",
				"Impossible",
				"Improbable"
			],
			correctIndex: 0
		}
	}]
}), Qa = x({
	pluginId: "syllabus-g5-spots-misleading-graph",
	competencyId: ca.id,
	bank: [{
		grade: 1,
		en: {
			statement: "A bar chart whose y-axis starts at 90 instead of 0 can make small differences look much bigger than they really are.",
			isTrue: !0
		},
		fr: {
			statement: "Un diagramme en barres dont l'axe des y commence à 90 au lieu de 0 peut faire paraître de petites différences bien plus grandes qu'elles ne le sont réellement.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "Choosing only the three best years out of ten to display on a graph gives a fair, unbiased picture of the overall trend.",
			isTrue: !1
		},
		fr: {
			statement: "Choisir seulement les trois meilleures années sur dix à afficher sur un graphique donne une image juste et impartiale de la tendance générale.",
			isTrue: !1
		}
	}]
}), $a = y({
	pluginId: "syllabus-g5-uses-letter-for-unknown-substitutes",
	competencyId: la.id,
	bank: [{
		grade: 1,
		en: { prompt: "If n = 8, what is 3n + 2?" },
		fr: { prompt: "Si n = 8, combien font 3n + 2 ?" },
		correctValue: 26
	}, {
		grade: 2,
		en: { prompt: "If x = 5, what is 2x² - 3?" },
		fr: { prompt: "Si x = 5, combien font 2x² - 3 ?" },
		correctValue: 47
	}]
}), eo = y({
	pluginId: "syllabus-g5-solves-one-step-equation-checks",
	competencyId: ua.id,
	bank: [{
		grade: 1,
		en: { prompt: "Solve for x: x + 14 = 23." },
		fr: { prompt: "Résous pour x : x + 14 = 23." },
		correctValue: 9
	}, {
		grade: 2,
		en: { prompt: "Solve for y: 6y = 42." },
		fr: { prompt: "Résous pour y : 6y = 42." },
		correctValue: 7
	}]
}), to = _({
	pluginId: "syllabus-g5-expresses-general-rule-for-sequence",
	competencyId: da.id,
	bank: [{
		grade: 1,
		en: {
			promptWithBlank: "The sequence 3, 6, 9, 12, ... has the rule: the nth term is ___ x n.",
			answer: "3"
		},
		fr: {
			promptWithBlank: "La suite 3, 6, 9, 12, ... a la règle : le nième terme est ___ x n.",
			answer: "3"
		}
	}, {
		grade: 2,
		en: {
			promptWithBlank: "The sequence 5, 8, 11, 14, ... has the rule: the nth term is 3n + ___.",
			answer: "2"
		},
		fr: {
			promptWithBlank: "La suite 5, 8, 11, 14, ... a la règle : le nième terme est 3n + ___.",
			answer: "2"
		}
	}]
}), no = x({
	pluginId: "syllabus-g5-judges-whether-answer-reasonable",
	competencyId: fa.id,
	bank: [{
		grade: 1,
		en: {
			statement: "If a question asks for the number of children in a class and your answer is 340, you should check your working, because that answer is not reasonable.",
			isTrue: !0
		},
		fr: {
			statement: "Si une question demande le nombre d'enfants dans une classe et que ta réponse est 340, tu dois vérifier ton travail, car cette réponse n'est pas raisonnable.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "Once you get an answer from a calculation, there is no need to check it against the original question.",
			isTrue: !1
		},
		fr: {
			statement: "Une fois qu'on obtient une réponse à un calcul, il n'est pas nécessaire de la vérifier par rapport à la question d'origine.",
			isTrue: !1
		}
	}]
}), ro = x({
	pluginId: "syllabus-g5-finds-own-mistake-in-wrong-answer",
	competencyId: pa.id,
	bank: [{
		grade: 1,
		en: {
			statement: "If your answer doesn't match the expected result, checking each step of your working can help you find exactly where the mistake happened.",
			isTrue: !0
		},
		fr: {
			statement: "Si ta réponse ne correspond pas au résultat attendu, vérifier chaque étape de ton travail peut t'aider à trouver exactement où l'erreur s'est produite.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "The best way to deal with a wrong answer is always to start the whole problem over from scratch, without checking any of your working first.",
			isTrue: !1
		},
		fr: {
			statement: "La meilleure façon de traiter une réponse fausse est toujours de recommencer tout le problème depuis le début, sans vérifier son travail d'abord.",
			isTrue: !1
		}
	}]
}), io = v({
	pluginId: "syllabus-g5-solves-problem-missing-surplus-info",
	competencyId: ma.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A problem says: 'Sam has 12 apples and 5 oranges. He gives away some apples. How many apples does he have now?' What is missing?",
			options: [
				"How many apples he gave away",
				"How many oranges he has",
				"How many apples he started with"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un problème dit : « Sam a 12 pommes et 5 oranges. Il donne quelques pommes. Combien de pommes a-t-il maintenant ? » Qu'est-ce qui manque ?",
			options: [
				"Combien de pommes il a données",
				"Combien d'oranges il a",
				"Combien de pommes il avait au départ"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A problem says: 'A box has 24 pencils. There are 5 red, 8 blue, 6 green pencils, and the rest are yellow. Today is Tuesday. How many pencils are yellow?' Which piece of information is surplus (not needed)?",
			options: [
				"Today is Tuesday",
				"The box has 24 pencils",
				"There are 5 red pencils"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un problème dit : « Une boîte contient 24 crayons. Il y a 5 rouges, 8 bleus, 6 verts, et le reste sont jaunes. Aujourd'hui, c'est mardi. Combien de crayons sont jaunes ? » Quelle information est superflue (pas nécessaire) ?",
			options: [
				"Aujourd'hui, c'est mardi",
				"La boîte contient 24 crayons",
				"Il y a 5 crayons rouges"
			],
			correctIndex: 0
		}
	}]
}), ao = x({
	pluginId: "syllabus-g5-tackles-unfamiliar-problem",
	competencyId: ha.id,
	bank: [{
		grade: 1,
		en: {
			statement: "When you don't know a taught method for a problem, trying an approach, checking if it works, and adjusting is a sensible strategy.",
			isTrue: !0
		},
		fr: {
			statement: "Quand tu ne connais pas de méthode enseignée pour un problème, essayer une approche, vérifier si elle fonctionne, et ajuster est une stratégie sensée.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "If a problem looks unfamiliar and you don't immediately know the method, the only sensible option is to leave it blank.",
			isTrue: !1
		},
		fr: {
			statement: "Si un problème semble inconnu et que tu ne connais pas immédiatement la méthode, la seule option sensée est de le laisser vide.",
			isTrue: !1
		}
	}]
}), oo = x({
	pluginId: "syllabus-g5-uses-calculator-correctly-checks-estimate",
	competencyId: ga.id,
	bank: [{
		grade: 1,
		en: {
			statement: "After using a calculator to find an answer, comparing it to a quick mental estimate helps catch a mistyped calculation.",
			isTrue: !0
		},
		fr: {
			statement: "Après avoir utilisé une calculatrice pour trouver une réponse, la comparer à une estimation mentale rapide aide à repérer une erreur de frappe.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "A calculator result should always be trusted completely, even if it looks wildly different from what you expected.",
			isTrue: !1
		},
		fr: {
			statement: "Un résultat de calculatrice doit toujours être totalement fiable, même s'il semble très différent de ce à quoi tu t'attendais.",
			isTrue: !1
		}
	}]
}), so = [
	va.plugin,
	ya.plugin,
	ba.plugin,
	xa.plugin,
	Sa.plugin,
	Ca.plugin,
	wa.plugin,
	Ta.plugin,
	Ea.plugin,
	Da.plugin,
	Oa.plugin,
	ka.plugin,
	Aa.plugin,
	ja.plugin,
	Ma.plugin,
	Na.plugin,
	Pa.plugin,
	Fa.plugin,
	Ia.plugin,
	La.plugin,
	Ra.plugin,
	za.plugin,
	Ba.plugin,
	Va.plugin,
	Ha.plugin,
	Ua.plugin,
	Wa.plugin,
	Ga.plugin,
	Ka.plugin,
	qa.plugin,
	Ja.plugin,
	Ya.plugin,
	Xa.plugin,
	Za.plugin,
	Qa.plugin,
	$a.plugin,
	eo.plugin,
	to.plugin,
	no.plugin,
	ro.plugin,
	io.plugin,
	ao.plugin,
	oo.plugin
];
function E(e) {
	return e;
}
var co = [
	E({
		key: "syllabus-g5-finds-factors-common-multiples",
		label: "Factors & Common Multiples",
		icon: "🔢",
		pluginId: va.plugin.id,
		competency: Oi,
		competencies: [Oi],
		createSession: va.createSession,
		createMasterySignal: va.createMasterySignal
	}),
	E({
		key: "syllabus-g5-extends-place-value-right-of-decimal",
		label: "Decimal Place Value",
		icon: "🧮",
		pluginId: ya.plugin.id,
		competency: ki,
		competencies: [ki],
		createSession: ya.createSession,
		createMasterySignal: ya.createMasterySignal
	}),
	E({
		key: "syllabus-g5-rounds-decimals-to-given-places",
		label: "Rounding Decimals",
		icon: "📐",
		pluginId: ba.plugin.id,
		competency: Ai,
		competencies: [Ai],
		createSession: ba.createSession,
		createMasterySignal: ba.createMasterySignal
	}),
	E({
		key: "syllabus-g5-adds-subtracts-whole-decimals-columns",
		label: "Column Addition & Subtraction with Decimals",
		icon: "➕",
		pluginId: xa.plugin.id,
		competency: ji,
		competencies: [ji],
		createSession: xa.createSession,
		createMasterySignal: xa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-multiplies-four-digit-by-two-digit",
		label: "Long Multiplication",
		icon: "✖️",
		pluginId: Sa.plugin.id,
		competency: Mi,
		competencies: [Mi],
		createSession: Sa.createSession,
		createMasterySignal: Sa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-divides-by-two-digit-expresses-remainder",
		label: "Long Division & Remainders",
		icon: "➗",
		pluginId: Ca.plugin.id,
		competency: Ni,
		competencies: [Ni],
		createSession: Ca.createSession,
		createMasterySignal: Ca.createMasterySignal
	}),
	E({
		key: "syllabus-g5-knows-divisibility-tests",
		label: "Divisibility Tests",
		icon: "✅",
		pluginId: wa.plugin.id,
		competency: Pi,
		competencies: [Pi],
		createSession: wa.createSession,
		createMasterySignal: wa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-applies-order-of-operations",
		label: "Order of Operations",
		icon: "🧩",
		pluginId: Ta.plugin.id,
		competency: Fi,
		competencies: [Fi],
		createSession: Ta.createSession,
		createMasterySignal: Ta.createMasterySignal
	}),
	E({
		key: "syllabus-g5-multiplies-two-digit-by-one-digit-mentally",
		label: "Mental Multiplication",
		icon: "🧠",
		pluginId: Ea.plugin.id,
		competency: Ii,
		competencies: [Ii],
		createSession: Ea.createSession,
		createMasterySignal: Ea.createMasterySignal
	}),
	E({
		key: "syllabus-g5-finds-common-percentages-mentally",
		label: "Mental Percentages",
		icon: "💯",
		pluginId: Da.plugin.id,
		competency: Li,
		competencies: [Li],
		createSession: Da.createSession,
		createMasterySignal: Da.createMasterySignal
	}),
	E({
		key: "syllabus-g5-estimates-before-calculating",
		label: "Estimating Before Calculating",
		icon: "🔍",
		pluginId: Oa.plugin.id,
		competency: Ri,
		competencies: [Ri],
		createSession: Oa.createSession,
		createMasterySignal: Oa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-adds-subtracts-fractions-different-denominators",
		label: "Adding & Subtracting Unlike Fractions",
		icon: "🍰",
		pluginId: ka.plugin.id,
		competency: zi,
		competencies: [zi],
		createSession: ka.createSession,
		createMasterySignal: ka.createMasterySignal
	}),
	E({
		key: "syllabus-g5-multiplies-fraction-by-whole-or-fraction",
		label: "Multiplying Fractions",
		icon: "🍕",
		pluginId: Aa.plugin.id,
		competency: Bi,
		competencies: [Bi],
		createSession: Aa.createSession,
		createMasterySignal: Aa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-converts-fluently-fractions-decimals-percentages",
		label: "Fractions, Decimals & Percentages",
		icon: "🔀",
		pluginId: ja.plugin.id,
		competency: Vi,
		competencies: [Vi],
		createSession: ja.createSession,
		createMasterySignal: ja.createMasterySignal
	}),
	E({
		key: "syllabus-g5-multiplies-divides-decimals-by-whole-numbers",
		label: "Multiplying & Dividing Decimals",
		icon: "💲",
		pluginId: Ma.plugin.id,
		competency: Hi,
		competencies: [Hi],
		createSession: Ma.createSession,
		createMasterySignal: Ma.createMasterySignal
	}),
	E({
		key: "syllabus-g5-finds-any-percentage-of-quantity",
		label: "Any Percentage of a Quantity",
		icon: "💯",
		pluginId: Na.plugin.id,
		competency: Ui,
		competencies: [Ui],
		createSession: Na.createSession,
		createMasterySignal: Na.createMasterySignal
	}),
	E({
		key: "syllabus-g5-calculates-percentage-increase-decrease",
		label: "Percentage Increase & Decrease",
		icon: "📈",
		pluginId: Pa.plugin.id,
		competency: Wi,
		competencies: [Wi],
		createSession: Pa.createSession,
		createMasterySignal: Pa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-understands-ratio-shares-quantity",
		label: "Ratio & Sharing",
		icon: "⚖️",
		pluginId: Fa.plugin.id,
		competency: Gi,
		competencies: [Gi],
		createSession: Fa.createSession,
		createMasterySignal: Fa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-solves-simple-scaling-problems",
		label: "Scaling Problems",
		icon: "🧩",
		pluginId: Ia.plugin.id,
		competency: Ki,
		competencies: [Ki],
		createSession: Ia.createSession,
		createMasterySignal: Ia.createMasterySignal
	}),
	E({
		key: "syllabus-g5-calculates-volume-cuboid",
		label: "Volume of a Cuboid",
		icon: "🧊",
		pluginId: La.plugin.id,
		competency: qi,
		competencies: [qi],
		createSession: La.createSession,
		createMasterySignal: La.createMasterySignal
	}),
	E({
		key: "syllabus-g5-converts-metric-units-two-steps",
		label: "Converting Metric Units (Two Steps)",
		icon: "📏",
		pluginId: Ra.plugin.id,
		competency: Ji,
		competencies: [Ji],
		createSession: Ra.createSession,
		createMasterySignal: Ra.createMasterySignal
	}),
	E({
		key: "syllabus-g5-knows-imperial-metric-rough-equivalence",
		label: "Imperial & Metric Units",
		icon: "🔄",
		pluginId: za.plugin.id,
		competency: Yi,
		competencies: [Yi],
		createSession: za.createSession,
		createMasterySignal: za.createMasterySignal
	}),
	E({
		key: "syllabus-g5-has-reliable-body-ruler",
		label: "Body-Ruler Estimation",
		icon: "📏",
		pluginId: Ba.plugin.id,
		competency: Xi,
		competencies: [Xi],
		createSession: Ba.createSession,
		createMasterySignal: Ba.createMasterySignal
	}),
	E({
		key: "syllabus-g5-converts-seconds-minutes-hours-days-years",
		label: "Converting Time Units",
		icon: "⏱️",
		pluginId: Va.plugin.id,
		competency: Zi,
		competencies: [Zi],
		createSession: Va.createSession,
		createMasterySignal: Va.createMasterySignal
	}),
	E({
		key: "syllabus-g5-handles-time-zone-differences",
		label: "Time Zones",
		icon: "🌐",
		pluginId: Ha.plugin.id,
		competency: Qi,
		competencies: [Qi],
		createSession: Ha.createSession,
		createMasterySignal: Ha.createMasterySignal
	}),
	E({
		key: "syllabus-g5-draws-shape-accurately-from-specification",
		label: "Accurate Shape Drawing",
		icon: "📐",
		pluginId: Ua.plugin.id,
		competency: $i,
		competencies: [$i],
		createSession: Ua.createSession,
		createMasterySignal: Ua.createMasterySignal
	}),
	E({
		key: "syllabus-g5-names-parts-of-circle",
		label: "Parts of a Circle",
		icon: "⭕",
		pluginId: Wa.plugin.id,
		competency: ea,
		competencies: [ea],
		createSession: Wa.createSession,
		createMasterySignal: Wa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-identifies-net-of-cube-solids",
		label: "Nets of Solids",
		icon: "🧊",
		pluginId: Ga.plugin.id,
		competency: ta,
		competencies: [ta],
		createSession: Ga.createSession,
		createMasterySignal: Ga.createMasterySignal
	}),
	E({
		key: "syllabus-g5-plots-coordinates-all-four-quadrants",
		label: "Coordinates in Four Quadrants",
		icon: "🧭",
		pluginId: Ka.plugin.id,
		competency: na,
		competencies: [na],
		createSession: Ka.createSession,
		createMasterySignal: Ka.createMasterySignal
	}),
	E({
		key: "syllabus-g5-rotates-shape-about-point",
		label: "Rotating Shapes",
		icon: "🔄",
		pluginId: qa.plugin.id,
		competency: ra,
		competencies: [ra],
		createSession: qa.createSession,
		createMasterySignal: qa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-uses-scale-on-plan-or-map",
		label: "Scale on Plans & Maps",
		icon: "🗺️",
		pluginId: Ja.plugin.id,
		competency: ia,
		competencies: [ia],
		createSession: Ja.createSession,
		createMasterySignal: Ja.createMasterySignal
	}),
	E({
		key: "syllabus-g5-calculates-mean",
		label: "Calculating the Mean",
		icon: "📊",
		pluginId: Ya.plugin.id,
		competency: aa,
		competencies: [aa],
		createSession: Ya.createSession,
		createMasterySignal: Ya.createMasterySignal
	}),
	E({
		key: "syllabus-g5-reads-pie-chart-fractions-percentages",
		label: "Reading Pie Charts",
		icon: "🥧",
		pluginId: Xa.plugin.id,
		competency: oa,
		competencies: [oa],
		createSession: Xa.createSession,
		createMasterySignal: Xa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-uses-language-of-chance",
		label: "Language of Chance",
		icon: "🎲",
		pluginId: Za.plugin.id,
		competency: sa,
		competencies: [sa],
		createSession: Za.createSession,
		createMasterySignal: Za.createMasterySignal
	}),
	E({
		key: "syllabus-g5-spots-misleading-graph",
		label: "Spotting Misleading Graphs",
		icon: "📉",
		pluginId: Qa.plugin.id,
		competency: ca,
		competencies: [ca],
		createSession: Qa.createSession,
		createMasterySignal: Qa.createMasterySignal
	}),
	E({
		key: "syllabus-g5-uses-letter-for-unknown-substitutes",
		label: "Algebraic Substitution",
		icon: "🔤",
		pluginId: $a.plugin.id,
		competency: la,
		competencies: [la],
		createSession: $a.createSession,
		createMasterySignal: $a.createMasterySignal
	}),
	E({
		key: "syllabus-g5-solves-one-step-equation-checks",
		label: "One-Step Equations",
		icon: "❓",
		pluginId: eo.plugin.id,
		competency: ua,
		competencies: [ua],
		createSession: eo.createSession,
		createMasterySignal: eo.createMasterySignal
	}),
	E({
		key: "syllabus-g5-expresses-general-rule-for-sequence",
		label: "General Rule for a Sequence",
		icon: "🔁",
		pluginId: to.plugin.id,
		competency: da,
		competencies: [da],
		createSession: to.createSession,
		createMasterySignal: to.createMasterySignal
	}),
	E({
		key: "syllabus-g5-judges-whether-answer-reasonable",
		label: "Judging a Reasonable Answer",
		icon: "🤔",
		pluginId: no.plugin.id,
		competency: fa,
		competencies: [fa],
		createSession: no.createSession,
		createMasterySignal: no.createMasterySignal
	}),
	E({
		key: "syllabus-g5-finds-own-mistake-in-wrong-answer",
		label: "Finding Your Own Mistake",
		icon: "🔍",
		pluginId: ro.plugin.id,
		competency: pa,
		competencies: [pa],
		createSession: ro.createSession,
		createMasterySignal: ro.createMasterySignal
	}),
	E({
		key: "syllabus-g5-solves-problem-missing-surplus-info",
		label: "Missing or Surplus Information",
		icon: "🧩",
		pluginId: io.plugin.id,
		competency: ma,
		competencies: [ma],
		createSession: io.createSession,
		createMasterySignal: io.createMasterySignal
	}),
	E({
		key: "syllabus-g5-tackles-unfamiliar-problem",
		label: "Tackling Unfamiliar Problems",
		icon: "🧗",
		pluginId: ao.plugin.id,
		competency: ha,
		competencies: [ha],
		createSession: ao.createSession,
		createMasterySignal: ao.createMasterySignal
	}),
	E({
		key: "syllabus-g5-uses-calculator-correctly-checks-estimate",
		label: "Using a Calculator Wisely",
		icon: "🖩",
		pluginId: oo.plugin.id,
		competency: ga,
		competencies: [ga],
		createSession: oo.createSession,
		createMasterySignal: oo.createMasterySignal
	})
];
function D(e, t) {
	return {
		id: e,
		nameKey: `competency.${e}.name`,
		descriptionKey: `competency.${e}.description`,
		subjectId: "mathematics",
		targetGrade: "P",
		gradeCount: 3,
		...t !== void 0 && { frameworkSkillId: t },
		prerequisiteIds: [],
		scoreInputs: [{
			kind: "activity",
			id: e
		}]
	};
}
var lo = D("math.number-sense.preschool-subitizing", "mathematics.P.1"), uo = D("math.number-sense.preschool-numerals", "mathematics.P.3"), fo = D("math.number-sense.preschool-numeral-quantity", "mathematics.P.3"), po = D("math.comparing-ordering.preschool-more-fewer-same", "mathematics.P.2"), mo = D("math.comparing-ordering.preschool-compare-numerals", "mathematics.P.2"), ho = D("math.addition.preschool-combine", "mathematics.P.4"), go = D("math.subtraction.preschool-take-away", "mathematics.P.4"), _o = D("math.geometry.preschool-shapes-2d", "mathematics.P.8"), vo = D("math.geometry.preschool-position-words", "mathematics.P.9"), O = D("math.measurement.preschool-direct-comparison", "mathematics.P.5"), yo = D("math.mathematical-reasoning.preschool-patterns", void 0), bo = D("math.time.preschool-days-of-week", "mathematics.P.7"), xo = D("math.number-sense.preschool-cardinality", "mathematics.P.0"), So = D("math.number-sense.preschool-count-on", "mathematics.P.0"), Co = D("math.number-sense.preschool-before-after", "mathematics.P.0"), wo = D("math.number-sense.preschool-numeral-formation", "mathematics.P.3"), To = D("math.number-sense.preschool-zero", "mathematics.P.0"), Eo = D("math.comparing-ordering.preschool-conservation", "mathematics.P.2"), k = D("math.number-sense.preschool-ordinals", void 0), Do = D("math.addition.preschool-decompose-five", "mathematics.P.4"), Oo = D("math.problem-solving.preschool-story-problems", "mathematics.P.4"), A = D("math.geometry.preschool-solids", "mathematics.P.8"), ko = D("math.geometry.preschool-sides-corners", "mathematics.P.8"), Ao = D("math.geometry.preschool-movement", "mathematics.P.9"), jo = D("math.measurement.preschool-order-by-size", "mathematics.P.5"), Mo = D("math.mathematical-reasoning.preschool-sorting", void 0), No = D("math.mathematical-reasoning.preschool-name-the-rule", void 0), Po = D("math.mathematical-reasoning.preschool-missing-item", void 0), Fo = D("math.time.preschool-parts-of-day", "mathematics.P.6"), Io = D("math.time.preschool-yesterday-today-tomorrow", "mathematics.P.7"), Lo = [
	lo,
	uo,
	fo,
	po,
	mo,
	ho,
	go,
	_o,
	vo,
	O,
	yo,
	bo,
	xo,
	So,
	Co,
	wo,
	To,
	Eo,
	k,
	Do,
	Oo,
	A,
	ko,
	Ao,
	jo,
	Mo,
	No,
	Po,
	Fo,
	Io
];
//#endregion
//#region packages/syllabus-content-p/src/banks/helpers.ts
function j(e, t, n, r) {
	let i = [n, ...r];
	if (new Set(i).size !== i.length) throw Error(`duplicate options for "${t.en}": ${i.join(", ")}`);
	return {
		grade: e,
		en: {
			prompt: t.en,
			options: i,
			correctIndex: 0
		},
		fr: {
			prompt: t.fr,
			options: i,
			correctIndex: 0
		}
	};
}
function Ro(e) {
	let t = [...e].sort((e, t) => e - t);
	return t.every((e, n) => n === 0 || e === t[n - 1] + 1);
}
function zo(e, t) {
	if (t === 0) return [[]];
	let n = [];
	return e.forEach((r, i) => {
		for (let a of zo(e.slice(i + 1), t - 1)) n.push([r, ...a]);
	}), n;
}
function Bo(e, t, n, r, i = () => !0) {
	let a = zo(t.filter((t) => t !== e), n).filter((t) => !Ro([e, ...t]) && i(t));
	if (a.length === 0) throw Error(`no non-contiguous distractor set for ${e}`);
	let o = [], s = Math.max(1, Math.floor(a.length / r)), c = e * 5 % a.length;
	for (let e = 0; e < a.length && o.length < r; e++) o.push(a[(c + e * s) % a.length]);
	return o;
}
function Vo(e, t, n, r, i) {
	return Bo(e, Array.from({ length: n - t + 1 }, (e, n) => t + n), r, i).map((e) => e.map(String));
}
function M(e, t, n, r = 0) {
	if (new Set(t.options).size !== t.options.length) throw Error(`duplicate options for "${t.prompt}": ${t.options.join(", ")}`);
	return {
		grade: e,
		en: {
			...t,
			correctIndex: r
		},
		fr: {
			...n,
			correctIndex: r
		}
	};
}
function N(e, t, n) {
	return {
		grade: e,
		en: {
			statement: t.en,
			isTrue: n
		},
		fr: {
			statement: t.fr,
			isTrue: n
		}
	};
}
function Ho(e, t, n) {
	return {
		grade: e,
		en: { prompt: t.en },
		fr: { prompt: t.fr },
		correctValue: n
	};
}
function P(e, t, n) {
	for (let e of [t.en, t.fr]) if ((e.match(/___/g) ?? []).length !== 1) throw Error(`promptWithBlank must contain exactly one "___": "${e}"`);
	return {
		grade: e,
		en: {
			promptWithBlank: t.en,
			answer: n.en
		},
		fr: {
			promptWithBlank: t.fr,
			answer: n.fr
		}
	};
}
function Uo(e, t) {
	let n = t.map((e) => e.en.left);
	if (new Set(n).size !== n.length) throw Error(`duplicate left labels in matching entry: ${n.join(", ")}`);
	return {
		grade: e,
		en: { pairs: t.map((e) => e.en) },
		fr: { pairs: t.map((e) => e.fr) }
	};
}
var F = [
	"🍎",
	"⭐",
	"🐟",
	"🎈",
	"🐥",
	"🚗",
	"🍓",
	"🐸",
	"🌻",
	"🧁",
	"🍪",
	"🦋"
];
function Wo(e, t, n, r, i = 0) {
	let a = [...new Set(t)].filter((t) => t !== e && t >= n && t <= r), o = Array.from({ length: r - n + 1 }, (e, t) => n + t).filter((t) => t !== e && !a.includes(t)), s = o.length === 0 ? 0 : i % o.length, c = [...o.slice(s), ...o.slice(0, s)];
	for (let t of zo(c, 3 - a.length)) {
		let n = [...a, ...t];
		if (!Ro([e, ...n])) return n.map(String);
	}
	throw Error(`no non-contiguous distractors for ${e} (${t.join()}) in ${n}..${r}`);
}
function Go(e) {
	return `${e}️⃣`;
}
function Ko(e, t = "\n") {
	let n = [];
	for (let t = 0; t < e.length; t += 5) n.push(e.slice(t, t + 5).join(""));
	return n.join(t);
}
function I(e, t, n = "\n") {
	return Ko(Array.from({ length: e }, () => t), n);
}
var qo = "  ";
function L(e) {
	let t = /* @__PURE__ */ new Set();
	return e.filter((e) => {
		let n = e.en.prompt ?? e.en.statement ?? e.en.promptWithBlank ?? JSON.stringify(e.en.pairs), r = `${e.grade}|${n}|${(e.en.options ?? []).join("~")}`;
		return !t.has(r) && (t.add(r), !0);
	});
}
//#endregion
//#region packages/syllabus-content-p/src/banks/arithmetic.ts
var Jo = [
	{
		level: 1,
		min: 2,
		max: 6
	},
	{
		level: 2,
		min: 7,
		max: 8
	},
	{
		level: 3,
		min: 9,
		max: 10
	}
];
function Yo() {
	let e = [], t = 0;
	for (let { level: n, min: r, max: i } of Jo) for (let a = r; a <= i; a++) for (let r = 1; r < a; r++) e.push({
		level: n,
		a: r,
		b: a - r,
		emoji: F[t * 5 % F.length],
		index: t
	}), t++;
	return e;
}
function Xo() {
	let e = [], t = 0;
	for (let { level: n, min: r, max: i } of Jo) for (let a = r; a <= i; a++) for (let r = 1; r < a; r++) e.push({
		level: n,
		a,
		b: r,
		emoji: F[t * 7 % F.length],
		index: t
	}), t++;
	return e;
}
var Zo = {
	en: "and",
	fr: "et"
};
function Qo(e, t) {
	return `${I(e.a, e.emoji)}\n${Zo[t]}\n${I(e.b, e.emoji)}`;
}
function $o(e) {
	return Ko([...Array.from({ length: e.a - e.b }, () => e.emoji), ...Array.from({ length: e.b }, () => "❌")]);
}
function es() {
	return L(Yo().map((e) => Ho(e.level, {
		en: `${Qo(e, "en")}\n\nHow many altogether`,
		fr: `${Qo(e, "fr")}\n\nEn tout, combien`
	}, e.a + e.b)));
}
function ts(e) {
	let t = e.a + e.b, n = t + 1;
	return Ro([
		t,
		e.a,
		e.b,
		n
	]) ? t + 2 : n;
}
function ns() {
	return L(Yo().map((e) => {
		let t = e.a + e.b;
		return j(e.level, {
			en: `${Qo(e, "en")}\n\nHow many altogether?`,
			fr: `${Qo(e, "fr")}\n\nEn tout, combien ?`
		}, String(t), Wo(t, [
			e.a,
			e.b,
			ts(e)
		], 1, 12, e.index));
	}));
}
function rs() {
	return L(Xo().map((e) => Ho(e.level, {
		en: `${$o(e)}\n\nHow many left`,
		fr: `${$o(e)}\n\nCombien en reste-t-il`
	}, e.a - e.b)));
}
function is() {
	return L(Xo().map((e) => {
		let t = e.a - e.b, n = Wo(t, [e.b, e.a], 1, 10, e.index).map(Number), r = (t) => I(t, e.emoji, qo);
		return j(e.level, {
			en: `${$o(e)}\n\nWhich picture shows what is left?`,
			fr: `${$o(e)}\n\nQuelle image montre ce qui reste ?`
		}, r(t), n.map(r));
	}));
}
//#endregion
//#region packages/syllabus-content-p/src/banks/beforeAfter.ts
function as() {
	let e = [], t = (e, t) => t === "after" ? `🏠${e} ➡️ ___` : `___ ⬅️ 🏠${e}`, n = (n, r, i) => {
		let a = i === "before" ? r - 1 : r + 1;
		a < 1 || e.push(P(n, {
			en: `${t(r, i)}\n\nWhich house number is missing?`,
			fr: `${t(r, i)}\n\nQuel numéro de maison manque ?`
		}, {
			en: String(a),
			fr: String(a)
		}));
	};
	for (let e = 1; e <= 5; e++) n(1, e, "after");
	for (let e = 1; e <= 9; e++) n(2, e, e % 2 == 0 ? "before" : "after");
	for (let e = 1; e <= 10; e++) n(3, e, e % 3 == 0 ? "before" : "after");
	return e;
}
//#endregion
//#region packages/syllabus-content-p/src/banks/cardinality.ts
var os = {
	1: [1, 5],
	2: [6, 10],
	3: [11, 20]
};
function ss() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) {
		let [n, r] = os[t];
		for (let i = n; i <= r; i++) {
			let a = F[i % F.length], o = `${I(i, a)}\n❓`;
			e.push(j(t, {
				en: `${o}\n\nHow many were there?`,
				fr: `${o}\n\nCombien y en avait-il ?`
			}, String(i), Wo(i, [], Math.max(0, n - 2), r + 2, i)));
		}
	}
	return L(e);
}
function cs() {
	let e = [], t = {
		1: ["off-by-one"],
		2: ["off-by-one", "rearranged"],
		3: [
			"off-by-one",
			"rearranged",
			"added-after"
		]
	};
	for (let n of [
		1,
		2,
		3
	]) {
		let [r, i] = os[n];
		for (let a = r; a <= i; a++) {
			let r = F[a * 3 % F.length], i = (e) => I(e, r), o = {
				en: `Counting: ..., ${a}!`,
				fr: `On compte : ..., ${a} !`
			};
			e.push(N(n, {
				en: `${i(a)}\n\n${o.en}\n\nThere are ${a}.`,
				fr: `${i(a)}\n\n${o.fr}\n\nIl y en a ${a}.`
			}, !0));
			for (let s of t[n]) if (s === "off-by-one") {
				let t = a + (a % 2 == 0 ? 1 : -1);
				e.push(N(n, {
					en: `${i(a)}\n\n${o.en}\n\nThere are ${t}.`,
					fr: `${i(a)}\n\n${o.fr}\n\nIl y en a ${t}.`
				}, !1));
			} else if (s === "rearranged" && a >= 2) {
				let t = `${I(a, r, " ")} (moved around)`;
				e.push(N(n, {
					en: `${t}\n\n${o.en}\n\nThere are still ${a}.`,
					fr: `${t}\n\n${o.fr}\n\nIl y en a toujours ${a}.`
				}, !0));
			} else s === "added-after" && e.push(N(n, {
				en: `${i(a)}\n\n${o.en}\n\n${F[(a + 1) % F.length]} was added after counting.\n\nThere are still ${a}.`,
				fr: `${i(a)}\n\n${o.fr}\n\n${F[(a + 1) % F.length]} a été ajouté après le comptage.\n\nIl y en a toujours ${a}.`
			}, !1));
		}
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/compareNumerals.ts
var ls = {
	en: "BIGGER",
	fr: "PLUS GRAND"
}, us = {
	en: "SMALLER",
	fr: "PLUS PETIT"
};
function ds(e, t, n = 1, r = 99) {
	let i = [];
	for (let a = e; a <= t; a++) for (let e = a + n; e <= Math.min(t, a + r); e++) i.push([a, e]);
	return i;
}
function fs() {
	let e = [], t = (t, n, r, i) => {
		let a = i ? us : ls, o = String(i ? n : r), s = String(i ? r : n);
		e.push(M(t, {
			prompt: `Which number is ${a.en}?`,
			options: [o, s]
		}, {
			prompt: `Quel nombre est ${a.fr} ?`,
			options: [o, s]
		}));
	};
	for (let [e, n] of ds(1, 5)) t(1, e, n, !1), t(1, e, n, !0);
	ds(0, 10).forEach(([e, n], r) => t(2, e, n, r % 2 == 1));
	for (let [e, n] of ds(0, 10, 1, 2)) t(3, e, n, !1), t(3, e, n, !0);
	return L(e);
}
function ps() {
	let e = [], t = (t, n, r) => {
		let i = (n * 2 + r) % 3 == 0, [a, o] = (n + r) % 2 == 1 ? [r, n] : [n, r], s = i ? us : ls, c = String(i ? n : r), l = String(i ? r : n), u = `${a} ${o}`;
		e.push(M(t, {
			prompt: `${u}\n\nWhich is ${s.en}?`,
			options: [c, l]
		}, {
			prompt: `${u}\n\nLequel est ${s.fr} ?`,
			options: [c, l]
		}));
	};
	for (let [e, n] of ds(1, 5)) t(1, e, n);
	for (let [e, n] of ds(0, 10)) t(2, e, n);
	let n = {
		en: [
			"Bigger",
			"Smaller",
			"Same"
		],
		fr: [
			"Plus grand",
			"Plus petit",
			"Pareil"
		]
	};
	for (let t = 0; t <= 10; t++) for (let r of [
		0,
		1,
		2,
		3,
		-1,
		-2,
		-3
	]) {
		let i = t + r;
		if (i < 0 || i > 10) continue;
		let a = t > i ? 0 : t < i ? 1 : 2, o = `${t} ${i}`;
		e.push(M(3, {
			prompt: `${o}\n\nIs the first bigger, smaller or the same?`,
			options: n.en
		}, {
			prompt: `${o}\n\nLe premier est-il plus grand, plus petit ou pareil ?`,
			options: n.fr
		}, a));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/conservation.ts
function R(e, t, n) {
	return Array.from({ length: e }, () => t).join(n);
}
function ms() {
	let e = [], t = {
		en: "The two rows still have the same number.",
		fr: "Les deux rangées en ont toujours autant."
	};
	for (let n = 2; n <= 6; n++) {
		let r = F[n % F.length], i = R(n, r, ""), a = R(n, r, "  ");
		e.push(N(1, {
			en: `${i}\n\n${a}\n\n${t.en}`,
			fr: `${i}\n\n${a}\n\n${t.fr}`
		}, !0));
		let o = F[(n + 1) % F.length], s = R(n, o, "  ");
		e.push(N(2, {
			en: `${i}\n\n${s}\n\n${t.en}`,
			fr: `${i}\n\n${s}\n\n${t.fr}`
		}, !0));
		let c = R(Math.max(1, n - 1), o, " ");
		e.push(N(2, {
			en: `${i}\n\n${c}\n\n${t.en}`,
			fr: `${i}\n\n${c}\n\n${t.fr}`
		}, !1));
		let l = R(n + 1, r, " ");
		e.push(N(3, {
			en: `${i}\n\n${a}\n\nOne more was added after the claim.\n\n${l}\n\n${t.en}`,
			fr: `${i}\n\n${a}\n\nUn de plus a été ajouté après.\n\n${l}\n\n${t.fr}`
		}, !1));
	}
	return L(e);
}
function hs() {
	let e = [], t = {
		en: "Same",
		fr: "Pareil"
	}, n = {
		en: "Top row",
		fr: "Rangée du haut"
	}, r = {
		en: "Bottom row",
		fr: "Rangée du bas"
	};
	for (let i = 2; i <= 6; i++) {
		let a = F[i * 2 % F.length], o = F[(i * 2 + 1) % F.length], s = R(i, a, ""), c = R(i, o, ""), l = [
			t.en,
			n.en,
			r.en
		], u = [
			t.fr,
			n.fr,
			r.fr
		];
		e.push(M(1, {
			prompt: `${s}\n${c}\n\nWhich row has more?`,
			options: l
		}, {
			prompt: `${s}\n${c}\n\nQuelle rangée en a le plus ?`,
			options: u
		}));
		let d = R(i, a, "  "), f = R(i, o, "");
		e.push(M(2, {
			prompt: `${d}\n${f}\n\nWhich row has more?`,
			options: l
		}, {
			prompt: `${d}\n${f}\n\nQuelle rangée en a le plus ?`,
			options: u
		}));
	}
	for (let i = 2; i <= 6; i++) {
		let a = i - 1, o = F[i * 3 % F.length], s = F[(i * 3 + 1) % F.length], c = R(a, o, "   "), l = R(i, s, ""), u = [
			r.en,
			n.en,
			t.en
		], d = [
			r.fr,
			n.fr,
			t.fr
		];
		e.push(M(3, {
			prompt: `${c}\n${l}\n\nWhich row has more?`,
			options: u
		}, {
			prompt: `${c}\n${l}\n\nQuelle rangée en a le plus ?`,
			options: d
		}));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/countOn.ts
var gs = {
	1: [
		2,
		2,
		2,
		2,
		2
	],
	2: [
		4,
		5,
		6,
		4,
		5
	],
	3: [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10
	]
};
function _s() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) gs[t].forEach((n, r) => {
		let i = n + 1, a = `${F[(n * 5 + r) % F.length]} 🎒 (${n} inside)`;
		e.push(j(t, {
			en: `${a}\n\nStart counting at ${n}. What comes next?`,
			fr: `${a}\n\nCommence à compter à ${n}. Quel est le suivant ?`
		}, String(i), Wo(i, [n], 0, 12, n + r)));
	});
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/days.ts
var vs = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
], ys = [
	"lundi",
	"mardi",
	"mercredi",
	"jeudi",
	"vendredi",
	"samedi",
	"dimanche"
], bs = "🏫", xs = "🏠", Ss = {
	en: `${bs} school  ${xs} weekend`,
	fr: `${bs} école  ${xs} week-end`
};
function Cs(e, t) {
	return `${t % 7 >= 5 ? xs : bs} ${e[t % 7]}`;
}
var ws = (e) => Cs(vs, e), Ts = (e) => Cs(ys, e), Es = [
	0,
	1,
	2,
	3,
	4,
	5,
	6
];
function Ds() {
	let e = [], t = {
		1: [
			0,
			1,
			2
		],
		2: [
			0,
			1,
			2,
			3,
			4
		],
		3: [5, 6]
	};
	for (let n of [
		1,
		2,
		3
	]) for (let r of t[n]) for (let t = 0; t < 3; t++) {
		let i = [
			r,
			r + 1,
			r + 2
		], a = i.filter((e, n) => n !== t).map((e) => e % 7), o = i[t] % 7, s = Es.filter((e) => e !== o && !a.includes(e));
		for (let r = 0; r < s.length; r++) {
			let a = s.filter((e, t) => t !== r), c = (e) => i.map((n, r) => r === t ? "❓" : e(n)).join(" ");
			e.push(M(n, {
				prompt: `${c(ws)}\n\nWhich day is missing?\n${Ss.en}`,
				options: [o, ...a].map(ws)
			}, {
				prompt: `${c(Ts)}\n\nQuel jour manque ?\n${Ss.fr}`,
				options: [o, ...a].map(Ts)
			}));
		}
	}
	return L(e);
}
function Os() {
	let e = [], t = (t, n, r) => {
		let i = (n + (r ? 1 : 6)) % 7, a = (n + (r ? 6 : 1)) % 7, o = Es.filter((e) => e !== n && e !== i && e !== a);
		for (let s = 0; s < 3; s++) {
			let c = o.filter((e, t) => t !== s), l = t === 1 ? c : [a, ...c.slice(0, 2)], u = r ? {
				en: "AFTER",
				fr: "APRÈS"
			} : {
				en: "BEFORE",
				fr: "AVANT"
			}, d = s === 1 ? {
				en: `Today is ${vs[n]}. ${r ? "Tomorrow" : "Yesterday"} is...?`,
				fr: `Aujourd'hui, c'est ${ys[n]}. ${r ? "Demain, c'est" : "Hier, c'était"}...?`
			} : {
				en: `Which day comes ${u.en} ${vs[n]}?`,
				fr: `Quel jour vient ${u.fr} ${ys[n]} ?`
			};
			e.push(M(t, {
				prompt: `${ws(n)}\n\n${d.en}\n${Ss.en}`,
				options: [i, ...l].map(ws)
			}, {
				prompt: `${Ts(n)}\n\n${d.fr}\n${Ss.fr}`,
				options: [i, ...l].map(Ts)
			}));
		}
	};
	for (let e = 0; e < 4; e++) t(1, e, !0);
	for (let e = 1; e < 5; e++) t(1, e, !1);
	for (let e = 0; e < 6; e++) t(2, e, !0);
	for (let e = 1; e < 7; e++) t(2, e, !1);
	for (let e = 0; e < 7; e++) t(3, e, !0), t(3, e, !1);
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/decomposeFive.ts
var ks = [
	[0, 5],
	[1, 4],
	[2, 3],
	[3, 2],
	[4, 1],
	[5, 0]
];
function As() {
	let e = [], t = F[3];
	for (let [t, n] of ks) e.push(P(1, {
		en: `${t} and ___ make 5`,
		fr: `${t} et ___ font 5`
	}, {
		en: String(n),
		fr: String(n)
	})), e.push(P(2, {
		en: `___ and ${n} make 5`,
		fr: `___ et ${n} font 5`
	}, {
		en: String(t),
		fr: String(t)
	})), e.push(P(2, {
		en: `${t} and ___ make 5`,
		fr: `${t} et ___ font 5`
	}, {
		en: String(n),
		fr: String(n)
	}));
	for (let [n, r] of ks) e.push(P(3, {
		en: `${t.repeat(n)} ${t.repeat(r)}\n\nHow do these two groups split 5? ___`,
		fr: `${t.repeat(n)} ${t.repeat(r)}\n\nComment ces deux groupes partagent-ils 5 ? ___`
	}, {
		en: `${n} and ${r}`,
		fr: `${n} et ${r}`
	}));
	return L(e);
}
function js() {
	let e = [], t = (e, t) => `${e} + ${t}`, n = [[1, 4], [2, 3]];
	for (let r of [
		1,
		2,
		3
	]) for (let [i, a] of ks) {
		let o = [i, a].sort((e, t) => e - t).join("-"), s = n.find(([e, t]) => [e, t].sort((e, t) => e - t).join("-") !== o), c = [
			t(s[0], s[1]),
			t(i, a),
			"1 + 5",
			"2 + 2"
		];
		new Set(c).size < c.length || e.push(M(r, {
			prompt: `${i} + ${a} = 5.\n\nWhich is a DIFFERENT way to make 5?`,
			options: c
		}, {
			prompt: `${i} + ${a} = 5.\n\nQuelle est une AUTRE façon de faire 5 ?`,
			options: c
		}));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/flashDots.ts
var Ms = [
	"⚀",
	"⚁",
	"⚂",
	"⚃",
	"⚄"
], Ns = [
	"⭐",
	"🍎",
	"🐟",
	"🎈"
], Ps = [
	"  ",
	"    ",
	"\xA0",
	"   ",
	" "
], Fs = {
	en: "How many?",
	fr: "Combien ?"
}, Is = [
	1,
	2,
	3,
	4,
	5
], Ls = 3;
function Rs(e) {
	return {
		en: `${e}\n\n${Fs.en}`,
		fr: `${e}\n\n${Fs.fr}`
	};
}
function zs(e, t) {
	let n = "●".repeat(e) + "○".repeat(5 - e), r = "○".repeat(5), i = "○".repeat(5 - e) + "●".repeat(e);
	switch (t % Ls) {
		case 0: return `${n}\n${r}`;
		case 1: return `${i}\n${r}`;
		default: return `${r}\n${n}`;
	}
}
function Bs(e, t, n) {
	let r = t;
	for (let i = 1; i < e; i++) r += Ps[(i + n * 2) % Ps.length] + t;
	return r;
}
function Vs() {
	let e = [];
	for (let t of Is) {
		let n = Vo(t, 1, 5, 3, 3), r = (e) => n[e % n.length];
		e.push(j(1, Rs(Ms[t - 1]), String(t), r(0)));
		for (let n = 0; n < Ls; n++) e.push(j(2, Rs(zs(t, n)), String(t), r(n)));
		Ns.forEach((n, i) => {
			e.push(j(3, Rs(Bs(t, n, i)), String(t), r(i)));
		});
	}
	return e;
}
//#endregion
//#region packages/syllabus-content-p/src/banks/missingItem.ts
var Hs = [
	"🔵",
	"🟥",
	"🔺",
	"⭐",
	"❤️",
	"🌙",
	"🍎",
	"🐟"
], Us = {
	1: [[0, 1]],
	2: [[
		0,
		0,
		1
	], [
		0,
		1,
		1
	]],
	3: [[
		0,
		1,
		2
	]]
};
function Ws() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) for (let n = 0; n < Hs.length; n++) for (let r of Us[t]) {
		let i = Math.max(...r) + 1, a = Array.from({ length: i }, (e, t) => Hs[(n + t) % Hs.length]), o = (e) => a[r[e % r.length]], s = r.length * 3, c = r.length + Math.floor(r.length / 2), l = Array.from({ length: s }, (e, t) => t === c ? "❓" : o(t)), u = o(c), d = a.filter((e) => e !== u), f = l.join(" ");
		e.push(j(t, {
			en: `${f}\n\nWhich one fills the gap?`,
			fr: `${f}\n\nLequel comble le vide ?`
		}, u, d));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/measurement.ts
function Gs(e, t, n) {
	let r = [];
	for (let i = 0; i < e; i++) for (let a = i + t; a <= Math.min(e - 1, i + n); a++) r.push([i, a]);
	return r;
}
function Ks(e, t, n) {
	let r = [];
	for (let { level: i, low: a, high: o } of t) Gs(e.length, a, o).forEach(([t, a], o) => {
		n.forEach((n, s) => {
			let c = ((o + s) % 2 == 0 ? [e[t], e[a]] : [e[a], e[t]]).join("  "), l = n.larger ? e[a] : e[t], u = n.larger ? e[t] : e[a];
			r.push(M(i, {
				prompt: `${c}\n\n${n.en}`,
				options: [l, u]
			}, {
				prompt: `${c}\n\n${n.fr}`,
				options: [l, u]
			}));
		});
	});
	return L(r);
}
var qs = [
	"🪶",
	"🐭",
	"🍎",
	"🐱",
	"🚲",
	"🚗",
	"🐘",
	"🚢"
], Js = [
	"🥄",
	"🍶",
	"🥛",
	"🥤",
	"🫖",
	"🪣",
	"🛁",
	"🏊"
], Ys = [{
	en: "Which is HEAVIER?",
	fr: "Lequel est le PLUS LOURD ?",
	larger: !0
}, {
	en: "Which is LIGHTER?",
	fr: "Lequel est le PLUS LÉGER ?",
	larger: !1
}], Xs = [{
	en: "Which can hold MORE water?",
	fr: "Lequel peut contenir PLUS d'eau ?",
	larger: !0
}, {
	en: "Which can hold LESS water?",
	fr: "Lequel peut contenir MOINS d'eau ?",
	larger: !1
}];
function Zs() {
	return Ks(qs, [
		{
			level: 1,
			low: 4,
			high: 7
		},
		{
			level: 2,
			low: 3,
			high: 3
		},
		{
			level: 3,
			low: 2,
			high: 2
		}
	], Ys);
}
function Qs() {
	return Ks(Js, [
		{
			level: 1,
			low: 4,
			high: 7
		},
		{
			level: 2,
			low: 3,
			high: 3
		},
		{
			level: 3,
			low: 2,
			high: 2
		}
	], Xs);
}
var $s = [{
	emoji: "🟥",
	en: "Red",
	fr: "Rouge"
}, {
	emoji: "🟦",
	en: "Blue",
	fr: "Bleu"
}];
function ec() {
	let e = [];
	for (let { level: t, low: n, high: r, staggered: i } of [
		{
			level: 1,
			low: 3,
			high: 6,
			staggered: !1
		},
		{
			level: 2,
			low: 1,
			high: 2,
			staggered: !0
		},
		{
			level: 3,
			low: 1,
			high: 1,
			staggered: !0
		}
	]) Gs(7, n, r).forEach(([n, r], a) => {
		let o = n + 2, s = r + 2;
		[0, 1].forEach((n) => {
			let [r, c] = n === 0 ? [$s[0], $s[1]] : [$s[1], $s[0]], l = r.emoji.repeat(s), u = (i ? "⬜".repeat(s - o) : "") + c.emoji.repeat(o), d = (a + n) % 2 == 0 ? [l, u] : [u, l], f = (a + n) % 2 == 1, p = f ? c : r, m = f ? r : c, h = f ? {
				en: "SHORTER",
				fr: "PLUS COURT"
			} : {
				en: "LONGER",
				fr: "PLUS LONG"
			}, g = d.join("\n");
			e.push(M(t, {
				prompt: `${g}\n\nWhich is ${h.en}?`,
				options: [`${p.emoji} ${p.en}`, `${m.emoji} ${m.en}`]
			}, {
				prompt: `${g}\n\nLequel est ${h.fr} ?`,
				options: [`${p.emoji} ${p.fr}`, `${m.emoji} ${m.fr}`]
			}));
		});
	});
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/movement.ts
var z = {
	forward: {
		en: "Forward",
		fr: "Avance"
	},
	back: {
		en: "Back",
		fr: "Recule"
	},
	up: {
		en: "Up",
		fr: "Monte"
	},
	down: {
		en: "Down",
		fr: "Descend"
	}
}, tc = "🤖", nc = "🎯";
function rc() {
	let e = [];
	for (let t = 1; t <= 5; t++) {
		let n = t % 2 == 0, r = n ? `${tc}${"⬜".repeat(t)}${nc}` : `${nc}${"⬜".repeat(t)}${tc}`, i = n ? z.forward : z.back, a = n ? z.back : z.forward;
		e.push(M(1, {
			prompt: `${r}\n\nWhich instruction moves the robot to the target?`,
			options: [i.en, a.en]
		}, {
			prompt: `${r}\n\nQuelle instruction amène le robot à la cible ?`,
			options: [i.fr, a.fr]
		}));
	}
	for (let t = 1; t <= 5; t++) {
		let n = t % 2 == 0, r = Array.from({ length: t + 1 }, (e, r) => n ? r === t ? nc : r === 0 ? tc : "⬜" : r === t ? tc : r === 0 ? nc : "⬜").join("\n"), i = n ? z.up : z.down, a = n ? z.down : z.up;
		e.push(M(2, {
			prompt: `${r}\n\nWhich instruction moves the robot to the target?`,
			options: [i.en, a.en]
		}, {
			prompt: `${r}\n\nQuelle instruction amène le robot à la cible ?`,
			options: [i.fr, a.fr]
		}));
	}
	let t = [z.forward, z.back], n = [z.up, z.down];
	for (let r of t) for (let t of n) for (let n of [1, 2]) {
		let i = `${r.en} then ${t.en}`, a = `${r.fr} puis ${t.fr}`, o = `${t.en} then ${r.en}`, s = `${t.fr} puis ${r.fr}`, c = r === z.forward ? z.back : z.forward, l = `${c.en} then ${t.en}`, u = `${c.fr} puis ${t.fr}`, d = `${tc} ${"➡️".repeat(n) + (t === z.up ? "⬆️" : "⬇️").repeat(n)} ${nc}`;
		e.push(M(3, {
			prompt: `${d}\n\nWhich two-step instruction reaches the target?`,
			options: [
				i,
				o,
				l
			]
		}, {
			prompt: `${d}\n\nQuelle instruction en deux étapes atteint la cible ?`,
			options: [
				a,
				s,
				u
			]
		}));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/moreFewer.ts
function ic(e, t) {
	let n = (e * 3 + t) % F.length;
	return [F[n], F[(n + 1 + e % 3) % F.length]];
}
function ac(e, t, n, r) {
	let i = [];
	for (let a = e; a <= t; a++) for (let e = a + n; e <= Math.min(t, a + r); e++) i.push([a, e]);
	return i;
}
function oc(e, t, n, r, i = qo) {
	if (!n) return Ko(Array.from({ length: e }, () => t), i);
	let a = [];
	for (let n = e, i = 0; n > 0; n -= 5, i++) a.push(Bs(Math.min(5, n), t, r + i));
	return a.join(i);
}
function sc() {
	let e = [], t = [
		{
			level: 1,
			pairs: ac(1, 10, 3, 9),
			scatter: !1
		},
		{
			level: 2,
			pairs: ac(1, 10, 1, 2),
			scatter: !0
		},
		{
			level: 3,
			pairs: ac(1, 10, 1, 4),
			scatter: !0
		}
	];
	for (let { level: n, pairs: r, scatter: i } of t) r.forEach(([t, r], a) => {
		let [o, s] = ic(t, r);
		for (let c of [!1, !0]) {
			let l = (a + +!!c) % 2 == 0, u = oc(t, l ? o : s, i, a), d = oc(r, l ? s : o, i, a + 1), f = c ? {
				en: "FEWER",
				fr: "MOINS"
			} : {
				en: "MORE",
				fr: "PLUS"
			}, p = c ? u : d, m = c ? d : u;
			e.push(M(n, {
				prompt: `Which has ${f.en}?`,
				options: [p, m]
			}, {
				prompt: `Lequel en a ${f.fr} ?`,
				options: [p, m]
			}));
		}
	});
	return L(e);
}
function cc() {
	let e = [], t = {
		en: "They have the same number.",
		fr: "Ils en ont autant."
	}, n = [
		{
			level: 1,
			max: 8,
			scatter: !1,
			diffOf: (e, t) => 3 + t % 2
		},
		{
			level: 2,
			max: 8,
			scatter: !0,
			diffOf: (e, t) => (e <= 5 ? 1 : 2) + +(t === 2 && e <= 4)
		},
		{
			level: 3,
			max: 10,
			scatter: !0,
			diffOf: (e, t) => 1 + t
		}
	];
	for (let { level: r, max: i, scatter: a, diffOf: o } of n) for (let n = 1; n <= i; n++) for (let s = 0; s < 3; s++) {
		let c = o(n, s), l = n + c <= i ? n + c : n - c, [u, d] = ic(n, l + s), f = s === 1, p = (e, i) => {
			let o = oc(n, u, a, s, "\n"), c = oc(e, f ? u : d, a, s + 1, "\n");
			return N(r, {
				en: `${o}\n\n${c}\n\n${t.en}`,
				fr: `${o}\n\n${c}\n\n${t.fr}`
			}, i);
		};
		e.push(p(n, !0), p(l, !1));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/nameTheRule.ts
var lc = [
	{
		members: [
			"🍎",
			"🍌",
			"🍇",
			"🍓"
		],
		nameEn: "fruit",
		nameFr: "des fruits"
	},
	{
		members: [
			"🐶",
			"🐱",
			"🐭",
			"🐰"
		],
		nameEn: "animals",
		nameFr: "des animaux"
	},
	{
		members: [
			"🔴",
			"🔵",
			"🟢",
			"🟡"
		],
		nameEn: "circles",
		nameFr: "des cercles"
	},
	{
		members: [
			"🟥",
			"🟦",
			"🟩",
			"🟨"
		],
		nameEn: "squares",
		nameFr: "des carrés"
	},
	{
		members: [
			"🚗",
			"🚕",
			"🚙",
			"🚌"
		],
		nameEn: "vehicles",
		nameFr: "des véhicules"
	},
	{
		members: [
			"🐟",
			"🐠",
			"🐡",
			"🦈"
		],
		nameEn: "sea animals",
		nameFr: "des animaux marins"
	}
];
function uc() {
	let e = [];
	return lc.forEach((t, n) => {
		let r = t.members.slice(0, 3).join(" "), i = lc.filter((e, t) => t !== n), a = i[n % i.length];
		e.push(M(1, {
			prompt: `${r}\n\nWhat do these have in common?`,
			options: [t.nameEn, a.nameEn]
		}, {
			prompt: `${r}\n\nQu'ont-ils en commun ?`,
			options: [t.nameFr, a.nameFr]
		}));
		let o = [i[n % i.length], i[(n + 1) % i.length]], s = [t.nameEn, ...o.map((e) => e.nameEn)], c = [t.nameFr, ...o.map((e) => e.nameFr)];
		new Set(s).size === s.length && e.push(M(2, {
			prompt: `${r}\n\nWhat do these have in common?`,
			options: s
		}, {
			prompt: `${r}\n\nQu'ont-ils en commun ?`,
			options: c
		}));
		let l = lc[(n + 2) % lc.length].members[0], u = [
			t.nameEn,
			l,
			i[(n + 3) % i.length].nameEn
		];
		new Set(u).size === u.length && e.push(M(3, {
			prompt: `${r}\n\nWhat do these have in common?`,
			options: u
		}, {
			prompt: `${r}\n\nQu'ont-ils en commun ?`,
			options: [
				t.nameFr,
				l,
				i[(n + 3) % i.length].nameFr
			]
		}));
	}), L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/numberHunt.ts
var dc = {
	0: [6, 8],
	1: [7, 4],
	2: [5, 7],
	3: [8, 5],
	4: [9, 1],
	5: [2, 6],
	6: [9, 0],
	7: [1, 2],
	8: [3, 0],
	9: [6, 4]
};
function fc(e) {
	return {
		en: `Find ${e}.`,
		fr: `Trouve le ${e}.`
	};
}
function pc(e, t, n) {
	let r = [
		...dc[t],
		...dc[n],
		...dc[e]
	];
	return [...new Set(r)].filter((r) => r !== e && r !== t && r !== n && !Ro([
		e,
		t,
		n,
		r
	]));
}
function mc() {
	let e = [];
	for (let t = 0; t <= 9; t++) {
		if (t >= 1 && t <= 5) for (let n of Vo(t, 1, 5, 3, 3)) e.push(j(1, fc(t), String(t), n));
		for (let n of Vo(t, 0, 9, 3, 3)) e.push(j(2, fc(t), String(t), n));
		let [n, r] = dc[t];
		for (let i of pc(t, n, r).slice(0, 3)) e.push(j(3, fc(t), String(t), [
			String(n),
			String(r),
			String(i)
		]));
	}
	return e;
}
//#endregion
//#region packages/syllabus-content-p/src/banks/numeralFormation.ts
var hc = {
	2: "🪞2🪞",
	3: "🪞3🪞",
	5: "🪞5🪞",
	7: "🪞7🪞",
	6: "9",
	9: "6"
}, gc = {
	1: [
		2,
		3,
		5,
		0,
		1
	],
	2: [
		2,
		3,
		5,
		6,
		9,
		7,
		0,
		1,
		4,
		8
	],
	3: [
		2,
		3,
		5,
		6,
		9,
		7
	]
};
function _c(e, t) {
	return [
		"0",
		"1",
		"4",
		"8"
	].filter((t) => !e.has(t)).slice(0, t);
}
function vc() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) for (let n of gc[t]) {
		let r = String(n), i = hc[n], a = i ? [
			r,
			i,
			..._c(/* @__PURE__ */ new Set([r, i]), t === 1 ? 1 : 2)
		] : [r, ..._c(/* @__PURE__ */ new Set([r]), 3)];
		new Set(a).size < a.length || e.push(M(t, {
			prompt: "Which one is written the right way round?",
			options: a
		}, {
			prompt: "Lequel est écrit dans le bon sens ?",
			options: a
		}));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/numeralTwins.ts
var yc = [
	(e) => String(e),
	Go,
	(e) => `⭐ ${e} ⭐`
], bc = {
	0: [
		6,
		8,
		9
	],
	1: [
		7,
		4,
		2
	],
	2: [
		5,
		7,
		3
	],
	3: [
		8,
		5,
		2
	],
	4: [
		9,
		1,
		7
	],
	5: [
		2,
		6,
		3
	],
	6: [
		9,
		0,
		5
	],
	7: [
		1,
		2,
		4
	],
	8: [
		3,
		0,
		6
	],
	9: [
		6,
		4,
		0
	]
};
function xc(e) {
	return {
		en: `Is this a ${e}?`,
		fr: `C'est bien le ${e} ?`
	};
}
function Sc(e, t, n) {
	if (e === 3) return bc[t][n];
	let [r, i] = e === 1 ? [1, 5] : [0, 10], a = [
		2,
		3,
		4
	][n] + +(e === 2);
	return r + (t - r + a) % i;
}
function Cc() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) {
		let n = t === 1 ? [
			1,
			2,
			3,
			4,
			5
		] : [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		];
		for (let r of n) yc.forEach((n, i) => {
			let a = n(r), o = xc(r), s = xc(Sc(t, r, i));
			e.push(N(t, {
				en: `${a}\n\n${o.en}`,
				fr: `${a}\n\n${o.fr}`
			}, !0), N(t, {
				en: `${a}\n\n${s.en}`,
				fr: `${a}\n\n${s.fr}`
			}, !1));
		});
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/ordinals.ts
var wc = [
	"1st",
	"2nd",
	"3rd",
	"4th",
	"5th"
], Tc = [
	"1er",
	"2e",
	"3e",
	"4e",
	"5e"
];
function Ec(e, t, n) {
	let r = Array.from({ length: e }, (e, n) => F[(t + n) % F.length]);
	return n ? r.slice().reverse() : r;
}
function Dc() {
	let e = [];
	for (let { level: t, size: n, reversed: r } of [
		{
			level: 1,
			size: 3,
			reversed: !1
		},
		{
			level: 2,
			size: 5,
			reversed: !1
		},
		{
			level: 3,
			size: 5,
			reversed: !0
		}
	]) for (let i = 0; i < F.length; i += 2) {
		let a = Ec(n, i, r);
		for (let r = 1; r <= n; r++) {
			let n = a[r - 1], i = a.filter((e) => e !== n), o = a.join(" ");
			e.push(M(t, {
				prompt: `${o}\n\nWhich one is ${wc[r - 1]}?`,
				options: [n, ...i]
			}, {
				prompt: `${o}\n\nLequel est le ${Tc[r - 1]} ?`,
				options: [n, ...i]
			}));
		}
	}
	return L(e);
}
function Oc() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) {
		let n = t === 1 ? 3 : 5;
		for (let r = 0; r < F.length; r++) {
			let i = Ec(n, r, t === 3), a = i.join(" "), o = r % n + 1, s = i[o - 1], c = i.filter((e) => e !== s);
			e.push(M(t, {
				prompt: `${a}\n\nWhich one is ${wc[o - 1]}?`,
				options: [s, ...c]
			}, {
				prompt: `${a}\n\nLequel est le ${Tc[o - 1]} ?`,
				options: [s, ...c]
			}));
			let l = [
				String(n),
				String(n + 1),
				String(Math.max(1, n - 1))
			];
			e.push(M(t, {
				prompt: `${a}\n\nHow many are there?`,
				options: l
			}, {
				prompt: `${a}\n\nCombien y en a-t-il ?`,
				options: l
			}));
		}
	}
	return L(e);
}
var kc = {
	1: {
		n: 2,
		total: 3
	},
	2: {
		n: 3,
		total: 5
	},
	3: {
		n: 4,
		total: 5
	}
};
function Ac() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) {
		let { n, total: r } = kc[t];
		for (let i = 0; i < F.length; i++) {
			let a = Ec(r, i, !1), o = a[n - 1], s = a.filter((e) => e !== o), c = a.join(" ");
			e.push(M(t, {
				prompt: `${c}\n\nWhich one would you colour to show the ${wc[n - 1]}?`,
				options: [o, ...s]
			}, {
				prompt: `${c}\n\nLequel colorierais-tu pour montrer le ${Tc[n - 1]} ?`,
				options: [o, ...s]
			}));
		}
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/orderBySize.ts
var jc = [
	"🔴",
	"🟦",
	"⭐",
	"🟢",
	"🔺",
	"🟪"
];
function Mc(e, t) {
	return e.repeat(t);
}
function Nc() {
	let e = [], t = {
		1: {
			en: "small",
			fr: "petit"
		},
		2: {
			en: "medium",
			fr: "moyen"
		},
		3: {
			en: "large",
			fr: "grand"
		}
	};
	for (let n of [
		1,
		2,
		3
	]) jc.forEach((r, i) => {
		let a = [
			[
				1,
				2,
				3
			],
			[
				3,
				1,
				2
			],
			[
				2,
				3,
				1
			]
		], o = a[i % a.length], s = o.map((e) => Mc(r, e)), c = Mc(r, 2), l = s.filter((e) => e !== c), u = n === 1 ? s.join("   ") : s.join(" "), d = n >= 2 ? `\n(${t[o[0]].en} / ${t[o[1]].en} / ${t[o[2]].en})` : "", f = n >= 2 ? `\n(${t[o[0]].fr} / ${t[o[1]].fr} / ${t[o[2]].fr})` : "";
		e.push(M(n, {
			prompt: `${u}${d}\n\nWhich one goes in the middle when ordered by size?`,
			options: [c, ...l]
		}, {
			prompt: `${u}${f}\n\nLequel va au milieu si on les ordonne par taille ?`,
			options: [c, ...l]
		}));
	});
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/patterns.ts
var Pc = [
	"🔵",
	"🟥",
	"🔺",
	"⭐",
	"❤️",
	"🌙",
	"🍎",
	"🐟"
], Fc = {
	1: [[0, 1]],
	2: [[
		0,
		0,
		1
	], [
		0,
		1,
		1
	]],
	3: [[
		0,
		1,
		2
	]]
}, Ic = {
	1: [7, 8],
	2: [10, 11],
	3: [10, 11]
};
function Lc(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 5) t.push(e.slice(n, n + 5).join(" "));
	return t.join("\n");
}
function Rc() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) for (let n = 0; n < Pc.length; n++) for (let r of Fc[t]) for (let i of [
		1,
		2,
		3
	]) for (let a of Ic[t]) {
		let o = Math.max(...r) + 1, s = Array.from({ length: o }, (e, t) => Pc[(n + t * i) % Pc.length]), c = (e) => s[r[e % r.length]], l = Array.from({ length: a }, (e, t) => c(t)), u = c(a), d = s.filter((e) => e !== u), f = Pc.filter((e) => !s.includes(e)).slice(0, 3 - d.length), p = Lc([...l, "❓"]);
		e.push(j(t, {
			en: `${p}\n\nWhich one comes next?`,
			fr: `${p}\n\nQuelle forme vient ensuite ?`
		}, u, [...d, ...f]));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/partsOfDay.ts
var zc = [
	{
		glyph: "🥣",
		en: "eating breakfast",
		fr: "prendre le petit-déjeuner",
		part: "morning"
	},
	{
		glyph: "🎒",
		en: "going to school",
		fr: "aller à l'école",
		part: "morning"
	},
	{
		glyph: "🍽️",
		en: "eating lunch",
		fr: "déjeuner",
		part: "afternoon"
	},
	{
		glyph: "🏃",
		en: "playing outside",
		fr: "jouer dehors",
		part: "afternoon"
	},
	{
		glyph: "🍝",
		en: "eating dinner",
		fr: "dîner",
		part: "evening"
	},
	{
		glyph: "🛁",
		en: "taking a bath",
		fr: "prendre un bain",
		part: "evening"
	},
	{
		glyph: "🌙",
		en: "sleeping",
		fr: "dormir",
		part: "night"
	},
	{
		glyph: "⭐",
		en: "looking at stars",
		fr: "regarder les étoiles",
		part: "night"
	}
], Bc = {
	morning: {
		en: "Morning",
		fr: "Matin"
	},
	afternoon: {
		en: "Afternoon",
		fr: "Après-midi"
	},
	evening: {
		en: "Evening",
		fr: "Soir"
	},
	night: {
		en: "Night",
		fr: "Nuit"
	}
}, Vc = "☀️", Hc = "🌙";
function Uc() {
	let e = [];
	for (let t of zc) {
		let n = t.part !== "night", r = n ? Vc : Hc, i = n ? Hc : Vc;
		e.push(M(1, {
			prompt: `${t.glyph} ${t.en}\n\nDoes this happen when it's sunny or when it's dark?`,
			options: [r, i]
		}, {
			prompt: `${t.glyph} ${t.fr}\n\nCela se passe-t-il quand il fait soleil ou quand il fait nuit ?`,
			options: [r, i]
		}));
	}
	let t = [
		"morning",
		"afternoon",
		"evening"
	];
	for (let n of zc.filter((e) => t.includes(e.part))) {
		let r = t.map((e) => Bc[e].en), i = t.map((e) => Bc[e].fr), a = t.indexOf(n.part), o = [r[a], ...r.filter((e, t) => t !== a)], s = [i[a], ...i.filter((e, t) => t !== a)];
		e.push(M(2, {
			prompt: `${n.glyph} ${n.en}\n\nWhich part of the day is this?`,
			options: o
		}, {
			prompt: `${n.glyph} ${n.fr}\n\nQuel moment de la journée est-ce ?`,
			options: s
		}));
	}
	let n = [
		"morning",
		"afternoon",
		"evening",
		"night"
	];
	for (let t of zc) {
		let r = n.map((e) => Bc[e].en), i = n.map((e) => Bc[e].fr), a = n.indexOf(t.part), o = [r[a], ...r.filter((e, t) => t !== a)], s = [i[a], ...i.filter((e, t) => t !== a)];
		e.push(M(3, {
			prompt: `${t.glyph} ${t.en}\n\nWhich part of the day is this?`,
			options: o
		}, {
			prompt: `${t.glyph} ${t.fr}\n\nQuel moment de la journée est-ce ?`,
			options: s
		}));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/position.ts
var Wc = {
	on: {
		en: "on",
		fr: "sur"
	},
	under: {
		en: "under",
		fr: "sous"
	},
	next: {
		en: "next to",
		fr: "à côté de"
	},
	in: {
		en: "in",
		fr: "dans"
	},
	between: {
		en: "between",
		fr: "entre"
	},
	above: {
		en: "above",
		fr: "au-dessus de"
	},
	below: {
		en: "below",
		fr: "en dessous de"
	}
}, Gc = {
	1: [
		"on",
		"under",
		"next"
	],
	2: [
		"in",
		"next",
		"on",
		"under"
	],
	3: [
		"between",
		"above",
		"below"
	]
}, Kc = {
	1: ["on", "under"],
	2: ["in", "next"],
	3: [
		"between",
		"above",
		"below"
	]
}, qc = [
	{
		emoji: "🐱",
		en: "cat",
		fr: "le chat"
	},
	{
		emoji: "🐶",
		en: "dog",
		fr: "le chien"
	},
	{
		emoji: "🐥",
		en: "chick",
		fr: "le poussin"
	},
	{
		emoji: "🧸",
		en: "teddy bear",
		fr: "l'ours en peluche"
	},
	{
		emoji: "🐸",
		en: "frog",
		fr: "la grenouille"
	},
	{
		emoji: "🐰",
		en: "rabbit",
		fr: "le lapin"
	}
], Jc = "📦", Yc = "🪑", Xc = "\n \n \n";
function Zc(e) {
	let t = "🟫🟫🟫";
	return `${t}\n🟫${e}🟫\n${t}`;
}
function Qc(e, t, n, r) {
	switch (e) {
		case "on": return `${t}\n${n}`;
		case "under": return `${n}\n${t}`;
		case "next": return `${t}  ${n}`;
		case "in": return Zc(t);
		case "between": return `${n} ${t} ${r}`;
		case "above": return `${t}${Xc}${n}`;
		case "below": return `${n}${Xc}${t}`;
	}
}
function $c() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) for (let n of Kc[t]) {
		let r = n === "in" ? [[Jc, Yc]] : [[Jc, Yc], [Yc, Jc]];
		for (let i of qc) for (let [a, o] of r) {
			let r = Qc(n, i.emoji, a, o), s = [n, ...Gc[t].filter((e) => e !== n)];
			e.push(M(t, {
				prompt: `${r}\n\nWhere is the ${i.en}?`,
				options: s.map((e) => Wc[e].en)
			}, {
				prompt: `${r}\n\nOù est ${i.fr} ?`,
				options: s.map((e) => Wc[e].fr)
			}));
		}
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/shapes.ts
var el = [
	"circle",
	"square",
	"triangle",
	"rectangle"
], tl = {
	circle: {
		en: "circle",
		fr: "cercle"
	},
	square: {
		en: "square",
		fr: "carré"
	},
	triangle: {
		en: "triangle",
		fr: "triangle"
	},
	rectangle: {
		en: "rectangle",
		fr: "rectangle"
	}
}, nl = {
	1: {
		circle: [
			"🔴",
			"🟡",
			"🟢"
		],
		square: [
			"🟥",
			"🟨",
			"🟩"
		],
		triangle: [
			"🔺",
			"🔺",
			"🔺"
		],
		rectangle: [
			"▭",
			"▭",
			"▭"
		]
	},
	2: {
		circle: [
			"⚫",
			"⚪",
			"🟤"
		],
		square: [
			"⬛",
			"⬜",
			"🟫"
		],
		triangle: [
			"🔻",
			"🔻",
			"🔻"
		],
		rectangle: [
			"▯",
			"▯",
			"▯"
		]
	},
	3: {
		circle: [
			"🟠",
			"🟣",
			"🔵"
		],
		square: [
			"🟧",
			"🟪",
			"🟦"
		],
		triangle: [
			"🔺",
			"🔻",
			"🔺"
		],
		rectangle: [
			"▭",
			"▯",
			"▭"
		]
	}
}, rl = [(e) => ({
	en: `Find the ${e.en}.`,
	fr: `Trouve le ${e.fr}.`
}), (e) => ({
	en: `Tap the ${e.en}.`,
	fr: `Touche le ${e.fr}.`
})];
function il() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) for (let n of el) for (let r = 0; r < 3; r++) {
		let i = (e) => nl[t][e][r], a = el.filter((e) => e !== n).map(i);
		for (let r of rl) {
			let o = r(tl[n]), s = [i(n), ...a];
			e.push(M(t, {
				prompt: o.en,
				options: s
			}, {
				prompt: o.fr,
				options: s
			}));
		}
	}
	return L(e);
}
var al = {
	1: [
		"📱",
		"🚪",
		"🖼️",
		"📕",
		"📗",
		"📘",
		"📙",
		"✉️"
	],
	2: [
		"🪟",
		"📺",
		"💳",
		"📓",
		"📔",
		"📒",
		"🧱",
		"📄"
	],
	3: [
		"📏",
		"📱",
		"🚪",
		"🖼️",
		"📕",
		"📗",
		"🪟",
		"✉️"
	]
}, ol = {
	1: [
		"🔵",
		"🔴",
		"🟢",
		"🟣",
		"🔺",
		"🔻",
		"⭐",
		"🌟"
	],
	2: [
		"🟡",
		"🟠",
		"❤️",
		"💙",
		"🌙",
		"🍎",
		"🥚",
		"🔻"
	],
	3: [
		"🔶",
		"🔷",
		"🔸",
		"🔹",
		"🛑",
		"🔺",
		"🔻",
		"⭐"
	]
}, sl = [{
	en: "Is this a rectangle?",
	fr: "Est-ce un rectangle ?"
}, {
	en: "Is this shape a rectangle?",
	fr: "Cette forme est-elle un rectangle ?"
}];
function cl() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) al[t].forEach((n, r) => {
		let i = sl[r % 2];
		e.push(N(t, {
			en: `${n}\n\n${i.en}`,
			fr: `${n}\n\n${i.fr}`
		}, !0));
	}), ol[t].forEach((n, r) => {
		let i = sl[(r + 1) % 2];
		e.push(N(t, {
			en: `${n}\n\n${i.en}`,
			fr: `${n}\n\n${i.fr}`
		}, !1));
	});
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/showTheNumber.ts
var ll = 4;
function ul(e, t, n, r) {
	if (!n) return Ko(Array.from({ length: e }, () => t), qo);
	let i = [];
	for (let n = e, a = 0; n > 0; n -= 5, a++) i.push(Bs(Math.min(5, n), t, r + a));
	return i.join(qo);
}
function dl() {
	let e = [], t = (e) => ({
		en: `Which group shows ${e}?`,
		fr: `Quel groupe montre ${e} ?`
	}), n = (n, r, i, a, o) => {
		let s = (e) => F[(r + a * 3 + e * 5) % F.length];
		e.push(j(n, t(r), ul(r, s(0), o, a), i.map((e, t) => ul(e, s(t + 1), o, a + t + 1))));
	}, r = Array.from({ length: 10 }, (e, t) => t + 1);
	for (let e = 1; e <= 10; e++) e <= 5 && Bo(e, [
		1,
		2,
		3,
		4,
		5
	], 2, ll, (t) => t.every((t) => Math.abs(t - e) >= 2)).forEach((t, r) => n(1, e, t, r, !1)), Bo(e, r, 3, ll, (t) => t.some((t) => Math.abs(t - e) === 1)).forEach((t, r) => n(2, e, t, r, !1)), Bo(e, r, 3, ll, (t) => t.every((t) => Math.abs(t - e) <= 4)).forEach((t, r) => n(3, e, t, r, !0));
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/solids.ts
var B = [
	{
		solid: {
			en: "ball",
			fr: "balle",
			glyph: "⚽"
		},
		flat: {
			en: "circle",
			fr: "cercle",
			glyph: "🔴"
		}
	},
	{
		solid: {
			en: "cube",
			fr: "cube",
			glyph: "🎲"
		},
		flat: {
			en: "square",
			fr: "carré",
			glyph: "🟥"
		}
	},
	{
		solid: {
			en: "cone",
			fr: "cône",
			glyph: "🎉"
		},
		flat: {
			en: "triangle",
			fr: "triangle",
			glyph: "🔺"
		}
	},
	{
		solid: {
			en: "cylinder",
			fr: "cylindre",
			glyph: "🥫"
		},
		flat: {
			en: "rectangle",
			fr: "rectangle",
			glyph: "▭"
		}
	}
];
function fl() {
	let e = [], t = {
		1: B.slice(0, 2),
		2: B,
		3: B
	}, n = {
		en: "Solid (3D)",
		fr: "Solide (3D)"
	}, r = {
		en: "Flat (2D)",
		fr: "Plat (2D)"
	}, i = [{
		en: "Is this solid or flat?",
		fr: "Ceci est-il solide ou plat ?"
	}, {
		en: "Is this a solid shape or a flat shape?",
		fr: "Est-ce une forme solide ou une forme plate ?"
	}];
	for (let a of [
		1,
		2,
		3
	]) for (let o of t[a]) for (let t of [!0, !1]) for (let s of i) {
		let i = t ? o.solid : o.flat, c = t ? n : r, l = t ? r : n, u = a === 3 ? ` (${t ? o.flat.en : o.solid.en}?)` : "";
		e.push(M(a, {
			prompt: `${i.glyph}${u}\n\n${s.en}`,
			options: [c.en, l.en]
		}, {
			prompt: `${i.glyph}\n\n${s.fr}`,
			options: [c.fr, l.fr]
		}));
	}
	return L(e);
}
var pl = [{
	en: "What is this shape called?",
	fr: "Comment s'appelle cette forme ?"
}, {
	en: "Tap the name of this shape.",
	fr: "Touche le nom de cette forme."
}];
function ml() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) B.forEach((n, r) => {
		let i = B.filter((e, t) => t !== r).map((e) => e.solid.en), a = B.filter((e, t) => t !== r).map((e) => e.solid.fr);
		for (let r of pl) e.push(M(t, {
			prompt: `${n.solid.glyph}\n\n${r.en}`,
			options: [n.solid.en, ...i]
		}, {
			prompt: `${n.solid.glyph}\n\n${r.fr}`,
			options: [n.solid.fr, ...a]
		}));
	});
	return L(e);
}
function hl() {
	let e = {
		ball: {
			en: "🌍 the Earth",
			fr: "🌍 la Terre"
		},
		cube: {
			en: "🧊 an ice cube",
			fr: "🧊 un glaçon"
		},
		cone: {
			en: "🍦 an ice cream cone",
			fr: "🍦 un cornet de glace"
		},
		cylinder: {
			en: "🥤 a drink can",
			fr: "🥤 une canette"
		}
	}, t = [[
		"sphere",
		{
			en: "sphere",
			fr: "sphère"
		},
		{
			en: "🏐 a football",
			fr: "🏐 un ballon"
		}
	], [
		"pyramid",
		{
			en: "pyramid",
			fr: "pyramide"
		},
		{
			en: "🔺 a tent",
			fr: "🔺 une tente"
		}
	]], n = B.map((e) => e.solid), r = (t) => n.slice(0, t).map((t) => ({
		en: {
			left: t.en,
			right: e[t.en].en
		},
		fr: {
			left: t.fr,
			right: e[t.en].fr
		}
	}));
	return [
		Uo(1, r(4)),
		Uo(2, [...r(4), {
			en: {
				left: t[0][1].en,
				right: t[0][2].en
			},
			fr: {
				left: t[0][1].fr,
				right: t[0][2].fr
			}
		}]),
		Uo(3, [
			...r(4),
			{
				en: {
					left: t[0][1].en,
					right: t[0][2].en
				},
				fr: {
					left: t[0][1].fr,
					right: t[0][2].fr
				}
			},
			{
				en: {
					left: t[1][1].en,
					right: t[1][2].en
				},
				fr: {
					left: t[1][1].fr,
					right: t[1][2].fr
				}
			}
		])
	];
}
//#endregion
//#region packages/syllabus-content-p/src/banks/sidesCorners.ts
var gl = [
	{
		en: "triangle",
		fr: "triangle",
		glyph: "🔺",
		sides: 3,
		corners: 3
	},
	{
		en: "square",
		fr: "carré",
		glyph: "🟥",
		sides: 4,
		corners: 4
	},
	{
		en: "rectangle",
		fr: "rectangle",
		glyph: "▭",
		sides: 4,
		corners: 4
	},
	{
		en: "pentagon",
		fr: "pentagone",
		glyph: "⬠",
		sides: 5,
		corners: 5
	},
	{
		en: "hexagon",
		fr: "hexagone",
		glyph: "⬡",
		sides: 6,
		corners: 6
	},
	{
		en: "circle",
		fr: "cercle",
		glyph: "🔵",
		sides: 0,
		corners: 0
	}
], _l = {
	1: gl.filter((e) => e.sides === 3 || e.sides === 4),
	2: gl.filter((e) => e.sides > 0),
	3: gl
}, vl = [{
	en: "How many sides does this shape have",
	fr: "Combien de côtés cette forme a-t-elle"
}, {
	en: "Count the sides of this shape",
	fr: "Compte les côtés de cette forme"
}];
function yl() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) for (let n of _l[t]) for (let r of vl) e.push(Ho(t, {
		en: `${n.glyph}\n\n${r.en}`,
		fr: `${n.glyph}\n\n${r.fr}`
	}, n.sides));
	return L(e);
}
function bl() {
	let e = [], t = {
		en: "Sides",
		fr: "Côtés"
	}, n = {
		en: "Corners",
		fr: "Coins"
	};
	for (let r of [
		1,
		2,
		3
	]) for (let i of _l[r]) for (let a of [!0, !1]) {
		let o = a ? i.sides : i.corners, s = a ? t : n, c = a ? n : t;
		e.push(M(r, {
			prompt: `${i.glyph} has ${o}. Is that its sides or its corners?`,
			options: [s.en, c.en]
		}, {
			prompt: `${i.glyph} en a ${o}. Est-ce ses côtés ou ses coins ?`,
			options: [s.fr, c.fr]
		}));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/sorting.ts
var xl = [
	{
		glyph: "🔴",
		colour: "red",
		shape: "circle",
		size: "small"
	},
	{
		glyph: "🟥",
		colour: "red",
		shape: "square",
		size: "small"
	},
	{
		glyph: "🔵",
		colour: "blue",
		shape: "circle",
		size: "small"
	},
	{
		glyph: "🟦",
		colour: "blue",
		shape: "square",
		size: "small"
	},
	{
		glyph: "🟢",
		colour: "green",
		shape: "circle",
		size: "small"
	},
	{
		glyph: "🟩",
		colour: "green",
		shape: "square",
		size: "small"
	}
];
function Sl(e) {
	return `${e}${e}`;
}
function Cl() {
	let e = [], t = {
		red: [],
		blue: [],
		green: []
	};
	for (let e of xl) t[e.colour].push(e);
	let n = [
		"red",
		"blue",
		"green"
	];
	n.forEach((r, i) => {
		let a = t[r], o = n[(i + 1) % n.length], s = t[o][0], c = [
			a[0].glyph,
			a[1].glyph,
			s.glyph
		];
		e.push(M(1, {
			prompt: `${c.join(" ")}\n\nWhich one does NOT belong?`,
			options: [
				s.glyph,
				a[0].glyph,
				a[1].glyph
			]
		}, {
			prompt: `${c.join(" ")}\n\nLequel ne va PAS avec les autres ?`,
			options: [
				s.glyph,
				a[0].glyph,
				a[1].glyph
			]
		}));
	});
	for (let r = 0; r < 3; r++) {
		let i = t[n[r]], a = t[n[(r + 2) % 3]][1], o = [
			i[0].glyph,
			a.glyph,
			i[1].glyph
		];
		e.push(M(1, {
			prompt: `${o.join(" ")}\n\nWhich one does NOT belong?`,
			options: [
				a.glyph,
				i[0].glyph,
				i[1].glyph
			]
		}, {
			prompt: `${o.join(" ")}\n\nLequel ne va PAS avec les autres ?`,
			options: [
				a.glyph,
				i[0].glyph,
				i[1].glyph
			]
		}));
	}
	let r = {
		circle: [],
		square: [],
		star: [
			{
				glyph: "⭐",
				colour: "red",
				shape: "star",
				size: "small"
			},
			{
				glyph: "🌟",
				colour: "blue",
				shape: "star",
				size: "small"
			},
			{
				glyph: "✨",
				colour: "green",
				shape: "star",
				size: "small"
			}
		]
	};
	for (let e of xl) r[e.shape].push(e);
	let i = [
		"circle",
		"square",
		"star"
	];
	for (let t of i) {
		let n = r[t];
		for (let a of i.filter((e) => e !== t)) {
			let t = r[a][0], i = [
				n[0].glyph,
				t.glyph,
				n[1].glyph
			];
			e.push(M(2, {
				prompt: `${i.join(" ")}\n\nWhich one does NOT belong?`,
				options: [
					t.glyph,
					i[0],
					i[2]
				]
			}, {
				prompt: `${i.join(" ")}\n\nLequel ne va PAS avec les autres ?`,
				options: [
					t.glyph,
					i[0],
					i[2]
				]
			}));
		}
	}
	for (let t = 0; t < 5; t++) {
		let n = xl[t], r = xl.filter((e) => e !== n).slice(0, 3), i = [
			Sl(n.glyph),
			Sl(n.glyph),
			n.glyph,
			...r.slice(0, 2).map((e) => Sl(e.glyph))
		];
		e.push(M(3, {
			prompt: `${i.join(" ")}\n\nWhich one does NOT belong (by size)?`,
			options: [
				n.glyph,
				Sl(n.glyph),
				r[0].glyph
			]
		}, {
			prompt: `${i.join(" ")}\n\nLequel ne va PAS avec les autres (par taille) ?`,
			options: [
				n.glyph,
				Sl(n.glyph),
				r[0].glyph
			]
		}));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/storyProblems.ts
function wl() {
	let e = [], t = {
		1: 5,
		2: 8,
		3: 10
	};
	for (let n of [
		1,
		2,
		3
	]) {
		let r = t[n];
		for (let t = 1; t < r; t++) for (let i = 1; t + i <= r; i++) {
			let r = n === 1 ? [!0] : [!0, !1];
			for (let a of r) !a && i >= t || e.push({
				level: n,
				start: t,
				change: i,
				join: a,
				telegraphed: n !== 3
			});
		}
	}
	return e;
}
function Tl(e, t) {
	let n = F[(e.start + e.change) % F.length];
	return t === "en" ? e.join ? e.telegraphed ? `You have ${e.start} ${n}. You get ${e.change} more.` : `You have ${e.start} ${n}. Later, ${e.change} more show up.` : e.telegraphed ? `You have ${e.start} ${n}. You give away ${e.change}.` : `You have ${e.start} ${n}. Later, ${e.change} go away.` : e.join ? e.telegraphed ? `Tu as ${e.start} ${n}. Tu en reçois ${e.change} de plus.` : `Tu as ${e.start} ${n}. Plus tard, ${e.change} de plus arrivent.` : e.telegraphed ? `Tu as ${e.start} ${n}. Tu en donnes ${e.change}.` : `Tu as ${e.start} ${n}. Plus tard, ${e.change} s'en vont.`;
}
function El() {
	let e = [];
	for (let t of wl()) {
		let n = t.join ? "+" : "−", r = t.join ? "−" : "+";
		e.push(M(t.level, {
			prompt: `${Tl(t, "en")}\n\nDo you ADD or TAKE AWAY?`,
			options: [n, r]
		}, {
			prompt: `${Tl(t, "fr")}\n\nTu AJOUTES ou tu ENLÈVES ?`,
			options: [n, r]
		}));
	}
	return L(e);
}
function Dl() {
	let e = [];
	for (let t of wl()) {
		let n = t.join ? t.start + t.change : t.start - t.change;
		e.push(Ho(t.level, {
			en: `${Tl(t, "en")}\n\nHow many ${t.join ? "do you have now" : "are left"}`,
			fr: `${Tl(t, "fr")}\n\n${t.join ? "Combien en as-tu maintenant" : "Combien en reste-t-il"}`
		}, n));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/zero.ts
var Ol = {
	1: [
		3,
		3,
		3
	],
	2: [5, 5],
	3: [
		0,
		1,
		2,
		3,
		4,
		5
	]
};
function kl() {
	let e = [];
	for (let t of [
		1,
		2,
		3
	]) Ol[t].forEach((n, r) => {
		for (let i = n; i >= 0; i--) {
			let a = F[(n * 3 + i + r) % F.length], o = i === 0 ? `🧺 (empty, was ${a})` : `🧺 ${I(i, a)}`;
			e.push(j(t, {
				en: `${o}\n\nHow many are left in the basket?`,
				fr: `${o}\n\nCombien en reste-t-il dans le panier ?`
			}, String(i), Wo(i, [], 0, Math.max(n + 2, 6), i + r)));
		}
	});
	return L(e);
}
function Al() {
	let e = [];
	[
		"🧺",
		"📦",
		"🪣",
		"🥡",
		"🧃"
	].forEach((t, n) => {
		let r = n % 2 == 0 ? 0 : n % 4 + 1, i = r === 0 ? `${t} (empty)` : `${t} ${F[n].repeat(r)}`;
		e.push(N(1, {
			en: `${i}\n\nThere are zero here.`,
			fr: `${i}\n\nIl y en a zéro ici.`
		}, r === 0));
	}), [
		["📦", "🧺"],
		["🪣", "🥡"],
		["🧃", "📦"],
		["🧺", "🪣"],
		["🥡", "🧃"]
	].forEach(([t, n]) => {
		e.push(N(2, {
			en: `${t} (empty)  ${n} (empty)\n\nBoth have zero inside.`,
			fr: `${t} (vide)  ${n} (vide)\n\nLes deux en ont zéro à l'intérieur.`
		}, !0), N(2, {
			en: `${t} (empty)  ${n} (empty)\n\nOne of them has more than zero inside.`,
			fr: `${t} (vide)  ${n} (vide)\n\nL'un des deux en a plus que zéro à l'intérieur.`
		}, !1));
	});
	for (let t of [
		{
			en: "Zero means there are none.",
			fr: "Zéro veut dire qu'il n'y en a aucun.",
			isTrue: !0
		},
		{
			en: "Zero is a number, just like 1 and 2.",
			fr: "Zéro est un nombre, comme 1 et 2.",
			isTrue: !0
		},
		{
			en: "Zero is the same as one.",
			fr: "Zéro, c'est pareil qu'un.",
			isTrue: !1
		},
		{
			en: "You can count starting at zero.",
			fr: "On peut compter en commençant à zéro.",
			isTrue: !0
		},
		{
			en: "Zero means there are a lot.",
			fr: "Zéro veut dire qu'il y en a beaucoup.",
			isTrue: !1
		},
		{
			en: "An empty box has zero things in it.",
			fr: "Une boîte vide contient zéro chose.",
			isTrue: !0
		}
	]) e.push(N(3, {
		en: t.en,
		fr: t.fr
	}, t.isTrue));
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/banks/yesterdayTodayTomorrow.ts
var V = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
], H = [
	"lundi",
	"mardi",
	"mercredi",
	"jeudi",
	"vendredi",
	"samedi",
	"dimanche"
], U = {
	yesterday: {
		en: "Yesterday",
		fr: "Hier"
	},
	today: {
		en: "Today",
		fr: "Aujourd'hui"
	},
	tomorrow: {
		en: "Tomorrow",
		fr: "Demain"
	}
};
function jl() {
	let e = [], t = [
		"🎂 birthday",
		"⚽ football",
		"🏊 swimming",
		"🎨 art class",
		"🎵 music class",
		"🏖️ the beach"
	], n = [
		"🎂 anniversaire",
		"⚽ football",
		"🏊 natation",
		"🎨 dessin",
		"🎵 musique",
		"🏖️ la plage"
	];
	for (let r = 0; r < 7; r++) {
		let i = (r + 6) % 7, a = (r + 1) % 7;
		[
			"yesterday",
			"today",
			"tomorrow"
		].forEach((t, n) => {
			let o = [
				i,
				r,
				a
			].map((e, t) => t === n ? `[${V[e]}]` : V[e]).join(" → "), s = [
				i,
				r,
				a
			].map((e, t) => t === n ? `[${H[e]}]` : H[e]).join(" → "), c = U[t], l = [
				"yesterday",
				"today",
				"tomorrow"
			].filter((e) => e !== t).map((e) => U[e]);
			e.push(M(1, {
				prompt: `${o}\n\nWhat do we call the highlighted day?`,
				options: [c.en, ...l.map((e) => e.en)]
			}, {
				prompt: `${s}\n\nComment appelle-t-on le jour surligné ?`,
				options: [c.fr, ...l.map((e) => e.fr)]
			}));
		});
		let o = t[r % t.length], s = n[r % n.length], c = [
			i,
			r,
			a
		][r % 3], l = [
			"yesterday",
			"today",
			"tomorrow"
		][r % 3], u = `${V[i]} → ${V[r]} → ${V[a]}\n${o} is on ${V[c]}.`, d = `${H[i]} → ${H[r]} → ${H[a]}\n${s} est ${H[c]}.`, f = U[l], p = [
			"yesterday",
			"today",
			"tomorrow"
		].filter((e) => e !== l).map((e) => U[e]);
		e.push(M(2, {
			prompt: `${u}\n\nWhen is the event?`,
			options: [f.en, ...p.map((e) => e.en)]
		}, {
			prompt: `${d}\n\nQuand a lieu l'événement ?`,
			options: [f.fr, ...p.map((e) => e.fr)]
		})), [
			"yesterday",
			"today",
			"tomorrow"
		].forEach((t, n) => {
			let o = [
				a,
				r,
				i
			], s = o.map((e, t) => t === 2 - n ? `[${V[e]}]` : V[e]).join(" → "), c = o.map((e, t) => t === 2 - n ? `[${H[e]}]` : H[e]).join(" → "), l = U[t], u = [
				"yesterday",
				"today",
				"tomorrow"
			].filter((e) => e !== t).map((e) => U[e]);
			e.push(M(3, {
				prompt: `${s}\n\nWhat do we call the highlighted day?`,
				options: [l.en, ...u.map((e) => e.en)]
			}, {
				prompt: `${c}\n\nComment appelle-t-on le jour surligné ?`,
				options: [l.fr, ...u.map((e) => e.fr)]
			}));
		});
	}
	return L(e);
}
function Ml() {
	let e = [];
	for (let t = 0; t < 7; t++) {
		let n = (t + 6) % 7, r = (t + 1) % 7;
		e.push(P(1, {
			en: `Today is ${V[t]}. Yesterday was ___.`,
			fr: `Aujourd'hui, c'est ${H[t]}. Hier, c'était ___.`
		}, {
			en: V[n],
			fr: H[n]
		})), e.push(P(2, {
			en: `Today is ${V[t]}. Tomorrow will be ___.`,
			fr: `Aujourd'hui, c'est ${H[t]}. Demain, ce sera ___.`
		}, {
			en: V[r],
			fr: H[r]
		}));
		let i = t % 2 == 0, a = i ? r : n;
		e.push(P(3, {
			en: `Today is ${V[t]}. ${i ? "Tomorrow" : "Yesterday"} ${i ? "will be" : "was"} ___.`,
			fr: `Aujourd'hui, c'est ${H[t]}. ${i ? "Demain, ce sera" : "Hier, c'était"} ___.`
		}, {
			en: V[a],
			fr: H[a]
		}));
	}
	return L(e);
}
//#endregion
//#region packages/syllabus-content-p/src/content.ts
var Nl = v({
	pluginId: "preschool-flash-dots",
	competencyId: lo.id,
	bank: Vs()
}), Pl = v({
	pluginId: "preschool-number-hunt",
	competencyId: uo.id,
	bank: mc()
}), Fl = x({
	pluginId: "preschool-numeral-twins",
	competencyId: uo.id,
	bank: Cc()
}), Il = v({
	pluginId: "preschool-show-the-number",
	competencyId: fo.id,
	bank: dl()
}), Ll = v({
	pluginId: "preschool-which-has-more",
	competencyId: po.id,
	bank: sc()
}), Rl = x({
	pluginId: "preschool-same-or-not",
	competencyId: po.id,
	bank: cc()
}), zl = v({
	pluginId: "preschool-bigger-number",
	competencyId: mo.id,
	bank: fs()
}), Bl = v({
	pluginId: "preschool-bigger-smaller-same",
	competencyId: mo.id,
	bank: ps()
}), Vl = y({
	pluginId: "preschool-all-together",
	competencyId: ho.id,
	bank: es()
}), Hl = v({
	pluginId: "preschool-how-many-altogether",
	competencyId: ho.id,
	bank: ns()
}), Ul = y({
	pluginId: "preschool-how-many-left",
	competencyId: go.id,
	bank: rs()
}), Wl = v({
	pluginId: "preschool-which-picture",
	competencyId: go.id,
	bank: is()
}), Gl = v({
	pluginId: "preschool-shape-hunt",
	competencyId: _o.id,
	bank: il()
}), Kl = x({
	pluginId: "preschool-is-it-a-rectangle",
	competencyId: _o.id,
	bank: cl()
}), ql = v({
	pluginId: "preschool-where-is-the-ball",
	competencyId: vo.id,
	bank: $c()
}), Jl = v({
	pluginId: "preschool-longer-or-shorter",
	competencyId: O.id,
	bank: ec()
}), Yl = v({
	pluginId: "preschool-heavy-or-light",
	competencyId: O.id,
	bank: Zs()
}), Xl = v({
	pluginId: "preschool-holds-more",
	competencyId: O.id,
	bank: Qs()
}), Zl = v({
	pluginId: "preschool-what-comes-next",
	competencyId: yo.id,
	bank: Rc()
}), Ql = v({
	pluginId: "preschool-days-in-order",
	competencyId: bo.id,
	bank: Ds()
}), $l = v({
	pluginId: "preschool-day-after",
	competencyId: bo.id,
	bank: Os()
}), eu = v({
	pluginId: "preschool-how-many-all-together",
	competencyId: xo.id,
	bank: ss()
}), tu = x({
	pluginId: "preschool-how-many-last-tag",
	competencyId: xo.id,
	bank: cs()
}), nu = v({
	pluginId: "preschool-hidden-bag",
	competencyId: So.id,
	bank: _s()
}), ru = _({
	pluginId: "preschool-neighbour-houses",
	competencyId: Co.id,
	bank: as()
}), iu = v({
	pluginId: "preschool-pick-the-right-way",
	competencyId: wo.id,
	bank: vc()
}), au = v({
	pluginId: "preschool-empty-basket",
	competencyId: To.id,
	bank: kl()
}), ou = x({
	pluginId: "preschool-is-zero-a-number",
	competencyId: To.id,
	bank: Al()
}), su = x({
	pluginId: "preschool-still-the-same",
	competencyId: Eo.id,
	bank: ms()
}), cu = v({
	pluginId: "preschool-which-row-has-more",
	competencyId: Eo.id,
	bank: hs()
}), lu = v({
	pluginId: "preschool-who-is-nth",
	competencyId: k.id,
	bank: Dc()
}), uu = v({
	pluginId: "preschool-ordinal-or-count",
	competencyId: k.id,
	bank: Oc()
}), du = v({
	pluginId: "preschool-colour-the-nth",
	competencyId: k.id,
	bank: Ac()
}), fu = _({
	pluginId: "preschool-two-hands",
	competencyId: Do.id,
	bank: As()
}), pu = v({
	pluginId: "preschool-another-way",
	competencyId: Do.id,
	bank: js()
}), mu = v({
	pluginId: "preschool-story-plus-or-minus",
	competencyId: Oo.id,
	bank: El()
}), hu = y({
	pluginId: "preschool-solve-it",
	competencyId: Oo.id,
	bank: Dl()
}), gu = v({
	pluginId: "preschool-solid-or-flat",
	competencyId: A.id,
	bank: fl()
}), _u = v({
	pluginId: "preschool-name-the-thing",
	competencyId: A.id,
	bank: ml()
}), vu = Un({
	pluginId: "preschool-solid-match",
	competencyId: A.id,
	bank: hl()
}), yu = y({
	pluginId: "preschool-count-the-sides",
	competencyId: ko.id,
	bank: yl()
}), bu = v({
	pluginId: "preschool-sides-or-corners",
	competencyId: ko.id,
	bank: bl()
}), xu = v({
	pluginId: "preschool-robot-says",
	competencyId: Ao.id,
	bank: rc()
}), Su = v({
	pluginId: "preschool-goes-in-the-middle",
	competencyId: jo.id,
	bank: Nc()
}), Cu = v({
	pluginId: "preschool-odd-one-out",
	competencyId: Mo.id,
	bank: Cl()
}), wu = v({
	pluginId: "preschool-name-the-group",
	competencyId: No.id,
	bank: uc()
}), Tu = v({
	pluginId: "preschool-fill-the-gap",
	competencyId: Po.id,
	bank: Ws()
}), Eu = v({
	pluginId: "preschool-when-does-it-happen",
	competencyId: Fo.id,
	bank: Uc()
}), Du = v({
	pluginId: "preschool-yesterday-today-tomorrow",
	competencyId: Io.id,
	bank: jl()
}), Ou = _({
	pluginId: "preschool-what-day-was-it",
	competencyId: Io.id,
	bank: Ml()
});
//#endregion
//#region packages/syllabus-content-p/src/index.ts
function ku(e, t, n) {
	let r = e;
	return {
		...t,
		pluginId: r.plugin.id,
		competency: n,
		competencies: [n],
		createSession: r.createSession,
		createMasterySignal: r.createMasterySignal
	};
}
var Au = [
	[
		Nl,
		"Flash Dots",
		"🎲",
		lo
	],
	[
		Pl,
		"Number Hunt",
		"🔍",
		uo
	],
	[
		Fl,
		"Numeral Twins",
		"👯",
		uo
	],
	[
		Il,
		"Show the Number",
		"🖐️",
		fo
	],
	[
		Ll,
		"Which Has More?",
		"⚖️",
		po
	],
	[
		Rl,
		"Same or Not?",
		"🟰",
		po
	],
	[
		zl,
		"Bigger Number",
		"🔢",
		mo
	],
	[
		Bl,
		"Bigger, Smaller or Same",
		"↔️",
		mo
	],
	[
		Vl,
		"All Together",
		"➕",
		ho
	],
	[
		Hl,
		"How Many Altogether?",
		"🧺",
		ho
	],
	[
		Ul,
		"How Many Left?",
		"➖",
		go
	],
	[
		Wl,
		"Which Picture?",
		"🖼️",
		go
	],
	[
		Gl,
		"Shape Hunt",
		"🔷",
		_o
	],
	[
		Kl,
		"Is It a Rectangle?",
		"▭",
		_o
	],
	[
		ql,
		"Where Is the Ball?",
		"⚽",
		vo
	],
	[
		Jl,
		"Longer or Shorter?",
		"📏",
		O
	],
	[
		Yl,
		"Heavy or Light?",
		"🪨",
		O
	],
	[
		Xl,
		"Holds More?",
		"🥛",
		O
	],
	[
		Zl,
		"What Comes Next?",
		"🔴",
		yo
	],
	[
		Ql,
		"Days in Order",
		"📅",
		bo
	],
	[
		$l,
		"Day After",
		"🗓️",
		bo
	],
	[
		eu,
		"How Many All Together?",
		"🧮",
		xo
	],
	[
		tu,
		"How Many?",
		"🔢",
		xo
	],
	[
		nu,
		"Hidden Bag",
		"🎒",
		So
	],
	[
		ru,
		"Neighbour Houses",
		"🏠",
		Co
	],
	[
		iu,
		"Pick the Right Way",
		"✍️",
		wo
	],
	[
		au,
		"Empty Basket",
		"🧺",
		To
	],
	[
		ou,
		"Is Zero a Number?",
		"0️⃣",
		To
	],
	[
		su,
		"Still the Same?",
		"⚖️",
		Eo
	],
	[
		cu,
		"Which Row Has More?",
		"📏",
		Eo
	],
	[
		lu,
		"Who Is Nth?",
		"🥇",
		k
	],
	[
		uu,
		"Ordinal or Count?",
		"🔟",
		k
	],
	[
		du,
		"Colour the Nth",
		"🖍️",
		k
	],
	[
		fu,
		"Two Hands",
		"🙌",
		Do
	],
	[
		pu,
		"Another Way",
		"🔀",
		Do
	],
	[
		mu,
		"Story + Objects",
		"📖",
		Oo
	],
	[
		hu,
		"Solve It",
		"🧠",
		Oo
	],
	[
		gu,
		"Solid or Flat?",
		"🧊",
		A
	],
	[
		_u,
		"Name the Thing",
		"🏷️",
		A
	],
	[
		vu,
		"Solid Match",
		"🧩",
		A
	],
	[
		yu,
		"Count the Sides",
		"🔺",
		ko
	],
	[
		bu,
		"Sides or Corners?",
		"📐",
		ko
	],
	[
		xu,
		"Robot Says",
		"🤖",
		Ao
	],
	[
		Su,
		"Which Goes in the Middle?",
		"↔️",
		jo
	],
	[
		Cu,
		"Odd One Out",
		"🚫",
		Mo
	],
	[
		wu,
		"Name the Group",
		"🏷️",
		No
	],
	[
		Tu,
		"Fill the Gap",
		"🧩",
		Po
	],
	[
		Eu,
		"When Does It Happen?",
		"🌗",
		Fo
	],
	[
		Du,
		"Yesterday, Today, Tomorrow",
		"📆",
		Io
	],
	[
		Ou,
		"What Day Was It?",
		"🗓️",
		Io
	]
], ju = Au.map(([e]) => e.plugin), Mu = Au.map(([e]) => e.plugin.id), Nu = Au.map(([e, t, n, r], i) => ku(e, {
	key: Mu[i],
	label: t,
	icon: n
}, r)), Pu = {
	id: "math.addition.mental",
	nameKey: "competency.math.addition.mental.name",
	descriptionKey: "competency.math.addition.mental.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G1.7",
	prerequisiteIds: ["math.addition.baseline-concrete"],
	scoreInputs: [{
		kind: "activity",
		id: "math.addition.mental"
	}, {
		kind: "competency",
		id: "math.addition.baseline-concrete"
	}]
}, Fu = {
	id: "math.subtraction.mental",
	nameKey: "competency.math.subtraction.mental.name",
	descriptionKey: "competency.math.subtraction.mental.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G1.8",
	prerequisiteIds: ["math.addition.mental", "math.addition.baseline-concrete"],
	scoreInputs: [
		{
			kind: "activity",
			id: "math.subtraction.mental"
		},
		{
			kind: "competency",
			id: "math.addition.mental"
		},
		{
			kind: "competency",
			id: "math.addition.baseline-concrete"
		}
	]
}, Iu = {
	id: "math.multiplication.mental",
	nameKey: "competency.math.multiplication.mental.name",
	descriptionKey: "competency.math.multiplication.mental.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G1.9",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.multiplication.mental"
	}]
}, Lu = {
	id: "math.division.mental",
	nameKey: "competency.math.division.mental.name",
	descriptionKey: "competency.math.division.mental.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G1.10",
	prerequisiteIds: ["math.multiplication.mental"],
	scoreInputs: [{
		kind: "activity",
		id: "math.division.mental"
	}, {
		kind: "competency",
		id: "math.multiplication.mental"
	}]
}, W = {
	id: "math.number-sense.baseline-counting",
	nameKey: "competency.math.number-sense.baseline-counting.name",
	descriptionKey: "competency.math.number-sense.baseline-counting.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.0",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.baseline-counting"
	}]
}, Ru = {
	id: "math.number-sense.baseline-subitizing",
	nameKey: "competency.math.number-sense.baseline-subitizing.name",
	descriptionKey: "competency.math.number-sense.baseline-subitizing.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.1",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.baseline-subitizing"
	}]
}, zu = {
	id: "math.number-sense.baseline-digits",
	nameKey: "competency.math.number-sense.baseline-digits.name",
	descriptionKey: "competency.math.number-sense.baseline-digits.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.3",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.baseline-digits"
	}]
}, Bu = {
	id: "math.comparing-ordering.baseline-groups",
	nameKey: "competency.math.comparing-ordering.baseline-groups.name",
	descriptionKey: "competency.math.comparing-ordering.baseline-groups.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.2",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.comparing-ordering.baseline-groups"
	}]
}, Vu = {
	id: "math.addition.baseline-concrete",
	nameKey: "competency.math.addition.baseline-concrete.name",
	descriptionKey: "competency.math.addition.baseline-concrete.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.4",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.addition.baseline-concrete"
	}]
}, Hu = {
	id: "math.measurement.baseline-comparison",
	nameKey: "competency.math.measurement.baseline-comparison.name",
	descriptionKey: "competency.math.measurement.baseline-comparison.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.5",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.measurement.baseline-comparison"
	}]
}, G = {
	id: "math.time.baseline-day-order",
	nameKey: "competency.math.time.baseline-day-order.name",
	descriptionKey: "competency.math.time.baseline-day-order.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.6",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.baseline-day-order"
	}]
}, Uu = {
	id: "math.time.baseline-days-of-week",
	nameKey: "competency.math.time.baseline-days-of-week.name",
	descriptionKey: "competency.math.time.baseline-days-of-week.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.7",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.time.baseline-days-of-week"
	}]
}, Wu = {
	id: "math.geometry.baseline-shapes",
	nameKey: "competency.math.geometry.baseline-shapes.name",
	descriptionKey: "competency.math.geometry.baseline-shapes.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.8",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.baseline-shapes"
	}]
}, Gu = {
	id: "math.geometry.baseline-position",
	nameKey: "competency.math.geometry.baseline-position.name",
	descriptionKey: "competency.math.geometry.baseline-position.description",
	subjectId: "mathematics",
	targetGrade: "P",
	gradeCount: 1,
	frameworkSkillId: "mathematics.P.9",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.geometry.baseline-position"
	}]
}, Ku = {
	id: "math.number-sense.counting-range",
	nameKey: "competency.math.number-sense.counting-range.name",
	descriptionKey: "competency.math.number-sense.counting-range.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 4,
	frameworkSkillId: "mathematics.G1.0",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.counting-range"
	}]
}, qu = {
	id: "math.number-sense.skip-counting",
	nameKey: "competency.math.number-sense.skip-counting.name",
	descriptionKey: "competency.math.number-sense.skip-counting.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G1.2",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.skip-counting"
	}]
}, Ju = {
	id: "math.number-sense.odd-even",
	nameKey: "competency.math.number-sense.odd-even.name",
	descriptionKey: "competency.math.number-sense.odd-even.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G1.3",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.odd-even"
	}]
}, Yu = {
	id: "math.number-sense.ordinals",
	nameKey: "competency.math.number-sense.ordinals.name",
	descriptionKey: "competency.math.number-sense.ordinals.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G1.4",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.ordinals"
	}]
}, Xu = {
	id: "math.number-sense.negative-numbers",
	nameKey: "competency.math.number-sense.negative-numbers.name",
	descriptionKey: "competency.math.number-sense.negative-numbers.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G4.1",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.negative-numbers"
	}]
}, Zu = {
	id: "math.number-sense.primes-factors",
	nameKey: "competency.math.number-sense.primes-factors.name",
	descriptionKey: "competency.math.number-sense.primes-factors.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G5.0",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.primes-factors"
	}]
}, Qu = {
	id: "math.number-sense.squares",
	nameKey: "competency.math.number-sense.squares.name",
	descriptionKey: "competency.math.number-sense.squares.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G5.2",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.squares"
	}]
}, $u = {
	id: "math.number-sense.roman-numerals",
	nameKey: "competency.math.number-sense.roman-numerals.name",
	descriptionKey: "competency.math.number-sense.roman-numerals.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G5.3",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.number-sense.roman-numerals"
	}]
}, ed = {
	id: "math.place-value.understanding",
	nameKey: "competency.math.place-value.understanding.name",
	descriptionKey: "competency.math.place-value.understanding.description",
	subjectId: "mathematics",
	targetGrade: 1,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G1.5",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.place-value.understanding"
	}]
}, td = {
	id: "math.place-value.powers-of-ten",
	nameKey: "competency.math.place-value.powers-of-ten.name",
	descriptionKey: "competency.math.place-value.powers-of-ten.description",
	subjectId: "mathematics",
	targetGrade: 3,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G3.1",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.place-value.powers-of-ten"
	}]
}, nd = {
	id: "math.place-value.rounding",
	nameKey: "competency.math.place-value.rounding.name",
	descriptionKey: "competency.math.place-value.rounding.description",
	subjectId: "mathematics",
	targetGrade: 4,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G4.3",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.place-value.rounding"
	}]
}, rd = {
	id: "math.place-value.multiply-divide-ten",
	nameKey: "competency.math.place-value.multiply-divide-ten.name",
	descriptionKey: "competency.math.place-value.multiply-divide-ten.description",
	subjectId: "mathematics",
	targetGrade: 5,
	gradeCount: 5,
	frameworkSkillId: "mathematics.G5.6",
	prerequisiteIds: [],
	scoreInputs: [{
		kind: "activity",
		id: "math.place-value.multiply-divide-ten"
	}]
}, id = [
	Pu,
	Fu,
	Iu,
	Lu,
	W,
	Ru,
	zu,
	Bu,
	Vu,
	Hu,
	G,
	Uu,
	Wu,
	Gu,
	Ku,
	qu,
	Ju,
	Yu,
	Xu,
	Zu,
	Qu,
	$u,
	ed,
	td,
	nd,
	rd,
	...te,
	...bt,
	...Nn,
	...qr,
	..._a,
	...Lo
], ad = n([{
	id: "mathematics",
	nameKey: "subject.mathematics.name"
}], id, id.map((e) => e.id));
if (!ad.valid) throw Error(`curriculum.ts: invalid competency model: ${JSON.stringify(ad.errors)}`);
var od = [
	{
		areaKey: "number-sense",
		nameKey: "curriculum.area.number-sense",
		label: "Number sense"
	},
	{
		areaKey: "place-value",
		nameKey: "curriculum.area.place-value",
		label: "Place value"
	},
	{
		areaKey: "comparing-ordering",
		nameKey: "curriculum.area.comparing-ordering",
		label: "Comparing & ordering"
	},
	{
		areaKey: "addition",
		nameKey: "curriculum.area.addition",
		label: "Addition"
	},
	{
		areaKey: "subtraction",
		nameKey: "curriculum.area.subtraction",
		label: "Subtraction"
	},
	{
		areaKey: "multiplication",
		nameKey: "curriculum.area.multiplication",
		label: "Multiplication"
	},
	{
		areaKey: "division",
		nameKey: "curriculum.area.division",
		label: "Division"
	},
	{
		areaKey: "mental-mathematics",
		nameKey: "curriculum.area.mental-mathematics",
		label: "Mental mathematics"
	},
	{
		areaKey: "fractions",
		nameKey: "curriculum.area.fractions",
		label: "Fractions"
	},
	{
		areaKey: "decimals",
		nameKey: "curriculum.area.decimals",
		label: "Decimals"
	},
	{
		areaKey: "percentages",
		nameKey: "curriculum.area.percentages",
		label: "Percentages"
	},
	{
		areaKey: "measurement",
		nameKey: "curriculum.area.measurement",
		label: "Measurement"
	},
	{
		areaKey: "money",
		nameKey: "curriculum.area.money",
		label: "Money"
	},
	{
		areaKey: "time",
		nameKey: "curriculum.area.time",
		label: "Time"
	},
	{
		areaKey: "geometry",
		nameKey: "curriculum.area.geometry",
		label: "Geometry"
	},
	{
		areaKey: "data-graphs",
		nameKey: "curriculum.area.data-graphs",
		label: "Data and graphs"
	},
	{
		areaKey: "mathematical-reasoning",
		nameKey: "curriculum.area.mathematical-reasoning",
		label: "Mathematical reasoning"
	},
	{
		areaKey: "problem-solving",
		nameKey: "curriculum.area.problem-solving",
		label: "Problem solving"
	}
];
function sd(e) {
	let [t, n] = e.id.split(".");
	if (t === "math") return od.some((e) => e.areaKey === n) ? n : void 0;
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/types.ts
var cd = "math.time.baseline-day-order", ld = "math.time.baseline-days-of-week";
//#endregion
//#region packages/baseline-calendar-time-basics/src/rng.ts
function ud(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function dd(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/generate.ts
var fd = [
	"morning",
	"afternoon",
	"evening",
	"night"
], pd = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
function md(e) {
	return e === "P" || e === 1;
}
function hd(e, t) {
	let n = dd(e, 0, t - 1), r = dd(e, 0, t - 1);
	for (; r === n;) r = dd(e, 0, t - 1);
	return [n, r];
}
function gd(e, t, n) {
	let [r, i] = hd(n, fd.length), a = Math.min(r, i), o = {
		id: "a",
		label: fd[r]
	}, s = {
		id: "b",
		label: fd[i]
	};
	return {
		id: `baseline-calendar-time-basics-day-order-${e}-${t}`,
		kind: "day-order",
		grade: e,
		competencyId: cd,
		prompt: "Which comes first in the day?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function _d(e, t, n) {
	let [r, i] = hd(n, pd.length), a = Math.min(r, i), o = {
		id: "a",
		label: pd[r]
	}, s = {
		id: "b",
		label: pd[i]
	};
	return {
		id: `baseline-calendar-time-basics-days-of-week-${e}-${t}`,
		kind: "days-of-week",
		grade: e,
		competencyId: ld,
		prompt: "Which comes first in the week?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function vd(e, t) {
	if (!md(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = ud(t);
	return n() < .5 ? gd(e, t, n) : _d(e, t, n);
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/plugin.ts
function yd(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function bd(e, t, n, r, i, a) {
	return {
		competencyId: e.competencyId,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: yd(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function xd(e, t) {
	let n = ud(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(vd(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Sd = {
	id: "baseline-calendar-time-basics",
	competencyIds: [cd, ld],
	generateQuestion(e, t) {
		return vd(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: yd
}, Cd = "math.addition.baseline-concrete";
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/rng.ts
function wd(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Td(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/generate.ts
var Ed = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function Dd(e) {
	return e === "P" || e === 1;
}
function Od(e, t, n) {
	let r = Td(n, 1, 5), i = Td(n, 1, 5);
	return {
		id: `baseline-concrete-addition-subtraction-add-${e}-${t}`,
		grade: e,
		operator: "+",
		leftCount: r,
		rightCount: i,
		emoji: Ed[Td(n, 0, Ed.length - 1)],
		correctAnswer: r + i
	};
}
function kd(e, t, n) {
	let r = Td(n, 2, 10), i = Td(n, 1, r - 1);
	return {
		id: `baseline-concrete-addition-subtraction-sub-${e}-${t}`,
		grade: e,
		operator: "-",
		leftCount: r,
		rightCount: i,
		emoji: Ed[Td(n, 0, Ed.length - 1)],
		correctAnswer: r - i
	};
}
function Ad(e, t) {
	if (!Dd(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = wd(t);
	return n() < .5 ? Od(e, t, n) : kd(e, t, n);
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/plugin.ts
function jd(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.emoji.repeat(e.leftCount)} ${e.operator} ${e.emoji.repeat(e.rightCount)}`
		},
		correctAnswer: e.correctAnswer
	};
}
function Md(e, t, n, r, i, a) {
	return {
		competencyId: Cd,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: jd(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Nd(e, t) {
	let n = wd(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ad(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Pd = {
	id: "baseline-concrete-addition-subtraction",
	competencyIds: [Cd],
	generateQuestion(e, t) {
		return Ad(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation: jd
}, Fd = "math.number-sense.baseline-counting", Id = "math.number-sense.baseline-subitizing", Ld = "math.number-sense.baseline-digits", Rd = "math.comparing-ordering.baseline-groups";
//#endregion
//#region packages/baseline-counting-quantities/src/rng.ts
function zd(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function K(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-counting-quantities/src/generate.ts
var Bd = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function Vd(e) {
	return e === "P" || e === 1;
}
function Hd(e) {
	return Bd[K(e, 0, Bd.length - 1)];
}
function Ud(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (; n.size < 3;) {
		let r = K(e, 0, 9);
		r !== t && n.add(r);
	}
	let r = [t, ...n];
	for (let t = r.length - 1; t > 0; t--) {
		let n = K(e, 0, t), i = r[t];
		r[t] = r[n], r[n] = i;
	}
	return {
		options: r.map((e) => ({
			id: `digit-${e}`,
			label: String(e)
		})),
		correctOptionId: `digit-${t}`
	};
}
function Wd(e, t, n) {
	let r = K(n, 1, 20);
	return {
		id: `baseline-counting-quantities-counting-${e}-${t}`,
		kind: "counting",
		grade: e,
		competencyId: Fd,
		count: r,
		emoji: Hd(n),
		correctAnswer: r
	};
}
function Gd(e, t, n) {
	let r = K(n, 1, 5);
	return {
		id: `baseline-counting-quantities-subitizing-${e}-${t}`,
		kind: "subitizing",
		grade: e,
		competencyId: Id,
		count: r,
		emoji: Hd(n),
		correctAnswer: r
	};
}
function Kd(e, t, n) {
	let r = K(n, 0, 9), i = Hd(n), { options: a, correctOptionId: o } = Ud(n, r);
	return {
		id: `baseline-counting-quantities-digit-${e}-${t}`,
		kind: "digit",
		grade: e,
		competencyId: Ld,
		count: r,
		emoji: i,
		options: a,
		correctOptionId: o
	};
}
function qd(e, t, n) {
	let r = K(n, 1, 10), i = K(n, 1, 10);
	for (; i === r;) i = K(n, 1, 10);
	let a = Hd(n), o = Hd(n), s = r > i ? "left" : "right";
	return {
		id: `baseline-counting-quantities-compare-groups-${e}-${t}`,
		kind: "compare-groups",
		grade: e,
		competencyId: Rd,
		leftCount: r,
		rightCount: i,
		leftEmoji: a,
		rightEmoji: o,
		options: [{
			id: "left",
			label: "Left group"
		}, {
			id: "right",
			label: "Right group"
		}],
		correctOptionId: s
	};
}
function Jd(e, t) {
	if (!Vd(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = zd(t);
	switch (K(n, 0, 3)) {
		case 0: return Wd(e, t, n);
		case 1: return Gd(e, t, n);
		case 2: return Kd(e, t, n);
		default: return qd(e, t, n);
	}
}
//#endregion
//#region packages/baseline-counting-quantities/src/plugin.ts
function Yd(e) {
	return e.kind === "counting" || e.kind === "subitizing" ? {
		presentation: {
			kind: "equation",
			equation: e.emoji.repeat(e.count)
		},
		correctAnswer: e.correctAnswer
	} : e.kind === "digit" ? {
		presentation: {
			kind: "choice",
			prompt: `${e.emoji.repeat(e.count)} — which number is this?`,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	} : {
		presentation: {
			kind: "choice",
			prompt: `${e.leftEmoji.repeat(e.leftCount)}   vs   ${e.rightEmoji.repeat(e.rightCount)} — which side has more?`,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Xd(e, t, n, r, i, a) {
	return {
		competencyId: e.competencyId,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Yd(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Zd(e, t) {
	let n = zd(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Jd(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Qd = {
	id: "baseline-counting-quantities",
	competencyIds: [
		Fd,
		Id,
		Ld,
		Rd
	],
	generateQuestion(e, t) {
		return Jd(e, t);
	},
	validateAnswer(e, t) {
		switch (e.kind) {
			case "counting":
			case "subitizing": return { correct: t === e.correctAnswer };
			case "digit":
			case "compare-groups": return { correct: t === e.correctOptionId };
		}
	},
	toPresentation: Yd
}, $d = "math.measurement.baseline-comparison";
//#endregion
//#region packages/baseline-direct-comparison/src/rng.ts
function ef(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function tf(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-direct-comparison/src/generate.ts
var nf = {
	length: [
		"🐛 the worm",
		"🐍 the snake",
		"✏️ the pencil",
		"🪱 the rope"
	],
	weight: [
		"🪶 the feather",
		"📚 the book",
		"🐘 the elephant",
		"🪨 the rock"
	],
	capacity: [
		"☕ the cup",
		"🪣 the bucket",
		"🧴 the bottle",
		"🛁 the bathtub"
	]
}, rf = [
	"length",
	"weight",
	"capacity"
], af = {
	length: "Which one is longer?",
	weight: "Which one is heavier?",
	capacity: "Which one holds more?"
};
function of(e) {
	return e === "P" || e === 1;
}
function sf(e, t) {
	let n = tf(e, 0, t.length - 1), r = tf(e, 0, t.length - 1);
	for (; r === n;) r = tf(e, 0, t.length - 1);
	return [t[n], t[r]];
}
function cf(e, t) {
	if (!of(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = ef(t), r = rf[tf(n, 0, rf.length - 1)], [i, a] = sf(n, nf[r]), o = n() < .5, s = {
		id: "a",
		label: i
	}, c = {
		id: "b",
		label: a
	};
	return {
		id: `baseline-direct-comparison-${r}-${e}-${t}`,
		grade: e,
		attribute: r,
		prompt: af[r],
		options: [s, c],
		correctOptionId: o ? "a" : "b"
	};
}
//#endregion
//#region packages/baseline-direct-comparison/src/plugin.ts
function lf(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function uf(e, t, n, r, i, a) {
	return {
		competencyId: $d,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: lf(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function df(e, t) {
	let n = ef(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(cf(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ff = {
	id: "baseline-direct-comparison",
	competencyIds: [$d],
	generateQuestion(e, t) {
		return cf(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: lf
}, pf = "math.geometry.baseline-position";
//#endregion
//#region packages/baseline-positional-language/src/rng.ts
function mf(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function hf(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-positional-language/src/generate.ts
var gf = [
	"🐱 the cat",
	"🐶 the dog",
	"⭐ the star",
	"🧸 the toy"
], _f = [
	"📦 the box",
	"🪑 the chair",
	"🛏️ the bed",
	"🌳 the tree"
], vf = [
	"on",
	"under",
	"behind",
	"between",
	"next-to"
], yf = {
	on: "on",
	under: "under",
	behind: "behind",
	between: "between",
	"next-to": "next to"
};
function bf(e) {
	return e === "P" || e === 1;
}
function xf(e, t, n, r) {
	switch (e) {
		case "on": return `${t}\n${n}`;
		case "under": return `${n}\n${t}`;
		case "behind": return `${n}${t}`;
		case "next-to": return `${t}  ${n}`;
		case "between": return `${n}  ${t}  ${r}`;
	}
}
function Sf(e) {
	let t = [...vf];
	for (let n = t.length - 1; n > 0; n--) {
		let r = hf(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function Cf(e, t) {
	if (!bf(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = mf(t), r = vf[hf(n, 0, vf.length - 1)], i = gf[hf(n, 0, gf.length - 1)], a = hf(n, 0, _f.length - 1), o = hf(n, 0, _f.length - 1);
	for (; o === a;) o = hf(n, 0, _f.length - 1);
	let s = _f[a], c = _f[o], l = i.split(" ")[0], u = s.split(" ")[0], d = c.split(" ")[0], f = Sf(n).map((e) => ({
		id: `position-${e}`,
		label: yf[e]
	}));
	return {
		id: `baseline-positional-language-${e}-${t}`,
		grade: e,
		position: r,
		subjectLabel: i,
		scene: xf(r, l, u, d),
		options: f,
		correctOptionId: `position-${r}`
	};
}
//#endregion
//#region packages/baseline-positional-language/src/plugin.ts
function wf(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: `${e.scene}\nWhere is ${e.subjectLabel}?`,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Tf(e, t, n, r, i, a) {
	return {
		competencyId: pf,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: wf(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Ef(e, t) {
	let n = mf(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Cf(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Df = {
	id: "baseline-positional-language",
	competencyIds: [pf],
	generateQuestion(e, t) {
		return Cf(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: wf
}, Of = "math.geometry.baseline-shapes";
//#endregion
//#region packages/baseline-shape-recognition/src/rng.ts
function kf(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Af(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-shape-recognition/src/generate.ts
var jf = [
	{
		name: "circle",
		emoji: "🔵"
	},
	{
		name: "square",
		emoji: "🟥"
	},
	{
		name: "triangle",
		emoji: "🔺"
	},
	{
		name: "rectangle",
		emoji: "▭"
	}
];
function Mf(e) {
	return e === "P" || e === 1;
}
function Nf(e) {
	let t = jf.map((e) => e.name);
	for (let n = t.length - 1; n > 0; n--) {
		let r = Af(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function Pf(e, t) {
	if (!Mf(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = kf(t), r = jf[Af(n, 0, jf.length - 1)], i = Nf(n).map((e) => ({
		id: `shape-${e}`,
		label: e
	}));
	return {
		id: `baseline-shape-recognition-${e}-${t}`,
		grade: e,
		shape: r.name,
		emoji: r.emoji,
		options: i,
		correctOptionId: `shape-${r.name}`
	};
}
//#endregion
//#region packages/baseline-shape-recognition/src/plugin.ts
function Ff(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: `${e.emoji} — what shape is this?`,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function If(e, t, n, r, i, a) {
	return {
		competencyId: Of,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Ff(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Lf(e, t) {
	let n = kf(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Pf(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Rf = {
	id: "baseline-shape-recognition",
	competencyIds: [Of],
	generateQuestion(e, t) {
		return Pf(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Ff
};
//#endregion
//#region packages/mental-addition/src/rng.ts
function zf(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function q(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-addition/src/generate.ts
function Bf(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Vf(e) {
	let t = q(e, 0, 9);
	return {
		operandA: t,
		operandB: q(e, 0, 9 - t)
	};
}
function Hf(e) {
	let t = q(e, 1, 9);
	return {
		operandA: t,
		operandB: q(e, Math.max(1, 10 - t), 9)
	};
}
function Uf(e) {
	let t = q(e, 0, 9), n = q(e, 0, 9 - t);
	return {
		operandA: q(e, 1, 9) * 10 + n,
		operandB: t
	};
}
function Wf(e) {
	let t = q(e, 1, 9);
	return {
		onesA: q(e, Math.max(0, 10 - t), 9),
		onesB: t
	};
}
function Gf(e) {
	let { onesA: t, onesB: n } = Wf(e), r = q(e, 1, 9), i = q(e, 1, 9);
	return {
		operandA: r * 10 + t,
		operandB: i * 10 + n
	};
}
function Kf(e) {
	let { onesA: t, onesB: n } = Wf(e), r = q(e, 0, 9), i = q(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = q(e, +!a, 9);
	return {
		operandA: i,
		operandB: (a ? q(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function qf(e, t) {
	if (!Bf(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = zf(t), { operandA: r, operandB: i } = e === 1 ? Vf(n) : e === 2 ? Hf(n) : e === 3 ? Uf(n) : e === 4 ? Gf(n) : Kf(n);
	return {
		id: `mental-addition-${e}-${t}`,
		grade: e,
		operandA: r,
		operandB: i,
		correctSum: r + i
	};
}
//#endregion
//#region packages/mental-addition/src/plugin.ts
var Jf = "math.addition.mental";
function Yf(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.operandA} + ${e.operandB}`
		},
		correctAnswer: e.correctSum
	};
}
function Xf(e, t, n, r, i, a) {
	return {
		competencyId: Jf,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Yf(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Zf(e, t) {
	let n = zf(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(qf(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Qf = {
	id: "mental-addition",
	competencyIds: [Jf],
	generateQuestion(e, t) {
		return qf(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctSum };
	},
	toPresentation: Yf
};
//#endregion
//#region packages/mental-division/src/rng.ts
function $f(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function ep(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-division/src/generate.ts
function tp(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function np(e, t) {
	return {
		divisor: ep(e, 1, t),
		correctQuotient: ep(e, 0, t)
	};
}
function rp(e) {
	return {
		divisor: ep(e, 1, 9),
		correctQuotient: ep(e, 11, 20)
	};
}
function ip(e, t) {
	if (!tp(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = $f(t), { divisor: r, correctQuotient: i } = e === 1 ? np(n, 2) : e === 2 ? np(n, 5) : e === 3 ? np(n, 10) : e === 4 ? np(n, 12) : rp(n);
	return {
		id: `mental-division-${e}-${t}`,
		grade: e,
		dividend: r * i,
		divisor: r,
		correctQuotient: i
	};
}
//#endregion
//#region packages/mental-division/src/plugin.ts
var ap = "math.division.mental";
function op(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.dividend} ÷ ${e.divisor}`
		},
		correctAnswer: e.correctQuotient
	};
}
function sp(e, t, n, r, i, a) {
	return {
		competencyId: ap,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: op(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function cp(e, t) {
	let n = $f(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ip(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var lp = {
	id: "mental-division",
	competencyIds: [ap],
	generateQuestion(e, t) {
		return ip(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctQuotient };
	},
	toPresentation: op
};
//#endregion
//#region packages/mental-multiplication/src/rng.ts
function up(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function dp(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-multiplication/src/generate.ts
function fp(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function pp(e, t) {
	return {
		factorA: dp(e, 0, t),
		factorB: dp(e, 0, t)
	};
}
function mp(e) {
	return {
		factorA: dp(e, 11, 20),
		factorB: dp(e, 0, 9)
	};
}
function hp(e, t) {
	if (!fp(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = up(t), { factorA: r, factorB: i } = e === 1 ? pp(n, 2) : e === 2 ? pp(n, 5) : e === 3 ? pp(n, 10) : e === 4 ? pp(n, 12) : mp(n);
	return {
		id: `mental-multiplication-${e}-${t}`,
		grade: e,
		factorA: r,
		factorB: i,
		correctProduct: r * i
	};
}
//#endregion
//#region packages/mental-multiplication/src/plugin.ts
var gp = "math.multiplication.mental";
function _p(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.factorA} × ${e.factorB}`
		},
		correctAnswer: e.correctProduct
	};
}
function vp(e, t, n, r, i, a) {
	return {
		competencyId: gp,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: _p(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function yp(e, t) {
	let n = up(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(hp(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var bp = {
	id: "mental-multiplication",
	competencyIds: [gp],
	generateQuestion(e, t) {
		return hp(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctProduct };
	},
	toPresentation: _p
};
//#endregion
//#region packages/mental-subtraction/src/rng.ts
function xp(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function J(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-subtraction/src/generate.ts
function Sp(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Cp(e) {
	let t = J(e, 0, 9);
	return {
		correctDifference: t,
		subtrahend: J(e, 0, 9 - t)
	};
}
function wp(e) {
	let t = J(e, 1, 9);
	return {
		correctDifference: t,
		subtrahend: J(e, Math.max(1, 10 - t), 9)
	};
}
function Tp(e) {
	let t = J(e, 0, 9), n = J(e, 0, 9 - t);
	return {
		correctDifference: J(e, 1, 9) * 10 + n,
		subtrahend: t
	};
}
function Ep(e) {
	let t = J(e, 1, 9);
	return {
		onesDiff: J(e, Math.max(0, 10 - t), 9),
		onesSubtrahend: t
	};
}
function Dp(e) {
	let { onesDiff: t, onesSubtrahend: n } = Ep(e), r = J(e, 1, 9), i = J(e, 1, 9);
	return {
		correctDifference: r * 10 + t,
		subtrahend: i * 10 + n
	};
}
function Op(e) {
	let { onesDiff: t, onesSubtrahend: n } = Ep(e), r = J(e, 0, 9), i = J(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = J(e, +!a, 9);
	return {
		correctDifference: i,
		subtrahend: (a ? J(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function kp(e, t) {
	if (!Sp(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = xp(t), { correctDifference: r, subtrahend: i } = e === 1 ? Cp(n) : e === 2 ? wp(n) : e === 3 ? Tp(n) : e === 4 ? Dp(n) : Op(n);
	return {
		id: `mental-subtraction-${e}-${t}`,
		grade: e,
		minuend: i + r,
		subtrahend: i,
		correctDifference: r
	};
}
//#endregion
//#region packages/mental-subtraction/src/plugin.ts
var Ap = "math.subtraction.mental";
function jp(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.minuend} - ${e.subtrahend}`
		},
		correctAnswer: e.correctDifference
	};
}
function Mp(e, t, n, r, i, a) {
	return {
		competencyId: Ap,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: jp(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Np(e, t) {
	let n = xp(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(kp(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Pp = {
	id: "mental-subtraction",
	competencyIds: [Ap],
	generateQuestion(e, t) {
		return kp(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctDifference };
	},
	toPresentation: jp
}, Fp = "math.number-sense.counting-range";
//#endregion
//#region packages/number-sense-counting-range/src/rng.ts
function Ip(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Lp(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-counting-range/src/generate.ts
function Rp(e) {
	return Number.isInteger(e) && e >= 1 && e <= 4;
}
var zp = {
	1: 100,
	2: 1e3,
	3: 1e4,
	4: 1e6
};
function Bp(e, t, n, r) {
	let i = Lp(r, 0, n - 1);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "next",
		prompt: `What number comes right after ${i}?`,
		numericAnswer: i + 1
	};
}
function Vp(e, t, n, r) {
	let i = Lp(r, 1, n);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "previous",
		prompt: `What number comes right before ${i}?`,
		numericAnswer: i - 1
	};
}
function Hp(e, t, n, r) {
	let i = Lp(r, 0, n), a = Lp(r, 0, n);
	for (; a === i;) a = Lp(r, 0, n);
	let o = i > a ? "a" : "b";
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "compare",
		prompt: "Which number is bigger?",
		options: [{
			id: "a",
			label: String(i)
		}, {
			id: "b",
			label: String(a)
		}],
		correctOptionId: o
	};
}
function Up(e, t) {
	if (!Rp(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..4)`);
	let n = zp[e], r = Ip(t);
	switch (Lp(r, 0, 2)) {
		case 0: return Bp(e, t, n, r);
		case 1: return Vp(e, t, n, r);
		default: return Hp(e, t, n, r);
	}
}
//#endregion
//#region packages/number-sense-counting-range/src/plugin.ts
function Wp(e) {
	if (e.kind === "compare") return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
	let t = e.kind === "next" ? e.numericAnswer - 1 : e.numericAnswer + 1;
	return {
		presentation: {
			kind: "equation",
			equation: e.kind === "next" ? `${t} + 1` : `${t} - 1`
		},
		correctAnswer: e.numericAnswer
	};
}
function Gp(e, t, n, r, i, a) {
	return {
		competencyId: Fp,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Wp(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Kp(e, t) {
	let n = Ip(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Up(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var qp = {
	id: "number-sense-counting-range",
	competencyIds: [Fp],
	generateQuestion(e, t) {
		return Up(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "compare" ? { correct: t === e.correctOptionId } : { correct: t === e.numericAnswer };
	},
	toPresentation: Wp
}, Jp = "math.number-sense.negative-numbers";
//#endregion
//#region packages/number-sense-negative-numbers/src/rng.ts
function Yp(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Xp(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-negative-numbers/src/generate.ts
function Zp(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Qp(e, t, n, r) {
	let i = Xp(n, r[0], r[1]), a = n() < .5 ? "after" : "before", o = a === "after" ? i + 1 : i - 1;
	return {
		id: `number-sense-negative-numbers-${e}-${t}`,
		grade: e,
		kind: "position",
		prompt: `What number comes right ${a} ${i}?`,
		numericAnswer: o
	};
}
function $p(e, t, n, r, i) {
	let a = Xp(n, i[0], i[1]), o = Xp(n, i[0], i[1]);
	for (; o === a;) o = Xp(n, i[0], i[1]);
	let s = r === "temperature" ? `Which is colder, ${a}° or ${o}°?` : `Who owes more money: someone who owes $${Math.abs(a)} or someone who owes $${Math.abs(o)}?`, c = (e) => r === "temperature" ? `${e}°` : `owes $${Math.abs(e)}`, l = a < o ? "a" : "b";
	return {
		id: `number-sense-negative-numbers-${e}-${t}`,
		grade: e,
		kind: "compare",
		prompt: s,
		options: [{
			id: "a",
			label: c(a)
		}, {
			id: "b",
			label: c(o)
		}],
		correctOptionId: l
	};
}
function em(e, t) {
	if (!Zp(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Yp(t);
	if (e === 1) return Qp(e, t, n, [-10, 10]);
	if (e === 2) return Qp(e, t, n, [-20, 20]);
	if (e === 3) return $p(e, t, n, "temperature", [-20, 20]);
	if (e === 4) return $p(e, t, n, "debt", [-50, -1]);
	if (n() < .5) return Qp(e, t, n, [-100, 100]);
	let r = n() < .5 ? "temperature" : "debt";
	return $p(e, t, n, r, r === "debt" ? [-50, -1] : [-100, 100]);
}
//#endregion
//#region packages/number-sense-negative-numbers/src/plugin.ts
function tm(e) {
	return e.kind === "compare" ? {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	} : {
		presentation: {
			kind: "equation",
			equation: `${e.numericAnswer - 1} + 1`
		},
		correctAnswer: e.numericAnswer
	};
}
function nm(e, t, n, r, i, a) {
	return {
		competencyId: Jp,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: tm(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function rm(e, t) {
	let n = Yp(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(em(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var im = {
	id: "number-sense-negative-numbers",
	competencyIds: [Jp],
	generateQuestion(e, t) {
		return em(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "compare" ? { correct: t === e.correctOptionId } : { correct: t === e.numericAnswer };
	},
	toPresentation: tm
}, am = "math.number-sense.odd-even";
//#endregion
//#region packages/number-sense-odd-even/src/rng.ts
function om(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function sm(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-odd-even/src/generate.ts
function cm(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var lm = {
	1: 20,
	2: 100,
	3: 1e3,
	4: 1e4,
	5: 1e4
};
function um(e) {
	return e % 2 == 0 ? "even" : "odd";
}
function dm(e, t, n) {
	let r = t === "even" ? 0 : 1;
	return r + 2 * sm(e, 0, Math.floor((n - r) / 2) + 1 - 1);
}
function fm(e, t, n) {
	let r = lm[e], i = sm(n, 0, r);
	return {
		id: `number-sense-odd-even-${e}-${t}`,
		grade: e,
		kind: "identify",
		prompt: `Is ${i} odd or even?`,
		options: [{
			id: "odd",
			label: "Odd"
		}, {
			id: "even",
			label: "Even"
		}],
		correctOptionId: um(i)
	};
}
function pm(e, t, n) {
	let r = n() < .5 ? "odd" : "even", i = r === "odd" ? "even" : "odd", a = [];
	for (; a.length < 3;) {
		let e = dm(n, r, 1e4);
		a.includes(e) || a.push(e);
	}
	let o = dm(n, i, 1e4), s = [
		{
			value: a[0],
			isOddOneOut: !1
		},
		{
			value: a[1],
			isOddOneOut: !1
		},
		{
			value: a[2],
			isOddOneOut: !1
		},
		{
			value: o,
			isOddOneOut: !0
		}
	];
	for (let e = s.length - 1; e > 0; e--) {
		let t = sm(n, 0, e), r = s[e];
		s[e] = s[t], s[t] = r;
	}
	let c = [
		"a",
		"b",
		"c",
		"d"
	], l = "", u = s.map((e, t) => {
		let n = c[t];
		return e.isOddOneOut && (l = n), {
			id: n,
			label: String(e.value)
		};
	});
	return {
		id: `number-sense-odd-even-${e}-${t}`,
		grade: e,
		kind: "odd-one-out",
		prompt: "Which of these numbers is the odd one out?",
		options: u,
		correctOptionId: l
	};
}
function mm(e, t) {
	if (!cm(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = om(t);
	return e === 5 && n() < .5 ? pm(e, t, n) : fm(e, t, n);
}
//#endregion
//#region packages/number-sense-odd-even/src/plugin.ts
function hm(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function gm(e, t, n, r, i, a) {
	return {
		competencyId: am,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: hm(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function _m(e, t) {
	let n = om(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(mm(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var vm = {
	id: "number-sense-odd-even",
	competencyIds: [am],
	generateQuestion(e, t) {
		return mm(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: hm
}, ym = "math.number-sense.ordinals";
//#endregion
//#region packages/number-sense-ordinals/src/ordinal.ts
function bm(e) {
	let t = e % 100;
	if (t >= 11 && t <= 13) return `${e}th`;
	switch (e % 10) {
		case 1: return `${e}st`;
		case 2: return `${e}nd`;
		case 3: return `${e}rd`;
		default: return `${e}th`;
	}
}
//#endregion
//#region packages/number-sense-ordinals/src/rng.ts
function xm(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Sm(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-ordinals/src/generate.ts
var Cm = {
	1: 5,
	2: 10,
	3: 20,
	4: 50,
	5: 100
};
function wm(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
function Tm(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = Sm(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Em(e, t) {
	let n = Tm(e, t), r = n.map((e, t) => ({
		id: `opt-${t}`,
		label: e.label
	}));
	return {
		options: r,
		correctOptionId: r[n.findIndex((e) => e.correct)].id
	};
}
function Dm(e, t) {
	let n = [
		e - 1,
		e + 1,
		e + 2,
		e - 2,
		e + 3,
		e - 3
	], r = /* @__PURE__ */ new Set(), i = [];
	for (let a of n) a >= 1 && a <= t && a !== e && !r.has(a) && (r.add(a), i.push(a));
	return i;
}
function Om(e, t, n, r) {
	let i = new Set(t), a = [];
	for (let t of e) {
		if (a.length >= r) break;
		i.has(t) || (a.push(t), i.add(t));
	}
	for (let e = 1; e <= n && a.length < r; e++) i.has(e) || (a.push(e), i.add(e));
	return a;
}
function km(e, t, n, r) {
	let i = Om(Dm(e, t), /* @__PURE__ */ new Set([e]), t, 3);
	return Em([{
		label: r(e),
		correct: !0
	}, ...i.map((e) => ({
		label: r(e),
		correct: !1
	}))], n);
}
function Am(e, t) {
	if (!wm(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Cm[e], r = xm(t), i = r() < .5 ? "number-to-word" : "word-to-number", a = Sm(r, 1, n), { options: o, correctOptionId: s } = i === "number-to-word" ? km(a, n, r, bm) : km(a, n, r, String), c = i === "number-to-word" ? `What is the ordinal (position) word for ${a}?` : `Which number is ${bm(a)}?`;
	return {
		id: `number-sense-ordinals-${e}-${t}`,
		grade: e,
		kind: i,
		prompt: c,
		options: o,
		correctOptionId: s
	};
}
//#endregion
//#region packages/number-sense-ordinals/src/plugin.ts
function jm(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Mm(e, t, n, r, i, a) {
	return {
		competencyId: ym,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: jm(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Nm(e, t) {
	let n = xm(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Am(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Pm = {
	id: "number-sense-ordinals",
	competencyIds: [ym],
	generateQuestion(e, t) {
		return Am(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: jm
}, Fm = "math.number-sense.primes-factors";
//#endregion
//#region packages/number-sense-primes-factors/src/rng.ts
function Im(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Y(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-primes-factors/src/generate.ts
function Lm(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Rm(e) {
	if (e < 2) return !1;
	for (let t = 2; t * t <= e; t++) if (e % t === 0) return !1;
	return !0;
}
function zm(e, t) {
	return t === 0 ? e : zm(t, e % t);
}
function Bm(e, t) {
	return e * t / zm(e, t);
}
var Vm = {
	1: 20,
	2: 50,
	5: 50
}, Hm = {
	3: 50,
	4: 100,
	5: 100
};
function Um(e, t) {
	let n = [];
	for (let e = 2; e < t; e++) t % e === 0 && n.push(e);
	return n.length === 0 ? Y(e, 2, t - 1) : n[Y(e, 0, n.length - 1)];
}
function Wm(e, t) {
	let n = Y(e, 2, t - 1), r = 0;
	for (; t % n === 0 && r < 20;) n = Y(e, 2, t - 1), r++;
	return n;
}
function Gm(e, t, n) {
	let r = Y(n, 2, Vm[e] ?? 50);
	return {
		id: `number-sense-primes-factors-${e}-${t}`,
		grade: e,
		kind: "is-prime",
		prompt: `Is ${r} a prime number?`,
		options: [{
			id: "yes",
			label: "Yes"
		}, {
			id: "no",
			label: "No"
		}],
		correctOptionId: Rm(r) ? "yes" : "no",
		n: r
	};
}
function Km(e, t, n) {
	let r = Y(n, 4, (Hm[e] ?? 100) - 1), i = n() < .5 ? Um(n, r) : Wm(n, r);
	return {
		id: `number-sense-primes-factors-${e}-${t}`,
		grade: e,
		kind: "is-factor",
		prompt: `Is ${i} a factor of ${r}?`,
		options: [{
			id: "yes",
			label: "Yes"
		}, {
			id: "no",
			label: "No"
		}],
		correctOptionId: r % i === 0 ? "yes" : "no"
	};
}
function qm(e, t, n) {
	let r = Y(n, 2, 12), i = Y(n, 2, 12);
	for (; i === r;) i = Y(n, 2, 12);
	return {
		id: `number-sense-primes-factors-${e}-${t}`,
		grade: e,
		kind: "common-multiple",
		prompt: `What is the smallest common multiple of ${r} and ${i}?`,
		numericAnswer: Bm(r, i)
	};
}
function Jm(e, t) {
	if (!Lm(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Im(t);
	if (e === 1 || e === 2) return Gm(e, t, n);
	if (e === 3 || e === 4) return Km(e, t, n);
	switch (Y(n, 0, 2)) {
		case 0: return Gm(e, t, n);
		case 1: return Km(e, t, n);
		default: return qm(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-primes-factors/src/plugin.ts
function Ym(e) {
	if (e.kind === "common-multiple") {
		let t = e.prompt.match(/of (\d+) and (\d+)/);
		return {
			presentation: {
				kind: "equation",
				equation: t ? `LCM(${t[1]}, ${t[2]})` : e.prompt
			},
			correctAnswer: e.numericAnswer
		};
	}
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Xm(e, t, n, r, i, a) {
	return {
		competencyId: Fm,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Ym(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Zm(e, t) {
	let n = Im(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Jm(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Qm = {
	id: "number-sense-primes-factors",
	competencyIds: [Fm],
	generateQuestion(e, t) {
		return Jm(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "common-multiple" ? { correct: t === e.numericAnswer } : { correct: t === e.correctOptionId };
	},
	toPresentation: Ym
}, $m = "math.number-sense.roman-numerals";
//#endregion
//#region packages/number-sense-roman-numerals/src/rng.ts
function eh(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function th(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-roman-numerals/src/generate.ts
var nh = [
	[1e3, "M"],
	[900, "CM"],
	[500, "D"],
	[400, "CD"],
	[100, "C"],
	[90, "XC"],
	[50, "L"],
	[40, "XL"],
	[10, "X"],
	[9, "IX"],
	[5, "V"],
	[4, "IV"],
	[1, "I"]
];
function rh(e) {
	let t = e, n = "";
	for (let [e, r] of nh) for (; t >= e;) n += r, t -= e;
	return n;
}
function ih(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var ah = {
	1: [1, 10],
	2: [1, 50],
	3: [1, 100],
	4: [1, 500],
	5: [1, 1e3]
};
function oh(e, t) {
	return e <= 3 || t() < .5 ? "read" : "write";
}
function sh(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = th(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function ch(e, t, n, r) {
	let i = /* @__PURE__ */ new Set();
	for (let a of [
		1,
		-1,
		5,
		-5,
		2,
		-2,
		10,
		-10,
		3,
		-3,
		7,
		-7
	]) {
		if (i.size >= r) break;
		let o = e + a;
		o >= t && o <= n && o !== e && i.add(o);
	}
	let a = t;
	for (; i.size < r && a <= n;) a !== e && i.add(a), a++;
	return Array.from(i).slice(0, r);
}
function lh(e, t, n) {
	let [r, i] = t, a = sh([e, ...ch(e, r, i, 3)], n), o = a.map((e, t) => ({
		id: `opt-${t}`,
		label: String(e)
	})), s = a.indexOf(e);
	return {
		prompt: `Which number does the Roman numeral ${rh(e)} represent?`,
		options: o,
		correctOptionId: `opt-${s}`
	};
}
function uh(e, t, n) {
	let [r, i] = t, a = ch(e, r, i, 3), o = sh([rh(e), ...a.map(rh)], n), s = o.map((e, t) => ({
		id: `opt-${t}`,
		label: e
	})), c = o.indexOf(rh(e));
	return {
		prompt: `Which Roman numeral represents ${e}?`,
		options: s,
		correctOptionId: `opt-${c}`
	};
}
function dh(e, t) {
	if (!ih(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = eh(t), r = ah[e], i = oh(e, n), a = th(n, r[0], r[1]), { prompt: o, options: s, correctOptionId: c } = i === "read" ? lh(a, r, n) : uh(a, r, n);
	return {
		id: `number-sense-roman-numerals-${e}-${t}`,
		grade: e,
		direction: i,
		prompt: o,
		options: s,
		correctOptionId: c
	};
}
//#endregion
//#region packages/number-sense-roman-numerals/src/plugin.ts
function fh(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function ph(e, t, n, r, i, a) {
	return {
		competencyId: $m,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: fh(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function mh(e, t) {
	let n = eh(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(dh(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var hh = {
	id: "number-sense-roman-numerals",
	competencyIds: [$m],
	generateQuestion(e, t) {
		return dh(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: fh
};
//#endregion
//#region packages/number-sense-skip-counting/src/rng.ts
function gh(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function _h(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-skip-counting/src/generate.ts
function vh(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function yh() {
	return {
		step: 2,
		maxRange: 20
	};
}
function bh() {
	return {
		step: 2,
		maxRange: 50
	};
}
function xh() {
	return {
		step: 5,
		maxRange: 100
	};
}
function Sh() {
	return {
		step: 10,
		maxRange: 200
	};
}
function Ch(e) {
	let t = [
		2,
		5,
		10,
		25,
		50
	];
	return {
		step: t[_h(e, 0, t.length - 1)],
		maxRange: 500
	};
}
function wh(e, t) {
	if (!vh(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = gh(t), { step: r, maxRange: i } = e === 1 ? yh() : e === 2 ? bh() : e === 3 ? xh() : e === 4 ? Sh() : Ch(n), a = _h(n, 0, (i - r * 4) / r) * r, o = a, s = a + r, c = a + r * 2, l = a + r * 3;
	return {
		id: `number-sense-skip-counting-${e}-${t}`,
		grade: e,
		step: r,
		sequence: [
			o,
			s,
			c
		],
		prompt: `${o}, ${s}, ${c}, ?`,
		correctAnswer: l
	};
}
//#endregion
//#region packages/number-sense-skip-counting/src/plugin.ts
var Th = "math.number-sense.skip-counting";
function Eh(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.sequence[0]}, ${e.sequence[1]}, ${e.sequence[2]}`
		},
		correctAnswer: e.correctAnswer
	};
}
function Dh(e, t, n, r, i, a) {
	return {
		competencyId: Th,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Eh(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Oh(e, t) {
	let n = gh(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(wh(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var kh = {
	id: "number-sense-skip-counting",
	competencyIds: [Th],
	generateQuestion(e, t) {
		return wh(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation: Eh
};
//#endregion
//#region packages/number-sense-squares/src/rng.ts
function Ah(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function jh(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-squares/src/generate.ts
function Mh(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
var Nh = [{
	id: "yes",
	label: "Yes"
}, {
	id: "no",
	label: "No"
}], Ph = {
	1: {
		baseMin: 1,
		baseMax: 5,
		numberMin: 1,
		numberMax: 25
	},
	2: {
		baseMin: 1,
		baseMax: 8,
		numberMin: 1,
		numberMax: 64
	},
	3: {
		baseMin: 1,
		baseMax: 12,
		numberMin: 1,
		numberMax: 144
	}
}, Fh = {
	4: {
		baseMin: 1,
		baseMax: 8
	},
	5: {
		baseMin: 1,
		baseMax: 12
	}
};
function Ih(e) {
	return Number.isInteger(Math.sqrt(e));
}
function Lh(e, t, n) {
	let { baseMin: r, baseMax: i, numberMin: a, numberMax: o } = Ph[e], s = n() < .5 ? (() => {
		let e = jh(n, r, i);
		return e * e;
	})() : jh(n, a, o), c = Ih(s) ? "yes" : "no";
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recognize",
		prompt: `Is ${s} a square number?`,
		options: Nh,
		correctOptionId: c
	};
}
function Rh(e, t, n) {
	let { baseMin: r, baseMax: i } = Fh[e], a = jh(n, r, i);
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recall",
		prompt: `What is ${a} squared?`,
		numericAnswer: a * a
	};
}
function zh(e, t) {
	if (!Mh(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ah(t);
	switch (e) {
		case 1:
		case 2:
		case 3: return Lh(e, t, n);
		case 4:
		case 5: return Rh(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-squares/src/plugin.ts
var Bh = "math.number-sense.squares";
function Vh(e) {
	if (e.kind === "recall") {
		let t = Math.sqrt(e.numericAnswer);
		return {
			presentation: {
				kind: "equation",
				equation: `${t} × ${t}`
			},
			correctAnswer: e.numericAnswer
		};
	}
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Hh(e, t, n, r, i, a) {
	return {
		competencyId: Bh,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Vh(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Uh(e, t) {
	let n = Ah(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(zh(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Wh = {
	id: "number-sense-squares",
	competencyIds: [Bh],
	generateQuestion(e, t) {
		return zh(e, t);
	},
	validateAnswer(e, t) {
		switch (e.kind) {
			case "recall": return { correct: t === e.numericAnswer };
			case "recognize": return { correct: t === e.correctOptionId };
		}
	},
	toPresentation: Vh
};
//#endregion
//#region packages/place-value-multiply-divide-ten/src/rng.ts
function Gh(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function X(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-multiply-divide-ten/src/generate.ts
function Kh(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function qh(e) {
	return `${Math.floor(e / 10)}.${e % 10}`;
}
function Jh(e) {
	let t = X(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 10`,
		correctAnswer: t * 10
	};
}
function Yh(e) {
	let t = X(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 100`,
		correctAnswer: t * 100
	};
}
function Xh(e) {
	let t = X(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 1000`,
		correctAnswer: t * 1e3
	};
}
function Zh(e) {
	let t = e() < .5 ? 10 : 100, n = X(e, 1, 999);
	return {
		operator: "÷",
		equation: `${n * t} ÷ ${t}`,
		correctAnswer: n
	};
}
function Qh(e) {
	let t = X(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 1e3} ÷ 1000`,
		correctAnswer: t
	};
}
function $h(e) {
	let t = X(e, 1, 999);
	return {
		operator: "×",
		equation: `${qh(t)} × 10`,
		correctAnswer: t
	};
}
function eg(e) {
	let t = X(e, 1, 999);
	return {
		operator: "×",
		equation: `${qh(t)} × 100`,
		correctAnswer: t * 10
	};
}
function tg(e) {
	let t = X(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 10} ÷ 10`,
		correctAnswer: t
	};
}
var ng = [
	Qh,
	$h,
	eg,
	tg
];
function rg(e) {
	let t = ng[X(e, 0, ng.length - 1)];
	return t(e);
}
function ig(e, t) {
	if (!Kh(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Gh(t), { operator: r, equation: i, correctAnswer: a } = e === 1 ? Jh(n) : e === 2 ? Yh(n) : e === 3 ? Xh(n) : e === 4 ? Zh(n) : rg(n);
	return {
		id: `place-value-multiply-divide-ten-${e}-${t}`,
		grade: e,
		operator: r,
		equation: i,
		correctAnswer: a
	};
}
//#endregion
//#region packages/place-value-multiply-divide-ten/src/plugin.ts
var ag = "math.place-value.multiply-divide-ten";
function og(e) {
	return {
		presentation: {
			kind: "equation",
			equation: e.equation
		},
		correctAnswer: e.correctAnswer
	};
}
function sg(e, t, n, r, i, a) {
	return {
		competencyId: ag,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: og(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function cg(e, t) {
	let n = Gh(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ig(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var lg = {
	id: "place-value-multiply-divide-ten",
	competencyIds: [ag],
	generateQuestion(e, t) {
		return ig(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation: og
};
//#endregion
//#region packages/place-value-powers-of-ten/src/rng.ts
function ug(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function dg(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-powers-of-ten/src/generate.ts
function fg(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var pg = [
	1,
	10,
	100,
	1e3
];
function mg(e) {
	return {
		operand: dg(e, 1, 99),
		magnitude: 1
	};
}
function hg(e) {
	return {
		operand: dg(e, 10, 999),
		magnitude: 10
	};
}
function gg(e) {
	return {
		operand: dg(e, 100, 9999),
		magnitude: 100
	};
}
function _g(e) {
	return {
		operand: dg(e, 1e3, 99999),
		magnitude: 1e3
	};
}
function vg(e) {
	let t = pg[dg(e, 0, pg.length - 1)];
	return {
		operand: dg(e, t, 999999),
		magnitude: t
	};
}
function yg(e, t) {
	if (!fg(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = ug(t), { operand: r, magnitude: i } = e === 1 ? mg(n) : e === 2 ? hg(n) : e === 3 ? gg(n) : e === 4 ? _g(n) : vg(n), a = n() < .5 ? "+" : "-", o = a === "+" ? r + i : r - i;
	return {
		id: `place-value-powers-of-ten-${e}-${t}`,
		grade: e,
		operand: r,
		magnitude: i,
		operator: a,
		equation: `${r} ${a} ${i}`,
		correctAnswer: o
	};
}
//#endregion
//#region packages/place-value-powers-of-ten/src/plugin.ts
var bg = "math.place-value.powers-of-ten";
function xg(e) {
	return {
		presentation: {
			kind: "equation",
			equation: e.equation
		},
		correctAnswer: e.correctAnswer
	};
}
function Sg(e, t, n, r, i, a) {
	return {
		competencyId: bg,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: xg(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Cg(e, t) {
	let n = ug(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(yg(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var wg = {
	id: "place-value-powers-of-ten",
	competencyIds: [bg],
	generateQuestion(e, t) {
		return yg(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation: xg
}, Tg = "math.place-value.rounding";
//#endregion
//#region packages/place-value-rounding/src/rng.ts
function Eg(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Dg(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-rounding/src/generate.ts
function Og(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function kg(e, t) {
	let n = e % t, r = e - n;
	return n * 2 >= t ? r + t : r;
}
function Ag(e, t) {
	return e - e % t;
}
function jg(e, t) {
	let n = e % t;
	return n === 0 ? e : e - n + t;
}
function Mg(e, t) {
	let n = String(e).padStart(t + 1, "0");
	return `${n.slice(0, -t)}.${n.slice(-t)}`;
}
function Ng(e, t, n) {
	let r = /* @__PURE__ */ new Set([e]), i = [];
	for (let e of t) if (!r.has(e) && (r.add(e), i.push(e), i.length === 3)) return i;
	let a = 1;
	for (; i.length < 3;) {
		let e = n(a);
		a += 1, r.has(e) || (r.add(e), i.push(e));
	}
	return i;
}
function Pg(e, t, n, r, i, a) {
	let o = [{
		label: i,
		isCorrect: !0
	}, ...a.map((e) => ({
		label: e,
		isCorrect: !1
	}))];
	for (let e = o.length - 1; e > 0; e--) {
		let t = Dg(n, 0, e), r = o[e];
		o[e] = o[t], o[t] = r;
	}
	let s = "", c = o.map((e, t) => {
		let n = `opt-${t}`;
		return e.isCorrect && (s = n), {
			id: n,
			label: e.label
		};
	});
	return {
		id: `place-value-rounding-${e}-${t}`,
		grade: e,
		prompt: r,
		options: c,
		correctOptionId: s
	};
}
var Fg = {
	1: 999,
	2: 9999,
	3: 99999
}, Ig = {
	1: 10,
	2: 100,
	3: 1e3
}, Lg = {
	1: "10",
	2: "100",
	3: "1,000"
};
function Rg(e, t, n) {
	let r = Ig[e], i = Dg(n, 0, Fg[e]), a = kg(i, r), o = String(a), s = Ng(o, [
		Ag(i, r),
		jg(i, r),
		i,
		a - r,
		a + r,
		a - 2 * r,
		a + 2 * r
	].filter((e) => e >= 0).map(String), (e) => String(a + (e + 2) * r));
	return Pg(e, t, n, `Round ${i} to the nearest ${Lg[e]}.`, o, s);
}
var zg = {
	4: {
		maxScaled: 999,
		sourceDecimalPlaces: 2,
		targetDecimalPlaces: 1,
		precisionLabel: "1"
	},
	5: {
		maxScaled: 9999,
		sourceDecimalPlaces: 3,
		targetDecimalPlaces: 2,
		precisionLabel: "2"
	}
}, Bg = 10;
function Vg(e, t, n) {
	let { maxScaled: r, sourceDecimalPlaces: i, targetDecimalPlaces: a, precisionLabel: o } = zg[e], s = Dg(n, 0, r), c = Mg(s, i), l = kg(s, Bg) / Bg, u = Mg(l, a), d = Ag(s, Bg) / Bg, f = jg(s, Bg) / Bg, p = Ng(u, [
		Mg(d, a),
		Mg(f, a),
		c,
		...[
			l - 1,
			l + 1,
			l - 2,
			l + 2
		].filter((e) => e >= 0).map((e) => Mg(e, a))
	], (e) => Mg(l + e + 2, a));
	return Pg(e, t, n, `Round ${c} to ${o} decimal place${o === "1" ? "" : "s"}.`, u, p);
}
function Hg(e, t) {
	if (!Og(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Eg(t);
	return e === 1 || e === 2 || e === 3 ? Rg(e, t, n) : Vg(e, t, n);
}
//#endregion
//#region packages/place-value-rounding/src/plugin.ts
function Ug(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Wg(e, t, n, r, i, a) {
	return {
		competencyId: Tg,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Ug(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Gg(e, t) {
	let n = Eg(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Hg(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Kg = {
	id: "place-value-rounding",
	competencyIds: [Tg],
	generateQuestion(e, t) {
		return Hg(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Ug
}, qg = "math.place-value.understanding";
//#endregion
//#region packages/place-value-understanding/src/rng.ts
function Jg(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Yg(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-understanding/src/generate.ts
function Xg(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Zg = {
	name: "units",
	value: 1,
	decimals: 0
}, Qg = {
	name: "tens",
	value: 10,
	decimals: 0
}, $g = {
	name: "hundreds",
	value: 100,
	decimals: 0
}, e_ = {
	name: "thousands",
	value: 1e3,
	decimals: 0
}, t_ = {
	name: "ten-thousands",
	value: 1e4,
	decimals: 0
}, n_ = {
	name: "hundred-thousands",
	value: 1e5,
	decimals: 0
}, r_ = {
	name: "millions",
	value: 1e6,
	decimals: 0
}, i_ = {
	name: "ones",
	value: 1,
	decimals: 0
}, a_ = {
	name: "tenths",
	value: .1,
	decimals: 1
}, o_ = {
	name: "hundredths",
	value: .01,
	decimals: 2
}, s_ = {
	name: "thousandths",
	value: .001,
	decimals: 3
}, Z = {
	1: [Zg, Qg],
	2: [
		Zg,
		Qg,
		$g
	],
	3: [
		Zg,
		Qg,
		$g,
		e_
	],
	4: [
		Zg,
		Qg,
		$g,
		e_,
		t_,
		n_,
		r_
	]
}, c_ = [
	s_,
	o_,
	a_,
	i_
], l_ = [
	s_,
	o_,
	a_
], u_ = {
	1: {
		composePlaces: Z[1],
		scopePlaces: Z[1],
		isDecimal: !1
	},
	2: {
		composePlaces: Z[2],
		scopePlaces: Z[2],
		isDecimal: !1
	},
	3: {
		composePlaces: Z[3],
		scopePlaces: Z[3],
		isDecimal: !1
	},
	4: {
		composePlaces: Z[4],
		scopePlaces: Z[4],
		isDecimal: !1
	},
	5: {
		composePlaces: c_,
		scopePlaces: l_,
		isDecimal: !0
	}
};
function d_(e, t) {
	let n = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9
	];
	for (let t = n.length - 1; t > 0; t--) {
		let r = Yg(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n.slice(0, t);
}
function Q(e, t) {
	return t.decimals === 0 ? String(e * t.value) : `0.${"0".repeat(t.decimals - 1)}${e}`;
}
function f_(e, t) {
	if (!e.isDecimal) {
		let n = t.reduce((t, n, r) => t + n * e.composePlaces[r].value, 0);
		return String(n);
	}
	let [n, r, i, a] = t;
	return `${a}.${i}${r}${n}`;
}
function p_(e) {
	return e.length === 1 ? e[0] : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
function m_(e, t, n) {
	let r = t.map((e, t) => ({
		label: e,
		isCorrect: t === n
	}));
	for (let t = r.length - 1; t > 0; t--) {
		let n = Yg(e, 0, t), i = r[t];
		r[t] = r[n], r[n] = i;
	}
	let i = "";
	return {
		options: r.map((e, t) => {
			let n = `opt-${t}`;
			return e.isCorrect && (i = n), {
				id: n,
				label: e.label
			};
		}),
		correctOptionId: i
	};
}
function h_(e, t, n, r) {
	let i = e[t], a = n.get(i.name), o = [], s = /* @__PURE__ */ new Set([r]);
	function c(e) {
		o.length >= 3 || s.has(e) || (s.add(e), o.push(e));
	}
	c(String(a)), t > 0 && c(Q(a, e[t - 1])), t < e.length - 1 && c(Q(a, e[t + 1]));
	for (let [e, t] of n) e !== i.name && c(Q(t, i));
	for (let e of [
		1,
		-1,
		2,
		-2
	]) {
		let t = a + e;
		t >= 1 && t <= 9 && c(Q(t, i));
	}
	for (let e = 1; e <= 9 && o.length < 3; e++) c(Q(e, i));
	return o;
}
function g_(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set([n]), a = t.length;
	function o(t) {
		if (r.length >= 3) return;
		let n = f_(e, t);
		i.has(n) || (i.add(n), r.push(n));
	}
	for (let e = 0; e < a - 1; e++) {
		let n = t.slice(), r = n[e];
		n[e] = n[e + 1], n[e + 1] = r, o(n);
	}
	for (let e = 0; e + 2 < a; e++) {
		let n = t.slice(), r = n[e];
		n[e] = n[e + 2], n[e + 2] = r, o(n);
	}
	o(t.slice().reverse());
	for (let e = 0; e < a && r.length < 3; e++) for (let n of [
		1,
		-1,
		2,
		-2
	]) {
		if (r.length >= 3) break;
		let i = t[e] + n;
		if (i >= 1 && i <= 9 && !t.includes(i)) {
			let n = t.slice();
			n[e] = i, o(n);
		}
	}
	for (let e = 0; e < a && r.length < 3; e++) for (let n = 1; n <= 9 && r.length < 3; n++) {
		if (t.includes(n)) continue;
		let r = t.slice();
		r[e] = n, o(r);
	}
	return r;
}
function __(e, t, n, r) {
	let i = d_(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = f_(r, i), s = Yg(n, 0, r.scopePlaces.length - 1), c = r.scopePlaces[s], l = Q(a.get(c.name), c), { options: u, correctOptionId: d } = m_(n, [l, ...h_(r.scopePlaces, s, a, l)], 0);
	return {
		question: {
			id: `place-value-understanding-${e}-${t}`,
			grade: e,
			kind: "digit-value",
			prompt: `What is the value of the ${c.name} digit in ${o}?`,
			options: u,
			correctOptionId: d
		},
		config: r,
		digits: i,
		digitsByPlaceName: a,
		selectedPlace: c
	};
}
function v_(e, t, n, r) {
	let i = d_(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = f_(r, i), { options: s, correctOptionId: c } = m_(n, [o, ...g_(r, i, o)], 0), l = [...r.composePlaces].reverse(), u = [...i].reverse(), d = l.map((e, t) => `${u[t]} ${e.name}`), f = `Which number ${r.isDecimal ? "is" : "has"} ${p_(d)}?`;
	return {
		question: {
			id: `place-value-understanding-${e}-${t}`,
			grade: e,
			kind: "compose",
			prompt: f,
			options: s,
			correctOptionId: c
		},
		config: r,
		digits: i,
		digitsByPlaceName: a
	};
}
function y_(e, t) {
	if (!Xg(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Jg(t), r = n() < .5 ? "digit-value" : "compose", i = u_[e];
	return r === "digit-value" ? __(e, t, n, i) : v_(e, t, n, i);
}
function b_(e, t) {
	return y_(e, t).question;
}
//#endregion
//#region packages/place-value-understanding/src/plugin.ts
function x_(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function S_(e, t, n, r, i, a) {
	return {
		competencyId: qg,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: x_(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function C_(e, t) {
	let n = Jg(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(b_(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var w_ = {
	id: "place-value-understanding",
	competencyIds: [qg],
	generateQuestion(e, t) {
		return b_(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: x_
};
//#endregion
//#region node_modules/@learncoreskills/plugin-engine/dist/src/registry.js
function T_(e, t) {
	let n = [], r = new Set(t.map((e) => e.id)), i = /* @__PURE__ */ new Set();
	for (let t of e) i.has(t.id) && n.push({
		kind: "duplicate-plugin-id",
		id: t.id
	}), i.add(t.id);
	for (let t of e) for (let e of t.competencyIds) r.has(e) || n.push({
		kind: "unknown-competency-reference",
		pluginId: t.id,
		competencyId: e
	});
	return {
		valid: n.length === 0,
		errors: n
	};
}
function E_(e) {
	switch (e.kind) {
		case "duplicate-plugin-id": return `duplicate plugin id: "${e.id}"`;
		case "unknown-competency-reference": return `plugin "${e.pluginId}" references unknown competency id: "${e.competencyId}"`;
	}
}
function D_(e, t) {
	let n = T_(e, t);
	if (!n.valid) {
		let e = n.errors.map(E_).join("; ");
		throw Error(`Invalid plugin registry: ${e}`);
	}
	let r = new Map(e.map((e) => [e.id, e]));
	return {
		getPlugin(e) {
			return r.get(e);
		},
		getPluginsForCompetency(t) {
			return e.filter((e) => e.competencyIds.includes(t));
		},
		all() {
			return [...e];
		}
	};
}
//#endregion
//#region src/pluginRegistry.ts
var O_ = D_([
	Qf,
	Pp,
	bp,
	lp,
	Qd,
	Pd,
	ff,
	Sd,
	Rf,
	Df,
	qp,
	kh,
	vm,
	Pm,
	im,
	Qm,
	Wh,
	hh,
	w_,
	wg,
	Kg,
	lg,
	...Xe,
	...on,
	...hr,
	...Ei,
	...so,
	...ju
], [
	Pu,
	Fu,
	Iu,
	Lu,
	W,
	Ru,
	zu,
	Bu,
	Vu,
	Hu,
	G,
	Uu,
	Wu,
	Gu,
	Ku,
	qu,
	Ju,
	Yu,
	Xu,
	Zu,
	Qu,
	$u,
	ed,
	td,
	nd,
	rd,
	...te,
	...bt,
	...Nn,
	...qr,
	..._a,
	...Lo
]);
//#endregion
//#region src/exerciseDefinitions.ts
function $(e, t) {
	let n = O_.getPlugin(e);
	return {
		grade: t.grade,
		questions: t.questions.map((e) => {
			let { presentation: t, correctAnswer: r } = n.toPresentation(e);
			return {
				raw: e,
				id: e.id,
				grade: e.grade,
				presentation: t,
				correctAnswer: r
			};
		})
	};
}
var k_ = {
	key: "addition",
	label: "Addition",
	icon: "➕",
	pluginId: "mental-addition",
	competency: Pu,
	competencies: [Pu],
	createSession(e, t) {
		return $("mental-addition", Zf(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Xf(e, t, n, r, i, a)
}, A_ = {
	key: "subtraction",
	label: "Subtraction",
	icon: "➖",
	pluginId: "mental-subtraction",
	competency: Fu,
	competencies: [Fu],
	createSession(e, t) {
		return $("mental-subtraction", Np(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Mp(e, t, n, r, i, a)
}, j_ = {
	key: "multiplication",
	label: "Multiplication",
	icon: "✖️",
	pluginId: "mental-multiplication",
	competency: Iu,
	competencies: [Iu],
	createSession(e, t) {
		return $("mental-multiplication", yp(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => vp(e, t, n, r, i, a)
}, M_ = {
	key: "division",
	label: "Division",
	icon: "➗",
	pluginId: "mental-division",
	competency: Lu,
	competencies: [Lu],
	createSession(e, t) {
		return $("mental-division", cp(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => sp(e, t, n, r, i, a)
}, N_ = {
	key: "baseline-counting-quantities",
	label: "Counting & Quantities",
	icon: "🔢",
	pluginId: "baseline-counting-quantities",
	competency: W,
	competencies: [
		W,
		Ru,
		zu,
		Bu
	],
	competencyLabels: {
		[W.id]: "Counting to 20",
		[Ru.id]: "Subitizing to 5",
		[zu.id]: "Recognising digits",
		[Bu.id]: "Comparing groups"
	},
	createSession(e, t) {
		return $("baseline-counting-quantities", Zd(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Xd(e, t, n, r, i, a)
}, P_ = {
	key: "baseline-concrete-addition-subtraction",
	label: "Concrete Addition & Subtraction",
	icon: "🍎",
	pluginId: "baseline-concrete-addition-subtraction",
	competency: Vu,
	competencies: [Vu],
	createSession(e, t) {
		return $("baseline-concrete-addition-subtraction", Nd(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Md(e, t, n, r, i, a)
}, F_ = {
	key: "baseline-direct-comparison",
	label: "Direct Comparison",
	icon: "⚖️",
	pluginId: "baseline-direct-comparison",
	competency: Hu,
	competencies: [Hu],
	createSession(e, t) {
		return $("baseline-direct-comparison", df(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => uf(e, t, n, r, i, a)
}, I_ = {
	key: "baseline-calendar-time-basics",
	label: "Calendar & Time Basics",
	icon: "📅",
	pluginId: "baseline-calendar-time-basics",
	competency: G,
	competencies: [G, Uu],
	competencyLabels: {
		[G.id]: "Order of the day",
		[Uu.id]: "Days of the week"
	},
	createSession(e, t) {
		return $("baseline-calendar-time-basics", xd(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => bd(e, t, n, r, i, a)
}, L_ = {
	key: "baseline-shape-recognition",
	label: "Shape Recognition",
	icon: "🔺",
	pluginId: "baseline-shape-recognition",
	competency: Wu,
	competencies: [Wu],
	createSession(e, t) {
		return $("baseline-shape-recognition", Lf(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => If(e, t, n, r, i, a)
}, R_ = {
	key: "baseline-positional-language",
	label: "Positional Language",
	icon: "📍",
	pluginId: "baseline-positional-language",
	competency: Gu,
	competencies: [Gu],
	createSession(e, t) {
		return $("baseline-positional-language", Ef(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Tf(e, t, n, r, i, a)
}, z_ = {
	key: "number-sense-counting-range",
	label: "Counting & Number Range",
	icon: "🔢",
	pluginId: "number-sense-counting-range",
	competency: Ku,
	competencies: [Ku],
	createSession(e, t) {
		return $("number-sense-counting-range", Kp(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Gp(e, t, n, r, i, a)
}, B_ = {
	key: "number-sense-skip-counting",
	label: "Skip Counting",
	icon: "➡️",
	pluginId: "number-sense-skip-counting",
	competency: qu,
	competencies: [qu],
	createSession(e, t) {
		return $("number-sense-skip-counting", Oh(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Dh(e, t, n, r, i, a)
}, V_ = {
	key: "number-sense-odd-even",
	label: "Odd & Even",
	icon: "🔀",
	pluginId: "number-sense-odd-even",
	competency: Ju,
	competencies: [Ju],
	createSession(e, t) {
		return $("number-sense-odd-even", _m(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => gm(e, t, n, r, i, a)
}, H_ = {
	key: "number-sense-ordinals",
	label: "Ordinal Numbers",
	icon: "🥇",
	pluginId: "number-sense-ordinals",
	competency: Yu,
	competencies: [Yu],
	createSession(e, t) {
		return $("number-sense-ordinals", Nm(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Mm(e, t, n, r, i, a)
}, U_ = {
	key: "number-sense-negative-numbers",
	label: "Negative Numbers",
	icon: "🌡️",
	pluginId: "number-sense-negative-numbers",
	competency: Xu,
	competencies: [Xu],
	createSession(e, t) {
		return $("number-sense-negative-numbers", rm(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => nm(e, t, n, r, i, a)
}, W_ = {
	key: "number-sense-primes-factors",
	label: "Primes & Factors",
	icon: "🧮",
	pluginId: "number-sense-primes-factors",
	competency: Zu,
	competencies: [Zu],
	createSession(e, t) {
		return $("number-sense-primes-factors", Zm(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Xm(e, t, n, r, i, a)
}, G_ = {
	key: "number-sense-squares",
	label: "Square Numbers",
	icon: "⬜",
	pluginId: "number-sense-squares",
	competency: Qu,
	competencies: [Qu],
	createSession(e, t) {
		return $("number-sense-squares", Uh(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Hh(e, t, n, r, i, a)
}, K_ = {
	key: "number-sense-roman-numerals",
	label: "Roman Numerals",
	icon: "🏛️",
	pluginId: "number-sense-roman-numerals",
	competency: $u,
	competencies: [$u],
	createSession(e, t) {
		return $("number-sense-roman-numerals", mh(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => ph(e, t, n, r, i, a)
}, q_ = {
	key: "place-value-understanding",
	label: "Place Value Understanding",
	icon: "🔟",
	pluginId: "place-value-understanding",
	competency: ed,
	competencies: [ed],
	createSession(e, t) {
		return $("place-value-understanding", C_(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => S_(e, t, n, r, i, a)
}, J_ = {
	key: "place-value-powers-of-ten",
	label: "Add/Subtract Powers of Ten",
	icon: "➕",
	pluginId: "place-value-powers-of-ten",
	competency: td,
	competencies: [td],
	createSession(e, t) {
		return $("place-value-powers-of-ten", Cg(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Sg(e, t, n, r, i, a)
}, Y_ = {
	key: "place-value-rounding",
	label: "Rounding",
	icon: "🔵",
	pluginId: "place-value-rounding",
	competency: nd,
	competencies: [nd],
	createSession(e, t) {
		return $("place-value-rounding", Gg(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Wg(e, t, n, r, i, a)
}, X_ = {
	key: "place-value-multiply-divide-ten",
	label: "Multiply/Divide by Powers of Ten",
	icon: "✖️",
	pluginId: "place-value-multiply-divide-ten",
	competency: rd,
	competencies: [rd],
	createSession(e, t) {
		return $("place-value-multiply-divide-ten", cg(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => sg(e, t, n, r, i, a)
}, Z_ = Ze.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), Q_ = sn.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), $_ = gr.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), ev = Di.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), tv = co.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), nv = Nu.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t === "P" ? 1 : t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), rv = [
	k_,
	A_,
	j_,
	M_,
	N_,
	P_,
	F_,
	I_,
	L_,
	R_,
	z_,
	B_,
	V_,
	H_,
	U_,
	W_,
	G_,
	K_,
	q_,
	J_,
	Y_,
	X_,
	...Z_,
	...Q_,
	...$_,
	...ev,
	...tv,
	...nv
], iv = {
	en: {
		P: [
			"Counts objects accurately to 20, one number per object.",
			"Recognises quantities up to 5 at a glance, without counting.",
			"Compares two groups and says which has more.",
			"Recognises written digits 0–9.",
			"Adds and subtracts small quantities with objects in front of them.",
			"Compares objects directly: longer/shorter, heavier/lighter, holds more/less.",
			"Knows the order of the day: morning, afternoon, evening, night.",
			"Names the days of the week.",
			"Names circle, square, triangle, rectangle.",
			"Uses positional language: on, under, behind, between, next to."
		],
		G1: [
			"Counts forwards and backwards to 100 from any starting number.",
			"Reads and writes numbers to 100 in digits.",
			"Counts in 2s, 5s and 10s.",
			"Knows odd and even, and can test a number.",
			"Uses ordinal numbers (first, second, tenth).",
			"Understands a two-digit number as tens and units.",
			"Knows all number bonds within 10 by heart.",
			"Adds and subtracts within 20.",
			"Understands subtraction as both \"take away\" and \"difference between\".",
			"Understands multiplication as repeated addition and as an array.",
			"Shares a quantity equally between 2 and between 4.",
			"Adds and subtracts within 20 mentally, without fingers.",
			"Recognises and finds a half and a quarter of a shape and of a small quantity.",
			"Measures length in whole centimetres with a ruler, starting from zero.",
			"Uses the vocabulary of measure correctly across length, mass, capacity and time.",
			"Tells the time to the hour and half-hour on an analogue clock.",
			"Names the months and the seasons, in order.",
			"Names common 2D and 3D shapes: circle, triangle, square, rectangle, cube, sphere, cylinder, cone.",
			"Recognises a shape whatever its orientation or size.",
			"Describes a route using left, right, forward and turns.",
			"Sorts objects by a chosen criterion and explains the rule used.",
			"Reads a simple pictogram.",
			"Continues a repeating pattern and describes its rule.",
			"Chooses whether a one-step word problem needs addition or subtraction."
		],
		G2: [
			"Counts to 1,000; reads and writes numbers to 1,000.",
			"Orders any set of numbers to 1,000 and places them on a number line.",
			"Understands hundreds, tens and units; partitions and recombines any three-digit number.",
			"Says what each digit is worth in a three-digit number.",
			"Knows all number bonds within 20 by heart.",
			"Adds and subtracts two-digit numbers with regrouping, written down.",
			"Knows that addition is commutative and subtraction is not.",
			"Knows the 2, 5 and 10 times tables by heart, both ways.",
			"Understands division as both sharing and grouping, and meets remainders.",
			"Adds and subtracts a one-digit number to any two-digit number mentally.",
			"Doubles and halves any number to 50 mentally.",
			"Recognises thirds, quarters and fifths; knows 2/4 = 1/2.",
			"Measures mass on a scale and capacity in a jug, reading the graduations.",
			"Knows the metric units and their relationships: mm, cm, m, km; g, kg; ml, l.",
			"Tells the time to five minutes, and to the quarter hour.",
			"Knows how many days in a week, weeks in a year, days in each month.",
			"Counts sides, vertices, edges and faces; sorts shapes by their properties.",
			"Recognises a line of symmetry and completes a symmetrical figure.",
			"Describes a position on a grid with letters and numbers (B4).",
			"Collects data with a tally chart and draws a bar chart from it.",
			"Finds the missing number in a simple equation (7 + ? = 12).",
			"Solves a one-step word problem in any of the four operations and writes the number sentence."
		],
		G3: [
			"Reads, writes and orders numbers to 10,000.",
			"Extends place value to thousands; adds and subtracts 1, 10, 100, 1,000 to any number instantly.",
			"Adds and subtracts three-digit numbers in columns, fluently and accurately.",
			"Checks a subtraction with the inverse addition.",
			"Knows the 3, 4 and 8 times tables by heart.",
			"Multiplies a two-digit number by a one-digit number, written down.",
			"Knows that multiplication is commutative and division is not.",
			"Adds and subtracts two two-digit numbers mentally.",
			"Bridges through 10 and through 100 as a deliberate strategy.",
			"Understands a fraction as a number on the number line, not only as part of a cake.",
			"Finds equivalent fractions and simplifies a simple fraction.",
			"Adds and subtracts fractions with the same denominator.",
			"Reads a decimal in a price and in a measurement.",
			"Converts between adjacent metric units (cm↔m, g↔kg, ml↔l).",
			"Measures and calculates the perimeter of a rectangle and of a compound shape.",
			"Tells the time to the minute, analogue and digital, and converts between 12- and 24-hour clocks.",
			"Calculates a duration between two times within the hour.",
			"Classifies triangles (equilateral, isosceles, scalene, right-angled).",
			"Classifies quadrilaterals and knows why a square is also a rectangle.",
			"Identifies right angles, and angles greater and smaller than a right angle.",
			"Uses the four compass directions, and quarter/half turns as 90° and 180°.",
			"Reads a bar chart and a pictogram with a scale (one symbol = 5).",
			"Answers comparison questions from a table of data.",
			"Continues a number sequence and states its rule in words.",
			"Solves a two-step word problem, doing the steps in the right order.",
			"Draws a picture, bar model or diagram to represent a problem."
		],
		G4: [
			"Reads, writes and orders numbers to 1,000,000.",
			"Understands negative numbers on a number line, and uses them for temperature and debt.",
			"Extends place value to millions.",
			"Rounds any number to the nearest 10, 100 or 1,000.",
			"Adds and subtracts four-digit numbers, including across zeros.",
			"Knows all multiplication tables to 12×12 by heart, and the matching division facts.",
			"Multiplies a three-digit number by a one-digit number.",
			"Divides a three-digit number by a one-digit number with a remainder, and says what the remainder means in context.",
			"Uses rounding and compensation mentally (+99 as +100−1).",
			"Multiplies any table fact instantly, in under three seconds.",
			"Compares and orders fractions with different denominators.",
			"Converts between improper fractions and mixed numbers.",
			"Finds a fraction of a quantity (3/5 of 40).",
			"Understands tenths and hundredths as decimals; places decimals on a number line.",
			"Adds and subtracts decimals to two places.",
			"Understands percentage as \"out of 100\".",
			"Calculates the area of a rectangle, and of a shape made of rectangles.",
			"Estimates a length, a mass and a volume before measuring, and is roughly right.",
			"Reads a scale with unlabelled intermediate divisions.",
			"Calculates durations crossing hours and midnight; reads a timetable and plans a journey with it.",
			"Uses a calendar to work out a date some weeks ahead.",
			"Measures and draws an angle with a protractor, to the nearest degree.",
			"Knows that angles on a straight line total 180° and around a point 360°, and uses it.",
			"Knows the angles of a triangle sum to 180°.",
			"Plots and reads coordinates in the first quadrant.",
			"Translates and reflects a shape on a grid.",
			"Draws and reads a line graph, and describes the trend it shows.",
			"Finds the mode and the range of a data set.",
			"Uses a symbol or a box for an unknown and solves for it.",
			"Describes the relationship between two columns of a table as a rule.",
			"Solves multi-step problems mixing operations and units.",
			"Works systematically to find *all* the solutions to a problem, not just one.",
			"Explains their method aloud so another child can follow it."
		],
		G5: [
			"Knows what a prime number is and identifies the primes below 50.",
			"Finds all factors of a number below 100, and common multiples of two small numbers.",
			"Recognises square numbers and knows the squares to 12×12.",
			"Reads and writes Roman numerals to 1,000.",
			"Extends place value to the right of the decimal point: tenths, hundredths, thousandths.",
			"Rounds decimals to a given number of decimal places.",
			"Multiplies and divides by 10, 100 and 1,000 and explains what happens to the digits.",
			"Adds and subtracts any whole numbers and decimals, fluently, in columns.",
			"Multiplies a four-digit number by a two-digit number (long multiplication).",
			"Divides by a two-digit number (long or short division), expressing the remainder as a whole number, a fraction or a decimal as the situation demands.",
			"Knows the divisibility tests for 2, 3, 4, 5, 9 and 10.",
			"Applies the order of operations correctly, including brackets.",
			"Multiplies a two-digit number by a one-digit number mentally.",
			"Finds 10%, 25%, 50% and 75% of a quantity mentally.",
			"Estimates an answer before calculating, and notices when the calculated answer is impossible.",
			"Adds and subtracts fractions with different denominators.",
			"Multiplies a fraction by a whole number, and by another fraction.",
			"Converts fluently between fractions, decimals and percentages for the common values.",
			"Multiplies and divides decimals by whole numbers.",
			"Finds any percentage of a quantity.",
			"Calculates a percentage increase and a percentage decrease (a discount, a price rise).",
			"Understands ratio and shares a quantity in a given ratio (share 20 in 3:1).",
			"Solves simple scaling problems (if 3 items cost 12, what do 7 cost).",
			"Calculates the volume of a cuboid, and knows that 1 litre = 1,000 cm³.",
			"Converts between metric units across two steps (mm→m, ml→l→cl).",
			"Knows roughly what an imperial/customary unit is worth in metric, when the local context uses one.",
			"Has a reliable body-ruler: knows their own height, hand span, pace length, and uses them to estimate.",
			"Converts between seconds, minutes, hours, days and years fluently.",
			"Handles time-zone differences well enough to schedule a call to another country.",
			"Draws a shape accurately from a specification, with ruler, protractor and compasses.",
			"Names the parts of a circle: centre, radius, diameter, circumference; knows the diameter is twice the radius.",
			"Identifies the net of a cube and of other simple solids.",
			"Plots coordinates in all four quadrants, with negatives.",
			"Rotates a shape about a point, and describes the rotation.",
			"Uses and understands a scale on a plan or map (1 cm : 100 m).",
			"Calculates the mean, and says when it is and is not a useful summary.",
			"Reads a pie chart and relates its sectors to fractions and percentages.",
			"Uses the language of chance (impossible, unlikely, even chance, likely, certain) and places simple events on a 0–1 scale.",
			"Spots a misleading graph — a truncated axis, a missing scale, cherry-picked years.",
			"Uses a letter for an unknown; substitutes a value into a simple formula.",
			"Solves a one-step equation and checks the solution by substituting it back.",
			"Expresses a general rule for a sequence in terms of its position.",
			"Judges whether an answer is reasonable, by estimating first and by checking against the question.",
			"Finds their own mistake in a wrong answer, rather than starting over blindly.",
			"Solves a problem with missing or surplus information, and says which is which.",
			"Tackles an unfamiliar problem with no taught method, and gets somewhere by trying, checking and adjusting.",
			"Uses a calculator correctly *and* knows when not to — checks its output against a mental estimate."
		]
	},
	fr: {
		P: [
			"Compte des objets avec exactitude jusqu'à 20, un nombre par objet.",
			"Reconnaît des quantités jusqu'à 5 d'un coup d'œil, sans compter.",
			"Compare deux groupes et dit lequel en a le plus.",
			"Reconnaît les chiffres écrits de 0 à 9.",
			"Additionne et soustrait de petites quantités avec des objets devant lui.",
			"Compare des objets directement : plus long/plus court, plus lourd/plus léger, contient plus/moins.",
			"Connaît l'ordre du jour : matin, après-midi, soir, nuit.",
			"Nomme les jours de la semaine.",
			"Nomme le cercle, le carré, le triangle, le rectangle.",
			"Utilise le vocabulaire de position : sur, sous, derrière, entre, à côté de."
		],
		G1: [
			"Compte en avant et en arrière jusqu'à 100 à partir de n'importe quel nombre de départ.",
			"Lit et écrit les nombres jusqu'à 100 en chiffres.",
			"Compte de 2 en 2, de 5 en 5 et de 10 en 10.",
			"Connaît les nombres pairs et impairs, et peut tester un nombre.",
			"Utilise les nombres ordinaux (premier, deuxième, dixième).",
			"Comprend un nombre à deux chiffres comme des dizaines et des unités.",
			"Connaît par cœur tous les compléments à 10.",
			"Additionne et soustrait dans la limite de 20.",
			"Comprend la soustraction à la fois comme « enlever » et comme « différence entre ».",
			"Comprend la multiplication comme une addition répétée et comme un tableau (matrice).",
			"Partage une quantité également entre 2 et entre 4.",
			"Additionne et soustrait mentalement dans la limite de 20, sans les doigts.",
			"Reconnaît et trouve la moitié et le quart d'une forme et d'une petite quantité.",
			"Mesure une longueur en centimètres entiers avec une règle, en partant de zéro.",
			"Utilise correctement le vocabulaire de la mesure pour la longueur, la masse, la contenance et le temps.",
			"Lit l'heure juste et la demi-heure sur une horloge à aiguilles.",
			"Nomme les mois et les saisons, dans l'ordre.",
			"Nomme les formes 2D et 3D courantes : cercle, triangle, carré, rectangle, cube, sphère, cylindre, cône.",
			"Reconnaît une forme quelle que soit son orientation ou sa taille.",
			"Décrit un trajet en utilisant gauche, droite, tout droit et les virages.",
			"Trie des objets selon un critère choisi et explique la règle utilisée.",
			"Lit un pictogramme simple.",
			"Poursuit une suite répétitive et en décrit la règle.",
			"Détermine si un problème en une étape nécessite une addition ou une soustraction."
		],
		G2: [
			"Compte jusqu'à 1 000 ; lit et écrit les nombres jusqu'à 1 000.",
			"Ordonne un ensemble de nombres jusqu'à 1 000 et les place sur une droite numérique.",
			"Comprend les centaines, les dizaines et les unités ; décompose et recompose n'importe quel nombre à trois chiffres.",
			"Dit la valeur de chaque chiffre dans un nombre à trois chiffres.",
			"Connaît par cœur tous les compléments à 20.",
			"Additionne et soustrait des nombres à deux chiffres avec retenue, à l'écrit.",
			"Sait que l'addition est commutative et que la soustraction ne l'est pas.",
			"Connaît par cœur les tables de 2, de 5 et de 10, dans les deux sens.",
			"Comprend la division à la fois comme un partage et comme un groupement, et rencontre la notion de reste.",
			"Additionne et soustrait mentalement un nombre à un chiffre à n'importe quel nombre à deux chiffres.",
			"Double et calcule la moitié mentalement de n'importe quel nombre jusqu'à 50.",
			"Reconnaît les tiers, les quarts et les cinquièmes ; sait que 2/4 = 1/2.",
			"Mesure une masse avec une balance et une contenance avec un récipient gradué, en lisant les graduations.",
			"Connaît les unités métriques et leurs relations : mm, cm, m, km ; g, kg ; ml, l.",
			"Lit l'heure à cinq minutes près, et au quart d'heure.",
			"Sait combien il y a de jours dans une semaine, de semaines dans une année, de jours dans chaque mois.",
			"Compte les côtés, les sommets, les arêtes et les faces ; trie les formes selon leurs propriétés.",
			"Reconnaît un axe de symétrie et complète une figure symétrique.",
			"Décrit une position sur une grille avec des lettres et des nombres (B4).",
			"Collecte des données avec un tableau de pointage et en tire un diagramme en barres.",
			"Trouve le nombre manquant dans une équation simple (7 + ? = 12).",
			"Résout un problème en une étape avec l'une des quatre opérations et écrit l'opération correspondante."
		],
		G3: [
			"Lit, écrit et ordonne les nombres jusqu'à 10 000.",
			"Étend la valeur de position aux milliers ; additionne et soustrait instantanément 1, 10, 100, 1 000 à n'importe quel nombre.",
			"Additionne et soustrait des nombres à trois chiffres en colonnes, avec fluidité et exactitude.",
			"Vérifie une soustraction par l'addition inverse.",
			"Connaît par cœur les tables de 3, de 4 et de 8.",
			"Multiplie un nombre à deux chiffres par un nombre à un chiffre, à l'écrit.",
			"Sait que la multiplication est commutative et que la division ne l'est pas.",
			"Additionne et soustrait mentalement deux nombres à deux chiffres.",
			"Passe par 10 et par 100 comme stratégie délibérée.",
			"Comprend une fraction comme un nombre sur la droite numérique, pas seulement comme une part de gâteau.",
			"Trouve des fractions équivalentes et simplifie une fraction simple.",
			"Additionne et soustrait des fractions de même dénominateur.",
			"Lit un nombre décimal dans un prix et dans une mesure.",
			"Convertit entre unités métriques voisines (cm↔m, g↔kg, ml↔l).",
			"Mesure et calcule le périmètre d'un rectangle et d'une forme composée.",
			"Lit l'heure à la minute près, en analogique et en numérique, et convertit entre les formats 12 et 24 heures.",
			"Calcule une durée entre deux heures à l'intérieur d'une même heure.",
			"Classe les triangles (équilatéral, isocèle, scalène, rectangle).",
			"Classe les quadrilatères et sait pourquoi un carré est aussi un rectangle.",
			"Identifie les angles droits, et les angles plus grands ou plus petits qu'un angle droit.",
			"Utilise les quatre points cardinaux, et les quarts et demi-tours comme 90° et 180°.",
			"Lit un diagramme en barres et un pictogramme avec une échelle (un symbole = 5).",
			"Répond à des questions de comparaison à partir d'un tableau de données.",
			"Poursuit une suite de nombres et en énonce la règle avec des mots.",
			"Résout un problème en deux étapes, en effectuant les étapes dans le bon ordre.",
			"Dessine une image, un schéma en barres ou un diagramme pour représenter un problème."
		],
		G4: [
			"Lit, écrit et ordonne les nombres jusqu'à 1 000 000.",
			"Comprend les nombres négatifs sur une droite numérique, et les utilise pour la température et les dettes.",
			"Étend la valeur de position aux millions.",
			"Arrondit n'importe quel nombre à la dizaine, à la centaine ou au millier le plus proche.",
			"Additionne et soustrait des nombres à quatre chiffres, y compris à travers des zéros.",
			"Connaît par cœur toutes les tables de multiplication jusqu'à 12×12, et les faits de division correspondants.",
			"Multiplie un nombre à trois chiffres par un nombre à un chiffre.",
			"Divise un nombre à trois chiffres par un nombre à un chiffre avec un reste, et dit ce que ce reste signifie dans le contexte.",
			"Utilise mentalement l'arrondi et la compensation (+99 comme +100−1).",
			"Donne instantanément n'importe quel résultat de table, en moins de trois secondes.",
			"Compare et ordonne des fractions de dénominateurs différents.",
			"Convertit entre fractions impropres et nombres fractionnaires.",
			"Trouve une fraction d'une quantité (3/5 de 40).",
			"Comprend les dixièmes et les centièmes comme des nombres décimaux ; place des décimaux sur une droite numérique.",
			"Additionne et soustrait des décimaux à deux chiffres après la virgule.",
			"Comprend le pourcentage comme « sur 100 ».",
			"Calcule l'aire d'un rectangle, et d'une forme composée de rectangles.",
			"Estime une longueur, une masse et un volume avant de mesurer, et se trompe peu.",
			"Lit une échelle graduée dont les divisions intermédiaires ne sont pas indiquées.",
			"Calcule des durées à cheval sur plusieurs heures et sur minuit ; lit un horaire et planifie un trajet avec.",
			"Utilise un calendrier pour déterminer une date plusieurs semaines à l'avance.",
			"Mesure et trace un angle avec un rapporteur, au degré près.",
			"Sait que les angles sur une droite totalisent 180° et autour d'un point 360°, et l'utilise.",
			"Sait que les angles d'un triangle totalisent 180°.",
			"Place et lit des coordonnées dans le premier quadrant.",
			"Translate et réfléchit une forme sur une grille.",
			"Trace et lit un graphique linéaire, et décrit la tendance qu'il montre.",
			"Trouve le mode et l'étendue d'un ensemble de données.",
			"Utilise un symbole ou une case pour une inconnue et la résout.",
			"Décrit la relation entre deux colonnes d'un tableau sous forme de règle.",
			"Résout des problèmes à plusieurs étapes mêlant opérations et unités.",
			"Travaille méthodiquement pour trouver *toutes* les solutions d'un problème, pas seulement une.",
			"Explique sa méthode à voix haute de sorte qu'un autre enfant puisse la suivre."
		],
		G5: [
			"Sait ce qu'est un nombre premier et identifie les nombres premiers inférieurs à 50.",
			"Trouve tous les diviseurs d'un nombre inférieur à 100, et les multiples communs de deux petits nombres.",
			"Reconnaît les carrés parfaits et connaît les carrés jusqu'à 12×12.",
			"Lit et écrit les chiffres romains jusqu'à 1 000.",
			"Étend la valeur de position à droite de la virgule : dixièmes, centièmes, millièmes.",
			"Arrondit des nombres décimaux à un nombre donné de décimales.",
			"Multiplie et divise par 10, 100 et 1 000 et explique ce qui arrive aux chiffres.",
			"Additionne et soustrait n'importe quels nombres entiers et décimaux, avec fluidité, en colonnes.",
			"Multiplie un nombre à quatre chiffres par un nombre à deux chiffres (multiplication posée).",
			"Divise par un nombre à deux chiffres (division posée), en exprimant le reste comme un nombre entier, une fraction ou un décimal selon la situation.",
			"Connaît les critères de divisibilité par 2, 3, 4, 5, 9 et 10.",
			"Applique correctement l'ordre des opérations, y compris les parenthèses.",
			"Multiplie mentalement un nombre à deux chiffres par un nombre à un chiffre.",
			"Trouve mentalement 10 %, 25 %, 50 % et 75 % d'une quantité.",
			"Estime un résultat avant de calculer, et remarque quand le résultat calculé est impossible.",
			"Additionne et soustrait des fractions de dénominateurs différents.",
			"Multiplie une fraction par un nombre entier, et par une autre fraction.",
			"Convertit couramment entre fractions, décimaux et pourcentages pour les valeurs usuelles.",
			"Multiplie et divise des décimaux par des nombres entiers.",
			"Trouve n'importe quel pourcentage d'une quantité.",
			"Calcule une augmentation et une diminution en pourcentage (une remise, une hausse de prix).",
			"Comprend le rapport et partage une quantité selon un rapport donné (partager 20 en 3:1).",
			"Résout des problèmes simples de proportionnalité (si 3 articles coûtent 12, combien coûtent 7 ?).",
			"Calcule le volume d'un parallélépipède rectangle, et sait que 1 litre = 1 000 cm³.",
			"Convertit entre unités métriques en deux étapes (mm→m, ml→l→cl).",
			"Sait approximativement ce que vaut une unité impériale/coutumière en unités métriques, quand le contexte local en utilise une.",
			"A une « règle corporelle » fiable : connaît sa propre taille, l'envergure de sa main, la longueur de son pas, et les utilise pour estimer.",
			"Convertit avec aisance entre secondes, minutes, heures, jours et années.",
			"Gère les décalages horaires assez bien pour organiser un appel avec un autre pays.",
			"Trace une forme avec précision à partir d'un cahier des charges, avec règle, rapporteur et compas.",
			"Nomme les parties d'un cercle : centre, rayon, diamètre, circonférence ; sait que le diamètre vaut deux fois le rayon.",
			"Identifie le patron (développement) d'un cube et d'autres solides simples.",
			"Place des coordonnées dans les quatre quadrants, avec des nombres négatifs.",
			"Fait tourner une forme autour d'un point, et décrit la rotation.",
			"Utilise et comprend une échelle sur un plan ou une carte (1 cm : 100 m).",
			"Calcule la moyenne, et dit quand elle est ou n'est pas un résumé utile.",
			"Lit un diagramme circulaire et relie ses secteurs à des fractions et des pourcentages.",
			"Utilise le vocabulaire du hasard (impossible, improbable, une chance sur deux, probable, certain) et place des événements simples sur une échelle de 0 à 1.",
			"Repère un graphique trompeur — un axe tronqué, une échelle absente, des années choisies pour arranger le résultat.",
			"Utilise une lettre pour une inconnue ; remplace une valeur dans une formule simple.",
			"Résout une équation à une étape et vérifie la solution en la substituant.",
			"Exprime une règle générale d'une suite en fonction de la position d'un terme.",
			"Juge si un résultat est raisonnable, en estimant d'abord et en vérifiant par rapport à la question.",
			"Trouve sa propre erreur dans une réponse fausse, plutôt que de tout recommencer à l'aveugle.",
			"Résout un problème comportant des informations manquantes ou superflues, et dit lesquelles.",
			"Aborde un problème inconnu sans méthode enseignée, et avance en essayant, vérifiant et ajustant.",
			"Utilise une calculatrice correctement *et* sait quand ne pas s'en servir — vérifie son résultat par rapport à une estimation mentale."
		]
	}
}, av = !1;
function ov() {
	av ||= !0;
}
var sv = () => ({
	subjectId: "math",
	competencies: id,
	plugins: O_.all(),
	exercises: rv,
	mathematicsAreas: od,
	getMathematicsAreaForCompetency: sd,
	skillsReference: iv,
	register: ov
});
//#endregion
export { id as allCompetencies, Bu as baselineCompareGroupsCompetency, Vu as baselineConcreteArithmeticCompetency, W as baselineCountingCompetency, G as baselineDayOrderCompetency, Uu as baselineDaysOfWeekCompetency, zu as baselineDigitsCompetency, Hu as baselineDirectComparisonCompetency, Gu as baselinePositionCompetency, Wu as baselineShapesCompetency, Ru as baselineSubitizingCompetency, sv as default, sd as getMathematicsAreaForCompetency, rv as mathExercises, O_ as mathPluginRegistry, od as mathematicsAreas, Pu as mentalAdditionCompetency, Lu as mentalDivisionCompetency, Iu as mentalMultiplicationCompetency, Fu as mentalSubtractionCompetency, Ku as numberSenseCountingRangeCompetency, Xu as numberSenseNegativeNumbersCompetency, Ju as numberSenseOddEvenCompetency, Yu as numberSenseOrdinalsCompetency, Zu as numberSensePrimesFactorsCompetency, $u as numberSenseRomanNumeralsCompetency, qu as numberSenseSkipCountingCompetency, Qu as numberSenseSquaresCompetency, rd as placeValueMultiplyDivideTenCompetency, td as placeValuePowersOfTenCompetency, nd as placeValueRoundingCompetency, ed as placeValueUnderstandingCompetency, iv as skillsReference };
