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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#DD2E44",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M10.498 9.249c0-1.488 1.023-2.325 2.449-2.325H18.9c3.224 0 5.83 2.17 5.83 5.457 0 2.17-.9 3.628-2.885 4.558v.062c2.637.372 4.713 2.573 4.713 5.271 0 4.372-2.914 6.729-7.193 6.729h-6.386c-1.427 0-2.481-.899-2.481-2.356V9.249zm4.651 6.418h2.419c1.519 0 2.511-.899 2.511-2.45 0-1.457-1.147-2.201-2.511-2.201h-2.419v4.651zm0 9.24h3.659c1.674 0 2.915-.961 2.915-2.697 0-1.458-1.117-2.45-3.287-2.45h-3.287v5.147z", {["fill"]: "#FFF",["d"]: "M10.498 9.249c0-1.488 1.023-2.325 2.449-2.325H18.9c3.224 0 5.83 2.17 5.83 5.457 0 2.17-.9 3.628-2.885 4.558v.062c2.637.372 4.713 2.573 4.713 5.271 0 4.372-2.914 6.729-7.193 6.729h-6.386c-1.427 0-2.481-.899-2.481-2.356V9.249zm4.651 6.418h2.419c1.519 0 2.511-.899 2.511-2.45 0-1.457-1.147-2.201-2.511-2.201h-2.419v4.651zm0 9.24h3.659c1.674 0 2.915-.961 2.915-2.697 0-1.458-1.117-2.45-3.287-2.45h-3.287v5.147z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};