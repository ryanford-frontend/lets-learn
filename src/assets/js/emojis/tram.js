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
				el.appendChild(svg["path"]("M2 36h32L23 19H13z", {["fill"]: "#A7A9AC",["d"]: "M2 36h32L23 19H13z",}));el.appendChild(svg["path"]("M5 36h26L21 19h-6z", {["fill"]: "#58595B",["d"]: "M5 36h26L21 19h-6z",}));el.appendChild(svg["path"]("M8 36h20l-9-17h-2z", {["fill"]: "#808285",["d"]: "M8 36h20l-9-17h-2z",}));el.appendChild(svg["path"]("M28 35c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h14c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H13c-.552 0-1-.447-1-1 0-.553.448-1 1-1h10c.553 0 1 .447 1 1z", {["fill"]: "#A7A9AC",["d"]: "M28 35c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H11c-.552 0-1-.447-1-1 0-.553.448-1 1-1h14c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H13c-.552 0-1-.447-1-1 0-.553.448-1 1-1h10c.553 0 1 .447 1 1z",}));el.appendChild(svg["path"]("M9.881 23.82C11.006 25.046 12.498 26 14 26h8c1.501 0 2.994-.955 4.119-2.18l-2.549-3.938c-1.359.097-3.148.118-5.57.118-2.465 0-4.274.023-5.642-.008L9.881 23.82z", {["fill"]: "#58595B",["d"]: "M9.881 23.82C11.006 25.046 12.498 26 14 26h8c1.501 0 2.994-.955 4.119-2.18l-2.549-3.938c-1.359.097-3.148.118-5.57.118-2.465 0-4.274.023-5.642-.008L9.881 23.82z",}));el.appendChild(svg["path"]("M19 2c0 .552-.448 1-1 1s-1-.448-1-1V1c0-.552.448-1 1-1s1 .448 1 1v1z", {["fill"]: "#414042",["d"]: "M19 2c0 .552-.448 1-1 1s-1-.448-1-1V1c0-.552.448-1 1-1s1 .448 1 1v1z",}));el.appendChild(svg["path"]("M22 4c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2z", {["fill"]: "#6D6E71",["d"]: "M22 4c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M28 18c0 2.209-3.791 5-6 5h-8c-2.209 0-6-2.791-6-5V7c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v11z", {["fill"]: "#D1D3D4",["d"]: "M28 18c0 2.209-3.791 5-6 5h-8c-2.209 0-6-2.791-6-5V7c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v11z",}));el.appendChild(svg["path"]("M25 16c0 2.209-1.791 4-4 4h-6c-2.209 0-4-1.791-4-4v-5c0-2.209 1.791-4 4-4h6c2.209 0 4 1.791 4 4v5z", {["fill"]: "#808285",["d"]: "M25 16c0 2.209-1.791 4-4 4h-6c-2.209 0-4-1.791-4-4v-5c0-2.209 1.791-4 4-4h6c2.209 0 4 1.791 4 4v5z",}));el.appendChild(svg["path"]("M15 15h6c2.209 0 4-1.791 4-4V9H11v2c0 2.209 1.791 4 4 4z", {["fill"]: "#55ACEE",["d"]: "M15 15h6c2.209 0 4-1.791 4-4V9H11v2c0 2.209 1.791 4 4 4z",}));el.appendChild(svg["path"]("M18 20c-7 0-8.754-1.801-10-3.242V18c0 2.209 3 6 6 6h8c3 0 6-3.791 6-6v-1.891C26.754 17.839 25 20 18 20z", {["fill"]: "#5C913B",["d"]: "M18 20c-7 0-8.754-1.801-10-3.242V18c0 2.209 3 6 6 6h8c3 0 6-3.791 6-6v-1.891C26.754 17.839 25 20 18 20z",}));el.appendChild(svg["path"]("M15 17.5c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5 0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5zm9 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5z", {["fill"]: "#FFD983",["d"]: "M15 17.5c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5 0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5zm9 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5z",}));el.appendChild(svg["path"]("M25 9V7c0-1.104-.896-2-2-2H13c-1.104 0-2 .896-2 2v2h14z", {["fill"]: "#292F33",["d"]: "M25 9V7c0-1.104-.896-2-2-2H13c-1.104 0-2 .896-2 2v2h14z",}));el.appendChild(svg["path"]("M21 7c0 .552-.447 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1h4c.553 0 1 .448 1 1z", {["fill"]: "#6D6E71",["d"]: "M21 7c0 .552-.447 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1h4c.553 0 1 .448 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};