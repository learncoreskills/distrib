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
}, ee = {
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
}, te = {
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
}, ne = {
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
}, re = {
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
}, ie = [
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
	ee,
	te,
	ne,
	re
];
//#endregion
//#region packages/template-fill-in-the-blank/src/rng.ts
function ae(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function oe(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/template-fill-in-the-blank/src/factory.ts
function se(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function ce(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function le(e, t, n) {
	if (!se(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = ce(e.bank, t), i = r[oe(ae(n), 0, r.length - 1)];
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
function ue(e, t) {
	return e.trim().toLowerCase() === t.trim().toLowerCase();
}
function m(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return le(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: ue(e.en.answer, t) || ue(e.fr.answer, t) };
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
		let r = ae(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(le(e, t, n));
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
function de(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function fe(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
function pe(e, t) {
	let n = t.slice();
	for (let t = n.length - 1; t > 0; t--) {
		let r = fe(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n;
}
//#endregion
//#region packages/template-multiple-choice/src/factory.ts
function me(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function he(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function ge(e) {
	return Array.from({ length: e }, (e, t) => String.fromCharCode(97 + t));
}
function _e(e, t) {
	return e.map((e, n) => ({
		id: t[n],
		label: e
	}));
}
function ve(e, t, n) {
	if (!me(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = he(e.bank, t), i = de(n), a = r[fe(i, 0, r.length - 1)], o = ge(a.en.options.length), s = pe(i, o), c = s.map((e) => a.en.options[o.indexOf(e)]), l = s.map((e) => a.fr.options[o.indexOf(e)]), u = o[a.en.correctIndex];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: {
			prompt: a.en.prompt,
			options: _e(c, s)
		},
		fr: {
			prompt: a.fr.prompt,
			options: _e(l, s)
		},
		correctOptionId: u
	};
}
function h(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return ve(e, t, n);
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
		let r = de(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(ve(e, t, n));
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
function ye(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function be(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/template-numeric-answer/src/factory.ts
function xe(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Se(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function Ce(e, t, n) {
	if (!xe(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Se(e.bank, t), i = r[be(ye(n), 0, r.length - 1)];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { prompt: i.en.prompt },
		fr: { prompt: i.fr.prompt },
		correctValue: i.correctValue
	};
}
function g(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return Ce(e, t, n);
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
		let r = ye(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(Ce(e, t, n));
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
function we(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Te(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/syllabus-content-g1/src/content.ts
var Ee = g({
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
}), De = g({
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
}), Oe = g({
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
}), ke = [
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
], Ae = [
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
function je(e, t) {
	return e.filter((e) => e.grade === t);
}
function Me(e) {
	return e === 1 || e === 2;
}
function Ne(e) {
	return Array.from({ length: e }, (e, t) => String.fromCharCode(97 + t));
}
function Pe(e, t, n) {
	let r = je(ke, e), i = r[Te(n, 0, r.length - 1)];
	return {
		id: `syllabus-g1-half-and-quarter-${e}-${t}`,
		grade: e,
		kind: "find-quantity",
		en: { prompt: i.en.prompt },
		fr: { prompt: i.fr.prompt },
		correctValue: i.correctValue
	};
}
function Fe(e, t, n) {
	let r = je(Ae, e), i = r[Te(n, 0, r.length - 1)], a = Ne(i.en.options.length), o = Ne(i.fr.options.length);
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
function Ie(e, t) {
	if (!Me(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..2)`);
	let n = we(t);
	return Te(n, 0, 1) === 0 ? Pe(e, t, n) : Fe(e, t, n);
}
function Le(e) {
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
var Re = {
	id: "syllabus-g1-half-and-quarter",
	competencyIds: [o.id],
	generateQuestion(e, t) {
		return Ie(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "recognise-split" ? { correct: t === e.correctOptionId } : { correct: t === e.correctValue };
	},
	toPresentation: Le
};
function ze(e, t) {
	let n = we(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ie(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
function Be(e, t, n, r, i, a) {
	return {
		competencyId: o.id,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Le(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
var Ve = {
	plugin: Re,
	createSession: ze,
	createMasterySignal: Be
}, He = g({
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
}), Ue = h({
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
}), We = h({
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
}), Ge = m({
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
}), Ke = h({
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
}), qe = h({
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
}), Je = h({
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
}), Ye = h({
	pluginId: "syllabus-g1-sorts-objects-by-criterion",
	competencyId: ee.id,
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
}), Xe = g({
	pluginId: "syllabus-g1-reads-simple-pictogram",
	competencyId: te.id,
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
}), Ze = m({
	pluginId: "syllabus-g1-continues-repeating-pattern",
	competencyId: ne.id,
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
}), Qe = h({
	pluginId: "syllabus-g1-choose-addition-or-subtraction",
	competencyId: re.id,
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
}), $e = [
	Ee.plugin,
	De.plugin,
	Oe.plugin,
	Ve.plugin,
	He.plugin,
	Ue.plugin,
	We.plugin,
	Ge.plugin,
	Ke.plugin,
	qe.plugin,
	Je.plugin,
	Ye.plugin,
	Xe.plugin,
	Ze.plugin,
	Qe.plugin
];
function _(e) {
	return e;
}
var et = [
	_({
		key: "syllabus-g1-reads-writes-to-100",
		label: "Reading & Writing Numbers to 100",
		icon: "🔢",
		pluginId: Ee.plugin.id,
		competency: r,
		competencies: [r],
		createSession: Ee.createSession,
		createMasterySignal: Ee.createMasterySignal
	}),
	_({
		key: "syllabus-g1-number-bonds-within-10",
		label: "Number Bonds to 10",
		icon: "🔗",
		pluginId: De.plugin.id,
		competency: i,
		competencies: [i],
		createSession: De.createSession,
		createMasterySignal: De.createMasterySignal
	}),
	_({
		key: "syllabus-g1-add-subtract-within-20",
		label: "Add & Subtract within 20",
		icon: "🧮",
		pluginId: Oe.plugin.id,
		competency: a,
		competencies: [a],
		createSession: Oe.createSession,
		createMasterySignal: Oe.createMasterySignal
	}),
	_({
		key: "syllabus-g1-half-and-quarter",
		label: "Halves & Quarters",
		icon: "🍕",
		pluginId: Ve.plugin.id,
		competency: o,
		competencies: [o],
		createSession: Ve.createSession,
		createMasterySignal: Ve.createMasterySignal
	}),
	_({
		key: "syllabus-g1-length-in-cm",
		label: "Measuring Length in cm",
		icon: "📏",
		pluginId: He.plugin.id,
		competency: s,
		competencies: [s],
		createSession: He.createSession,
		createMasterySignal: He.createMasterySignal
	}),
	_({
		key: "syllabus-g1-measurement-vocabulary",
		label: "Measurement Vocabulary",
		icon: "⚖️",
		pluginId: Ue.plugin.id,
		competency: c,
		competencies: [c],
		createSession: Ue.createSession,
		createMasterySignal: Ue.createMasterySignal
	}),
	_({
		key: "syllabus-g1-time-hour-half-hour",
		label: "Telling Time: Hour & Half-Hour",
		icon: "🕐",
		pluginId: We.plugin.id,
		competency: l,
		competencies: [l],
		createSession: We.createSession,
		createMasterySignal: We.createMasterySignal
	}),
	_({
		key: "syllabus-g1-months-and-seasons",
		label: "Months & Seasons",
		icon: "📅",
		pluginId: Ge.plugin.id,
		competency: u,
		competencies: [u],
		createSession: Ge.createSession,
		createMasterySignal: Ge.createMasterySignal
	}),
	_({
		key: "syllabus-g1-names-2d-3d-shapes",
		label: "Naming 2D & 3D Shapes",
		icon: "🔺",
		pluginId: Ke.plugin.id,
		competency: d,
		competencies: [d],
		createSession: Ke.createSession,
		createMasterySignal: Ke.createMasterySignal
	}),
	_({
		key: "syllabus-g1-shape-orientation-invariance",
		label: "Shapes in Any Orientation",
		icon: "🔄",
		pluginId: qe.plugin.id,
		competency: f,
		competencies: [f],
		createSession: qe.createSession,
		createMasterySignal: qe.createMasterySignal
	}),
	_({
		key: "syllabus-g1-describes-route",
		label: "Describing a Route",
		icon: "🧭",
		pluginId: Je.plugin.id,
		competency: p,
		competencies: [p],
		createSession: Je.createSession,
		createMasterySignal: Je.createMasterySignal
	}),
	_({
		key: "syllabus-g1-sorts-objects-by-criterion",
		label: "Sorting by a Rule",
		icon: "🗂️",
		pluginId: Ye.plugin.id,
		competency: ee,
		competencies: [ee],
		createSession: Ye.createSession,
		createMasterySignal: Ye.createMasterySignal
	}),
	_({
		key: "syllabus-g1-reads-simple-pictogram",
		label: "Reading a Pictogram",
		icon: "📊",
		pluginId: Xe.plugin.id,
		competency: te,
		competencies: [te],
		createSession: Xe.createSession,
		createMasterySignal: Xe.createMasterySignal
	}),
	_({
		key: "syllabus-g1-continues-repeating-pattern",
		label: "Continuing a Pattern",
		icon: "🔁",
		pluginId: Ze.plugin.id,
		competency: ne,
		competencies: [ne],
		createSession: Ze.createSession,
		createMasterySignal: Ze.createMasterySignal
	}),
	_({
		key: "syllabus-g1-choose-addition-or-subtraction",
		label: "Addition or Subtraction?",
		icon: "❓",
		pluginId: Qe.plugin.id,
		competency: re,
		competencies: [re],
		createSession: Qe.createSession,
		createMasterySignal: Qe.createMasterySignal
	})
], tt = {
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
}, nt = {
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
}, rt = {
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
}, it = {
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
}, at = {
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
}, ot = {
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
}, st = {
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
}, ct = {
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
}, lt = {
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
}, ut = {
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
}, dt = {
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
}, ft = {
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
}, pt = {
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
}, mt = {
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
}, ht = {
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
}, gt = {
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
}, _t = {
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
}, vt = {
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
}, yt = {
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
}, bt = {
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
}, xt = {
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
}, St = {
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
}, Ct = [
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
	yt,
	bt,
	xt,
	St
];
//#endregion
//#region packages/template-ordering/src/rng.ts
function wt(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Tt(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
function Et(e, t) {
	let n = t.slice();
	for (let t = n.length - 1; t > 0; t--) {
		let r = Tt(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n;
}
//#endregion
//#region packages/template-ordering/src/factory.ts
function Dt(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ot(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function kt(e) {
	return e.items.slice().sort((e, t) => e.correctPosition - t.correctPosition).map((e) => e.id);
}
function At(e, t) {
	return e.map((e) => ({
		id: e.id,
		label: e.label[t]
	}));
}
function jt(e, t, n) {
	let r = Et(e, t), i = 0;
	for (; r.map((e) => e.id).join(",") === n.join(",") && i < 1e3;) r = Et(e, t), i++;
	return r;
}
function Mt(e, t, n) {
	if (!Dt(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Ot(e.bank, t), i = wt(n), a = r[Tt(i, 0, r.length - 1)], o = kt(a), s = Math.floor(i() * 4294967295), c = wt(s);
	wt(s);
	let l = jt(c, At(a.items, "en"), o), u = new Map(At(a.items, "fr").map((e) => [e.id, e])), d = l.map((e) => u.get(e.id));
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		direction: a.direction,
		en: { items: l },
		fr: { items: d },
		correctOrder: o
	};
}
function Nt(e, t) {
	return t.length === e.correctOrder.length && t.every((t, n) => t === e.correctOrder[n]);
}
function Pt(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return Mt(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: Nt(e, t) };
		}
	};
	function n(t, n) {
		let r = wt(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(Mt(e, t, n));
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
function Ft(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function It(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/template-true-false/src/factory.ts
function Lt(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Rt(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function zt(e, t, n) {
	if (!Lt(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Rt(e.bank, t), i = r[It(Ft(n), 0, r.length - 1)];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { statement: i.en.statement },
		fr: { statement: i.fr.statement },
		isTrue: i.en.isTrue
	};
}
function v(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return zt(e, t, n);
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
		let r = Ft(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(zt(e, t, n));
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
var Bt = g({
	pluginId: "syllabus-g2-counts-reads-writes-to-1000",
	competencyId: tt.id,
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
}), Vt = Pt({
	pluginId: "syllabus-g2-orders-numbers-to-1000",
	competencyId: nt.id,
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
}), Ht = g({
	pluginId: "syllabus-g2-partitions-three-digit-numbers",
	competencyId: rt.id,
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
}), Ut = g({
	pluginId: "syllabus-g2-digit-value-in-three-digit-number",
	competencyId: it.id,
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
}), Wt = g({
	pluginId: "syllabus-g2-number-bonds-within-20",
	competencyId: at.id,
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
}), Gt = g({
	pluginId: "syllabus-g2-add-subtract-two-digit-with-regrouping",
	competencyId: ot.id,
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
}), Kt = v({
	pluginId: "syllabus-g2-addition-commutative-subtraction-not",
	competencyId: st.id,
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
}), qt = g({
	pluginId: "syllabus-g2-times-tables-2-5-10",
	competencyId: ct.id,
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
}), Jt = g({
	pluginId: "syllabus-g2-division-sharing-grouping-remainders",
	competencyId: lt.id,
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
}), Yt = g({
	pluginId: "syllabus-g2-add-subtract-one-digit-to-two-digit",
	competencyId: ut.id,
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
}), Xt = g({
	pluginId: "syllabus-g2-doubles-halves-to-50",
	competencyId: dt.id,
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
}), Zt = h({
	pluginId: "syllabus-g2-thirds-quarters-fifths",
	competencyId: ft.id,
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
}), Qt = g({
	pluginId: "syllabus-g2-mass-and-capacity",
	competencyId: pt.id,
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
}), $t = h({
	pluginId: "syllabus-g2-metric-units-relationships",
	competencyId: mt.id,
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
}), en = h({
	pluginId: "syllabus-g2-time-five-minutes-quarter-hour",
	competencyId: ht.id,
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
}), tn = g({
	pluginId: "syllabus-g2-days-weeks-months-counts",
	competencyId: gt.id,
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
}), nn = g({
	pluginId: "syllabus-g2-counts-shape-properties",
	competencyId: _t.id,
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
}), rn = v({
	pluginId: "syllabus-g2-recognises-line-of-symmetry",
	competencyId: vt.id,
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
}), an = m({
	pluginId: "syllabus-g2-describes-grid-position",
	competencyId: yt.id,
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
}), on = g({
	pluginId: "syllabus-g2-tally-chart-bar-chart",
	competencyId: bt.id,
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
}), sn = g({
	pluginId: "syllabus-g2-finds-missing-number-in-equation",
	competencyId: xt.id,
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
}), cn = h({
	pluginId: "syllabus-g2-solves-one-step-word-problem",
	competencyId: St.id,
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
}), ln = [
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
	an.plugin,
	on.plugin,
	sn.plugin,
	cn.plugin
];
function y(e) {
	return e;
}
var un = [
	y({
		key: "syllabus-g2-counts-reads-writes-to-1000",
		label: "Counting to 1,000",
		icon: "🔢",
		pluginId: Bt.plugin.id,
		competency: tt,
		competencies: [tt],
		createSession: Bt.createSession,
		createMasterySignal: Bt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-orders-numbers-to-1000",
		label: "Ordering Numbers to 1,000",
		icon: "📈",
		pluginId: Vt.plugin.id,
		competency: nt,
		competencies: [nt],
		createSession: Vt.createSession,
		createMasterySignal: Vt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-partitions-three-digit-numbers",
		label: "Partitioning 3-Digit Numbers",
		icon: "🧩",
		pluginId: Ht.plugin.id,
		competency: rt,
		competencies: [rt],
		createSession: Ht.createSession,
		createMasterySignal: Ht.createMasterySignal
	}),
	y({
		key: "syllabus-g2-digit-value-in-three-digit-number",
		label: "Digit Value in a 3-Digit Number",
		icon: "🔠",
		pluginId: Ut.plugin.id,
		competency: it,
		competencies: [it],
		createSession: Ut.createSession,
		createMasterySignal: Ut.createMasterySignal
	}),
	y({
		key: "syllabus-g2-number-bonds-within-20",
		label: "Number Bonds to 20",
		icon: "🔗",
		pluginId: Wt.plugin.id,
		competency: at,
		competencies: [at],
		createSession: Wt.createSession,
		createMasterySignal: Wt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-add-subtract-two-digit-with-regrouping",
		label: "Add & Subtract with Regrouping",
		icon: "🧮",
		pluginId: Gt.plugin.id,
		competency: ot,
		competencies: [ot],
		createSession: Gt.createSession,
		createMasterySignal: Gt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-addition-commutative-subtraction-not",
		label: "Addition & Subtraction: Order Matters?",
		icon: "🔄",
		pluginId: Kt.plugin.id,
		competency: st,
		competencies: [st],
		createSession: Kt.createSession,
		createMasterySignal: Kt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-times-tables-2-5-10",
		label: "2, 5 & 10 Times Tables",
		icon: "✖️",
		pluginId: qt.plugin.id,
		competency: ct,
		competencies: [ct],
		createSession: qt.createSession,
		createMasterySignal: qt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-division-sharing-grouping-remainders",
		label: "Division: Sharing & Remainders",
		icon: "➗",
		pluginId: Jt.plugin.id,
		competency: lt,
		competencies: [lt],
		createSession: Jt.createSession,
		createMasterySignal: Jt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-add-subtract-one-digit-to-two-digit",
		label: "Mental Add & Subtract to 2-Digit",
		icon: "🧠",
		pluginId: Yt.plugin.id,
		competency: ut,
		competencies: [ut],
		createSession: Yt.createSession,
		createMasterySignal: Yt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-doubles-halves-to-50",
		label: "Doubles & Halves to 50",
		icon: "🪞",
		pluginId: Xt.plugin.id,
		competency: dt,
		competencies: [dt],
		createSession: Xt.createSession,
		createMasterySignal: Xt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-thirds-quarters-fifths",
		label: "Thirds, Quarters & Fifths",
		icon: "🍰",
		pluginId: Zt.plugin.id,
		competency: ft,
		competencies: [ft],
		createSession: Zt.createSession,
		createMasterySignal: Zt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-mass-and-capacity",
		label: "Measuring Mass & Capacity",
		icon: "⚖️",
		pluginId: Qt.plugin.id,
		competency: pt,
		competencies: [pt],
		createSession: Qt.createSession,
		createMasterySignal: Qt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-metric-units-relationships",
		label: "Metric Units & Relationships",
		icon: "📏",
		pluginId: $t.plugin.id,
		competency: mt,
		competencies: [mt],
		createSession: $t.createSession,
		createMasterySignal: $t.createMasterySignal
	}),
	y({
		key: "syllabus-g2-time-five-minutes-quarter-hour",
		label: "Telling Time: 5 Minutes & Quarter Hour",
		icon: "🕐",
		pluginId: en.plugin.id,
		competency: ht,
		competencies: [ht],
		createSession: en.createSession,
		createMasterySignal: en.createMasterySignal
	}),
	y({
		key: "syllabus-g2-days-weeks-months-counts",
		label: "Days, Weeks & Months",
		icon: "📅",
		pluginId: tn.plugin.id,
		competency: gt,
		competencies: [gt],
		createSession: tn.createSession,
		createMasterySignal: tn.createMasterySignal
	}),
	y({
		key: "syllabus-g2-counts-shape-properties",
		label: "Counting Shape Properties",
		icon: "🔺",
		pluginId: nn.plugin.id,
		competency: _t,
		competencies: [_t],
		createSession: nn.createSession,
		createMasterySignal: nn.createMasterySignal
	}),
	y({
		key: "syllabus-g2-recognises-line-of-symmetry",
		label: "Lines of Symmetry",
		icon: "🦋",
		pluginId: rn.plugin.id,
		competency: vt,
		competencies: [vt],
		createSession: rn.createSession,
		createMasterySignal: rn.createMasterySignal
	}),
	y({
		key: "syllabus-g2-describes-grid-position",
		label: "Grid Positions",
		icon: "🗺️",
		pluginId: an.plugin.id,
		competency: yt,
		competencies: [yt],
		createSession: an.createSession,
		createMasterySignal: an.createMasterySignal
	}),
	y({
		key: "syllabus-g2-tally-chart-bar-chart",
		label: "Tally Charts & Bar Charts",
		icon: "📊",
		pluginId: on.plugin.id,
		competency: bt,
		competencies: [bt],
		createSession: on.createSession,
		createMasterySignal: on.createMasterySignal
	}),
	y({
		key: "syllabus-g2-finds-missing-number-in-equation",
		label: "Finding the Missing Number",
		icon: "❓",
		pluginId: sn.plugin.id,
		competency: xt,
		competencies: [xt],
		createSession: sn.createSession,
		createMasterySignal: sn.createMasterySignal
	}),
	y({
		key: "syllabus-g2-solves-one-step-word-problem",
		label: "One-Step Word Problems",
		icon: "📝",
		pluginId: cn.plugin.id,
		competency: St,
		competencies: [St],
		createSession: cn.createSession,
		createMasterySignal: cn.createMasterySignal
	})
], dn = {
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
}, fn = {
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
}, pn = {
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
}, mn = {
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
}, hn = {
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
}, gn = {
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
}, _n = {
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
}, vn = {
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
}, yn = {
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
}, bn = {
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
}, xn = {
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
}, Sn = {
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
}, Cn = {
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
}, wn = {
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
}, Tn = {
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
}, En = {
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
}, Dn = {
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
}, On = {
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
}, kn = {
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
}, An = {
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
}, jn = {
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
}, Mn = {
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
}, Nn = {
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
}, Pn = {
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
}, Fn = {
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
}, In = [
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
	Mn,
	Nn,
	Pn,
	Fn
];
//#endregion
//#region packages/template-matching/src/rng.ts
function Ln(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Rn(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
function zn(e, t) {
	let n = t.slice();
	for (let t = n.length - 1; t > 0; t--) {
		let r = Rn(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n;
}
//#endregion
//#region packages/template-matching/src/factory.ts
function Bn(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Vn(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function Hn(e, t) {
	let n = t === "left" ? "l" : "r";
	return e.map((e, r) => ({
		id: `${n}${r}`,
		label: e[t]
	}));
}
function Un(e, t) {
	let n = Hn(e, "left"), r = Hn(e, "right"), i = zn(t, r);
	return n.map((e, t) => ({
		left: e,
		rightOptions: i,
		correctRightId: r[t].id
	}));
}
function Wn(e, t, n) {
	if (!Bn(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Vn(e.bank, t), i = Ln(n), a = r[Rn(i, 0, r.length - 1)], o = Math.floor(i() * 4294967295), s = Ln(o), c = Ln(o);
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { pairs: Un(a.en.pairs, s) },
		fr: { pairs: Un(a.fr.pairs, c) }
	};
}
function Gn(e, t) {
	return e.en.pairs.every((e) => t[e.left.id] === e.correctRightId);
}
function Kn(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return Wn(e, t, n);
		},
		validateAnswer(e, t) {
			return { correct: Gn(e, t) };
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
		let r = Ln(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(Wn(e, t, n));
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
var qn = g({
	pluginId: "syllabus-g3-reads-writes-orders-to-10000",
	competencyId: dn.id,
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
}), Jn = g({
	pluginId: "syllabus-g3-add-subtract-three-digit-columns",
	competencyId: fn.id,
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
}), Yn = v({
	pluginId: "syllabus-g3-checks-subtraction-with-inverse-addition",
	competencyId: pn.id,
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
}), Xn = g({
	pluginId: "syllabus-g3-times-tables-3-4-8",
	competencyId: mn.id,
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
}), Zn = g({
	pluginId: "syllabus-g3-multiplies-two-digit-by-one-digit-written",
	competencyId: hn.id,
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
}), Qn = v({
	pluginId: "syllabus-g3-multiplication-commutative-division-not",
	competencyId: gn.id,
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
}), $n = g({
	pluginId: "syllabus-g3-add-subtract-two-two-digit-mentally",
	competencyId: _n.id,
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
}), er = g({
	pluginId: "syllabus-g3-bridges-through-10-and-100",
	competencyId: vn.id,
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
}), tr = h({
	pluginId: "syllabus-g3-fraction-as-number-on-number-line",
	competencyId: yn.id,
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
}), nr = m({
	pluginId: "syllabus-g3-finds-equivalent-fractions-simplifies",
	competencyId: bn.id,
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
}), rr = m({
	pluginId: "syllabus-g3-add-subtract-fractions-same-denominator",
	competencyId: xn.id,
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
}), ir = g({
	pluginId: "syllabus-g3-reads-decimal-in-price-and-measurement",
	competencyId: Sn.id,
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
}), ar = g({
	pluginId: "syllabus-g3-converts-between-adjacent-metric-units",
	competencyId: Cn.id,
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
}), or = g({
	pluginId: "syllabus-g3-measures-perimeter-rectangle-compound",
	competencyId: wn.id,
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
}), sr = h({
	pluginId: "syllabus-g3-tells-time-to-minute-converts-12-24",
	competencyId: Tn.id,
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
}), cr = g({
	pluginId: "syllabus-g3-calculates-duration-within-hour",
	competencyId: En.id,
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
}), lr = Kn({
	pluginId: "syllabus-g3-classifies-triangles",
	competencyId: Dn.id,
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
}), ur = v({
	pluginId: "syllabus-g3-classifies-quadrilaterals",
	competencyId: On.id,
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
}), dr = h({
	pluginId: "syllabus-g3-identifies-right-angles",
	competencyId: kn.id,
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
}), fr = h({
	pluginId: "syllabus-g3-uses-compass-directions-quarter-half-turns",
	competencyId: An.id,
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
}), pr = g({
	pluginId: "syllabus-g3-reads-bar-chart-pictogram-scale",
	competencyId: jn.id,
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
}), mr = h({
	pluginId: "syllabus-g3-answers-comparison-questions-from-table",
	competencyId: Mn.id,
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
}), hr = m({
	pluginId: "syllabus-g3-continues-number-sequence-states-rule",
	competencyId: Nn.id,
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
}), gr = g({
	pluginId: "syllabus-g3-solves-two-step-word-problem",
	competencyId: Pn.id,
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
}), _r = h({
	pluginId: "syllabus-g3-draws-bar-model-to-represent-problem",
	competencyId: Fn.id,
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
}), vr = [
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
	mr.plugin,
	hr.plugin,
	gr.plugin,
	_r.plugin
];
function b(e) {
	return e;
}
var yr = [
	b({
		key: "syllabus-g3-reads-writes-orders-to-10000",
		label: "Numbers to 10,000",
		icon: "🔢",
		pluginId: qn.plugin.id,
		competency: dn,
		competencies: [dn],
		createSession: qn.createSession,
		createMasterySignal: qn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-add-subtract-three-digit-columns",
		label: "Column Addition & Subtraction",
		icon: "🧮",
		pluginId: Jn.plugin.id,
		competency: fn,
		competencies: [fn],
		createSession: Jn.createSession,
		createMasterySignal: Jn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-checks-subtraction-with-inverse-addition",
		label: "Checking Subtraction with Addition",
		icon: "✅",
		pluginId: Yn.plugin.id,
		competency: pn,
		competencies: [pn],
		createSession: Yn.createSession,
		createMasterySignal: Yn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-times-tables-3-4-8",
		label: "3, 4 & 8 Times Tables",
		icon: "✖️",
		pluginId: Xn.plugin.id,
		competency: mn,
		competencies: [mn],
		createSession: Xn.createSession,
		createMasterySignal: Xn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-multiplies-two-digit-by-one-digit-written",
		label: "Written Multiplication",
		icon: "📝",
		pluginId: Zn.plugin.id,
		competency: hn,
		competencies: [hn],
		createSession: Zn.createSession,
		createMasterySignal: Zn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-multiplication-commutative-division-not",
		label: "Multiplication & Division: Order Matters?",
		icon: "🔄",
		pluginId: Qn.plugin.id,
		competency: gn,
		competencies: [gn],
		createSession: Qn.createSession,
		createMasterySignal: Qn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-add-subtract-two-two-digit-mentally",
		label: "Mental Add & Subtract: Two 2-Digit Numbers",
		icon: "🧠",
		pluginId: $n.plugin.id,
		competency: _n,
		competencies: [_n],
		createSession: $n.createSession,
		createMasterySignal: $n.createMasterySignal
	}),
	b({
		key: "syllabus-g3-bridges-through-10-and-100",
		label: "Bridging Through 10 & 100",
		icon: "🌉",
		pluginId: er.plugin.id,
		competency: vn,
		competencies: [vn],
		createSession: er.createSession,
		createMasterySignal: er.createMasterySignal
	}),
	b({
		key: "syllabus-g3-fraction-as-number-on-number-line",
		label: "Fractions on a Number Line",
		icon: "📏",
		pluginId: tr.plugin.id,
		competency: yn,
		competencies: [yn],
		createSession: tr.createSession,
		createMasterySignal: tr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-finds-equivalent-fractions-simplifies",
		label: "Equivalent Fractions & Simplifying",
		icon: "🍰",
		pluginId: nr.plugin.id,
		competency: bn,
		competencies: [bn],
		createSession: nr.createSession,
		createMasterySignal: nr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-add-subtract-fractions-same-denominator",
		label: "Add & Subtract Fractions",
		icon: "➗",
		pluginId: rr.plugin.id,
		competency: xn,
		competencies: [xn],
		createSession: rr.createSession,
		createMasterySignal: rr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-reads-decimal-in-price-and-measurement",
		label: "Reading Decimals in Prices & Measurements",
		icon: "💲",
		pluginId: ir.plugin.id,
		competency: Sn,
		competencies: [Sn],
		createSession: ir.createSession,
		createMasterySignal: ir.createMasterySignal
	}),
	b({
		key: "syllabus-g3-converts-between-adjacent-metric-units",
		label: "Converting Metric Units",
		icon: "📐",
		pluginId: ar.plugin.id,
		competency: Cn,
		competencies: [Cn],
		createSession: ar.createSession,
		createMasterySignal: ar.createMasterySignal
	}),
	b({
		key: "syllabus-g3-measures-perimeter-rectangle-compound",
		label: "Measuring Perimeter",
		icon: "🔲",
		pluginId: or.plugin.id,
		competency: wn,
		competencies: [wn],
		createSession: or.createSession,
		createMasterySignal: or.createMasterySignal
	}),
	b({
		key: "syllabus-g3-tells-time-to-minute-converts-12-24",
		label: "Telling Time to the Minute",
		icon: "🕐",
		pluginId: sr.plugin.id,
		competency: Tn,
		competencies: [Tn],
		createSession: sr.createSession,
		createMasterySignal: sr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-calculates-duration-within-hour",
		label: "Calculating Duration",
		icon: "⏱️",
		pluginId: cr.plugin.id,
		competency: En,
		competencies: [En],
		createSession: cr.createSession,
		createMasterySignal: cr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-classifies-triangles",
		label: "Classifying Triangles",
		icon: "🔺",
		pluginId: lr.plugin.id,
		competency: Dn,
		competencies: [Dn],
		createSession: lr.createSession,
		createMasterySignal: lr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-classifies-quadrilaterals",
		label: "Classifying Quadrilaterals",
		icon: "🔷",
		pluginId: ur.plugin.id,
		competency: On,
		competencies: [On],
		createSession: ur.createSession,
		createMasterySignal: ur.createMasterySignal
	}),
	b({
		key: "syllabus-g3-identifies-right-angles",
		label: "Identifying Right Angles",
		icon: "📐",
		pluginId: dr.plugin.id,
		competency: kn,
		competencies: [kn],
		createSession: dr.createSession,
		createMasterySignal: dr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-uses-compass-directions-quarter-half-turns",
		label: "Compass Directions & Turns",
		icon: "🧭",
		pluginId: fr.plugin.id,
		competency: An,
		competencies: [An],
		createSession: fr.createSession,
		createMasterySignal: fr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-reads-bar-chart-pictogram-scale",
		label: "Bar Charts & Pictograms",
		icon: "📊",
		pluginId: pr.plugin.id,
		competency: jn,
		competencies: [jn],
		createSession: pr.createSession,
		createMasterySignal: pr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-answers-comparison-questions-from-table",
		label: "Comparing Data in Tables",
		icon: "📋",
		pluginId: mr.plugin.id,
		competency: Mn,
		competencies: [Mn],
		createSession: mr.createSession,
		createMasterySignal: mr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-continues-number-sequence-states-rule",
		label: "Number Sequences & Rules",
		icon: "🔁",
		pluginId: hr.plugin.id,
		competency: Nn,
		competencies: [Nn],
		createSession: hr.createSession,
		createMasterySignal: hr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-solves-two-step-word-problem",
		label: "Two-Step Word Problems",
		icon: "📝",
		pluginId: gr.plugin.id,
		competency: Pn,
		competencies: [Pn],
		createSession: gr.createSession,
		createMasterySignal: gr.createMasterySignal
	}),
	b({
		key: "syllabus-g3-draws-bar-model-to-represent-problem",
		label: "Bar Models for Word Problems",
		icon: "📊",
		pluginId: _r.plugin.id,
		competency: Fn,
		competencies: [Fn],
		createSession: _r.createSession,
		createMasterySignal: _r.createMasterySignal
	})
], br = {
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
}, xr = {
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
}, Sr = {
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
}, Cr = {
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
}, wr = {
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
}, Tr = {
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
}, Er = {
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
}, x = {
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
}, Dr = {
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
}, Or = {
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
}, kr = {
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
}, Ar = {
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
}, jr = {
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
}, Mr = {
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
}, Nr = {
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
}, Pr = {
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
}, Fr = {
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
}, Ir = {
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
}, Lr = {
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
}, Rr = {
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
}, zr = {
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
}, Br = {
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
}, Vr = {
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
}, Hr = {
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
}, Ur = {
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
}, Wr = {
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
}, Gr = {
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
}, Kr = {
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
}, qr = {
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
}, Jr = {
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
}, Yr = {
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
}, Xr = [
	br,
	xr,
	Sr,
	Cr,
	wr,
	Tr,
	Er,
	x,
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
	Kr,
	qr,
	Jr,
	Yr
], Zr = g({
	pluginId: "syllabus-g4-reads-writes-orders-to-million",
	competencyId: br.id,
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
}), Qr = g({
	pluginId: "syllabus-g4-extends-place-value-to-millions",
	competencyId: xr.id,
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
}), $r = g({
	pluginId: "syllabus-g4-add-subtract-four-digit-across-zeros",
	competencyId: Sr.id,
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
}), ei = g({
	pluginId: "syllabus-g4-knows-tables-to-12x12",
	competencyId: Cr.id,
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
}), ti = g({
	pluginId: "syllabus-g4-multiplies-three-digit-by-one-digit",
	competencyId: wr.id,
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
}), ni = m({
	pluginId: "syllabus-g4-divides-three-digit-by-one-digit-with-remainder",
	competencyId: Tr.id,
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
}), ri = g({
	pluginId: "syllabus-g4-rounding-compensation-mentally",
	competencyId: Er.id,
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
}), ii = g({
	pluginId: "syllabus-g4-instant-table-fact-recall",
	competencyId: x.id,
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
}), ai = v({
	pluginId: "syllabus-g4-instant-table-fact-judgment",
	competencyId: x.id,
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
}), oi = h({
	pluginId: "syllabus-g4-compares-orders-fractions-different-denominators",
	competencyId: Dr.id,
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
}), si = m({
	pluginId: "syllabus-g4-converts-improper-fractions-mixed-numbers",
	competencyId: Or.id,
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
}), ci = g({
	pluginId: "syllabus-g4-finds-fraction-of-quantity",
	competencyId: kr.id,
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
}), li = h({
	pluginId: "syllabus-g4-tenths-hundredths-as-decimals-number-line",
	competencyId: Ar.id,
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
}), ui = g({
	pluginId: "syllabus-g4-add-subtract-decimals-two-places",
	competencyId: jr.id,
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
}), di = h({
	pluginId: "syllabus-g4-understands-percentage-as-out-of-100",
	competencyId: Mr.id,
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
}), fi = g({
	pluginId: "syllabus-g4-calculates-area-rectangle-compound",
	competencyId: Nr.id,
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
}), pi = h({
	pluginId: "syllabus-g4-estimates-length-mass-volume",
	competencyId: Pr.id,
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
}), mi = g({
	pluginId: "syllabus-g4-reads-scale-with-unlabelled-divisions",
	competencyId: Fr.id,
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
}), hi = g({
	pluginId: "syllabus-g4-calculates-durations-crossing-hours-midnight",
	competencyId: Ir.id,
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
}), gi = m({
	pluginId: "syllabus-g4-uses-calendar-date-weeks-ahead",
	competencyId: Lr.id,
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
}), _i = g({
	pluginId: "syllabus-g4-measures-draws-angle-with-protractor",
	competencyId: Rr.id,
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
}), vi = v({
	pluginId: "syllabus-g4-angles-on-line-and-around-point",
	competencyId: zr.id,
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
}), yi = g({
	pluginId: "syllabus-g4-triangle-angles-sum-180",
	competencyId: Br.id,
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
}), bi = h({
	pluginId: "syllabus-g4-plots-reads-coordinates-first-quadrant",
	competencyId: Vr.id,
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
}), xi = h({
	pluginId: "syllabus-g4-translates-reflects-shape-on-grid",
	competencyId: Hr.id,
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
}), Si = h({
	pluginId: "syllabus-g4-draws-reads-line-graph-trend",
	competencyId: Ur.id,
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
}), Ci = g({
	pluginId: "syllabus-g4-finds-mode-range-data-set",
	competencyId: Wr.id,
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
}), wi = g({
	pluginId: "syllabus-g4-uses-symbol-box-for-unknown",
	competencyId: Gr.id,
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
}), Ti = h({
	pluginId: "syllabus-g4-describes-relationship-between-columns",
	competencyId: Kr.id,
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
}), Ei = g({
	pluginId: "syllabus-g4-solves-multi-step-mixed-operations-units",
	competencyId: qr.id,
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
}), Di = v({
	pluginId: "syllabus-g4-works-systematically-all-solutions",
	competencyId: Jr.id,
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
}), Oi = v({
	pluginId: "syllabus-g4-explains-method-aloud",
	competencyId: Yr.id,
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
}), ki = [
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
	Ti.plugin,
	Ei.plugin,
	Di.plugin,
	Oi.plugin
];
function S(e) {
	return e;
}
var Ai = [
	S({
		key: "syllabus-g4-reads-writes-orders-to-million",
		label: "Numbers to a Million",
		icon: "🔢",
		pluginId: Zr.plugin.id,
		competency: br,
		competencies: [br],
		createSession: Zr.createSession,
		createMasterySignal: Zr.createMasterySignal
	}),
	S({
		key: "syllabus-g4-extends-place-value-to-millions",
		label: "Place Value to Millions",
		icon: "🧮",
		pluginId: Qr.plugin.id,
		competency: xr,
		competencies: [xr],
		createSession: Qr.createSession,
		createMasterySignal: Qr.createMasterySignal
	}),
	S({
		key: "syllabus-g4-add-subtract-four-digit-across-zeros",
		label: "Adding & Subtracting Across Zeros",
		icon: "➖",
		pluginId: $r.plugin.id,
		competency: Sr,
		competencies: [Sr],
		createSession: $r.createSession,
		createMasterySignal: $r.createMasterySignal
	}),
	S({
		key: "syllabus-g4-knows-tables-to-12x12",
		label: "Times Tables to 12x12",
		icon: "✖️",
		pluginId: ei.plugin.id,
		competency: Cr,
		competencies: [Cr],
		createSession: ei.createSession,
		createMasterySignal: ei.createMasterySignal
	}),
	S({
		key: "syllabus-g4-multiplies-three-digit-by-one-digit",
		label: "3-Digit by 1-Digit Multiplication",
		icon: "📝",
		pluginId: ti.plugin.id,
		competency: wr,
		competencies: [wr],
		createSession: ti.createSession,
		createMasterySignal: ti.createMasterySignal
	}),
	S({
		key: "syllabus-g4-divides-three-digit-by-one-digit-with-remainder",
		label: "Division with Remainders",
		icon: "➗",
		pluginId: ni.plugin.id,
		competency: Tr,
		competencies: [Tr],
		createSession: ni.createSession,
		createMasterySignal: ni.createMasterySignal
	}),
	S({
		key: "syllabus-g4-rounding-compensation-mentally",
		label: "Mental Rounding & Compensation",
		icon: "🧠",
		pluginId: ri.plugin.id,
		competency: Er,
		competencies: [Er],
		createSession: ri.createSession,
		createMasterySignal: ri.createMasterySignal
	}),
	S({
		key: "syllabus-g4-instant-table-fact-recall",
		label: "Instant Table Facts",
		icon: "⚡",
		pluginId: ii.plugin.id,
		competency: x,
		competencies: [x],
		createSession: ii.createSession,
		createMasterySignal: ii.createMasterySignal
	}),
	S({
		key: "syllabus-g4-instant-table-fact-judgment",
		label: "True or False: Table Facts",
		icon: "❓",
		pluginId: ai.plugin.id,
		competency: x,
		competencies: [x],
		createSession: ai.createSession,
		createMasterySignal: ai.createMasterySignal
	}),
	S({
		key: "syllabus-g4-compares-orders-fractions-different-denominators",
		label: "Comparing Fractions",
		icon: "🍰",
		pluginId: oi.plugin.id,
		competency: Dr,
		competencies: [Dr],
		createSession: oi.createSession,
		createMasterySignal: oi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-converts-improper-fractions-mixed-numbers",
		label: "Improper Fractions & Mixed Numbers",
		icon: "🔀",
		pluginId: si.plugin.id,
		competency: Or,
		competencies: [Or],
		createSession: si.createSession,
		createMasterySignal: si.createMasterySignal
	}),
	S({
		key: "syllabus-g4-finds-fraction-of-quantity",
		label: "Fraction of a Quantity",
		icon: "🍕",
		pluginId: ci.plugin.id,
		competency: kr,
		competencies: [kr],
		createSession: ci.createSession,
		createMasterySignal: ci.createMasterySignal
	}),
	S({
		key: "syllabus-g4-tenths-hundredths-as-decimals-number-line",
		label: "Tenths & Hundredths as Decimals",
		icon: "🔟",
		pluginId: li.plugin.id,
		competency: Ar,
		competencies: [Ar],
		createSession: li.createSession,
		createMasterySignal: li.createMasterySignal
	}),
	S({
		key: "syllabus-g4-add-subtract-decimals-two-places",
		label: "Adding & Subtracting Decimals",
		icon: "💲",
		pluginId: ui.plugin.id,
		competency: jr,
		competencies: [jr],
		createSession: ui.createSession,
		createMasterySignal: ui.createMasterySignal
	}),
	S({
		key: "syllabus-g4-understands-percentage-as-out-of-100",
		label: "Percentage as Out of 100",
		icon: "💯",
		pluginId: di.plugin.id,
		competency: Mr,
		competencies: [Mr],
		createSession: di.createSession,
		createMasterySignal: di.createMasterySignal
	}),
	S({
		key: "syllabus-g4-calculates-area-rectangle-compound",
		label: "Area of Rectangles & Compound Shapes",
		icon: "🔲",
		pluginId: fi.plugin.id,
		competency: Nr,
		competencies: [Nr],
		createSession: fi.createSession,
		createMasterySignal: fi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-estimates-length-mass-volume",
		label: "Estimating Length, Mass & Volume",
		icon: "📏",
		pluginId: pi.plugin.id,
		competency: Pr,
		competencies: [Pr],
		createSession: pi.createSession,
		createMasterySignal: pi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-reads-scale-with-unlabelled-divisions",
		label: "Reading Unlabelled Scales",
		icon: "📐",
		pluginId: mi.plugin.id,
		competency: Fr,
		competencies: [Fr],
		createSession: mi.createSession,
		createMasterySignal: mi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-calculates-durations-crossing-hours-midnight",
		label: "Durations Crossing Hours & Midnight",
		icon: "⏱️",
		pluginId: hi.plugin.id,
		competency: Ir,
		competencies: [Ir],
		createSession: hi.createSession,
		createMasterySignal: hi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-uses-calendar-date-weeks-ahead",
		label: "Calendar: Weeks Ahead",
		icon: "📅",
		pluginId: gi.plugin.id,
		competency: Lr,
		competencies: [Lr],
		createSession: gi.createSession,
		createMasterySignal: gi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-measures-draws-angle-with-protractor",
		label: "Measuring Angles with a Protractor",
		icon: "📐",
		pluginId: _i.plugin.id,
		competency: Rr,
		competencies: [Rr],
		createSession: _i.createSession,
		createMasterySignal: _i.createMasterySignal
	}),
	S({
		key: "syllabus-g4-angles-on-line-and-around-point",
		label: "Angles on a Line & Around a Point",
		icon: "📏",
		pluginId: vi.plugin.id,
		competency: zr,
		competencies: [zr],
		createSession: vi.createSession,
		createMasterySignal: vi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-triangle-angles-sum-180",
		label: "Triangle Angle Sum",
		icon: "🔺",
		pluginId: yi.plugin.id,
		competency: Br,
		competencies: [Br],
		createSession: yi.createSession,
		createMasterySignal: yi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-plots-reads-coordinates-first-quadrant",
		label: "Coordinates in the First Quadrant",
		icon: "🧭",
		pluginId: bi.plugin.id,
		competency: Vr,
		competencies: [Vr],
		createSession: bi.createSession,
		createMasterySignal: bi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-translates-reflects-shape-on-grid",
		label: "Translating & Reflecting Shapes",
		icon: "🔄",
		pluginId: xi.plugin.id,
		competency: Hr,
		competencies: [Hr],
		createSession: xi.createSession,
		createMasterySignal: xi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-draws-reads-line-graph-trend",
		label: "Line Graphs & Trends",
		icon: "📈",
		pluginId: Si.plugin.id,
		competency: Ur,
		competencies: [Ur],
		createSession: Si.createSession,
		createMasterySignal: Si.createMasterySignal
	}),
	S({
		key: "syllabus-g4-finds-mode-range-data-set",
		label: "Mode & Range",
		icon: "📊",
		pluginId: Ci.plugin.id,
		competency: Wr,
		competencies: [Wr],
		createSession: Ci.createSession,
		createMasterySignal: Ci.createMasterySignal
	}),
	S({
		key: "syllabus-g4-uses-symbol-box-for-unknown",
		label: "Solving for an Unknown Box",
		icon: "❓",
		pluginId: wi.plugin.id,
		competency: Gr,
		competencies: [Gr],
		createSession: wi.createSession,
		createMasterySignal: wi.createMasterySignal
	}),
	S({
		key: "syllabus-g4-describes-relationship-between-columns",
		label: "Table Rules",
		icon: "📋",
		pluginId: Ti.plugin.id,
		competency: Kr,
		competencies: [Kr],
		createSession: Ti.createSession,
		createMasterySignal: Ti.createMasterySignal
	}),
	S({
		key: "syllabus-g4-solves-multi-step-mixed-operations-units",
		label: "Multi-Step Problems with Units",
		icon: "🧩",
		pluginId: Ei.plugin.id,
		competency: qr,
		competencies: [qr],
		createSession: Ei.createSession,
		createMasterySignal: Ei.createMasterySignal
	}),
	S({
		key: "syllabus-g4-works-systematically-all-solutions",
		label: "Finding All Solutions Systematically",
		icon: "🔍",
		pluginId: Di.plugin.id,
		competency: Jr,
		competencies: [Jr],
		createSession: Di.createSession,
		createMasterySignal: Di.createMasterySignal
	}),
	S({
		key: "syllabus-g4-explains-method-aloud",
		label: "Explaining Your Method",
		icon: "🗣️",
		pluginId: Oi.plugin.id,
		competency: Yr,
		competencies: [Yr],
		createSession: Oi.createSession,
		createMasterySignal: Oi.createMasterySignal
	})
], ji = {
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
}, Mi = {
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
}, Ni = {
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
}, Pi = {
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
}, Fi = {
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
}, Ii = {
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
}, Li = {
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
}, Ri = {
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
}, zi = {
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
}, Bi = {
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
}, Vi = {
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
}, Hi = {
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
}, Ui = {
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
}, Wi = {
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
}, Gi = {
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
}, Ki = {
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
}, qi = {
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
}, Ji = {
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
}, Yi = {
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
}, Xi = {
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
}, Zi = {
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
}, Qi = {
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
}, $i = {
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
}, ea = {
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
}, ta = {
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
}, na = {
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
}, ra = {
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
}, ia = {
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
}, aa = {
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
}, oa = {
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
}, sa = {
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
}, ca = {
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
}, la = {
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
}, ua = {
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
}, da = {
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
}, fa = {
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
}, pa = {
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
}, ma = {
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
}, ha = {
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
}, ga = {
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
}, _a = {
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
}, va = {
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
}, ya = {
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
}, ba = [
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
	ga,
	_a,
	va,
	ya
], xa = m({
	pluginId: "syllabus-g5-finds-factors-common-multiples",
	competencyId: ji.id,
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
}), Sa = h({
	pluginId: "syllabus-g5-extends-place-value-right-of-decimal",
	competencyId: Mi.id,
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
}), Ca = g({
	pluginId: "syllabus-g5-rounds-decimals-to-given-places",
	competencyId: Ni.id,
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
}), wa = g({
	pluginId: "syllabus-g5-adds-subtracts-whole-decimals-columns",
	competencyId: Pi.id,
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
}), Ta = g({
	pluginId: "syllabus-g5-multiplies-four-digit-by-two-digit",
	competencyId: Fi.id,
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
}), Ea = m({
	pluginId: "syllabus-g5-divides-by-two-digit-expresses-remainder",
	competencyId: Ii.id,
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
}), Da = v({
	pluginId: "syllabus-g5-knows-divisibility-tests",
	competencyId: Li.id,
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
}), Oa = g({
	pluginId: "syllabus-g5-applies-order-of-operations",
	competencyId: Ri.id,
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
}), ka = g({
	pluginId: "syllabus-g5-multiplies-two-digit-by-one-digit-mentally",
	competencyId: zi.id,
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
}), Aa = g({
	pluginId: "syllabus-g5-finds-common-percentages-mentally",
	competencyId: Bi.id,
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
}), ja = v({
	pluginId: "syllabus-g5-estimates-before-calculating",
	competencyId: Vi.id,
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
}), Ma = m({
	pluginId: "syllabus-g5-adds-subtracts-fractions-different-denominators",
	competencyId: Hi.id,
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
}), Na = g({
	pluginId: "syllabus-g5-multiplies-fraction-by-whole-or-fraction",
	competencyId: Ui.id,
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
}), Pa = h({
	pluginId: "syllabus-g5-converts-fluently-fractions-decimals-percentages",
	competencyId: Wi.id,
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
}), Fa = g({
	pluginId: "syllabus-g5-multiplies-divides-decimals-by-whole-numbers",
	competencyId: Gi.id,
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
}), Ia = g({
	pluginId: "syllabus-g5-finds-any-percentage-of-quantity",
	competencyId: Ki.id,
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
}), La = g({
	pluginId: "syllabus-g5-calculates-percentage-increase-decrease",
	competencyId: qi.id,
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
}), Ra = m({
	pluginId: "syllabus-g5-understands-ratio-shares-quantity",
	competencyId: Ji.id,
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
}), za = g({
	pluginId: "syllabus-g5-solves-simple-scaling-problems",
	competencyId: Yi.id,
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
}), Ba = g({
	pluginId: "syllabus-g5-calculates-volume-cuboid",
	competencyId: Xi.id,
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
}), Va = g({
	pluginId: "syllabus-g5-converts-metric-units-two-steps",
	competencyId: Zi.id,
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
}), Ha = h({
	pluginId: "syllabus-g5-knows-imperial-metric-rough-equivalence",
	competencyId: Qi.id,
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
}), Ua = v({
	pluginId: "syllabus-g5-has-reliable-body-ruler",
	competencyId: $i.id,
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
}), Wa = g({
	pluginId: "syllabus-g5-converts-seconds-minutes-hours-days-years",
	competencyId: ea.id,
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
}), Ga = g({
	pluginId: "syllabus-g5-handles-time-zone-differences",
	competencyId: ta.id,
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
}), Ka = v({
	pluginId: "syllabus-g5-draws-shape-accurately-from-specification",
	competencyId: na.id,
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
}), qa = h({
	pluginId: "syllabus-g5-names-parts-of-circle",
	competencyId: ra.id,
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
}), Ja = h({
	pluginId: "syllabus-g5-identifies-net-of-cube-solids",
	competencyId: ia.id,
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
}), Ya = h({
	pluginId: "syllabus-g5-plots-coordinates-all-four-quadrants",
	competencyId: aa.id,
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
}), Xa = h({
	pluginId: "syllabus-g5-rotates-shape-about-point",
	competencyId: oa.id,
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
}), Za = g({
	pluginId: "syllabus-g5-uses-scale-on-plan-or-map",
	competencyId: sa.id,
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
}), Qa = g({
	pluginId: "syllabus-g5-calculates-mean",
	competencyId: ca.id,
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
}), $a = h({
	pluginId: "syllabus-g5-reads-pie-chart-fractions-percentages",
	competencyId: la.id,
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
}), eo = h({
	pluginId: "syllabus-g5-uses-language-of-chance",
	competencyId: ua.id,
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
}), to = v({
	pluginId: "syllabus-g5-spots-misleading-graph",
	competencyId: da.id,
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
}), no = g({
	pluginId: "syllabus-g5-uses-letter-for-unknown-substitutes",
	competencyId: fa.id,
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
}), ro = g({
	pluginId: "syllabus-g5-solves-one-step-equation-checks",
	competencyId: pa.id,
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
}), io = m({
	pluginId: "syllabus-g5-expresses-general-rule-for-sequence",
	competencyId: ma.id,
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
}), ao = v({
	pluginId: "syllabus-g5-judges-whether-answer-reasonable",
	competencyId: ha.id,
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
}), oo = v({
	pluginId: "syllabus-g5-finds-own-mistake-in-wrong-answer",
	competencyId: ga.id,
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
}), so = h({
	pluginId: "syllabus-g5-solves-problem-missing-surplus-info",
	competencyId: _a.id,
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
}), co = v({
	pluginId: "syllabus-g5-tackles-unfamiliar-problem",
	competencyId: va.id,
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
}), lo = v({
	pluginId: "syllabus-g5-uses-calculator-correctly-checks-estimate",
	competencyId: ya.id,
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
}), uo = [
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
	oo.plugin,
	so.plugin,
	co.plugin,
	lo.plugin
];
function C(e) {
	return e;
}
var fo = [
	C({
		key: "syllabus-g5-finds-factors-common-multiples",
		label: "Factors & Common Multiples",
		icon: "🔢",
		pluginId: xa.plugin.id,
		competency: ji,
		competencies: [ji],
		createSession: xa.createSession,
		createMasterySignal: xa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-extends-place-value-right-of-decimal",
		label: "Decimal Place Value",
		icon: "🧮",
		pluginId: Sa.plugin.id,
		competency: Mi,
		competencies: [Mi],
		createSession: Sa.createSession,
		createMasterySignal: Sa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-rounds-decimals-to-given-places",
		label: "Rounding Decimals",
		icon: "📐",
		pluginId: Ca.plugin.id,
		competency: Ni,
		competencies: [Ni],
		createSession: Ca.createSession,
		createMasterySignal: Ca.createMasterySignal
	}),
	C({
		key: "syllabus-g5-adds-subtracts-whole-decimals-columns",
		label: "Column Addition & Subtraction with Decimals",
		icon: "➕",
		pluginId: wa.plugin.id,
		competency: Pi,
		competencies: [Pi],
		createSession: wa.createSession,
		createMasterySignal: wa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-multiplies-four-digit-by-two-digit",
		label: "Long Multiplication",
		icon: "✖️",
		pluginId: Ta.plugin.id,
		competency: Fi,
		competencies: [Fi],
		createSession: Ta.createSession,
		createMasterySignal: Ta.createMasterySignal
	}),
	C({
		key: "syllabus-g5-divides-by-two-digit-expresses-remainder",
		label: "Long Division & Remainders",
		icon: "➗",
		pluginId: Ea.plugin.id,
		competency: Ii,
		competencies: [Ii],
		createSession: Ea.createSession,
		createMasterySignal: Ea.createMasterySignal
	}),
	C({
		key: "syllabus-g5-knows-divisibility-tests",
		label: "Divisibility Tests",
		icon: "✅",
		pluginId: Da.plugin.id,
		competency: Li,
		competencies: [Li],
		createSession: Da.createSession,
		createMasterySignal: Da.createMasterySignal
	}),
	C({
		key: "syllabus-g5-applies-order-of-operations",
		label: "Order of Operations",
		icon: "🧩",
		pluginId: Oa.plugin.id,
		competency: Ri,
		competencies: [Ri],
		createSession: Oa.createSession,
		createMasterySignal: Oa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-multiplies-two-digit-by-one-digit-mentally",
		label: "Mental Multiplication",
		icon: "🧠",
		pluginId: ka.plugin.id,
		competency: zi,
		competencies: [zi],
		createSession: ka.createSession,
		createMasterySignal: ka.createMasterySignal
	}),
	C({
		key: "syllabus-g5-finds-common-percentages-mentally",
		label: "Mental Percentages",
		icon: "💯",
		pluginId: Aa.plugin.id,
		competency: Bi,
		competencies: [Bi],
		createSession: Aa.createSession,
		createMasterySignal: Aa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-estimates-before-calculating",
		label: "Estimating Before Calculating",
		icon: "🔍",
		pluginId: ja.plugin.id,
		competency: Vi,
		competencies: [Vi],
		createSession: ja.createSession,
		createMasterySignal: ja.createMasterySignal
	}),
	C({
		key: "syllabus-g5-adds-subtracts-fractions-different-denominators",
		label: "Adding & Subtracting Unlike Fractions",
		icon: "🍰",
		pluginId: Ma.plugin.id,
		competency: Hi,
		competencies: [Hi],
		createSession: Ma.createSession,
		createMasterySignal: Ma.createMasterySignal
	}),
	C({
		key: "syllabus-g5-multiplies-fraction-by-whole-or-fraction",
		label: "Multiplying Fractions",
		icon: "🍕",
		pluginId: Na.plugin.id,
		competency: Ui,
		competencies: [Ui],
		createSession: Na.createSession,
		createMasterySignal: Na.createMasterySignal
	}),
	C({
		key: "syllabus-g5-converts-fluently-fractions-decimals-percentages",
		label: "Fractions, Decimals & Percentages",
		icon: "🔀",
		pluginId: Pa.plugin.id,
		competency: Wi,
		competencies: [Wi],
		createSession: Pa.createSession,
		createMasterySignal: Pa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-multiplies-divides-decimals-by-whole-numbers",
		label: "Multiplying & Dividing Decimals",
		icon: "💲",
		pluginId: Fa.plugin.id,
		competency: Gi,
		competencies: [Gi],
		createSession: Fa.createSession,
		createMasterySignal: Fa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-finds-any-percentage-of-quantity",
		label: "Any Percentage of a Quantity",
		icon: "💯",
		pluginId: Ia.plugin.id,
		competency: Ki,
		competencies: [Ki],
		createSession: Ia.createSession,
		createMasterySignal: Ia.createMasterySignal
	}),
	C({
		key: "syllabus-g5-calculates-percentage-increase-decrease",
		label: "Percentage Increase & Decrease",
		icon: "📈",
		pluginId: La.plugin.id,
		competency: qi,
		competencies: [qi],
		createSession: La.createSession,
		createMasterySignal: La.createMasterySignal
	}),
	C({
		key: "syllabus-g5-understands-ratio-shares-quantity",
		label: "Ratio & Sharing",
		icon: "⚖️",
		pluginId: Ra.plugin.id,
		competency: Ji,
		competencies: [Ji],
		createSession: Ra.createSession,
		createMasterySignal: Ra.createMasterySignal
	}),
	C({
		key: "syllabus-g5-solves-simple-scaling-problems",
		label: "Scaling Problems",
		icon: "🧩",
		pluginId: za.plugin.id,
		competency: Yi,
		competencies: [Yi],
		createSession: za.createSession,
		createMasterySignal: za.createMasterySignal
	}),
	C({
		key: "syllabus-g5-calculates-volume-cuboid",
		label: "Volume of a Cuboid",
		icon: "🧊",
		pluginId: Ba.plugin.id,
		competency: Xi,
		competencies: [Xi],
		createSession: Ba.createSession,
		createMasterySignal: Ba.createMasterySignal
	}),
	C({
		key: "syllabus-g5-converts-metric-units-two-steps",
		label: "Converting Metric Units (Two Steps)",
		icon: "📏",
		pluginId: Va.plugin.id,
		competency: Zi,
		competencies: [Zi],
		createSession: Va.createSession,
		createMasterySignal: Va.createMasterySignal
	}),
	C({
		key: "syllabus-g5-knows-imperial-metric-rough-equivalence",
		label: "Imperial & Metric Units",
		icon: "🔄",
		pluginId: Ha.plugin.id,
		competency: Qi,
		competencies: [Qi],
		createSession: Ha.createSession,
		createMasterySignal: Ha.createMasterySignal
	}),
	C({
		key: "syllabus-g5-has-reliable-body-ruler",
		label: "Body-Ruler Estimation",
		icon: "📏",
		pluginId: Ua.plugin.id,
		competency: $i,
		competencies: [$i],
		createSession: Ua.createSession,
		createMasterySignal: Ua.createMasterySignal
	}),
	C({
		key: "syllabus-g5-converts-seconds-minutes-hours-days-years",
		label: "Converting Time Units",
		icon: "⏱️",
		pluginId: Wa.plugin.id,
		competency: ea,
		competencies: [ea],
		createSession: Wa.createSession,
		createMasterySignal: Wa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-handles-time-zone-differences",
		label: "Time Zones",
		icon: "🌐",
		pluginId: Ga.plugin.id,
		competency: ta,
		competencies: [ta],
		createSession: Ga.createSession,
		createMasterySignal: Ga.createMasterySignal
	}),
	C({
		key: "syllabus-g5-draws-shape-accurately-from-specification",
		label: "Accurate Shape Drawing",
		icon: "📐",
		pluginId: Ka.plugin.id,
		competency: na,
		competencies: [na],
		createSession: Ka.createSession,
		createMasterySignal: Ka.createMasterySignal
	}),
	C({
		key: "syllabus-g5-names-parts-of-circle",
		label: "Parts of a Circle",
		icon: "⭕",
		pluginId: qa.plugin.id,
		competency: ra,
		competencies: [ra],
		createSession: qa.createSession,
		createMasterySignal: qa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-identifies-net-of-cube-solids",
		label: "Nets of Solids",
		icon: "🧊",
		pluginId: Ja.plugin.id,
		competency: ia,
		competencies: [ia],
		createSession: Ja.createSession,
		createMasterySignal: Ja.createMasterySignal
	}),
	C({
		key: "syllabus-g5-plots-coordinates-all-four-quadrants",
		label: "Coordinates in Four Quadrants",
		icon: "🧭",
		pluginId: Ya.plugin.id,
		competency: aa,
		competencies: [aa],
		createSession: Ya.createSession,
		createMasterySignal: Ya.createMasterySignal
	}),
	C({
		key: "syllabus-g5-rotates-shape-about-point",
		label: "Rotating Shapes",
		icon: "🔄",
		pluginId: Xa.plugin.id,
		competency: oa,
		competencies: [oa],
		createSession: Xa.createSession,
		createMasterySignal: Xa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-uses-scale-on-plan-or-map",
		label: "Scale on Plans & Maps",
		icon: "🗺️",
		pluginId: Za.plugin.id,
		competency: sa,
		competencies: [sa],
		createSession: Za.createSession,
		createMasterySignal: Za.createMasterySignal
	}),
	C({
		key: "syllabus-g5-calculates-mean",
		label: "Calculating the Mean",
		icon: "📊",
		pluginId: Qa.plugin.id,
		competency: ca,
		competencies: [ca],
		createSession: Qa.createSession,
		createMasterySignal: Qa.createMasterySignal
	}),
	C({
		key: "syllabus-g5-reads-pie-chart-fractions-percentages",
		label: "Reading Pie Charts",
		icon: "🥧",
		pluginId: $a.plugin.id,
		competency: la,
		competencies: [la],
		createSession: $a.createSession,
		createMasterySignal: $a.createMasterySignal
	}),
	C({
		key: "syllabus-g5-uses-language-of-chance",
		label: "Language of Chance",
		icon: "🎲",
		pluginId: eo.plugin.id,
		competency: ua,
		competencies: [ua],
		createSession: eo.createSession,
		createMasterySignal: eo.createMasterySignal
	}),
	C({
		key: "syllabus-g5-spots-misleading-graph",
		label: "Spotting Misleading Graphs",
		icon: "📉",
		pluginId: to.plugin.id,
		competency: da,
		competencies: [da],
		createSession: to.createSession,
		createMasterySignal: to.createMasterySignal
	}),
	C({
		key: "syllabus-g5-uses-letter-for-unknown-substitutes",
		label: "Algebraic Substitution",
		icon: "🔤",
		pluginId: no.plugin.id,
		competency: fa,
		competencies: [fa],
		createSession: no.createSession,
		createMasterySignal: no.createMasterySignal
	}),
	C({
		key: "syllabus-g5-solves-one-step-equation-checks",
		label: "One-Step Equations",
		icon: "❓",
		pluginId: ro.plugin.id,
		competency: pa,
		competencies: [pa],
		createSession: ro.createSession,
		createMasterySignal: ro.createMasterySignal
	}),
	C({
		key: "syllabus-g5-expresses-general-rule-for-sequence",
		label: "General Rule for a Sequence",
		icon: "🔁",
		pluginId: io.plugin.id,
		competency: ma,
		competencies: [ma],
		createSession: io.createSession,
		createMasterySignal: io.createMasterySignal
	}),
	C({
		key: "syllabus-g5-judges-whether-answer-reasonable",
		label: "Judging a Reasonable Answer",
		icon: "🤔",
		pluginId: ao.plugin.id,
		competency: ha,
		competencies: [ha],
		createSession: ao.createSession,
		createMasterySignal: ao.createMasterySignal
	}),
	C({
		key: "syllabus-g5-finds-own-mistake-in-wrong-answer",
		label: "Finding Your Own Mistake",
		icon: "🔍",
		pluginId: oo.plugin.id,
		competency: ga,
		competencies: [ga],
		createSession: oo.createSession,
		createMasterySignal: oo.createMasterySignal
	}),
	C({
		key: "syllabus-g5-solves-problem-missing-surplus-info",
		label: "Missing or Surplus Information",
		icon: "🧩",
		pluginId: so.plugin.id,
		competency: _a,
		competencies: [_a],
		createSession: so.createSession,
		createMasterySignal: so.createMasterySignal
	}),
	C({
		key: "syllabus-g5-tackles-unfamiliar-problem",
		label: "Tackling Unfamiliar Problems",
		icon: "🧗",
		pluginId: co.plugin.id,
		competency: va,
		competencies: [va],
		createSession: co.createSession,
		createMasterySignal: co.createMasterySignal
	}),
	C({
		key: "syllabus-g5-uses-calculator-correctly-checks-estimate",
		label: "Using a Calculator Wisely",
		icon: "🖩",
		pluginId: lo.plugin.id,
		competency: ya,
		competencies: [ya],
		createSession: lo.createSession,
		createMasterySignal: lo.createMasterySignal
	})
], po = {
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
}, mo = {
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
}, ho = {
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
}, go = {
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
}, w = {
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
}, T = {
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
}, E = {
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
}, D = {
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
}, O = {
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
}, k = {
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
}, A = {
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
}, _o = {
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
}, vo = {
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
}, yo = {
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
}, bo = {
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
}, xo = {
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
}, So = {
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
}, Co = {
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
}, j = {
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
}, M = {
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
}, N = {
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
}, P = {
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
}, F = {
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
}, I = {
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
}, L = {
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
}, R = {
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
}, wo = [
	po,
	mo,
	ho,
	go,
	w,
	T,
	E,
	D,
	O,
	k,
	A,
	_o,
	vo,
	yo,
	bo,
	xo,
	So,
	Co,
	j,
	M,
	N,
	P,
	F,
	I,
	L,
	R,
	...ie,
	...Ct,
	...In,
	...Xr,
	...ba
], To = n([{
	id: "mathematics",
	nameKey: "subject.mathematics.name"
}], wo, wo.map((e) => e.id));
if (!To.valid) throw Error(`curriculum.ts: invalid competency model: ${JSON.stringify(To.errors)}`);
var Eo = [
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
function Do(e) {
	let [t, n] = e.id.split(".");
	if (t === "math") return Eo.some((e) => e.areaKey === n) ? n : void 0;
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/types.ts
var Oo = "math.time.baseline-day-order", ko = "math.time.baseline-days-of-week";
//#endregion
//#region packages/baseline-calendar-time-basics/src/rng.ts
function Ao(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function jo(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/generate.ts
var Mo = [
	"morning",
	"afternoon",
	"evening",
	"night"
], No = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
function Po(e) {
	return e === "P" || e === 1;
}
function Fo(e, t) {
	let n = jo(e, 0, t - 1), r = jo(e, 0, t - 1);
	for (; r === n;) r = jo(e, 0, t - 1);
	return [n, r];
}
function Io(e, t, n) {
	let [r, i] = Fo(n, Mo.length), a = Math.min(r, i), o = {
		id: "a",
		label: Mo[r]
	}, s = {
		id: "b",
		label: Mo[i]
	};
	return {
		id: `baseline-calendar-time-basics-day-order-${e}-${t}`,
		kind: "day-order",
		grade: e,
		competencyId: Oo,
		prompt: "Which comes first in the day?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function Lo(e, t, n) {
	let [r, i] = Fo(n, No.length), a = Math.min(r, i), o = {
		id: "a",
		label: No[r]
	}, s = {
		id: "b",
		label: No[i]
	};
	return {
		id: `baseline-calendar-time-basics-days-of-week-${e}-${t}`,
		kind: "days-of-week",
		grade: e,
		competencyId: ko,
		prompt: "Which comes first in the week?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function Ro(e, t) {
	if (!Po(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = Ao(t);
	return n() < .5 ? Io(e, t, n) : Lo(e, t, n);
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/plugin.ts
function zo(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Bo(e, t, n, r, i, a) {
	return {
		competencyId: e.competencyId,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: zo(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Vo(e, t) {
	let n = Ao(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ro(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ho = {
	id: "baseline-calendar-time-basics",
	competencyIds: [Oo, ko],
	generateQuestion(e, t) {
		return Ro(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: zo
}, Uo = "math.addition.baseline-concrete";
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/rng.ts
function Wo(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function z(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/generate.ts
var Go = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function Ko(e) {
	return e === "P" || e === 1;
}
function qo(e, t, n) {
	let r = z(n, 1, 5), i = z(n, 1, 5);
	return {
		id: `baseline-concrete-addition-subtraction-add-${e}-${t}`,
		grade: e,
		operator: "+",
		leftCount: r,
		rightCount: i,
		emoji: Go[z(n, 0, Go.length - 1)],
		correctAnswer: r + i
	};
}
function Jo(e, t, n) {
	let r = z(n, 2, 10), i = z(n, 1, r - 1);
	return {
		id: `baseline-concrete-addition-subtraction-sub-${e}-${t}`,
		grade: e,
		operator: "-",
		leftCount: r,
		rightCount: i,
		emoji: Go[z(n, 0, Go.length - 1)],
		correctAnswer: r - i
	};
}
function Yo(e, t) {
	if (!Ko(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = Wo(t);
	return n() < .5 ? qo(e, t, n) : Jo(e, t, n);
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/plugin.ts
function Xo(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.emoji.repeat(e.leftCount)} ${e.operator} ${e.emoji.repeat(e.rightCount)}`
		},
		correctAnswer: e.correctAnswer
	};
}
function Zo(e, t, n, r, i, a) {
	return {
		competencyId: Uo,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Xo(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Qo(e, t) {
	let n = Wo(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Yo(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var $o = {
	id: "baseline-concrete-addition-subtraction",
	competencyIds: [Uo],
	generateQuestion(e, t) {
		return Yo(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation: Xo
}, es = "math.number-sense.baseline-counting", ts = "math.number-sense.baseline-subitizing", ns = "math.number-sense.baseline-digits", rs = "math.comparing-ordering.baseline-groups";
//#endregion
//#region packages/baseline-counting-quantities/src/rng.ts
function is(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function B(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-counting-quantities/src/generate.ts
var as = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function os(e) {
	return e === "P" || e === 1;
}
function V(e) {
	return as[B(e, 0, as.length - 1)];
}
function ss(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (; n.size < 3;) {
		let r = B(e, 0, 9);
		r !== t && n.add(r);
	}
	let r = [t, ...n];
	for (let t = r.length - 1; t > 0; t--) {
		let n = B(e, 0, t), i = r[t];
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
function cs(e, t, n) {
	let r = B(n, 1, 20);
	return {
		id: `baseline-counting-quantities-counting-${e}-${t}`,
		kind: "counting",
		grade: e,
		competencyId: es,
		count: r,
		emoji: V(n),
		correctAnswer: r
	};
}
function ls(e, t, n) {
	let r = B(n, 1, 5);
	return {
		id: `baseline-counting-quantities-subitizing-${e}-${t}`,
		kind: "subitizing",
		grade: e,
		competencyId: ts,
		count: r,
		emoji: V(n),
		correctAnswer: r
	};
}
function us(e, t, n) {
	let r = B(n, 0, 9), i = V(n), { options: a, correctOptionId: o } = ss(n, r);
	return {
		id: `baseline-counting-quantities-digit-${e}-${t}`,
		kind: "digit",
		grade: e,
		competencyId: ns,
		count: r,
		emoji: i,
		options: a,
		correctOptionId: o
	};
}
function ds(e, t, n) {
	let r = B(n, 1, 10), i = B(n, 1, 10);
	for (; i === r;) i = B(n, 1, 10);
	let a = V(n), o = V(n), s = r > i ? "left" : "right";
	return {
		id: `baseline-counting-quantities-compare-groups-${e}-${t}`,
		kind: "compare-groups",
		grade: e,
		competencyId: rs,
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
function fs(e, t) {
	if (!os(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = is(t);
	switch (B(n, 0, 3)) {
		case 0: return cs(e, t, n);
		case 1: return ls(e, t, n);
		case 2: return us(e, t, n);
		default: return ds(e, t, n);
	}
}
//#endregion
//#region packages/baseline-counting-quantities/src/plugin.ts
function ps(e) {
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
function ms(e, t, n, r, i, a) {
	return {
		competencyId: e.competencyId,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: ps(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function hs(e, t) {
	let n = is(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(fs(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var gs = {
	id: "baseline-counting-quantities",
	competencyIds: [
		es,
		ts,
		ns,
		rs
	],
	generateQuestion(e, t) {
		return fs(e, t);
	},
	validateAnswer(e, t) {
		switch (e.kind) {
			case "counting":
			case "subitizing": return { correct: t === e.correctAnswer };
			case "digit":
			case "compare-groups": return { correct: t === e.correctOptionId };
		}
	},
	toPresentation: ps
}, _s = "math.measurement.baseline-comparison";
//#endregion
//#region packages/baseline-direct-comparison/src/rng.ts
function vs(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function ys(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-direct-comparison/src/generate.ts
var bs = {
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
}, xs = [
	"length",
	"weight",
	"capacity"
], Ss = {
	length: "Which one is longer?",
	weight: "Which one is heavier?",
	capacity: "Which one holds more?"
};
function Cs(e) {
	return e === "P" || e === 1;
}
function ws(e, t) {
	let n = ys(e, 0, t.length - 1), r = ys(e, 0, t.length - 1);
	for (; r === n;) r = ys(e, 0, t.length - 1);
	return [t[n], t[r]];
}
function Ts(e, t) {
	if (!Cs(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = vs(t), r = xs[ys(n, 0, xs.length - 1)], [i, a] = ws(n, bs[r]), o = n() < .5, s = {
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
		prompt: Ss[r],
		options: [s, c],
		correctOptionId: o ? "a" : "b"
	};
}
//#endregion
//#region packages/baseline-direct-comparison/src/plugin.ts
function Es(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Ds(e, t, n, r, i, a) {
	return {
		competencyId: _s,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Es(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Os(e, t) {
	let n = vs(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ts(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ks = {
	id: "baseline-direct-comparison",
	competencyIds: [_s],
	generateQuestion(e, t) {
		return Ts(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Es
}, As = "math.geometry.baseline-position";
//#endregion
//#region packages/baseline-positional-language/src/rng.ts
function js(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function H(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-positional-language/src/generate.ts
var Ms = [
	"🐱 the cat",
	"🐶 the dog",
	"⭐ the star",
	"🧸 the toy"
], Ns = [
	"📦 the box",
	"🪑 the chair",
	"🛏️ the bed",
	"🌳 the tree"
], Ps = [
	"on",
	"under",
	"behind",
	"between",
	"next-to"
], Fs = {
	on: "on",
	under: "under",
	behind: "behind",
	between: "between",
	"next-to": "next to"
};
function Is(e) {
	return e === "P" || e === 1;
}
function Ls(e, t, n, r) {
	switch (e) {
		case "on": return `${t}\n${n}`;
		case "under": return `${n}\n${t}`;
		case "behind": return `${n}${t}`;
		case "next-to": return `${t}  ${n}`;
		case "between": return `${n}  ${t}  ${r}`;
	}
}
function Rs(e) {
	let t = [...Ps];
	for (let n = t.length - 1; n > 0; n--) {
		let r = H(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function zs(e, t) {
	if (!Is(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = js(t), r = Ps[H(n, 0, Ps.length - 1)], i = Ms[H(n, 0, Ms.length - 1)], a = H(n, 0, Ns.length - 1), o = H(n, 0, Ns.length - 1);
	for (; o === a;) o = H(n, 0, Ns.length - 1);
	let s = Ns[a], c = Ns[o], l = i.split(" ")[0], u = s.split(" ")[0], d = c.split(" ")[0], f = Rs(n).map((e) => ({
		id: `position-${e}`,
		label: Fs[e]
	}));
	return {
		id: `baseline-positional-language-${e}-${t}`,
		grade: e,
		position: r,
		subjectLabel: i,
		scene: Ls(r, l, u, d),
		options: f,
		correctOptionId: `position-${r}`
	};
}
//#endregion
//#region packages/baseline-positional-language/src/plugin.ts
function Bs(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: `${e.scene}\nWhere is ${e.subjectLabel}?`,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Vs(e, t, n, r, i, a) {
	return {
		competencyId: As,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Bs(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Hs(e, t) {
	let n = js(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(zs(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Us = {
	id: "baseline-positional-language",
	competencyIds: [As],
	generateQuestion(e, t) {
		return zs(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Bs
}, Ws = "math.geometry.baseline-shapes";
//#endregion
//#region packages/baseline-shape-recognition/src/rng.ts
function Gs(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ks(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-shape-recognition/src/generate.ts
var qs = [
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
function Js(e) {
	return e === "P" || e === 1;
}
function Ys(e) {
	let t = qs.map((e) => e.name);
	for (let n = t.length - 1; n > 0; n--) {
		let r = Ks(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function Xs(e, t) {
	if (!Js(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = Gs(t), r = qs[Ks(n, 0, qs.length - 1)], i = Ys(n).map((e) => ({
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
function Zs(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: `${e.emoji} — what shape is this?`,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Qs(e, t, n, r, i, a) {
	return {
		competencyId: Ws,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Zs(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function $s(e, t) {
	let n = Gs(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Xs(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ec = {
	id: "baseline-shape-recognition",
	competencyIds: [Ws],
	generateQuestion(e, t) {
		return Xs(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Zs
};
//#endregion
//#region packages/mental-addition/src/rng.ts
function tc(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function U(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-addition/src/generate.ts
function nc(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function rc(e) {
	let t = U(e, 0, 9);
	return {
		operandA: t,
		operandB: U(e, 0, 9 - t)
	};
}
function ic(e) {
	let t = U(e, 1, 9);
	return {
		operandA: t,
		operandB: U(e, Math.max(1, 10 - t), 9)
	};
}
function ac(e) {
	let t = U(e, 0, 9), n = U(e, 0, 9 - t);
	return {
		operandA: U(e, 1, 9) * 10 + n,
		operandB: t
	};
}
function oc(e) {
	let t = U(e, 1, 9);
	return {
		onesA: U(e, Math.max(0, 10 - t), 9),
		onesB: t
	};
}
function sc(e) {
	let { onesA: t, onesB: n } = oc(e), r = U(e, 1, 9), i = U(e, 1, 9);
	return {
		operandA: r * 10 + t,
		operandB: i * 10 + n
	};
}
function cc(e) {
	let { onesA: t, onesB: n } = oc(e), r = U(e, 0, 9), i = U(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = U(e, +!a, 9);
	return {
		operandA: i,
		operandB: (a ? U(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function lc(e, t) {
	if (!nc(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = tc(t), { operandA: r, operandB: i } = e === 1 ? rc(n) : e === 2 ? ic(n) : e === 3 ? ac(n) : e === 4 ? sc(n) : cc(n);
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
var uc = "math.addition.mental";
function dc(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.operandA} + ${e.operandB}`
		},
		correctAnswer: e.correctSum
	};
}
function fc(e, t, n, r, i, a) {
	return {
		competencyId: uc,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: dc(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function pc(e, t) {
	let n = tc(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(lc(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var mc = {
	id: "mental-addition",
	competencyIds: [uc],
	generateQuestion(e, t) {
		return lc(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctSum };
	},
	toPresentation: dc
};
//#endregion
//#region packages/mental-division/src/rng.ts
function hc(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function gc(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-division/src/generate.ts
function _c(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function vc(e, t) {
	return {
		divisor: gc(e, 1, t),
		correctQuotient: gc(e, 0, t)
	};
}
function yc(e) {
	return {
		divisor: gc(e, 1, 9),
		correctQuotient: gc(e, 11, 20)
	};
}
function bc(e, t) {
	if (!_c(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = hc(t), { divisor: r, correctQuotient: i } = e === 1 ? vc(n, 2) : e === 2 ? vc(n, 5) : e === 3 ? vc(n, 10) : e === 4 ? vc(n, 12) : yc(n);
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
var xc = "math.division.mental";
function Sc(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.dividend} ÷ ${e.divisor}`
		},
		correctAnswer: e.correctQuotient
	};
}
function Cc(e, t, n, r, i, a) {
	return {
		competencyId: xc,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Sc(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function wc(e, t) {
	let n = hc(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(bc(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Tc = {
	id: "mental-division",
	competencyIds: [xc],
	generateQuestion(e, t) {
		return bc(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctQuotient };
	},
	toPresentation: Sc
};
//#endregion
//#region packages/mental-multiplication/src/rng.ts
function Ec(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Dc(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-multiplication/src/generate.ts
function Oc(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function kc(e, t) {
	return {
		factorA: Dc(e, 0, t),
		factorB: Dc(e, 0, t)
	};
}
function Ac(e) {
	return {
		factorA: Dc(e, 11, 20),
		factorB: Dc(e, 0, 9)
	};
}
function jc(e, t) {
	if (!Oc(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ec(t), { factorA: r, factorB: i } = e === 1 ? kc(n, 2) : e === 2 ? kc(n, 5) : e === 3 ? kc(n, 10) : e === 4 ? kc(n, 12) : Ac(n);
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
var Mc = "math.multiplication.mental";
function Nc(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.factorA} × ${e.factorB}`
		},
		correctAnswer: e.correctProduct
	};
}
function Pc(e, t, n, r, i, a) {
	return {
		competencyId: Mc,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Nc(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Fc(e, t) {
	let n = Ec(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(jc(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ic = {
	id: "mental-multiplication",
	competencyIds: [Mc],
	generateQuestion(e, t) {
		return jc(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctProduct };
	},
	toPresentation: Nc
};
//#endregion
//#region packages/mental-subtraction/src/rng.ts
function Lc(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function W(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-subtraction/src/generate.ts
function Rc(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function zc(e) {
	let t = W(e, 0, 9);
	return {
		correctDifference: t,
		subtrahend: W(e, 0, 9 - t)
	};
}
function Bc(e) {
	let t = W(e, 1, 9);
	return {
		correctDifference: t,
		subtrahend: W(e, Math.max(1, 10 - t), 9)
	};
}
function Vc(e) {
	let t = W(e, 0, 9), n = W(e, 0, 9 - t);
	return {
		correctDifference: W(e, 1, 9) * 10 + n,
		subtrahend: t
	};
}
function Hc(e) {
	let t = W(e, 1, 9);
	return {
		onesDiff: W(e, Math.max(0, 10 - t), 9),
		onesSubtrahend: t
	};
}
function Uc(e) {
	let { onesDiff: t, onesSubtrahend: n } = Hc(e), r = W(e, 1, 9), i = W(e, 1, 9);
	return {
		correctDifference: r * 10 + t,
		subtrahend: i * 10 + n
	};
}
function Wc(e) {
	let { onesDiff: t, onesSubtrahend: n } = Hc(e), r = W(e, 0, 9), i = W(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = W(e, +!a, 9);
	return {
		correctDifference: i,
		subtrahend: (a ? W(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function Gc(e, t) {
	if (!Rc(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Lc(t), { correctDifference: r, subtrahend: i } = e === 1 ? zc(n) : e === 2 ? Bc(n) : e === 3 ? Vc(n) : e === 4 ? Uc(n) : Wc(n);
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
var Kc = "math.subtraction.mental";
function qc(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.minuend} - ${e.subtrahend}`
		},
		correctAnswer: e.correctDifference
	};
}
function Jc(e, t, n, r, i, a) {
	return {
		competencyId: Kc,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: qc(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Yc(e, t) {
	let n = Lc(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Gc(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Xc = {
	id: "mental-subtraction",
	competencyIds: [Kc],
	generateQuestion(e, t) {
		return Gc(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctDifference };
	},
	toPresentation: qc
}, Zc = "math.number-sense.counting-range";
//#endregion
//#region packages/number-sense-counting-range/src/rng.ts
function Qc(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function G(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-counting-range/src/generate.ts
function $c(e) {
	return Number.isInteger(e) && e >= 1 && e <= 4;
}
var el = {
	1: 100,
	2: 1e3,
	3: 1e4,
	4: 1e6
};
function tl(e, t, n, r) {
	let i = G(r, 0, n - 1);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "next",
		prompt: `What number comes right after ${i}?`,
		numericAnswer: i + 1
	};
}
function nl(e, t, n, r) {
	let i = G(r, 1, n);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "previous",
		prompt: `What number comes right before ${i}?`,
		numericAnswer: i - 1
	};
}
function rl(e, t, n, r) {
	let i = G(r, 0, n), a = G(r, 0, n);
	for (; a === i;) a = G(r, 0, n);
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
function il(e, t) {
	if (!$c(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..4)`);
	let n = el[e], r = Qc(t);
	switch (G(r, 0, 2)) {
		case 0: return tl(e, t, n, r);
		case 1: return nl(e, t, n, r);
		default: return rl(e, t, n, r);
	}
}
//#endregion
//#region packages/number-sense-counting-range/src/plugin.ts
function al(e) {
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
function ol(e, t, n, r, i, a) {
	return {
		competencyId: Zc,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: al(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function sl(e, t) {
	let n = Qc(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(il(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var cl = {
	id: "number-sense-counting-range",
	competencyIds: [Zc],
	generateQuestion(e, t) {
		return il(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "compare" ? { correct: t === e.correctOptionId } : { correct: t === e.numericAnswer };
	},
	toPresentation: al
}, ll = "math.number-sense.negative-numbers";
//#endregion
//#region packages/number-sense-negative-numbers/src/rng.ts
function ul(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function dl(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-negative-numbers/src/generate.ts
function fl(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function pl(e, t, n, r) {
	let i = dl(n, r[0], r[1]), a = n() < .5 ? "after" : "before", o = a === "after" ? i + 1 : i - 1;
	return {
		id: `number-sense-negative-numbers-${e}-${t}`,
		grade: e,
		kind: "position",
		prompt: `What number comes right ${a} ${i}?`,
		numericAnswer: o
	};
}
function ml(e, t, n, r, i) {
	let a = dl(n, i[0], i[1]), o = dl(n, i[0], i[1]);
	for (; o === a;) o = dl(n, i[0], i[1]);
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
function hl(e, t) {
	if (!fl(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = ul(t);
	if (e === 1) return pl(e, t, n, [-10, 10]);
	if (e === 2) return pl(e, t, n, [-20, 20]);
	if (e === 3) return ml(e, t, n, "temperature", [-20, 20]);
	if (e === 4) return ml(e, t, n, "debt", [-50, -1]);
	if (n() < .5) return pl(e, t, n, [-100, 100]);
	let r = n() < .5 ? "temperature" : "debt";
	return ml(e, t, n, r, r === "debt" ? [-50, -1] : [-100, 100]);
}
//#endregion
//#region packages/number-sense-negative-numbers/src/plugin.ts
function gl(e) {
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
function _l(e, t, n, r, i, a) {
	return {
		competencyId: ll,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: gl(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function vl(e, t) {
	let n = ul(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(hl(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var yl = {
	id: "number-sense-negative-numbers",
	competencyIds: [ll],
	generateQuestion(e, t) {
		return hl(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "compare" ? { correct: t === e.correctOptionId } : { correct: t === e.numericAnswer };
	},
	toPresentation: gl
}, bl = "math.number-sense.odd-even";
//#endregion
//#region packages/number-sense-odd-even/src/rng.ts
function xl(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Sl(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-odd-even/src/generate.ts
function Cl(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var wl = {
	1: 20,
	2: 100,
	3: 1e3,
	4: 1e4,
	5: 1e4
};
function Tl(e) {
	return e % 2 == 0 ? "even" : "odd";
}
function El(e, t, n) {
	let r = t === "even" ? 0 : 1;
	return r + 2 * Sl(e, 0, Math.floor((n - r) / 2) + 1 - 1);
}
function Dl(e, t, n) {
	let r = wl[e], i = Sl(n, 0, r);
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
		correctOptionId: Tl(i)
	};
}
function Ol(e, t, n) {
	let r = n() < .5 ? "odd" : "even", i = r === "odd" ? "even" : "odd", a = [];
	for (; a.length < 3;) {
		let e = El(n, r, 1e4);
		a.includes(e) || a.push(e);
	}
	let o = El(n, i, 1e4), s = [
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
		let t = Sl(n, 0, e), r = s[e];
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
function kl(e, t) {
	if (!Cl(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = xl(t);
	return e === 5 && n() < .5 ? Ol(e, t, n) : Dl(e, t, n);
}
//#endregion
//#region packages/number-sense-odd-even/src/plugin.ts
function Al(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function jl(e, t, n, r, i, a) {
	return {
		competencyId: bl,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Al(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Ml(e, t) {
	let n = xl(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(kl(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Nl = {
	id: "number-sense-odd-even",
	competencyIds: [bl],
	generateQuestion(e, t) {
		return kl(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Al
}, Pl = "math.number-sense.ordinals";
//#endregion
//#region packages/number-sense-ordinals/src/ordinal.ts
function Fl(e) {
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
function Il(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ll(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-ordinals/src/generate.ts
var Rl = {
	1: 5,
	2: 10,
	3: 20,
	4: 50,
	5: 100
};
function zl(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
function Bl(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = Ll(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Vl(e, t) {
	let n = Bl(e, t), r = n.map((e, t) => ({
		id: `opt-${t}`,
		label: e.label
	}));
	return {
		options: r,
		correctOptionId: r[n.findIndex((e) => e.correct)].id
	};
}
function Hl(e, t) {
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
function Ul(e, t, n, r) {
	let i = new Set(t), a = [];
	for (let t of e) {
		if (a.length >= r) break;
		i.has(t) || (a.push(t), i.add(t));
	}
	for (let e = 1; e <= n && a.length < r; e++) i.has(e) || (a.push(e), i.add(e));
	return a;
}
function Wl(e, t, n, r) {
	let i = Ul(Hl(e, t), /* @__PURE__ */ new Set([e]), t, 3);
	return Vl([{
		label: r(e),
		correct: !0
	}, ...i.map((e) => ({
		label: r(e),
		correct: !1
	}))], n);
}
function Gl(e, t) {
	if (!zl(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Rl[e], r = Il(t), i = r() < .5 ? "number-to-word" : "word-to-number", a = Ll(r, 1, n), { options: o, correctOptionId: s } = i === "number-to-word" ? Wl(a, n, r, Fl) : Wl(a, n, r, String), c = i === "number-to-word" ? `What is the ordinal (position) word for ${a}?` : `Which number is ${Fl(a)}?`;
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
function Kl(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function ql(e, t, n, r, i, a) {
	return {
		competencyId: Pl,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Kl(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Jl(e, t) {
	let n = Il(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Gl(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Yl = {
	id: "number-sense-ordinals",
	competencyIds: [Pl],
	generateQuestion(e, t) {
		return Gl(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Kl
}, Xl = "math.number-sense.primes-factors";
//#endregion
//#region packages/number-sense-primes-factors/src/rng.ts
function Zl(e) {
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
//#region packages/number-sense-primes-factors/src/generate.ts
function Ql(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function $l(e) {
	if (e < 2) return !1;
	for (let t = 2; t * t <= e; t++) if (e % t === 0) return !1;
	return !0;
}
function eu(e, t) {
	return t === 0 ? e : eu(t, e % t);
}
function tu(e, t) {
	return e * t / eu(e, t);
}
var nu = {
	1: 20,
	2: 50,
	5: 50
}, ru = {
	3: 50,
	4: 100,
	5: 100
};
function iu(e, t) {
	let n = [];
	for (let e = 2; e < t; e++) t % e === 0 && n.push(e);
	return n.length === 0 ? K(e, 2, t - 1) : n[K(e, 0, n.length - 1)];
}
function au(e, t) {
	let n = K(e, 2, t - 1), r = 0;
	for (; t % n === 0 && r < 20;) n = K(e, 2, t - 1), r++;
	return n;
}
function ou(e, t, n) {
	let r = K(n, 2, nu[e] ?? 50);
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
		correctOptionId: $l(r) ? "yes" : "no",
		n: r
	};
}
function su(e, t, n) {
	let r = K(n, 4, (ru[e] ?? 100) - 1), i = n() < .5 ? iu(n, r) : au(n, r);
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
function cu(e, t, n) {
	let r = K(n, 2, 12), i = K(n, 2, 12);
	for (; i === r;) i = K(n, 2, 12);
	return {
		id: `number-sense-primes-factors-${e}-${t}`,
		grade: e,
		kind: "common-multiple",
		prompt: `What is the smallest common multiple of ${r} and ${i}?`,
		numericAnswer: tu(r, i)
	};
}
function lu(e, t) {
	if (!Ql(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Zl(t);
	if (e === 1 || e === 2) return ou(e, t, n);
	if (e === 3 || e === 4) return su(e, t, n);
	switch (K(n, 0, 2)) {
		case 0: return ou(e, t, n);
		case 1: return su(e, t, n);
		default: return cu(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-primes-factors/src/plugin.ts
function uu(e) {
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
function du(e, t, n, r, i, a) {
	return {
		competencyId: Xl,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: uu(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function fu(e, t) {
	let n = Zl(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(lu(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var pu = {
	id: "number-sense-primes-factors",
	competencyIds: [Xl],
	generateQuestion(e, t) {
		return lu(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "common-multiple" ? { correct: t === e.numericAnswer } : { correct: t === e.correctOptionId };
	},
	toPresentation: uu
}, mu = "math.number-sense.roman-numerals";
//#endregion
//#region packages/number-sense-roman-numerals/src/rng.ts
function hu(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function gu(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-roman-numerals/src/generate.ts
var _u = [
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
function vu(e) {
	let t = e, n = "";
	for (let [e, r] of _u) for (; t >= e;) n += r, t -= e;
	return n;
}
function yu(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var bu = {
	1: [1, 10],
	2: [1, 50],
	3: [1, 100],
	4: [1, 500],
	5: [1, 1e3]
};
function xu(e, t) {
	return e <= 3 || t() < .5 ? "read" : "write";
}
function Su(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = gu(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Cu(e, t, n, r) {
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
function wu(e, t, n) {
	let [r, i] = t, a = Su([e, ...Cu(e, r, i, 3)], n), o = a.map((e, t) => ({
		id: `opt-${t}`,
		label: String(e)
	})), s = a.indexOf(e);
	return {
		prompt: `Which number does the Roman numeral ${vu(e)} represent?`,
		options: o,
		correctOptionId: `opt-${s}`
	};
}
function Tu(e, t, n) {
	let [r, i] = t, a = Cu(e, r, i, 3), o = Su([vu(e), ...a.map(vu)], n), s = o.map((e, t) => ({
		id: `opt-${t}`,
		label: e
	})), c = o.indexOf(vu(e));
	return {
		prompt: `Which Roman numeral represents ${e}?`,
		options: s,
		correctOptionId: `opt-${c}`
	};
}
function Eu(e, t) {
	if (!yu(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = hu(t), r = bu[e], i = xu(e, n), a = gu(n, r[0], r[1]), { prompt: o, options: s, correctOptionId: c } = i === "read" ? wu(a, r, n) : Tu(a, r, n);
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
function Du(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Ou(e, t, n, r, i, a) {
	return {
		competencyId: mu,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Du(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function ku(e, t) {
	let n = hu(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Eu(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Au = {
	id: "number-sense-roman-numerals",
	competencyIds: [mu],
	generateQuestion(e, t) {
		return Eu(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Du
};
//#endregion
//#region packages/number-sense-skip-counting/src/rng.ts
function ju(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Mu(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-skip-counting/src/generate.ts
function Nu(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Pu() {
	return {
		step: 2,
		maxRange: 20
	};
}
function Fu() {
	return {
		step: 2,
		maxRange: 50
	};
}
function Iu() {
	return {
		step: 5,
		maxRange: 100
	};
}
function Lu() {
	return {
		step: 10,
		maxRange: 200
	};
}
function Ru(e) {
	let t = [
		2,
		5,
		10,
		25,
		50
	];
	return {
		step: t[Mu(e, 0, t.length - 1)],
		maxRange: 500
	};
}
function zu(e, t) {
	if (!Nu(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = ju(t), { step: r, maxRange: i } = e === 1 ? Pu() : e === 2 ? Fu() : e === 3 ? Iu() : e === 4 ? Lu() : Ru(n), a = Mu(n, 0, (i - r * 4) / r) * r, o = a, s = a + r, c = a + r * 2, l = a + r * 3;
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
var Bu = "math.number-sense.skip-counting";
function Vu(e) {
	return {
		presentation: {
			kind: "equation",
			equation: `${e.sequence[0]}, ${e.sequence[1]}, ${e.sequence[2]}`
		},
		correctAnswer: e.correctAnswer
	};
}
function Hu(e, t, n, r, i, a) {
	return {
		competencyId: Bu,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Vu(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Uu(e, t) {
	let n = ju(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(zu(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Wu = {
	id: "number-sense-skip-counting",
	competencyIds: [Bu],
	generateQuestion(e, t) {
		return zu(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation: Vu
};
//#endregion
//#region packages/number-sense-squares/src/rng.ts
function Gu(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ku(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-squares/src/generate.ts
function qu(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
var Ju = [{
	id: "yes",
	label: "Yes"
}, {
	id: "no",
	label: "No"
}], Yu = {
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
}, Xu = {
	4: {
		baseMin: 1,
		baseMax: 8
	},
	5: {
		baseMin: 1,
		baseMax: 12
	}
};
function Zu(e) {
	return Number.isInteger(Math.sqrt(e));
}
function Qu(e, t, n) {
	let { baseMin: r, baseMax: i, numberMin: a, numberMax: o } = Yu[e], s = n() < .5 ? (() => {
		let e = Ku(n, r, i);
		return e * e;
	})() : Ku(n, a, o), c = Zu(s) ? "yes" : "no";
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recognize",
		prompt: `Is ${s} a square number?`,
		options: Ju,
		correctOptionId: c
	};
}
function $u(e, t, n) {
	let { baseMin: r, baseMax: i } = Xu[e], a = Ku(n, r, i);
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recall",
		prompt: `What is ${a} squared?`,
		numericAnswer: a * a
	};
}
function ed(e, t) {
	if (!qu(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Gu(t);
	switch (e) {
		case 1:
		case 2:
		case 3: return Qu(e, t, n);
		case 4:
		case 5: return $u(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-squares/src/plugin.ts
var td = "math.number-sense.squares";
function nd(e) {
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
function rd(e, t, n, r, i, a) {
	return {
		competencyId: td,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: nd(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function id(e, t) {
	let n = Gu(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ed(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ad = {
	id: "number-sense-squares",
	competencyIds: [td],
	generateQuestion(e, t) {
		return ed(e, t);
	},
	validateAnswer(e, t) {
		switch (e.kind) {
			case "recall": return { correct: t === e.numericAnswer };
			case "recognize": return { correct: t === e.correctOptionId };
		}
	},
	toPresentation: nd
};
//#endregion
//#region packages/place-value-multiply-divide-ten/src/rng.ts
function od(e) {
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
//#region packages/place-value-multiply-divide-ten/src/generate.ts
function sd(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function cd(e) {
	return `${Math.floor(e / 10)}.${e % 10}`;
}
function ld(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 10`,
		correctAnswer: t * 10
	};
}
function ud(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 100`,
		correctAnswer: t * 100
	};
}
function dd(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 1000`,
		correctAnswer: t * 1e3
	};
}
function fd(e) {
	let t = e() < .5 ? 10 : 100, n = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${n * t} ÷ ${t}`,
		correctAnswer: n
	};
}
function pd(e) {
	let t = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 1e3} ÷ 1000`,
		correctAnswer: t
	};
}
function md(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${cd(t)} × 10`,
		correctAnswer: t
	};
}
function hd(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${cd(t)} × 100`,
		correctAnswer: t * 10
	};
}
function gd(e) {
	let t = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 10} ÷ 10`,
		correctAnswer: t
	};
}
var _d = [
	pd,
	md,
	hd,
	gd
];
function vd(e) {
	let t = _d[q(e, 0, _d.length - 1)];
	return t(e);
}
function yd(e, t) {
	if (!sd(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = od(t), { operator: r, equation: i, correctAnswer: a } = e === 1 ? ld(n) : e === 2 ? ud(n) : e === 3 ? dd(n) : e === 4 ? fd(n) : vd(n);
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
var bd = "math.place-value.multiply-divide-ten";
function xd(e) {
	return {
		presentation: {
			kind: "equation",
			equation: e.equation
		},
		correctAnswer: e.correctAnswer
	};
}
function Sd(e, t, n, r, i, a) {
	return {
		competencyId: bd,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: xd(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Cd(e, t) {
	let n = od(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(yd(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var wd = {
	id: "place-value-multiply-divide-ten",
	competencyIds: [bd],
	generateQuestion(e, t) {
		return yd(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation: xd
};
//#endregion
//#region packages/place-value-powers-of-ten/src/rng.ts
function Td(e) {
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
//#region packages/place-value-powers-of-ten/src/generate.ts
function Ed(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Dd = [
	1,
	10,
	100,
	1e3
];
function Od(e) {
	return {
		operand: J(e, 1, 99),
		magnitude: 1
	};
}
function kd(e) {
	return {
		operand: J(e, 10, 999),
		magnitude: 10
	};
}
function Ad(e) {
	return {
		operand: J(e, 100, 9999),
		magnitude: 100
	};
}
function jd(e) {
	return {
		operand: J(e, 1e3, 99999),
		magnitude: 1e3
	};
}
function Md(e) {
	let t = Dd[J(e, 0, Dd.length - 1)];
	return {
		operand: J(e, t, 999999),
		magnitude: t
	};
}
function Nd(e, t) {
	if (!Ed(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Td(t), { operand: r, magnitude: i } = e === 1 ? Od(n) : e === 2 ? kd(n) : e === 3 ? Ad(n) : e === 4 ? jd(n) : Md(n), a = n() < .5 ? "+" : "-", o = a === "+" ? r + i : r - i;
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
var Pd = "math.place-value.powers-of-ten";
function Fd(e) {
	return {
		presentation: {
			kind: "equation",
			equation: e.equation
		},
		correctAnswer: e.correctAnswer
	};
}
function Id(e, t, n, r, i, a) {
	return {
		competencyId: Pd,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Fd(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function Ld(e, t) {
	let n = Td(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Nd(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Rd = {
	id: "place-value-powers-of-ten",
	competencyIds: [Pd],
	generateQuestion(e, t) {
		return Nd(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation: Fd
}, zd = "math.place-value.rounding";
//#endregion
//#region packages/place-value-rounding/src/rng.ts
function Bd(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Vd(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-rounding/src/generate.ts
function Hd(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ud(e, t) {
	let n = e % t, r = e - n;
	return n * 2 >= t ? r + t : r;
}
function Wd(e, t) {
	return e - e % t;
}
function Gd(e, t) {
	let n = e % t;
	return n === 0 ? e : e - n + t;
}
function Y(e, t) {
	let n = String(e).padStart(t + 1, "0");
	return `${n.slice(0, -t)}.${n.slice(-t)}`;
}
function Kd(e, t, n) {
	let r = /* @__PURE__ */ new Set([e]), i = [];
	for (let e of t) if (!r.has(e) && (r.add(e), i.push(e), i.length === 3)) return i;
	let a = 1;
	for (; i.length < 3;) {
		let e = n(a);
		a += 1, r.has(e) || (r.add(e), i.push(e));
	}
	return i;
}
function qd(e, t, n, r, i, a) {
	let o = [{
		label: i,
		isCorrect: !0
	}, ...a.map((e) => ({
		label: e,
		isCorrect: !1
	}))];
	for (let e = o.length - 1; e > 0; e--) {
		let t = Vd(n, 0, e), r = o[e];
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
var Jd = {
	1: 999,
	2: 9999,
	3: 99999
}, Yd = {
	1: 10,
	2: 100,
	3: 1e3
}, Xd = {
	1: "10",
	2: "100",
	3: "1,000"
};
function Zd(e, t, n) {
	let r = Yd[e], i = Vd(n, 0, Jd[e]), a = Ud(i, r), o = String(a), s = Kd(o, [
		Wd(i, r),
		Gd(i, r),
		i,
		a - r,
		a + r,
		a - 2 * r,
		a + 2 * r
	].filter((e) => e >= 0).map(String), (e) => String(a + (e + 2) * r));
	return qd(e, t, n, `Round ${i} to the nearest ${Xd[e]}.`, o, s);
}
var Qd = {
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
}, X = 10;
function $d(e, t, n) {
	let { maxScaled: r, sourceDecimalPlaces: i, targetDecimalPlaces: a, precisionLabel: o } = Qd[e], s = Vd(n, 0, r), c = Y(s, i), l = Ud(s, X) / X, u = Y(l, a), d = Wd(s, X) / X, f = Gd(s, X) / X, p = Kd(u, [
		Y(d, a),
		Y(f, a),
		c,
		...[
			l - 1,
			l + 1,
			l - 2,
			l + 2
		].filter((e) => e >= 0).map((e) => Y(e, a))
	], (e) => Y(l + e + 2, a));
	return qd(e, t, n, `Round ${c} to ${o} decimal place${o === "1" ? "" : "s"}.`, u, p);
}
function ef(e, t) {
	if (!Hd(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Bd(t);
	return e === 1 || e === 2 || e === 3 ? Zd(e, t, n) : $d(e, t, n);
}
//#endregion
//#region packages/place-value-rounding/src/plugin.ts
function tf(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function nf(e, t, n, r, i, a) {
	return {
		competencyId: zd,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: tf(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function rf(e, t) {
	let n = Bd(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ef(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var af = {
	id: "place-value-rounding",
	competencyIds: [zd],
	generateQuestion(e, t) {
		return ef(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: tf
}, of = "math.place-value.understanding";
//#endregion
//#region packages/place-value-understanding/src/rng.ts
function sf(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function cf(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-understanding/src/generate.ts
function lf(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var uf = {
	name: "units",
	value: 1,
	decimals: 0
}, df = {
	name: "tens",
	value: 10,
	decimals: 0
}, ff = {
	name: "hundreds",
	value: 100,
	decimals: 0
}, pf = {
	name: "thousands",
	value: 1e3,
	decimals: 0
}, mf = {
	name: "ten-thousands",
	value: 1e4,
	decimals: 0
}, hf = {
	name: "hundred-thousands",
	value: 1e5,
	decimals: 0
}, gf = {
	name: "millions",
	value: 1e6,
	decimals: 0
}, _f = {
	name: "ones",
	value: 1,
	decimals: 0
}, vf = {
	name: "tenths",
	value: .1,
	decimals: 1
}, yf = {
	name: "hundredths",
	value: .01,
	decimals: 2
}, bf = {
	name: "thousandths",
	value: .001,
	decimals: 3
}, Z = {
	1: [uf, df],
	2: [
		uf,
		df,
		ff
	],
	3: [
		uf,
		df,
		ff,
		pf
	],
	4: [
		uf,
		df,
		ff,
		pf,
		mf,
		hf,
		gf
	]
}, xf = [
	bf,
	yf,
	vf,
	_f
], Sf = [
	bf,
	yf,
	vf
], Cf = {
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
		composePlaces: xf,
		scopePlaces: Sf,
		isDecimal: !0
	}
};
function wf(e, t) {
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
		let r = cf(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n.slice(0, t);
}
function Q(e, t) {
	return t.decimals === 0 ? String(e * t.value) : `0.${"0".repeat(t.decimals - 1)}${e}`;
}
function Tf(e, t) {
	if (!e.isDecimal) {
		let n = t.reduce((t, n, r) => t + n * e.composePlaces[r].value, 0);
		return String(n);
	}
	let [n, r, i, a] = t;
	return `${a}.${i}${r}${n}`;
}
function Ef(e) {
	return e.length === 1 ? e[0] : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
function Df(e, t, n) {
	let r = t.map((e, t) => ({
		label: e,
		isCorrect: t === n
	}));
	for (let t = r.length - 1; t > 0; t--) {
		let n = cf(e, 0, t), i = r[t];
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
function Of(e, t, n, r) {
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
function kf(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set([n]), a = t.length;
	function o(t) {
		if (r.length >= 3) return;
		let n = Tf(e, t);
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
function Af(e, t, n, r) {
	let i = wf(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = Tf(r, i), s = cf(n, 0, r.scopePlaces.length - 1), c = r.scopePlaces[s], l = Q(a.get(c.name), c), { options: u, correctOptionId: d } = Df(n, [l, ...Of(r.scopePlaces, s, a, l)], 0);
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
function jf(e, t, n, r) {
	let i = wf(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = Tf(r, i), { options: s, correctOptionId: c } = Df(n, [o, ...kf(r, i, o)], 0), l = [...r.composePlaces].reverse(), u = [...i].reverse(), d = l.map((e, t) => `${u[t]} ${e.name}`), f = `Which number ${r.isDecimal ? "is" : "has"} ${Ef(d)}?`;
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
function Mf(e, t) {
	if (!lf(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = sf(t), r = n() < .5 ? "digit-value" : "compose", i = Cf[e];
	return r === "digit-value" ? Af(e, t, n, i) : jf(e, t, n, i);
}
function Nf(e, t) {
	return Mf(e, t).question;
}
//#endregion
//#region packages/place-value-understanding/src/plugin.ts
function Pf(e) {
	return {
		presentation: {
			kind: "choice",
			prompt: e.prompt,
			options: e.options
		},
		correctAnswer: e.correctOptionId
	};
}
function Ff(e, t, n, r, i, a) {
	return {
		competencyId: of,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		correctAnswer: Pf(e).correctAnswer,
		submittedAnswer: i,
		...a && { endReason: a }
	};
}
function If(e, t) {
	let n = sf(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Nf(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Lf = {
	id: "place-value-understanding",
	competencyIds: [of],
	generateQuestion(e, t) {
		return Nf(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation: Pf
};
//#endregion
//#region node_modules/@learncoreskills/plugin-engine/dist/src/registry.js
function Rf(e, t) {
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
function zf(e) {
	switch (e.kind) {
		case "duplicate-plugin-id": return `duplicate plugin id: "${e.id}"`;
		case "unknown-competency-reference": return `plugin "${e.pluginId}" references unknown competency id: "${e.competencyId}"`;
	}
}
function Bf(e, t) {
	let n = Rf(e, t);
	if (!n.valid) {
		let e = n.errors.map(zf).join("; ");
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
var Vf = Bf([
	mc,
	Xc,
	Ic,
	Tc,
	gs,
	$o,
	ks,
	Ho,
	ec,
	Us,
	cl,
	Wu,
	Nl,
	Yl,
	yl,
	pu,
	ad,
	Au,
	Lf,
	Rd,
	af,
	wd,
	...$e,
	...ln,
	...vr,
	...ki,
	...uo
], [
	po,
	mo,
	ho,
	go,
	w,
	T,
	E,
	D,
	O,
	k,
	A,
	_o,
	vo,
	yo,
	bo,
	xo,
	So,
	Co,
	j,
	M,
	N,
	P,
	F,
	I,
	L,
	R,
	...ie,
	...Ct,
	...In,
	...Xr,
	...ba
]);
//#endregion
//#region src/exerciseDefinitions.ts
function $(e, t) {
	let n = Vf.getPlugin(e);
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
var Hf = {
	key: "addition",
	label: "Addition",
	icon: "➕",
	pluginId: "mental-addition",
	competency: po,
	competencies: [po],
	createSession(e, t) {
		return $("mental-addition", pc(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => fc(e, t, n, r, i, a)
}, Uf = {
	key: "subtraction",
	label: "Subtraction",
	icon: "➖",
	pluginId: "mental-subtraction",
	competency: mo,
	competencies: [mo],
	createSession(e, t) {
		return $("mental-subtraction", Yc(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Jc(e, t, n, r, i, a)
}, Wf = {
	key: "multiplication",
	label: "Multiplication",
	icon: "✖️",
	pluginId: "mental-multiplication",
	competency: ho,
	competencies: [ho],
	createSession(e, t) {
		return $("mental-multiplication", Fc(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Pc(e, t, n, r, i, a)
}, Gf = {
	key: "division",
	label: "Division",
	icon: "➗",
	pluginId: "mental-division",
	competency: go,
	competencies: [go],
	createSession(e, t) {
		return $("mental-division", wc(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Cc(e, t, n, r, i, a)
}, Kf = {
	key: "baseline-counting-quantities",
	label: "Counting & Quantities",
	icon: "🔢",
	pluginId: "baseline-counting-quantities",
	competency: w,
	competencies: [
		w,
		T,
		E,
		D
	],
	competencyLabels: {
		[w.id]: "Counting to 20",
		[T.id]: "Subitizing to 5",
		[E.id]: "Recognising digits",
		[D.id]: "Comparing groups"
	},
	createSession(e, t) {
		return $("baseline-counting-quantities", hs(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => ms(e, t, n, r, i, a)
}, qf = {
	key: "baseline-concrete-addition-subtraction",
	label: "Concrete Addition & Subtraction",
	icon: "🍎",
	pluginId: "baseline-concrete-addition-subtraction",
	competency: O,
	competencies: [O],
	createSession(e, t) {
		return $("baseline-concrete-addition-subtraction", Qo(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Zo(e, t, n, r, i, a)
}, Jf = {
	key: "baseline-direct-comparison",
	label: "Direct Comparison",
	icon: "⚖️",
	pluginId: "baseline-direct-comparison",
	competency: k,
	competencies: [k],
	createSession(e, t) {
		return $("baseline-direct-comparison", Os(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Ds(e, t, n, r, i, a)
}, Yf = {
	key: "baseline-calendar-time-basics",
	label: "Calendar & Time Basics",
	icon: "📅",
	pluginId: "baseline-calendar-time-basics",
	competency: A,
	competencies: [A, _o],
	competencyLabels: {
		[A.id]: "Order of the day",
		[_o.id]: "Days of the week"
	},
	createSession(e, t) {
		return $("baseline-calendar-time-basics", Vo(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Bo(e, t, n, r, i, a)
}, Xf = {
	key: "baseline-shape-recognition",
	label: "Shape Recognition",
	icon: "🔺",
	pluginId: "baseline-shape-recognition",
	competency: vo,
	competencies: [vo],
	createSession(e, t) {
		return $("baseline-shape-recognition", $s(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Qs(e, t, n, r, i, a)
}, Zf = {
	key: "baseline-positional-language",
	label: "Positional Language",
	icon: "📍",
	pluginId: "baseline-positional-language",
	competency: yo,
	competencies: [yo],
	createSession(e, t) {
		return $("baseline-positional-language", Hs(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Vs(e, t, n, r, i, a)
}, Qf = {
	key: "number-sense-counting-range",
	label: "Counting & Number Range",
	icon: "🔢",
	pluginId: "number-sense-counting-range",
	competency: bo,
	competencies: [bo],
	createSession(e, t) {
		return $("number-sense-counting-range", sl(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => ol(e, t, n, r, i, a)
}, $f = {
	key: "number-sense-skip-counting",
	label: "Skip Counting",
	icon: "➡️",
	pluginId: "number-sense-skip-counting",
	competency: xo,
	competencies: [xo],
	createSession(e, t) {
		return $("number-sense-skip-counting", Uu(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Hu(e, t, n, r, i, a)
}, ep = {
	key: "number-sense-odd-even",
	label: "Odd & Even",
	icon: "🔀",
	pluginId: "number-sense-odd-even",
	competency: So,
	competencies: [So],
	createSession(e, t) {
		return $("number-sense-odd-even", Ml(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => jl(e, t, n, r, i, a)
}, tp = {
	key: "number-sense-ordinals",
	label: "Ordinal Numbers",
	icon: "🥇",
	pluginId: "number-sense-ordinals",
	competency: Co,
	competencies: [Co],
	createSession(e, t) {
		return $("number-sense-ordinals", Jl(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => ql(e, t, n, r, i, a)
}, np = {
	key: "number-sense-negative-numbers",
	label: "Negative Numbers",
	icon: "🌡️",
	pluginId: "number-sense-negative-numbers",
	competency: j,
	competencies: [j],
	createSession(e, t) {
		return $("number-sense-negative-numbers", vl(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => _l(e, t, n, r, i, a)
}, rp = {
	key: "number-sense-primes-factors",
	label: "Primes & Factors",
	icon: "🧮",
	pluginId: "number-sense-primes-factors",
	competency: M,
	competencies: [M],
	createSession(e, t) {
		return $("number-sense-primes-factors", fu(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => du(e, t, n, r, i, a)
}, ip = {
	key: "number-sense-squares",
	label: "Square Numbers",
	icon: "⬜",
	pluginId: "number-sense-squares",
	competency: N,
	competencies: [N],
	createSession(e, t) {
		return $("number-sense-squares", id(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => rd(e, t, n, r, i, a)
}, ap = {
	key: "number-sense-roman-numerals",
	label: "Roman Numerals",
	icon: "🏛️",
	pluginId: "number-sense-roman-numerals",
	competency: P,
	competencies: [P],
	createSession(e, t) {
		return $("number-sense-roman-numerals", ku(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Ou(e, t, n, r, i, a)
}, op = {
	key: "place-value-understanding",
	label: "Place Value Understanding",
	icon: "🔟",
	pluginId: "place-value-understanding",
	competency: F,
	competencies: [F],
	createSession(e, t) {
		return $("place-value-understanding", If(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Ff(e, t, n, r, i, a)
}, sp = {
	key: "place-value-powers-of-ten",
	label: "Add/Subtract Powers of Ten",
	icon: "➕",
	pluginId: "place-value-powers-of-ten",
	competency: I,
	competencies: [I],
	createSession(e, t) {
		return $("place-value-powers-of-ten", Ld(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Id(e, t, n, r, i, a)
}, cp = {
	key: "place-value-rounding",
	label: "Rounding",
	icon: "🔵",
	pluginId: "place-value-rounding",
	competency: L,
	competencies: [L],
	createSession(e, t) {
		return $("place-value-rounding", rf(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => nf(e, t, n, r, i, a)
}, lp = {
	key: "place-value-multiply-divide-ten",
	label: "Multiply/Divide by Powers of Ten",
	icon: "✖️",
	pluginId: "place-value-multiply-divide-ten",
	competency: R,
	competencies: [R],
	createSession(e, t) {
		return $("place-value-multiply-divide-ten", Cd(e, t));
	},
	createMasterySignal: (e, t, n, r, i, a) => Sd(e, t, n, r, i, a)
}, up = et.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), dp = un.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), fp = yr.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), pp = Ai.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), mp = fo.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a, o) => e.createMasterySignal(t, n, r, i, a, o)
})), hp = [
	Hf,
	Uf,
	Wf,
	Gf,
	Kf,
	qf,
	Jf,
	Yf,
	Xf,
	Zf,
	Qf,
	$f,
	ep,
	tp,
	np,
	rp,
	ip,
	ap,
	op,
	sp,
	cp,
	lp,
	...up,
	...dp,
	...fp,
	...pp,
	...mp
], gp = {
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
}, _p = !1;
function vp() {
	_p ||= !0;
}
var yp = () => ({
	subjectId: "math",
	competencies: wo,
	plugins: Vf.all(),
	exercises: hp,
	mathematicsAreas: Eo,
	getMathematicsAreaForCompetency: Do,
	skillsReference: gp,
	register: vp
});
//#endregion
export { wo as allCompetencies, D as baselineCompareGroupsCompetency, O as baselineConcreteArithmeticCompetency, w as baselineCountingCompetency, A as baselineDayOrderCompetency, _o as baselineDaysOfWeekCompetency, E as baselineDigitsCompetency, k as baselineDirectComparisonCompetency, yo as baselinePositionCompetency, vo as baselineShapesCompetency, T as baselineSubitizingCompetency, yp as default, Do as getMathematicsAreaForCompetency, hp as mathExercises, Vf as mathPluginRegistry, Eo as mathematicsAreas, po as mentalAdditionCompetency, go as mentalDivisionCompetency, ho as mentalMultiplicationCompetency, mo as mentalSubtractionCompetency, bo as numberSenseCountingRangeCompetency, j as numberSenseNegativeNumbersCompetency, So as numberSenseOddEvenCompetency, Co as numberSenseOrdinalsCompetency, M as numberSensePrimesFactorsCompetency, P as numberSenseRomanNumeralsCompetency, xo as numberSenseSkipCountingCompetency, N as numberSenseSquaresCompetency, R as placeValueMultiplyDivideTenCompetency, I as placeValuePowersOfTenCompetency, L as placeValueRoundingCompetency, F as placeValueUnderstandingCompetency, gp as skillsReference };
