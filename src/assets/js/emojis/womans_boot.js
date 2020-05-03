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
				el.appendChild(svg["path"]("M34.539 33.488s1.18.215 1.18 1.256c0 1.043-1.042 1.256-2.084 1.256h-17.72C13.831 36 10 32 8 32l-.592 4H1v-2.936c0-2.084-.881-2.285-.881-3.211 0-2.084.672-4.395.672-4.395L17 33l17.539.488z", {["fill"]: "#662113",["d"]: "M34.539 33.488s1.18.215 1.18 1.256c0 1.043-1.042 1.256-2.084 1.256h-17.72C13.831 36 10 32 8 32l-.592 4H1v-2.936c0-2.084-.881-2.285-.881-3.211 0-2.084.672-4.395.672-4.395L17 33l17.539.488z",}));el.appendChild(svg["path"]("M25.449 27.111C23.146 26.054 19.194 21.618 19 21.4 14.149 13.139 19 1 19 1s-1.916-1-7-1c-.674 0-1.343.018-2 .049L9 1 8 .182C4.616.47 2 1 2 1s1 15 1 17-.723 3.401-.723 3.401S.84 23.829.583 24.959c-.287 1.26.22 2.113 1.084 2.322C4.704 28.013 8 29 15.637 32.66c0 0 2 1.34 4.363 1.34h14.539s1.18-.257 1.18-2.424c0-1.084-7.907-3.381-10.27-4.465z", {["fill"]: "#C1694F",["d"]: "M25.449 27.111C23.146 26.054 19.194 21.618 19 21.4 14.149 13.139 19 1 19 1s-1.916-1-7-1c-.674 0-1.343.018-2 .049L9 1 8 .182C4.616.47 2 1 2 1s1 15 1 17-.723 3.401-.723 3.401S.84 23.829.583 24.959c-.287 1.26.22 2.113 1.084 2.322C4.704 28.013 8 29 15.637 32.66c0 0 2 1.34 4.363 1.34h14.539s1.18-.257 1.18-2.424c0-1.084-7.907-3.381-10.27-4.465z",}));el.appendChild(svg["path"]("M10 20V.049c-.687.032-1.356.078-2 .133V20h2z", {["fill"]: "#D99E82",["d"]: "M10 20V.049c-.687.032-1.356.078-2 .133V20h2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};