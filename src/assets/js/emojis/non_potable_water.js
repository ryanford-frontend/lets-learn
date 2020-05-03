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
				el.appendChild(svg["path"]("M34.999 17.999c0 9.389-7.611 17-17 17S1 27.388 1 17.999 8.61 1 17.999 1s17 7.61 17 16.999z", {["d"]: "M34.999 17.999c0 9.389-7.611 17-17 17S1 27.388 1 17.999 8.61 1 17.999 1s17 7.61 17 16.999z",}));el.appendChild(svg["path"]("M17 19c-1 0-1 1-1 1v4h-6v-4s-.021-1-1.021-1S8 20 8 20v8s0 2 2 2h6c2 0 2-2 2-2v-8s0-1-1-1z", {["fill"]: "#FFF",["d"]: "M17 19c-1 0-1 1-1 1v4h-6v-4s-.021-1-1.021-1S8 20 8 20v8s0 2 2 2h6c2 0 2-2 2-2v-8s0-1-1-1z",}));el.appendChild(svg["path"]("M28 10h-9V5s0-1-1-1-1 1-1 1v5c-6 0-6 6-6 6v1c0 1 1 1 1 1h2s1 0 1-1v-1c0-2 2-2 2-2h11c1 0 1-1 1-1v-2s0-1-1-1z", {["d"]: "M28 10h-9V5s0-1-1-1-1 1-1 1v5c-6 0-6 6-6 6v1c0 1 1 1 1 1h2s1 0 1-1v-1c0-2 2-2 2-2h11c1 0 1-1 1-1v-2s0-1-1-1z",["fill"]: "#FFF",}));el.appendChild(svg["path"]("M16 5h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm4 2h2c.553 0 1-.448 1-1s-.447-1-1-1h-2c-.553 0-1 .448-1 1s.447 1 1 1z", {["d"]: "M16 5h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm4 2h2c.553 0 1-.448 1-1s-.447-1-1-1h-2c-.553 0-1 .448-1 1s.447 1 1 1z",["fill"]: "#FFF",}));el.appendChild(svg["path"]("M18 0C8.059 0 0 8.06 0 18c0 9.941 8.059 18 18 18s18-8.059 18-18c0-9.94-8.059-18-18-18zm16 18c0 3.968-1.453 7.591-3.845 10.388L7.612 5.845C10.409 3.453 14.032 2 18 2c8.837 0 16 7.164 16 16zM2 18c0-3.968 1.453-7.592 3.845-10.388l22.543 22.544C25.592 32.548 21.968 34 18 34 9.164 34 2 26.837 2 18z", {["fill"]: "#DD2E44",["d"]: "M18 0C8.059 0 0 8.06 0 18c0 9.941 8.059 18 18 18s18-8.059 18-18c0-9.94-8.059-18-18-18zm16 18c0 3.968-1.453 7.591-3.845 10.388L7.612 5.845C10.409 3.453 14.032 2 18 2c8.837 0 16 7.164 16 16zM2 18c0-3.968 1.453-7.592 3.845-10.388l22.543 22.544C25.592 32.548 21.968 34 18 34 9.164 34 2 26.837 2 18z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};