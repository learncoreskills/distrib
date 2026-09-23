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
function de(e) {
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
function fe(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function pe(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
function me(e, t) {
	let n = t.slice();
	for (let t = n.length - 1; t > 0; t--) {
		let r = pe(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n;
}
//#endregion
//#region packages/template-multiple-choice/src/factory.ts
function he(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function ge(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function _e(e) {
	return Array.from({ length: e }, (e, t) => String.fromCharCode(97 + t));
}
function ve(e, t) {
	return e.map((e, n) => ({
		id: t[n],
		label: e
	}));
}
function ye(e, t, n) {
	if (!he(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = ge(e.bank, t), i = fe(n), a = r[pe(i, 0, r.length - 1)], o = _e(a.en.options.length), s = me(i, o), c = s.map((e) => a.en.options[o.indexOf(e)]), l = s.map((e) => a.fr.options[o.indexOf(e)]), u = o[a.en.correctIndex];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: {
			prompt: a.en.prompt,
			options: ve(c, s)
		},
		fr: {
			prompt: a.fr.prompt,
			options: ve(l, s)
		},
		correctOptionId: u
	};
}
function m(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return ye(e, t, n);
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
		let r = fe(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(ye(e, t, n));
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
function be(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function xe(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/template-numeric-answer/src/factory.ts
function Se(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ce(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function we(e, t, n) {
	if (!Se(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Ce(e.bank, t), i = r[xe(be(n), 0, r.length - 1)];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { prompt: i.en.prompt },
		fr: { prompt: i.fr.prompt },
		correctValue: i.correctValue
	};
}
function h(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return we(e, t, n);
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
		let r = be(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(we(e, t, n));
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
function Te(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ee(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/template-true-false/src/factory.ts
function De(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Oe(e, t) {
	let n = e.filter((e) => e.grade === t);
	if (n.length === 0) throw Error(`no content bank entries for grade: ${t}`);
	return n;
}
function ke(e, t, n) {
	if (!De(t)) throw Error(`invalid grade: ${t} (must be an integer in 1..5)`);
	let r = Oe(e.bank, t), i = r[Ee(Te(n), 0, r.length - 1)];
	return {
		id: `${e.pluginId}-${t}-${n}`,
		grade: t,
		en: { statement: i.en.statement },
		fr: { statement: i.fr.statement },
		isTrue: i.en.isTrue
	};
}
function Ae(e) {
	let t = {
		id: e.pluginId,
		competencyIds: [e.competencyId],
		generateQuestion(t, n) {
			return ke(e, t, n);
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
		let r = Te(n), i = [];
		for (let n = 0; n < 10; n++) {
			let n = Math.floor(r() * 4294967295);
			i.push(ke(e, t, n));
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
var je = h({
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
}), Me = h({
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
}), Ne = h({
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
}), Pe = m({
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
}), Fe = h({
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
}), Ie = m({
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
}), Le = m({
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
}), Re = de({
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
}), ze = m({
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
}), Be = Ae({
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
}), Ve = m({
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
}), He = m({
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
}), Ue = h({
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
}), We = de({
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
}), Ge = m({
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
}), Ke = [
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
	Ue.plugin,
	We.plugin,
	Ge.plugin
];
function g(e) {
	return e;
}
var qe = [
	g({
		key: "syllabus-g1-reads-writes-to-100",
		label: "Reading & Writing Numbers to 100",
		icon: "🔢",
		pluginId: je.plugin.id,
		competency: r,
		competencies: [r],
		createSession: je.createSession,
		createMasterySignal: je.createMasterySignal
	}),
	g({
		key: "syllabus-g1-number-bonds-within-10",
		label: "Number Bonds to 10",
		icon: "🔗",
		pluginId: Me.plugin.id,
		competency: i,
		competencies: [i],
		createSession: Me.createSession,
		createMasterySignal: Me.createMasterySignal
	}),
	g({
		key: "syllabus-g1-add-subtract-within-20",
		label: "Add & Subtract within 20",
		icon: "🧮",
		pluginId: Ne.plugin.id,
		competency: a,
		competencies: [a],
		createSession: Ne.createSession,
		createMasterySignal: Ne.createMasterySignal
	}),
	g({
		key: "syllabus-g1-half-and-quarter",
		label: "Halves & Quarters",
		icon: "🍕",
		pluginId: Pe.plugin.id,
		competency: o,
		competencies: [o],
		createSession: Pe.createSession,
		createMasterySignal: Pe.createMasterySignal
	}),
	g({
		key: "syllabus-g1-length-in-cm",
		label: "Measuring Length in cm",
		icon: "📏",
		pluginId: Fe.plugin.id,
		competency: s,
		competencies: [s],
		createSession: Fe.createSession,
		createMasterySignal: Fe.createMasterySignal
	}),
	g({
		key: "syllabus-g1-measurement-vocabulary",
		label: "Measurement Vocabulary",
		icon: "⚖️",
		pluginId: Ie.plugin.id,
		competency: c,
		competencies: [c],
		createSession: Ie.createSession,
		createMasterySignal: Ie.createMasterySignal
	}),
	g({
		key: "syllabus-g1-time-hour-half-hour",
		label: "Telling Time: Hour & Half-Hour",
		icon: "🕐",
		pluginId: Le.plugin.id,
		competency: l,
		competencies: [l],
		createSession: Le.createSession,
		createMasterySignal: Le.createMasterySignal
	}),
	g({
		key: "syllabus-g1-months-and-seasons",
		label: "Months & Seasons",
		icon: "📅",
		pluginId: Re.plugin.id,
		competency: u,
		competencies: [u],
		createSession: Re.createSession,
		createMasterySignal: Re.createMasterySignal
	}),
	g({
		key: "syllabus-g1-names-2d-3d-shapes",
		label: "Naming 2D & 3D Shapes",
		icon: "🔺",
		pluginId: ze.plugin.id,
		competency: d,
		competencies: [d],
		createSession: ze.createSession,
		createMasterySignal: ze.createMasterySignal
	}),
	g({
		key: "syllabus-g1-shape-orientation-invariance",
		label: "Shapes in Any Orientation",
		icon: "🔄",
		pluginId: Be.plugin.id,
		competency: f,
		competencies: [f],
		createSession: Be.createSession,
		createMasterySignal: Be.createMasterySignal
	}),
	g({
		key: "syllabus-g1-describes-route",
		label: "Describing a Route",
		icon: "🧭",
		pluginId: Ve.plugin.id,
		competency: p,
		competencies: [p],
		createSession: Ve.createSession,
		createMasterySignal: Ve.createMasterySignal
	}),
	g({
		key: "syllabus-g1-sorts-objects-by-criterion",
		label: "Sorting by a Rule",
		icon: "🗂️",
		pluginId: He.plugin.id,
		competency: ee,
		competencies: [ee],
		createSession: He.createSession,
		createMasterySignal: He.createMasterySignal
	}),
	g({
		key: "syllabus-g1-reads-simple-pictogram",
		label: "Reading a Pictogram",
		icon: "📊",
		pluginId: Ue.plugin.id,
		competency: te,
		competencies: [te],
		createSession: Ue.createSession,
		createMasterySignal: Ue.createMasterySignal
	}),
	g({
		key: "syllabus-g1-continues-repeating-pattern",
		label: "Continuing a Pattern",
		icon: "🔁",
		pluginId: We.plugin.id,
		competency: ne,
		competencies: [ne],
		createSession: We.createSession,
		createMasterySignal: We.createMasterySignal
	}),
	g({
		key: "syllabus-g1-choose-addition-or-subtraction",
		label: "Addition or Subtraction?",
		icon: "❓",
		pluginId: Ge.plugin.id,
		competency: re,
		competencies: [re],
		createSession: Ge.createSession,
		createMasterySignal: Ge.createMasterySignal
	})
], Je = {
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
}, Ye = {
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
}, Xe = {
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
}, Ze = {
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
}, Qe = {
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
}, $e = {
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
}, et = {
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
}, tt = {
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
}, nt = {
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
}, rt = {
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
}, it = {
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
}, at = {
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
}, ot = {
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
}, st = {
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
}, ct = {
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
}, lt = {
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
}, ut = {
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
}, dt = {
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
}, ft = {
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
}, pt = {
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
}, mt = {
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
}, ht = {
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
}, gt = [
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
	pt,
	mt,
	ht
], _t = h({
	pluginId: "syllabus-g2-counts-reads-writes-to-1000",
	competencyId: Je.id,
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
}), vt = m({
	pluginId: "syllabus-g2-orders-numbers-to-1000",
	competencyId: Ye.id,
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
}), yt = h({
	pluginId: "syllabus-g2-partitions-three-digit-numbers",
	competencyId: Xe.id,
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
}), bt = h({
	pluginId: "syllabus-g2-digit-value-in-three-digit-number",
	competencyId: Ze.id,
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
}), xt = h({
	pluginId: "syllabus-g2-number-bonds-within-20",
	competencyId: Qe.id,
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
}), St = h({
	pluginId: "syllabus-g2-add-subtract-two-digit-with-regrouping",
	competencyId: $e.id,
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
}), Ct = Ae({
	pluginId: "syllabus-g2-addition-commutative-subtraction-not",
	competencyId: et.id,
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
}), wt = h({
	pluginId: "syllabus-g2-times-tables-2-5-10",
	competencyId: tt.id,
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
}), Tt = h({
	pluginId: "syllabus-g2-division-sharing-grouping-remainders",
	competencyId: nt.id,
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
}), Et = h({
	pluginId: "syllabus-g2-add-subtract-one-digit-to-two-digit",
	competencyId: rt.id,
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
}), Dt = h({
	pluginId: "syllabus-g2-doubles-halves-to-50",
	competencyId: it.id,
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
}), Ot = m({
	pluginId: "syllabus-g2-thirds-quarters-fifths",
	competencyId: at.id,
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
}), kt = h({
	pluginId: "syllabus-g2-mass-and-capacity",
	competencyId: ot.id,
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
}), At = m({
	pluginId: "syllabus-g2-metric-units-relationships",
	competencyId: st.id,
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
}), jt = m({
	pluginId: "syllabus-g2-time-five-minutes-quarter-hour",
	competencyId: ct.id,
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
}), Mt = h({
	pluginId: "syllabus-g2-days-weeks-months-counts",
	competencyId: lt.id,
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
}), Nt = h({
	pluginId: "syllabus-g2-counts-shape-properties",
	competencyId: ut.id,
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
}), Pt = Ae({
	pluginId: "syllabus-g2-recognises-line-of-symmetry",
	competencyId: dt.id,
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
}), Ft = de({
	pluginId: "syllabus-g2-describes-grid-position",
	competencyId: ft.id,
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
}), It = h({
	pluginId: "syllabus-g2-tally-chart-bar-chart",
	competencyId: pt.id,
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
}), Lt = h({
	pluginId: "syllabus-g2-finds-missing-number-in-equation",
	competencyId: mt.id,
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
}), Rt = m({
	pluginId: "syllabus-g2-solves-one-step-word-problem",
	competencyId: ht.id,
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
}), zt = [
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
	It.plugin,
	Lt.plugin,
	Rt.plugin
];
function _(e) {
	return e;
}
var Bt = [
	_({
		key: "syllabus-g2-counts-reads-writes-to-1000",
		label: "Counting to 1,000",
		icon: "🔢",
		pluginId: _t.plugin.id,
		competency: Je,
		competencies: [Je],
		createSession: _t.createSession,
		createMasterySignal: _t.createMasterySignal
	}),
	_({
		key: "syllabus-g2-orders-numbers-to-1000",
		label: "Ordering Numbers to 1,000",
		icon: "📈",
		pluginId: vt.plugin.id,
		competency: Ye,
		competencies: [Ye],
		createSession: vt.createSession,
		createMasterySignal: vt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-partitions-three-digit-numbers",
		label: "Partitioning 3-Digit Numbers",
		icon: "🧩",
		pluginId: yt.plugin.id,
		competency: Xe,
		competencies: [Xe],
		createSession: yt.createSession,
		createMasterySignal: yt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-digit-value-in-three-digit-number",
		label: "Digit Value in a 3-Digit Number",
		icon: "🔠",
		pluginId: bt.plugin.id,
		competency: Ze,
		competencies: [Ze],
		createSession: bt.createSession,
		createMasterySignal: bt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-number-bonds-within-20",
		label: "Number Bonds to 20",
		icon: "🔗",
		pluginId: xt.plugin.id,
		competency: Qe,
		competencies: [Qe],
		createSession: xt.createSession,
		createMasterySignal: xt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-add-subtract-two-digit-with-regrouping",
		label: "Add & Subtract with Regrouping",
		icon: "🧮",
		pluginId: St.plugin.id,
		competency: $e,
		competencies: [$e],
		createSession: St.createSession,
		createMasterySignal: St.createMasterySignal
	}),
	_({
		key: "syllabus-g2-addition-commutative-subtraction-not",
		label: "Addition & Subtraction: Order Matters?",
		icon: "🔄",
		pluginId: Ct.plugin.id,
		competency: et,
		competencies: [et],
		createSession: Ct.createSession,
		createMasterySignal: Ct.createMasterySignal
	}),
	_({
		key: "syllabus-g2-times-tables-2-5-10",
		label: "2, 5 & 10 Times Tables",
		icon: "✖️",
		pluginId: wt.plugin.id,
		competency: tt,
		competencies: [tt],
		createSession: wt.createSession,
		createMasterySignal: wt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-division-sharing-grouping-remainders",
		label: "Division: Sharing & Remainders",
		icon: "➗",
		pluginId: Tt.plugin.id,
		competency: nt,
		competencies: [nt],
		createSession: Tt.createSession,
		createMasterySignal: Tt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-add-subtract-one-digit-to-two-digit",
		label: "Mental Add & Subtract to 2-Digit",
		icon: "🧠",
		pluginId: Et.plugin.id,
		competency: rt,
		competencies: [rt],
		createSession: Et.createSession,
		createMasterySignal: Et.createMasterySignal
	}),
	_({
		key: "syllabus-g2-doubles-halves-to-50",
		label: "Doubles & Halves to 50",
		icon: "🪞",
		pluginId: Dt.plugin.id,
		competency: it,
		competencies: [it],
		createSession: Dt.createSession,
		createMasterySignal: Dt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-thirds-quarters-fifths",
		label: "Thirds, Quarters & Fifths",
		icon: "🍰",
		pluginId: Ot.plugin.id,
		competency: at,
		competencies: [at],
		createSession: Ot.createSession,
		createMasterySignal: Ot.createMasterySignal
	}),
	_({
		key: "syllabus-g2-mass-and-capacity",
		label: "Measuring Mass & Capacity",
		icon: "⚖️",
		pluginId: kt.plugin.id,
		competency: ot,
		competencies: [ot],
		createSession: kt.createSession,
		createMasterySignal: kt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-metric-units-relationships",
		label: "Metric Units & Relationships",
		icon: "📏",
		pluginId: At.plugin.id,
		competency: st,
		competencies: [st],
		createSession: At.createSession,
		createMasterySignal: At.createMasterySignal
	}),
	_({
		key: "syllabus-g2-time-five-minutes-quarter-hour",
		label: "Telling Time: 5 Minutes & Quarter Hour",
		icon: "🕐",
		pluginId: jt.plugin.id,
		competency: ct,
		competencies: [ct],
		createSession: jt.createSession,
		createMasterySignal: jt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-days-weeks-months-counts",
		label: "Days, Weeks & Months",
		icon: "📅",
		pluginId: Mt.plugin.id,
		competency: lt,
		competencies: [lt],
		createSession: Mt.createSession,
		createMasterySignal: Mt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-counts-shape-properties",
		label: "Counting Shape Properties",
		icon: "🔺",
		pluginId: Nt.plugin.id,
		competency: ut,
		competencies: [ut],
		createSession: Nt.createSession,
		createMasterySignal: Nt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-recognises-line-of-symmetry",
		label: "Lines of Symmetry",
		icon: "🦋",
		pluginId: Pt.plugin.id,
		competency: dt,
		competencies: [dt],
		createSession: Pt.createSession,
		createMasterySignal: Pt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-describes-grid-position",
		label: "Grid Positions",
		icon: "🗺️",
		pluginId: Ft.plugin.id,
		competency: ft,
		competencies: [ft],
		createSession: Ft.createSession,
		createMasterySignal: Ft.createMasterySignal
	}),
	_({
		key: "syllabus-g2-tally-chart-bar-chart",
		label: "Tally Charts & Bar Charts",
		icon: "📊",
		pluginId: It.plugin.id,
		competency: pt,
		competencies: [pt],
		createSession: It.createSession,
		createMasterySignal: It.createMasterySignal
	}),
	_({
		key: "syllabus-g2-finds-missing-number-in-equation",
		label: "Finding the Missing Number",
		icon: "❓",
		pluginId: Lt.plugin.id,
		competency: mt,
		competencies: [mt],
		createSession: Lt.createSession,
		createMasterySignal: Lt.createMasterySignal
	}),
	_({
		key: "syllabus-g2-solves-one-step-word-problem",
		label: "One-Step Word Problems",
		icon: "📝",
		pluginId: Rt.plugin.id,
		competency: ht,
		competencies: [ht],
		createSession: Rt.createSession,
		createMasterySignal: Rt.createMasterySignal
	})
], v = {
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
}, y = {
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
}, b = {
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
}, x = {
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
}, C = {
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
}, w = {
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
}, T = {
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
}, E = {
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
}, D = {
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
}, O = {
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
}, Vt = {
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
}, Ht = {
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
}, Ut = {
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
}, Wt = {
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
}, Gt = {
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
}, Kt = {
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
}, k = {
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
}, qt = [
	v,
	y,
	b,
	x,
	S,
	C,
	w,
	T,
	E,
	D,
	O,
	Vt,
	Ht,
	Ut,
	Wt,
	Gt,
	Kt,
	k,
	A,
	j,
	M,
	N,
	P,
	F,
	I,
	L,
	...ie,
	...gt
], Jt = n([{
	id: "mathematics",
	nameKey: "subject.mathematics.name"
}], qt, qt.map((e) => e.id));
if (!Jt.valid) throw Error(`curriculum.ts: invalid competency model: ${JSON.stringify(Jt.errors)}`);
var Yt = [
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
function Xt(e) {
	let [t, n] = e.id.split(".");
	if (t === "math") return Yt.some((e) => e.areaKey === n) ? n : void 0;
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/types.ts
var Zt = "math.time.baseline-day-order", Qt = "math.time.baseline-days-of-week";
//#endregion
//#region packages/baseline-calendar-time-basics/src/rng.ts
function $t(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function en(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/generate.ts
var tn = [
	"morning",
	"afternoon",
	"evening",
	"night"
], nn = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
function rn(e) {
	return e === "P" || e === 1;
}
function an(e, t) {
	let n = en(e, 0, t - 1), r = en(e, 0, t - 1);
	for (; r === n;) r = en(e, 0, t - 1);
	return [n, r];
}
function on(e, t, n) {
	let [r, i] = an(n, tn.length), a = Math.min(r, i), o = {
		id: "a",
		label: tn[r]
	}, s = {
		id: "b",
		label: tn[i]
	};
	return {
		id: `baseline-calendar-time-basics-day-order-${e}-${t}`,
		kind: "day-order",
		grade: e,
		competencyId: Zt,
		prompt: "Which comes first in the day?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function sn(e, t, n) {
	let [r, i] = an(n, nn.length), a = Math.min(r, i), o = {
		id: "a",
		label: nn[r]
	}, s = {
		id: "b",
		label: nn[i]
	};
	return {
		id: `baseline-calendar-time-basics-days-of-week-${e}-${t}`,
		kind: "days-of-week",
		grade: e,
		competencyId: Qt,
		prompt: "Which comes first in the week?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function cn(e, t) {
	if (!rn(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = $t(t);
	return n() < .5 ? on(e, t, n) : sn(e, t, n);
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/plugin.ts
function ln(e, t, n, r, i) {
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
function un(e, t) {
	let n = $t(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(cn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var dn = {
	id: "baseline-calendar-time-basics",
	competencyIds: [Zt, Qt],
	generateQuestion(e, t) {
		return cn(e, t);
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
}, fn = "math.addition.baseline-concrete";
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/rng.ts
function pn(e) {
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
var mn = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function hn(e) {
	return e === "P" || e === 1;
}
function gn(e, t, n) {
	let r = R(n, 1, 5), i = R(n, 1, 5);
	return {
		id: `baseline-concrete-addition-subtraction-add-${e}-${t}`,
		grade: e,
		operator: "+",
		leftCount: r,
		rightCount: i,
		emoji: mn[R(n, 0, mn.length - 1)],
		correctAnswer: r + i
	};
}
function _n(e, t, n) {
	let r = R(n, 2, 10), i = R(n, 1, r - 1);
	return {
		id: `baseline-concrete-addition-subtraction-sub-${e}-${t}`,
		grade: e,
		operator: "-",
		leftCount: r,
		rightCount: i,
		emoji: mn[R(n, 0, mn.length - 1)],
		correctAnswer: r - i
	};
}
function vn(e, t) {
	if (!hn(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = pn(t);
	return n() < .5 ? gn(e, t, n) : _n(e, t, n);
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/plugin.ts
function yn(e, t, n, r, i) {
	return {
		competencyId: fn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function bn(e, t) {
	let n = pn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(vn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var xn = {
	id: "baseline-concrete-addition-subtraction",
	competencyIds: [fn],
	generateQuestion(e, t) {
		return vn(e, t);
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
}, Sn = "math.number-sense.baseline-counting", Cn = "math.number-sense.baseline-subitizing", wn = "math.number-sense.baseline-digits", Tn = "math.comparing-ordering.baseline-groups";
//#endregion
//#region packages/baseline-counting-quantities/src/rng.ts
function En(e) {
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
var Dn = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function On(e) {
	return e === "P" || e === 1;
}
function B(e) {
	return Dn[z(e, 0, Dn.length - 1)];
}
function kn(e, t) {
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
function An(e, t, n) {
	let r = z(n, 1, 20);
	return {
		id: `baseline-counting-quantities-counting-${e}-${t}`,
		kind: "counting",
		grade: e,
		competencyId: Sn,
		count: r,
		emoji: B(n),
		correctAnswer: r
	};
}
function jn(e, t, n) {
	let r = z(n, 1, 5);
	return {
		id: `baseline-counting-quantities-subitizing-${e}-${t}`,
		kind: "subitizing",
		grade: e,
		competencyId: Cn,
		count: r,
		emoji: B(n),
		correctAnswer: r
	};
}
function Mn(e, t, n) {
	let r = z(n, 0, 9), i = B(n), { options: a, correctOptionId: o } = kn(n, r);
	return {
		id: `baseline-counting-quantities-digit-${e}-${t}`,
		kind: "digit",
		grade: e,
		competencyId: wn,
		count: r,
		emoji: i,
		options: a,
		correctOptionId: o
	};
}
function Nn(e, t, n) {
	let r = z(n, 1, 10), i = z(n, 1, 10);
	for (; i === r;) i = z(n, 1, 10);
	let a = B(n), o = B(n), s = r > i ? "left" : "right";
	return {
		id: `baseline-counting-quantities-compare-groups-${e}-${t}`,
		kind: "compare-groups",
		grade: e,
		competencyId: Tn,
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
function Pn(e, t) {
	if (!On(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = En(t);
	switch (z(n, 0, 3)) {
		case 0: return An(e, t, n);
		case 1: return jn(e, t, n);
		case 2: return Mn(e, t, n);
		default: return Nn(e, t, n);
	}
}
//#endregion
//#region packages/baseline-counting-quantities/src/plugin.ts
function Fn(e, t, n, r, i) {
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
function In(e, t) {
	let n = En(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Pn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ln = {
	id: "baseline-counting-quantities",
	competencyIds: [
		Sn,
		Cn,
		wn,
		Tn
	],
	generateQuestion(e, t) {
		return Pn(e, t);
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
}, Rn = "math.measurement.baseline-comparison";
//#endregion
//#region packages/baseline-direct-comparison/src/rng.ts
function zn(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Bn(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-direct-comparison/src/generate.ts
var Vn = {
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
}, Hn = [
	"length",
	"weight",
	"capacity"
], Un = {
	length: "Which one is longer?",
	weight: "Which one is heavier?",
	capacity: "Which one holds more?"
};
function Wn(e) {
	return e === "P" || e === 1;
}
function Gn(e, t) {
	let n = Bn(e, 0, t.length - 1), r = Bn(e, 0, t.length - 1);
	for (; r === n;) r = Bn(e, 0, t.length - 1);
	return [t[n], t[r]];
}
function Kn(e, t) {
	if (!Wn(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = zn(t), r = Hn[Bn(n, 0, Hn.length - 1)], [i, a] = Gn(n, Vn[r]), o = n() < .5, s = {
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
		prompt: Un[r],
		options: [s, c],
		correctOptionId: o ? "a" : "b"
	};
}
//#endregion
//#region packages/baseline-direct-comparison/src/plugin.ts
function qn(e, t, n, r, i) {
	return {
		competencyId: Rn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Jn(e, t) {
	let n = zn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Kn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Yn = {
	id: "baseline-direct-comparison",
	competencyIds: [Rn],
	generateQuestion(e, t) {
		return Kn(e, t);
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
}, Xn = "math.geometry.baseline-position";
//#endregion
//#region packages/baseline-positional-language/src/rng.ts
function Zn(e) {
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
var Qn = [
	"🐱 the cat",
	"🐶 the dog",
	"⭐ the star",
	"🧸 the toy"
], H = [
	"📦 the box",
	"🪑 the chair",
	"🛏️ the bed",
	"🌳 the tree"
], $n = [
	"on",
	"under",
	"behind",
	"between",
	"next-to"
], er = {
	on: "on",
	under: "under",
	behind: "behind",
	between: "between",
	"next-to": "next to"
};
function tr(e) {
	return e === "P" || e === 1;
}
function nr(e, t, n, r) {
	switch (e) {
		case "on": return `${t}\n${n}`;
		case "under": return `${n}\n${t}`;
		case "behind": return `${n}${t}`;
		case "next-to": return `${t}  ${n}`;
		case "between": return `${n}  ${t}  ${r}`;
	}
}
function rr(e) {
	let t = [...$n];
	for (let n = t.length - 1; n > 0; n--) {
		let r = V(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function ir(e, t) {
	if (!tr(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = Zn(t), r = $n[V(n, 0, $n.length - 1)], i = Qn[V(n, 0, Qn.length - 1)], a = V(n, 0, H.length - 1), o = V(n, 0, H.length - 1);
	for (; o === a;) o = V(n, 0, H.length - 1);
	let s = H[a], c = H[o], l = i.split(" ")[0], u = s.split(" ")[0], d = c.split(" ")[0], f = rr(n).map((e) => ({
		id: `position-${e}`,
		label: er[e]
	}));
	return {
		id: `baseline-positional-language-${e}-${t}`,
		grade: e,
		position: r,
		subjectLabel: i,
		scene: nr(r, l, u, d),
		options: f,
		correctOptionId: `position-${r}`
	};
}
//#endregion
//#region packages/baseline-positional-language/src/plugin.ts
function ar(e, t, n, r, i) {
	return {
		competencyId: Xn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function or(e, t) {
	let n = Zn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ir(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var sr = {
	id: "baseline-positional-language",
	competencyIds: [Xn],
	generateQuestion(e, t) {
		return ir(e, t);
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
}, cr = "math.geometry.baseline-shapes";
//#endregion
//#region packages/baseline-shape-recognition/src/rng.ts
function lr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function ur(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-shape-recognition/src/generate.ts
var dr = [
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
function fr(e) {
	return e === "P" || e === 1;
}
function pr(e) {
	let t = dr.map((e) => e.name);
	for (let n = t.length - 1; n > 0; n--) {
		let r = ur(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function mr(e, t) {
	if (!fr(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = lr(t), r = dr[ur(n, 0, dr.length - 1)], i = pr(n).map((e) => ({
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
function hr(e, t, n, r, i) {
	return {
		competencyId: cr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function gr(e, t) {
	let n = lr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(mr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var _r = {
	id: "baseline-shape-recognition",
	competencyIds: [cr],
	generateQuestion(e, t) {
		return mr(e, t);
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
function vr(e) {
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
function yr(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function br(e) {
	let t = U(e, 0, 9);
	return {
		operandA: t,
		operandB: U(e, 0, 9 - t)
	};
}
function xr(e) {
	let t = U(e, 1, 9);
	return {
		operandA: t,
		operandB: U(e, Math.max(1, 10 - t), 9)
	};
}
function Sr(e) {
	let t = U(e, 0, 9), n = U(e, 0, 9 - t);
	return {
		operandA: U(e, 1, 9) * 10 + n,
		operandB: t
	};
}
function Cr(e) {
	let t = U(e, 1, 9);
	return {
		onesA: U(e, Math.max(0, 10 - t), 9),
		onesB: t
	};
}
function wr(e) {
	let { onesA: t, onesB: n } = Cr(e), r = U(e, 1, 9), i = U(e, 1, 9);
	return {
		operandA: r * 10 + t,
		operandB: i * 10 + n
	};
}
function Tr(e) {
	let { onesA: t, onesB: n } = Cr(e), r = U(e, 0, 9), i = U(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = U(e, +!a, 9);
	return {
		operandA: i,
		operandB: (a ? U(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function Er(e, t) {
	if (!yr(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = vr(t), { operandA: r, operandB: i } = e === 1 ? br(n) : e === 2 ? xr(n) : e === 3 ? Sr(n) : e === 4 ? wr(n) : Tr(n);
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
var Dr = "math.addition.mental";
function Or(e, t, n, r, i) {
	return {
		competencyId: Dr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function kr(e, t) {
	let n = vr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Er(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ar = {
	id: "mental-addition",
	competencyIds: [Dr],
	generateQuestion(e, t) {
		return Er(e, t);
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
function jr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Mr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-division/src/generate.ts
function Nr(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Pr(e, t) {
	return {
		divisor: Mr(e, 1, t),
		correctQuotient: Mr(e, 0, t)
	};
}
function Fr(e) {
	return {
		divisor: Mr(e, 1, 9),
		correctQuotient: Mr(e, 11, 20)
	};
}
function Ir(e, t) {
	if (!Nr(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = jr(t), { divisor: r, correctQuotient: i } = e === 1 ? Pr(n, 2) : e === 2 ? Pr(n, 5) : e === 3 ? Pr(n, 10) : e === 4 ? Pr(n, 12) : Fr(n);
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
var Lr = "math.division.mental";
function Rr(e, t, n, r, i) {
	return {
		competencyId: Lr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function zr(e, t) {
	let n = jr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ir(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Br = {
	id: "mental-division",
	competencyIds: [Lr],
	generateQuestion(e, t) {
		return Ir(e, t);
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
function Vr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Hr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-multiplication/src/generate.ts
function Ur(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Wr(e, t) {
	return {
		factorA: Hr(e, 0, t),
		factorB: Hr(e, 0, t)
	};
}
function Gr(e) {
	return {
		factorA: Hr(e, 11, 20),
		factorB: Hr(e, 0, 9)
	};
}
function Kr(e, t) {
	if (!Ur(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Vr(t), { factorA: r, factorB: i } = e === 1 ? Wr(n, 2) : e === 2 ? Wr(n, 5) : e === 3 ? Wr(n, 10) : e === 4 ? Wr(n, 12) : Gr(n);
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
var qr = "math.multiplication.mental";
function Jr(e, t, n, r, i) {
	return {
		competencyId: qr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Yr(e, t) {
	let n = Vr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Kr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Xr = {
	id: "mental-multiplication",
	competencyIds: [qr],
	generateQuestion(e, t) {
		return Kr(e, t);
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
function Zr(e) {
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
function Qr(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function $r(e) {
	let t = W(e, 0, 9);
	return {
		correctDifference: t,
		subtrahend: W(e, 0, 9 - t)
	};
}
function ei(e) {
	let t = W(e, 1, 9);
	return {
		correctDifference: t,
		subtrahend: W(e, Math.max(1, 10 - t), 9)
	};
}
function ti(e) {
	let t = W(e, 0, 9), n = W(e, 0, 9 - t);
	return {
		correctDifference: W(e, 1, 9) * 10 + n,
		subtrahend: t
	};
}
function ni(e) {
	let t = W(e, 1, 9);
	return {
		onesDiff: W(e, Math.max(0, 10 - t), 9),
		onesSubtrahend: t
	};
}
function ri(e) {
	let { onesDiff: t, onesSubtrahend: n } = ni(e), r = W(e, 1, 9), i = W(e, 1, 9);
	return {
		correctDifference: r * 10 + t,
		subtrahend: i * 10 + n
	};
}
function ii(e) {
	let { onesDiff: t, onesSubtrahend: n } = ni(e), r = W(e, 0, 9), i = W(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = W(e, +!a, 9);
	return {
		correctDifference: i,
		subtrahend: (a ? W(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function ai(e, t) {
	if (!Qr(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Zr(t), { correctDifference: r, subtrahend: i } = e === 1 ? $r(n) : e === 2 ? ei(n) : e === 3 ? ti(n) : e === 4 ? ri(n) : ii(n);
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
var oi = "math.subtraction.mental";
function si(e, t, n, r, i) {
	return {
		competencyId: oi,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ci(e, t) {
	let n = Zr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ai(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var li = {
	id: "mental-subtraction",
	competencyIds: [oi],
	generateQuestion(e, t) {
		return ai(e, t);
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
}, ui = "math.number-sense.counting-range";
//#endregion
//#region packages/number-sense-counting-range/src/rng.ts
function di(e) {
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
function fi(e) {
	return Number.isInteger(e) && e >= 1 && e <= 4;
}
var pi = {
	1: 100,
	2: 1e3,
	3: 1e4,
	4: 1e6
};
function mi(e, t, n, r) {
	let i = G(r, 0, n - 1);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "next",
		prompt: `What number comes right after ${i}?`,
		numericAnswer: i + 1
	};
}
function hi(e, t, n, r) {
	let i = G(r, 1, n);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "previous",
		prompt: `What number comes right before ${i}?`,
		numericAnswer: i - 1
	};
}
function gi(e, t, n, r) {
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
function _i(e, t) {
	if (!fi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..4)`);
	let n = pi[e], r = di(t);
	switch (G(r, 0, 2)) {
		case 0: return mi(e, t, n, r);
		case 1: return hi(e, t, n, r);
		default: return gi(e, t, n, r);
	}
}
//#endregion
//#region packages/number-sense-counting-range/src/plugin.ts
function vi(e, t, n, r, i) {
	return {
		competencyId: ui,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function yi(e, t) {
	let n = di(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(_i(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var bi = {
	id: "number-sense-counting-range",
	competencyIds: [ui],
	generateQuestion(e, t) {
		return _i(e, t);
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
}, xi = "math.number-sense.negative-numbers";
//#endregion
//#region packages/number-sense-negative-numbers/src/rng.ts
function Si(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ci(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-negative-numbers/src/generate.ts
function wi(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ti(e, t, n, r) {
	let i = Ci(n, r[0], r[1]), a = n() < .5 ? "after" : "before", o = a === "after" ? i + 1 : i - 1;
	return {
		id: `number-sense-negative-numbers-${e}-${t}`,
		grade: e,
		kind: "position",
		prompt: `What number comes right ${a} ${i}?`,
		numericAnswer: o
	};
}
function Ei(e, t, n, r, i) {
	let a = Ci(n, i[0], i[1]), o = Ci(n, i[0], i[1]);
	for (; o === a;) o = Ci(n, i[0], i[1]);
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
function Di(e, t) {
	if (!wi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Si(t);
	if (e === 1) return Ti(e, t, n, [-10, 10]);
	if (e === 2) return Ti(e, t, n, [-20, 20]);
	if (e === 3) return Ei(e, t, n, "temperature", [-20, 20]);
	if (e === 4) return Ei(e, t, n, "debt", [-50, -1]);
	if (n() < .5) return Ti(e, t, n, [-100, 100]);
	let r = n() < .5 ? "temperature" : "debt";
	return Ei(e, t, n, r, r === "debt" ? [-50, -1] : [-100, 100]);
}
//#endregion
//#region packages/number-sense-negative-numbers/src/plugin.ts
function Oi(e, t, n, r, i) {
	return {
		competencyId: xi,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ki(e, t) {
	let n = Si(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Di(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ai = {
	id: "number-sense-negative-numbers",
	competencyIds: [xi],
	generateQuestion(e, t) {
		return Di(e, t);
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
}, ji = "math.number-sense.odd-even";
//#endregion
//#region packages/number-sense-odd-even/src/rng.ts
function Mi(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ni(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-odd-even/src/generate.ts
function Pi(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Fi = {
	1: 20,
	2: 100,
	3: 1e3,
	4: 1e4,
	5: 1e4
};
function Ii(e) {
	return e % 2 == 0 ? "even" : "odd";
}
function Li(e, t, n) {
	let r = t === "even" ? 0 : 1;
	return r + 2 * Ni(e, 0, Math.floor((n - r) / 2) + 1 - 1);
}
function Ri(e, t, n) {
	let r = Fi[e], i = Ni(n, 0, r);
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
		correctOptionId: Ii(i)
	};
}
function zi(e, t, n) {
	let r = n() < .5 ? "odd" : "even", i = r === "odd" ? "even" : "odd", a = [];
	for (; a.length < 3;) {
		let e = Li(n, r, 1e4);
		a.includes(e) || a.push(e);
	}
	let o = Li(n, i, 1e4), s = [
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
		let t = Ni(n, 0, e), r = s[e];
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
function Bi(e, t) {
	if (!Pi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Mi(t);
	return e === 5 && n() < .5 ? zi(e, t, n) : Ri(e, t, n);
}
//#endregion
//#region packages/number-sense-odd-even/src/plugin.ts
function Vi(e, t, n, r, i) {
	return {
		competencyId: ji,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Hi(e, t) {
	let n = Mi(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Bi(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ui = {
	id: "number-sense-odd-even",
	competencyIds: [ji],
	generateQuestion(e, t) {
		return Bi(e, t);
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
}, Wi = "math.number-sense.ordinals";
//#endregion
//#region packages/number-sense-ordinals/src/ordinal.ts
function Gi(e) {
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
function Ki(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function qi(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-ordinals/src/generate.ts
var Ji = {
	1: 5,
	2: 10,
	3: 20,
	4: 50,
	5: 100
};
function Yi(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
function Xi(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = qi(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Zi(e, t) {
	let n = Xi(e, t), r = n.map((e, t) => ({
		id: `opt-${t}`,
		label: e.label
	}));
	return {
		options: r,
		correctOptionId: r[n.findIndex((e) => e.correct)].id
	};
}
function Qi(e, t) {
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
function $i(e, t, n, r) {
	let i = new Set(t), a = [];
	for (let t of e) {
		if (a.length >= r) break;
		i.has(t) || (a.push(t), i.add(t));
	}
	for (let e = 1; e <= n && a.length < r; e++) i.has(e) || (a.push(e), i.add(e));
	return a;
}
function ea(e, t, n, r) {
	let i = $i(Qi(e, t), /* @__PURE__ */ new Set([e]), t, 3);
	return Zi([{
		label: r(e),
		correct: !0
	}, ...i.map((e) => ({
		label: r(e),
		correct: !1
	}))], n);
}
function ta(e, t) {
	if (!Yi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ji[e], r = Ki(t), i = r() < .5 ? "number-to-word" : "word-to-number", a = qi(r, 1, n), { options: o, correctOptionId: s } = i === "number-to-word" ? ea(a, n, r, Gi) : ea(a, n, r, String), c = i === "number-to-word" ? `What is the ordinal (position) word for ${a}?` : `Which number is ${Gi(a)}?`;
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
function na(e, t, n, r, i) {
	return {
		competencyId: Wi,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ra(e, t) {
	let n = Ki(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ta(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ia = {
	id: "number-sense-ordinals",
	competencyIds: [Wi],
	generateQuestion(e, t) {
		return ta(e, t);
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
}, aa = "math.number-sense.primes-factors";
//#endregion
//#region packages/number-sense-primes-factors/src/rng.ts
function oa(e) {
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
function sa(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function ca(e) {
	if (e < 2) return !1;
	for (let t = 2; t * t <= e; t++) if (e % t === 0) return !1;
	return !0;
}
function la(e, t) {
	return t === 0 ? e : la(t, e % t);
}
function ua(e, t) {
	return e * t / la(e, t);
}
var da = {
	1: 20,
	2: 50,
	5: 50
}, fa = {
	3: 50,
	4: 100,
	5: 100
};
function pa(e, t) {
	let n = [];
	for (let e = 2; e < t; e++) t % e === 0 && n.push(e);
	return n.length === 0 ? K(e, 2, t - 1) : n[K(e, 0, n.length - 1)];
}
function ma(e, t) {
	let n = K(e, 2, t - 1), r = 0;
	for (; t % n === 0 && r < 20;) n = K(e, 2, t - 1), r++;
	return n;
}
function ha(e, t, n) {
	let r = K(n, 2, da[e] ?? 50);
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
		correctOptionId: ca(r) ? "yes" : "no",
		n: r
	};
}
function ga(e, t, n) {
	let r = K(n, 4, (fa[e] ?? 100) - 1), i = n() < .5 ? pa(n, r) : ma(n, r);
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
function _a(e, t, n) {
	let r = K(n, 2, 12), i = K(n, 2, 12);
	for (; i === r;) i = K(n, 2, 12);
	return {
		id: `number-sense-primes-factors-${e}-${t}`,
		grade: e,
		kind: "common-multiple",
		prompt: `What is the smallest common multiple of ${r} and ${i}?`,
		numericAnswer: ua(r, i)
	};
}
function va(e, t) {
	if (!sa(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = oa(t);
	if (e === 1 || e === 2) return ha(e, t, n);
	if (e === 3 || e === 4) return ga(e, t, n);
	switch (K(n, 0, 2)) {
		case 0: return ha(e, t, n);
		case 1: return ga(e, t, n);
		default: return _a(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-primes-factors/src/plugin.ts
function ya(e, t, n, r, i) {
	return {
		competencyId: aa,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ba(e, t) {
	let n = oa(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(va(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var xa = {
	id: "number-sense-primes-factors",
	competencyIds: [aa],
	generateQuestion(e, t) {
		return va(e, t);
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
}, Sa = "math.number-sense.roman-numerals";
//#endregion
//#region packages/number-sense-roman-numerals/src/rng.ts
function Ca(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function wa(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-roman-numerals/src/generate.ts
var Ta = [
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
function Ea(e) {
	let t = e, n = "";
	for (let [e, r] of Ta) for (; t >= e;) n += r, t -= e;
	return n;
}
function Da(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Oa = {
	1: [1, 10],
	2: [1, 50],
	3: [1, 100],
	4: [1, 500],
	5: [1, 1e3]
};
function ka(e, t) {
	return e <= 3 || t() < .5 ? "read" : "write";
}
function Aa(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = wa(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function ja(e, t, n, r) {
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
function Ma(e, t, n) {
	let [r, i] = t, a = Aa([e, ...ja(e, r, i, 3)], n), o = a.map((e, t) => ({
		id: `opt-${t}`,
		label: String(e)
	})), s = a.indexOf(e);
	return {
		prompt: `Which number does the Roman numeral ${Ea(e)} represent?`,
		options: o,
		correctOptionId: `opt-${s}`
	};
}
function Na(e, t, n) {
	let [r, i] = t, a = ja(e, r, i, 3), o = Aa([Ea(e), ...a.map(Ea)], n), s = o.map((e, t) => ({
		id: `opt-${t}`,
		label: e
	})), c = o.indexOf(Ea(e));
	return {
		prompt: `Which Roman numeral represents ${e}?`,
		options: s,
		correctOptionId: `opt-${c}`
	};
}
function Pa(e, t) {
	if (!Da(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ca(t), r = Oa[e], i = ka(e, n), a = wa(n, r[0], r[1]), { prompt: o, options: s, correctOptionId: c } = i === "read" ? Ma(a, r, n) : Na(a, r, n);
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
function Fa(e, t, n, r, i) {
	return {
		competencyId: Sa,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Ia(e, t) {
	let n = Ca(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Pa(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var La = {
	id: "number-sense-roman-numerals",
	competencyIds: [Sa],
	generateQuestion(e, t) {
		return Pa(e, t);
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
function Ra(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function za(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-skip-counting/src/generate.ts
function Ba(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Va() {
	return {
		step: 2,
		maxRange: 20
	};
}
function Ha() {
	return {
		step: 2,
		maxRange: 50
	};
}
function Ua() {
	return {
		step: 5,
		maxRange: 100
	};
}
function Wa() {
	return {
		step: 10,
		maxRange: 200
	};
}
function Ga(e) {
	let t = [
		2,
		5,
		10,
		25,
		50
	];
	return {
		step: t[za(e, 0, t.length - 1)],
		maxRange: 500
	};
}
function Ka(e, t) {
	if (!Ba(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ra(t), { step: r, maxRange: i } = e === 1 ? Va() : e === 2 ? Ha() : e === 3 ? Ua() : e === 4 ? Wa() : Ga(n), a = za(n, 0, (i - r * 4) / r) * r, o = a, s = a + r, c = a + r * 2, l = a + r * 3;
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
var qa = "math.number-sense.skip-counting";
function Ja(e, t, n, r, i) {
	return {
		competencyId: qa,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Ya(e, t) {
	let n = Ra(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ka(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Xa = {
	id: "number-sense-skip-counting",
	competencyIds: [qa],
	generateQuestion(e, t) {
		return Ka(e, t);
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
function Za(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Qa(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-squares/src/generate.ts
function $a(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
var eo = [{
	id: "yes",
	label: "Yes"
}, {
	id: "no",
	label: "No"
}], to = {
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
}, no = {
	4: {
		baseMin: 1,
		baseMax: 8
	},
	5: {
		baseMin: 1,
		baseMax: 12
	}
};
function ro(e) {
	return Number.isInteger(Math.sqrt(e));
}
function io(e, t, n) {
	let { baseMin: r, baseMax: i, numberMin: a, numberMax: o } = to[e], s = n() < .5 ? (() => {
		let e = Qa(n, r, i);
		return e * e;
	})() : Qa(n, a, o), c = ro(s) ? "yes" : "no";
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recognize",
		prompt: `Is ${s} a square number?`,
		options: eo,
		correctOptionId: c
	};
}
function ao(e, t, n) {
	let { baseMin: r, baseMax: i } = no[e], a = Qa(n, r, i);
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recall",
		prompt: `What is ${a} squared?`,
		numericAnswer: a * a
	};
}
function oo(e, t) {
	if (!$a(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Za(t);
	switch (e) {
		case 1:
		case 2:
		case 3: return io(e, t, n);
		case 4:
		case 5: return ao(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-squares/src/plugin.ts
var so = "math.number-sense.squares";
function co(e, t, n, r, i) {
	return {
		competencyId: so,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function lo(e, t) {
	let n = Za(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(oo(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var uo = {
	id: "number-sense-squares",
	competencyIds: [so],
	generateQuestion(e, t) {
		return oo(e, t);
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
function fo(e) {
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
function po(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function mo(e) {
	return `${Math.floor(e / 10)}.${e % 10}`;
}
function ho(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 10`,
		correctAnswer: t * 10
	};
}
function go(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 100`,
		correctAnswer: t * 100
	};
}
function _o(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 1000`,
		correctAnswer: t * 1e3
	};
}
function vo(e) {
	let t = e() < .5 ? 10 : 100, n = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${n * t} ÷ ${t}`,
		correctAnswer: n
	};
}
function yo(e) {
	let t = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 1e3} ÷ 1000`,
		correctAnswer: t
	};
}
function bo(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${mo(t)} × 10`,
		correctAnswer: t
	};
}
function xo(e) {
	let t = q(e, 1, 999);
	return {
		operator: "×",
		equation: `${mo(t)} × 100`,
		correctAnswer: t * 10
	};
}
function So(e) {
	let t = q(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 10} ÷ 10`,
		correctAnswer: t
	};
}
var Co = [
	yo,
	bo,
	xo,
	So
];
function wo(e) {
	let t = Co[q(e, 0, Co.length - 1)];
	return t(e);
}
function To(e, t) {
	if (!po(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = fo(t), { operator: r, equation: i, correctAnswer: a } = e === 1 ? ho(n) : e === 2 ? go(n) : e === 3 ? _o(n) : e === 4 ? vo(n) : wo(n);
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
var Eo = "math.place-value.multiply-divide-ten";
function Do(e, t, n, r, i) {
	return {
		competencyId: Eo,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Oo(e, t) {
	let n = fo(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(To(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ko = {
	id: "place-value-multiply-divide-ten",
	competencyIds: [Eo],
	generateQuestion(e, t) {
		return To(e, t);
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
function Ao(e) {
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
function jo(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Mo = [
	1,
	10,
	100,
	1e3
];
function No(e) {
	return {
		operand: J(e, 1, 99),
		magnitude: 1
	};
}
function Po(e) {
	return {
		operand: J(e, 10, 999),
		magnitude: 10
	};
}
function Fo(e) {
	return {
		operand: J(e, 100, 9999),
		magnitude: 100
	};
}
function Io(e) {
	return {
		operand: J(e, 1e3, 99999),
		magnitude: 1e3
	};
}
function Lo(e) {
	let t = Mo[J(e, 0, Mo.length - 1)];
	return {
		operand: J(e, t, 999999),
		magnitude: t
	};
}
function Ro(e, t) {
	if (!jo(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ao(t), { operand: r, magnitude: i } = e === 1 ? No(n) : e === 2 ? Po(n) : e === 3 ? Fo(n) : e === 4 ? Io(n) : Lo(n), a = n() < .5 ? "+" : "-", o = a === "+" ? r + i : r - i;
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
var zo = "math.place-value.powers-of-ten";
function Bo(e, t, n, r, i) {
	return {
		competencyId: zo,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
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
	id: "place-value-powers-of-ten",
	competencyIds: [zo],
	generateQuestion(e, t) {
		return Ro(e, t);
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
}, Uo = "math.place-value.rounding";
//#endregion
//#region packages/place-value-rounding/src/rng.ts
function Wo(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Go(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-rounding/src/generate.ts
function Ko(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function qo(e, t) {
	let n = e % t, r = e - n;
	return n * 2 >= t ? r + t : r;
}
function Jo(e, t) {
	return e - e % t;
}
function Yo(e, t) {
	let n = e % t;
	return n === 0 ? e : e - n + t;
}
function Y(e, t) {
	let n = String(e).padStart(t + 1, "0");
	return `${n.slice(0, -t)}.${n.slice(-t)}`;
}
function Xo(e, t, n) {
	let r = /* @__PURE__ */ new Set([e]), i = [];
	for (let e of t) if (!r.has(e) && (r.add(e), i.push(e), i.length === 3)) return i;
	let a = 1;
	for (; i.length < 3;) {
		let e = n(a);
		a += 1, r.has(e) || (r.add(e), i.push(e));
	}
	return i;
}
function Zo(e, t, n, r, i, a) {
	let o = [{
		label: i,
		isCorrect: !0
	}, ...a.map((e) => ({
		label: e,
		isCorrect: !1
	}))];
	for (let e = o.length - 1; e > 0; e--) {
		let t = Go(n, 0, e), r = o[e];
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
var Qo = {
	1: 999,
	2: 9999,
	3: 99999
}, $o = {
	1: 10,
	2: 100,
	3: 1e3
}, es = {
	1: "10",
	2: "100",
	3: "1,000"
};
function ts(e, t, n) {
	let r = $o[e], i = Go(n, 0, Qo[e]), a = qo(i, r), o = String(a), s = Xo(o, [
		Jo(i, r),
		Yo(i, r),
		i,
		a - r,
		a + r,
		a - 2 * r,
		a + 2 * r
	].filter((e) => e >= 0).map(String), (e) => String(a + (e + 2) * r));
	return Zo(e, t, n, `Round ${i} to the nearest ${es[e]}.`, o, s);
}
var ns = {
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
function rs(e, t, n) {
	let { maxScaled: r, sourceDecimalPlaces: i, targetDecimalPlaces: a, precisionLabel: o } = ns[e], s = Go(n, 0, r), c = Y(s, i), l = qo(s, X) / X, u = Y(l, a), d = Jo(s, X) / X, f = Yo(s, X) / X, p = Xo(u, [
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
	return Zo(e, t, n, `Round ${c} to ${o} decimal place${o === "1" ? "" : "s"}.`, u, p);
}
function is(e, t) {
	if (!Ko(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Wo(t);
	return e === 1 || e === 2 || e === 3 ? ts(e, t, n) : rs(e, t, n);
}
//#endregion
//#region packages/place-value-rounding/src/plugin.ts
function as(e, t, n, r, i) {
	return {
		competencyId: Uo,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function os(e, t) {
	let n = Wo(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(is(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ss = {
	id: "place-value-rounding",
	competencyIds: [Uo],
	generateQuestion(e, t) {
		return is(e, t);
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
}, cs = "math.place-value.understanding";
//#endregion
//#region packages/place-value-understanding/src/rng.ts
function ls(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function us(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-understanding/src/generate.ts
function ds(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var fs = {
	name: "units",
	value: 1,
	decimals: 0
}, ps = {
	name: "tens",
	value: 10,
	decimals: 0
}, ms = {
	name: "hundreds",
	value: 100,
	decimals: 0
}, hs = {
	name: "thousands",
	value: 1e3,
	decimals: 0
}, gs = {
	name: "ten-thousands",
	value: 1e4,
	decimals: 0
}, _s = {
	name: "hundred-thousands",
	value: 1e5,
	decimals: 0
}, vs = {
	name: "millions",
	value: 1e6,
	decimals: 0
}, ys = {
	name: "ones",
	value: 1,
	decimals: 0
}, bs = {
	name: "tenths",
	value: .1,
	decimals: 1
}, xs = {
	name: "hundredths",
	value: .01,
	decimals: 2
}, Ss = {
	name: "thousandths",
	value: .001,
	decimals: 3
}, Z = {
	1: [fs, ps],
	2: [
		fs,
		ps,
		ms
	],
	3: [
		fs,
		ps,
		ms,
		hs
	],
	4: [
		fs,
		ps,
		ms,
		hs,
		gs,
		_s,
		vs
	]
}, Cs = [
	Ss,
	xs,
	bs,
	ys
], ws = [
	Ss,
	xs,
	bs
], Ts = {
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
		composePlaces: Cs,
		scopePlaces: ws,
		isDecimal: !0
	}
};
function Es(e, t) {
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
		let r = us(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n.slice(0, t);
}
function Q(e, t) {
	return t.decimals === 0 ? String(e * t.value) : `0.${"0".repeat(t.decimals - 1)}${e}`;
}
function Ds(e, t) {
	if (!e.isDecimal) {
		let n = t.reduce((t, n, r) => t + n * e.composePlaces[r].value, 0);
		return String(n);
	}
	let [n, r, i, a] = t;
	return `${a}.${i}${r}${n}`;
}
function Os(e) {
	return e.length === 1 ? e[0] : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
function ks(e, t, n) {
	let r = t.map((e, t) => ({
		label: e,
		isCorrect: t === n
	}));
	for (let t = r.length - 1; t > 0; t--) {
		let n = us(e, 0, t), i = r[t];
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
function As(e, t, n, r) {
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
function js(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set([n]), a = t.length;
	function o(t) {
		if (r.length >= 3) return;
		let n = Ds(e, t);
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
function Ms(e, t, n, r) {
	let i = Es(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = Ds(r, i), s = us(n, 0, r.scopePlaces.length - 1), c = r.scopePlaces[s], l = Q(a.get(c.name), c), { options: u, correctOptionId: d } = ks(n, [l, ...As(r.scopePlaces, s, a, l)], 0);
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
function Ns(e, t, n, r) {
	let i = Es(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = Ds(r, i), { options: s, correctOptionId: c } = ks(n, [o, ...js(r, i, o)], 0), l = [...r.composePlaces].reverse(), u = [...i].reverse(), d = l.map((e, t) => `${u[t]} ${e.name}`), f = `Which number ${r.isDecimal ? "is" : "has"} ${Os(d)}?`;
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
function Ps(e, t) {
	if (!ds(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = ls(t), r = n() < .5 ? "digit-value" : "compose", i = Ts[e];
	return r === "digit-value" ? Ms(e, t, n, i) : Ns(e, t, n, i);
}
function Fs(e, t) {
	return Ps(e, t).question;
}
//#endregion
//#region packages/place-value-understanding/src/plugin.ts
function Is(e, t, n, r, i) {
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
function Ls(e, t) {
	let n = ls(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Fs(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Rs = {
	id: "place-value-understanding",
	competencyIds: [cs],
	generateQuestion(e, t) {
		return Fs(e, t);
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
function zs(e, t) {
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
function Bs(e) {
	switch (e.kind) {
		case "duplicate-plugin-id": return `duplicate plugin id: "${e.id}"`;
		case "unknown-competency-reference": return `plugin "${e.pluginId}" references unknown competency id: "${e.competencyId}"`;
	}
}
function Vs(e, t) {
	let n = zs(e, t);
	if (!n.valid) {
		let e = n.errors.map(Bs).join("; ");
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
var Hs = Vs([
	Ar,
	li,
	Xr,
	Br,
	Ln,
	xn,
	Yn,
	dn,
	_r,
	sr,
	bi,
	Xa,
	Ui,
	ia,
	Ai,
	xa,
	uo,
	La,
	Rs,
	Ho,
	ss,
	ko,
	...Ke,
	...zt
], [
	v,
	y,
	b,
	x,
	S,
	C,
	w,
	T,
	E,
	D,
	O,
	Vt,
	Ht,
	Ut,
	Wt,
	Gt,
	Kt,
	k,
	A,
	j,
	M,
	N,
	P,
	F,
	I,
	L,
	...ie,
	...gt
]);
//#endregion
//#region src/exerciseDefinitions.ts
function $(e, t) {
	let n = Hs.getPlugin(e);
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
var Us = {
	key: "addition",
	label: "Addition",
	icon: "➕",
	pluginId: "mental-addition",
	competency: v,
	competencies: [v],
	createSession(e, t) {
		return $("mental-addition", kr(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Or(e, t, n, r, i)
}, Ws = {
	key: "subtraction",
	label: "Subtraction",
	icon: "➖",
	pluginId: "mental-subtraction",
	competency: y,
	competencies: [y],
	createSession(e, t) {
		return $("mental-subtraction", ci(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => si(e, t, n, r, i)
}, Gs = {
	key: "multiplication",
	label: "Multiplication",
	icon: "✖️",
	pluginId: "mental-multiplication",
	competency: b,
	competencies: [b],
	createSession(e, t) {
		return $("mental-multiplication", Yr(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Jr(e, t, n, r, i)
}, Ks = {
	key: "division",
	label: "Division",
	icon: "➗",
	pluginId: "mental-division",
	competency: x,
	competencies: [x],
	createSession(e, t) {
		return $("mental-division", zr(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Rr(e, t, n, r, i)
}, qs = {
	key: "baseline-counting-quantities",
	label: "Counting & Quantities",
	icon: "🔢",
	pluginId: "baseline-counting-quantities",
	competency: S,
	competencies: [
		S,
		C,
		w,
		T
	],
	competencyLabels: {
		[S.id]: "Counting to 20",
		[C.id]: "Subitizing to 5",
		[w.id]: "Recognising digits",
		[T.id]: "Comparing groups"
	},
	createSession(e, t) {
		return $("baseline-counting-quantities", In(e, t));
	},
	createMasterySignal: (e, t, n, r) => Fn(e, t, n, r)
}, Js = {
	key: "baseline-concrete-addition-subtraction",
	label: "Concrete Addition & Subtraction",
	icon: "🍎",
	pluginId: "baseline-concrete-addition-subtraction",
	competency: E,
	competencies: [E],
	createSession(e, t) {
		return $("baseline-concrete-addition-subtraction", bn(e, t));
	},
	createMasterySignal: (e, t, n, r) => yn(e, t, n, r)
}, Ys = {
	key: "baseline-direct-comparison",
	label: "Direct Comparison",
	icon: "⚖️",
	pluginId: "baseline-direct-comparison",
	competency: D,
	competencies: [D],
	createSession(e, t) {
		return $("baseline-direct-comparison", Jn(e, t));
	},
	createMasterySignal: (e, t, n, r) => qn(e, t, n, r)
}, Xs = {
	key: "baseline-calendar-time-basics",
	label: "Calendar & Time Basics",
	icon: "📅",
	pluginId: "baseline-calendar-time-basics",
	competency: O,
	competencies: [O, Vt],
	competencyLabels: {
		[O.id]: "Order of the day",
		[Vt.id]: "Days of the week"
	},
	createSession(e, t) {
		return $("baseline-calendar-time-basics", un(e, t));
	},
	createMasterySignal: (e, t, n, r) => ln(e, t, n, r)
}, Zs = {
	key: "baseline-shape-recognition",
	label: "Shape Recognition",
	icon: "🔺",
	pluginId: "baseline-shape-recognition",
	competency: Ht,
	competencies: [Ht],
	createSession(e, t) {
		return $("baseline-shape-recognition", gr(e, t));
	},
	createMasterySignal: (e, t, n, r) => hr(e, t, n, r)
}, Qs = {
	key: "baseline-positional-language",
	label: "Positional Language",
	icon: "📍",
	pluginId: "baseline-positional-language",
	competency: Ut,
	competencies: [Ut],
	createSession(e, t) {
		return $("baseline-positional-language", or(e, t));
	},
	createMasterySignal: (e, t, n, r) => ar(e, t, n, r)
}, $s = {
	key: "number-sense-counting-range",
	label: "Counting & Number Range",
	icon: "🔢",
	pluginId: "number-sense-counting-range",
	competency: Wt,
	competencies: [Wt],
	createSession(e, t) {
		return $("number-sense-counting-range", yi(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => vi(e, t, n, r, i)
}, ec = {
	key: "number-sense-skip-counting",
	label: "Skip Counting",
	icon: "➡️",
	pluginId: "number-sense-skip-counting",
	competency: Gt,
	competencies: [Gt],
	createSession(e, t) {
		return $("number-sense-skip-counting", Ya(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Ja(e, t, n, r, i)
}, tc = {
	key: "number-sense-odd-even",
	label: "Odd & Even",
	icon: "🔀",
	pluginId: "number-sense-odd-even",
	competency: Kt,
	competencies: [Kt],
	createSession(e, t) {
		return $("number-sense-odd-even", Hi(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Vi(e, t, n, r, i)
}, nc = {
	key: "number-sense-ordinals",
	label: "Ordinal Numbers",
	icon: "🥇",
	pluginId: "number-sense-ordinals",
	competency: k,
	competencies: [k],
	createSession(e, t) {
		return $("number-sense-ordinals", ra(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => na(e, t, n, r, i)
}, rc = {
	key: "number-sense-negative-numbers",
	label: "Negative Numbers",
	icon: "🌡️",
	pluginId: "number-sense-negative-numbers",
	competency: A,
	competencies: [A],
	createSession(e, t) {
		return $("number-sense-negative-numbers", ki(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Oi(e, t, n, r, i)
}, ic = {
	key: "number-sense-primes-factors",
	label: "Primes & Factors",
	icon: "🧮",
	pluginId: "number-sense-primes-factors",
	competency: j,
	competencies: [j],
	createSession(e, t) {
		return $("number-sense-primes-factors", ba(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => ya(e, t, n, r, i)
}, ac = {
	key: "number-sense-squares",
	label: "Square Numbers",
	icon: "⬜",
	pluginId: "number-sense-squares",
	competency: M,
	competencies: [M],
	createSession(e, t) {
		return $("number-sense-squares", lo(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => co(e, t, n, r, i)
}, oc = {
	key: "number-sense-roman-numerals",
	label: "Roman Numerals",
	icon: "🏛️",
	pluginId: "number-sense-roman-numerals",
	competency: N,
	competencies: [N],
	createSession(e, t) {
		return $("number-sense-roman-numerals", Ia(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Fa(e, t, n, r, i)
}, sc = {
	key: "place-value-understanding",
	label: "Place Value Understanding",
	icon: "🔟",
	pluginId: "place-value-understanding",
	competency: P,
	competencies: [P],
	createSession(e, t) {
		return $("place-value-understanding", Ls(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Is(e, t, n, r, i)
}, cc = {
	key: "place-value-powers-of-ten",
	label: "Add/Subtract Powers of Ten",
	icon: "➕",
	pluginId: "place-value-powers-of-ten",
	competency: F,
	competencies: [F],
	createSession(e, t) {
		return $("place-value-powers-of-ten", Vo(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Bo(e, t, n, r, i)
}, lc = {
	key: "place-value-rounding",
	label: "Rounding",
	icon: "🔵",
	pluginId: "place-value-rounding",
	competency: I,
	competencies: [I],
	createSession(e, t) {
		return $("place-value-rounding", os(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => as(e, t, n, r, i)
}, uc = {
	key: "place-value-multiply-divide-ten",
	label: "Multiply/Divide by Powers of Ten",
	icon: "✖️",
	pluginId: "place-value-multiply-divide-ten",
	competency: L,
	competencies: [L],
	createSession(e, t) {
		return $("place-value-multiply-divide-ten", Oo(e, t));
	},
	createMasterySignal: (e, t, n, r, i) => Do(e, t, n, r, i)
}, dc = qe.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a) => e.createMasterySignal(t, n, r, i, a)
})), fc = Bt.map((e) => ({
	key: e.key,
	label: e.label,
	icon: e.icon,
	pluginId: e.pluginId,
	competency: e.competency,
	competencies: e.competencies,
	createSession: (t, n) => $(e.pluginId, e.createSession(t, n)),
	createMasterySignal: (t, n, r, i, a) => e.createMasterySignal(t, n, r, i, a)
})), pc = [
	Us,
	Ws,
	Gs,
	Ks,
	qs,
	Js,
	Ys,
	Xs,
	Zs,
	Qs,
	$s,
	ec,
	tc,
	nc,
	rc,
	ic,
	ac,
	oc,
	sc,
	cc,
	lc,
	uc,
	...dc,
	...fc
], mc = {
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
}, hc = !1;
function gc() {
	hc ||= !0;
}
var _c = () => ({
	subjectId: "math",
	competencies: qt,
	plugins: Hs.all(),
	exercises: pc,
	mathematicsAreas: Yt,
	getMathematicsAreaForCompetency: Xt,
	skillsReference: mc,
	register: gc
});
//#endregion
export { qt as allCompetencies, T as baselineCompareGroupsCompetency, E as baselineConcreteArithmeticCompetency, S as baselineCountingCompetency, O as baselineDayOrderCompetency, Vt as baselineDaysOfWeekCompetency, w as baselineDigitsCompetency, D as baselineDirectComparisonCompetency, Ut as baselinePositionCompetency, Ht as baselineShapesCompetency, C as baselineSubitizingCompetency, _c as default, Xt as getMathematicsAreaForCompetency, pc as mathExercises, Hs as mathPluginRegistry, Yt as mathematicsAreas, v as mentalAdditionCompetency, x as mentalDivisionCompetency, b as mentalMultiplicationCompetency, y as mentalSubtractionCompetency, Wt as numberSenseCountingRangeCompetency, A as numberSenseNegativeNumbersCompetency, Kt as numberSenseOddEvenCompetency, k as numberSenseOrdinalsCompetency, j as numberSensePrimesFactorsCompetency, N as numberSenseRomanNumeralsCompetency, Gt as numberSenseSkipCountingCompetency, M as numberSenseSquaresCompetency, L as placeValueMultiplyDivideTenCompetency, F as placeValuePowersOfTenCompetency, I as placeValueRoundingCompetency, P as placeValueUnderstandingCompetency, mc as skillsReference };
