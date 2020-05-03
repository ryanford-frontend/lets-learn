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
				el.appendChild(svg["path"]("M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z", {["fill"]: "#DD2E44",["d"]: "M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z",}));el.appendChild(svg["path"]("M36 15c-1 5-4 8-4 8H4s-3-3-4-8h36z", {["fill"]: "#FDD888",["d"]: "M36 15c-1 5-4 8-4 8H4s-3-3-4-8h36z",}));el.appendChild(svg["path"]("M14 18v18l-5-5-5 5V18z", {["fill"]: "#FDD888",["d"]: "M14 18v18l-5-5-5 5V18z",}));el.appendChild(svg["path"]("M16.802 9.194l-7.879 5.515-7.878-5.515C.47 8.792 0 9.036 0 9.738v14.658c0 .703.48.965 1.069.582l7.854-5.106 7.854 5.106c.588.383 1.069.121 1.069-.582V9.738c.001-.702-.47-.946-1.044-.544z", {["fill"]: "#FDCB58",["d"]: "M16.802 9.194l-7.879 5.515-7.878-5.515C.47 8.792 0 9.036 0 9.738v14.658c0 .703.48.965 1.069.582l7.854-5.106 7.854 5.106c.588.383 1.069.121 1.069-.582V9.738c.001-.702-.47-.946-1.044-.544z",}));el.appendChild(svg["circle"](9, 17, 8, {["cy"]: "17",["r"]: "4",["fill"]: "#FDD888",["cx"]: "9",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};