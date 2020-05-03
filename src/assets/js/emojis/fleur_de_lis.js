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
				el.appendChild(svg["path"]("M10.582 18c2.075 1.244 2.74 3.559 2.416 6h4.837c.103-.649.165-1.316.165-2 0-6.075-5.001-11.731-10.27-11.731-8.479 0-9.866 9.043-4.567 11.731-1.059-5 4.122-5.975 7.419-4zm14.875 0c-2.075 1.244-2.74 3.559-2.416 6h-4.837c-.104-.649-.165-1.316-.165-2 0-6.075 5.001-11.731 10.269-11.731 8.479 0 9.866 9.043 4.567 11.731 1.061-5-4.121-5.975-7.418-4zm4.334 8.647C29.315 28.014 28.028 29 26.5 29c-1.762 0-3.205-1.307-3.449-3h-2.615c-.271.614-.436 1.285-.436 2 0 2.762 2.238 5 5 5s5-2.238 5-5c0-.472-.086-.92-.209-1.353zM12.949 26c-.244 1.693-1.688 3-3.449 3-1.528 0-2.814-.986-3.291-2.353C6.086 27.08 6 27.528 6 28c0 2.762 2.238 5 5 5s5-2.238 5-5c0-.715-.165-1.386-.436-2h-2.615z", {["fill"]: "#744EAA",["d"]: "M10.582 18c2.075 1.244 2.74 3.559 2.416 6h4.837c.103-.649.165-1.316.165-2 0-6.075-5.001-11.731-10.27-11.731-8.479 0-9.866 9.043-4.567 11.731-1.059-5 4.122-5.975 7.419-4zm14.875 0c-2.075 1.244-2.74 3.559-2.416 6h-4.837c-.104-.649-.165-1.316-.165-2 0-6.075 5.001-11.731 10.269-11.731 8.479 0 9.866 9.043 4.567 11.731 1.061-5-4.121-5.975-7.418-4zm4.334 8.647C29.315 28.014 28.028 29 26.5 29c-1.762 0-3.205-1.307-3.449-3h-2.615c-.271.614-.436 1.285-.436 2 0 2.762 2.238 5 5 5s5-2.238 5-5c0-.472-.086-.92-.209-1.353zM12.949 26c-.244 1.693-1.688 3-3.449 3-1.528 0-2.814-.986-3.291-2.353C6.086 27.08 6 27.528 6 28c0 2.762 2.238 5 5 5s5-2.238 5-5c0-.715-.165-1.386-.436-2h-2.615z",}));el.appendChild(svg["path"]("M13 10.227C13 3.951 18 0 18 0s5 3.951 5 10.227S20.762 25 18 25s-5-8.497-5-14.773z", {["fill"]: "#AA8DD8",["d"]: "M13 10.227C13 3.951 18 0 18 0s5 3.951 5 10.227S20.762 25 18 25s-5-8.497-5-14.773z",}));el.appendChild(svg["path"]("M14 30c0-3.313 2.344-6 4-6 1.656 0 4 2.687 4 6s-4 6-4 6-4-2.687-4-6z", {["fill"]: "#AA8DD8",["d"]: "M14 30c0-3.313 2.344-6 4-6 1.656 0 4 2.687 4 6s-4 6-4 6-4-2.687-4-6z",}));el.appendChild(svg["path"]("M25 24.5c0 1.933-1.567 3.5-3.5 3.5h-7c-1.934 0-3.5-1.567-3.5-3.5s1.566-3.5 3.5-3.5h7c1.933 0 3.5 1.567 3.5 3.5z", {["fill"]: "#9266CC",["d"]: "M25 24.5c0 1.933-1.567 3.5-3.5 3.5h-7c-1.934 0-3.5-1.567-3.5-3.5s1.566-3.5 3.5-3.5h7c1.933 0 3.5 1.567 3.5 3.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};