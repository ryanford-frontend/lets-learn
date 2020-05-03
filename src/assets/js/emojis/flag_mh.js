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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#003893",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M34.593 5.977L.835 29.42c.025.033.053.064.08.098L36 11V9c0-1.214-.553-2.289-1.407-3.023z", {["fill"]: "#F4900C",["d"]: "M34.593 5.977L.835 29.42c.025.033.053.064.08.098L36 11V9c0-1.214-.553-2.289-1.407-3.023z",}));el.appendChild(svg["path"]("M1.012 29.635L36 17v-6L.915 29.518c.032.039.063.079.097.117z", {["fill"]: "#EEE",["d"]: "M1.012 29.635L36 17v-6L.915 29.518c.032.039.063.079.097.117z",}));el.appendChild(svg["path"]("M9 6.917l.306 5.156 1.022-2.158-.442 2.347 1.639-1.737-1.146 2.096 2.096-1.146-1.737 1.639 2.347-.442-2.158 1.023 5.156.305-5.156.306 2.158 1.022-2.347-.442 1.737 1.639-2.096-1.146 1.146 2.096-1.639-1.736.442 2.346-1.022-2.158L9 21.082l-.306-5.155-1.022 2.158.442-2.346-1.639 1.736 1.146-2.096-2.096 1.146 1.737-1.639-2.347.442 2.158-1.022L1.917 14l5.156-.305-2.158-1.023 2.347.442-1.737-1.639 2.096 1.146-1.146-2.096 1.639 1.737-.442-2.347 1.022 2.158z", {["fill"]: "#FFF",["d"]: "M9 6.917l.306 5.156 1.022-2.158-.442 2.347 1.639-1.737-1.146 2.096 2.096-1.146-1.737 1.639 2.347-.442-2.158 1.023 5.156.305-5.156.306 2.158 1.022-2.347-.442 1.737 1.639-2.096-1.146 1.146 2.096-1.639-1.736.442 2.346-1.022-2.158L9 21.082l-.306-5.155-1.022 2.158.442-2.346-1.639 1.736 1.146-2.096-2.096 1.146 1.737-1.639-2.347.442 2.158-1.022L1.917 14l5.156-.305-2.158-1.023 2.347.442-1.737-1.639 2.096 1.146-1.146-2.096 1.639 1.737-.442-2.347 1.022 2.158z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};