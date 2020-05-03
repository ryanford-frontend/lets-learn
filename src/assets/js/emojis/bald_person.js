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
				el.appendChild(svg["path"]("M29.5 15.886C28.406 8.197 23.392 4.761 18 4.761S7.594 8.197 6.5 15.886c-1.381 0-2.5 1.791-2.5 4 0 2.107 1.021 3.815 2.314 3.97 1.223 6.649 5.985 10.53 11.686 10.53 5.7 0 10.463-3.881 11.685-10.53 1.294-.155 2.315-1.863 2.315-3.97 0-2.209-1.119-4-2.5-4z", {["fill"]: "#FFDC5D",["d"]: "M29.5 15.886C28.406 8.197 23.392 4.761 18 4.761S7.594 8.197 6.5 15.886c-1.381 0-2.5 1.791-2.5 4 0 2.107 1.021 3.815 2.314 3.97 1.223 6.649 5.985 10.53 11.686 10.53 5.7 0 10.463-3.881 11.685-10.53 1.294-.155 2.315-1.863 2.315-3.97 0-2.209-1.119-4-2.5-4z",}));el.appendChild(svg["path"]("M18 31c-2.347 0-3.575-1.16-3.707-1.293-.391-.391-.391-1.023 0-1.414.387-.387 1.013-.39 1.404-.01.051.047.806.717 2.303.717 1.519 0 2.273-.69 2.305-.719.398-.373 1.027-.362 1.408.029.379.393.38 1.011-.006 1.397C21.575 29.84 20.347 31 18 31zm1-5h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z", {["fill"]: "#C1694F",["d"]: "M18 31c-2.347 0-3.575-1.16-3.707-1.293-.391-.391-.391-1.023 0-1.414.387-.387 1.013-.39 1.404-.01.051.047.806.717 2.303.717 1.519 0 2.273-.69 2.305-.719.398-.373 1.027-.362 1.408.029.379.393.38 1.011-.006 1.397C21.575 29.84 20.347 31 18 31zm1-5h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z",}));el.appendChild(svg["path"]("M13 22c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z", {["fill"]: "#662113",["d"]: "M13 22c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};