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
				el.appendChild(svg["circle"](13, 33, 6, {["cy"]: "33",["r"]: "3",["fill"]: "#67757F",["cx"]: "13",}));el.appendChild(svg["circle"](32, 33, 6, {["cy"]: "33",["r"]: "3",["fill"]: "#67757F",["cx"]: "32",}));el.appendChild(svg["path"]("M13 32h19v2H13z", {["fill"]: "#67757F",["d"]: "M13 32h19v2H13z",}));el.appendChild(svg["path"]("M20 15.502c0-1.381 1.119-1.5 2.5-1.5s2.5.119 2.5 1.5V33.5c0 1.381-1.119 2.5-2.5 2.5S20 34.881 20 33.5V15.502z", {["fill"]: "#9AAAB4",["d"]: "M20 15.502c0-1.381 1.119-1.5 2.5-1.5s2.5.119 2.5 1.5V33.5c0 1.381-1.119 2.5-2.5 2.5S20 34.881 20 33.5V15.502z",}));el.appendChild(svg["path"]("M27 15.002c0 1.104-.896 2-2 2h-5c-1.104 0-2-.896-2-2 0-1.105.896-1 2-1h5c1.104 0 2-.104 2 1z", {["fill"]: "#67757F",["d"]: "M27 15.002c0 1.104-.896 2-2 2h-5c-1.104 0-2-.896-2-2 0-1.105.896-1 2-1h5c1.104 0 2-.104 2 1z",}));el.appendChild(svg["path"]("M28 27c0 1.104-.896 2-2 2h-7c-1.104 0-2-.896-2-2v-5c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v5zm0-22c0 1.104-.896 2-2 2h-7c-1.104 0-2-.896-2-2V4c0-1.105.896-2 2-2h7c1.104 0 2 .895 2 2v1z", {["fill"]: "#DA2F47",["d"]: "M28 27c0 1.104-.896 2-2 2h-7c-1.104 0-2-.896-2-2v-5c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v5zm0-22c0 1.104-.896 2-2 2h-7c-1.104 0-2-.896-2-2V4c0-1.105.896-2 2-2h7c1.104 0 2 .895 2 2v1z",}));el.appendChild(svg["path"]("M13 22c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h15V4c0-2.209-1.791-4-4-4H7C4.791 0 3 1.791 3 4v19c0 2.209 1.791 4 4 4h14c2.209 0 4-1.791 4-4v-1H13z", {["fill"]: "#DA2F47",["d"]: "M13 22c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h15V4c0-2.209-1.791-4-4-4H7C4.791 0 3 1.791 3 4v19c0 2.209 1.791 4 4 4h14c2.209 0 4-1.791 4-4v-1H13z",}));el.appendChild(svg["path"]("M9 20c0 1.104-.896 2-2 2s-2-.896-2-2V7c0-1.104.896-2 2-2s2 .896 2 2v13z", {["fill"]: "#E75A70",["d"]: "M9 20c0 1.104-.896 2-2 2s-2-.896-2-2V7c0-1.104.896-2 2-2s2 .896 2 2v13z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};