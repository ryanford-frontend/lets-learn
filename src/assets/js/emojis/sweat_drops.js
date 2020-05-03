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
				el.appendChild(svg["path"]("M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518 4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284.137 23.529c-.534 2.855.502 5.902 2.958 7.803 3.494 2.705 8.518 2.066 11.224-1.426 2.705-3.492 2.067-8.517-1.426-11.224zm15.339 7.015l-8.156-4.69-.033 9.223c-.088 2 .904 3.98 2.75 5.041 2.631 1.512 5.977.594 7.479-2.051 1.499-2.644.589-6.013-2.04-7.523z", {["fill"]: "#5DADEC",["d"]: "M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518 4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284.137 23.529c-.534 2.855.502 5.902 2.958 7.803 3.494 2.705 8.518 2.066 11.224-1.426 2.705-3.492 2.067-8.517-1.426-11.224zm15.339 7.015l-8.156-4.69-.033 9.223c-.088 2 .904 3.98 2.75 5.041 2.631 1.512 5.977.594 7.479-2.051 1.499-2.644.589-6.013-2.04-7.523z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};