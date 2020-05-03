import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M13 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zM4 13s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm3.872-6.957s1.414 1.414 0 2.828-2.828 0-2.828 0L3.629 7.458s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm17.085 2.828s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414z", {["fill"]: "#FFAC33",["d"]: "M13 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zM4 13s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm3.872-6.957s1.414 1.414 0 2.828-2.828 0-2.828 0L3.629 7.458s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm17.085 2.828s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414z",}));el.appendChild(svg["circle"](15, 15, 16, {["cy"]: "15",["r"]: "8",["fill"]: "#FFAC33",["cx"]: "15",}));el.appendChild(svg["path"]("M28.223 12.8c-.803 0-1.575.119-2.304.34C25.057 10.731 22.718 9 19.958 9c-2.959 0-5.437 1.991-6.123 4.675-.733-.542-1.636-.875-2.626-.875-2.417 0-4.375 1.914-4.375 4.275 0 .573.12 1.119.329 1.619-.417-.113-.848-.194-1.302-.194C3.176 18.5 1 20.626 1 23.25S3.176 28 5.861 28h22.361C32.518 28 36 24.598 36 20.4s-3.482-7.6-7.777-7.6z", {["fill"]: "#E1E8ED",["d"]: "M28.223 12.8c-.803 0-1.575.119-2.304.34C25.057 10.731 22.718 9 19.958 9c-2.959 0-5.437 1.991-6.123 4.675-.733-.542-1.636-.875-2.626-.875-2.417 0-4.375 1.914-4.375 4.275 0 .573.12 1.119.329 1.619-.417-.113-.848-.194-1.302-.194C3.176 18.5 1 20.626 1 23.25S3.176 28 5.861 28h22.361C32.518 28 36 24.598 36 20.4s-3.482-7.6-7.777-7.6z",}));el.appendChild(svg["path"]("M11.999 33.961l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.102.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039zm-6.979-1.54L4.906 29l-2.869 1.708c-.639.345-1.063 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.11-.023 1.98-.937 1.943-2.039zm14 .54l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.102.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039zm5.978 1l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.035 1.799.037 1.102.965 1.976 2.076 1.953 1.109-.023 1.978-.937 1.941-2.039zm6.021-1.54L30.905 29l-2.869 1.708c-.639.345-1.062 1.024-1.035 1.799.037 1.103.965 1.976 2.076 1.953 1.11-.023 1.979-.937 1.942-2.039z", {["fill"]: "#5DADEC",["d"]: "M11.999 33.961l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.102.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039zm-6.979-1.54L4.906 29l-2.869 1.708c-.639.345-1.063 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.11-.023 1.98-.937 1.943-2.039zm14 .54l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.102.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039zm5.978 1l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.035 1.799.037 1.102.965 1.976 2.076 1.953 1.109-.023 1.978-.937 1.941-2.039zm6.021-1.54L30.905 29l-2.869 1.708c-.639.345-1.062 1.024-1.035 1.799.037 1.103.965 1.976 2.076 1.953 1.11-.023 1.979-.937 1.942-2.039z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};