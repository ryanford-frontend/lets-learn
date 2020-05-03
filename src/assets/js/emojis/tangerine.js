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
				el.appendChild(svg["path"]("M3 19.5C3 10.388 10.387 3 19.499 3c9.113 0 16.5 7.387 16.5 16.5S28.612 36 19.499 36C10.387 36 3 28.613 3 19.5z", {["fill"]: "#F4900C",["d"]: "M3 19.5C3 10.388 10.387 3 19.499 3c9.113 0 16.5 7.387 16.5 16.5S28.612 36 19.499 36C10.387 36 3 28.613 3 19.5z",}));el.appendChild(svg["path"]("M11.414 7.585c-.267-.267-.797-.197-1.355.12-3.3-2.732-8.653-3.652-8.895-3.692-.546-.089-1.059.277-1.15.821-.091.544.276 1.06.821 1.151.053.009 4.934.854 7.821 3.16-.275.525-.324 1.015-.07 1.268.39.391 1.34.074 2.121-.707.781-.78 1.097-1.73.707-2.121z", {["fill"]: "#662113",["d"]: "M11.414 7.585c-.267-.267-.797-.197-1.355.12-3.3-2.732-8.653-3.652-8.895-3.692-.546-.089-1.059.277-1.15.821-.091.544.276 1.06.821 1.151.053.009 4.934.854 7.821 3.16-.275.525-.324 1.015-.07 1.268.39.391 1.34.074 2.121-.707.781-.78 1.097-1.73.707-2.121z",}));el.appendChild(svg["path"]("M21 1s-3.106 4.318-7.021 5.273C11 7 7.041 7.07 6.646 6.15c-.394-.919 1.572-3.937 4.969-5.393C15.012-.698 21 1 21 1z", {["fill"]: "#5C913B",["d"]: "M21 1s-3.106 4.318-7.021 5.273C11 7 7.041 7.07 6.646 6.15c-.394-.919 1.572-3.937 4.969-5.393C15.012-.698 21 1 21 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};