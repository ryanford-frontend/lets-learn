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
				el.appendChild(svg["path"]("M14 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zm16 12s2 0 2 2-2 2-2 2h-2s-2 0-2-2 2-2 2-2h2zM4 14s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm3.872-7.957s1.414 1.414 0 2.828-2.828 0-2.828 0L3.629 7.458s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm19.085 2.828s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414z", {["fill"]: "#FFAC33",["d"]: "M14 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zm16 12s2 0 2 2-2 2-2 2h-2s-2 0-2-2 2-2 2-2h2zM4 14s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm3.872-7.957s1.414 1.414 0 2.828-2.828 0-2.828 0L3.629 7.458s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm19.085 2.828s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414z",}));el.appendChild(svg["circle"](16, 16, 18, {["cy"]: "16",["r"]: "9",["fill"]: "#FFAC33",["cx"]: "16",}));el.appendChild(svg["path"]("M28 20c-.825 0-1.62.125-2.369.357C24.744 17.822 22.338 16 19.5 16c-3.044 0-5.592 2.096-6.299 4.921-.754-.57-1.682-.921-2.701-.921C8.015 20 6 22.015 6 24.5c0 .604.123 1.178.339 1.704C5.91 26.085 5.467 26 5 26c-2.762 0-5 2.238-5 5s2.238 5 5 5h23c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8z", {["fill"]: "#E1E8ED",["d"]: "M28 20c-.825 0-1.62.125-2.369.357C24.744 17.822 22.338 16 19.5 16c-3.044 0-5.592 2.096-6.299 4.921-.754-.57-1.682-.921-2.701-.921C8.015 20 6 22.015 6 24.5c0 .604.123 1.178.339 1.704C5.91 26.085 5.467 26 5 26c-2.762 0-5 2.238-5 5s2.238 5 5 5h23c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};