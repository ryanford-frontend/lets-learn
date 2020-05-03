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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18zm-18-3c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z", {["fill"]: "#8899A6",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18zm-18-3c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z",}));el.appendChild(svg["path"]("M13.288 17.476c.122-1.104.598-2.101 1.343-2.846L6.686 6.686C4.182 9.19 2.51 12.521 2.102 16.233l11.186 1.243zm9.425 1.048c-.122 1.104-.598 2.101-1.343 2.846l7.944 7.944c2.504-2.504 4.176-5.835 4.584-9.547l-11.185-1.243z", {["fill"]: "#CCD6DD",["d"]: "M13.288 17.476c.122-1.104.598-2.101 1.343-2.846L6.686 6.686C4.182 9.19 2.51 12.521 2.102 16.233l11.186 1.243zm9.425 1.048c-.122 1.104-.598 2.101-1.343 2.846l7.944 7.944c2.504-2.504 4.176-5.835 4.584-9.547l-11.185-1.243z",}));el.appendChild(svg["path"]("M18.527 22.712l1.251 11.183c3.707-.41 7.034-2.081 9.536-4.582l-7.944-7.944c-.745.744-1.741 1.22-2.843 1.343zm-1.023-9.427L16.325 2.089c-3.749.39-7.114 2.073-9.639 4.598l7.944 7.944c.752-.751 1.759-1.229 2.874-1.346z", {["fill"]: "#F5F8FA",["d"]: "M18.527 22.712l1.251 11.183c3.707-.41 7.034-2.081 9.536-4.582l-7.944-7.944c-.745.744-1.741 1.22-2.843 1.343zm-1.023-9.427L16.325 2.089c-3.749.39-7.114 2.073-9.639 4.598l7.944 7.944c.752-.751 1.759-1.229 2.874-1.346z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};