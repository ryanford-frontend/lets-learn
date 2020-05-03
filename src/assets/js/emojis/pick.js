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
				el.appendChild(svg["path"]("M29.185 33.279c1.166 1.166 3.022 1.221 4.121.121 1.1-1.1 1.045-2.955-.121-4.121L9.921 6.014C8.754 4.847 6.899 4.792 5.8 5.893c-1.101 1.1-1.046 2.955.121 4.121l23.264 23.265z", {["d"]: "M29.185 33.279c1.166 1.166 3.022 1.221 4.121.121 1.1-1.1 1.045-2.955-.121-4.121L9.921 6.014C8.754 4.847 6.899 4.792 5.8 5.893c-1.101 1.1-1.046 2.955.121 4.121l23.264 23.265z",["fill"]: "#F4900C",}));el.appendChild(svg["path"]("M3.415 7.657c-.781-.781-.781-2.048 0-2.829l1.414-1.414c.78-.78 2.047-.78 2.828 0 .781.781.781 2.048 0 2.829L6.243 7.657c-.781.781-2.048.781-2.828 0z", {["d"]: "M3.415 7.657c-.781-.781-.781-2.048 0-2.829l1.414-1.414c.78-.78 2.047-.78 2.828 0 .781.781.781 2.048 0 2.829L6.243 7.657c-.781.781-2.048.781-2.828 0z",["fill"]: "#F4900C",}));el.appendChild(svg["path"]("M23 1C21.143.257 12-2 5 5S.257 21.143 1 23c2 5 1.671-1.063 2-3 1.015-5.971 3.822-9.178 5.822-11.178S14.051 4.029 20 3c1.921-.332 8 0 3-2z", {["fill"]: "#66757F",["d"]: "M23 1C21.143.257 12-2 5 5S.257 21.143 1 23c2 5 1.671-1.063 2-3 1.015-5.971 3.822-9.178 5.822-11.178S14.051 4.029 20 3c1.921-.332 8 0 3-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};