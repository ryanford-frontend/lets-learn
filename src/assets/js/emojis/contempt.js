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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18",}));el.appendChild(svg["ellipse"](12, 16.5, 5, 5.5, {["rx"]: "2.5",["cy"]: "16.5",["ry"]: "2.75",["fill"]: "#664500",["cx"]: "12",}));el.appendChild(svg["ellipse"](24, 16.5, 5, 7, {["rx"]: "2.5",["cy"]: "16.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "24",}));el.appendChild(svg["path"]("M7.102 12.559c.249.176.574.236.885.135 4.187-1.355 7.027.554 7.146.636.453.312 1.075.201 1.39-.25.315-.451.208-1.071-.241-1.388-.15-.106-3.736-2.575-8.91-.901-.526.17-.814.734-.643 1.259.068.214.203.388.373.509zM25 26H11c-.552 0-1-.447-1-1s.448-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm5.001-15.592c-.368 0-.731-.161-.979-.471-1.395-1.751-4.299-3.287-5.314-3.287-.642 0-1.925.911-2.604 1.568-.496.482-1.288.467-1.767-.028-.48-.495-.469-1.285.024-1.766.391-.38 2.436-2.275 4.347-2.275 2.005 0 5.538 2.056 7.27 4.229.431.54.341 1.326-.198 1.756-.231.185-.507.274-.779.274z", {["fill"]: "#664500",["d"]: "M7.102 12.559c.249.176.574.236.885.135 4.187-1.355 7.027.554 7.146.636.453.312 1.075.201 1.39-.25.315-.451.208-1.071-.241-1.388-.15-.106-3.736-2.575-8.91-.901-.526.17-.814.734-.643 1.259.068.214.203.388.373.509zM25 26H11c-.552 0-1-.447-1-1s.448-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm5.001-15.592c-.368 0-.731-.161-.979-.471-1.395-1.751-4.299-3.287-5.314-3.287-.642 0-1.925.911-2.604 1.568-.496.482-1.288.467-1.767-.028-.48-.495-.469-1.285.024-1.766.391-.38 2.436-2.275 4.347-2.275 2.005 0 5.538 2.056 7.27 4.229.431.54.341 1.326-.198 1.756-.231.185-.507.274-.779.274z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};