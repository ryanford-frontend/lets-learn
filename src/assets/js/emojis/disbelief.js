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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#FFCC4D",["cx"]: "18",}));el.appendChild(svg["circle"](24.5, 13.5, 11, {["cy"]: "13.5",["r"]: "5.5",["fill"]: "#F4F7F9",["cx"]: "24.5",}));el.appendChild(svg["circle"](11.5, 13.5, 11, {["cy"]: "13.5",["r"]: "5.5",["fill"]: "#F4F7F9",["cx"]: "11.5",}));el.appendChild(svg["path"]("M23.109 23.424c-2.763-.667-8.873-.06-11.162 4.405-.082.158-.04.353.1.464.068.055.151.082.234.082.085 0 .171-.029.241-.087 3.084-2.58 7.436-2.58 10.036-2.58 1.635 0 2.536 0 2.536-.708s-.705-1.268-1.985-1.576zM10.5 13c1.381 0 2.5-1.119 2.5-2.5 0-1.252-.923-2.28-2.124-2.462-.79.089-1.526.348-2.178.736C8.268 9.223 8 9.829 8 10.5c0 1.381 1.119 2.5 2.5 2.5zm13 0c1.381 0 2.5-1.119 2.5-2.5 0-1.252-.923-2.28-2.124-2.462-.789.089-1.526.348-2.177.736C21.268 9.223 21 9.829 21 10.5c0 1.381 1.119 2.5 2.5 2.5z", {["fill"]: "#65471B",["d"]: "M23.109 23.424c-2.763-.667-8.873-.06-11.162 4.405-.082.158-.04.353.1.464.068.055.151.082.234.082.085 0 .171-.029.241-.087 3.084-2.58 7.436-2.58 10.036-2.58 1.635 0 2.536 0 2.536-.708s-.705-1.268-1.985-1.576zM10.5 13c1.381 0 2.5-1.119 2.5-2.5 0-1.252-.923-2.28-2.124-2.462-.79.089-1.526.348-2.178.736C8.268 9.223 8 9.829 8 10.5c0 1.381 1.119 2.5 2.5 2.5zm13 0c1.381 0 2.5-1.119 2.5-2.5 0-1.252-.923-2.28-2.124-2.462-.789.089-1.526.348-2.177.736C21.268 9.223 21 9.829 21 10.5c0 1.381 1.119 2.5 2.5 2.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};