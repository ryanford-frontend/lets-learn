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
				el.appendChild(svg["path"]("M0 34h36v2H0z", {["fill"]: "#939598",["d"]: "M0 34h36v2H0z",}));el.appendChild(svg["path"]("M8 32c0-1.657-1.344-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z", {["fill"]: "#58595B",["d"]: "M8 32c0-1.657-1.344-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z",}));el.appendChild(svg["path"]("M7 32c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z", {["fill"]: "#292F33",["d"]: "M7 32c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z",}));el.appendChild(svg["path"]("M16 32c0-1.657-1.344-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z", {["fill"]: "#58595B",["d"]: "M16 32c0-1.657-1.344-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z",}));el.appendChild(svg["path"]("M15 32c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z", {["fill"]: "#292F33",["d"]: "M15 32c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z",}));el.appendChild(svg["circle"](32, 32, 6, {["cy"]: "32",["r"]: "3",["fill"]: "#58595B",["cx"]: "32",}));el.appendChild(svg["circle"](32, 32, 4, {["cy"]: "32",["r"]: "2",["fill"]: "#292F33",["cx"]: "32",}));el.appendChild(svg["circle"](24, 32, 6, {["cy"]: "32",["r"]: "3",["fill"]: "#58595B",["cx"]: "24",}));el.appendChild(svg["circle"](24, 32, 4, {["cy"]: "32",["r"]: "2",["fill"]: "#292F33",["cx"]: "24",}));el.appendChild(svg["path"]("M0 28h36v4H0z", {["fill"]: "#5C913B",["d"]: "M0 28h36v4H0z",}));el.appendChild(svg["path"]("M0 16h36v12H0z", {["fill"]: "#FFE8B6",["d"]: "M0 16h36v12H0z",}));el.appendChild(svg["path"]("M0 26h36v2H0z", {["fill"]: "#FFAC33",["d"]: "M0 26h36v2H0z",}));el.appendChild(svg["path"]("M32.555 14H3.445C1.969 14 .693 14.81 0 16h36c-.693-1.19-1.969-2-3.445-2z", {["fill"]: "#77B255",["d"]: "M32.555 14H3.445C1.969 14 .693 14.81 0 16h36c-.693-1.19-1.969-2-3.445-2z",}));el.appendChild(svg["path"]("M5 22c0 .553-.447 1-1 1H2c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1H8c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2z", {["d"]: "M5 22c0 .553-.447 1-1 1H2c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1H8c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2zm6 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v2z",["fill"]: "#55ACEE",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};