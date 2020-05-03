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
				el.appendChild(svg["path"]("M32 5H9v26h23c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4zm-9.5 20.472c-4.142 0-7.5-3.358-7.5-7.5 0-3.72 2.711-6.799 6.263-7.39-2.22 1.034-3.763 3.279-3.763 5.89 0 3.59 2.91 6.5 6.5 6.5 2.611 0 4.856-1.543 5.89-3.763-.591 3.553-3.67 6.263-7.39 6.263zm5.11-10.424l-1.213 2.022-.208-2.349-2.298-.528 2.17-.924-.207-2.349 1.548 1.779 2.17-.924-1.212 2.023 1.548 1.779-2.298-.529z", {["fill"]: "#004600",["d"]: "M32 5H9v26h23c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4zm-9.5 20.472c-4.142 0-7.5-3.358-7.5-7.5 0-3.72 2.711-6.799 6.263-7.39-2.22 1.034-3.763 3.279-3.763 5.89 0 3.59 2.91 6.5 6.5 6.5 2.611 0 4.856-1.543 5.89-3.763-.591 3.553-3.67 6.263-7.39 6.263zm5.11-10.424l-1.213 2.022-.208-2.349-2.298-.528 2.17-.924-.207-2.349 1.548 1.779 2.17-.924-1.212 2.023 1.548 1.779-2.298-.529z",}));el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h5V5H4z", {["fill"]: "#EEE",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h5V5H4z",}));el.appendChild(svg["path"]("M29.572 11.775l-2.17.924-1.548-1.779.207 2.349-2.17.924 2.298.528.208 2.349 1.213-2.022 2.298.529-1.548-1.779z", {["fill"]: "#FFF",["d"]: "M29.572 11.775l-2.17.924-1.548-1.779.207 2.349-2.17.924 2.298.528.208 2.349 1.213-2.022 2.298.529-1.548-1.779z",}));el.appendChild(svg["path"]("M24 22.972c-3.59 0-6.5-2.91-6.5-6.5 0-2.611 1.543-4.856 3.763-5.89-3.552.592-6.263 3.671-6.263 7.39 0 4.142 3.358 7.5 7.5 7.5 3.72 0 6.799-2.711 7.39-6.263-1.034 2.221-3.279 3.763-5.89 3.763z", {["fill"]: "#FFF",["d"]: "M24 22.972c-3.59 0-6.5-2.91-6.5-6.5 0-2.611 1.543-4.856 3.763-5.89-3.552.592-6.263 3.671-6.263 7.39 0 4.142 3.358 7.5 7.5 7.5 3.72 0 6.799-2.711 7.39-6.263-1.034 2.221-3.279 3.763-5.89 3.763z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};