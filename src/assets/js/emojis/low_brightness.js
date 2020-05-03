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
				el.appendChild(svg["path"]("M18 8C12.477 8 8 12.477 8 18s4.477 10 10 10 10-4.477 10-10S23.523 8 18 8zm0 16c-3.314 0-6-2.685-6-6 0-3.313 2.686-6 6-6s6 2.687 6 6c0 3.315-2.687 6-6 6z", {["fill"]: "#FFAC33",["d"]: "M18 8C12.477 8 8 12.477 8 18s4.477 10 10 10 10-4.477 10-10S23.523 8 18 8zm0 16c-3.314 0-6-2.685-6-6 0-3.313 2.686-6 6-6s6 2.687 6 6c0 3.315-2.687 6-6 6z",}));el.appendChild(svg["circle"](18, 5, 4, {["cy"]: "5",["r"]: "2",["fill"]: "#FFAC33",["cx"]: "18",}));el.appendChild(svg["circle"](18, 31, 4, {["cy"]: "31",["r"]: "2",["fill"]: "#FFAC33",["cx"]: "18",}));el.appendChild(svg["path"]("M10.222 7.394c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.829.781.781 2.047.781 2.828 0 .781-.782.781-2.048 0-2.829zm18.384 18.384c.781.78.781 2.048 0 2.828-.781.781-2.047.78-2.828 0-.781-.781-.781-2.047 0-2.828.782-.78 2.047-.781 2.828 0z", {["fill"]: "#FFAC33",["d"]: "M10.222 7.394c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.829.781.781 2.047.781 2.828 0 .781-.782.781-2.048 0-2.829zm18.384 18.384c.781.78.781 2.048 0 2.828-.781.781-2.047.78-2.828 0-.781-.781-.781-2.047 0-2.828.782-.78 2.047-.781 2.828 0z",}));el.appendChild(svg["circle"](5, 18, 4, {["cy"]: "18",["r"]: "2",["fill"]: "#FFAC33",["cx"]: "5",}));el.appendChild(svg["circle"](31, 18, 4, {["cy"]: "18",["r"]: "2",["fill"]: "#FFAC33",["cx"]: "31",}));el.appendChild(svg["path"]("M28.605 10.222c.781-.781.781-2.047.001-2.828-.781-.781-2.048-.781-2.829 0-.78.781-.781 2.047 0 2.828.782.781 2.048.781 2.828 0zM10.222 28.606c-.781.781-2.047.781-2.828 0-.781-.781-.781-2.047 0-2.828.781-.781 2.047-.781 2.828 0 .78.782.781 2.047 0 2.828z", {["fill"]: "#FFAC33",["d"]: "M28.605 10.222c.781-.781.781-2.047.001-2.828-.781-.781-2.048-.781-2.829 0-.78.781-.781 2.047 0 2.828.782.781 2.048.781 2.828 0zM10.222 28.606c-.781.781-2.047.781-2.828 0-.781-.781-.781-2.047 0-2.828.781-.781 2.047-.781 2.828 0 .78.782.781 2.047 0 2.828z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};