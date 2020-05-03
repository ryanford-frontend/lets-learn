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
				el.appendChild(svg["path"]("M33 19c1.187 0 2 .786 2 2 0 1.073-.983 2-2 2H22c-1.496 0-2-.813-2-2 0-.565.632-1.492 1-2l8-12h-7c-1.128 0-2-.843-2-2 0-1.073.929-2 2-2h11c1.639 0 2 1.012 2 2 0 .621-.635 1.519-1 2l-8 12h7zm-16 5c.633 0 1 .353 1 1 0 .573-.458 1-1 1h-6c-.798 0-1-.367-1-1 0-.301.337-.729.533-1L15 18h-4c-.602 0-1-.384-1-1 0-.573.428-1 1-1h6c.874 0 1 .473 1 1 0 .331-.338.877-.533 1.133L13 24h4zm-9 7c.633 0 1 .353 1 1 0 .573-.458 1-1 1H2c-.798 0-1-.367-1-1 0-.301.337-.729.533-1L6 25H2c-.602 0-1-.384-1-1 0-.572.428-1 1-1h6c.874 0 1 .473 1 1 0 .331-.338.877-.533 1.133L4 31h4z", {["fill"]: "#4289C1",["d"]: "M33 19c1.187 0 2 .786 2 2 0 1.073-.983 2-2 2H22c-1.496 0-2-.813-2-2 0-.565.632-1.492 1-2l8-12h-7c-1.128 0-2-.843-2-2 0-1.073.929-2 2-2h11c1.639 0 2 1.012 2 2 0 .621-.635 1.519-1 2l-8 12h7zm-16 5c.633 0 1 .353 1 1 0 .573-.458 1-1 1h-6c-.798 0-1-.367-1-1 0-.301.337-.729.533-1L15 18h-4c-.602 0-1-.384-1-1 0-.573.428-1 1-1h6c.874 0 1 .473 1 1 0 .331-.338.877-.533 1.133L13 24h4zm-9 7c.633 0 1 .353 1 1 0 .573-.458 1-1 1H2c-.798 0-1-.367-1-1 0-.301.337-.729.533-1L6 25H2c-.602 0-1-.384-1-1 0-.572.428-1 1-1h6c.874 0 1 .473 1 1 0 .331-.338.877-.533 1.133L4 31h4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};