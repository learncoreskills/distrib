import { validateCompetencyModel as e } from "@learncoreskills/competency-model";
import { createRegistry as t } from "@learncoreskills/plugin-engine";
//#region src/curriculum.ts
var n = {
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
}, r = {
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
}, i = {
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
}, a = {
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
}, o = {
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
}, s = {
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
}, c = {
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
}, l = {
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
}, u = {
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
}, d = {
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
}, f = {
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
}, p = {
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
}, m = {
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
}, h = {
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
}, g = {
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
}, _ = {
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
}, v = {
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
}, y = {
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
}, b = {
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
}, x = {
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
}, S = {
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
}, C = {
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
}, w = {
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
}, T = {
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
}, E = {
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
}, D = {
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
}, O = [
	n,
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
	D
], ee = e([{
	id: "mathematics",
	nameKey: "subject.mathematics.name"
}], O, O.map((e) => e.id));
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
function k(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/generate.ts
var ye = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function be(e) {
	return e === "P" || e === 1;
}
function xe(e, t, n) {
	let r = k(n, 1, 5), i = k(n, 1, 5);
	return {
		id: `baseline-concrete-addition-subtraction-add-${e}-${t}`,
		grade: e,
		operator: "+",
		leftCount: r,
		rightCount: i,
		emoji: ye[k(n, 0, ye.length - 1)],
		correctAnswer: r + i
	};
}
function Se(e, t, n) {
	let r = k(n, 2, 10), i = k(n, 1, r - 1);
	return {
		id: `baseline-concrete-addition-subtraction-sub-${e}-${t}`,
		grade: e,
		operator: "-",
		leftCount: r,
		rightCount: i,
		emoji: ye[k(n, 0, ye.length - 1)],
		correctAnswer: r - i
	};
}
function Ce(e, t) {
	if (!be(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = ve(t);
	return n() < .5 ? xe(e, t, n) : Se(e, t, n);
}
//#endregion
//#region packages/baseline-concrete-addition-subtraction/src/plugin.ts
function we(e, t, n, r, i) {
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
function Te(e, t) {
	let n = ve(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ce(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ee = {
	id: "baseline-concrete-addition-subtraction",
	competencyIds: [_e],
	generateQuestion(e, t) {
		return Ce(e, t);
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
}, De = "math.number-sense.baseline-counting", Oe = "math.number-sense.baseline-subitizing", ke = "math.number-sense.baseline-digits", Ae = "math.comparing-ordering.baseline-groups";
//#endregion
//#region packages/baseline-counting-quantities/src/rng.ts
function je(e) {
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
//#region packages/baseline-counting-quantities/src/generate.ts
var Me = [
	"🍎",
	"⭐",
	"🔵",
	"🚗",
	"🐳"
];
function Ne(e) {
	return e === "P" || e === 1;
}
function j(e) {
	return Me[A(e, 0, Me.length - 1)];
}
function Pe(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (; n.size < 3;) {
		let r = A(e, 0, 9);
		r !== t && n.add(r);
	}
	let r = [t, ...n];
	for (let t = r.length - 1; t > 0; t--) {
		let n = A(e, 0, t), i = r[t];
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
function Fe(e, t, n) {
	let r = A(n, 1, 20);
	return {
		id: `baseline-counting-quantities-counting-${e}-${t}`,
		kind: "counting",
		grade: e,
		competencyId: De,
		count: r,
		emoji: j(n),
		correctAnswer: r
	};
}
function Ie(e, t, n) {
	let r = A(n, 1, 5);
	return {
		id: `baseline-counting-quantities-subitizing-${e}-${t}`,
		kind: "subitizing",
		grade: e,
		competencyId: Oe,
		count: r,
		emoji: j(n),
		correctAnswer: r
	};
}
function Le(e, t, n) {
	let r = A(n, 0, 9), i = j(n), { options: a, correctOptionId: o } = Pe(n, r);
	return {
		id: `baseline-counting-quantities-digit-${e}-${t}`,
		kind: "digit",
		grade: e,
		competencyId: ke,
		count: r,
		emoji: i,
		options: a,
		correctOptionId: o
	};
}
function Re(e, t, n) {
	let r = A(n, 1, 10), i = A(n, 1, 10);
	for (; i === r;) i = A(n, 1, 10);
	let a = j(n), o = j(n), s = r > i ? "left" : "right";
	return {
		id: `baseline-counting-quantities-compare-groups-${e}-${t}`,
		kind: "compare-groups",
		grade: e,
		competencyId: Ae,
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
function ze(e, t) {
	if (!Ne(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = je(t);
	switch (A(n, 0, 3)) {
		case 0: return Fe(e, t, n);
		case 1: return Ie(e, t, n);
		case 2: return Le(e, t, n);
		default: return Re(e, t, n);
	}
}
//#endregion
//#region packages/baseline-counting-quantities/src/plugin.ts
function Be(e, t, n, r, i) {
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
function Ve(e, t) {
	let n = je(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ze(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var He = {
	id: "baseline-counting-quantities",
	competencyIds: [
		De,
		Oe,
		ke,
		Ae
	],
	generateQuestion(e, t) {
		return ze(e, t);
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
}, Ue = "math.measurement.baseline-comparison";
//#endregion
//#region packages/baseline-direct-comparison/src/rng.ts
function We(e) {
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
//#region packages/baseline-direct-comparison/src/generate.ts
var Ge = {
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
}, Ke = [
	"length",
	"weight",
	"capacity"
], qe = {
	length: "Which one is longer?",
	weight: "Which one is heavier?",
	capacity: "Which one holds more?"
};
function Je(e) {
	return e === "P" || e === 1;
}
function Ye(e, t) {
	let n = M(e, 0, t.length - 1), r = M(e, 0, t.length - 1);
	for (; r === n;) r = M(e, 0, t.length - 1);
	return [t[n], t[r]];
}
function Xe(e, t) {
	if (!Je(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = We(t), r = Ke[M(n, 0, Ke.length - 1)], [i, a] = Ye(n, Ge[r]), o = n() < .5, s = {
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
		prompt: qe[r],
		options: [s, c],
		correctOptionId: o ? "a" : "b"
	};
}
//#endregion
//#region packages/baseline-direct-comparison/src/plugin.ts
function Ze(e, t, n, r, i) {
	return {
		competencyId: Ue,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Qe(e, t) {
	let n = We(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Xe(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var $e = {
	id: "baseline-direct-comparison",
	competencyIds: [Ue],
	generateQuestion(e, t) {
		return Xe(e, t);
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
}, et = "math.geometry.baseline-position";
//#endregion
//#region packages/baseline-positional-language/src/rng.ts
function tt(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function N(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-positional-language/src/generate.ts
var nt = [
	"🐱 the cat",
	"🐶 the dog",
	"⭐ the star",
	"🧸 the toy"
], P = [
	"📦 the box",
	"🪑 the chair",
	"🛏️ the bed",
	"🌳 the tree"
], rt = [
	"on",
	"under",
	"behind",
	"between",
	"next-to"
], it = {
	on: "on",
	under: "under",
	behind: "behind",
	between: "between",
	"next-to": "next to"
};
function at(e) {
	return e === "P" || e === 1;
}
function ot(e, t, n, r) {
	switch (e) {
		case "on": return `${t}\n${n}`;
		case "under": return `${n}\n${t}`;
		case "behind": return `${n}${t}`;
		case "next-to": return `${t}  ${n}`;
		case "between": return `${n}  ${t}  ${r}`;
	}
}
function st(e) {
	let t = [...rt];
	for (let n = t.length - 1; n > 0; n--) {
		let r = N(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function ct(e, t) {
	if (!at(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = tt(t), r = rt[N(n, 0, rt.length - 1)], i = nt[N(n, 0, nt.length - 1)], a = N(n, 0, P.length - 1), o = N(n, 0, P.length - 1);
	for (; o === a;) o = N(n, 0, P.length - 1);
	let s = P[a], c = P[o], l = i.split(" ")[0], u = s.split(" ")[0], d = c.split(" ")[0], f = st(n).map((e) => ({
		id: `position-${e}`,
		label: it[e]
	}));
	return {
		id: `baseline-positional-language-${e}-${t}`,
		grade: e,
		position: r,
		subjectLabel: i,
		scene: ot(r, l, u, d),
		options: f,
		correctOptionId: `position-${r}`
	};
}
//#endregion
//#region packages/baseline-positional-language/src/plugin.ts
function lt(e, t, n, r, i) {
	return {
		competencyId: et,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ut(e, t) {
	let n = tt(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ct(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var dt = {
	id: "baseline-positional-language",
	competencyIds: [et],
	generateQuestion(e, t) {
		return ct(e, t);
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
}, ft = "math.geometry.baseline-shapes";
//#endregion
//#region packages/baseline-shape-recognition/src/rng.ts
function pt(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function mt(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/baseline-shape-recognition/src/generate.ts
var ht = [
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
function gt(e) {
	return e === "P" || e === 1;
}
function _t(e) {
	let t = ht.map((e) => e.name);
	for (let n = t.length - 1; n > 0; n--) {
		let r = mt(e, 0, n), i = t[n];
		t[n] = t[r], t[r] = i;
	}
	return t;
}
function vt(e, t) {
	if (!gt(e)) throw Error(`invalid grade: ${e} (must be exactly 1 or "P")`);
	let n = pt(t), r = ht[mt(n, 0, ht.length - 1)], i = _t(n).map((e) => ({
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
function yt(e, t, n, r, i) {
	return {
		competencyId: ft,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function bt(e, t) {
	let n = pt(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(vt(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var xt = {
	id: "baseline-shape-recognition",
	competencyIds: [ft],
	generateQuestion(e, t) {
		return vt(e, t);
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
function St(e) {
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
//#region packages/mental-addition/src/generate.ts
function Ct(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function wt(e) {
	let t = F(e, 0, 9);
	return {
		operandA: t,
		operandB: F(e, 0, 9 - t)
	};
}
function Tt(e) {
	let t = F(e, 1, 9);
	return {
		operandA: t,
		operandB: F(e, Math.max(1, 10 - t), 9)
	};
}
function Et(e) {
	let t = F(e, 0, 9), n = F(e, 0, 9 - t);
	return {
		operandA: F(e, 1, 9) * 10 + n,
		operandB: t
	};
}
function Dt(e) {
	let t = F(e, 1, 9);
	return {
		onesA: F(e, Math.max(0, 10 - t), 9),
		onesB: t
	};
}
function Ot(e) {
	let { onesA: t, onesB: n } = Dt(e), r = F(e, 1, 9), i = F(e, 1, 9);
	return {
		operandA: r * 10 + t,
		operandB: i * 10 + n
	};
}
function kt(e) {
	let { onesA: t, onesB: n } = Dt(e), r = F(e, 0, 9), i = F(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = F(e, +!a, 9);
	return {
		operandA: i,
		operandB: (a ? F(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function At(e, t) {
	if (!Ct(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = St(t), { operandA: r, operandB: i } = e === 1 ? wt(n) : e === 2 ? Tt(n) : e === 3 ? Et(n) : e === 4 ? Ot(n) : kt(n);
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
var jt = "math.addition.mental";
function Mt(e, t, n, r, i) {
	return {
		competencyId: jt,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Nt(e, t) {
	let n = St(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(At(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Pt = {
	id: "mental-addition",
	competencyIds: [jt],
	generateQuestion(e, t) {
		return At(e, t);
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
function Ft(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function I(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/mental-division/src/generate.ts
function It(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function L(e, t) {
	return {
		divisor: I(e, 1, t),
		correctQuotient: I(e, 0, t)
	};
}
function Lt(e) {
	return {
		divisor: I(e, 1, 9),
		correctQuotient: I(e, 11, 20)
	};
}
function Rt(e, t) {
	if (!It(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ft(t), { divisor: r, correctQuotient: i } = e === 1 ? L(n, 2) : e === 2 ? L(n, 5) : e === 3 ? L(n, 10) : e === 4 ? L(n, 12) : Lt(n);
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
var zt = "math.division.mental";
function Bt(e, t, n, r, i) {
	return {
		competencyId: zt,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Vt(e, t) {
	let n = Ft(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Rt(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ht = {
	id: "mental-division",
	competencyIds: [zt],
	generateQuestion(e, t) {
		return Rt(e, t);
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
function Ut(e) {
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
//#region packages/mental-multiplication/src/generate.ts
function Wt(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function z(e, t) {
	return {
		factorA: R(e, 0, t),
		factorB: R(e, 0, t)
	};
}
function Gt(e) {
	return {
		factorA: R(e, 11, 20),
		factorB: R(e, 0, 9)
	};
}
function Kt(e, t) {
	if (!Wt(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Ut(t), { factorA: r, factorB: i } = e === 1 ? z(n, 2) : e === 2 ? z(n, 5) : e === 3 ? z(n, 10) : e === 4 ? z(n, 12) : Gt(n);
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
var qt = "math.multiplication.mental";
function Jt(e, t, n, r, i) {
	return {
		competencyId: qt,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Yt(e, t) {
	let n = Ut(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Kt(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Xt = {
	id: "mental-multiplication",
	competencyIds: [qt],
	generateQuestion(e, t) {
		return Kt(e, t);
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
function Zt(e) {
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
function Qt(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function $t(e) {
	let t = B(e, 0, 9);
	return {
		correctDifference: t,
		subtrahend: B(e, 0, 9 - t)
	};
}
function en(e) {
	let t = B(e, 1, 9);
	return {
		correctDifference: t,
		subtrahend: B(e, Math.max(1, 10 - t), 9)
	};
}
function tn(e) {
	let t = B(e, 0, 9), n = B(e, 0, 9 - t);
	return {
		correctDifference: B(e, 1, 9) * 10 + n,
		subtrahend: t
	};
}
function nn(e) {
	let t = B(e, 1, 9);
	return {
		onesDiff: B(e, Math.max(0, 10 - t), 9),
		onesSubtrahend: t
	};
}
function rn(e) {
	let { onesDiff: t, onesSubtrahend: n } = nn(e), r = B(e, 1, 9), i = B(e, 1, 9);
	return {
		correctDifference: r * 10 + t,
		subtrahend: i * 10 + n
	};
}
function an(e) {
	let { onesDiff: t, onesSubtrahend: n } = nn(e), r = B(e, 0, 9), i = B(e, 1, 9) * 100 + r * 10 + t, a = e() < .5, o = B(e, +!a, 9);
	return {
		correctDifference: i,
		subtrahend: (a ? B(e, 1, 9) : 0) * 100 + o * 10 + n
	};
}
function on(e, t) {
	if (!Qt(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Zt(t), { correctDifference: r, subtrahend: i } = e === 1 ? $t(n) : e === 2 ? en(n) : e === 3 ? tn(n) : e === 4 ? rn(n) : an(n);
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
var sn = "math.subtraction.mental";
function cn(e, t, n, r, i) {
	return {
		competencyId: sn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ln(e, t) {
	let n = Zt(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(on(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var un = {
	id: "mental-subtraction",
	competencyIds: [sn],
	generateQuestion(e, t) {
		return on(e, t);
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
}, dn = "math.number-sense.counting-range";
//#endregion
//#region packages/number-sense-counting-range/src/rng.ts
function fn(e) {
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
function pn(e) {
	return Number.isInteger(e) && e >= 1 && e <= 4;
}
var mn = {
	1: 100,
	2: 1e3,
	3: 1e4,
	4: 1e6
};
function hn(e, t, n, r) {
	let i = V(r, 0, n - 1);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "next",
		prompt: `What number comes right after ${i}?`,
		numericAnswer: i + 1
	};
}
function gn(e, t, n, r) {
	let i = V(r, 1, n);
	return {
		id: `number-sense-counting-range-${e}-${t}`,
		grade: e,
		kind: "previous",
		prompt: `What number comes right before ${i}?`,
		numericAnswer: i - 1
	};
}
function _n(e, t, n, r) {
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
function vn(e, t) {
	if (!pn(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..4)`);
	let n = mn[e], r = fn(t);
	switch (V(r, 0, 2)) {
		case 0: return hn(e, t, n, r);
		case 1: return gn(e, t, n, r);
		default: return _n(e, t, n, r);
	}
}
//#endregion
//#region packages/number-sense-counting-range/src/plugin.ts
function yn(e, t, n, r, i) {
	return {
		competencyId: dn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function bn(e, t) {
	let n = fn(t), r = [];
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
	id: "number-sense-counting-range",
	competencyIds: [dn],
	generateQuestion(e, t) {
		return vn(e, t);
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
}, Sn = "math.number-sense.negative-numbers";
//#endregion
//#region packages/number-sense-negative-numbers/src/rng.ts
function Cn(e) {
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
function wn(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Tn(e, t, n, r) {
	let i = H(n, r[0], r[1]), a = n() < .5 ? "after" : "before", o = a === "after" ? i + 1 : i - 1;
	return {
		id: `number-sense-negative-numbers-${e}-${t}`,
		grade: e,
		kind: "position",
		prompt: `What number comes right ${a} ${i}?`,
		numericAnswer: o
	};
}
function En(e, t, n, r, i) {
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
function Dn(e, t) {
	if (!wn(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Cn(t);
	if (e === 1) return Tn(e, t, n, [-10, 10]);
	if (e === 2) return Tn(e, t, n, [-20, 20]);
	if (e === 3) return En(e, t, n, "temperature", [-20, 20]);
	if (e === 4) return En(e, t, n, "debt", [-50, -1]);
	if (n() < .5) return Tn(e, t, n, [-100, 100]);
	let r = n() < .5 ? "temperature" : "debt";
	return En(e, t, n, r, r === "debt" ? [-50, -1] : [-100, 100]);
}
//#endregion
//#region packages/number-sense-negative-numbers/src/plugin.ts
function On(e, t, n, r, i) {
	return {
		competencyId: Sn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function kn(e, t) {
	let n = Cn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Dn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var An = {
	id: "number-sense-negative-numbers",
	competencyIds: [Sn],
	generateQuestion(e, t) {
		return Dn(e, t);
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
}, jn = "math.number-sense.odd-even";
//#endregion
//#region packages/number-sense-odd-even/src/rng.ts
function Mn(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Nn(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-odd-even/src/generate.ts
function Pn(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Fn = {
	1: 20,
	2: 100,
	3: 1e3,
	4: 1e4,
	5: 1e4
};
function In(e) {
	return e % 2 == 0 ? "even" : "odd";
}
function Ln(e, t, n) {
	let r = t === "even" ? 0 : 1;
	return r + 2 * Nn(e, 0, Math.floor((n - r) / 2) + 1 - 1);
}
function Rn(e, t, n) {
	let r = Fn[e], i = Nn(n, 0, r);
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
		correctOptionId: In(i)
	};
}
function zn(e, t, n) {
	let r = n() < .5 ? "odd" : "even", i = r === "odd" ? "even" : "odd", a = [];
	for (; a.length < 3;) {
		let e = Ln(n, r, 1e4);
		a.includes(e) || a.push(e);
	}
	let o = Ln(n, i, 1e4), s = [
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
		let t = Nn(n, 0, e), r = s[e];
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
function Bn(e, t) {
	if (!Pn(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Mn(t);
	return e === 5 && n() < .5 ? zn(e, t, n) : Rn(e, t, n);
}
//#endregion
//#region packages/number-sense-odd-even/src/plugin.ts
function Vn(e, t, n, r, i) {
	return {
		competencyId: jn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Hn(e, t) {
	let n = Mn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Bn(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Un = {
	id: "number-sense-odd-even",
	competencyIds: [jn],
	generateQuestion(e, t) {
		return Bn(e, t);
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
}, Wn = "math.number-sense.ordinals";
//#endregion
//#region packages/number-sense-ordinals/src/ordinal.ts
function Gn(e) {
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
function Kn(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function qn(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-ordinals/src/generate.ts
var Jn = {
	1: 5,
	2: 10,
	3: 20,
	4: 50,
	5: 100
};
function Yn(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
function Xn(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = qn(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Zn(e, t) {
	let n = Xn(e, t), r = n.map((e, t) => ({
		id: `opt-${t}`,
		label: e.label
	}));
	return {
		options: r,
		correctOptionId: r[n.findIndex((e) => e.correct)].id
	};
}
function Qn(e, t) {
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
function $n(e, t, n, r) {
	let i = new Set(t), a = [];
	for (let t of e) {
		if (a.length >= r) break;
		i.has(t) || (a.push(t), i.add(t));
	}
	for (let e = 1; e <= n && a.length < r; e++) i.has(e) || (a.push(e), i.add(e));
	return a;
}
function er(e, t, n, r) {
	let i = $n(Qn(e, t), /* @__PURE__ */ new Set([e]), t, 3);
	return Zn([{
		label: r(e),
		correct: !0
	}, ...i.map((e) => ({
		label: r(e),
		correct: !1
	}))], n);
}
function tr(e, t) {
	if (!Yn(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Jn[e], r = Kn(t), i = r() < .5 ? "number-to-word" : "word-to-number", a = qn(r, 1, n), { options: o, correctOptionId: s } = i === "number-to-word" ? er(a, n, r, Gn) : er(a, n, r, String), c = i === "number-to-word" ? `What is the ordinal (position) word for ${a}?` : `Which number is ${Gn(a)}?`;
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
function nr(e, t, n, r, i) {
	return {
		competencyId: Wn,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function rr(e, t) {
	let n = Kn(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(tr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var ir = {
	id: "number-sense-ordinals",
	competencyIds: [Wn],
	generateQuestion(e, t) {
		return tr(e, t);
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
}, ar = "math.number-sense.primes-factors";
//#endregion
//#region packages/number-sense-primes-factors/src/rng.ts
function or(e) {
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
function sr(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function cr(e) {
	if (e < 2) return !1;
	for (let t = 2; t * t <= e; t++) if (e % t === 0) return !1;
	return !0;
}
function lr(e, t) {
	return t === 0 ? e : lr(t, e % t);
}
function ur(e, t) {
	return e * t / lr(e, t);
}
var dr = {
	1: 20,
	2: 50,
	5: 50
}, fr = {
	3: 50,
	4: 100,
	5: 100
};
function pr(e, t) {
	let n = [];
	for (let e = 2; e < t; e++) t % e === 0 && n.push(e);
	return n.length === 0 ? U(e, 2, t - 1) : n[U(e, 0, n.length - 1)];
}
function mr(e, t) {
	let n = U(e, 2, t - 1), r = 0;
	for (; t % n === 0 && r < 20;) n = U(e, 2, t - 1), r++;
	return n;
}
function hr(e, t, n) {
	let r = U(n, 2, dr[e] ?? 50);
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
		correctOptionId: cr(r) ? "yes" : "no",
		n: r
	};
}
function gr(e, t, n) {
	let r = U(n, 4, (fr[e] ?? 100) - 1), i = n() < .5 ? pr(n, r) : mr(n, r);
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
function _r(e, t, n) {
	let r = U(n, 2, 12), i = U(n, 2, 12);
	for (; i === r;) i = U(n, 2, 12);
	return {
		id: `number-sense-primes-factors-${e}-${t}`,
		grade: e,
		kind: "common-multiple",
		prompt: `What is the smallest common multiple of ${r} and ${i}?`,
		numericAnswer: ur(r, i)
	};
}
function vr(e, t) {
	if (!sr(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = or(t);
	if (e === 1 || e === 2) return hr(e, t, n);
	if (e === 3 || e === 4) return gr(e, t, n);
	switch (U(n, 0, 2)) {
		case 0: return hr(e, t, n);
		case 1: return gr(e, t, n);
		default: return _r(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-primes-factors/src/plugin.ts
function yr(e, t, n, r, i) {
	return {
		competencyId: ar,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function br(e, t) {
	let n = or(t), r = [];
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
	id: "number-sense-primes-factors",
	competencyIds: [ar],
	generateQuestion(e, t) {
		return vr(e, t);
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
}, Sr = "math.number-sense.roman-numerals";
//#endregion
//#region packages/number-sense-roman-numerals/src/rng.ts
function Cr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function wr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-roman-numerals/src/generate.ts
var Tr = [
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
	for (let [e, r] of Tr) for (; t >= e;) n += r, t -= e;
	return n;
}
function Er(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Dr = {
	1: [1, 10],
	2: [1, 50],
	3: [1, 100],
	4: [1, 500],
	5: [1, 1e3]
};
function Or(e, t) {
	return e <= 3 || t() < .5 ? "read" : "write";
}
function kr(e, t) {
	let n = e.slice();
	for (let e = n.length - 1; e > 0; e--) {
		let r = wr(t, 0, e), i = n[e];
		n[e] = n[r], n[r] = i;
	}
	return n;
}
function Ar(e, t, n, r) {
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
function jr(e, t, n) {
	let [r, i] = t, a = kr([e, ...Ar(e, r, i, 3)], n), o = a.map((e, t) => ({
		id: `opt-${t}`,
		label: String(e)
	})), s = a.indexOf(e);
	return {
		prompt: `Which number does the Roman numeral ${W(e)} represent?`,
		options: o,
		correctOptionId: `opt-${s}`
	};
}
function Mr(e, t, n) {
	let [r, i] = t, a = Ar(e, r, i, 3), o = kr([W(e), ...a.map(W)], n), s = o.map((e, t) => ({
		id: `opt-${t}`,
		label: e
	})), c = o.indexOf(W(e));
	return {
		prompt: `Which Roman numeral represents ${e}?`,
		options: s,
		correctOptionId: `opt-${c}`
	};
}
function Nr(e, t) {
	if (!Er(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Cr(t), r = Dr[e], i = Or(e, n), a = wr(n, r[0], r[1]), { prompt: o, options: s, correctOptionId: c } = i === "read" ? jr(a, r, n) : Mr(a, r, n);
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
function Pr(e, t, n, r, i) {
	return {
		competencyId: Sr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Fr(e, t) {
	let n = Cr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Nr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Ir = {
	id: "number-sense-roman-numerals",
	competencyIds: [Sr],
	generateQuestion(e, t) {
		return Nr(e, t);
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
function Lr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Rr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-skip-counting/src/generate.ts
function zr(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Br() {
	return {
		step: 2,
		maxRange: 20
	};
}
function Vr() {
	return {
		step: 2,
		maxRange: 50
	};
}
function Hr() {
	return {
		step: 5,
		maxRange: 100
	};
}
function Ur() {
	return {
		step: 10,
		maxRange: 200
	};
}
function Wr(e) {
	let t = [
		2,
		5,
		10,
		25,
		50
	];
	return {
		step: t[Rr(e, 0, t.length - 1)],
		maxRange: 500
	};
}
function Gr(e, t) {
	if (!zr(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Lr(t), { step: r, maxRange: i } = e === 1 ? Br() : e === 2 ? Vr() : e === 3 ? Hr() : e === 4 ? Ur() : Wr(n), a = Rr(n, 0, (i - r * 4) / r) * r, o = a, s = a + r, c = a + r * 2, l = a + r * 3;
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
var Kr = "math.number-sense.skip-counting";
function qr(e, t, n, r, i) {
	return {
		competencyId: Kr,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Jr(e, t) {
	let n = Lr(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Gr(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Yr = {
	id: "number-sense-skip-counting",
	competencyIds: [Kr],
	generateQuestion(e, t) {
		return Gr(e, t);
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
function Xr(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Zr(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/number-sense-squares/src/generate.ts
function Qr(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 1 && e <= 5;
}
var $r = [{
	id: "yes",
	label: "Yes"
}, {
	id: "no",
	label: "No"
}], ei = {
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
}, ti = {
	4: {
		baseMin: 1,
		baseMax: 8
	},
	5: {
		baseMin: 1,
		baseMax: 12
	}
};
function ni(e) {
	return Number.isInteger(Math.sqrt(e));
}
function ri(e, t, n) {
	let { baseMin: r, baseMax: i, numberMin: a, numberMax: o } = ei[e], s = n() < .5 ? (() => {
		let e = Zr(n, r, i);
		return e * e;
	})() : Zr(n, a, o), c = ni(s) ? "yes" : "no";
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recognize",
		prompt: `Is ${s} a square number?`,
		options: $r,
		correctOptionId: c
	};
}
function ii(e, t, n) {
	let { baseMin: r, baseMax: i } = ti[e], a = Zr(n, r, i);
	return {
		id: `number-sense-squares-${e}-${t}`,
		grade: e,
		kind: "recall",
		prompt: `What is ${a} squared?`,
		numericAnswer: a * a
	};
}
function ai(e, t) {
	if (!Qr(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Xr(t);
	switch (e) {
		case 1:
		case 2:
		case 3: return ri(e, t, n);
		case 4:
		case 5: return ii(e, t, n);
	}
}
//#endregion
//#region packages/number-sense-squares/src/plugin.ts
var oi = "math.number-sense.squares";
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
	let n = Xr(t), r = [];
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
	id: "number-sense-squares",
	competencyIds: [oi],
	generateQuestion(e, t) {
		return ai(e, t);
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
function ui(e) {
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
function di(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function fi(e) {
	return `${Math.floor(e / 10)}.${e % 10}`;
}
function pi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 10`,
		correctAnswer: t * 10
	};
}
function mi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 100`,
		correctAnswer: t * 100
	};
}
function hi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${t} × 1000`,
		correctAnswer: t * 1e3
	};
}
function gi(e) {
	let t = e() < .5 ? 10 : 100, n = G(e, 1, 999);
	return {
		operator: "÷",
		equation: `${n * t} ÷ ${t}`,
		correctAnswer: n
	};
}
function _i(e) {
	let t = G(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 1e3} ÷ 1000`,
		correctAnswer: t
	};
}
function vi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${fi(t)} × 10`,
		correctAnswer: t
	};
}
function yi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "×",
		equation: `${fi(t)} × 100`,
		correctAnswer: t * 10
	};
}
function bi(e) {
	let t = G(e, 1, 999);
	return {
		operator: "÷",
		equation: `${t * 10} ÷ 10`,
		correctAnswer: t
	};
}
var xi = [
	_i,
	vi,
	yi,
	bi
];
function Si(e) {
	let t = xi[G(e, 0, xi.length - 1)];
	return t(e);
}
function Ci(e, t) {
	if (!di(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = ui(t), { operator: r, equation: i, correctAnswer: a } = e === 1 ? pi(n) : e === 2 ? mi(n) : e === 3 ? hi(n) : e === 4 ? gi(n) : Si(n);
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
var wi = "math.place-value.multiply-divide-ten";
function Ti(e, t, n, r, i) {
	return {
		competencyId: wi,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function Ei(e, t) {
	let n = ui(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(Ci(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var Di = {
	id: "place-value-multiply-divide-ten",
	competencyIds: [wi],
	generateQuestion(e, t) {
		return Ci(e, t);
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
function Oi(e) {
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
function ki(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
var Ai = [
	1,
	10,
	100,
	1e3
];
function ji(e) {
	return {
		operand: K(e, 1, 99),
		magnitude: 1
	};
}
function Mi(e) {
	return {
		operand: K(e, 10, 999),
		magnitude: 10
	};
}
function Ni(e) {
	return {
		operand: K(e, 100, 9999),
		magnitude: 100
	};
}
function Pi(e) {
	return {
		operand: K(e, 1e3, 99999),
		magnitude: 1e3
	};
}
function Fi(e) {
	let t = Ai[K(e, 0, Ai.length - 1)];
	return {
		operand: K(e, t, 999999),
		magnitude: t
	};
}
function Ii(e, t) {
	if (!ki(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Oi(t), { operand: r, magnitude: i } = e === 1 ? ji(n) : e === 2 ? Mi(n) : e === 3 ? Ni(n) : e === 4 ? Pi(n) : Fi(n), a = n() < .5 ? "+" : "-", o = a === "+" ? r + i : r - i;
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
var Li = "math.place-value.powers-of-ten";
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
	let n = Oi(t), r = [];
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
	id: "place-value-powers-of-ten",
	competencyIds: [Li],
	generateQuestion(e, t) {
		return Ii(e, t);
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
}, Vi = "math.place-value.rounding";
//#endregion
//#region packages/place-value-rounding/src/rng.ts
function Hi(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function Ui(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-rounding/src/generate.ts
function Wi(e) {
	return Number.isInteger(e) && e >= 1 && e <= 5;
}
function Gi(e, t) {
	let n = e % t, r = e - n;
	return n * 2 >= t ? r + t : r;
}
function Ki(e, t) {
	return e - e % t;
}
function qi(e, t) {
	let n = e % t;
	return n === 0 ? e : e - n + t;
}
function q(e, t) {
	let n = String(e).padStart(t + 1, "0");
	return `${n.slice(0, -t)}.${n.slice(-t)}`;
}
function Ji(e, t, n) {
	let r = /* @__PURE__ */ new Set([e]), i = [];
	for (let e of t) if (!r.has(e) && (r.add(e), i.push(e), i.length === 3)) return i;
	let a = 1;
	for (; i.length < 3;) {
		let e = n(a);
		a += 1, r.has(e) || (r.add(e), i.push(e));
	}
	return i;
}
function Yi(e, t, n, r, i, a) {
	let o = [{
		label: i,
		isCorrect: !0
	}, ...a.map((e) => ({
		label: e,
		isCorrect: !1
	}))];
	for (let e = o.length - 1; e > 0; e--) {
		let t = Ui(n, 0, e), r = o[e];
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
var Xi = {
	1: 999,
	2: 9999,
	3: 99999
}, Zi = {
	1: 10,
	2: 100,
	3: 1e3
}, Qi = {
	1: "10",
	2: "100",
	3: "1,000"
};
function $i(e, t, n) {
	let r = Zi[e], i = Ui(n, 0, Xi[e]), a = Gi(i, r), o = String(a), s = Ji(o, [
		Ki(i, r),
		qi(i, r),
		i,
		a - r,
		a + r,
		a - 2 * r,
		a + 2 * r
	].filter((e) => e >= 0).map(String), (e) => String(a + (e + 2) * r));
	return Yi(e, t, n, `Round ${i} to the nearest ${Qi[e]}.`, o, s);
}
var ea = {
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
function ta(e, t, n) {
	let { maxScaled: r, sourceDecimalPlaces: i, targetDecimalPlaces: a, precisionLabel: o } = ea[e], s = Ui(n, 0, r), c = q(s, i), l = Gi(s, J) / J, u = q(l, a), d = Ki(s, J) / J, f = qi(s, J) / J, p = Ji(u, [
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
	return Yi(e, t, n, `Round ${c} to ${o} decimal place${o === "1" ? "" : "s"}.`, u, p);
}
function na(e, t) {
	if (!Wi(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = Hi(t);
	return e === 1 || e === 2 || e === 3 ? $i(e, t, n) : ta(e, t, n);
}
//#endregion
//#region packages/place-value-rounding/src/plugin.ts
function ra(e, t, n, r, i) {
	return {
		competencyId: Vi,
		grade: e.grade,
		correct: t,
		timeMs: n,
		timestamp: r,
		questionId: e.id,
		...i && { endReason: i }
	};
}
function ia(e, t) {
	let n = Hi(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(na(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
var aa = {
	id: "place-value-rounding",
	competencyIds: [Vi],
	generateQuestion(e, t) {
		return na(e, t);
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
}, oa = "math.place-value.understanding";
//#endregion
//#region packages/place-value-understanding/src/rng.ts
function sa(e) {
	let t = e >>> 0;
	return function() {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
function ca(e, t, n) {
	return t + Math.floor(e() * (n - t + 1));
}
//#endregion
//#region packages/place-value-understanding/src/generate.ts
function la(e) {
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
}, ua = {
	name: "hundreds",
	value: 100,
	decimals: 0
}, da = {
	name: "thousands",
	value: 1e3,
	decimals: 0
}, fa = {
	name: "ten-thousands",
	value: 1e4,
	decimals: 0
}, pa = {
	name: "hundred-thousands",
	value: 1e5,
	decimals: 0
}, ma = {
	name: "millions",
	value: 1e6,
	decimals: 0
}, ha = {
	name: "ones",
	value: 1,
	decimals: 0
}, ga = {
	name: "tenths",
	value: .1,
	decimals: 1
}, _a = {
	name: "hundredths",
	value: .01,
	decimals: 2
}, va = {
	name: "thousandths",
	value: .001,
	decimals: 3
}, Z = {
	1: [Y, X],
	2: [
		Y,
		X,
		ua
	],
	3: [
		Y,
		X,
		ua,
		da
	],
	4: [
		Y,
		X,
		ua,
		da,
		fa,
		pa,
		ma
	]
}, ya = [
	va,
	_a,
	ga,
	ha
], ba = [
	va,
	_a,
	ga
], xa = {
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
		composePlaces: ya,
		scopePlaces: ba,
		isDecimal: !0
	}
};
function Sa(e, t) {
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
		let r = ca(e, 0, t), i = n[t];
		n[t] = n[r], n[r] = i;
	}
	return n.slice(0, t);
}
function Q(e, t) {
	return t.decimals === 0 ? String(e * t.value) : `0.${"0".repeat(t.decimals - 1)}${e}`;
}
function Ca(e, t) {
	if (!e.isDecimal) {
		let n = t.reduce((t, n, r) => t + n * e.composePlaces[r].value, 0);
		return String(n);
	}
	let [n, r, i, a] = t;
	return `${a}.${i}${r}${n}`;
}
function wa(e) {
	return e.length === 1 ? e[0] : `${e.slice(0, -1).join(", ")} and ${e[e.length - 1]}`;
}
function Ta(e, t, n) {
	let r = t.map((e, t) => ({
		label: e,
		isCorrect: t === n
	}));
	for (let t = r.length - 1; t > 0; t--) {
		let n = ca(e, 0, t), i = r[t];
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
function Ea(e, t, n, r) {
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
function Da(e, t, n) {
	let r = [], i = /* @__PURE__ */ new Set([n]), a = t.length;
	function o(t) {
		if (r.length >= 3) return;
		let n = Ca(e, t);
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
function Oa(e, t, n, r) {
	let i = Sa(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = Ca(r, i), s = ca(n, 0, r.scopePlaces.length - 1), c = r.scopePlaces[s], l = Q(a.get(c.name), c), { options: u, correctOptionId: d } = Ta(n, [l, ...Ea(r.scopePlaces, s, a, l)], 0);
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
function ka(e, t, n, r) {
	let i = Sa(n, r.composePlaces.length), a = new Map(r.composePlaces.map((e, t) => [e.name, i[t]])), o = Ca(r, i), { options: s, correctOptionId: c } = Ta(n, [o, ...Da(r, i, o)], 0), l = [...r.composePlaces].reverse(), u = [...i].reverse(), d = l.map((e, t) => `${u[t]} ${e.name}`), f = `Which number ${r.isDecimal ? "is" : "has"} ${wa(d)}?`;
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
function Aa(e, t) {
	if (!la(e)) throw Error(`invalid grade: ${e} (must be an integer in 1..5)`);
	let n = sa(t), r = n() < .5 ? "digit-value" : "compose", i = xa[e];
	return r === "digit-value" ? Oa(e, t, n, i) : ka(e, t, n, i);
}
function ja(e, t) {
	return Aa(e, t).question;
}
//#endregion
//#region packages/place-value-understanding/src/plugin.ts
function Ma(e, t, n, r, i) {
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
function Na(e, t) {
	let n = sa(t), r = [];
	for (let t = 0; t < 10; t++) {
		let t = Math.floor(n() * 4294967295);
		r.push(ja(e, t));
	}
	return {
		grade: e,
		questions: r
	};
}
//#endregion
//#region src/pluginRegistry.ts
var Pa = t([
	Pt,
	un,
	Xt,
	Ht,
	He,
	Ee,
	$e,
	ge,
	xt,
	dt,
	xn,
	Yr,
	Un,
	ir,
	An,
	xr,
	li,
	Ir,
	{
		id: "place-value-understanding",
		competencyIds: [oa],
		generateQuestion(e, t) {
			return ja(e, t);
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
	},
	Bi,
	aa,
	Di
], [
	n,
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
	D
]);
//#endregion
//#region src/exerciseDefinitions.ts
function $(e, t) {
	let n = Pa.getPlugin(e);
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
var Fa = [
	{
		key: "addition",
		label: "Addition",
		icon: "➕",
		pluginId: "mental-addition",
		competency: n,
		competencies: [n],
		createSession(e, t) {
			return $("mental-addition", Nt(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Mt(e, t, n, r, i)
	},
	{
		key: "subtraction",
		label: "Subtraction",
		icon: "➖",
		pluginId: "mental-subtraction",
		competency: r,
		competencies: [r],
		createSession(e, t) {
			return $("mental-subtraction", ln(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => cn(e, t, n, r, i)
	},
	{
		key: "multiplication",
		label: "Multiplication",
		icon: "✖️",
		pluginId: "mental-multiplication",
		competency: i,
		competencies: [i],
		createSession(e, t) {
			return $("mental-multiplication", Yt(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Jt(e, t, n, r, i)
	},
	{
		key: "division",
		label: "Division",
		icon: "➗",
		pluginId: "mental-division",
		competency: a,
		competencies: [a],
		createSession(e, t) {
			return $("mental-division", Vt(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Bt(e, t, n, r, i)
	},
	{
		key: "baseline-counting-quantities",
		label: "Counting & Quantities",
		icon: "🔢",
		pluginId: "baseline-counting-quantities",
		competency: o,
		competencies: [
			o,
			s,
			c,
			l
		],
		competencyLabels: {
			[o.id]: "Counting to 20",
			[s.id]: "Subitizing to 5",
			[c.id]: "Recognising digits",
			[l.id]: "Comparing groups"
		},
		createSession(e, t) {
			return $("baseline-counting-quantities", Ve(e, t));
		},
		createMasterySignal: (e, t, n, r) => Be(e, t, n, r)
	},
	{
		key: "baseline-concrete-addition-subtraction",
		label: "Concrete Addition & Subtraction",
		icon: "🍎",
		pluginId: "baseline-concrete-addition-subtraction",
		competency: u,
		competencies: [u],
		createSession(e, t) {
			return $("baseline-concrete-addition-subtraction", Te(e, t));
		},
		createMasterySignal: (e, t, n, r) => we(e, t, n, r)
	},
	{
		key: "baseline-direct-comparison",
		label: "Direct Comparison",
		icon: "⚖️",
		pluginId: "baseline-direct-comparison",
		competency: d,
		competencies: [d],
		createSession(e, t) {
			return $("baseline-direct-comparison", Qe(e, t));
		},
		createMasterySignal: (e, t, n, r) => Ze(e, t, n, r)
	},
	{
		key: "baseline-calendar-time-basics",
		label: "Calendar & Time Basics",
		icon: "📅",
		pluginId: "baseline-calendar-time-basics",
		competency: f,
		competencies: [f, p],
		competencyLabels: {
			[f.id]: "Order of the day",
			[p.id]: "Days of the week"
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
		competency: m,
		competencies: [m],
		createSession(e, t) {
			return $("baseline-shape-recognition", bt(e, t));
		},
		createMasterySignal: (e, t, n, r) => yt(e, t, n, r)
	},
	{
		key: "baseline-positional-language",
		label: "Positional Language",
		icon: "📍",
		pluginId: "baseline-positional-language",
		competency: h,
		competencies: [h],
		createSession(e, t) {
			return $("baseline-positional-language", ut(e, t));
		},
		createMasterySignal: (e, t, n, r) => lt(e, t, n, r)
	},
	{
		key: "number-sense-counting-range",
		label: "Counting & Number Range",
		icon: "🔢",
		pluginId: "number-sense-counting-range",
		competency: g,
		competencies: [g],
		createSession(e, t) {
			return $("number-sense-counting-range", bn(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => yn(e, t, n, r, i)
	},
	{
		key: "number-sense-skip-counting",
		label: "Skip Counting",
		icon: "➡️",
		pluginId: "number-sense-skip-counting",
		competency: _,
		competencies: [_],
		createSession(e, t) {
			return $("number-sense-skip-counting", Jr(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => qr(e, t, n, r, i)
	},
	{
		key: "number-sense-odd-even",
		label: "Odd & Even",
		icon: "🔀",
		pluginId: "number-sense-odd-even",
		competency: v,
		competencies: [v],
		createSession(e, t) {
			return $("number-sense-odd-even", Hn(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Vn(e, t, n, r, i)
	},
	{
		key: "number-sense-ordinals",
		label: "Ordinal Numbers",
		icon: "🥇",
		pluginId: "number-sense-ordinals",
		competency: y,
		competencies: [y],
		createSession(e, t) {
			return $("number-sense-ordinals", rr(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => nr(e, t, n, r, i)
	},
	{
		key: "number-sense-negative-numbers",
		label: "Negative Numbers",
		icon: "🌡️",
		pluginId: "number-sense-negative-numbers",
		competency: b,
		competencies: [b],
		createSession(e, t) {
			return $("number-sense-negative-numbers", kn(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => On(e, t, n, r, i)
	},
	{
		key: "number-sense-primes-factors",
		label: "Primes & Factors",
		icon: "🧮",
		pluginId: "number-sense-primes-factors",
		competency: x,
		competencies: [x],
		createSession(e, t) {
			return $("number-sense-primes-factors", br(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => yr(e, t, n, r, i)
	},
	{
		key: "number-sense-squares",
		label: "Square Numbers",
		icon: "⬜",
		pluginId: "number-sense-squares",
		competency: S,
		competencies: [S],
		createSession(e, t) {
			return $("number-sense-squares", ci(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => si(e, t, n, r, i)
	},
	{
		key: "number-sense-roman-numerals",
		label: "Roman Numerals",
		icon: "🏛️",
		pluginId: "number-sense-roman-numerals",
		competency: C,
		competencies: [C],
		createSession(e, t) {
			return $("number-sense-roman-numerals", Fr(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Pr(e, t, n, r, i)
	},
	{
		key: "place-value-understanding",
		label: "Place Value Understanding",
		icon: "🔟",
		pluginId: "place-value-understanding",
		competency: w,
		competencies: [w],
		createSession(e, t) {
			return $("place-value-understanding", Na(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Ma(e, t, n, r, i)
	},
	{
		key: "place-value-powers-of-ten",
		label: "Add/Subtract Powers of Ten",
		icon: "➕",
		pluginId: "place-value-powers-of-ten",
		competency: T,
		competencies: [T],
		createSession(e, t) {
			return $("place-value-powers-of-ten", zi(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Ri(e, t, n, r, i)
	},
	{
		key: "place-value-rounding",
		label: "Rounding",
		icon: "🔵",
		pluginId: "place-value-rounding",
		competency: E,
		competencies: [E],
		createSession(e, t) {
			return $("place-value-rounding", ia(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => ra(e, t, n, r, i)
	},
	{
		key: "place-value-multiply-divide-ten",
		label: "Multiply/Divide by Powers of Ten",
		icon: "✖️",
		pluginId: "place-value-multiply-divide-ten",
		competency: D,
		competencies: [D],
		createSession(e, t) {
			return $("place-value-multiply-divide-ten", Ei(e, t));
		},
		createMasterySignal: (e, t, n, r, i) => Ti(e, t, n, r, i)
	}
], Ia = !1;
function La() {
	Ia ||= !0;
}
var Ra = () => ({
	subjectId: "math",
	competencies: O,
	plugins: Pa.all(),
	exercises: Fa,
	mathematicsAreas: te,
	getMathematicsAreaForCompetency: ne,
	register: La
});
//#endregion
export { O as allCompetencies, l as baselineCompareGroupsCompetency, u as baselineConcreteArithmeticCompetency, o as baselineCountingCompetency, f as baselineDayOrderCompetency, p as baselineDaysOfWeekCompetency, c as baselineDigitsCompetency, d as baselineDirectComparisonCompetency, h as baselinePositionCompetency, m as baselineShapesCompetency, s as baselineSubitizingCompetency, Ra as default, ne as getMathematicsAreaForCompetency, Fa as mathExercises, Pa as mathPluginRegistry, te as mathematicsAreas, n as mentalAdditionCompetency, a as mentalDivisionCompetency, i as mentalMultiplicationCompetency, r as mentalSubtractionCompetency, g as numberSenseCountingRangeCompetency, b as numberSenseNegativeNumbersCompetency, v as numberSenseOddEvenCompetency, y as numberSenseOrdinalsCompetency, x as numberSensePrimesFactorsCompetency, C as numberSenseRomanNumeralsCompetency, _ as numberSenseSkipCountingCompetency, S as numberSenseSquaresCompetency, D as placeValueMultiplyDivideTenCompetency, T as placeValuePowersOfTenCompetency, E as placeValueRoundingCompetency, w as placeValueUnderstandingCompetency };
