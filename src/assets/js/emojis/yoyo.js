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
				el.appendChild(svg["ellipse"](17.722, 21.507, 25.834, 27.986, {["rx"]: "12.917",["cy"]: "21.507",["ry"]: "13.993",["fill"]: "#BE1931",["cx"]: "17.722",}));el.appendChild(svg["ellipse"](15.569, 21.507, 25.834, 27.986, {["rx"]: "12.917",["cy"]: "21.507",["ry"]: "13.993",["fill"]: "#A0041E",["cx"]: "15.569",}));el.appendChild(svg["path"]("M28.298 13.741c-1.643 0-3.457-.825-5.227-1.629-2.124-.966-4.322-1.966-5.46-1.113l-1.167-1.555c2.06-1.544 4.79-.303 7.431.898 2.023.92 4.117 1.868 5.327 1.263.664-.331 1.155-1.195 1.459-2.566l1.899.422c-.444 2-1.259 3.27-2.49 3.885-.558.278-1.153.395-1.772.395z", {["fill"]: "#99AAB5",["d"]: "M28.298 13.741c-1.643 0-3.457-.825-5.227-1.629-2.124-.966-4.322-1.966-5.46-1.113l-1.167-1.555c2.06-1.544 4.79-.303 7.431.898 2.023.92 4.117 1.868 5.327 1.263.664-.331 1.155-1.195 1.459-2.566l1.899.422c-.444 2-1.259 3.27-2.49 3.885-.558.278-1.153.395-1.772.395z",}));el.appendChild(svg["ellipse"](13.417, 21.507, 25.834, 27.986, {["rx"]: "12.917",["cy"]: "21.507",["ry"]: "13.993",["fill"]: "#DD2E44",["cx"]: "13.417",}));el.appendChild(svg["ellipse"](12.878, 21.507, 18.298, 20.866, {["rx"]: "9.149",["cy"]: "21.507",["ry"]: "10.433",["fill"]: "#EA596E",["cx"]: "12.878",}));el.appendChild(svg["path"]("M31.611 10.222c-2.41 0-3.889-3.398-3.889-5.833S29.176.5 31.611.5 35.5 1.954 35.5 4.389c0 2.436-1.479 5.833-3.889 5.833zm0-7.778c-1.344 0-1.944.6-1.944 1.944 0 1.878 1.141 3.889 1.944 3.889s1.944-2.011 1.944-3.889c.001-1.344-.599-1.944-1.944-1.944z", {["fill"]: "#99AAB5",["d"]: "M31.611 10.222c-2.41 0-3.889-3.398-3.889-5.833S29.176.5 31.611.5 35.5 1.954 35.5 4.389c0 2.436-1.479 5.833-3.889 5.833zm0-7.778c-1.344 0-1.944.6-1.944 1.944 0 1.878 1.141 3.889 1.944 3.889s1.944-2.011 1.944-3.889c.001-1.344-.599-1.944-1.944-1.944z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};