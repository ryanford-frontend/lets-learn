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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#77B255",["cx"]: "18",}));el.appendChild(svg["path"]("M26 18c0 6.048 2.792 10.221 5.802 11.546C34.42 26.42 36 22.396 36 18c0-4.396-1.58-8.42-4.198-11.546C28.792 7.779 26 11.952 26 18z", {["fill"]: "#A6D388",["d"]: "M26 18c0 6.048 2.792 10.221 5.802 11.546C34.42 26.42 36 22.396 36 18c0-4.396-1.58-8.42-4.198-11.546C28.792 7.779 26 11.952 26 18z",}));el.appendChild(svg["path"]("M27 18c0-6.048 1.792-10.221 4.802-11.546-.445-.531-.926-1.028-1.428-1.504C27.406 6.605 25 10.578 25 18c0 7.421 2.406 11.395 5.374 13.05.502-.476.984-.973 1.428-1.504C28.792 28.221 27 24.048 27 18z", {["fill"]: "#FFF",["d"]: "M27 18c0-6.048 1.792-10.221 4.802-11.546-.445-.531-.926-1.028-1.428-1.504C27.406 6.605 25 10.578 25 18c0 7.421 2.406 11.395 5.374 13.05.502-.476.984-.973 1.428-1.504C28.792 28.221 27 24.048 27 18z",}));el.appendChild(svg["path"]("M10 18c0-6.048-2.792-10.22-5.802-11.546C1.58 9.58 0 13.604 0 18c0 4.396 1.58 8.42 4.198 11.546C7.208 28.22 10 24.048 10 18z", {["fill"]: "#A6D388",["d"]: "M10 18c0-6.048-2.792-10.22-5.802-11.546C1.58 9.58 0 13.604 0 18c0 4.396 1.58 8.42 4.198 11.546C7.208 28.22 10 24.048 10 18z",}));el.appendChild(svg["path"]("M4.198 6.454C7.208 7.78 9 11.952 9 18c0 6.048-1.792 10.22-4.802 11.546.445.531.926 1.027 1.428 1.504C8.593 29.395 11 25.421 11 18c0-7.421-2.406-11.395-5.374-13.049-.502.476-.984.972-1.428 1.503z", {["fill"]: "#FFF",["d"]: "M4.198 6.454C7.208 7.78 9 11.952 9 18c0 6.048-1.792 10.22-4.802 11.546.445.531.926 1.027 1.428 1.504C8.593 29.395 11 25.421 11 18c0-7.421-2.406-11.395-5.374-13.049-.502.476-.984.972-1.428 1.503z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};