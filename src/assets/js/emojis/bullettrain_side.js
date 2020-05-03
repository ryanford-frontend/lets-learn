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
				el.appendChild(svg["path"]("M0 34h36v2H0z", {["fill"]: "#939598",["d"]: "M0 34h36v2H0z",}));el.appendChild(svg["path"]("M3 35h33V8S7 9 0 23.999c-2.115 4.531 6 6 6 6L3 35z", {["fill"]: "#BCBEC0",["d"]: "M3 35h33V8S7 9 0 23.999c-2.115 4.531 6 6 6 6L3 35z",}));el.appendChild(svg["path"]("M23 18L8 25H-.31C-.894 28.748 6 29.999 6 29.999L3 35h33V15.29L23 18z", {["fill"]: "#3B88C3",["d"]: "M23 18L8 25H-.31C-.894 28.748 6 29.999 6 29.999L3 35h33V15.29L23 18z",}));el.appendChild(svg["path"]("M14 35l2-3h20v3z", {["fill"]: "#231F20",["d"]: "M14 35l2-3h20v3z",}));el.appendChild(svg["path"]("M36 14.142c-4.347.358-13.388 1.62-19.581 6.044-5.603 4.002-11.877 3.899-16.033 3.829l-.39-.006c-.347.748-.411 1.41-.283 1.998.214.003.411.004.64.008.553.009 1.155.019 1.799.019 4.185 0 10.108-.42 15.429-4.221 5.23-3.735 13.453-5.241 18.419-5.672v-1.999z", {["fill"]: "#E6E7E8",["d"]: "M36 14.142c-4.347.358-13.388 1.62-19.581 6.044-5.603 4.002-11.877 3.899-16.033 3.829l-.39-.006c-.347.748-.411 1.41-.283 1.998.214.003.411.004.64.008.553.009 1.155.019 1.799.019 4.185 0 10.108-.42 15.429-4.221 5.23-3.735 13.453-5.241 18.419-5.672v-1.999z",}));el.appendChild(svg["path"]("M12 16l3.878-4.929C20.727 9.132 29 8.02 36 8.02v2C29 10.019 18 12 12 16z", {["fill"]: "#A7A9AC",["d"]: "M12 16l3.878-4.929C20.727 9.132 29 8.02 36 8.02v2C29 10.019 18 12 12 16z",}));el.appendChild(svg["path"]("M3.095 19.465c1.672-.392 3.617-.723 5.44-1.65C18 13 19.008 10.017 19 10c-7 0-12 4-15.905 9.465z", {["fill"]: "#58595B",["d"]: "M3.095 19.465c1.672-.392 3.617-.723 5.44-1.65C18 13 19.008 10.017 19 10c-7 0-12 4-15.905 9.465z",}));el.appendChild(svg["path"]("M6 29.999L36 30v-2H1.113C2.988 29.452 6 29.999 6 29.999z", {["fill"]: "#269",["d"]: "M6 29.999L36 30v-2H1.113C2.988 29.452 6 29.999 6 29.999z",}));el.appendChild(svg["path"]("M3.549 22.145c.47.034 1.013.019 1.591-.06 1.642-.222 2.913-.846 2.839-1.394-.073-.541-1.435-.803-3.052-.594-.648.632-1.12 1.326-1.378 2.048z", {["fill"]: "#FFE8B6",["d"]: "M3.549 22.145c.47.034 1.013.019 1.591-.06 1.642-.222 2.913-.846 2.839-1.394-.073-.541-1.435-.803-3.052-.594-.648.632-1.12 1.326-1.378 2.048z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};