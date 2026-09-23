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
//#region src/curriculum.ts
var r = {
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
}, i = {
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
}, a = {
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
}, o = {
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
}, s = {
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
}, c = {
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
}, l = {
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
}, u = {
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
}, d = {
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
}, f = {
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
}, p = {
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
}, m = {
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
}, h = {
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
}, g = {
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
}, _ = {
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
}, v = {
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
}, y = {
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
}, b = {
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
}, x = {
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
}, S = {
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
}, C = {
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
}, w = {
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
}, T = {
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
}, E = {
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
}, D = {
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
}, O = {
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
}, k = [
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
	_,
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
	O
], ee = n([{
	id: "mathematics",
	nameKey: "subject.mathematics.name"
}], k, k.map((e) => e.id));
if (!ee.valid) throw Error(`curriculum.ts: invalid competency model: ${JSON.stringify(ee.errors)}`);
var te = [
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
function ne(e) {
	let [t, n] = e.id.split(".");
	if (t === "math") return te.some((e) => e.areaKey === n) ? n : void 0;
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/types.ts
var re = "math.time.baseline-day-order", ie = "math.time.baseline-days-of-week";
//#endregion
//#region packages/baseline-calendar-time-basics/src/rng.ts
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
//#region packages/baseline-calendar-time-basics/src/generate.ts
var se = [
	"morning",
	"afternoon",
	"evening",
	"night"
], ce = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
function le(e) {
	return e === "P" || e === 1;
}
function ue(e, t) {
	let n = oe(e, 0, t - 1), r = oe(e, 0, t - 1);
	for (; r === n;) r = oe(e, 0, t - 1);
	return [n, r];
}
function de(e, t, n) {
	let [r, i] = ue(n, se.length), a = Math.min(r, i), o = {
		id: "a",
		label: se[r]
	}, s = {
		id: "b",
		label: se[i]
	};
	return {
		id: `baseline-calendar-time-basics-day-order-${e}-${t}`,
		kind: "day-order",
		grade: e,
		competencyId: re,
		prompt: "Which comes first in the day?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function fe(e, t, n) {
	let [r, i] = ue(n, ce.length), a = Math.min(r, i), o = {
		id: "a",
		label: ce[r]
	}, s = {
		id: "b",
		label: ce[i]
	};
	return {
		id: `baseline-calendar-time-basics-days-of-week-${e}-${t}`,
		kind: "days-of-week",
		grade: e,
		competencyId: ie,
		prompt: "Which comes first in the week?",
		options: [o, s],
		correctOptionId: a === r ? "a" : "b"
	};
}
function pe(e, t) {
	if (!le(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = ae(t);
	return n() < .5 ? de(e, t, n) : fe(e, t, n);
}
//#endregion
//#region packages/baseline-calendar-time-basics/src/plugin.ts
function me(e, t, n, r, i) {
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
function he(e, t) {
	let n = ae(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(pe(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ge = {
	id: "baseline-calendar-time-basics",
	competencyIds: [re, ie],
	generateQuestion(e, t) {
		return pe(e, t);
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
}, _e = "math.addition.baseline-concrete";
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/rng.ts
function ve(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function A(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/generate.ts
var j = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function ye(e) {
	return e === "P" || e === 1;
}
function be(e, t, n) {
	let r = A(n, 1, 5), i = A(n, 1, 5);
	return {
		id: `baseline-concrete-addition-subtraction-add-${e}-${t}`,
		grade: e,
		operator: "+",
		leftCount: r,
		rightCount: i,
		emoji: j[A(n, 0, j.length - 1)],
		correctAnswer: r + i
	};
}
function xe(e, t, n) {
	let r = A(n, 2, 10), i = A(n, 1, r - 1);
	return {
		id: `baseline-concrete-addition-subtraction-sub-${e}-${t}`,
		grade: e,
		operator: "-",
		leftCount: r,
		rightCount: i,
		emoji: j[A(n, 0, j.length - 1)],
		correctAnswer: r - i
	};
}
function Se(e, t) {
	if (!ye(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = ve(t);
	return n() < .5 ? be(e, t, n) : xe(e, t, n);
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/plugin.ts
function Ce(e, t, n, r, i) {
	return {
		competencyId: _e,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function we(e, t) {
	let n = ve(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Se(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Te = {
	id: "baseline-concrete-addition-subtraction",
	competencyIds: [_e],
	generateQuestion(e, t) {
		return Se(e, t);
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
}, Ee = "math.number-sense.baseline-counting", De = "math.number-sense.baseline-subitizing", Oe = "math.number-sense.baseline-digits", ke = "math.comparing-ordering.baseline-groups";
//#endregion
//#region packages/baseline-counting-quantities/src/rng.ts
function Ae(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function M(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-counting-quantities/src/generate.ts
var je = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function Me(e) {
	return e === "P" || e === 1;
}
function N(e) {
	return je[M(e, 0, je.length - 1)];
}
function Ne(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (; n.size < 3;) {
		let r = M(e, 0, 9);
		r !== t && n.add(r);
	}
	let r = [t, ...n];
	for (let t = r.length - 1; t > 0; t--) {
		let n = M(e, 0, t), i = r[t];
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
function Pe(e, t, n) {
	let r = M(n, 1, 20);
	return {
		id: `baseline-counting-quantities-counting-${e}-${t}`,
		kind: "counting",
		grade: e,
		competencyId: Ee,
		count: r,
		emoji: N(n),
		correctAnswer: r
	};
}
function Fe(e, t, n) {
	let r = M(n, 1, 5);
	return {
		id: `baseline-counting-quantities-subitizing-${e}-${t}`,
		kind: "subitizing",
		grade: e,
		competencyId: De,
		count: r,
		emoji: N(n),
		correctAnswer: r
	};
}
function Ie(e, t, n) {
	let r = M(n, 0, 9), i = N(n), { options: a, correctOptionId: o } = Ne(n, r);
	return {
		id: `baseline-counting-quantities-digit-${e}-${t}`,
		kind: "digit",
		grade: e,
		competencyId: Oe,
		count: r,
		emoji: i,
		options: a,
		correctOptionId: o
	};
}
function Le(e, t, n) {
	let r = M(n, 1, 10), i = M(n, 1, 10);
	for (; i === r;) i = M(n, 1, 10);
	let a = N(n), o = N(n), s = r > i ? "left" : "right";
	return {
		id: `baseline-counting-quantities-compare-groups-${e}-${t}`,
		kind: "compare-groups",
		grade: e,
		competencyId: ke,
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
function Re(e, t) {
	if (!Me(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = Ae(t);
	switch (M(n, 0, 3)) {
		case 0: return Pe(e, t, n);
		case 1: return Fe(e, t, n);
		case 2: return Ie(e, t, n);
		default: return Le(e, t, n);
	}
}
//#endregion
//#region packages/baseline-counting-quantities/src/plugin.ts
function ze(e, t, n, r, i) {
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
function Be(e, t) {
	let n = Ae(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Re(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ve = {
	id: "baseline-counting-quantities",
	competencyIds: [
		Ee,
		De,
		Oe,
		ke
	],
	generateQuestion(e, t) {
		return Re(e, t);
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
}, He = "math.measurement.baseline-comparison";
//#endregion
//#region packages/baseline-direct-comparison/src/rng.ts
function Ue(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function P(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-direct-comparison/src/generate.ts
var We = {
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
}, Ge = [
	"length",
	"weight",
	"capacity"
], Ke = {
	length: "Which one is longer?",
	weight: "Which one is heavier?",
	capacity: "Which one holds more?"
};
function qe(e) {
	return e === "P" || e === 1;
}
function Je(e, t) {
	let n = P(e, 0, t.length - 1), r = P(e, 0, t.length - 1);
	for (; r === n;) r = P(e, 0, t.length - 1);
	return [t[n], t[r]];
}
function Ye(e, t) {
	if (!qe(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = Ue(t), r = Ge[P(n, 0, Ge.length - 1)], [i, a] = Je(n, We[r]), o = n() < .5, s = {
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
		prompt: Ke[r],
		options: [s, c],
		correctOptionId: o ? "a" : "b"
	};
}
//#endregion
//#region packages/baseline-direct-comparison/src/plugin.ts
function Xe(e, t, n, r, i) {
	return {
		competencyId: He,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Ze(e, t) {
	let n = Ue(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ye(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Qe = {
	id: "baseline-direct-comparison",
	competencyIds: [He],
	generateQuestion(e, t) {
		return Ye(e, t);
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
}, $e = "math.geometry.baseline-position";
//#endregion
//#region packages/baseline-positional-language/src/rng.ts
function et(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function F(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-positional-language/src/generate.ts
var tt = [
	"🐱 the cat",
	"🐶 the dog",
	"⭐ the star",
	"🧸 the toy"
], I = [
	"📦 the box",
	"🪑 the chair",
	"🛏️ the bed",
	"🌳 the tree"
], nt = [
	"on",
	"under",
	"behind",
	"between",
	"next-to"
], rt = {
	on: "on",
	under: "under",
	behind: "behind",
	between: "between",
	"next-to": "next to"
};
function it(e) {
	return e === "P" || e === 1;
}
function at(e, t, n, r) {
	switch (e) {
		case "on": return `${t}\n${n}`;
		case "under": return `${n}\n${t}`;
		case "behind": return `${n}${t}`;
		case "next-to": return `${t}  ${n}`;
		case "between": return `${n}  ${t}  ${r}`;
	}
}
function ot(e) {
	let t = [...nt];
	for (let n = t.length - 1; n > 0; n--) {
		let r = F(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function st(e, t) {
	if (!it(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = et(t), r = nt[F(n, 0, nt.length - 1)], i = tt[F(n, 0, tt.length - 1)], a = F(n, 0, I.length - 1), o = F(n, 0, I.length - 1);
	for (; o === a;) o = F(n, 0, I.length - 1);
	let s = I[a], c = I[o], l = i.split(" ")[0], u = s.split(" ")[0], d = c.split(" ")[0], f = ot(n).map((e) => ({
		id: `position-${e}`,
		label: rt[e]
	}));
	return {
		id: `baseline-positional-language-${e}-${t}`,
		grade: e,
		position: r,
		subjectLabel: i,
		scene: at(r, l, u, d),
		options: f,
		correctOptionId: `position-${r}`
	};
}
//#endregion
//#region packages/baseline-positional-language/src/plugin.ts
function ct(e, t, n, r, i) {
	return {
		competencyId: $e,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function lt(e, t) {
	let n = et(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(st(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ut = {
	id: "baseline-positional-language",
	competencyIds: [$e],
	generateQuestion(e, t) {
		return st(e, t);
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
}, dt = "math.geometry.baseline-shapes";
//#endregion
//#region packages/baseline-shape-recognition/src/rng.ts
function ft(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function pt(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-shape-recognition/src/generate.ts
var mt = [
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
function ht(e) {
	return e === "P" || e === 1;
}
function gt(e) {
	let t = mt.map((e) => e.name);
	for (let n = t.length - 1; n > 0; n--) {
		let r = pt(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function _t(e, t) {
	if (!ht(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = ft(t), r = mt[pt(n, 0, mt.length - 1)], i = gt(n).map((e) => ({
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
function vt(e, t, n, r, i) {
	return {
		competencyId: dt,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function yt(e, t) {
	let n = ft(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(_t(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var bt = {
	id: "baseline-shape-recognition",
	competencyIds: [dt],
	generateQuestion(e, t) {
		return _t(e, t);
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
function xt(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function L(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-addition/src/generate.ts
function St(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ct(e) {
	let t = L(e, 0, 9);
	return {
		operandA: t,
		operandB: L(e, 0, 9 - t)
	};
}
function wt(e) {
	let t = L(e, 1, 9);
	return {
		operandA: t,
		operandB: L(e, Math.max(1, 10 - t), 9)
	};
}
function Tt(e) {
	let t = L(e, 0, 9), n = L(e, 0, 9 - t);
	return {
		operandA: L(e, 1, 9) * 10 + n,
		operandB: t
	};
}
function Et(e) {
	let t = L(e, 1, 9);
	return {
		onesA: L(e, Math.max(0, 10 - t), 9),
		onesB: t
	};
}
function Dt(e) {
	let { onesA: t, onesB: n } = Et(e), r = L(e, 1, 9), i = L(e, 1, 9);
	return {
		operandA: r * 10 + t,
		operandB: i * 10 + n
	};
}
function Ot(e) {
	let { onesA: t, onesB: n } = Et(e), r = L(e, 0, 9), i = L(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = L(e, +!a, 9);
	return {
		operandA: i,
		operandB: (a ? L(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function kt(e, t) {
	if (!St(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = xt(t), { operandA: r, operandB: i } = e === 1 ? Ct(n) : e === 2 ? wt(n) : e === 3 ? Tt(n) : e === 4 ? Dt(n) : Ot(n);
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
var At = "math.addition.mental";
function jt(e, t, n, r, i) {
	return {
		competencyId: At,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Mt(e, t) {
	let n = xt(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(kt(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Nt = {
	id: "mental-addition",
	competencyIds: [At],
	generateQuestion(e, t) {
		return kt(e, t);
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
function Pt(e) {
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
//#region packages/mental-division/src/generate.ts
function Ft(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function z(e, t) {
	return {
		divisor: R(e, 1, t),
		correctQuotient: R(e, 0, t)
	};
}
function It(e) {
	return {
		divisor: R(e, 1, 9),
		correctQuotient: R(e, 11, 20)
	};
}
function Lt(e, t) {
	if (!Ft(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Pt(t), { divisor: r, correctQuotient: i } = e === 1 ? z(n, 2) : e === 2 ? z(n, 5) : e === 3 ? z(n, 10) : e === 4 ? z(n, 12) : It(n);
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
var Rt = "math.division.mental";
function zt(e, t, n, r, i) {
	return {
		competencyId: Rt,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Bt(e, t) {
	let n = Pt(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Lt(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Vt = {
	id: "mental-division",
	competencyIds: [Rt],
	generateQuestion(e, t) {
		return Lt(e, t);
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
function Ht(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ut(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-multiplication/src/generate.ts
function Wt(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Gt(e, t) {
	return {
		factorA: Ut(e, 0, t),
		factorB: Ut(e, 0, t)
	};
}
function Kt(e) {
	return {
		factorA: Ut(e, 11, 20),
		factorB: Ut(e, 0, 9)
	};
}
function qt(e, t) {
	if (!Wt(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ht(t), { factorA: r, factorB: i } = e === 1 ? Gt(n, 2) : e === 2 ? Gt(n, 5) : e === 3 ? Gt(n, 10) : e === 4 ? Gt(n, 12) : Kt(n);
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
var Jt = "math.multiplication.mental";
function Yt(e, t, n, r, i) {
	return {
		competencyId: Jt,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Xt(e, t) {
	let n = Ht(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(qt(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Zt = {
	id: "mental-multiplication",
	competencyIds: [Jt],
	generateQuestion(e, t) {
		return qt(e, t);
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
function Qt(e) {
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
//#region packages/mental-subtraction/src/generate.ts
function $t(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function en(e) {
	let t = B(e, 0, 9);
	return {
		correctDifference: t,
		subtrahend: B(e, 0, 9 - t)
	};
}
function tn(e) {
	let t = B(e, 1, 9);
	return {
		correctDifference: t,
		subtrahend: B(e, Math.max(1, 10 - t), 9)
	};
}
function nn(e) {
	let t = B(e, 0, 9), n = B(e, 0, 9 - t);
	return {
		correctDifference: B(e, 1, 9) * 10 + n,
		subtrahend: t
	};
}
function rn(e) {
	let t = B(e, 1, 9);
	return {
		onesDiff: B(e, Math.max(0, 10 - t), 9),
		onesSubtrahend: t
	};
}
function an(e) {
	let { onesDiff: t, onesSubtrahend: n } = rn(e), r = B(e, 1, 9), i = B(e, 1, 9);
	return {
		correctDifference: r * 10 + t,
		subtrahend: i * 10 + n
	};
}
function on(e) {
	let { onesDiff: t, onesSubtrahend: n } = rn(e), r = B(e, 0, 9), i = B(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = B(e, +!a, 9);
	return {
		correctDifference: i,
		subtrahend: (a ? B(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function sn(e, t) {
	if (!$t(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Qt(t), { correctDifference: r, subtrahend: i } = e === 1 ? en(n) : e === 2 ? tn(n) : e === 3 ? nn(n) : e === 4 ? an(n) : on(n);
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
var cn = "math.subtraction.mental";
function ln(e, t, n, r, i) {
	return {
		competencyId: cn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function un(e, t) {
	let n = Qt(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(sn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var dn = {
	id: "mental-subtraction",
	competencyIds: [cn],
	generateQuestion(e, t) {
		return sn(e, t);
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
}, fn = "math.number-sense.counting-range";
//#endregion
//#region packages/number-sense-counting-range/src/rng.ts
function pn(e) {
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
//#region packages/number-sense-counting-range/src/generate.ts
function mn(e) {
	return Number.isInteger(e) && e >= 1 && e <= 4;
}
var hn = {
	1: 100,
	2: 1e3,
	3: 1e4,
	4: 1e6
};
function gn(e, t, n, r) {
	let i = V(r, 0, n - 1);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "next",
		prompt: `What number comes right after ${i}?`,
		numericAnswer: i + 1
	};
}
function _n(e, t, n, r) {
	let i = V(r, 1, n);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "previous",
		prompt: `What number comes right before ${i}?`,
		numericAnswer: i - 1
	};
}
function vn(e, t, n, r) {
	let i = V(r, 0, n), a = V(r, 0, n);
	for (; a === i;) a = V(r, 0, n);
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
function yn(e, t) {
	if (!mn(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..4)`);
	let n = hn[e], r = pn(t);
	switch (V(r, 0, 2)) {
		case 0: return gn(e, t, n, r);
		case 1: return _n(e, t, n, r);
		default: return vn(e, t, n, r);
	}
}
//#endregion
//#region packages/number-sense-counting-range/src/plugin.ts
function bn(e, t, n, r, i) {
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
function xn(e, t) {
	let n = pn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(yn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Sn = {
	id: "number-sense-counting-range",
	competencyIds: [fn],
	generateQuestion(e, t) {
		return yn(e, t);
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
}, Cn = "math.number-sense.negative-numbers";
//#endregion
//#region packages/number-sense-negative-numbers/src/rng.ts
function wn(e) {
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
//#region packages/number-sense-negative-numbers/src/generate.ts
function Tn(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function En(e, t, n, r) {
	let i = H(n, r[0], r[1]), a = n() < .5 ? "after" : "before", o = a === "after" ? i + 1 : i - 1;
	return {
		id: `number-sense-negative-numbers-${e}-${t}`,
		grade: e,
		kind: "position",
		prompt: `What number comes right ${a} ${i}?`,
		numericAnswer: o
	};
}
function Dn(e, t, n, r, i) {
	let a = H(n, i[0], i[1]), o = H(n, i[0], i[1]);
	for (; o === a;) o = H(n, i[0], i[1]);
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
function On(e, t) {
	if (!Tn(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = wn(t);
	if (e === 1) return En(e, t, n, [-10, 10]);
	if (e === 2) return En(e, t, n, [-20, 20]);
	if (e === 3) return Dn(e, t, n, "temperature", [-20, 20]);
	if (e === 4) return Dn(e, t, n, "debt", [-50, -1]);
	if (n() < .5) return En(e, t, n, [-100, 100]);
	let r = n() < .5 ? "temperature" : "debt";
	return Dn(e, t, n, r, r === "debt" ? [-50, -1] : [-100, 100]);
}
//#endregion
//#region packages/number-sense-negative-numbers/src/plugin.ts
function kn(e, t, n, r, i) {
	return {
		competencyId: Cn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function An(e, t) {
	let n = wn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(On(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var jn = {
	id: "number-sense-negative-numbers",
	competencyIds: [Cn],
	generateQuestion(e, t) {
		return On(e, t);
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
}, Mn = "math.number-sense.odd-even";
//#endregion
//#region packages/number-sense-odd-even/src/rng.ts
function Nn(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Pn(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-odd-even/src/generate.ts
function Fn(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var In = {
	1: 20,
	2: 100,
	3: 1e3,
	4: 1e4,
	5: 1e4
};
function Ln(e) {
	return e % 2 == 0 ? "even" : "odd";
}
function Rn(e, t, n) {
	let r = t === "even" ? 0 : 1;
	return r + 2 * Pn(e, 0, Math.floor((n - r) / 2) + 1 - 1);
}
function zn(e, t, n) {
	let r = In[e], i = Pn(n, 0, r);
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
		correctOptionId: Ln(i)
	};
}
function Bn(e, t, n) {
	let r = n() < .5 ? "odd" : "even", i = r === "odd" ? "even" : "odd", a = [];
	for (; a.length < 3;) {
		let e = Rn(n, r, 1e4);
		a.includes(e) || a.push(e);
	}
	let o = Rn(n, i, 1e4), s = [
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
		let t = Pn(n, 0, e), r = s[e];
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
function Vn(e, t) {
	if (!Fn(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Nn(t);
	return e === 5 && n() < .5 ? Bn(e, t, n) : zn(e, t, n);
}
//#endregion
//#region packages/number-sense-odd-even/src/plugin.ts
function Hn(e, t, n, r, i) {
	return {
		competencyId: Mn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Un(e, t) {
	let n = Nn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Vn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Wn = {
	id: "number-sense-odd-even",
	competencyIds: [Mn],
	generateQuestion(e, t) {
		return Vn(e, t);
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
}, Gn = "math.number-sense.ordinals";
//#endregion
//#region packages/number-sense-ordinals/src/ordinal.ts
function Kn(e) {
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
function qn(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Jn(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-ordinals/src/generate.ts
var Yn = {
	1: 5,
	2: 10,
	3: 20,
	4: 50,
	5: 100
};
function Xn(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
function Zn(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = Jn(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Qn(e, t) {
	let n = Zn(e, t), r = n.map((e, t) => ({
		id: `opt-${t}`,
		label: e.label
	}));
	return {
		options: r,
		correctOptionId: r[n.findIndex((e) => e.correct)].id
	};
}
function $n(e, t) {
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
function er(e, t, n, r) {
	let i = new Set(t), a = [];
	for (let t of e) {
		if (a.length >= r) break;
		i.has(t) || (a.push(t), i.add(t));
	}
	for (let e = 1; e <= n && a.length < r; e++) i.has(e) || (a.push(e), i.add(e));
	return a;
}
function tr(e, t, n, r) {
	let i = er($n(e, t), /* @__PURE__ */ new Set([e]), t, 3);
	return Qn([{
		label: r(e),
		correct: !0
	}, ...i.map((e) => ({
		label: r(e),
		correct: !1
	}))], n);
}
function nr(e, t) {
	if (!Xn(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Yn[e], r = qn(t), i = r() < .5 ? "number-to-word" : "word-to-number", a = Jn(r, 1, n), { options: o, correctOptionId: s } = i === "number-to-word" ? tr(a, n, r, Kn) : tr(a, n, r, String), c = i === "number-to-word" ? `What is the ordinal (position) word for ${a}?` : `Which number is ${Kn(a)}?`;
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
function rr(e, t, n, r, i) {
	return {
		competencyId: Gn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ir(e, t) {
	let n = qn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(nr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ar = {
	id: "number-sense-ordinals",
	competencyIds: [Gn],
	generateQuestion(e, t) {
		return nr(e, t);
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
}, or = "math.number-sense.primes-factors";
//#endregion
//#region packages/number-sense-primes-factors/src/rng.ts
function sr(e) {
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
//#region packages/number-sense-primes-factors/src/generate.ts
function cr(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function lr(e) {
	if (e < 2) return !1;
	for (let t = 2; t * t <= e; t++) if (e % t === 0) return !1;
	return !0;
}
function ur(e, t) {
	return t === 0 ? e : ur(t, e % t);
}
function dr(e, t) {
	return e * t / ur(e, t);
}
var fr = {
	1: 20,
	2: 50,
	5: 50
}, pr = {
	3: 50,
	4: 100,
	5: 100
};
function mr(e, t) {
	let n = [];
	for (let e = 2; e < t; e++) t % e === 0 && n.push(e);
	return n.length === 0 ? U(e, 2, t - 1) : n[U(e, 0, n.length - 1)];
}
function hr(e, t) {
	let n = U(e, 2, t - 1), r = 0;
	for (; t % n === 0 && r < 20;) n = U(e, 2, t - 1), r++;
	return n;
}
function gr(e, t, n) {
	let r = U(n, 2, fr[e] ?? 50);
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
		correctOptionId: lr(r) ? "yes" : "no",
		n: r
	};
}
function _r(e, t, n) {
	let r = U(n, 4, (pr[e] ?? 100) - 1), i = n() < .5 ? mr(n, r) : hr(n, r);
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
function vr(e, t, n) {
	let r = U(n, 2, 12), i = U(n, 2, 12);
	for (; i === r;) i = U(n, 2, 12);
	return {
		id: `number-sense-primes-factors-${e}-${t}`,
		grade: e,
		kind: "common-multiple",
		prompt: `What is the smallest common multiple of ${r} and ${i}?`,
		numericAnswer: dr(r, i)
	};
}
function yr(e, t) {
	if (!cr(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = sr(t);
	if (e === 1 || e === 2) return gr(e, t, n);
	if (e === 3 || e === 4) return _r(e, t, n);
	switch (U(n, 0, 2)) {
		case 0: return gr(e, t, n);
		case 1: return _r(e, t, n);
		default: return vr(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-primes-factors/src/plugin.ts
function br(e, t, n, r, i) {
	return {
		competencyId: or,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function xr(e, t) {
	let n = sr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(yr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Sr = {
	id: "number-sense-primes-factors",
	competencyIds: [or],
	generateQuestion(e, t) {
		return yr(e, t);
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
}, Cr = "math.number-sense.roman-numerals";
//#endregion
//#region packages/number-sense-roman-numerals/src/rng.ts
function wr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Tr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-roman-numerals/src/generate.ts
var Er = [
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
function W(e) {
	let t = e, n = "";
	for (let [e, r] of Er) for (; t >= e;) n += r, t -= e;
	return n;
}
function Dr(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Or = {
	1: [1, 10],
	2: [1, 50],
	3: [1, 100],
	4: [1, 500],
	5: [1, 1e3]
};
function kr(e, t) {
	return e <= 3 || t() < .5 ? "read" : "write";
}
function Ar(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = Tr(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function jr(e, t, n, r) {
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
function Mr(e, t, n) {
	let [r, i] = t, a = Ar([e, ...jr(e, r, i, 3)], n), o = a.map((e, t) => ({
		id: `opt-${t}`,
		label: String(e)
	})), s = a.indexOf(e);
	return {
		prompt: `Which number does the Roman numeral ${W(e)} represent?`,
		options: o,
		correctOptionId: `opt-${s}`
	};
}
function Nr(e, t, n) {
	let [r, i] = t, a = jr(e, r, i, 3), o = Ar([W(e), ...a.map(W)], n), s = o.map((e, t) => ({
		id: `opt-${t}`,
		label: e
	})), c = o.indexOf(W(e));
	return {
		prompt: `Which Roman numeral represents ${e}?`,
		options: s,
		correctOptionId: `opt-${c}`
	};
}
function Pr(e, t) {
	if (!Dr(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = wr(t), r = Or[e], i = kr(e, n), a = Tr(n, r[0], r[1]), { prompt: o, options: s, correctOptionId: c } = i === "read" ? Mr(a, r, n) : Nr(a, r, n);
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
function Fr(e, t, n, r, i) {
	return {
		competencyId: Cr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Ir(e, t) {
	let n = wr(t), r = [];
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
	id: "number-sense-roman-numerals",
	competencyIds: [Cr],
	generateQuestion(e, t) {
		return Pr(e, t);
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
function Rr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function zr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-skip-counting/src/generate.ts
function Br(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Vr() {
	return {
		step: 2,
		maxRange: 20
	};
}
function Hr() {
	return {
		step: 2,
		maxRange: 50
	};
}
function Ur() {
	return {
		step: 5,
		maxRange: 100
	};
}
function Wr() {
	return {
		step: 10,
		maxRange: 200
	};
}
function Gr(e) {
	let t = [
		2,
		5,
		10,
		25,
		50
	];
	return {
		step: t[zr(e, 0, t.length - 1)],
		maxRange: 500
	};
}
function Kr(e, t) {
	if (!Br(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Rr(t), { step: r, maxRange: i } = e === 1 ? Vr() : e === 2 ? Hr() : e === 3 ? Ur() : e === 4 ? Wr() : Gr(n), a = zr(n, 0, (i - r * 4) / r) * r, o = a, s = a + r, c = a + r * 2, l = a + r * 3;
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
var qr = "math.number-sense.skip-counting";
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
	let n = Rr(t), r = [];
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
	id: "number-sense-skip-counting",
	competencyIds: [qr],
	generateQuestion(e, t) {
		return Kr(e, t);
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
function Zr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Qr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-squares/src/generate.ts
function $r(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
var ei = [{
	id: "yes",
	label: "Yes"
}, {
	id: "no",
	label: "No"
}], ti = {
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
}, ni = {
	4: {
		baseMin: 1,
		baseMax: 8
	},
	5: {
		baseMin: 1,
		baseMax: 12
	}
};
function ri(e) {
	return Number.isInteger(Math.sqrt(e));
}
function ii(e, t, n) {
	let { baseMin: r, baseMax: i, numberMin: a, numberMax: o } = ti[e], s = n() < .5 ? (() => {
		let e = Qr(n, r, i);
		return e * e;
	})() : Qr(n, a, o), c = ri(s) ? "yes" : "no";
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recognize",
		prompt: `Is ${s} a square number?`,
		options: ei,
		correctOptionId: c
	};
}
function ai(e, t, n) {
	let { baseMin: r, baseMax: i } = ni[e], a = Qr(n, r, i);
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recall",
		prompt: `What is ${a} squared?`,
		numericAnswer: a * a
	};
}
function oi(e, t) {
	if (!$r(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Zr(t);
	switch (e) {
		case 1:
		case 2:
		case 3: return ii(e, t, n);
		case 4:
		case 5: return ai(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-squares/src/plugin.ts
var si = "math.number-sense.squares";
function ci(e, t, n, r, i) {
	return {
		competencyId: si,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function li(e, t) {
	let n = Zr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(oi(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ui = {
	id: "number-sense-squares",
	competencyIds: [si],
	generateQuestion(e, t) {
		return oi(e, t);
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
//#region packages/place-value-multiply-divide-ten/src/generate.ts
function fi(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function pi(e) {
	return `${Math.floor(e / 10)}.${e % 10}`;
}
function mi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 10`,
		correctAnswer: t * 10
	};
}
function hi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 100`,
		correctAnswer: t * 100
	};
}
function gi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 1000`,
		correctAnswer: t * 1e3
	};
}
function _i(e) {
	let t = e() < .5 ? 10 : 100, n = G(e, 1, 999);
	return {
		operator: "÷",
		equation: `${n * t} ÷ ${t}`,
		correctAnswer: n
	};
}
function vi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 1e3} ÷ 1000`,
		correctAnswer: t
	};
}
function yi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${pi(t)} × 10`,
		correctAnswer: t
	};
}
function bi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${pi(t)} × 100`,
		correctAnswer: t * 10
	};
}
function xi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 10} ÷ 10`,
		correctAnswer: t
	};
}
var Si = [
	vi,
	yi,
	bi,
	xi
];
function Ci(e) {
	let t = Si[G(e, 0, Si.length - 1)];
	return t(e);
}
function wi(e, t) {
	if (!fi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = di(t), { operator: r, equation: i, correctAnswer: a } = e === 1 ? mi(n) : e === 2 ? hi(n) : e === 3 ? gi(n) : e === 4 ? _i(n) : Ci(n);
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
var Ti = "math.place-value.multiply-divide-ten";
function Ei(e, t, n, r, i) {
	return {
		competencyId: Ti,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Di(e, t) {
	let n = di(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(wi(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Oi = {
	id: "place-value-multiply-divide-ten",
	competencyIds: [Ti],
	generateQuestion(e, t) {
		return wi(e, t);
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
function ki(e) {
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
//#region packages/place-value-powers-of-ten/src/generate.ts
function Ai(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var ji = [
	1,
	10,
	100,
	1e3
];
function Mi(e) {
	return {
		operand: K(e, 1, 99),
		magnitude: 1
	};
}
function Ni(e) {
	return {
		operand: K(e, 10, 999),
		magnitude: 10
	};
}
function Pi(e) {
	return {
		operand: K(e, 100, 9999),
		magnitude: 100
	};
}
function Fi(e) {
	return {
		operand: K(e, 1e3, 99999),
		magnitude: 1e3
	};
}
function Ii(e) {
	let t = ji[K(e, 0, ji.length - 1)];
	return {
		operand: K(e, t, 999999),
		magnitude: t
	};
}
function Li(e, t) {
	if (!Ai(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = ki(t), { operand: r, magnitude: i } = e === 1 ? Mi(n) : e === 2 ? Ni(n) : e === 3 ? Pi(n) : e === 4 ? Fi(n) : Ii(n), a = n() < .5 ? "+" : "-", o = a === "+" ? r + i : r - i;
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
var Ri = "math.place-value.powers-of-ten";
function zi(e, t, n, r, i) {
	return {
		competencyId: Ri,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Bi(e, t) {
	let n = ki(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Li(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Vi = {
	id: "place-value-powers-of-ten",
	competencyIds: [Ri],
	generateQuestion(e, t) {
		return Li(e, t);
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
}, Hi = "math.place-value.rounding";
//#endregion
//#region packages/place-value-rounding/src/rng.ts
function Ui(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Wi(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-rounding/src/generate.ts
function Gi(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Ki(e, t) {
	let n = e % t, r = e - n;
	return n * 2 >= t ? r + t : r;
}
function qi(e, t) {
	return e - e % t;
}
function Ji(e, t) {
	let n = e % t;
	return n === 0 ? e : e - n + t;
}
function q(e, t) {
	let n = String(e).padStart(t + 1, "0");
	return `${n.slice(0, -t)}.${n.slice(-t)}`;
}
function Yi(e, t, n) {
	let r = /* @__PURE__ */ new Set([e]), i = [];
	for (let e of t) if (!r.has(e) && (r.add(e), i.push(e), i.length === 3)) return i;
	let a = 1;
	for (; i.length < 3;) {
		let e = n(a);
		a += 1, r.has(e) || (r.add(e), i.push(e));
	}
	return i;
}
function Xi(e, t, n, r, i, a) {
	let o = [{
		label: i,
		isCorrect: !0
	}, ...a.map((e) => ({
		label: e,
		isCorrect: !1
	}))];
	for (let e = o.length - 1; e > 0; e--) {
		let t = Wi(n, 0, e), r = o[e];
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
var Zi = {
	1: 999,
	2: 9999,
	3: 99999
}, Qi = {
	1: 10,
	2: 100,
	3: 1e3
}, $i = {
	1: "10",
	2: "100",
	3: "1,000"
};
function ea(e, t, n) {
	let r = Qi[e], i = Wi(n, 0, Zi[e]), a = Ki(i, r), o = String(a), s = Yi(o, [
		qi(i, r),
		Ji(i, r),
		i,
		a - r,
		a + r,
		a - 2 * r,
		a + 2 * r
	].filter((e) => e >= 0).map(String), (e) => String(a + (e + 2) * r));
	return Xi(e, t, n, `Round ${i} to the nearest ${$i[e]}.`, o, s);
}
var ta = {
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
}, J = 10;
function na(e, t, n) {
	let { maxScaled: r, sourceDecimalPlaces: i, targetDecimalPlaces: a, precisionLabel: o } = ta[e], s = Wi(n, 0, r), c = q(s, i), l = Ki(s, J) / J, u = q(l, a), d = qi(s, J) / J, f = Ji(s, J) / J, p = Yi(u, [
		q(d, a),
		q(f, a),
		c,
		...[
			l - 1,
			l + 1,
			l - 2,
			l + 2
		].filter((e) => e >= 0).map((e) => q(e, a))
	], (e) => q(l + e + 2, a));
	return Xi(e, t, n, `Round ${c} to ${o} decimal place${o === "1" ? "" : "s"}.`, u, p);
}
function ra(e, t) {
	if (!Gi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ui(t);
	return e === 1 || e === 2 || e === 3 ? ea(e, t, n) : na(e, t, n);
}
//#endregion
//#region packages/place-value-rounding/src/plugin.ts
function ia(e, t, n, r, i) {
	return {
		competencyId: Hi,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function aa(e, t) {
	let n = Ui(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ra(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var oa = {
	id: "place-value-rounding",
	competencyIds: [Hi],
	generateQuestion(e, t) {
		return ra(e, t);
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
}, sa = "math.place-value.understanding";
//#endregion
//#region packages/place-value-understanding/src/rng.ts
function ca(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function la(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-understanding/src/generate.ts
function ua(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Y = {
	name: "units",
	value: 1,
	decimals: 0
}, X = {
	name: "tens",
	value: 10,
	decimals: 0
}, da = {
	name: "hundreds",
	value: 100,
	decimals: 0
}, fa = {
	name: "thousands",
	value: 1e3,
	decimals: 0
}, pa = {
	name: "ten-thousands",
	value: 1e4,
	decimals: 0
}, ma = {
	name: "hundred-thousands",
	value: 1e5,
	decimals: 0
}, ha = {
	name: "millions",
	value: 1e6,
	decimals: 0
}, ga = {
	name: "ones",
	value: 1,
	decimals: 0
}, _a = {
	name: "tenths",
	value: .1,
	decimals: 1
}, va = {
	name: "hundredths",
	value: .01,
	decimals: 2
}, ya = {
	name: "thousandths",
	value: .001,
	decimals: 3
}, Z = {
	1: [Y, X],
	2: [
		Y,
		X,
		da
	],
	3: [
		Y,
		X,
		da,
		fa
	],
	4: [
		Y,
		X,
		da,
		fa,
		pa,
		ma,
		ha
	]
}, ba = [
	ya,
	va,
	_a,
	ga
], xa = [
	ya,
	va,
	_a
], Sa = {
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
		composePlaces: ba,
		scopePlaces: xa,
		isDecimal: !0
	}
};
function Ca(e, t) {
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
		let r = la(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n.slice(0, t);
}
function Q(e, t) {
	return t.decimals === 0 ? String(e * t.value) : `0.${"0".repeat(t.decimals - 1)}${e}`;
}
function wa(e, t) {
	if (!e.isDecimal) {
		let n = t.reduce((t, n, r) => t + n * e.composePlaces[r].value, 0);
		return String(n);
	}
	let [n, r, i, a] = t;
	return `${a}.${i}${r}${n}`;
}
function Ta(e) {
	return e.length === 1 ? e[0] : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
function Ea(e, t, n) {
	let r = t.map((e, t) => ({
		label: e,
		isCorrect: t === n
	}));
	for (let t = r.length - 1; t > 0; t--) {
		let n = la(e, 0, t), i = r[t];
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
function Da(e, t, n, r) {
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
function Oa(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set([n]), a = t.length;
	function o(t) {
		if (r.length >= 3) return;
		let n = wa(e, t);
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
function ka(e, t, n, r) {
	let i = Ca(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = wa(r, i), s = la(n, 0, r.scopePlaces.length - 1), c = r.scopePlaces[s], l = Q(a.get(c.name), c), { options: u, correctOptionId: d } = Ea(n, [l, ...Da(r.scopePlaces, s, a, l)], 0);
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
function Aa(e, t, n, r) {
	let i = Ca(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = wa(r, i), { options: s, correctOptionId: c } = Ea(n, [o, ...Oa(r, i, o)], 0), l = [...r.composePlaces].reverse(), u = [...i].reverse(), d = l.map((e, t) => `${u[t]} ${e.name}`), f = `Which number ${r.isDecimal ? "is" : "has"} ${Ta(d)}?`;
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
function ja(e, t) {
	if (!ua(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = ca(t), r = n() < .5 ? "digit-value" : "compose", i = Sa[e];
	return r === "digit-value" ? ka(e, t, n, i) : Aa(e, t, n, i);
}
function Ma(e, t) {
	return ja(e, t).question;
}
//#endregion
//#region packages/place-value-understanding/src/plugin.ts
function Na(e, t, n, r, i) {
	return {
		competencyId: sa,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Pa(e, t) {
	let n = ca(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ma(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Fa = {
	id: "place-value-understanding",
	competencyIds: [sa],
	generateQuestion(e, t) {
		return Ma(e, t);
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
function Ia(e, t) {
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
function La(e) {
	switch (e.kind) {
		case "duplicate-plugin-id": return `duplicate plugin id: "${e.id}"`;
		case "unknown-competency-reference": return `plugin "${e.pluginId}" references unknown competency id: "${e.competencyId}"`;
	}
}
function Ra(e, t) {
	let n = Ia(e, t);
	if (!n.valid) {
		let e = n.errors.map(La).join("; ");
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
var za = Ra([
	Nt,
	dn,
	Zt,
	Vt,
	Ve,
	Te,
	Qe,
	ge,
	bt,
	ut,
	Sn,
	Xr,
	Wn,
	ar,
	jn,
	Sr,
	ui,
	Lr,
	Fa,
	Vi,
	oa,
	Oi
], [
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
	_,
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
	O
]);
//#endregion
//#region src/exerciseDefinitions.ts
function $(e, t) {
	let n = za.getPlugin(e);
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
var Ba = [
	{
		key: "addition",
		label: "Addition",
		icon: "➕",
		pluginId: "mental-addition",
		competency: r,
		competencies: [r],
		createSession(e, t) {
			return $("mental-addition", Mt(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => jt(e, t, n, r, i)
	},
	{
		key: "subtraction",
		label: "Subtraction",
		icon: "➖",
		pluginId: "mental-subtraction",
		competency: i,
		competencies: [i],
		createSession(e, t) {
			return $("mental-subtraction", un(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => ln(e, t, n, r, i)
	},
	{
		key: "multiplication",
		label: "Multiplication",
		icon: "✖️",
		pluginId: "mental-multiplication",
		competency: a,
		competencies: [a],
		createSession(e, t) {
			return $("mental-multiplication", Xt(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Yt(e, t, n, r, i)
	},
	{
		key: "division",
		label: "Division",
		icon: "➗",
		pluginId: "mental-division",
		competency: o,
		competencies: [o],
		createSession(e, t) {
			return $("mental-division", Bt(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => zt(e, t, n, r, i)
	},
	{
		key: "baseline-counting-quantities",
		label: "Counting & Quantities",
		icon: "🔢",
		pluginId: "baseline-counting-quantities",
		competency: s,
		competencies: [
			s,
			c,
			l,
			u
		],
		competencyLabels: {
			[s.id]: "Counting to 20",
			[c.id]: "Subitizing to 5",
			[l.id]: "Recognising digits",
			[u.id]: "Comparing groups"
		},
		createSession(e, t) {
			return $("baseline-counting-quantities", Be(e, t));
		},
		createMasterySignal: (e, t, n, r) => ze(e, t, n, r)
	},
	{
		key: "baseline-concrete-addition-subtraction",
		label: "Concrete Addition & Subtraction",
		icon: "🍎",
		pluginId: "baseline-concrete-addition-subtraction",
		competency: d,
		competencies: [d],
		createSession(e, t) {
			return $("baseline-concrete-addition-subtraction", we(e, t));
		},
		createMasterySignal: (e, t, n, r) => Ce(e, t, n, r)
	},
	{
		key: "baseline-direct-comparison",
		label: "Direct Comparison",
		icon: "⚖️",
		pluginId: "baseline-direct-comparison",
		competency: f,
		competencies: [f],
		createSession(e, t) {
			return $("baseline-direct-comparison", Ze(e, t));
		},
		createMasterySignal: (e, t, n, r) => Xe(e, t, n, r)
	},
	{
		key: "baseline-calendar-time-basics",
		label: "Calendar & Time Basics",
		icon: "📅",
		pluginId: "baseline-calendar-time-basics",
		competency: p,
		competencies: [p, m],
		competencyLabels: {
			[p.id]: "Order of the day",
			[m.id]: "Days of the week"
		},
		createSession(e, t) {
			return $("baseline-calendar-time-basics", he(e, t));
		},
		createMasterySignal: (e, t, n, r) => me(e, t, n, r)
	},
	{
		key: "baseline-shape-recognition",
		label: "Shape Recognition",
		icon: "🔺",
		pluginId: "baseline-shape-recognition",
		competency: h,
		competencies: [h],
		createSession(e, t) {
			return $("baseline-shape-recognition", yt(e, t));
		},
		createMasterySignal: (e, t, n, r) => vt(e, t, n, r)
	},
	{
		key: "baseline-positional-language",
		label: "Positional Language",
		icon: "📍",
		pluginId: "baseline-positional-language",
		competency: g,
		competencies: [g],
		createSession(e, t) {
			return $("baseline-positional-language", lt(e, t));
		},
		createMasterySignal: (e, t, n, r) => ct(e, t, n, r)
	},
	{
		key: "number-sense-counting-range",
		label: "Counting & Number Range",
		icon: "🔢",
		pluginId: "number-sense-counting-range",
		competency: _,
		competencies: [_],
		createSession(e, t) {
			return $("number-sense-counting-range", xn(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => bn(e, t, n, r, i)
	},
	{
		key: "number-sense-skip-counting",
		label: "Skip Counting",
		icon: "➡️",
		pluginId: "number-sense-skip-counting",
		competency: v,
		competencies: [v],
		createSession(e, t) {
			return $("number-sense-skip-counting", Yr(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Jr(e, t, n, r, i)
	},
	{
		key: "number-sense-odd-even",
		label: "Odd & Even",
		icon: "🔀",
		pluginId: "number-sense-odd-even",
		competency: y,
		competencies: [y],
		createSession(e, t) {
			return $("number-sense-odd-even", Un(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Hn(e, t, n, r, i)
	},
	{
		key: "number-sense-ordinals",
		label: "Ordinal Numbers",
		icon: "🥇",
		pluginId: "number-sense-ordinals",
		competency: b,
		competencies: [b],
		createSession(e, t) {
			return $("number-sense-ordinals", ir(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => rr(e, t, n, r, i)
	},
	{
		key: "number-sense-negative-numbers",
		label: "Negative Numbers",
		icon: "🌡️",
		pluginId: "number-sense-negative-numbers",
		competency: x,
		competencies: [x],
		createSession(e, t) {
			return $("number-sense-negative-numbers", An(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => kn(e, t, n, r, i)
	},
	{
		key: "number-sense-primes-factors",
		label: "Primes & Factors",
		icon: "🧮",
		pluginId: "number-sense-primes-factors",
		competency: S,
		competencies: [S],
		createSession(e, t) {
			return $("number-sense-primes-factors", xr(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => br(e, t, n, r, i)
	},
	{
		key: "number-sense-squares",
		label: "Square Numbers",
		icon: "⬜",
		pluginId: "number-sense-squares",
		competency: C,
		competencies: [C],
		createSession(e, t) {
			return $("number-sense-squares", li(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => ci(e, t, n, r, i)
	},
	{
		key: "number-sense-roman-numerals",
		label: "Roman Numerals",
		icon: "🏛️",
		pluginId: "number-sense-roman-numerals",
		competency: w,
		competencies: [w],
		createSession(e, t) {
			return $("number-sense-roman-numerals", Ir(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Fr(e, t, n, r, i)
	},
	{
		key: "place-value-understanding",
		label: "Place Value Understanding",
		icon: "🔟",
		pluginId: "place-value-understanding",
		competency: T,
		competencies: [T],
		createSession(e, t) {
			return $("place-value-understanding", Pa(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Na(e, t, n, r, i)
	},
	{
		key: "place-value-powers-of-ten",
		label: "Add/Subtract Powers of Ten",
		icon: "➕",
		pluginId: "place-value-powers-of-ten",
		competency: E,
		competencies: [E],
		createSession(e, t) {
			return $("place-value-powers-of-ten", Bi(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => zi(e, t, n, r, i)
	},
	{
		key: "place-value-rounding",
		label: "Rounding",
		icon: "🔵",
		pluginId: "place-value-rounding",
		competency: D,
		competencies: [D],
		createSession(e, t) {
			return $("place-value-rounding", aa(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => ia(e, t, n, r, i)
	},
	{
		key: "place-value-multiply-divide-ten",
		label: "Multiply/Divide by Powers of Ten",
		icon: "✖️",
		pluginId: "place-value-multiply-divide-ten",
		competency: O,
		competencies: [O],
		createSession(e, t) {
			return $("place-value-multiply-divide-ten", Di(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Ei(e, t, n, r, i)
	}
], Va = {
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
}, Ha = !1;
function Ua() {
	Ha ||= !0;
}
var Wa = () => ({
	subjectId: "math",
	competencies: k,
	plugins: za.all(),
	exercises: Ba,
	mathematicsAreas: te,
	getMathematicsAreaForCompetency: ne,
	skillsReference: Va,
	register: Ua
});
//#endregion
export { k as allCompetencies, u as baselineCompareGroupsCompetency, d as baselineConcreteArithmeticCompetency, s as baselineCountingCompetency, p as baselineDayOrderCompetency, m as baselineDaysOfWeekCompetency, l as baselineDigitsCompetency, f as baselineDirectComparisonCompetency, g as baselinePositionCompetency, h as baselineShapesCompetency, c as baselineSubitizingCompetency, Wa as default, ne as getMathematicsAreaForCompetency, Ba as mathExercises, za as mathPluginRegistry, te as mathematicsAreas, r as mentalAdditionCompetency, o as mentalDivisionCompetency, a as mentalMultiplicationCompetency, i as mentalSubtractionCompetency, _ as numberSenseCountingRangeCompetency, x as numberSenseNegativeNumbersCompetency, y as numberSenseOddEvenCompetency, b as numberSenseOrdinalsCompetency, S as numberSensePrimesFactorsCompetency, w as numberSenseRomanNumeralsCompetency, v as numberSenseSkipCountingCompetency, C as numberSenseSquaresCompetency, O as placeValueMultiplyDivideTenCompetency, E as placeValuePowersOfTenCompetency, D as placeValueRoundingCompetency, T as placeValueUnderstandingCompetency, Va as skillsReference };
