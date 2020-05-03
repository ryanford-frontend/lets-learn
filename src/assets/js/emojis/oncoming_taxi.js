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
				el.appendChild(svg["path"]("M34 33c0 1.104-.896 2-2 2h-3c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h3c1.104 0 2 .896 2 2v8zM9 33c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h3c1.104 0 2 .896 2 2v8z", {["fill"]: "#292F33",["d"]: "M34 33c0 1.104-.896 2-2 2h-3c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h3c1.104 0 2 .896 2 2v8zM9 33c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h3c1.104 0 2 .896 2 2v8z",}));el.appendChild(svg["path"]("M9 5c4-1 14-1 18 0 3.881.97 5 11 5 11s2 0 2 4v8s.123 4-4 4H6c-4.123 0-4-4-4-4v-8s0-4 2-4C4 16 5.12 5.97 9 5z", {["fill"]: "#FFCC4D",["d"]: "M9 5c4-1 14-1 18 0 3.881.97 5 11 5 11s2 0 2 4v8s.123 4-4 4H6c-4.123 0-4-4-4-4v-8s0-4 2-4C4 16 5.12 5.97 9 5z",}));el.appendChild(svg["path"]("M18 15c3.905 0 8.623.2 12 .561L29 10c-1-3-7-3-11-3S8 7 7 10l-1 5.561C9.377 15.2 14.095 15 18 15z", {["fill"]: "#55ACEE",["d"]: "M18 15c3.905 0 8.623.2 12 .561L29 10c-1-3-7-3-11-3S8 7 7 10l-1 5.561C9.377 15.2 14.095 15 18 15z",}));el.appendChild(svg["path"]("M5 15.5c0 .829-.671 1.5-1.5 1.5h-2C.671 17 0 16.329 0 15.5S.671 14 1.5 14h2c.829 0 1.5.671 1.5 1.5zm26 0c0 .829.672 1.5 1.5 1.5h2c.828 0 1.5-.671 1.5-1.5s-.672-1.5-1.5-1.5h-2c-.828 0-1.5.671-1.5 1.5zM11 23c0 1.657-1.343 3-3 3H7c-1.657 0-3-1.343-3-3s1.343-3 3-3h1c1.657 0 3 1.343 3 3zm21 0c0 1.657-1.344 3-3 3h-1c-1.656 0-3-1.343-3-3s1.344-3 3-3h1c1.656 0 3 1.343 3 3z", {["fill"]: "#FFCC4D",["d"]: "M5 15.5c0 .829-.671 1.5-1.5 1.5h-2C.671 17 0 16.329 0 15.5S.671 14 1.5 14h2c.829 0 1.5.671 1.5 1.5zm26 0c0 .829.672 1.5 1.5 1.5h2c.828 0 1.5-.671 1.5-1.5s-.672-1.5-1.5-1.5h-2c-.828 0-1.5.671-1.5 1.5zM11 23c0 1.657-1.343 3-3 3H7c-1.657 0-3-1.343-3-3s1.343-3 3-3h1c1.657 0 3 1.343 3 3zm21 0c0 1.657-1.344 3-3 3h-1c-1.656 0-3-1.343-3-3s1.344-3 3-3h1c1.656 0 3 1.343 3 3z",}));el.appendChild(svg["path"]("M25 22H11c-2.456 0-4.486-3.336-4.868-4.004-.274-.479-.107-1.089.372-1.363.478-.275 1.089-.108 1.364.37C8.562 18.211 10.037 20 11 20h14c.983 0 2.46-1.655 3.148-2.773.289-.471.903-.618 1.376-.328.47.29.616.905.327 1.376C29.617 18.656 27.487 22 25 22z", {["fill"]: "#FFAC33",["d"]: "M25 22H11c-2.456 0-4.486-3.336-4.868-4.004-.274-.479-.107-1.089.372-1.363.478-.275 1.089-.108 1.364.37C8.562 18.211 10.037 20 11 20h14c.983 0 2.46-1.655 3.148-2.773.289-.471.903-.618 1.376-.328.47.29.616.905.327 1.376C29.617 18.656 27.487 22 25 22z",}));el.appendChild(svg["path"]("M2 24h4v4H2zm28 0h4v4h-4z", {["fill"]: "#F4900C",["d"]: "M2 24h4v4H2zm28 0h4v4h-4z",}));el.appendChild(svg["path"]("M10 26c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2s.896-2 2-2h2c1.104 0 2 .896 2 2zm22 0c0-1.104-.896-2-2-2h-2c-1.104 0-2 .896-2 2s.896 2 2 2h2c1.104 0 2-.896 2-2z", {["fill"]: "#FFF",["d"]: "M10 26c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2s.896-2 2-2h2c1.104 0 2 .896 2 2zm22 0c0-1.104-.896-2-2-2h-2c-1.104 0-2 .896-2 2s.896 2 2 2h2c1.104 0 2-.896 2-2z",}));el.appendChild(svg["path"]("M25 26c0 1.104-.896 2-2 2H13c-1.104 0-2-.896-2-2s.896-2 2-2h10c1.104 0 2 .896 2 2z", {["fill"]: "#66757F",["d"]: "M25 26c0 1.104-.896 2-2 2H13c-1.104 0-2-.896-2-2s.896-2 2-2h10c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M22 2h-8c-1.657 0-3 1.343-3 3h14c0-1.657-1.343-3-3-3z", {["fill"]: "#FFE8B6",["d"]: "M22 2h-8c-1.657 0-3 1.343-3 3h14c0-1.657-1.343-3-3-3z",}));el.appendChild(svg["path"]("M14 3h8v2h-8z", {["fill"]: "#CCD6DD",["d"]: "M14 3h8v2h-8z",}));el.appendChild(svg["path"]("M16 4h4v1h-4z", {["fill"]: "#99AAB5",["d"]: "M16 4h4v1h-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};