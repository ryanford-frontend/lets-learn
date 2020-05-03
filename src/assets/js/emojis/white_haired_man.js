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
				el.appendChild(svg["path"]("M32 20c0-2.209-1.119-4-2.5-4-.012 0-.021.005-.033.005C27.955 9.704 23.394 5.125 18 5.125s-9.956 4.58-11.467 10.88C6.521 16.004 6.511 16 6.5 16 5.119 16 4 17.791 4 20c0 2.107 1.021 3.815 2.314 3.97C7.537 30.619 12.299 35 18 35c5.7 0 10.463-4.381 11.685-11.03C30.979 23.815 32 22.107 32 20z", {["fill"]: "#FFDC5D",["d"]: "M32 20c0-2.209-1.119-4-2.5-4-.012 0-.021.005-.033.005C27.955 9.704 23.394 5.125 18 5.125s-9.956 4.58-11.467 10.88C6.521 16.004 6.511 16 6.5 16 5.119 16 4 17.791 4 20c0 2.107 1.021 3.815 2.314 3.97C7.537 30.619 12.299 35 18 35c5.7 0 10.463-4.381 11.685-11.03C30.979 23.815 32 22.107 32 20z",}));el.appendChild(svg["path"]("M13 21c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z", {["fill"]: "#662113",["d"]: "M13 21c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z",}));el.appendChild(svg["path"]("M18 31c-4.201 0-5.491-1.077-5.707-1.293-.391-.391-.391-1.023 0-1.414.378-.379.984-.39 1.376-.036.08.058 1.1.743 4.331.743 3.355 0 4.326-.739 4.336-.747.39-.389 1.001-.37 1.393.021.391.391.369 1.043-.021 1.434C23.491 29.923 22.201 31 18 31zm1-5h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z", {["fill"]: "#C1694F",["d"]: "M18 31c-4.201 0-5.491-1.077-5.707-1.293-.391-.391-.391-1.023 0-1.414.378-.379.984-.39 1.376-.036.08.058 1.1.743 4.331.743 3.355 0 4.326-.739 4.336-.747.39-.389 1.001-.37 1.393.021.391.391.369 1.043-.021 1.434C23.491 29.923 22.201 31 18 31zm1-5h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z",}));el.appendChild(svg["path"]("M18 1c8 0 13 6 13 11s-1 7-2 5l-2-4s-6 0-8-2c0 0 3 6-3 0 0 0 1 4-5-1 0 0-3 2-4 7-.277 1.387-2 0-2-5S9 1 18 1z", {["fill"]: "#E1E8ED",["d"]: "M18 1c8 0 13 6 13 11s-1 7-2 5l-2-4s-6 0-8-2c0 0 3 6-3 0 0 0 1 4-5-1 0 0-3 2-4 7-.277 1.387-2 0-2-5S9 1 18 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};