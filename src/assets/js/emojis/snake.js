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
				el.appendChild(svg["path"]("M11.84 7.634c-.719 0-2.295 2.243-3.567 1.029-.44-.419 1.818-1.278 1.727-2.017-.075-.607-2.842-1.52-1.875-2.099.967-.578 2.418.841 3.513.866 2.382.055 4.212-.853 4.238-.866.541-.274 1.195-.052 1.464.496.27.547.051 1.213-.488 1.486-.131.066-2.225 1.105-5.012 1.105z", {["fill"]: "#DD2E44",["d"]: "M11.84 7.634c-.719 0-2.295 2.243-3.567 1.029-.44-.419 1.818-1.278 1.727-2.017-.075-.607-2.842-1.52-1.875-2.099.967-.578 2.418.841 3.513.866 2.382.055 4.212-.853 4.238-.866.541-.274 1.195-.052 1.464.496.27.547.051 1.213-.488 1.486-.131.066-2.225 1.105-5.012 1.105z",}));el.appendChild(svg["path"]("M27.818 36c-3.967 0-8.182-2.912-8.182-8.308 0-1.374-.89-1.661-1.637-1.661-.746 0-1.636.287-1.636 1.661 0 5.396-4.216 8.308-8.182 8.308S0 33.23 0 27.692C0 14.4 14.182 12.565 14.182 14.4c0 1.835-7.636-1.107-7.636 12.185 0 2.215.89 2.769 1.636 2.769.747 0 1.637-.287 1.637-1.661 0-5.395 4.215-8.308 8.182-8.308 3.966 0 8.182 2.912 8.182 8.308 0 1.374.89 1.661 1.637 1.661s1.636-.287 1.636-1.661V11.077c0-3.855-3.417-4.431-5.454-4.431 0 0-3.272 1.108-6.545 1.108s-4.364-2.596-4.364-4.431C13.091 1.488 17.455 0 24 0c6.546 0 12 4.451 12 11.077v16.615C36 33.088 31.784 36 27.818 36z", {["fill"]: "#77B255",["d"]: "M27.818 36c-3.967 0-8.182-2.912-8.182-8.308 0-1.374-.89-1.661-1.637-1.661-.746 0-1.636.287-1.636 1.661 0 5.396-4.216 8.308-8.182 8.308S0 33.23 0 27.692C0 14.4 14.182 12.565 14.182 14.4c0 1.835-7.636-1.107-7.636 12.185 0 2.215.89 2.769 1.636 2.769.747 0 1.637-.287 1.637-1.661 0-5.395 4.215-8.308 8.182-8.308 3.966 0 8.182 2.912 8.182 8.308 0 1.374.89 1.661 1.637 1.661s1.636-.287 1.636-1.661V11.077c0-3.855-3.417-4.431-5.454-4.431 0 0-3.272 1.108-6.545 1.108s-4.364-2.596-4.364-4.431C13.091 1.488 17.455 0 24 0c6.546 0 12 4.451 12 11.077v16.615C36 33.088 31.784 36 27.818 36z",}));el.appendChild(svg["circle"](19, 3, 2, {["cy"]: "3",["r"]: "1",["fill"]: "#292F33",["cx"]: "19",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};