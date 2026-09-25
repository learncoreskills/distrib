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
	function r(t, n, r, i, a) {
		return {
			competencyId: e.competencyId,
			grade: t.grade,
			correct: n,
			timeMs: r,
			timestamp: i,
			questionId: t.id,
			...a && { endReason: a }
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
	function r(t, n, r, i, a) {
		return {
			competencyId: e.competencyId,
			grade: t.grade,
			correct: n,
			timeMs: r,
			timestamp: i,
			questionId: t.id,
			...a && { endReason: a }
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
	function r(t, n, r, i, a) {
		return {
			competencyId: e.competencyId,
			grade: t.grade,
			correct: n,
			timeMs: r,
			timestamp: i,
			questionId: t.id,
			...a && { endReason: a }
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
//#region packages/template-true-false/src/factory.ts
function Ee(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function De(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function Oe(e, t, n) {
	if (!Ee(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = De(e.bank, t), i = r[Te(we(n), 0, r.length - 1)];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { statement: i.en.statement },
		fr: { statement: i.fr.statement },
		isTrue: i.en.isTrue
	};
}
function _(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return Oe(e, t, n);
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
		let r = we(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(Oe(e, t, n));
		}
		return {
			grade: t,
			questions: i
		};
	}
	function r(t, n, r, i, a) {
		return {
			competencyId: e.competencyId,
			grade: t.grade,
			correct: n,
			timeMs: r,
			timestamp: i,
			questionId: t.id,
			...a && { endReason: a }
		};
	}
	return {
		plugin: t,
		createSession: n,
		createMasterySignal: r
	};
}
//#endregion
//#region packages/syllabus-content-g1/src/content.ts
var ke = g({
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
}), Ae = g({
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
}), je = g({
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
}), Me = h({
	pluginId: "syllabus-g1-half-and-quarter",
	competencyId: o.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A pizza is cut into 2 equal pieces. What is one piece called?",
			options: [
				"A half",
				"A quarter",
				"A whole"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Une pizza est coupée en 2 parts égales. Comment s'appelle une part ?",
			options: [
				"Une moitié",
				"Un quart",
				"Un tout"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A chocolate bar is cut into 4 equal pieces. What is one piece called?",
			options: [
				"A half",
				"A quarter",
				"A third"
			],
			correctIndex: 1
		},
		fr: {
			prompt: "Une tablette de chocolat est coupée en 4 parts égales. Comment s'appelle une part ?",
			options: [
				"Une moitié",
				"Un quart",
				"Un tiers"
			],
			correctIndex: 1
		}
	}]
}), Ne = g({
	pluginId: "syllabus-g1-length-in-cm",
	competencyId: s.id,
	bank: [{
		grade: 1,
		en: { prompt: "A pencil measured from zero on a ruler ends at the 8 cm mark. How long is it, in cm?" },
		fr: { prompt: "Un crayon mesuré à partir de zéro sur une règle s'arrête à 8 cm. Quelle est sa longueur, en cm ?" },
		correctValue: 8
	}, {
		grade: 2,
		en: { prompt: "A ribbon measured from zero on a ruler ends at the 15 cm mark. How long is it, in cm?" },
		fr: { prompt: "Un ruban mesuré à partir de zéro sur une règle s'arrête à 15 cm. Quelle est sa longueur, en cm ?" },
		correctValue: 15
	}]
}), Pe = h({
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
}), Fe = h({
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
}), Ie = m({
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
}), Le = h({
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
}), Re = _({
	pluginId: "syllabus-g1-shape-orientation-invariance",
	competencyId: f.id,
	bank: [{
		grade: 1,
		en: {
			statement: "A triangle turned upside down is still a triangle.",
			isTrue: !0
		},
		fr: {
			statement: "Un triangle retourné est toujours un triangle.",
			isTrue: !0
		}
	}, {
		grade: 2,
		en: {
			statement: "A square becomes a triangle when it is made smaller.",
			isTrue: !1
		},
		fr: {
			statement: "Un carré devient un triangle quand on le rend plus petit.",
			isTrue: !1
		}
	}]
}), ze = h({
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
}), Be = h({
	pluginId: "syllabus-g1-sorts-objects-by-criterion",
	competencyId: ee.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A red circle, a red square, and a blue circle are sorted into two groups by colour. Which two go together?",
			options: [
				"The red circle and the red square",
				"The red circle and the blue circle",
				"All three together"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un cercle rouge, un carré rouge et un cercle bleu sont triés en deux groupes par couleur. Lesquels vont ensemble ?",
			options: [
				"Le cercle rouge et le carré rouge",
				"Le cercle rouge et le cercle bleu",
				"Les trois ensemble"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A big dog, a small dog, and a big cat are sorted by size. Which two go together?",
			options: [
				"The big dog and the small dog",
				"The big dog and the big cat",
				"The small dog and the big cat"
			],
			correctIndex: 1
		},
		fr: {
			prompt: "Un grand chien, un petit chien et un grand chat sont triés par taille. Lesquels vont ensemble ?",
			options: [
				"Le grand chien et le petit chien",
				"Le grand chien et le grand chat",
				"Le petit chien et le grand chat"
			],
			correctIndex: 1
		}
	}]
}), Ve = g({
	pluginId: "syllabus-g1-reads-simple-pictogram",
	competencyId: te.id,
	bank: [{
		grade: 1,
		en: { prompt: "A pictogram shows 4 apple pictures for Monday, each picture = 1 apple. How many apples were picked on Monday?" },
		fr: { prompt: "Un pictogramme montre 4 images de pommes pour lundi, chaque image = 1 pomme. Combien de pommes ont été cueillies lundi ?" },
		correctValue: 4
	}, {
		grade: 2,
		en: { prompt: "A pictogram shows 3 star pictures for Tuesday, each picture = 2 stars. How many stars in total for Tuesday?" },
		fr: { prompt: "Un pictogramme montre 3 images d'étoiles pour mardi, chaque image = 2 étoiles. Combien d'étoiles au total pour mardi ?" },
		correctValue: 6
	}]
}), He = m({
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
}), Ue = h({
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
}), We = [
	ke.plugin,
	Ae.plugin,
	je.plugin,
	Me.plugin,
	Ne.plugin,
	Pe.plugin,
	Fe.plugin,
	Ie.plugin,
	Le.plugin,
	Re.plugin,
	ze.plugin,
	Be.plugin,
	Ve.plugin,
	He.plugin,
	Ue.plugin
];
function v(e) {
	return e;
}
var Ge = [
	v({
		key: "syllabus-g1-reads-writes-to-100",
		label: "Reading & Writing Numbers to 100",
		icon: "🔢",
		pluginId: ke.plugin.id,
		competency: r,
		competencies: [r],
		createSession: ke.createSession,
		createMasterySignal: ke.createMasterySignal
	}),
	v({
		key: "syllabus-g1-number-bonds-within-10",
		label: "Number Bonds to 10",
		icon: "🔗",
		pluginId: Ae.plugin.id,
		competency: i,
		competencies: [i],
		createSession: Ae.createSession,
		createMasterySignal: Ae.createMasterySignal
	}),
	v({
		key: "syllabus-g1-add-subtract-within-20",
		label: "Add & Subtract within 20",
		icon: "🧮",
		pluginId: je.plugin.id,
		competency: a,
		competencies: [a],
		createSession: je.createSession,
		createMasterySignal: je.createMasterySignal
	}),
	v({
		key: "syllabus-g1-half-and-quarter",
		label: "Halves & Quarters",
		icon: "🍕",
		pluginId: Me.plugin.id,
		competency: o,
		competencies: [o],
		createSession: Me.createSession,
		createMasterySignal: Me.createMasterySignal
	}),
	v({
		key: "syllabus-g1-length-in-cm",
		label: "Measuring Length in cm",
		icon: "📏",
		pluginId: Ne.plugin.id,
		competency: s,
		competencies: [s],
		createSession: Ne.createSession,
		createMasterySignal: Ne.createMasterySignal
	}),
	v({
		key: "syllabus-g1-measurement-vocabulary",
		label: "Measurement Vocabulary",
		icon: "⚖️",
		pluginId: Pe.plugin.id,
		competency: c,
		competencies: [c],
		createSession: Pe.createSession,
		createMasterySignal: Pe.createMasterySignal
	}),
	v({
		key: "syllabus-g1-time-hour-half-hour",
		label: "Telling Time: Hour & Half-Hour",
		icon: "🕐",
		pluginId: Fe.plugin.id,
		competency: l,
		competencies: [l],
		createSession: Fe.createSession,
		createMasterySignal: Fe.createMasterySignal
	}),
	v({
		key: "syllabus-g1-months-and-seasons",
		label: "Months & Seasons",
		icon: "📅",
		pluginId: Ie.plugin.id,
		competency: u,
		competencies: [u],
		createSession: Ie.createSession,
		createMasterySignal: Ie.createMasterySignal
	}),
	v({
		key: "syllabus-g1-names-2d-3d-shapes",
		label: "Naming 2D & 3D Shapes",
		icon: "🔺",
		pluginId: Le.plugin.id,
		competency: d,
		competencies: [d],
		createSession: Le.createSession,
		createMasterySignal: Le.createMasterySignal
	}),
	v({
		key: "syllabus-g1-shape-orientation-invariance",
		label: "Shapes in Any Orientation",
		icon: "🔄",
		pluginId: Re.plugin.id,
		competency: f,
		competencies: [f],
		createSession: Re.createSession,
		createMasterySignal: Re.createMasterySignal
	}),
	v({
		key: "syllabus-g1-describes-route",
		label: "Describing a Route",
		icon: "🧭",
		pluginId: ze.plugin.id,
		competency: p,
		competencies: [p],
		createSession: ze.createSession,
		createMasterySignal: ze.createMasterySignal
	}),
	v({
		key: "syllabus-g1-sorts-objects-by-criterion",
		label: "Sorting by a Rule",
		icon: "🗂️",
		pluginId: Be.plugin.id,
		competency: ee,
		competencies: [ee],
		createSession: Be.createSession,
		createMasterySignal: Be.createMasterySignal
	}),
	v({
		key: "syllabus-g1-reads-simple-pictogram",
		label: "Reading a Pictogram",
		icon: "📊",
		pluginId: Ve.plugin.id,
		competency: te,
		competencies: [te],
		createSession: Ve.createSession,
		createMasterySignal: Ve.createMasterySignal
	}),
	v({
		key: "syllabus-g1-continues-repeating-pattern",
		label: "Continuing a Pattern",
		icon: "🔁",
		pluginId: He.plugin.id,
		competency: ne,
		competencies: [ne],
		createSession: He.createSession,
		createMasterySignal: He.createMasterySignal
	}),
	v({
		key: "syllabus-g1-choose-addition-or-subtraction",
		label: "Addition or Subtraction?",
		icon: "❓",
		pluginId: Ue.plugin.id,
		competency: re,
		competencies: [re],
		createSession: Ue.createSession,
		createMasterySignal: Ue.createMasterySignal
	})
], Ke = {
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
}, qe = {
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
}, Je = {
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
}, Ye = {
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
}, Xe = {
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
}, Ze = {
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
}, Qe = {
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
}, $e = {
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
}, et = {
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
}, tt = {
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
}, nt = {
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
}, rt = {
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
}, it = {
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
}, at = {
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
}, ot = {
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
}, st = {
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
}, ct = {
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
}, lt = {
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
}, ut = {
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
}, dt = {
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
}, ft = {
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
}, pt = {
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
}, mt = [
	Ke,
	qe,
	Je,
	Ye,
	Xe,
	Ze,
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
	pt
], ht = g({
	pluginId: "syllabus-g2-counts-reads-writes-to-1000",
	competencyId: Ke.id,
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
}), gt = h({
	pluginId: "syllabus-g2-orders-numbers-to-1000",
	competencyId: qe.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "Which number is the smallest: 245, 254, 199?",
			options: [
				"245",
				"254",
				"199"
			],
			correctIndex: 2
		},
		fr: {
			prompt: "Quel est le plus petit nombre : 245, 254, 199 ?",
			options: [
				"245",
				"254",
				"199"
			],
			correctIndex: 2
		}
	}, {
		grade: 2,
		en: {
			prompt: "Which number is the largest: 683, 638, 863?",
			options: [
				"683",
				"638",
				"863"
			],
			correctIndex: 2
		},
		fr: {
			prompt: "Quel est le plus grand nombre : 683, 638, 863 ?",
			options: [
				"683",
				"638",
				"863"
			],
			correctIndex: 2
		}
	}]
}), _t = g({
	pluginId: "syllabus-g2-partitions-three-digit-numbers",
	competencyId: Je.id,
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
}), vt = g({
	pluginId: "syllabus-g2-digit-value-in-three-digit-number",
	competencyId: Ye.id,
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
}), yt = g({
	pluginId: "syllabus-g2-number-bonds-within-20",
	competencyId: Xe.id,
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
}), bt = g({
	pluginId: "syllabus-g2-add-subtract-two-digit-with-regrouping",
	competencyId: Ze.id,
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
}), xt = _({
	pluginId: "syllabus-g2-addition-commutative-subtraction-not",
	competencyId: Qe.id,
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
}), St = g({
	pluginId: "syllabus-g2-times-tables-2-5-10",
	competencyId: $e.id,
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
}), Ct = g({
	pluginId: "syllabus-g2-division-sharing-grouping-remainders",
	competencyId: et.id,
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
}), wt = g({
	pluginId: "syllabus-g2-add-subtract-one-digit-to-two-digit",
	competencyId: tt.id,
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
}), Tt = g({
	pluginId: "syllabus-g2-doubles-halves-to-50",
	competencyId: nt.id,
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
}), Et = h({
	pluginId: "syllabus-g2-thirds-quarters-fifths",
	competencyId: rt.id,
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
}), Dt = g({
	pluginId: "syllabus-g2-mass-and-capacity",
	competencyId: it.id,
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
}), Ot = h({
	pluginId: "syllabus-g2-metric-units-relationships",
	competencyId: at.id,
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
}), kt = h({
	pluginId: "syllabus-g2-time-five-minutes-quarter-hour",
	competencyId: ot.id,
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
}), At = g({
	pluginId: "syllabus-g2-days-weeks-months-counts",
	competencyId: st.id,
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
}), jt = g({
	pluginId: "syllabus-g2-counts-shape-properties",
	competencyId: ct.id,
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
}), Mt = _({
	pluginId: "syllabus-g2-recognises-line-of-symmetry",
	competencyId: lt.id,
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
}), Nt = m({
	pluginId: "syllabus-g2-describes-grid-position",
	competencyId: ut.id,
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
}), Pt = g({
	pluginId: "syllabus-g2-tally-chart-bar-chart",
	competencyId: dt.id,
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
}), Ft = g({
	pluginId: "syllabus-g2-finds-missing-number-in-equation",
	competencyId: ft.id,
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
}), It = h({
	pluginId: "syllabus-g2-solves-one-step-word-problem",
	competencyId: pt.id,
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
}), Lt = [
	ht.plugin,
	gt.plugin,
	_t.plugin,
	vt.plugin,
	yt.plugin,
	bt.plugin,
	xt.plugin,
	St.plugin,
	Ct.plugin,
	wt.plugin,
	Tt.plugin,
	Et.plugin,
	Dt.plugin,
	Ot.plugin,
	kt.plugin,
	At.plugin,
	jt.plugin,
	Mt.plugin,
	Nt.plugin,
	Pt.plugin,
	Ft.plugin,
	It.plugin
];
function y(e) {
	return e;
}
var Rt = [
	y({
		key: "syllabus-g2-counts-reads-writes-to-1000",
		label: "Counting to 1,000",
		icon: "🔢",
		pluginId: ht.plugin.id,
		competency: Ke,
		competencies: [Ke],
		createSession: ht.createSession,
		createMasterySignal: ht.createMasterySignal
	}),
	y({
		key: "syllabus-g2-orders-numbers-to-1000",
		label: "Ordering Numbers to 1,000",
		icon: "📈",
		pluginId: gt.plugin.id,
		competency: qe,
		competencies: [qe],
		createSession: gt.createSession,
		createMasterySignal: gt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-partitions-three-digit-numbers",
		label: "Partitioning 3-Digit Numbers",
		icon: "🧩",
		pluginId: _t.plugin.id,
		competency: Je,
		competencies: [Je],
		createSession: _t.createSession,
		createMasterySignal: _t.createMasterySignal
	}),
	y({
		key: "syllabus-g2-digit-value-in-three-digit-number",
		label: "Digit Value in a 3-Digit Number",
		icon: "🔠",
		pluginId: vt.plugin.id,
		competency: Ye,
		competencies: [Ye],
		createSession: vt.createSession,
		createMasterySignal: vt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-number-bonds-within-20",
		label: "Number Bonds to 20",
		icon: "🔗",
		pluginId: yt.plugin.id,
		competency: Xe,
		competencies: [Xe],
		createSession: yt.createSession,
		createMasterySignal: yt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-add-subtract-two-digit-with-regrouping",
		label: "Add & Subtract with Regrouping",
		icon: "🧮",
		pluginId: bt.plugin.id,
		competency: Ze,
		competencies: [Ze],
		createSession: bt.createSession,
		createMasterySignal: bt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-addition-commutative-subtraction-not",
		label: "Addition & Subtraction: Order Matters?",
		icon: "🔄",
		pluginId: xt.plugin.id,
		competency: Qe,
		competencies: [Qe],
		createSession: xt.createSession,
		createMasterySignal: xt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-times-tables-2-5-10",
		label: "2, 5 & 10 Times Tables",
		icon: "✖️",
		pluginId: St.plugin.id,
		competency: $e,
		competencies: [$e],
		createSession: St.createSession,
		createMasterySignal: St.createMasterySignal
	}),
	y({
		key: "syllabus-g2-division-sharing-grouping-remainders",
		label: "Division: Sharing & Remainders",
		icon: "➗",
		pluginId: Ct.plugin.id,
		competency: et,
		competencies: [et],
		createSession: Ct.createSession,
		createMasterySignal: Ct.createMasterySignal
	}),
	y({
		key: "syllabus-g2-add-subtract-one-digit-to-two-digit",
		label: "Mental Add & Subtract to 2-Digit",
		icon: "🧠",
		pluginId: wt.plugin.id,
		competency: tt,
		competencies: [tt],
		createSession: wt.createSession,
		createMasterySignal: wt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-doubles-halves-to-50",
		label: "Doubles & Halves to 50",
		icon: "🪞",
		pluginId: Tt.plugin.id,
		competency: nt,
		competencies: [nt],
		createSession: Tt.createSession,
		createMasterySignal: Tt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-thirds-quarters-fifths",
		label: "Thirds, Quarters & Fifths",
		icon: "🍰",
		pluginId: Et.plugin.id,
		competency: rt,
		competencies: [rt],
		createSession: Et.createSession,
		createMasterySignal: Et.createMasterySignal
	}),
	y({
		key: "syllabus-g2-mass-and-capacity",
		label: "Measuring Mass & Capacity",
		icon: "⚖️",
		pluginId: Dt.plugin.id,
		competency: it,
		competencies: [it],
		createSession: Dt.createSession,
		createMasterySignal: Dt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-metric-units-relationships",
		label: "Metric Units & Relationships",
		icon: "📏",
		pluginId: Ot.plugin.id,
		competency: at,
		competencies: [at],
		createSession: Ot.createSession,
		createMasterySignal: Ot.createMasterySignal
	}),
	y({
		key: "syllabus-g2-time-five-minutes-quarter-hour",
		label: "Telling Time: 5 Minutes & Quarter Hour",
		icon: "🕐",
		pluginId: kt.plugin.id,
		competency: ot,
		competencies: [ot],
		createSession: kt.createSession,
		createMasterySignal: kt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-days-weeks-months-counts",
		label: "Days, Weeks & Months",
		icon: "📅",
		pluginId: At.plugin.id,
		competency: st,
		competencies: [st],
		createSession: At.createSession,
		createMasterySignal: At.createMasterySignal
	}),
	y({
		key: "syllabus-g2-counts-shape-properties",
		label: "Counting Shape Properties",
		icon: "🔺",
		pluginId: jt.plugin.id,
		competency: ct,
		competencies: [ct],
		createSession: jt.createSession,
		createMasterySignal: jt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-recognises-line-of-symmetry",
		label: "Lines of Symmetry",
		icon: "🦋",
		pluginId: Mt.plugin.id,
		competency: lt,
		competencies: [lt],
		createSession: Mt.createSession,
		createMasterySignal: Mt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-describes-grid-position",
		label: "Grid Positions",
		icon: "🗺️",
		pluginId: Nt.plugin.id,
		competency: ut,
		competencies: [ut],
		createSession: Nt.createSession,
		createMasterySignal: Nt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-tally-chart-bar-chart",
		label: "Tally Charts & Bar Charts",
		icon: "📊",
		pluginId: Pt.plugin.id,
		competency: dt,
		competencies: [dt],
		createSession: Pt.createSession,
		createMasterySignal: Pt.createMasterySignal
	}),
	y({
		key: "syllabus-g2-finds-missing-number-in-equation",
		label: "Finding the Missing Number",
		icon: "❓",
		pluginId: Ft.plugin.id,
		competency: ft,
		competencies: [ft],
		createSession: Ft.createSession,
		createMasterySignal: Ft.createMasterySignal
	}),
	y({
		key: "syllabus-g2-solves-one-step-word-problem",
		label: "One-Step Word Problems",
		icon: "📝",
		pluginId: It.plugin.id,
		competency: pt,
		competencies: [pt],
		createSession: It.createSession,
		createMasterySignal: It.createMasterySignal
	})
], zt = {
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
}, Bt = {
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
}, Vt = {
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
}, Ht = {
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
}, Ut = {
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
}, Wt = {
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
}, Gt = {
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
}, Kt = {
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
}, qt = {
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
}, Jt = {
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
}, Yt = {
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
}, Xt = {
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
}, Zt = {
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
}, Qt = {
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
}, $t = {
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
}, en = {
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
}, tn = {
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
}, nn = {
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
}, rn = {
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
}, an = {
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
}, on = {
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
}, sn = {
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
}, cn = {
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
}, ln = {
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
}, un = {
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
}, dn = [
	zt,
	Bt,
	Vt,
	Ht,
	Ut,
	Wt,
	Gt,
	Kt,
	qt,
	Jt,
	Yt,
	Xt,
	Zt,
	Qt,
	$t,
	en,
	tn,
	nn,
	rn,
	an,
	on,
	sn,
	cn,
	ln,
	un
], fn = g({
	pluginId: "syllabus-g3-reads-writes-orders-to-10000",
	competencyId: zt.id,
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
}), pn = g({
	pluginId: "syllabus-g3-add-subtract-three-digit-columns",
	competencyId: Bt.id,
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
}), mn = _({
	pluginId: "syllabus-g3-checks-subtraction-with-inverse-addition",
	competencyId: Vt.id,
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
}), hn = g({
	pluginId: "syllabus-g3-times-tables-3-4-8",
	competencyId: Ht.id,
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
}), gn = g({
	pluginId: "syllabus-g3-multiplies-two-digit-by-one-digit-written",
	competencyId: Ut.id,
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
}), _n = _({
	pluginId: "syllabus-g3-multiplication-commutative-division-not",
	competencyId: Wt.id,
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
}), vn = g({
	pluginId: "syllabus-g3-add-subtract-two-two-digit-mentally",
	competencyId: Gt.id,
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
}), yn = g({
	pluginId: "syllabus-g3-bridges-through-10-and-100",
	competencyId: Kt.id,
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
}), bn = h({
	pluginId: "syllabus-g3-fraction-as-number-on-number-line",
	competencyId: qt.id,
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
}), xn = m({
	pluginId: "syllabus-g3-finds-equivalent-fractions-simplifies",
	competencyId: Jt.id,
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
}), Sn = m({
	pluginId: "syllabus-g3-add-subtract-fractions-same-denominator",
	competencyId: Yt.id,
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
}), Cn = g({
	pluginId: "syllabus-g3-reads-decimal-in-price-and-measurement",
	competencyId: Xt.id,
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
}), wn = g({
	pluginId: "syllabus-g3-converts-between-adjacent-metric-units",
	competencyId: Zt.id,
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
}), Tn = g({
	pluginId: "syllabus-g3-measures-perimeter-rectangle-compound",
	competencyId: Qt.id,
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
}), En = h({
	pluginId: "syllabus-g3-tells-time-to-minute-converts-12-24",
	competencyId: $t.id,
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
}), Dn = g({
	pluginId: "syllabus-g3-calculates-duration-within-hour",
	competencyId: en.id,
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
}), On = h({
	pluginId: "syllabus-g3-classifies-triangles",
	competencyId: tn.id,
	bank: [{
		grade: 1,
		en: {
			prompt: "A triangle has all three sides the same length. What is it called?",
			options: [
				"Equilateral",
				"Isosceles",
				"Scalene"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un triangle a ses trois côtés de même longueur. Comment s'appelle-t-il ?",
			options: [
				"Équilatéral",
				"Isocèle",
				"Scalène"
			],
			correctIndex: 0
		}
	}, {
		grade: 2,
		en: {
			prompt: "A triangle has one 90° angle. What is it called?",
			options: [
				"Right-angled",
				"Equilateral",
				"Isosceles"
			],
			correctIndex: 0
		},
		fr: {
			prompt: "Un triangle a un angle de 90°. Comment s'appelle-t-il ?",
			options: [
				"Rectangle",
				"Équilatéral",
				"Isocèle"
			],
			correctIndex: 0
		}
	}]
}), kn = _({
	pluginId: "syllabus-g3-classifies-quadrilaterals",
	competencyId: nn.id,
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
}), An = h({
	pluginId: "syllabus-g3-identifies-right-angles",
	competencyId: rn.id,
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
}), jn = h({
	pluginId: "syllabus-g3-uses-compass-directions-quarter-half-turns",
	competencyId: an.id,
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
}), Mn = g({
	pluginId: "syllabus-g3-reads-bar-chart-pictogram-scale",
	competencyId: on.id,
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
}), Nn = h({
	pluginId: "syllabus-g3-answers-comparison-questions-from-table",
	competencyId: sn.id,
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
}), Pn = m({
	pluginId: "syllabus-g3-continues-number-sequence-states-rule",
	competencyId: cn.id,
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
}), Fn = g({
	pluginId: "syllabus-g3-solves-two-step-word-problem",
	competencyId: ln.id,
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
}), In = h({
	pluginId: "syllabus-g3-draws-bar-model-to-represent-problem",
	competencyId: un.id,
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
}), Ln = [
	fn.plugin,
	pn.plugin,
	mn.plugin,
	hn.plugin,
	gn.plugin,
	_n.plugin,
	vn.plugin,
	yn.plugin,
	bn.plugin,
	xn.plugin,
	Sn.plugin,
	Cn.plugin,
	wn.plugin,
	Tn.plugin,
	En.plugin,
	Dn.plugin,
	On.plugin,
	kn.plugin,
	An.plugin,
	jn.plugin,
	Mn.plugin,
	Nn.plugin,
	Pn.plugin,
	Fn.plugin,
	In.plugin
];
function b(e) {
	return e;
}
var Rn = [
	b({
		key: "syllabus-g3-reads-writes-orders-to-10000",
		label: "Numbers to 10,000",
		icon: "🔢",
		pluginId: fn.plugin.id,
		competency: zt,
		competencies: [zt],
		createSession: fn.createSession,
		createMasterySignal: fn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-add-subtract-three-digit-columns",
		label: "Column Addition & Subtraction",
		icon: "🧮",
		pluginId: pn.plugin.id,
		competency: Bt,
		competencies: [Bt],
		createSession: pn.createSession,
		createMasterySignal: pn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-checks-subtraction-with-inverse-addition",
		label: "Checking Subtraction with Addition",
		icon: "✅",
		pluginId: mn.plugin.id,
		competency: Vt,
		competencies: [Vt],
		createSession: mn.createSession,
		createMasterySignal: mn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-times-tables-3-4-8",
		label: "3, 4 & 8 Times Tables",
		icon: "✖️",
		pluginId: hn.plugin.id,
		competency: Ht,
		competencies: [Ht],
		createSession: hn.createSession,
		createMasterySignal: hn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-multiplies-two-digit-by-one-digit-written",
		label: "Written Multiplication",
		icon: "📝",
		pluginId: gn.plugin.id,
		competency: Ut,
		competencies: [Ut],
		createSession: gn.createSession,
		createMasterySignal: gn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-multiplication-commutative-division-not",
		label: "Multiplication & Division: Order Matters?",
		icon: "🔄",
		pluginId: _n.plugin.id,
		competency: Wt,
		competencies: [Wt],
		createSession: _n.createSession,
		createMasterySignal: _n.createMasterySignal
	}),
	b({
		key: "syllabus-g3-add-subtract-two-two-digit-mentally",
		label: "Mental Add & Subtract: Two 2-Digit Numbers",
		icon: "🧠",
		pluginId: vn.plugin.id,
		competency: Gt,
		competencies: [Gt],
		createSession: vn.createSession,
		createMasterySignal: vn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-bridges-through-10-and-100",
		label: "Bridging Through 10 & 100",
		icon: "🌉",
		pluginId: yn.plugin.id,
		competency: Kt,
		competencies: [Kt],
		createSession: yn.createSession,
		createMasterySignal: yn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-fraction-as-number-on-number-line",
		label: "Fractions on a Number Line",
		icon: "📏",
		pluginId: bn.plugin.id,
		competency: qt,
		competencies: [qt],
		createSession: bn.createSession,
		createMasterySignal: bn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-finds-equivalent-fractions-simplifies",
		label: "Equivalent Fractions & Simplifying",
		icon: "🍰",
		pluginId: xn.plugin.id,
		competency: Jt,
		competencies: [Jt],
		createSession: xn.createSession,
		createMasterySignal: xn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-add-subtract-fractions-same-denominator",
		label: "Add & Subtract Fractions",
		icon: "➗",
		pluginId: Sn.plugin.id,
		competency: Yt,
		competencies: [Yt],
		createSession: Sn.createSession,
		createMasterySignal: Sn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-reads-decimal-in-price-and-measurement",
		label: "Reading Decimals in Prices & Measurements",
		icon: "💲",
		pluginId: Cn.plugin.id,
		competency: Xt,
		competencies: [Xt],
		createSession: Cn.createSession,
		createMasterySignal: Cn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-converts-between-adjacent-metric-units",
		label: "Converting Metric Units",
		icon: "📐",
		pluginId: wn.plugin.id,
		competency: Zt,
		competencies: [Zt],
		createSession: wn.createSession,
		createMasterySignal: wn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-measures-perimeter-rectangle-compound",
		label: "Measuring Perimeter",
		icon: "🔲",
		pluginId: Tn.plugin.id,
		competency: Qt,
		competencies: [Qt],
		createSession: Tn.createSession,
		createMasterySignal: Tn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-tells-time-to-minute-converts-12-24",
		label: "Telling Time to the Minute",
		icon: "🕐",
		pluginId: En.plugin.id,
		competency: $t,
		competencies: [$t],
		createSession: En.createSession,
		createMasterySignal: En.createMasterySignal
	}),
	b({
		key: "syllabus-g3-calculates-duration-within-hour",
		label: "Calculating Duration",
		icon: "⏱️",
		pluginId: Dn.plugin.id,
		competency: en,
		competencies: [en],
		createSession: Dn.createSession,
		createMasterySignal: Dn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-classifies-triangles",
		label: "Classifying Triangles",
		icon: "🔺",
		pluginId: On.plugin.id,
		competency: tn,
		competencies: [tn],
		createSession: On.createSession,
		createMasterySignal: On.createMasterySignal
	}),
	b({
		key: "syllabus-g3-classifies-quadrilaterals",
		label: "Classifying Quadrilaterals",
		icon: "🔷",
		pluginId: kn.plugin.id,
		competency: nn,
		competencies: [nn],
		createSession: kn.createSession,
		createMasterySignal: kn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-identifies-right-angles",
		label: "Identifying Right Angles",
		icon: "📐",
		pluginId: An.plugin.id,
		competency: rn,
		competencies: [rn],
		createSession: An.createSession,
		createMasterySignal: An.createMasterySignal
	}),
	b({
		key: "syllabus-g3-uses-compass-directions-quarter-half-turns",
		label: "Compass Directions & Turns",
		icon: "🧭",
		pluginId: jn.plugin.id,
		competency: an,
		competencies: [an],
		createSession: jn.createSession,
		createMasterySignal: jn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-reads-bar-chart-pictogram-scale",
		label: "Bar Charts & Pictograms",
		icon: "📊",
		pluginId: Mn.plugin.id,
		competency: on,
		competencies: [on],
		createSession: Mn.createSession,
		createMasterySignal: Mn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-answers-comparison-questions-from-table",
		label: "Comparing Data in Tables",
		icon: "📋",
		pluginId: Nn.plugin.id,
		competency: sn,
		competencies: [sn],
		createSession: Nn.createSession,
		createMasterySignal: Nn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-continues-number-sequence-states-rule",
		label: "Number Sequences & Rules",
		icon: "🔁",
		pluginId: Pn.plugin.id,
		competency: cn,
		competencies: [cn],
		createSession: Pn.createSession,
		createMasterySignal: Pn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-solves-two-step-word-problem",
		label: "Two-Step Word Problems",
		icon: "📝",
		pluginId: Fn.plugin.id,
		competency: ln,
		competencies: [ln],
		createSession: Fn.createSession,
		createMasterySignal: Fn.createMasterySignal
	}),
	b({
		key: "syllabus-g3-draws-bar-model-to-represent-problem",
		label: "Bar Models for Word Problems",
		icon: "📊",
		pluginId: In.plugin.id,
		competency: un,
		competencies: [un],
		createSession: In.createSession,
		createMasterySignal: In.createMasterySignal
	})
], x = {
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
}, zn = {
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
}, Bn = {
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
}, Vn = {
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
}, S = {
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
}, Hn = {
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
}, C = {
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
}, w = {
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
}, T = {
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
}, E = {
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
}, D = {
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
}, O = {
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
}, k = {
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
}, Un = {
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
}, Wn = {
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
}, Gn = {
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
}, Kn = {
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
}, qn = {
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
}, A = {
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
}, j = {
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
}, M = {
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
}, N = {
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
}, P = {
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
}, F = {
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
}, I = {
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
}, L = {
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
}, Jn = [
	x,
	zn,
	Bn,
	Vn,
	S,
	Hn,
	C,
	w,
	T,
	E,
	D,
	O,
	k,
	Un,
	Wn,
	Gn,
	Kn,
	qn,
	A,
	j,
	M,
	N,
	P,
	F,
	I,
	L,
	...ie,
	...mt,
	...dn
], Yn = n([{
	id: "mathematics",
	nameKey: "subject.mathematics.name"
}], Jn, Jn.map((e) => e.id));
if (!Yn.valid) throw Error(`curriculum.ts: invalid competency model: ${JSON.stringify(Yn.errors)}`);
var Xn = [
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
function Zn(e) {
	let [t, n] = e.id.split(".");
	if (t === "math") return Xn.some((e) => e.areaKey === n) ? n : void 0;
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/types.ts
var Qn = "math.time.baseline-day-order", $n = "math.time.baseline-days-of-week";
//#endregion
//#region packages/baseline-calendar-time-basics/src/rng.ts
function er(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function tr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/generate.ts
var nr = [
	"morning",
	"afternoon",
	"evening",
	"night"
], rr = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
function ir(e) {
	return e === "P" || e === 1;
}
function ar(e, t) {
	let n = tr(e, 0, t - 1), r = tr(e, 0, t - 1);
	for (; r === n;) r = tr(e, 0, t - 1);
	return [n, r];
}
function or(e, t, n) {
	let [r, i] = ar(n, nr.length), a = Math.min(r, i), o = {
		id: "a",
		label: nr[r]
	}, s = {
		id: "b",
		label: nr[i]
	};
	return {
		id: `baseline-calendar-time-basics-day-order-${e}-${t}`,
		kind: "day-order",
		grade: e,
		competencyId: Qn,
		prompt: "Which comes first in the day?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function sr(e, t, n) {
	let [r, i] = ar(n, rr.length), a = Math.min(r, i), o = {
		id: "a",
		label: rr[r]
	}, s = {
		id: "b",
		label: rr[i]
	};
	return {
		id: `baseline-calendar-time-basics-days-of-week-${e}-${t}`,
		kind: "days-of-week",
		grade: e,
		competencyId: $n,
		prompt: "Which comes first in the week?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function cr(e, t) {
	if (!ir(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = er(t);
	return n() < .5 ? or(e, t, n) : sr(e, t, n);
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/plugin.ts
function lr(e, t, n, r, i) {
	return {
		competencyId: e.competencyId,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ur(e, t) {
	let n = er(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(cr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var dr = {
	id: "baseline-calendar-time-basics",
	competencyIds: [Qn, $n],
	generateQuestion(e, t) {
		return cr(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: e.prompt,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
}, fr = "math.addition.baseline-concrete";
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/rng.ts
function pr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function R(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/generate.ts
var mr = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function hr(e) {
	return e === "P" || e === 1;
}
function gr(e, t, n) {
	let r = R(n, 1, 5), i = R(n, 1, 5);
	return {
		id: `baseline-concrete-addition-subtraction-add-${e}-${t}`,
		grade: e,
		operator: "+",
		leftCount: r,
		rightCount: i,
		emoji: mr[R(n, 0, mr.length - 1)],
		correctAnswer: r + i
	};
}
function _r(e, t, n) {
	let r = R(n, 2, 10), i = R(n, 1, r - 1);
	return {
		id: `baseline-concrete-addition-subtraction-sub-${e}-${t}`,
		grade: e,
		operator: "-",
		leftCount: r,
		rightCount: i,
		emoji: mr[R(n, 0, mr.length - 1)],
		correctAnswer: r - i
	};
}
function vr(e, t) {
	if (!hr(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = pr(t);
	return n() < .5 ? gr(e, t, n) : _r(e, t, n);
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/plugin.ts
function yr(e, t, n, r, i) {
	return {
		competencyId: fr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function br(e, t) {
	let n = pr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(vr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var xr = {
	id: "baseline-concrete-addition-subtraction",
	competencyIds: [fr],
	generateQuestion(e, t) {
		return vr(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "equation",
				equation: `${e.emoji.repeat(e.leftCount)} ${e.operator} ${e.emoji.repeat(e.rightCount)}`
			},
			correctAnswer: e.correctAnswer
		};
	}
}, Sr = "math.number-sense.baseline-counting", Cr = "math.number-sense.baseline-subitizing", wr = "math.number-sense.baseline-digits", Tr = "math.comparing-ordering.baseline-groups";
//#endregion
//#region packages/baseline-counting-quantities/src/rng.ts
function Er(e) {
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
//#region packages/baseline-counting-quantities/src/generate.ts
var Dr = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function Or(e) {
	return e === "P" || e === 1;
}
function B(e) {
	return Dr[z(e, 0, Dr.length - 1)];
}
function kr(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (; n.size < 3;) {
		let r = z(e, 0, 9);
		r !== t && n.add(r);
	}
	let r = [t, ...n];
	for (let t = r.length - 1; t > 0; t--) {
		let n = z(e, 0, t), i = r[t];
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
function Ar(e, t, n) {
	let r = z(n, 1, 20);
	return {
		id: `baseline-counting-quantities-counting-${e}-${t}`,
		kind: "counting",
		grade: e,
		competencyId: Sr,
		count: r,
		emoji: B(n),
		correctAnswer: r
	};
}
function jr(e, t, n) {
	let r = z(n, 1, 5);
	return {
		id: `baseline-counting-quantities-subitizing-${e}-${t}`,
		kind: "subitizing",
		grade: e,
		competencyId: Cr,
		count: r,
		emoji: B(n),
		correctAnswer: r
	};
}
function Mr(e, t, n) {
	let r = z(n, 0, 9), i = B(n), { options: a, correctOptionId: o } = kr(n, r);
	return {
		id: `baseline-counting-quantities-digit-${e}-${t}`,
		kind: "digit",
		grade: e,
		competencyId: wr,
		count: r,
		emoji: i,
		options: a,
		correctOptionId: o
	};
}
function Nr(e, t, n) {
	let r = z(n, 1, 10), i = z(n, 1, 10);
	for (; i === r;) i = z(n, 1, 10);
	let a = B(n), o = B(n), s = r > i ? "left" : "right";
	return {
		id: `baseline-counting-quantities-compare-groups-${e}-${t}`,
		kind: "compare-groups",
		grade: e,
		competencyId: Tr,
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
function Pr(e, t) {
	if (!Or(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = Er(t);
	switch (z(n, 0, 3)) {
		case 0: return Ar(e, t, n);
		case 1: return jr(e, t, n);
		case 2: return Mr(e, t, n);
		default: return Nr(e, t, n);
	}
}
//#endregion
//#region packages/baseline-counting-quantities/src/plugin.ts
function Fr(e, t, n, r, i) {
	return {
		competencyId: e.competencyId,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Ir(e, t) {
	let n = Er(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Pr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Lr = {
	id: "baseline-counting-quantities",
	competencyIds: [
		Sr,
		Cr,
		wr,
		Tr
	],
	generateQuestion(e, t) {
		return Pr(e, t);
	},
	validateAnswer(e, t) {
		switch (e.kind) {
			case "counting":
			case "subitizing": return { correct: t === e.correctAnswer };
			case "digit":
			case "compare-groups": return { correct: t === e.correctOptionId };
		}
	},
	toPresentation(e) {
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
}, Rr = "math.measurement.baseline-comparison";
//#endregion
//#region packages/baseline-direct-comparison/src/rng.ts
function zr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Br(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-direct-comparison/src/generate.ts
var Vr = {
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
}, Hr = [
	"length",
	"weight",
	"capacity"
], Ur = {
	length: "Which one is longer?",
	weight: "Which one is heavier?",
	capacity: "Which one holds more?"
};
function Wr(e) {
	return e === "P" || e === 1;
}
function Gr(e, t) {
	let n = Br(e, 0, t.length - 1), r = Br(e, 0, t.length - 1);
	for (; r === n;) r = Br(e, 0, t.length - 1);
	return [t[n], t[r]];
}
function Kr(e, t) {
	if (!Wr(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = zr(t), r = Hr[Br(n, 0, Hr.length - 1)], [i, a] = Gr(n, Vr[r]), o = n() < .5, s = {
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
		prompt: Ur[r],
		options: [s, c],
		correctOptionId: o ? "a" : "b"
	};
}
//#endregion
//#region packages/baseline-direct-comparison/src/plugin.ts
function qr(e, t, n, r, i) {
	return {
		competencyId: Rr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Jr(e, t) {
	let n = zr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Kr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Yr = {
	id: "baseline-direct-comparison",
	competencyIds: [Rr],
	generateQuestion(e, t) {
		return Kr(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: e.prompt,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
}, Xr = "math.geometry.baseline-position";
//#endregion
//#region packages/baseline-positional-language/src/rng.ts
function Zr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function V(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-positional-language/src/generate.ts
var Qr = [
	"🐱 the cat",
	"🐶 the dog",
	"⭐ the star",
	"🧸 the toy"
], H = [
	"📦 the box",
	"🪑 the chair",
	"🛏️ the bed",
	"🌳 the tree"
], $r = [
	"on",
	"under",
	"behind",
	"between",
	"next-to"
], ei = {
	on: "on",
	under: "under",
	behind: "behind",
	between: "between",
	"next-to": "next to"
};
function ti(e) {
	return e === "P" || e === 1;
}
function ni(e, t, n, r) {
	switch (e) {
		case "on": return `${t}\n${n}`;
		case "under": return `${n}\n${t}`;
		case "behind": return `${n}${t}`;
		case "next-to": return `${t}  ${n}`;
		case "between": return `${n}  ${t}  ${r}`;
	}
}
function ri(e) {
	let t = [...$r];
	for (let n = t.length - 1; n > 0; n--) {
		let r = V(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function ii(e, t) {
	if (!ti(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = Zr(t), r = $r[V(n, 0, $r.length - 1)], i = Qr[V(n, 0, Qr.length - 1)], a = V(n, 0, H.length - 1), o = V(n, 0, H.length - 1);
	for (; o === a;) o = V(n, 0, H.length - 1);
	let s = H[a], c = H[o], l = i.split(" ")[0], u = s.split(" ")[0], d = c.split(" ")[0], f = ri(n).map((e) => ({
		id: `position-${e}`,
		label: ei[e]
	}));
	return {
		id: `baseline-positional-language-${e}-${t}`,
		grade: e,
		position: r,
		subjectLabel: i,
		scene: ni(r, l, u, d),
		options: f,
		correctOptionId: `position-${r}`
	};
}
//#endregion
//#region packages/baseline-positional-language/src/plugin.ts
function ai(e, t, n, r, i) {
	return {
		competencyId: Xr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function oi(e, t) {
	let n = Zr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ii(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var si = {
	id: "baseline-positional-language",
	competencyIds: [Xr],
	generateQuestion(e, t) {
		return ii(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: `${e.scene}\nWhere is ${e.subjectLabel}?`,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
}, ci = "math.geometry.baseline-shapes";
//#endregion
//#region packages/baseline-shape-recognition/src/rng.ts
function li(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function ui(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-shape-recognition/src/generate.ts
var di = [
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
function fi(e) {
	return e === "P" || e === 1;
}
function pi(e) {
	let t = di.map((e) => e.name);
	for (let n = t.length - 1; n > 0; n--) {
		let r = ui(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function mi(e, t) {
	if (!fi(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = li(t), r = di[ui(n, 0, di.length - 1)], i = pi(n).map((e) => ({
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
function hi(e, t, n, r, i) {
	return {
		competencyId: ci,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function gi(e, t) {
	let n = li(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(mi(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var _i = {
	id: "baseline-shape-recognition",
	competencyIds: [ci],
	generateQuestion(e, t) {
		return mi(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: `${e.emoji} — what shape is this?`,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
};
//#endregion
//#region packages/mental-addition/src/rng.ts
function vi(e) {
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
function yi(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function bi(e) {
	let t = U(e, 0, 9);
	return {
		operandA: t,
		operandB: U(e, 0, 9 - t)
	};
}
function xi(e) {
	let t = U(e, 1, 9);
	return {
		operandA: t,
		operandB: U(e, Math.max(1, 10 - t), 9)
	};
}
function Si(e) {
	let t = U(e, 0, 9), n = U(e, 0, 9 - t);
	return {
		operandA: U(e, 1, 9) * 10 + n,
		operandB: t
	};
}
function Ci(e) {
	let t = U(e, 1, 9);
	return {
		onesA: U(e, Math.max(0, 10 - t), 9),
		onesB: t
	};
}
function wi(e) {
	let { onesA: t, onesB: n } = Ci(e), r = U(e, 1, 9), i = U(e, 1, 9);
	return {
		operandA: r * 10 + t,
		operandB: i * 10 + n
	};
}
function Ti(e) {
	let { onesA: t, onesB: n } = Ci(e), r = U(e, 0, 9), i = U(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = U(e, +!a, 9);
	return {
		operandA: i,
		operandB: (a ? U(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function Ei(e, t) {
	if (!yi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = vi(t), { operandA: r, operandB: i } = e === 1 ? bi(n) : e === 2 ? xi(n) : e === 3 ? Si(n) : e === 4 ? wi(n) : Ti(n);
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
var Di = "math.addition.mental";
function Oi(e, t, n, r, i) {
	return {
		competencyId: Di,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ki(e, t) {
	let n = vi(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ei(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ai = {
	id: "mental-addition",
	competencyIds: [Di],
	generateQuestion(e, t) {
		return Ei(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctSum };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "equation",
				equation: `${e.operandA} + ${e.operandB}`
			},
			correctAnswer: e.correctSum
		};
	}
};
//#endregion
//#region packages/mental-division/src/rng.ts
function ji(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Mi(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-division/src/generate.ts
function Ni(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Pi(e, t) {
	return {
		divisor: Mi(e, 1, t),
		correctQuotient: Mi(e, 0, t)
	};
}
function Fi(e) {
	return {
		divisor: Mi(e, 1, 9),
		correctQuotient: Mi(e, 11, 20)
	};
}
function Ii(e, t) {
	if (!Ni(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = ji(t), { divisor: r, correctQuotient: i } = e === 1 ? Pi(n, 2) : e === 2 ? Pi(n, 5) : e === 3 ? Pi(n, 10) : e === 4 ? Pi(n, 12) : Fi(n);
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
var Li = "math.division.mental";
function Ri(e, t, n, r, i) {
	return {
		competencyId: Li,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function zi(e, t) {
	let n = ji(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ii(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Bi = {
	id: "mental-division",
	competencyIds: [Li],
	generateQuestion(e, t) {
		return Ii(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctQuotient };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "equation",
				equation: `${e.dividend} ÷ ${e.divisor}`
			},
			correctAnswer: e.correctQuotient
		};
	}
};
//#endregion
//#region packages/mental-multiplication/src/rng.ts
function Vi(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Hi(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-multiplication/src/generate.ts
function Ui(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Wi(e, t) {
	return {
		factorA: Hi(e, 0, t),
		factorB: Hi(e, 0, t)
	};
}
function Gi(e) {
	return {
		factorA: Hi(e, 11, 20),
		factorB: Hi(e, 0, 9)
	};
}
function Ki(e, t) {
	if (!Ui(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Vi(t), { factorA: r, factorB: i } = e === 1 ? Wi(n, 2) : e === 2 ? Wi(n, 5) : e === 3 ? Wi(n, 10) : e === 4 ? Wi(n, 12) : Gi(n);
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
var qi = "math.multiplication.mental";
function Ji(e, t, n, r, i) {
	return {
		competencyId: qi,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Yi(e, t) {
	let n = Vi(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ki(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Xi = {
	id: "mental-multiplication",
	competencyIds: [qi],
	generateQuestion(e, t) {
		return Ki(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctProduct };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "equation",
				equation: `${e.factorA} × ${e.factorB}`
			},
			correctAnswer: e.correctProduct
		};
	}
};
//#endregion
//#region packages/mental-subtraction/src/rng.ts
function Zi(e) {
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
function Qi(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function $i(e) {
	let t = W(e, 0, 9);
	return {
		correctDifference: t,
		subtrahend: W(e, 0, 9 - t)
	};
}
function ea(e) {
	let t = W(e, 1, 9);
	return {
		correctDifference: t,
		subtrahend: W(e, Math.max(1, 10 - t), 9)
	};
}
function ta(e) {
	let t = W(e, 0, 9), n = W(e, 0, 9 - t);
	return {
		correctDifference: W(e, 1, 9) * 10 + n,
		subtrahend: t
	};
}
function na(e) {
	let t = W(e, 1, 9);
	return {
		onesDiff: W(e, Math.max(0, 10 - t), 9),
		onesSubtrahend: t
	};
}
function ra(e) {
	let { onesDiff: t, onesSubtrahend: n } = na(e), r = W(e, 1, 9), i = W(e, 1, 9);
	return {
		correctDifference: r * 10 + t,
		subtrahend: i * 10 + n
	};
}
function ia(e) {
	let { onesDiff: t, onesSubtrahend: n } = na(e), r = W(e, 0, 9), i = W(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = W(e, +!a, 9);
	return {
		correctDifference: i,
		subtrahend: (a ? W(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function aa(e, t) {
	if (!Qi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Zi(t), { correctDifference: r, subtrahend: i } = e === 1 ? $i(n) : e === 2 ? ea(n) : e === 3 ? ta(n) : e === 4 ? ra(n) : ia(n);
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
var oa = "math.subtraction.mental";
function sa(e, t, n, r, i) {
	return {
		competencyId: oa,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ca(e, t) {
	let n = Zi(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(aa(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var la = {
	id: "mental-subtraction",
	competencyIds: [oa],
	generateQuestion(e, t) {
		return aa(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctDifference };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "equation",
				equation: `${e.minuend} - ${e.subtrahend}`
			},
			correctAnswer: e.correctDifference
		};
	}
}, ua = "math.number-sense.counting-range";
//#endregion
//#region packages/number-sense-counting-range/src/rng.ts
function da(e) {
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
function fa(e) {
	return Number.isInteger(e) && e >= 1 && e <= 4;
}
var pa = {
	1: 100,
	2: 1e3,
	3: 1e4,
	4: 1e6
};
function ma(e, t, n, r) {
	let i = G(r, 0, n - 1);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "next",
		prompt: `What number comes right after ${i}?`,
		numericAnswer: i + 1
	};
}
function ha(e, t, n, r) {
	let i = G(r, 1, n);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "previous",
		prompt: `What number comes right before ${i}?`,
		numericAnswer: i - 1
	};
}
function ga(e, t, n, r) {
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
function _a(e, t) {
	if (!fa(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..4)`);
	let n = pa[e], r = da(t);
	switch (G(r, 0, 2)) {
		case 0: return ma(e, t, n, r);
		case 1: return ha(e, t, n, r);
		default: return ga(e, t, n, r);
	}
}
//#endregion
//#region packages/number-sense-counting-range/src/plugin.ts
function va(e, t, n, r, i) {
	return {
		competencyId: ua,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ya(e, t) {
	let n = da(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(_a(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ba = {
	id: "number-sense-counting-range",
	competencyIds: [ua],
	generateQuestion(e, t) {
		return _a(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "compare" ? { correct: t === e.correctOptionId } : { correct: t === e.numericAnswer };
	},
	toPresentation(e) {
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
}, xa = "math.number-sense.negative-numbers";
//#endregion
//#region packages/number-sense-negative-numbers/src/rng.ts
function Sa(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ca(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-negative-numbers/src/generate.ts
function wa(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ta(e, t, n, r) {
	let i = Ca(n, r[0], r[1]), a = n() < .5 ? "after" : "before", o = a === "after" ? i + 1 : i - 1;
	return {
		id: `number-sense-negative-numbers-${e}-${t}`,
		grade: e,
		kind: "position",
		prompt: `What number comes right ${a} ${i}?`,
		numericAnswer: o
	};
}
function Ea(e, t, n, r, i) {
	let a = Ca(n, i[0], i[1]), o = Ca(n, i[0], i[1]);
	for (; o === a;) o = Ca(n, i[0], i[1]);
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
function Da(e, t) {
	if (!wa(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Sa(t);
	if (e === 1) return Ta(e, t, n, [-10, 10]);
	if (e === 2) return Ta(e, t, n, [-20, 20]);
	if (e === 3) return Ea(e, t, n, "temperature", [-20, 20]);
	if (e === 4) return Ea(e, t, n, "debt", [-50, -1]);
	if (n() < .5) return Ta(e, t, n, [-100, 100]);
	let r = n() < .5 ? "temperature" : "debt";
	return Ea(e, t, n, r, r === "debt" ? [-50, -1] : [-100, 100]);
}
//#endregion
//#region packages/number-sense-negative-numbers/src/plugin.ts
function Oa(e, t, n, r, i) {
	return {
		competencyId: xa,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ka(e, t) {
	let n = Sa(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Da(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Aa = {
	id: "number-sense-negative-numbers",
	competencyIds: [xa],
	generateQuestion(e, t) {
		return Da(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "compare" ? { correct: t === e.correctOptionId } : { correct: t === e.numericAnswer };
	},
	toPresentation(e) {
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
}, ja = "math.number-sense.odd-even";
//#endregion
//#region packages/number-sense-odd-even/src/rng.ts
function Ma(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Na(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-odd-even/src/generate.ts
function Pa(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Fa = {
	1: 20,
	2: 100,
	3: 1e3,
	4: 1e4,
	5: 1e4
};
function Ia(e) {
	return e % 2 == 0 ? "even" : "odd";
}
function La(e, t, n) {
	let r = t === "even" ? 0 : 1;
	return r + 2 * Na(e, 0, Math.floor((n - r) / 2) + 1 - 1);
}
function Ra(e, t, n) {
	let r = Fa[e], i = Na(n, 0, r);
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
		correctOptionId: Ia(i)
	};
}
function za(e, t, n) {
	let r = n() < .5 ? "odd" : "even", i = r === "odd" ? "even" : "odd", a = [];
	for (; a.length < 3;) {
		let e = La(n, r, 1e4);
		a.includes(e) || a.push(e);
	}
	let o = La(n, i, 1e4), s = [
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
		let t = Na(n, 0, e), r = s[e];
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
function Ba(e, t) {
	if (!Pa(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ma(t);
	return e === 5 && n() < .5 ? za(e, t, n) : Ra(e, t, n);
}
//#endregion
//#region packages/number-sense-odd-even/src/plugin.ts
function Va(e, t, n, r, i) {
	return {
		competencyId: ja,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Ha(e, t) {
	let n = Ma(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ba(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ua = {
	id: "number-sense-odd-even",
	competencyIds: [ja],
	generateQuestion(e, t) {
		return Ba(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: e.prompt,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
}, Wa = "math.number-sense.ordinals";
//#endregion
//#region packages/number-sense-ordinals/src/ordinal.ts
function Ga(e) {
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
function Ka(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function qa(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-ordinals/src/generate.ts
var Ja = {
	1: 5,
	2: 10,
	3: 20,
	4: 50,
	5: 100
};
function Ya(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
function Xa(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = qa(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Za(e, t) {
	let n = Xa(e, t), r = n.map((e, t) => ({
		id: `opt-${t}`,
		label: e.label
	}));
	return {
		options: r,
		correctOptionId: r[n.findIndex((e) => e.correct)].id
	};
}
function Qa(e, t) {
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
function $a(e, t, n, r) {
	let i = new Set(t), a = [];
	for (let t of e) {
		if (a.length >= r) break;
		i.has(t) || (a.push(t), i.add(t));
	}
	for (let e = 1; e <= n && a.length < r; e++) i.has(e) || (a.push(e), i.add(e));
	return a;
}
function eo(e, t, n, r) {
	let i = $a(Qa(e, t), /* @__PURE__ */ new Set([e]), t, 3);
	return Za([{
		label: r(e),
		correct: !0
	}, ...i.map((e) => ({
		label: r(e),
		correct: !1
	}))], n);
}
function to(e, t) {
	if (!Ya(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ja[e], r = Ka(t), i = r() < .5 ? "number-to-word" : "word-to-number", a = qa(r, 1, n), { options: o, correctOptionId: s } = i === "number-to-word" ? eo(a, n, r, Ga) : eo(a, n, r, String), c = i === "number-to-word" ? `What is the ordinal (position) word for ${a}?` : `Which number is ${Ga(a)}?`;
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
function no(e, t, n, r, i) {
	return {
		competencyId: Wa,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ro(e, t) {
	let n = Ka(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(to(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var io = {
	id: "number-sense-ordinals",
	competencyIds: [Wa],
	generateQuestion(e, t) {
		return to(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: e.prompt,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
}, ao = "math.number-sense.primes-factors";
//#endregion
//#region packages/number-sense-primes-factors/src/rng.ts
function oo(e) {
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
function so(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function co(e) {
	if (e < 2) return !1;
	for (let t = 2; t * t <= e; t++) if (e % t === 0) return !1;
	return !0;
}
function lo(e, t) {
	return t === 0 ? e : lo(t, e % t);
}
function uo(e, t) {
	return e * t / lo(e, t);
}
var fo = {
	1: 20,
	2: 50,
	5: 50
}, po = {
	3: 50,
	4: 100,
	5: 100
};
function mo(e, t) {
	let n = [];
	for (let e = 2; e < t; e++) t % e === 0 && n.push(e);
	return n.length === 0 ? K(e, 2, t - 1) : n[K(e, 0, n.length - 1)];
}
function ho(e, t) {
	let n = K(e, 2, t - 1), r = 0;
	for (; t % n === 0 && r < 20;) n = K(e, 2, t - 1), r++;
	return n;
}
function go(e, t, n) {
	let r = K(n, 2, fo[e] ?? 50);
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
		correctOptionId: co(r) ? "yes" : "no",
		n: r
	};
}
function _o(e, t, n) {
	let r = K(n, 4, (po[e] ?? 100) - 1), i = n() < .5 ? mo(n, r) : ho(n, r);
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
function vo(e, t, n) {
	let r = K(n, 2, 12), i = K(n, 2, 12);
	for (; i === r;) i = K(n, 2, 12);
	return {
		id: `number-sense-primes-factors-${e}-${t}`,
		grade: e,
		kind: "common-multiple",
		prompt: `What is the smallest common multiple of ${r} and ${i}?`,
		numericAnswer: uo(r, i)
	};
}
function yo(e, t) {
	if (!so(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = oo(t);
	if (e === 1 || e === 2) return go(e, t, n);
	if (e === 3 || e === 4) return _o(e, t, n);
	switch (K(n, 0, 2)) {
		case 0: return go(e, t, n);
		case 1: return _o(e, t, n);
		default: return vo(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-primes-factors/src/plugin.ts
function bo(e, t, n, r, i) {
	return {
		competencyId: ao,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function xo(e, t) {
	let n = oo(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(yo(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var So = {
	id: "number-sense-primes-factors",
	competencyIds: [ao],
	generateQuestion(e, t) {
		return yo(e, t);
	},
	validateAnswer(e, t) {
		return e.kind === "common-multiple" ? { correct: t === e.numericAnswer } : { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
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
}, Co = "math.number-sense.roman-numerals";
//#endregion
//#region packages/number-sense-roman-numerals/src/rng.ts
function wo(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function To(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-roman-numerals/src/generate.ts
var Eo = [
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
function Do(e) {
	let t = e, n = "";
	for (let [e, r] of Eo) for (; t >= e;) n += r, t -= e;
	return n;
}
function Oo(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var ko = {
	1: [1, 10],
	2: [1, 50],
	3: [1, 100],
	4: [1, 500],
	5: [1, 1e3]
};
function Ao(e, t) {
	return e <= 3 || t() < .5 ? "read" : "write";
}
function jo(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = To(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Mo(e, t, n, r) {
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
function No(e, t, n) {
	let [r, i] = t, a = jo([e, ...Mo(e, r, i, 3)], n), o = a.map((e, t) => ({
		id: `opt-${t}`,
		label: String(e)
	})), s = a.indexOf(e);
	return {
		prompt: `Which number does the Roman numeral ${Do(e)} represent?`,
		options: o,
		correctOptionId: `opt-${s}`
	};
}
function Po(e, t, n) {
	let [r, i] = t, a = Mo(e, r, i, 3), o = jo([Do(e), ...a.map(Do)], n), s = o.map((e, t) => ({
		id: `opt-${t}`,
		label: e
	})), c = o.indexOf(Do(e));
	return {
		prompt: `Which Roman numeral represents ${e}?`,
		options: s,
		correctOptionId: `opt-${c}`
	};
}
function Fo(e, t) {
	if (!Oo(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = wo(t), r = ko[e], i = Ao(e, n), a = To(n, r[0], r[1]), { prompt: o, options: s, correctOptionId: c } = i === "read" ? No(a, r, n) : Po(a, r, n);
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
function Io(e, t, n, r, i) {
	return {
		competencyId: Co,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Lo(e, t) {
	let n = wo(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Fo(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ro = {
	id: "number-sense-roman-numerals",
	competencyIds: [Co],
	generateQuestion(e, t) {
		return Fo(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: e.prompt,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
};
//#endregion
//#region packages/number-sense-skip-counting/src/rng.ts
function zo(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Bo(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-skip-counting/src/generate.ts
function Vo(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ho() {
	return {
		step: 2,
		maxRange: 20
	};
}
function Uo() {
	return {
		step: 2,
		maxRange: 50
	};
}
function Wo() {
	return {
		step: 5,
		maxRange: 100
	};
}
function Go() {
	return {
		step: 10,
		maxRange: 200
	};
}
function Ko(e) {
	let t = [
		2,
		5,
		10,
		25,
		50
	];
	return {
		step: t[Bo(e, 0, t.length - 1)],
		maxRange: 500
	};
}
function qo(e, t) {
	if (!Vo(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = zo(t), { step: r, maxRange: i } = e === 1 ? Ho() : e === 2 ? Uo() : e === 3 ? Wo() : e === 4 ? Go() : Ko(n), a = Bo(n, 0, (i - r * 4) / r) * r, o = a, s = a + r, c = a + r * 2, l = a + r * 3;
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
var Jo = "math.number-sense.skip-counting";
function Yo(e, t, n, r, i) {
	return {
		competencyId: Jo,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Xo(e, t) {
	let n = zo(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(qo(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Zo = {
	id: "number-sense-skip-counting",
	competencyIds: [Jo],
	generateQuestion(e, t) {
		return qo(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "equation",
				equation: `${e.sequence[0]}, ${e.sequence[1]}, ${e.sequence[2]}`
			},
			correctAnswer: e.correctAnswer
		};
	}
};
//#endregion
//#region packages/number-sense-squares/src/rng.ts
function Qo(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function $o(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-squares/src/generate.ts
function es(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
var ts = [{
	id: "yes",
	label: "Yes"
}, {
	id: "no",
	label: "No"
}], ns = {
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
}, rs = {
	4: {
		baseMin: 1,
		baseMax: 8
	},
	5: {
		baseMin: 1,
		baseMax: 12
	}
};
function is(e) {
	return Number.isInteger(Math.sqrt(e));
}
function as(e, t, n) {
	let { baseMin: r, baseMax: i, numberMin: a, numberMax: o } = ns[e], s = n() < .5 ? (() => {
		let e = $o(n, r, i);
		return e * e;
	})() : $o(n, a, o), c = is(s) ? "yes" : "no";
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recognize",
		prompt: `Is ${s} a square number?`,
		options: ts,
		correctOptionId: c
	};
}
function os(e, t, n) {
	let { baseMin: r, baseMax: i } = rs[e], a = $o(n, r, i);
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recall",
		prompt: `What is ${a} squared?`,
		numericAnswer: a * a
	};
}
function ss(e, t) {
	if (!es(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Qo(t);
	switch (e) {
		case 1:
		case 2:
		case 3: return as(e, t, n);
		case 4:
		case 5: return os(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-squares/src/plugin.ts
var cs = "math.number-sense.squares";
function ls(e, t, n, r, i) {
	return {
		competencyId: cs,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function us(e, t) {
	let n = Qo(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ss(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ds = {
	id: "number-sense-squares",
	competencyIds: [cs],
	generateQuestion(e, t) {
		return ss(e, t);
	},
	validateAnswer(e, t) {
		switch (e.kind) {
			case "recall": return { correct: t === e.numericAnswer };
			case "recognize": return { correct: t === e.correctOptionId };
		}
	},
	toPresentation(e) {
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
};
//#endregion
//#region packages/place-value-multiply-divide-ten/src/rng.ts
function fs(e) {
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
function ps(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function ms(e) {
	return `${Math.floor(e / 10)}.${e % 10}`;
}
function hs(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 10`,
		correctAnswer: t * 10
	};
}
function gs(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 100`,
		correctAnswer: t * 100
	};
}
function _s(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 1000`,
		correctAnswer: t * 1e3
	};
}
function vs(e) {
	let t = e() < .5 ? 10 : 100, n = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${n * t} ÷ ${t}`,
		correctAnswer: n
	};
}
function ys(e) {
	let t = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 1e3} ÷ 1000`,
		correctAnswer: t
	};
}
function bs(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${ms(t)} × 10`,
		correctAnswer: t
	};
}
function xs(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${ms(t)} × 100`,
		correctAnswer: t * 10
	};
}
function Ss(e) {
	let t = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 10} ÷ 10`,
		correctAnswer: t
	};
}
var Cs = [
	ys,
	bs,
	xs,
	Ss
];
function ws(e) {
	let t = Cs[q(e, 0, Cs.length - 1)];
	return t(e);
}
function Ts(e, t) {
	if (!ps(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = fs(t), { operator: r, equation: i, correctAnswer: a } = e === 1 ? hs(n) : e === 2 ? gs(n) : e === 3 ? _s(n) : e === 4 ? vs(n) : ws(n);
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
var Es = "math.place-value.multiply-divide-ten";
function Ds(e, t, n, r, i) {
	return {
		competencyId: Es,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Os(e, t) {
	let n = fs(t), r = [];
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
	id: "place-value-multiply-divide-ten",
	competencyIds: [Es],
	generateQuestion(e, t) {
		return Ts(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "equation",
				equation: e.equation
			},
			correctAnswer: e.correctAnswer
		};
	}
};
//#endregion
//#region packages/place-value-powers-of-ten/src/rng.ts
function As(e) {
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
function js(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Ms = [
	1,
	10,
	100,
	1e3
];
function Ns(e) {
	return {
		operand: J(e, 1, 99),
		magnitude: 1
	};
}
function Ps(e) {
	return {
		operand: J(e, 10, 999),
		magnitude: 10
	};
}
function Fs(e) {
	return {
		operand: J(e, 100, 9999),
		magnitude: 100
	};
}
function Is(e) {
	return {
		operand: J(e, 1e3, 99999),
		magnitude: 1e3
	};
}
function Ls(e) {
	let t = Ms[J(e, 0, Ms.length - 1)];
	return {
		operand: J(e, t, 999999),
		magnitude: t
	};
}
function Rs(e, t) {
	if (!js(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = As(t), { operand: r, magnitude: i } = e === 1 ? Ns(n) : e === 2 ? Ps(n) : e === 3 ? Fs(n) : e === 4 ? Is(n) : Ls(n), a = n() < .5 ? "+" : "-", o = a === "+" ? r + i : r - i;
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
var zs = "math.place-value.powers-of-ten";
function Bs(e, t, n, r, i) {
	return {
		competencyId: zs,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Vs(e, t) {
	let n = As(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Rs(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Hs = {
	id: "place-value-powers-of-ten",
	competencyIds: [zs],
	generateQuestion(e, t) {
		return Rs(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctAnswer };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "equation",
				equation: e.equation
			},
			correctAnswer: e.correctAnswer
		};
	}
}, Us = "math.place-value.rounding";
//#endregion
//#region packages/place-value-rounding/src/rng.ts
function Ws(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Gs(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-rounding/src/generate.ts
function Ks(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function qs(e, t) {
	let n = e % t, r = e - n;
	return n * 2 >= t ? r + t : r;
}
function Js(e, t) {
	return e - e % t;
}
function Ys(e, t) {
	let n = e % t;
	return n === 0 ? e : e - n + t;
}
function Y(e, t) {
	let n = String(e).padStart(t + 1, "0");
	return `${n.slice(0, -t)}.${n.slice(-t)}`;
}
function Xs(e, t, n) {
	let r = /* @__PURE__ */ new Set([e]), i = [];
	for (let e of t) if (!r.has(e) && (r.add(e), i.push(e), i.length === 3)) return i;
	let a = 1;
	for (; i.length < 3;) {
		let e = n(a);
		a += 1, r.has(e) || (r.add(e), i.push(e));
	}
	return i;
}
function Zs(e, t, n, r, i, a) {
	let o = [{
		label: i,
		isCorrect: !0
	}, ...a.map((e) => ({
		label: e,
		isCorrect: !1
	}))];
	for (let e = o.length - 1; e > 0; e--) {
		let t = Gs(n, 0, e), r = o[e];
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
var Qs = {
	1: 999,
	2: 9999,
	3: 99999
}, $s = {
	1: 10,
	2: 100,
	3: 1e3
}, ec = {
	1: "10",
	2: "100",
	3: "1,000"
};
function tc(e, t, n) {
	let r = $s[e], i = Gs(n, 0, Qs[e]), a = qs(i, r), o = String(a), s = Xs(o, [
		Js(i, r),
		Ys(i, r),
		i,
		a - r,
		a + r,
		a - 2 * r,
		a + 2 * r
	].filter((e) => e >= 0).map(String), (e) => String(a + (e + 2) * r));
	return Zs(e, t, n, `Round ${i} to the nearest ${ec[e]}.`, o, s);
}
var nc = {
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
function rc(e, t, n) {
	let { maxScaled: r, sourceDecimalPlaces: i, targetDecimalPlaces: a, precisionLabel: o } = nc[e], s = Gs(n, 0, r), c = Y(s, i), l = qs(s, X) / X, u = Y(l, a), d = Js(s, X) / X, f = Ys(s, X) / X, p = Xs(u, [
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
	return Zs(e, t, n, `Round ${c} to ${o} decimal place${o === "1" ? "" : "s"}.`, u, p);
}
function ic(e, t) {
	if (!Ks(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ws(t);
	return e === 1 || e === 2 || e === 3 ? tc(e, t, n) : rc(e, t, n);
}
//#endregion
//#region packages/place-value-rounding/src/plugin.ts
function ac(e, t, n, r, i) {
	return {
		competencyId: Us,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function oc(e, t) {
	let n = Ws(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ic(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var sc = {
	id: "place-value-rounding",
	competencyIds: [Us],
	generateQuestion(e, t) {
		return ic(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: e.prompt,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
}, cc = "math.place-value.understanding";
//#endregion
//#region packages/place-value-understanding/src/rng.ts
function lc(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function uc(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-understanding/src/generate.ts
function dc(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var fc = {
	name: "units",
	value: 1,
	decimals: 0
}, pc = {
	name: "tens",
	value: 10,
	decimals: 0
}, mc = {
	name: "hundreds",
	value: 100,
	decimals: 0
}, hc = {
	name: "thousands",
	value: 1e3,
	decimals: 0
}, gc = {
	name: "ten-thousands",
	value: 1e4,
	decimals: 0
}, _c = {
	name: "hundred-thousands",
	value: 1e5,
	decimals: 0
}, vc = {
	name: "millions",
	value: 1e6,
	decimals: 0
}, yc = {
	name: "ones",
	value: 1,
	decimals: 0
}, bc = {
	name: "tenths",
	value: .1,
	decimals: 1
}, xc = {
	name: "hundredths",
	value: .01,
	decimals: 2
}, Sc = {
	name: "thousandths",
	value: .001,
	decimals: 3
}, Z = {
	1: [fc, pc],
	2: [
		fc,
		pc,
		mc
	],
	3: [
		fc,
		pc,
		mc,
		hc
	],
	4: [
		fc,
		pc,
		mc,
		hc,
		gc,
		_c,
		vc
	]
}, Cc = [
	Sc,
	xc,
	bc,
	yc
], wc = [
	Sc,
	xc,
	bc
], Tc = {
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
		composePlaces: Cc,
		scopePlaces: wc,
		isDecimal: !0
	}
};
function Ec(e, t) {
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
		let r = uc(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n.slice(0, t);
}
function Q(e, t) {
	return t.decimals === 0 ? String(e * t.value) : `0.${"0".repeat(t.decimals - 1)}${e}`;
}
function Dc(e, t) {
	if (!e.isDecimal) {
		let n = t.reduce((t, n, r) => t + n * e.composePlaces[r].value, 0);
		return String(n);
	}
	let [n, r, i, a] = t;
	return `${a}.${i}${r}${n}`;
}
function Oc(e) {
	return e.length === 1 ? e[0] : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
function kc(e, t, n) {
	let r = t.map((e, t) => ({
		label: e,
		isCorrect: t === n
	}));
	for (let t = r.length - 1; t > 0; t--) {
		let n = uc(e, 0, t), i = r[t];
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
function Ac(e, t, n, r) {
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
function jc(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set([n]), a = t.length;
	function o(t) {
		if (r.length >= 3) return;
		let n = Dc(e, t);
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
function Mc(e, t, n, r) {
	let i = Ec(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = Dc(r, i), s = uc(n, 0, r.scopePlaces.length - 1), c = r.scopePlaces[s], l = Q(a.get(c.name), c), { options: u, correctOptionId: d } = kc(n, [l, ...Ac(r.scopePlaces, s, a, l)], 0);
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
function Nc(e, t, n, r) {
	let i = Ec(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = Dc(r, i), { options: s, correctOptionId: c } = kc(n, [o, ...jc(r, i, o)], 0), l = [...r.composePlaces].reverse(), u = [...i].reverse(), d = l.map((e, t) => `${u[t]} ${e.name}`), f = `Which number ${r.isDecimal ? "is" : "has"} ${Oc(d)}?`;
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
function Pc(e, t) {
	if (!dc(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = lc(t), r = n() < .5 ? "digit-value" : "compose", i = Tc[e];
	return r === "digit-value" ? Mc(e, t, n, i) : Nc(e, t, n, i);
}
function Fc(e, t) {
	return Pc(e, t).question;
}
//#endregion
//#region packages/place-value-understanding/src/plugin.ts
function Ic(e, t, n, r, i) {
	return {
		competencyId: cc,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Lc(e, t) {
	let n = lc(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Fc(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Rc = {
	id: "place-value-understanding",
	competencyIds: [cc],
	generateQuestion(e, t) {
		return Fc(e, t);
	},
	validateAnswer(e, t) {
		return { correct: t === e.correctOptionId };
	},
	toPresentation(e) {
		return {
			presentation: {
				kind: "choice",
				prompt: e.prompt,
				options: e.options
			},
			correctAnswer: e.correctOptionId
		};
	}
};
//#endregion
//#region node_modules/@learncoreskills/plugin-engine/dist/src/registry.js
function zc(e, t) {
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
function Bc(e) {
	switch (e.kind) {
		case "duplicate-plugin-id": return `duplicate plugin id: "${e.id}"`;
		case "unknown-competency-reference": return `plugin "${e.pluginId}" references unknown competency id: "${e.competencyId}"`;
	}
}
function Vc(e, t) {
	let n = zc(e, t);
	if (!n.valid) {
		let e = n.errors.map(Bc).join("; ");
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
var Hc = Vc([
	Ai,
	la,
	Xi,
	Bi,
	Lr,
	xr,
	Yr,
	dr,
	_i,
	si,
	ba,
	Zo,
	Ua,
	io,
	Aa,
	So,
	ds,
	Ro,
	Rc,
	Hs,
	sc,
	ks,
	...We,
	...Lt,
	...Ln
], [
	x,
	zn,
	Bn,
	Vn,
	S,
	Hn,
	C,
	w,
	T,
	E,
	D,
	O,
	k,
	Un,
	Wn,
	Gn,
	Kn,
	qn,
	A,
	j,
	M,
	N,
	P,
	F,
	I,
	L,
	...ie,
	...mt,
	...dn
]);
//#endregion
//#region src/exerciseDefinitions.ts
function $(e, t) {
	let n = Hc.getPlugin(e);
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
var Uc = {
	key: "addition",
	label: "Addition",
	icon: "➕",
	pluginId: "mental-addition",
	competency: x,
	competencies: [x],
	createSession(e, t) {
		return $("mental-addition", ki(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Oi(e, t, n, r, i)
}, Wc = {
	key: "subtraction",
	label: "Subtraction",
	icon: "➖",
	pluginId: "mental-subtraction",
	competency: zn,
	competencies: [zn],
	createSession(e, t) {
		return $("mental-subtraction", ca(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => sa(e, t, n, r, i)
}, Gc = {
	key: "multiplication",
	label: "Multiplication",
	icon: "✖️",
	pluginId: "mental-multiplication",
	competency: Bn,
	competencies: [Bn],
	createSession(e, t) {
		return $("mental-multiplication", Yi(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Ji(e, t, n, r, i)
}, Kc = {
	key: "division",
	label: "Division",
	icon: "➗",
	pluginId: "mental-division",
	competency: Vn,
	competencies: [Vn],
	createSession(e, t) {
		return $("mental-division", zi(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Ri(e, t, n, r, i)
}, qc = {
	key: "baseline-counting-quantities",
	label: "Counting & Quantities",
	icon: "🔢",
	pluginId: "baseline-counting-quantities",
	competency: S,
	competencies: [
		S,
		Hn,
		C,
		w
	],
	competencyLabels: {
		[S.id]: "Counting to 20",
		[Hn.id]: "Subitizing to 5",
		[C.id]: "Recognising digits",
		[w.id]: "Comparing groups"
	},
	createSession(e, t) {
		return $("baseline-counting-quantities", Ir(e, t));
	},
	createMasterySignal: (e, t, n, r) => Fr(e, t, n, r)
}, Jc = {
	key: "baseline-concrete-addition-subtraction",
	label: "Concrete Addition & Subtraction",
	icon: "🍎",
	pluginId: "baseline-concrete-addition-subtraction",
	competency: T,
	competencies: [T],
	createSession(e, t) {
		return $("baseline-concrete-addition-subtraction", br(e, t));
	},
	createMasterySignal: (e, t, n, r) => yr(e, t, n, r)
}, Yc = {
	key: "baseline-direct-comparison",
	label: "Direct Comparison",
	icon: "⚖️",
	pluginId: "baseline-direct-comparison",
	competency: E,
	competencies: [E],
	createSession(e, t) {
		return $("baseline-direct-comparison", Jr(e, t));
	},
	createMasterySignal: (e, t, n, r) => qr(e, t, n, r)
}, Xc = {
	key: "baseline-calendar-time-basics",
	label: "Calendar & Time Basics",
	icon: "📅",
	pluginId: "baseline-calendar-time-basics",
	competency: D,
	competencies: [D, O],
	competencyLabels: {
		[D.id]: "Order of the day",
		[O.id]: "Days of the week"
	},
	createSession(e, t) {
		return $("baseline-calendar-time-basics", ur(e, t));
	},
	createMasterySignal: (e, t, n, r) => lr(e, t, n, r)
}, Zc = {
	key: "baseline-shape-recognition",
	label: "Shape Recognition",
	icon: "🔺",
	pluginId: "baseline-shape-recognition",
	competency: k,
	competencies: [k],
	createSession(e, t) {
		return $("baseline-shape-recognition", gi(e, t));
	},
	createMasterySignal: (e, t, n, r) => hi(e, t, n, r)
}, Qc = {
	key: "baseline-positional-language",
	label: "Positional Language",
	icon: "📍",
	pluginId: "baseline-positional-language",
	competency: Un,
	competencies: [Un],
	createSession(e, t) {
		return $("baseline-positional-language", oi(e, t));
	},
	createMasterySignal: (e, t, n, r) => ai(e, t, n, r)
}, $c = {
	key: "number-sense-counting-range",
	label: "Counting & Number Range",
	icon: "🔢",
	pluginId: "number-sense-counting-range",
	competency: Wn,
	competencies: [Wn],
	createSession(e, t) {
		return $("number-sense-counting-range", ya(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => va(e, t, n, r, i)
}, el = {
	key: "number-sense-skip-counting",
	label: "Skip Counting",
	icon: "➡️",
	pluginId: "number-sense-skip-counting",
	competency: Gn,
	competencies: [Gn],
	createSession(e, t) {
		return $("number-sense-skip-counting", Xo(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Yo(e, t, n, r, i)
}, tl = {
	key: "number-sense-odd-even",
	label: "Odd & Even",
	icon: "🔀",
	pluginId: "number-sense-odd-even",
	competency: Kn,
	competencies: [Kn],
	createSession(e, t) {
		return $("number-sense-odd-even", Ha(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Va(e, t, n, r, i)
}, nl = {
	key: "number-sense-ordinals",
	label: "Ordinal Numbers",
	icon: "🥇",
	pluginId: "number-sense-ordinals",
	competency: qn,
	competencies: [qn],
	createSession(e, t) {
		return $("number-sense-ordinals", ro(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => no(e, t, n, r, i)
}, rl = {
	key: "number-sense-negative-numbers",
	label: "Negative Numbers",
	icon: "🌡️",
	pluginId: "number-sense-negative-numbers",
	competency: A,
	competencies: [A],
	createSession(e, t) {
		return $("number-sense-negative-numbers", ka(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Oa(e, t, n, r, i)
}, il = {
	key: "number-sense-primes-factors",
	label: "Primes & Factors",
	icon: "🧮",
	pluginId: "number-sense-primes-factors",
	competency: j,
	competencies: [j],
	createSession(e, t) {
		return $("number-sense-primes-factors", xo(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => bo(e, t, n, r, i)
}, al = {
	key: "number-sense-squares",
	label: "Square Numbers",
	icon: "⬜",
	pluginId: "number-sense-squares",
	competency: M,
	competencies: [M],
	createSession(e, t) {
		return $("number-sense-squares", us(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => ls(e, t, n, r, i)
}, ol = {
	key: "number-sense-roman-numerals",
	label: "Roman Numerals",
	icon: "🏛️",
	pluginId: "number-sense-roman-numerals",
	competency: N,
	competencies: [N],
	createSession(e, t) {
		return $("number-sense-roman-numerals", Lo(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Io(e, t, n, r, i)
}, sl = {
	key: "place-value-understanding",
	label: "Place Value Understanding",
	icon: "🔟",
	pluginId: "place-value-understanding",
	competency: P,
	competencies: [P],
	createSession(e, t) {
		return $("place-value-understanding", Lc(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Ic(e, t, n, r, i)
}, cl = {
	key: "place-value-powers-of-ten",
	label: "Add/Subtract Powers of Ten",
	icon: "➕",
	pluginId: "place-value-powers-of-ten",
	competency: F,
	competencies: [F],
	createSession(e, t) {
		return $("place-value-powers-of-ten", Vs(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Bs(e, t, n, r, i)
}, ll = {
	key: "place-value-rounding",
	label: "Rounding",
	icon: "🔵",
	pluginId: "place-value-rounding",
	competency: I,
	competencies: [I],
	createSession(e, t) {
		return $("place-value-rounding", oc(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => ac(e, t, n, r, i)
}, ul = {
	key: "place-value-multiply-divide-ten",
	label: "Multiply/Divide by Powers of Ten",
	icon: "✖️",
	pluginId: "place-value-multiply-divide-ten",
	competency: L,
	competencies: [L],
	createSession(e, t) {
		return $("place-value-multiply-divide-ten", Os(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Ds(e, t, n, r, i)
}, dl = Ge.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a) => e.createMasterySignal(t, n, r, i, a)
})), fl = Rt.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a) => e.createMasterySignal(t, n, r, i, a)
})), pl = Rn.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a) => e.createMasterySignal(t, n, r, i, a)
})), ml = [
	Uc,
	Wc,
	Gc,
	Kc,
	qc,
	Jc,
	Yc,
	Xc,
	Zc,
	Qc,
	$c,
	el,
	tl,
	nl,
	rl,
	il,
	al,
	ol,
	sl,
	cl,
	ll,
	ul,
	...dl,
	...fl,
	...pl
], hl = {
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
}, gl = !1;
function _l() {
	gl ||= !0;
}
var vl = () => ({
	subjectId: "math",
	competencies: Jn,
	plugins: Hc.all(),
	exercises: ml,
	mathematicsAreas: Xn,
	getMathematicsAreaForCompetency: Zn,
	skillsReference: hl,
	register: _l
});
//#endregion
export { Jn as allCompetencies, w as baselineCompareGroupsCompetency, T as baselineConcreteArithmeticCompetency, S as baselineCountingCompetency, D as baselineDayOrderCompetency, O as baselineDaysOfWeekCompetency, C as baselineDigitsCompetency, E as baselineDirectComparisonCompetency, Un as baselinePositionCompetency, k as baselineShapesCompetency, Hn as baselineSubitizingCompetency, vl as default, Zn as getMathematicsAreaForCompetency, ml as mathExercises, Hc as mathPluginRegistry, Xn as mathematicsAreas, x as mentalAdditionCompetency, Vn as mentalDivisionCompetency, Bn as mentalMultiplicationCompetency, zn as mentalSubtractionCompetency, Wn as numberSenseCountingRangeCompetency, A as numberSenseNegativeNumbersCompetency, Kn as numberSenseOddEvenCompetency, qn as numberSenseOrdinalsCompetency, j as numberSensePrimesFactorsCompetency, N as numberSenseRomanNumeralsCompetency, Gn as numberSenseSkipCountingCompetency, M as numberSenseSquaresCompetency, L as placeValueMultiplyDivideTenCompetency, F as placeValuePowersOfTenCompetency, I as placeValueRoundingCompetency, P as placeValueUnderstandingCompetency, hl as skillsReference };
