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
				el.appendChild(svg["path"]("M36 13.5c0-4.558-4.435-8.267-10-8.479V5H10v.021C4.435 5.233 0 8.942 0 13.5c0 1.861.747 3.576 2 4.976V31c0 2.209 1.791 4 4 4h24c2.209 0 4-1.791 4-4V18.476c1.253-1.4 2-3.115 2-4.976z", {["fill"]: "#D99E82",["d"]: "M36 13.5c0-4.558-4.435-8.267-10-8.479V5H10v.021C4.435 5.233 0 8.942 0 13.5c0 1.861.747 3.576 2 4.976V31c0 2.209 1.791 4 4 4h24c2.209 0 4-1.791 4-4V18.476c1.253-1.4 2-3.115 2-4.976z",}));el.appendChild(svg["path"]("M19 18.476h15v1.5H19z", {["fill"]: "#CC927A",["d"]: "M19 18.476h15v1.5H19z",}));el.appendChild(svg["path"]("M21 13.5c0-3.461-3.538-6.291-8-6.489C12.835 7.004 10.668 7 10.5 7 5.806 7 2 9.91 2 13.5c0 1.595.754 3.053 2 4.184V30c0 1.657 1.343 3 3 3h9c1.657 0 3-1.343 3-3V17.679c1.244-1.131 2-2.586 2-4.179z", {["fill"]: "#FFE8B6",["d"]: "M21 13.5c0-3.461-3.538-6.291-8-6.489C12.835 7.004 10.668 7 10.5 7 5.806 7 2 9.91 2 13.5c0 1.595.754 3.053 2 4.184V30c0 1.657 1.343 3 3 3h9c1.657 0 3-1.343 3-3V17.679c1.244-1.131 2-2.586 2-4.179z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};