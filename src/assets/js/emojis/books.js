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
				el.appendChild(svg["path"]("M15 31c0 2.209-.791 4-3 4H5c-4 0-4-14 0-14h7c2.209 0 3 1.791 3 4v6z", {["fill"]: "#553788",["d"]: "M15 31c0 2.209-.791 4-3 4H5c-4 0-4-14 0-14h7c2.209 0 3 1.791 3 4v6z",}));el.appendChild(svg["path"]("M34 33h-1V23h1c.553 0 1-.447 1-1s-.447-1-1-1H10c-4 0-4 14 0 14h24c.553 0 1-.447 1-1s-.447-1-1-1z", {["fill"]: "#9266CC",["d"]: "M34 33h-1V23h1c.553 0 1-.447 1-1s-.447-1-1-1H10c-4 0-4 14 0 14h24c.553 0 1-.447 1-1s-.447-1-1-1z",}));el.appendChild(svg["path"]("M34.172 33H11c-2 0-2-10 0-10h23.172c1.104 0 1.104 10 0 10z", {["fill"]: "#CCD6DD",["d"]: "M34.172 33H11c-2 0-2-10 0-10h23.172c1.104 0 1.104 10 0 10z",}));el.appendChild(svg["path"]("M11.5 25h23.35c-.135-1.175-.36-2-.678-2H11c-1.651 0-1.938 6.808-.863 9.188C9.745 29.229 10.199 25 11.5 25z", {["fill"]: "#99AAB5",["d"]: "M11.5 25h23.35c-.135-1.175-.36-2-.678-2H11c-1.651 0-1.938 6.808-.863 9.188C9.745 29.229 10.199 25 11.5 25z",}));el.appendChild(svg["path"]("M12 8c0 2.209-1.791 4-4 4H4C0 12 0 1 4 1h4c2.209 0 4 1.791 4 4v3z", {["fill"]: "#269",["d"]: "M12 8c0 2.209-1.791 4-4 4H4C0 12 0 1 4 1h4c2.209 0 4 1.791 4 4v3z",}));el.appendChild(svg["path"]("M31 10h-1V3h1c.553 0 1-.447 1-1s-.447-1-1-1H7C3 1 3 12 7 12h24c.553 0 1-.447 1-1s-.447-1-1-1z", {["fill"]: "#55ACEE",["d"]: "M31 10h-1V3h1c.553 0 1-.447 1-1s-.447-1-1-1H7C3 1 3 12 7 12h24c.553 0 1-.447 1-1s-.447-1-1-1z",}));el.appendChild(svg["path"]("M31.172 10H8c-2 0-2-7 0-7h23.172c1.104 0 1.104 7 0 7z", {["fill"]: "#CCD6DD",["d"]: "M31.172 10H8c-2 0-2-7 0-7h23.172c1.104 0 1.104 7 0 7z",}));el.appendChild(svg["path"]("M8 5h23.925c-.114-1.125-.364-2-.753-2H8C6.807 3 6.331 5.489 6.562 7.5 6.718 6.142 7.193 5 8 5z", {["fill"]: "#99AAB5",["d"]: "M8 5h23.925c-.114-1.125-.364-2-.753-2H8C6.807 3 6.331 5.489 6.562 7.5 6.718 6.142 7.193 5 8 5z",}));el.appendChild(svg["path"]("M20 17c0 2.209-1.791 4-4 4H6c-4 0-4-9 0-9h10c2.209 0 4 1.791 4 4v1z", {["fill"]: "#F4900C",["d"]: "M20 17c0 2.209-1.791 4-4 4H6c-4 0-4-9 0-9h10c2.209 0 4 1.791 4 4v1z",}));el.appendChild(svg["path"]("M35 19h-1v-5h1c.553 0 1-.447 1-1s-.447-1-1-1H15c-4 0-4 9 0 9h20c.553 0 1-.447 1-1s-.447-1-1-1z", {["fill"]: "#FFAC33",["d"]: "M35 19h-1v-5h1c.553 0 1-.447 1-1s-.447-1-1-1H15c-4 0-4 9 0 9h20c.553 0 1-.447 1-1s-.447-1-1-1z",}));el.appendChild(svg["path"]("M35.172 19H16c-2 0-2-5 0-5h19.172c1.104 0 1.104 5 0 5z", {["fill"]: "#CCD6DD",["d"]: "M35.172 19H16c-2 0-2-5 0-5h19.172c1.104 0 1.104 5 0 5z",}));el.appendChild(svg["path"]("M16 16h19.984c-.065-1.062-.334-2-.812-2H16c-1.274 0-1.733 2.027-1.383 3.5.198-.839.657-1.5 1.383-1.5z", {["fill"]: "#99AAB5",["d"]: "M16 16h19.984c-.065-1.062-.334-2-.812-2H16c-1.274 0-1.733 2.027-1.383 3.5.198-.839.657-1.5 1.383-1.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};