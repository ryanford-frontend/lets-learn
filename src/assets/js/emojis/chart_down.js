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
				el.appendChild(svg["path"]("M31 2H5C3.343 2 2 3.343 2 5v26c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3V5c0-1.657-1.343-3-3-3z", {["fill"]: "#CCD6DD",["d"]: "M31 2H5C3.343 2 2 3.343 2 5v26c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3V5c0-1.657-1.343-3-3-3z",}));el.appendChild(svg["path"]("M31 1H5C2.791 1 1 2.791 1 5v26c0 2.209 1.791 4 4 4h26c2.209 0 4-1.791 4-4V5c0-2.209-1.791-4-4-4zm0 2c1.103 0 2 .897 2 2v4h-6V3h4zm-4 16h6v6h-6v-6zm0-2v-6h6v6h-6zM25 3v6h-6V3h6zm-6 8h6v6h-6v-6zm0 8h6v6h-6v-6zM17 3v6h-6V3h6zm-6 8h6v6h-6v-6zm0 8h6v6h-6v-6zM3 5c0-1.103.897-2 2-2h4v6H3V5zm0 6h6v6H3v-6zm0 8h6v6H3v-6zm2 14c-1.103 0-2-.897-2-2v-4h6v6H5zm6 0v-6h6v6h-6zm8 0v-6h6v6h-6zm12 0h-4v-6h6v4c0 1.103-.897 2-2 2z", {["fill"]: "#E1E8ED",["d"]: "M31 1H5C2.791 1 1 2.791 1 5v26c0 2.209 1.791 4 4 4h26c2.209 0 4-1.791 4-4V5c0-2.209-1.791-4-4-4zm0 2c1.103 0 2 .897 2 2v4h-6V3h4zm-4 16h6v6h-6v-6zm0-2v-6h6v6h-6zM25 3v6h-6V3h6zm-6 8h6v6h-6v-6zm0 8h6v6h-6v-6zM17 3v6h-6V3h6zm-6 8h6v6h-6v-6zm0 8h6v6h-6v-6zM3 5c0-1.103.897-2 2-2h4v6H3V5zm0 6h6v6H3v-6zm0 8h6v6H3v-6zm2 14c-1.103 0-2-.897-2-2v-4h6v6H5zm6 0v-6h6v6h-6zm8 0v-6h6v6h-6zm12 0h-4v-6h6v4c0 1.103-.897 2-2 2z",}));el.appendChild(svg["path"]("M31.002 33c-.721 0-1.416-.39-1.774-1.072l-9.738-18.59-6.076 6.076c-.446.447-1.076.66-1.705.564-.626-.092-1.171-.474-1.47-1.03l-7-13c-.524-.973-.16-2.186.813-2.709.975-.523 2.186-.16 2.709.812l5.726 10.633 6.1-6.099c.45-.45 1.089-.659 1.716-.563.629.096 1.175.485 1.47 1.049l11 21c.513.979.135 2.187-.844 2.699-.297.157-.614.23-.927.23z", {["fill"]: "#3B94D9",["d"]: "M31.002 33c-.721 0-1.416-.39-1.774-1.072l-9.738-18.59-6.076 6.076c-.446.447-1.076.66-1.705.564-.626-.092-1.171-.474-1.47-1.03l-7-13c-.524-.973-.16-2.186.813-2.709.975-.523 2.186-.16 2.709.812l5.726 10.633 6.1-6.099c.45-.45 1.089-.659 1.716-.563.629.096 1.175.485 1.47 1.049l11 21c.513.979.135 2.187-.844 2.699-.297.157-.614.23-.927.23z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};